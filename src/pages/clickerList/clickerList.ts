import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { ClickersService } from '../../services';
import { Clicker } from '../../models/clicker';

@Component({
  templateUrl: 'clickerList.html',
})

export class ClickerList {

  public clickerService: ClickersService;
  public title: string;
  private nav: NavController;
  private alert: AlertController;

  constructor(nav: NavController, clickerService: ClickersService, alert: AlertController) {
    this.nav = nav;
    this.clickerService = clickerService;
    this.alert = alert;
    this.title = 'Clickers';
  }

  public onDeleteClicker(clicker: Clicker) {
    if (clicker.getCount() > 0) {
      const deleteAlert = this.alert.create({
        message: 'Are you sure you want to delete?',
        buttons: [
          {
            text: 'Yes',
            handler: () => {
              this.clickerService.removeClicker(clicker.getId());
            }
          }, 'Cancel'
        ]
      });
      deleteAlert.present();
    } else {
      this.clickerService.removeClicker(clicker.getId());
    }
  }
}
