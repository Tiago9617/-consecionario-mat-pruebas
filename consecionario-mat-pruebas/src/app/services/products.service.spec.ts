import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { ProductsService } from './products.service';
import { Product } from '../models/product.model';

fdescribe('ProductsService', () => {
  let service: ProductsService;
  let httpMock: HttpTestingController;


  beforeEach(() => {


    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ProductsService]
    });

    service = TestBed.inject(ProductsService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify(); // Verificar que no hay peticiones pendientes
  });
  //Todos los productos
 /* it('deberia traer todos los productos ', () => {

    const products: Product[] = [
      {
        image: "./assets/Images/BMW/cosySec(2).jpg",
        name: "BMW i3s Atelier",
        price: 187900000,
        describe: "Motor electrico",
        marca: "BMW"
      },
      {
        image: "./assets/Images/KIA/KIAStonic.jpg",
        name: "Kia Stonic",
        price: 76290000,
        describe: "Hibrido",
        marca: "Kia"
      },
      {
        image: "./assets/Images/KIA/KiaSportage.jpg",
        name: "Kia KiaSportage",
        price: 97490000,
        describe: "Motor a combustion",
        marca: "Kia"
      },
      {
        image: "./assets/Images/BMW/cosySec.jpg",
        name: "BMW M240i Cabrio",
        price: 179900000,
        describe: "Motor a combustion",
        marca: "BMW"
      },
      {
        image: "./assets/Images/BMW/cosySec(1).jpg",
        name: "BMW 330e iPerformance",
        price: 184900000,
        describe: "Hibrido",
        marca: "BMW"
      },
      {
        image: "./assets/Images/KIA/kiacerato.jpg",
        name: "Kia cerato",
        price: 97490000,
        describe: "Motor a combustion",
        marca: "Kia"
      },
      {
        image: "./assets/Images/PORCHE/Cayenne.jpeg",
        name: "PORCHE CAYENNE",
        price: 218780000,
        describe: "Motor a combustion",
        marca: "Porche"
      },
      {
        image: "./assets/Images/PORCHE/Taycan.jpeg",
        name: "Porche Taycan",
        price: 770000000,
        describe: "Motor Electrico",
        marca: "Porche"
      },
      {
        image: "./assets/Images/PORCHE/Macan.jpeg",
        name: "PORCHE MACAN",
        price: 549900000,
        describe: "Motor a combustion",
        marca: "Porche"
      }
    ];
    service.getAllProducts().subscribe(data => {
      expect(data).toEqual(products);
    });

    const req = httpMock.expectOne('/api/cars');
    expect(req.request.method).toBe('GET');
    req.flush(products);
  });*/
  it('no deberia traer datos para el rango de '+' -'+1+'y '+2000000000, () => {
    const product:Product[] = []
    service.getFilterByPrice(-1,2000000000).subscribe(data => {
      expect(data).toEqual(product);
    });
    const req = httpMock.expectOne('/api/search?initialPrice=-1&finalPrice=2000000000');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });
  it('deberia traer todos los productos '+0+'y '+2000000000, () => {
    const products: Product[] = [
      {
        image: "./assets/Images/BMW/cosySec(2).jpg",
        name: "BMW i3s Atelier",
        price: 187900000,
        describe: "Motor electrico",
        marca: "BMW"
      },
      {
        image: "./assets/Images/KIA/KIAStonic.jpg",
        name: "Kia Stonic",
        price: 76290000,
        describe: "Hibrido",
        marca: "Kia"
      },
      {
        image: "./assets/Images/KIA/KiaSportage.jpg",
        name: "Kia KiaSportage",
        price: 97490000,
        describe: "Motor a combustion",
        marca: "Kia"
      },
      {
        image: "./assets/Images/BMW/cosySec.jpg",
        name: "BMW M240i Cabrio",
        price: 179900000,
        describe: "Motor a combustion",
        marca: "BMW"
      },
      {
        image: "./assets/Images/BMW/cosySec(1).jpg",
        name: "BMW 330e iPerformance",
        price: 184900000,
        describe: "Hibrido",
        marca: "BMW"
      },
      {
        image: "./assets/Images/KIA/kiacerato.jpg",
        name: "Kia cerato",
        price: 97490000,
        describe: "Motor a combustion",
        marca: "Kia"
      },
      {
        image: "./assets/Images/PORCHE/Cayenne.jpeg",
        name: "PORCHE CAYENNE",
        price: 218780000,
        describe: "Motor a combustion",
        marca: "Porche"
      },
      {
        image: "./assets/Images/PORCHE/Taycan.jpeg",
        name: "Porche Taycan",
        price: 770000000,
        describe: "Motor Electrico",
        marca: "Porche"
      },
      {
        image: "./assets/Images/PORCHE/Macan.jpeg",
        name: "PORCHE MACAN",
        price: 549900000,
        describe: "Motor a combustion",
        marca: "Porche"
      }
    ];
    service.getFilterByPrice(0,2000000000).subscribe(data => {
      expect(data).toEqual(products);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=0&finalPrice=2000000000');
    expect(req.request.method).toBe('GET');
    req.flush(products);
  });
  /*it('deberia traer todos los productos KIA '+76290000+' y'+97490000, () => {
    const product:Product[] = [{
      image: "./assets/Images/KIA/KIAStonic.jpg",
      name: "Kia Stonic",
      price: 76290000,
      describe: "Hibrido",
      marca: "Kia"
    },
    {
      image: "./assets/Images/KIA/KiaSportage.jpg",
      name: "Kia KiaSportage",
      price: 97490000,
      describe: "Motor a combustion",
      marca: "Kia"
    },
    {
      image: "./assets/Images/KIA/kiacerato.jpg",
      name: "Kia cerato",
      price: 97490000,
      describe: "Motor a combustion",
      marca: "Kia"
    }]
    service.getFilterByPrice(76290000,97490000).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=76290000&finalPrice=97490000');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+2000+' y'+2000000001, () => {
      const product:Product[] = []
      service.getFilterByPrice(2000,2000000001).subscribe(data => {
        expect(data).toEqual(product);
      });

      const req = httpMock.expectOne('/api/search?initialPrice=2000&finalPrice=2000000001');
      expect(req.request.method).toBe('GET');
      req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+0+' y'+0, () => {
    const product:Product[] = []
    service.getFilterByPrice(0,0).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=0&finalPrice=0');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+2000000000+' y'+2000000000, () => {
    const product:Product[] = []
    service.getFilterByPrice(2000000000,2000000000).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=2000000000&finalPrice=2000000000');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+1001+' y'+1000, () => {
    const product:Product[] = []
    service.getFilterByPrice(1001,1000).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=1001&finalPrice=1000');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+0+' y'+'-'+1, () => {
    const product:Product[] = []
    service.getFilterByPrice(0,-1).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=0&finalPrice=-1');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
  /*it('no deberia traerme ningun producto '+' -'+1+' y'+ 2000000001, () => {
    const product:Product[] = []
    service.getFilterByPrice(0,-1).subscribe(data => {
      expect(data).toEqual(product);
    });

    const req = httpMock.expectOne('/api/search?initialPrice=0&finalPrice=-1');
    expect(req.request.method).toBe('GET');
    req.flush(product);
  });*/
});
