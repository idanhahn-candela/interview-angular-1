import { Component, OnInit } from '@angular/core';
import {DBService} from '../db.service';
import {DBHttpService} from '../dbhttp.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  customerName;

  seminarName: Observable<any>;


  constructor(private _dbS: DBService, private _dbHttpS: DBHttpService) {


    this.seminarName = _dbS.getSeminarName();

    // Question 1:
    // -----------

    // Question 2:
    // -----------

  }

  ngOnInit() {
  }


}
