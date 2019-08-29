import {NgModule} from '@angular/core';

import {HeaderComponent} from '../header/header.component';
import {RouterModule} from '@angular/router';
import {ContentComponent} from '../content/content.component';
import {MainRoutingModule} from './main.routes';
import {MainComponent} from './main.component';
import {FooterComponent} from '../footer/footer.component';
import {HomeModule} from '../../components/home/home.module';
import {ServicesModule} from '../../components/services/services.module';
import {AdminModule} from '../../components/admin/admin.module';
import {ContactsModule} from '../../components/contacts/contacts.module';

@NgModule({
  entryComponents: [

  ],
  imports: [
    RouterModule,
    MainRoutingModule,
    HomeModule,
    ServicesModule,
    ContactsModule,
    AdminModule
  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    MainComponent,
  ],
  exports: [
    MainComponent
  ],
  providers: [

  ]
})

export class MainModule {
}
