import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-country',
  templateUrl: './table-country.component.html',
  styleUrls: ['./table-country.component.css']
})
export class TableCountryComponent implements OnInit {
  @Input() countries: any[] = []
  
  constructor() { }

  ngOnInit(): void {
  }

}
