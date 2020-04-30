import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileUpdateComponent} from './profile-update.component';


const routes: Routes = [{
  path: '',
  component: ProfileUpdateComponent,
}, {
  path: 'basic-information',
  loadChildren: () => import('../lib/pages/basic-information/basic-information.module').then(m => m.BasicInformationModule)
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileUpdateRouting {
}
