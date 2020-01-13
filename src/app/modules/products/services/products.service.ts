import { AngularFireDatabase } from '@angular/fire/database';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private db: AngularFireDatabase) { }

  getAllProd(){
    return this.db.list('/products').snapshotChanges().pipe(
      map(change =>change.map(c=>({
        key:c.payload.key, ...c.payload.val()
      }))
    ))
  }
}
