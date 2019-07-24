import {NgModule} from '@angular/core';

import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import {RouterModule} from '@angular/router';
import {ContentComponent} from '../content/content.component';
import {MainRoutingModule} from './main.routes';
import {MainComponent} from './main.component';

@NgModule({
  entryComponents: [

  ],
  imports: [
    RouterModule,
    MainRoutingModule
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    HomeComponent,
    MainComponent
  ],
  exports: [
    HeaderComponent,
    HomeComponent,
    ContentComponent,

  ],
  providers: [

  ]
})

export class MainModule {
}
