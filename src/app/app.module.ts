import { NgModule } from '@angular/core';
import { IonicApp, IonicModule } from 'ionic-angular';
import { ClickerApp } from './app.component';
import { ClickerList, PagesModule, Page2 } from '../pages';
import { ClickersService, StorageService } from '../services';
import { BecomeProModal } from '../pages/become-pro-modal/become-pro.component';

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
    BecomeProModal
  ],
  providers: [ClickersService, StorageService],
})

export class AppModule { }
