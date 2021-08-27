import { ShowCountryComponent } from './countries/pages/show-country/show-country.component';
import { ByCapitalComponent } from './countries/pages/by-capital/by-capital.component';
import { ByRegionComponent } from './countries/pages/by-region/by-region.component';
import { ByCountryComponent } from './countries/pages/by-country/by-country.component';
import { NgModule } from '@angular/core'
import  { RouterModule, Routes } from '@angular/router'

const routes: Routes = [
    {
        path:'',
        component: ByCountryComponent,
        pathMatch: 'full'
    },
    {
        path:'region',
        component: ByRegionComponent
    },
    {
        path:'capital',
        component: ByCapitalComponent
    },
    {
        path:'country/:id',
        component: ShowCountryComponent
    },
    {
        path:'**',
        redirectTo: ''
    }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {}