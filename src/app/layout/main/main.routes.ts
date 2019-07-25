import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {HomeComponent} from '../../shared/components/home/home.component';
import {ContactsComponent} from '../../shared/components/contacts/contacts.component';
import {MakeUpComponent} from '../../shared/components/services/make-up/make-up.component';
import {HairComponent} from '../../shared/components/services/hair/hair.component';
import {NailComponent} from '../../shared/components/services/nail/nail.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      {
        path: '',
        component: MainComponent,
        children: [
          {
            path: 'home',
            component: HomeComponent
          },
          {
            path: 'contacts',
            component: ContactsComponent
          },
          {
            path: 'services/hair',
            component: HairComponent
          },
          {
            path: 'services/make-up',
            component: MakeUpComponent
          },
          {
            path: 'services/nail',
            component: NailComponent
          }
        ]
      },
    ])
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
