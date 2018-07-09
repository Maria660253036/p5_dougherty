import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { MyFormService } from '../../services/myform';
import { ThankyouPage } from '../thankyou/thankyou';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private data: any;
  private isSubmitted: Boolean = false;

  constructor(public navCtrl: NavController, private formData: MyFormService) {
    this.formData = formData;
    this.data = {
      name: '',
      email: '',
      phone: '',
      user: '',
      password: ''
    }
  }

  onSignup(myForm) {
    this.isSubmitted = true;

    if(myForm.valid) {
      this.formData.name = this.data.name;
      this.formData.email = this.data.email;
      this.formData.phone = this.data.phone;
      this.formData.user = this.data.user;
      this.formData.password = this.data.password;

      this.navCtrl.push(ThankyouPage);
    }
  }

  noSubmit(e) {
    e.preventDefault();
  }

}
