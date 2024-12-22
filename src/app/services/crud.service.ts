import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Burger } from '../models/burger.model';
import { Observable, map } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CrudService {

  private collectionName = 'burger';

  constructor(private firestore: AngularFirestore) {}

  createBurger(Burger: Burger): Promise<any> {
    return this.firestore.collection(this.collectionName).add(Burger);
  }

  getAllBurgers(): Observable<Burger[]> {
    return this.firestore.collection<Burger>(this.collectionName).valueChanges({ idField: 'id' });
  }

  updateBurger(Burger: Burger): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(Burger.id).update(Burger);
  }

  deleteBurger(id: string): Promise<void> {
    return this.firestore.collection(this.collectionName).doc(id).delete();
  }

  getBurgerById(id: string): Observable<Burger | null> {
    return this.firestore.collection<Burger>(this.collectionName)
      .doc(id)
      .valueChanges()
      .pipe(
        map(burger => burger || null)
      );
  }
  
}
