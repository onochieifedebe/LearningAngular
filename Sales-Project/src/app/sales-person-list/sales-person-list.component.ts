import { Component, OnInit } from '@angular/core';
import { SalesPerson } from './sales-person';

@Component({
  selector: 'app-sales-person-list',
  templateUrl: './sales-person-list-bootstrap.component.html',
  styleUrls: ['./sales-person-list.component.css'],
})
export class SalesPersonListComponent implements OnInit {
  salesPersonList: SalesPerson[] = [
    new SalesPerson('Anup', 'Kumar', 'anup.kumar@theifedebegroup.com', 50000),
    new SalesPerson('John', 'Doe', 'john.doe@theifedebegroup.com', 61230),
    new SalesPerson('Clay', 'Murphy', 'clay.murph@theifedebegroup.com', 37900),
    new SalesPerson('Mai', 'Thong', 'mai.thong@theifedebegroup.com', 72000),
  ];

  constructor() {}

  ngOnInit(): void {}
}
