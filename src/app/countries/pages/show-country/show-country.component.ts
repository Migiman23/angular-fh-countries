import { CountryService } from './../../services/country.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs/operators';

@Component({
  selector: 'app-show-country',
  templateUrl: './show-country.component.html',
  styles: [
  ]
})
export class ShowCountryComponent implements OnInit {
  country : any = null

  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
    ) { }

  ngOnInit(): void {
    this.activatedRoute.params
    .pipe(
      switchMap(params => this.countryService.get_countryByCode(params.id)),
      tap(res => console.log(res))
    )
    .subscribe(res => this.country = res)

/*    this.activatedRoute.params
    .subscribe(({id}) => {
      this.countryService.get_countryByCode(id)
          .subscribe(country => {
            console.log(country);
          })
    })*/
  }

}
