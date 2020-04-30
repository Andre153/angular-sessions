import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {BasicInformationComponent} from './basic-information.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{path: '', component: BasicInformationComponent}])
  ],
  declarations: [BasicInformationComponent]
})
export class BasicInformationModule {}
