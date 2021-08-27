import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-by-region',
  templateUrl: './by-region.component.html',
  styles: [
  ]
})
export class ByRegionComponent implements OnInit {
  termino: string = ''
  isError: boolean = false
  countries: [] = []
  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania']
  regionActivated: string = ''
  
  constructor(private countryService: CountryService) { }

  ngOnInit(): void {
  }

  activateRegion(region: string) {
    if(this.regionActivated === region) return
    this.regionActivated = region
    this.buscar()
  }

  buscar() {
    this.countries = []
    this.countryService.search_region(this.regionActivated)
      .subscribe((res) => this.countries = res )
  }

  getBtnActive(regionActive: string) {
    return this.regionActivated === regionActive
      ? 'btn btn-primary me-2'
      : 'btn btn-outline-primary me-2'
  }
}
