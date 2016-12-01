import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ClickerApp } from './app.component';
import { ClickerList, PagesModule, Page2 } from '../pages';
import { ClickersService, StorageService } from '../services';
import { Placeholder } from '../pages/placeholder/placeholder';

@NgModule({
  declarations: [
    ClickerApp,
  ],
  imports: [
    PagesModule,
    IonicModule.forRoot(ClickerApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ClickerApp,
    ClickerList,
    Page2,
    Placeholder
  ],
  providers: [ClickersService, StorageService],
})

export class AppModule { }
