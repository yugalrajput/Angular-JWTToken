import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  form: any = {
    data: {},
  };

  constructor(private router: Router) {}

  isLogin() {
    let check = localStorage.getItem('fname');
    if (check != null && check != 'null') {
      this.form.data.fname = localStorage.getItem('fname');
      this.form.data.lname = localStorage.getItem('lname');
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigateByUrl('/login');
  }
}
