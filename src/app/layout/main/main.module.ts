import {NgModule} from '@angular/core';
import {ContentComponent} from '../content/content.component';
import {HeaderComponent} from '../header/header.component';

@NgModule({
  entryComponents: [

  ],
  imports: [

  ],
  declarations: [
    HeaderComponent,
    ContentComponent,
  ],
  exports: [
    HeaderComponent,
    ContentComponent

  ],
  providers: [

  ]
})

export class MainModule {
}
