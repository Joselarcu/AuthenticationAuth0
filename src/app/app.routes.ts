
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { PricesComponent } from './components/prices/prices.component';
import { ProtectComponent } from './components/protect/protect.component';
import { AuthGuardService } from './services/auth-guard.service';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'protect', component: ProtectComponent, canActivate:[AuthGuardService] },
];


export const APP_ROUTING = RouterModule.forRoot(routes);