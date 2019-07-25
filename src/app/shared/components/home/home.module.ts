import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';

import {HomeComponent} from './home.component';
import {CarouselModule} from '../carousel/carousel.module';

@NgModule({
  imports: [
    CommonModule,
    CarouselModule
  ],
  declarations: [
    HomeComponent
  ],
  exports: [
    HomeComponent
  ],
  providers: []
})
export class HomeModule {
}
