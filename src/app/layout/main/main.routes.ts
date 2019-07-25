import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import {ContactsComponent} from '../../shared/components/contacts/contacts.component';
import {MakeUpComponent} from '../../shared/components/services/make-up/make-up.component';
import {HairComponent} from '../../shared/components/services/hair/hair.component';
import {NailComponent} from '../../shared/components/services/nail/nail.component';
import {ServicesComponent} from '../../shared/components/services/services.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
      },
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'contacts',
        component: ContactsComponent
      },
      {
        path: 'services',
        component: ServicesComponent,
        children: [
          {
            path: 'hair',
            component: HairComponent
          },
          {
            path: 'make-up',
            component: MakeUpComponent
          },
          {
            path: 'nail',
            component: NailComponent
          }
        ]
      }
    ])
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
