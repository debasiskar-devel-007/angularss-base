import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css']
})
export class ListingComponent implements OnInit {


  cookieValue = "Unknown";

  /************** lib list setup start here *************/
  public roleListingConfig: any = {
    apiBaseUrl: "https://o820cv2lu8.execute-api.us-east-2.amazonaws.com/production/api/",
    listEndPoint: "datalist",
    datasource: "",
    tableName: "rolemanagement",
    updateurl: "addorupdatedata",
    editUrl: "role-management/edit",
    jwtToken: "",
    deleteEndPoint: "deletesingledata",

  }
  /************** lib list setup end here *************/

  constructor(private router: Router, private activatedRoute: ActivatedRoute,
    private cookieService: CookieService) {
    this.cookieValue = this.cookieService.get('jwtToken');
    this.activatedRoute.data.subscribe(resolveData => {
      this.roleListingConfig.datasource = resolveData.roleListData.res;
      this.roleListingConfig.jwtToken = this.cookieValue;
     
    });
  }

  ngOnInit() {

  }

}

