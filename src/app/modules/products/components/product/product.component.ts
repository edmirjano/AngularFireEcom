import { ProductsService } from './../../services/products.service';
import { CategoriesService } from './../../../common/services/categories.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { mergeMap, map } from 'rxjs/operators';
import { Subscriber, Subscription } from 'rxjs';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit,OnDestroy {

  categories: any[];
  products: any[];
  sub: Subscription;
  constructor(private servCats: CategoriesService, private servProds: ProductsService) { }

  ngOnInit() {
    this.sub = this.servCats.getAllCats().pipe(
      mergeMap((categoires) => this.servProds.getAllProd().pipe(
        map((prods) => [categoires, prods])
      ))).subscribe(([categoires, prods]) => {
        this.categories = categoires;
        this.products = prods;
        console.log(this.categories);
      });
  }
  getproductByCat(key) {

    return this.products.filter(prod => prod.category == key)
  } 
  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }


}
