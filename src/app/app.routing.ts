import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import {ResumeComponent} from './components/resume/resume.component';
import {CodeTestComponent} from './components/code-test/code-test.component';

const appRouts: Routes = [
  {path: '', component: HomeComponent},
  {path: 'resume', component: ResumeComponent},
  {path: 'test', component: CodeTestComponent}
];
export const routing = RouterModule.forRoot(appRouts);
