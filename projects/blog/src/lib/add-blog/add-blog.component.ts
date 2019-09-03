import { Component, OnInit, Input, Inject } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../api.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef, MatDialog } from "@angular/material";
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { CookieService } from 'ngx-cookie-service';

export interface DialogData {
  message: string;
}
@Component({
  selector: 'lib-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css']
})
export class AddBlogComponent implements OnInit {

  /**ckeditor start here*/
  public Editor = ClassicEditor;  //for ckeditor
  editorConfig = {
    placeholder: 'Type the content here!',
  };
  public model = {
    editorData: ''
  };
  /**ckeditor end here*/

  /**blog varibles declaration start here**/
  public dialogRef: any;
  public getDataEndpointData: any;
  public addEndpointData: any;
  public serverUrlData: any;
  public listUrl: any;
  public blogarray: any = [];
  isSubmitted = false;
  blogAddEditForm: FormGroup;
  public params_id: any;
  public editarray: any = [];
  public statusarray: any = [];
  public allData: any = [];
  /**blog varibles declaration end here**/
  public headerText: any = 'Add Blogs';

  @Input()         //setting the listing url form the application
  set listRoute(listval: any) {
    this.listUrl = (listval) || '<no name set>';
    this.listUrl = listval;
  }

  @Input()          //setting the server url from project
  set serverUrl(serverUrlval: any) {
    this.serverUrlData = (serverUrlval) || '<no name set>';
    this.serverUrlData = serverUrlval;
  }

  @Input()          //setting the server url from project
  set getDataEndpoint(endpointUrlval: any) {
    this.getDataEndpointData = (endpointUrlval) || '<no name set>';
    this.getDataEndpointData = endpointUrlval;
  }
  @Input()          //setting the server url from project
  set addEndpoint(endpointUrlval: any) {
    this.addEndpointData = (endpointUrlval) || '<no name set>';
    this.addEndpointData = endpointUrlval;
  }

  @Input()          //resolve data and set the value for edit
  set dataList(allData: any) {
    this.allData = allData;
    if (this.activeroute.snapshot.params.id) {
      this.headerText = "Edit Blogs";
      this.blogAddEditForm.controls['title'].patchValue(allData[0].title);
      this.blogAddEditForm.controls['description'].patchValue(allData[0].description);
      this.model.editorData = allData[0].description;
      this.blogAddEditForm.controls['parent_id'].patchValue(allData[0].parent_id);
    }
  }


  constructor(public fb: FormBuilder, public activeroute: ActivatedRoute,
    public apiservice: ApiService, public _http: HttpClient, public router: Router
    , public dialog: MatDialog, private cookieService: CookieService) {
    /**catch the parameter id***/

    /**Formgroup create start here**/
    this.blogAddEditForm = this.fb.group({
      title:       ['', Validators.required],
      description: ['', Validators.required],
      parent_id:   []
    })
    /**Formgroup create end here**/
  }

  ngOnInit() {
    this.params_id = this.activeroute.snapshot.params.id;

    /**Observable start here**/
    this.apiservice.clearServerUrl();
    setTimeout(() => {
      this.apiservice.setServerUrl(this.serverUrlData);
    }, 50);
    this.apiservice.cleargetdataEndpoint();
    setTimeout(() => {
      this.apiservice.setgetdataEndpoint(this.getDataEndpointData);
    }, 50);
    this.apiservice.clearaddEndpoint();
    setTimeout(() => {
      this.apiservice.setaddEndpoint(this.addEndpointData);
    }, 50);
    /**Observable end here**/

    //getBlogData call here
    setTimeout(() => {
      this.getBlogData();
    }, 100);
  }

  /*modal start here*/
  openDialog(x: any): void {
    this.dialogRef = this.dialog.open(Dialogtest, {
      width: '250px',
      data: { message: x }
    });

    this.dialogRef.afterClosed().subscribe(result => {
    });
  }

  /**validation untouch purpose **/
  inputUntouch(form: any, val: any) {
    form.controls[val].markAsUntouched();
  }

  /** getting all blogs data start here **/
  getBlogData() {

    let data: any = {
      "source": "blog_category_view"
    }

    this.apiservice.getData(data).subscribe(response => {

      let result: any = response;
      this.blogarray = result.res;
    })
  }

  /**add & update* blogs submitting form start here**/
  blogAddEditFormSubmit() {

    this.blogAddEditForm.patchValue({
      description: this.model.editorData
    });

    this.isSubmitted = true;
    let x: any;
    for (x in this.blogAddEditForm.controls) {
      this.blogAddEditForm.controls[x].markAsTouched();
    }
    if (this.blogAddEditForm.valid) {
      var data: any;
      if (this.activeroute.snapshot.params.id != null) {   //update part
        data = {
          "source": "blog_category",
          "data": {
            "id": this.params_id,
            "parent_id": this.blogAddEditForm.value.parent_id,
            'title': this.blogAddEditForm.value.title,
            'description': this.blogAddEditForm.value.description
          },
          "sourceobj": ["parent_id"]
        };
      } else {
        data = {                                         //add part
          "source": "blog_category",
          "data": {
            "parent_id": this.blogAddEditForm.value.parent_id,
            'title': this.blogAddEditForm.value.title,
            'description': this.blogAddEditForm.value.description

          },
          "sourceobj": ["parent_id"]
        };
      }
      this.apiservice.addData(data).subscribe(response => {
        let result: any;
        result = response;
        this.statusarray = result.status;

        this.openDialog(result.status);
        setTimeout(() => {
          this.dialogRef.close();
        }, 2000);

        setTimeout(() => {
          this.router.navigateByUrl('/' + this.listUrl);
        }, 3000);
      });
    }
  }
}

@Component({
  selector: 'dialogtest',
  templateUrl: 'modal.html',
})
export class Dialogtest {
  public is_error: any;

  constructor(public dialogRef: MatDialogRef<Dialogtest>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {
    this.is_error = data.message;
  }
}