import { Component } from '@angular/core';
import { NavController, AlertController, ModalController } from 'ionic-angular';
import { ClickersService } from '../../services';
import { Clicker } from '../../models/clicker';
import { BecomeProModal } from '../become-pro-modal/become-pro.component';

@Component({
  templateUrl: 'clickerList.html',
})

export class ClickerList {

  public clickerService: ClickersService;
  public title: string;
  private nav: NavController;

  constructor(nav: NavController, clickerService: ClickersService, private _modal: ModalController) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.title = 'Clickers';
  }

  // public onDeleteClicker(clicker: Clicker) {
  //   if (clicker.getCount() > 0) {
  //     const deleteAlert = this.alert.create({
  //       message: 'Are you sure you want to delete?',
  //       buttons: [
  //         {
  //           text: 'Yes',
  //           handler: () => {
  //             this.clickerService.removeClicker(clicker.getId());
  //           }
  //         }, 'Cancel'
  //       ]
  //     });
  //     deleteAlert.present();
  //   } else {
  //     this.clickerService.removeClicker(clicker.getId());
  //   }
  // }

  public onDeleteClicker(clicker: Clicker) {
    const modal = this._modal.create(BecomeProModal);
    modal.onDidDismiss((d) => d.response && this.clickerService.removeClicker(clicker.getId()));
    modal.present();
  }
}
