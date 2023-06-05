import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {


  tableHeaderCols = [
    {
      key: 'id',
      value: 'Id'
    },
    {
      key: 'firstName',
      value: 'First Name'
    },
    {
      key: 'lastName',
      value: 'Last Name'
    },
    {
      key: 'actions',
      value: 'Actions'
    },
  ]

  tableData = [
    {
      key: 'id',
      value: 1
    },
    {
      key: 'firstName',
      value: 'Liana'
    },
    {
      key: 'lastName',
      value: 'Nersisyan'
    },
    {
      key: 'actions',
      value: 'sadasd'
    },
    {
      key: 'id',
      value: 1
    },
  ]
  
  ngOnInit(): void {
    // dataSource = ELEMENT_DATA;    
  }
}
