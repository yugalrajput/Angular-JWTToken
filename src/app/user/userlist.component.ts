import { Component, OnInit } from '@angular/core';
import { HttpServiceService } from '../http-service.service';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css'],
})
export class UserlistComponent implements OnInit {
  form: any = {
    searchParams: {},
    list: [],
    preload: [],
    pageNo: 0,
  };

  constructor(private httpService: HttpServiceService) {}

  ngOnInit(): void {
    this.preload();
    this.search();
  }
  search() {
    var self = this;
    this.httpService.post(
      'http://localhost:8080/User/search/' + this.form.pageNo,
      this.form.searchParams,
      function (res: any) {
        self.form.list = res.result.data;
      }
    );
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
}
