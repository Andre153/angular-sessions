import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ProfileUpdateComponent} from './profile-update.component';

const routes: Routes = [{
  path: '',
  component: ProfileUpdateComponent,
  children: [
    {
      path: 'basic-information',
      loadChildren: () => import('../lib/pages/basic-information/basic-information.module').then(m => m.BasicInformationModule)
    }, {
      path: 'contact-information',
      loadChildren: () => import('../lib/pages/contact-information/contact-information.module').then(m => m.ContactInformationModule)
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileUpdateRouting {
}
