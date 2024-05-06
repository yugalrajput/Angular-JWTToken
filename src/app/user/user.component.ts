import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  form: any = {
    data: {},
    preload: [],
  };

  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.preload();
  }
  preload() {
    var self = this;
    this.httpService.get(
      'http://localhost:8080/User/preload',
      function (res: any) {
        self.form.preload = res.result;
      }
    );
  }

  save() {
    var self = this;
    this.httpService.post(
      'http://localhost:8080/User/save',
      this.form.data,
      function (res: any) {}
    );
  }
}
