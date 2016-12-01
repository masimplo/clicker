import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';
import { ComponentsModule } from '../components';
import { ClickerList } from './clickerList/clickerList';
import { Page2 } from './page2/page2';
import { BecomeProModal } from './become-pro-modal/become-pro.component';

@NgModule({
  declarations: [
    ClickerList,
    Page2,
    BecomeProModal
  ],
  imports: [IonicModule, ComponentsModule],
  exports: [
    ClickerList,
    // Page2,
  ],
  entryComponents: [],
  providers: [],
})

export class PagesModule { }
