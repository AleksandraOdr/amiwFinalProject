import {Component, OnInit, AfterViewInit, OnDestroy, ViewChildren, ElementRef} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, FormArray, Validators, FormControlName} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

import {Observable, Subscription, fromEvent, merge} from 'rxjs';
import {debounceTime} from 'rxjs/operators';

import {IProduct} from './product';
import {ProductService} from './product.service';

import {NumberValidators} from '../shared/number.validator';
import {GenericValidator} from '../shared/generic-validator';

@Component({
  templateUrl: './product-edit.component.html'
})
export class ProductEditComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChildren(FormControlName, {read: ElementRef}) formInputElements: ElementRef[];

  pageTitle = 'Nowy Produkt';
  errorMessage: string;
  productForm: FormGroup;

  product: IProduct;
  private sub: Subscription;
  displayMessage: { [key: string]: string } = {};
  private validationMessages: { [key: string]: { [key: string]: string } };
  private genericValidator: GenericValidator;

  get tags(): FormArray {
    return this.productForm.get('tags') as FormArray;
  }

  constructor(private fb: FormBuilder,
              private route: ActivatedRoute,
              private router: Router,
              private productService: ProductService) {
    this.validationMessages = {
      productName: {
        required: 'Nazwa produktu jest wymagana.',
        minlength: 'Nazwa produktu musi zawierać co najmniej 3 znaki',
        maxlength: 'Nazwa produktu nie może przekraczać 50 znaków.'
      },
      productCode: {
        required: 'Kod produktu jest wymagany.'
      },
      starRating: {
        range: 'Oceń produkt od 1.00 (najniższa ocena) do 5.00 (najwyższa ocena).'
      },
      price: {
        required: 'Cena produktu jest wymagana.',
        range: 'Cena produktu nie może być ujemna.'
      }
    };

    // Define an instance of the validator for use with this form,
    // passing in this form's set of validation messages.
    this.genericValidator = new GenericValidator(this.validationMessages);
  }

  ngOnInit(): void {
    this.productForm = this.fb.group({
      productName: ['', [Validators.required,
        Validators.minLength(3),
        Validators.maxLength(50)]],
      productCode: ['', Validators.required],
      starRating: ['', NumberValidators.range(1, 5)],
      price: ['', [Validators.required, NumberValidators.range(0, 1000000000)]],
      tags: this.fb.array([]),
      description: ''
    });

    // Read the product Id from the route parameter
    this.sub = this.route.paramMap.subscribe(
      params => {
        const id = +params.get('id');
        this.getProduct(id);
      }
    );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  ngAfterViewInit(): void {
    const controlBlurs: Observable<any>[] = this.formInputElements
      .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));
    merge(this.productForm.valueChanges, ...controlBlurs).pipe(
      debounceTime(800)
    ).subscribe(value => {
      this.displayMessage = this.genericValidator.processMessages(this.productForm);
    });
  }

  addTag(): void {
    this.tags.push(new FormControl());
  }

  deleteTag(index: number): void {
    this.tags.removeAt(index);
    this.tags.markAsDirty();
  }

  getProduct(id: number): void {
    this.productService.getProduct(id)
      .subscribe({
        next: (product: IProduct) => this.displayProduct(product),
        error: err => this.errorMessage = err
      });
  }

  displayProduct(product: IProduct): void {
    if (this.productForm) {
      this.productForm.reset();
    }
    this.product = product;
    if (this.product.id === 0) {
      this.pageTitle = 'Dodaj Produkt';
    } else {
      this.pageTitle = `Edycja Produktu: ${this.product.productName}`;
    }

    // Update the data on the form
    this.productForm.patchValue({
      productName: this.product.productName,
      productCode: this.product.productCode,
      price: this.product.price,
      starRating: this.product.starRating,
      description: this.product.description
    });
    this.productForm.setControl('tags', this.fb.array(this.product.tags || []));
  }

  deleteProduct(): void {
    if (this.product.id === 0) {
      // Don't delete, it was never saved.
      this.onSaveComplete();
    } else {
      if (confirm(`Czy na pewno chcesz usunąć produkt: ${this.product.productName}?`)) {
        this.productService.deleteProduct(this.product.id)
          .subscribe({
            next: () => this.onSaveComplete(),
            error: err => this.errorMessage = err
          });
      }
    }
  }

  saveProduct(): void {
    if (this.productForm.valid) {
      if (this.productForm.dirty) {
        const p = {...this.product, ...this.productForm.value};

        if (p.id === 0) {
          this.productService.createProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        } else {
          this.productService.updateProduct(p)
            .subscribe({
              next: () => this.onSaveComplete(),
              error: err => this.errorMessage = err
            });
        }
      } else {
        this.onSaveComplete();
      }
    } else {
      this.errorMessage = 'Popraw błędy.';
    }
  }

  onSaveComplete(): void {
    // Reset the form to clear the flags
    this.productForm.reset();
    this.router.navigate(['/products']);
  }
}
