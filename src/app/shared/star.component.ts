import {Component, EventEmitter, Input, OnChanges, Output} from '@angular/core';


@Component({
  // tslint:disable-next-line:component-selector
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss']
})
export class StarComponent implements OnChanges {
  @Input() rating: number;
  starWidth: number;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 / 5;
  }

  onClick(): void {
  this.ratingClicked.emit(`Ranking ${this.rating} został kliknięty`);
  }


}
