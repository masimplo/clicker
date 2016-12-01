import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'cv-become-pro',
  templateUrl: 'become-pro.html'
})
export class BecomeProModal {
  constructor(private _viewCtrl: ViewController) {

  }

  public onOk() {
    this._viewCtrl.dismiss({ response: true });
  }

  public onCancel() {
    this._viewCtrl.dismiss({ response: false });
  }
}
