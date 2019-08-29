import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from '../../components/home/home.component';
import {ContactsComponent} from '../../components/contacts/contacts.component';
import {ServicesComponent} from '../../components/services/services.component';
import {HairComponent} from '../../components/services/hair/hair.component';
import {MakeUpComponent} from '../../components/services/make-up/make-up.component';
import {NailComponent} from '../../components/services/nail/nail.component';
import {AdminComponent} from '../../components/admin/admin.component';


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
      },
      {
        path: 'admin',
        component: AdminComponent
      },
    ])
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
