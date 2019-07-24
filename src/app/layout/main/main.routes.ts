import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {MainComponent} from './main.component';
import {HomeComponent} from '../../shared/components/home/home.component';

@NgModule({
  imports: [
    RouterModule.forRoot([
      // {
      //   path: '',
      //   pathMatch: 'full',
      //   redirectTo: 'home'},
      {
        path: '',
        component: MainComponent,
        // children: [
        //   {
        //     path: ':home',
        //     component: HomeComponent
        //   },
        // ]
      },
      {
        path: 'home',
        component: HomeComponent
      }
    ])
  ],
  exports: [RouterModule]
})

export class MainRoutingModule {
}
