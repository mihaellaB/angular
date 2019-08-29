import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ContactsComponent} from './contacts.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ContactsComponent
  ],
  exports: [
    ContactsComponent
  ],
  providers: []
})
export class ContactsModule {
}
