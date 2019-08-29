import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {CalendarModule, DropdownModule, InputSwitchModule, KeyFilterModule} from 'primeng/primeng';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StylistScheduleComponent} from './stylist-schedule.component';
import {StylistScheduleVm} from './stylist-schedule.vm';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    NgbModule,
    InputSwitchModule,
    KeyFilterModule
  ],
  exports: [
    StylistScheduleComponent
  ],
  declarations: [
    StylistScheduleComponent
  ],
  providers: [
    StylistScheduleVm
  ]
})

class StylistScheduleModule {
}

export {StylistScheduleModule};
export * from './stylist-schedule.component';
