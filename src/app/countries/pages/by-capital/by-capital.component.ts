import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-capital',
  templateUrl: './by-capital.component.html',
  styles: [
  ]
})
export class ByCapitalComponent implements OnInit {
  
  termino: string = ''
  isError: boolean = false
  countries: [] = []
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  buscar(termino) {
    this.isError = false
    this.countryService.search_capital(termino)
      .subscribe((res) => {
        console.log(res);
        this.countries = res
      }, (err) => {
        this.isError = true
        this.countries = []
      })
  }

  sugerencias(event: string) {
    this.isError = false
  }
}
