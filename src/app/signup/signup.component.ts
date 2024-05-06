import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  form: any = {
    data: {},
    message: '',
  };
  inputerror: any = {};

  constructor(private httpClient: HttpClient) {}

  signUp() {
    var self = this;
    this.httpClient
      .post('http://localhost:8080/Auth/signUp', this.form.data)
      .subscribe((res: any) => {
        self.form.message = res.result.message;
      });
  }
}
