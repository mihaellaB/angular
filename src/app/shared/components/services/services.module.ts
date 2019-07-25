import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ServicesComponent} from './services.component';
import {HairComponent} from './hair/hair.component';
import {MakeUpComponent} from './make-up/make-up.component';
import {NailComponent} from './nail/nail.component';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    ServicesComponent,
    HairComponent,
    MakeUpComponent,
    NailComponent
  ],
  exports: [
    ServicesComponent
  ],
  providers: []
})
export class ServicesModule {
}
