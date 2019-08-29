import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {AdminComponent} from './admin.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AdminComponent
  ],
  exports: [
    AdminComponent
  ],
  providers: []
})
export class AdminModule {
}
