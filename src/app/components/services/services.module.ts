import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {ServicesComponent} from './services.component';
import {HairComponent} from './hair/hair.component';
import {MakeUpComponent} from './make-up/make-up.component';
import {NailComponent} from './nail/nail.component';
import {RouterModule} from '@angular/router';
import {StylistScheduleModule} from '../../shared/components/stylist-schedule/stylist-schedule.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HairVm} from './hair/hair.vm';
import {CardModule} from 'primeng/card';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StylistScheduleModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule
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
  providers: [
    HairVm
  ]
})
export class ServicesModule {
}
