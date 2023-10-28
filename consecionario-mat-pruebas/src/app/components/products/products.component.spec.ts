import { ComponentFixture, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { ProductsComponent } from './products.component';
import { DataService } from '../services/data.service';
import { ProductsService } from 'src/app/services/products.service';

fdescribe('ProductsComponent', () => {
  let component: ProductsComponent;
  let fixture: ComponentFixture<ProductsComponent>;
  let mockDataService: any;
  let mockProductsService: any;

  beforeEach(async () => {
    mockDataService = jasmine.createSpyObj(['getProductsUser', 'addProduct', 'getTotal']);
    mockProductsService = jasmine.createSpyObj(['getAllProducts', 'getBrands', 'getFilterByPrice']);

    await TestBed.configureTestingModule({
      declarations: [ProductsComponent],
      providers: [
        { provide: DataService, useValue: mockDataService },
        { provide: ProductsService, useValue: mockProductsService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductsComponent);
    component = fixture.componentInstance;

    mockDataService.getProductsUser.and.returnValue([]); // valores iniciales
    mockProductsService.getAllProducts.and.returnValue(of([])); // valores iniciales
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should load user products on init', () => {
    component.ngOnInit();
    expect(mockDataService.getProductsUser).toHaveBeenCalled();
  });

  it('should load all products from service on init', () => {
    component.ngOnInit();
    expect(mockProductsService.getAllProducts).toHaveBeenCalled();
  });

  it('should filter by brand', () => {
    const mockFilteredProducts = [{
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
    }]; // tu estructura de datos aquí
    mockProductsService.getBrands.and.returnValue(of(mockFilteredProducts));
    component.getInfoMarca();
    expect(mockProductsService.getBrands).toHaveBeenCalled();
    expect(component.FilterProducts).toEqual(mockFilteredProducts);
  });

  // ... puedes continuar con más casos de prueba, como filtrar por precio, limpiar filtros, añadir al carrito, etc.

});
