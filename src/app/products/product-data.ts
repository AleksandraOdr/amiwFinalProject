import { InMemoryDbService } from 'angular-in-memory-web-api';

import { IProduct } from './product';

export class ProductData implements InMemoryDbService {

  createDb() {
    const products: IProduct[] = [
      {
        id: 1,
        productName: 'Grabie ogrodowe',
        productCode: 'GDN-0011',
        releaseDate: '1 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Materiał: wytrzymałe tworzywo sztuczne\nCiężar: 700 g\nDługość całkowita: 180 cm \nSzerokość głowicy: 61 cm\nIlość taśm (zębów): 24 szt\nDługość głowicy: 54 cm\nDługość trzonka: 124 cm\nTrzonek lakierowany sosnowy',
        price: 19.95,
        starRating: 3.2,
        imageUrl: 'assets/images/leaf_rake.jpg',
        tags: ['grabie', 'ogrodowe']
      },
      {
        id: 2,
        productName: 'Lalka Amy',
        productCode: 'GDN-0013',
        releaseDate: '28 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Lalka wykonana na szydełku.\nWypełnienie antyalergiczne.\nWłóczka 100 % bawełna.\nWysokość lalki 30cm.',
        price: 50.00,
        starRating: 4.0,
        imageUrl: 'assets/images/doll_amy.jpg'
      },
      {
        id: 3,
        productName: 'Lalka Biedronka',
        productCode: 'GDN-0015',
        releaseDate: '17 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Lalka wykonana na szydełku.\nWypełnienie antyalergiczne.\nWłóczka 100 % bawełna.\nWysokość lalki 30cm.',
        price: 50.00,
        starRating: 4.9,
        imageUrl: 'assets/images/doll_ladybug.png'
      },
      {
        id: 4,
        productName: 'Lalka Kopciuszek',
        productCode: 'GDN-0017',
        releaseDate: '20 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Lalka wykonana na szydełku.\nWypełnienie antyalergiczne.\nWłóczka 100 % bawełna.\nWysokość lalki 30cm.',
        price: 50.00,
        starRating: 4.8,
        imageUrl: 'assets/images/doll_cinderella.jpg'
      },
      {
        id: 5,
        productName: 'Lalka Roszpunka',
        productCode: 'GDN-0021',
        releaseDate: '20 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Lalka wykonana na szydełku.\nWypełnienie antyalergiczne.\nWłóczka 100 % bawełna.\nWysokość lalki 30cm.',
        price: 50.00,
        starRating: 4.5,
        imageUrl: 'assets/images/doll_rapunzel.jpg'
      },
      {
        id: 6,
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
        id: 7,
        productName: 'Młotek',
        productCode: 'TBX-0048',
        releaseDate: '19 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Ścisłe połączenie pomiędzy obuchem i trzonkiem.\ngrafitowy rdzeń trzonka chroni przed złamaniem.\n10 x wytrzymalszy niż drewniany trzonek.',
        price: 78.99,
        starRating: 4.8,
        imageUrl: 'assets/images/hammer.jpg'
      },
      {
        id: 8,
        productName: 'Piła ręczna',
        productCode: 'TBX-0022',
        releaseDate: '13 Marca 2020',
        // tslint:disable-next-line:max-line-length
        description: 'Długość piły -  450 mm.\n7 zębów / cal (7T/8P).\nTrójstronnie ostrzone.\nHartowane zęby.\nUchwyt dwukompozytowy.\nDo drewna suchego i mokrego.',
        price: 17.95,
        starRating: 3.7,
        imageUrl: 'assets/images/saw.jpg'
      },
      {
        id: 9,
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
