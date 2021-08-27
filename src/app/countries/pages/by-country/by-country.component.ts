import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-by-country',
  templateUrl: './by-country.component.html',
  styles: [
  ]
})
export class ByCountryComponent implements OnInit {
  termino: string = ''
  isError: boolean = false
  showList: boolean = false
  countries: [] = []
  countriesList: any[] = []

  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino) {
    this.isError = false
    this.showList = false
    this.countryService.search_country(termino)
      .subscribe((res) => {
        console.log(res);
        this.countries = res
      },(err) => {
        this.isError = true
        this.countries = []
      })
  }

  sugerencias(termino: string){
    this.isError = false
    this.showList = true
    this.termino = termino
    this.countryService.search_country(termino)
    .subscribe(res => this.countriesList = res.splice(0,5))
  }

}
