import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { OrderPage } from '../order/order';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  constructor(public navCtrl: NavController) {
    }

  goToOrderPage() {
    this.navCtrl.push(OrderPage);
  }
}
