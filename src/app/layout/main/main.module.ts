import {NgModule} from '@angular/core';

import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router';
import {ContentComponent} from '../content/content.component';
import {MainRoutingModule} from './main.routes';
import {MainComponent} from './main.component';
import {ContactsComponent} from '../../shared/components/contacts/contacts.component';
import {MakeUpComponent} from '../../shared/components/services/make-up/make-up.component';
import {FooterComponent} from '../footer/footer.component';
import {HairComponent} from '../../shared/components/services/hair/hair.component';
import {NailComponent} from '../../shared/components/services/nail/nail.component';
import {HomeModule} from '../../shared/components/home/home.module';
import {ServicesModule} from '../../shared/components/services/services.module';

@NgModule({
  entryComponents: [

  ],
  imports: [
    RouterModule,
    MainRoutingModule,
    HomeModule,
    ServicesModule
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
    ContactsComponent,
    // HairComponent,
    // MakeUpComponent,
    // NailComponent
  ],
  exports: [
    MainComponent
  ],
  providers: [

  ]
})

export class MainModule {
}
