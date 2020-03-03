import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: IProduct[] = [
      {
        id: 1,
        productName: 'Grabie ogrodowe',
        productCode: 'GDN-0011',
        releaseDate: '15 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Materiał: wytrzymałe tworzywo sztuczne\nCiężar: 700 g\nDługość całkowita: 180 cm \nSzerokość głowicy: 61 cm\nIlość taśm (zębów): 24 szt\nDługość głowicy: 54 cm\nDługość trzonka: 124 cm\nTrzonek lakierowany sosnowy',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/leaf_rake.jpg',
        tags: ['grabie', 'ogrodowe']
      },
      {
        id: 2,
        productName: 'Taczka ogrodowa',
        productCode: 'GDN-0023',
        releaseDate: '15 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Wytrzymała rama malowana proszkowo.\nMocna konstrukcja z dodatkowym podparciem misy.\nDwa mocne, sześciopłócienne koła z łożyskami wałeczkowymi.\nTłoczona, ocynkowana misa o pojemności 130 l.\nUchwyty z wytrzymałego polietylenu.\nWystawiamy deklarację REACH - tworzywo nie zawiera substancji niebezpiecznych.',
        price: 232.99,
        starRating: 4.2,
        imageUrl: 'assets/images/garden_cart.jpg'
      },
      {
        id: 3,
        productName: 'Młotek',
        productCode: 'TBX-0048',
        releaseDate: '15 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Ścisłe połączenie pomiędzy obuchem i trzonkiem.\ngrafitowy rdzeń trzonka chroni przed złamaniem.\n10 x wytrzymalszy niż drewniany trzonek.',
        price: 78.99,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.jpg'
      },
      {
        id: 4,
        productName: 'Piła ręczna',
        productCode: 'TBX-0022',
        releaseDate: '15 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Długość piły -  450 mm.\n7 zębów / cal (7T/8P).\nTrójstronnie ostrzone.\nHartowane zęby.\nUchwyt dwukompozytowy.\nDo drewna suchego i mokrego.',
        price: 17.95,
        starRating: 3.7,
        imageUrl: 'assets/images/saw.jpg'
      },
      {
        id: 5,
        productName: 'Pad XBOX ONE',
        productCode: 'GMG-0042',
        releaseDate: '15 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Przeznaczenie: Xbox One, Xbox One S, Xbox One X.\nInterfejs Bezprzewodowy.\nZastosowane technologie Wi-Fi.\nZmienia kolor w zależności od kąta patrzenia z niebieskiego na fioletowy.\nZasilanie: 2 paluszki AA.',
        price: 199.99,
        starRating: 4.6,
        imageUrl: 'assets/images/xbox-controller.jpg'
      }
    ];
    return { products };
  }
}
