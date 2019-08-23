import { Injectable } from '@angular/core';
import {AngularFireDatabase} from '@angular/fire/database';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DBService {

  seminarName: Observable<any>;
  seminarDate: Observable<any>;


  constructor(private db: AngularFireDatabase) {

    this.seminarName = db.object('part1/Seminar/name').valueChanges();

    // Question 1:
    // -----------


  }


  getSeminarName(){
    return this.seminarName;
  }

  // Question 1:
  // -----------

}
