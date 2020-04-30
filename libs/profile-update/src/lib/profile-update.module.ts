import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProfileUpdateRouting} from './profile-update-routing.module';
import {StoreModule} from '@ngrx/store';
import * as fromReducer from './store/reducer';
import {ProfileUpdateComponent} from './profile-update.component';

@NgModule({
  imports: [
    CommonModule,
    ProfileUpdateRouting,
    StoreModule.forFeature(fromReducer.featureKey, fromReducer.reducer),
  ],
  declarations: [ProfileUpdateComponent]
})
export class ProfileUpdateModule {}
