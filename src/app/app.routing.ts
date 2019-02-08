import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';

const appRouts: Routes = [
  {path: '', component: HomeComponent}
];
export const routing = RouterModule.forRoot(appRouts);
