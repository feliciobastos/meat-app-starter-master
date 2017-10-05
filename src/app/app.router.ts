import {Routes} from '@angular/router'
import {HomeComponent} from './home/home.component'
import {AboutComponent} from './about/about.component'
import {RestorantsComponent} from './restorants/restorants.component'

export const ROUTES: Routes =[
    {path: '', component: HomeComponent},
    {path: 'about', component: AboutComponent},
    {path: 'restorants', component: RestorantsComponent}

]

