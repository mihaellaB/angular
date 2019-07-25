import {NgModule} from '@angular/core';

import {HeaderComponent} from '../header/header.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import {RouterModule} from '@angular/router';
import {ContentComponent} from '../content/content.component';
import {MainRoutingModule} from './main.routes';
import {MainComponent} from './main.component';
import {ContactsComponent} from '../../shared/components/contacts/contacts.component';
import {MakeUpComponent} from '../../shared/components/services/make-up/make-up.component';
import {FooterComponent} from '../footer/footer.component';
import {HairComponent} from '../../shared/components/services/hair/hair.component';
import {NailComponent} from '../../shared/components/services/nail/nail.component';

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
    FooterComponent,
    MainComponent,
    HomeComponent,
    ContactsComponent,
    HairComponent,
    MakeUpComponent,
    NailComponent
  ],
  exports: [],
  providers: [

  ]
})

export class MainModule {
}
