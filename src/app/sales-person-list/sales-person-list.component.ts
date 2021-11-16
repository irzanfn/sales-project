import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css']
})
export class SalesPersonListComponent implements OnInit {
  // create an array of objects
  salesPersonList: SalesPerson[] = [
    new SalesPerson("Irzan", "Fajari", "irzanfajari@gmail.com",30000),
    new SalesPerson("Pradista", "Aprilia", "apriliapradista@gmail.com",40000),
    new SalesPerson("Taufik", "Eka", "tekayana@gmail.com",10000),
    new SalesPerson("Adam", "Ilhami", "adamilhami@gmail.com",50000),
    new SalesPerson("Trhea", "Madia", "trheamadia@gmail.com",60000)
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
