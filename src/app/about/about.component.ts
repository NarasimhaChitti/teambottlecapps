import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import * as global from '../global';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  storegetList: any;
  storegetpicktime: any;
  storegetdeliverytime: any;
  userid: string;
  sessionid: string;
  template = `<img src='/assets/Images/assets/loading_icon.gif' />`;

  constructor(private spinnerService: Ng4LoadingSpinnerService,
    private router: Router,
    private appService: AppService,
    private httpclient: HttpClient) { }

  ngOnInit() {

    this.userid = localStorage.getItem('UserId');
    this.sessionid = localStorage.getItem('SessionId');

    let StoreGetDeatile: any;
    StoreGetDeatile = {
      StoreId: 10002,
      UserId: this.userid,
      SessionId: this.sessionid,
      AppId: 10002
    };
    this.spinnerService.show();
    this.appService.postdetails(global.baseUrl + 'Store/StoreGetDetail', StoreGetDeatile)
      .subscribe(response => {
        if (response) {
          this.storegetList = response.GetStoredetails;
          this.storegetpicktime = response.GetStoredetails.ListStoreTime;
          this.storegetdeliverytime = response.GetStoredetails.ListStoreTimeDelivery;
          this.spinnerService.hide();
          console.log(response);
          // alert('sucess');
        } else {
          alert('something went wrong at server');
        }

      });

  }

  gottoHome() {
    this.router.navigate(['']);
  }

}
