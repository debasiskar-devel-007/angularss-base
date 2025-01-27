(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('rxjs/operators'), require('@angular/cdk/a11y'), require('@angular/cdk/drag-drop'), require('@angular/cdk/portal'), require('@angular/cdk/scrolling'), require('@angular/cdk/stepper'), require('@angular/cdk/table'), require('@angular/cdk/tree'), require('@angular/material/autocomplete'), require('@angular/material/badge'), require('@angular/material/bottom-sheet'), require('@angular/material/button'), require('@angular/material/button-toggle'), require('@angular/material/card'), require('@angular/material/checkbox'), require('@angular/material/chips'), require('@angular/material/stepper'), require('@angular/material/datepicker'), require('@angular/material/divider'), require('@angular/material/expansion'), require('@angular/material/grid-list'), require('@angular/material/icon'), require('@angular/material/input'), require('@angular/material/list'), require('@angular/material/menu'), require('@angular/material/core'), require('@angular/material/paginator'), require('@angular/material/progress-bar'), require('@angular/material/progress-spinner'), require('@angular/material/radio'), require('@angular/material/select'), require('@angular/material/sidenav'), require('@angular/material/slider'), require('@angular/material/slide-toggle'), require('@angular/material/snack-bar'), require('@angular/material/sort'), require('@angular/material/table'), require('@angular/material/tabs'), require('@angular/material/toolbar'), require('@angular/material/tooltip'), require('@angular/material/tree'), require('@angular/core'), require('@ckeditor/ckeditor5-build-classic'), require('@angular/material/dialog'), require('@angular/common/http'), require('@angular/router'), require('ngx-ckeditor'), require('@angular/forms'), require('@angular/common'), require('@angular/platform-browser'), require('listing-angular7'), require('file-upload-lib-influxiq'), require('ngx-cookie-service')) :
    typeof define === 'function' && define.amd ? define('service-lib-influxiq', ['exports', 'rxjs/operators', '@angular/cdk/a11y', '@angular/cdk/drag-drop', '@angular/cdk/portal', '@angular/cdk/scrolling', '@angular/cdk/stepper', '@angular/cdk/table', '@angular/cdk/tree', '@angular/material/autocomplete', '@angular/material/badge', '@angular/material/bottom-sheet', '@angular/material/button', '@angular/material/button-toggle', '@angular/material/card', '@angular/material/checkbox', '@angular/material/chips', '@angular/material/stepper', '@angular/material/datepicker', '@angular/material/divider', '@angular/material/expansion', '@angular/material/grid-list', '@angular/material/icon', '@angular/material/input', '@angular/material/list', '@angular/material/menu', '@angular/material/core', '@angular/material/paginator', '@angular/material/progress-bar', '@angular/material/progress-spinner', '@angular/material/radio', '@angular/material/select', '@angular/material/sidenav', '@angular/material/slider', '@angular/material/slide-toggle', '@angular/material/snack-bar', '@angular/material/sort', '@angular/material/table', '@angular/material/tabs', '@angular/material/toolbar', '@angular/material/tooltip', '@angular/material/tree', '@angular/core', '@ckeditor/ckeditor5-build-classic', '@angular/material/dialog', '@angular/common/http', '@angular/router', 'ngx-ckeditor', '@angular/forms', '@angular/common', '@angular/platform-browser', 'listing-angular7', 'file-upload-lib-influxiq', 'ngx-cookie-service'], factory) :
    (factory((global['service-lib-influxiq'] = {}),global.rxjs.operators,global.ng.cdk.a11y,global.ng.cdk['drag-drop'],global.ng.cdk.portal,global.ng.cdk.scrolling,global.ng.cdk.stepper,global.ng.cdk.table,global.ng.cdk.tree,global.ng.material.autocomplete,global.ng.material.badge,global.ng.material['bottom-sheet'],global.ng.material.button,global.ng.material['button-toggle'],global.ng.material.card,global.ng.material.checkbox,global.ng.material.chips,global.ng.material.stepper,global.ng.material.datepicker,global.ng.material.divider,global.ng.material.expansion,global.ng.material['grid-list'],global.ng.material.icon,global.ng.material.input,global.ng.material.list,global.ng.material.menu,global.ng.material.core,global.ng.material.paginator,global.ng.material['progress-bar'],global.ng.material['progress-spinner'],global.ng.material.radio,global.ng.material.select,global.ng.material.sidenav,global.ng.material.slider,global.ng.material['slide-toggle'],global.ng.material['snack-bar'],global.ng.material.sort,global.ng.material.table,global.ng.material.tabs,global.ng.material.toolbar,global.ng.material.tooltip,global.ng.material.tree,global.ng.core,global.ClassicEditor,global.ng.material.dialog,global.ng.common.http,global.ng.router,global.ngxCkeditor,global.ng.forms,global.ng.common,global.ng.platformBrowser,global.listingAngular7,global.fileUploadLibInfluxiq,global.i2));
}(this, (function (exports,operators,a11y,dragDrop,portal,scrolling,stepper,table,tree,autocomplete,badge,bottomSheet,button,buttonToggle,card,checkbox,chips,stepper$1,datepicker,divider,expansion,gridList,icon,input,list,menu,core,paginator,progressBar,progressSpinner,radio,select,sidenav,slider,slideToggle,snackBar,sort,table$1,tabs,toolbar,tooltip,tree$1,i0,ClassicEditor,dialog,i1,router,ngxCkeditor,forms,common,platformBrowser,listingAngular7,fileUploadLibInfluxiq,i2) { 'use strict';

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/servicelib.service.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibService = /** @class */ (function () {
        function ServicelibService(_http, _authHttp, cookieService) {
            this._http = _http;
            this._authHttp = _authHttp;
            this.cookieService = cookieService;
            this.progress = [];
            this.uploaderror = '';
            this.accesstoken = this.cookieService.get('jwtToken');
            this.fileservername = [];
            this.serverUrl = '';
            this.getdata_endpointUrl = 'datalist';
        }
        /**
         * @return {?}
         */
        ServicelibService.prototype.isTokenExpired = /**
         * @return {?}
         */
            function () {
                // const helper = new JwtHelperService();
                // const decodedToken = helper.decodeToken(localStorage.getItem('id_token'));
                // var isIdTokenExpired = helper.isTokenExpired(localStorage.getItem('id_token'));
                // console.log('refresh_token',localStorage.getItem('refresh_token'))
                // const isRefreshTokenExpired = helper.isTokenExpired(localStorage.getItem('refresh_token'));
                // console.log('id_token isExpired:',isIdTokenExpired)
                // console.log('refresh_token isExpired:',isRefreshTokenExpired)
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.addData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.getData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.deleteSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.deleteMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateStatusForSingleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.UpdateStatusForMultipleData = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint + 'many', JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
        ServicelibService.prototype.CustomRequest = /**
         * @param {?} endpoint
         * @param {?} requestdata
         * @return {?}
         */
            function (endpoint, requestdata) {
                /** @type {?} */
                var httpOptions = {
                    headers: new i1.HttpHeaders({
                        'Content-Type': 'application/json',
                        'Authorization': this.accesstoken
                    })
                };
                /** @type {?} */
                var result = this._http.post(this.serverUrl + endpoint, JSON.stringify(requestdata), httpOptions).pipe(operators.map(( /**
                 * @param {?} res
                 * @return {?}
                 */function (res) { return res; })));
                return result;
            };
        ServicelibService.decorators = [
            { type: i0.Injectable, args: [{
                        providedIn: 'root'
                    },] }
        ];
        /** @nocollapse */
        ServicelibService.ctorParameters = function () {
            return [
                { type: i1.HttpClient },
                { type: i1.HttpClient },
                { type: i2.CookieService }
            ];
        };
        /** @nocollapse */ ServicelibService.ngInjectableDef = i0.defineInjectable({ factory: function ServicelibService_Factory() { return new ServicelibService(i0.inject(i1.HttpClient), i0.inject(i1.HttpClient), i0.inject(i2.CookieService)); }, token: ServicelibService, providedIn: "root" });
        return ServicelibService;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/servicelib.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibComponent = /** @class */ (function () {
        // ====================================================================================================
        function ServicelibComponent() {
            this.loader = true;
        }
        Object.defineProperty(ServicelibComponent.prototype, "config", {
            // =====================================================================================================
            // =============================================Input For Lib Listing================================
            set: 
            // =====================================================================================================
            // =============================================Input For Lib Listing================================
            /**
             * @param {?} receivedData
             * @return {?}
             */
            function (receivedData) {
                this.serviceListConfig = {
                    apiUrl: receivedData.apiBaseUrl,
                    listEndPoint: receivedData.listEndPoint,
                    datasource: receivedData.datasource,
                    tableName: receivedData.tableName,
                    listArray_skip: ["_id", "userId", "id", "updated_at", "service_desc", "image", "additional_img", "description_html", 'service_title_search'],
                    listArray_modify_header: { "service title": "Service title", "priority": "Priority",
                        "status": "Status", "bulletarr": "Number of Bullets", "date added": "Date Added" },
                    admintablenameTableName: "admin",
                    statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
                    updateurl: receivedData.updateEndpoint,
                    editUrl: receivedData.editUrl,
                    jwtToken: receivedData.jwtToken,
                    deleteEndPoint: receivedData.deleteEndPoint,
                    view: receivedData.view,
                    /*Search settings in the Listing*/
                    search_settings: {
                        textsearch: [{ label: "Search by title", field: 'service_title_search' }],
                        selectsearch: [{ label: 'Search By Status', field: 'status', values: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }] }],
                    },
                    /*Showing Image in the Modal*/
                    // pendingmodelapplicationarray_detail_datatype:[{
                    //   key: "images",
                    //   value: 'image',
                    //   fileurl: 'https://s3.us-east-2.amazonaws.com/crmfiles.influxhostserver/services/'    
                    // }],
                    detail_header: ['_id']
                };
                this.loader = false;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * @return {?}
         */
        ServicelibComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
            };
        ServicelibComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-servicelib',
                        template: "<mat-card *ngIf=\"loader==true\">\n    <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n    <lib-listing class=\"formfilterdiv\"\n        *ngIf=\"serviceListConfig.datasource !=null && serviceListConfig.datasource.length > 0\"\n        [datasource]=\"serviceListConfig.datasource\" [skip]=\"serviceListConfig.listArray_skip\"\n        [modify_header_array]=\"serviceListConfig.listArray_modify_header\" [sourcedata]=\"serviceListConfig.tableName\"\n        [statusarr]=\"serviceListConfig.statusarr\" [jwttoken]=\"serviceListConfig.jwtToken\"\n        [apiurl]=\"serviceListConfig.apiUrl\" [editroute]=\"serviceListConfig.editUrl\"\n        [deleteendpoint]=\"serviceListConfig.deleteEndPoint\" [date_search_source]=\"serviceListConfig.view\"\n        [detail_datatype]=\"serviceListConfig.pendingmodelapplicationarray_detail_datatype\"\n        [date_search_endpoint]=\"serviceListConfig.listEndPoint\" [search_settings]=\"serviceListConfig.search_settings\"\n        [detail_skip_array]=\"serviceListConfig.detail_header\">\n    </lib-listing>\n    <!-- ----------------------------------------------------------------------------->\n\n    <h2 *ngIf=\"serviceListConfig.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                        styles: [""]
                    }] }
        ];
        /** @nocollapse */
        ServicelibComponent.ctorParameters = function () { return []; };
        ServicelibComponent.propDecorators = {
            config: [{ type: i0.Input }]
        };
        return ServicelibComponent;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/modules/material-module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var DemoMaterialModule = /** @class */ (function () {
        function DemoMaterialModule() {
        }
        DemoMaterialModule.decorators = [
            { type: i0.NgModule, args: [{
                        exports: [
                            a11y.A11yModule,
                            stepper.CdkStepperModule,
                            table.CdkTableModule,
                            tree.CdkTreeModule,
                            dragDrop.DragDropModule,
                            autocomplete.MatAutocompleteModule,
                            badge.MatBadgeModule,
                            bottomSheet.MatBottomSheetModule,
                            button.MatButtonModule,
                            buttonToggle.MatButtonToggleModule,
                            card.MatCardModule,
                            checkbox.MatCheckboxModule,
                            chips.MatChipsModule,
                            stepper$1.MatStepperModule,
                            datepicker.MatDatepickerModule,
                            dialog.MatDialogModule,
                            divider.MatDividerModule,
                            expansion.MatExpansionModule,
                            gridList.MatGridListModule,
                            icon.MatIconModule,
                            input.MatInputModule,
                            list.MatListModule,
                            menu.MatMenuModule,
                            core.MatNativeDateModule,
                            paginator.MatPaginatorModule,
                            progressBar.MatProgressBarModule,
                            progressSpinner.MatProgressSpinnerModule,
                            radio.MatRadioModule,
                            core.MatRippleModule,
                            select.MatSelectModule,
                            sidenav.MatSidenavModule,
                            slider.MatSliderModule,
                            slideToggle.MatSlideToggleModule,
                            snackBar.MatSnackBarModule,
                            sort.MatSortModule,
                            table$1.MatTableModule,
                            tabs.MatTabsModule,
                            toolbar.MatToolbarModule,
                            tooltip.MatTooltipModule,
                            tree$1.MatTreeModule,
                            portal.PortalModule,
                            scrolling.ScrollingModule,
                        ]
                    },] }
        ];
        return DemoMaterialModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/Component/addedit-service/addedit-service.component.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var AddeditServiceComponent = /** @class */ (function () {
        // ==============================================================================================
        function AddeditServiceComponent(formBuilder, servicehttp, router$$1, dialog$$1, cookieService) {
            this.formBuilder = formBuilder;
            this.servicehttp = servicehttp;
            this.router = router$$1;
            this.dialog = dialog$$1;
            this.cookieService = cookieService;
            this.editorData = '<p>Write description...</p>';
            /**ckeditor for descripiton start here*/
            // public Editor = ClassicEditor;
            // editorConfig = {
            //   placeholder: 'Write description...',
            // };
            // public model = {
            //   editorData: ''
            // };
            /**
             * ckeditor for additional description *
             */
            this.Editor2 = ClassicEditor; //for ckeditor
            //for ckeditor
            this.editorConfig2 = {
                placeholder: 'Please provide additional details...',
            };
            this.model2 = {
                editorData: ''
            };
            this.loader = false;
            this.buttonText = "SUBMIT";
            this.successMessage = "Service Added!!!";
            this.img_arr = [];
            this.ErrCode = false;
            this.ErrCode2 = false;
            this.img_missing = false;
            this.editorconfig = {};
            this.editorconfig.extraAllowedContent = '*[class](*),span;ul;li;table;td;style;*[id];*(*);*{*}';
        }
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () {
                this.loader = false;
                this.generateForm();
                if (this.configData.action != 'edit')
                    this.addBulletList('', '');
                // =========================================SWITCH CASES==========================================
                switch (this.configData.action) {
                    case 'add':
                        /* Button text */
                        this.buttonText = "SUBMIT";
                        this.flag = false;
                        this.flag2 = false;
                        this.header_name = "Add Service";
                        break;
                    case 'edit':
                        /* Button text */
                        this.buttonText = "UPDATE";
                        this.successMessage = "Service Edited!!!";
                        this.setDefaultValue(this.configData.defaultData);
                        this.header_name = "Edit Service";
                        this.flag = true;
                        this.flag2 = true;
                        if (this.configData.defaultData.additional_img == false)
                            this.flag2 = false;
                        break;
                }
                // ===============================================================================================
            };
        Object.defineProperty(AddeditServiceComponent.prototype, "config", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.configData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditServiceComponent.prototype, "imageUpload", {
            set: /**
             * @param {?} getConfig
             * @return {?}
             */ function (getConfig) {
                this.imageConfigData = getConfig;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(AddeditServiceComponent.prototype, "imageUpload2", {
            set: /**
             * @param {?} getConfig2
             * @return {?}
             */ function (getConfig2) {
                this.imageConfigData2 = getConfig2;
            },
            enumerable: true,
            configurable: true
        });
        // =============================================form generation====================================
        // =============================================form generation====================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.generateForm =
            // =============================================form generation====================================
            /**
             * @return {?}
             */
            function () {
                this.serviceForm = this.formBuilder.group({
                    service_title: ['', [forms.Validators.required]],
                    description: ['', [forms.Validators.required]],
                    additional_details: ['',],
                    priority: ['', [forms.Validators.required]],
                    status: [true,],
                    bulletarr: this.formBuilder.array([]),
                    service_img: ['',],
                    additional_img: ['',]
                });
            };
        // =================================================================================================
        // ===============================================Default value======================================
        // =================================================================================================
        // ===============================================Default value======================================
        /**
         * @param {?} defaultValue
         * @return {?}
         */
        AddeditServiceComponent.prototype.setDefaultValue =
            // =================================================================================================
            // ===============================================Default value======================================
            /**
             * @param {?} defaultValue
             * @return {?}
             */
            function (defaultValue) {
                var _this = this;
                defaultValue.bulletarr.forEach(( /**
                 * @param {?} element
                 * @return {?}
                 */function (element) {
                    _this.addBulletList(element.bullet_title, element.bullet_desc);
                }));
                this.serviceForm.patchValue({
                    service_title: defaultValue.service_title,
                    description: defaultValue.description,
                    additional_details: defaultValue.additional_details,
                    priority: defaultValue.priority,
                    status: defaultValue.status,
                    service_img: defaultValue.service_img,
                    additional_img: defaultValue.additional_img,
                });
                /** Service image **/
                this.img_var = defaultValue.service_img.basepath + defaultValue.service_img.image;
                this.image_name = defaultValue.service_img.name;
                this.image_type = defaultValue.service_img.type;
                /** Additional image **/
                this.img_var2 = defaultValue.additional_img.basepath + defaultValue.additional_img.image;
                this.image_name2 = defaultValue.additional_img.name;
                this.image_type2 = defaultValue.additional_img.type;
            };
        // ==================================================================================================
        // ==========================================FORM ARRAY FUNCTIONS===================================
        // ==================================================================================================
        // ==========================================FORM ARRAY FUNCTIONS===================================
        /**
         * @param {?} a
         * @param {?} b
         * @return {?}
         */
        AddeditServiceComponent.prototype.addBulletList =
            // ==================================================================================================
            // ==========================================FORM ARRAY FUNCTIONS===================================
            /**
             * @param {?} a
             * @param {?} b
             * @return {?}
             */
            function (a, b) {
                /** @type {?} */
                var bl = ( /** @type {?} */(this.serviceForm.controls.bulletarr));
                bl.push(this.formBuilder.group({
                    bullet_title: [a],
                    bullet_desc: [b],
                }));
            };
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.deleteBulletList = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var bl = ( /** @type {?} */(this.serviceForm.controls.bulletarr));
                bl.removeAt(1);
            };
        /**
         * @param {?} index
         * @return {?}
         */
        AddeditServiceComponent.prototype.trackByFn = /**
         * @param {?} index
         * @return {?}
         */
            function (index) {
                return index;
            };
        // ==================================================================================================
        // ================================================SUBMIT============================================
        // ==================================================================================================
        // ================================================SUBMIT============================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.onSubmit =
            // ==================================================================================================
            // ================================================SUBMIT============================================
            /**
             * @return {?}
             */
            function () {
                var _this = this;
                /** marking as untouched **/
                for (var x in this.serviceForm.controls) {
                    this.serviceForm.controls[x].markAsTouched();
                }
                // Service File Upload Works 
                if (this.imageConfigData.files) {
                    if (this.imageConfigData.files.length > 1) {
                        this.ErrCode = true;
                        this.img_missing = false;
                        return;
                    }
                    this.serviceForm.value.service_img =
                        {
                            "basepath": this.imageConfigData.files[0].upload.data.basepath + '/' + this.imageConfigData.path + '/',
                            "image": this.imageConfigData.files[0].upload.data.data.fileservername,
                            "name": this.imageConfigData.files[0].name,
                            "type": this.imageConfigData.files[0].type
                        };
                    this.img_missing = false;
                }
                else {
                    if (this.serviceForm.value.service_img == null || this.serviceForm.value.service_img == '') {
                        this.img_missing = true;
                        this.ErrCode = false;
                    }
                }
                /** Additional Image  **/
                if (this.imageConfigData2.files) {
                    console.log("length", this.imageConfigData2.files.length);
                    if (this.imageConfigData2.files.length > 1) {
                        this.ErrCode2 = true;
                        return;
                    }
                    this.serviceForm.value.additional_img =
                        {
                            "basepath": this.imageConfigData2.files[0].upload.data.basepath + '/' + this.imageConfigData2.path + '/',
                            "image": this.imageConfigData2.files[0].upload.data.data.fileservername,
                            "name": this.imageConfigData2.files[0].name,
                            "type": this.imageConfigData2.files[0].type
                        };
                }
                for (var i in this.serviceForm.controls) {
                    this.serviceForm.controls[i].markAsTouched();
                }
                this.loader = true;
                if (this.img_missing == true) {
                    return;
                }
                if (this.serviceForm.invalid) {
                    return;
                }
                else {
                    if (this.serviceForm.value.status) {
                        this.serviceForm.value.status = parseInt("1");
                    }
                    else {
                        this.serviceForm.value.status = parseInt("0");
                    }
                    /* start process to submited data */
                    /** @type {?} */
                    var postData = {
                        source: this.configData.source,
                        data: Object.assign(this.serviceForm.value, this.configData.condition),
                        token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJmb28iOiJiYXIiLCJleHAiOjE1NzcxNzc4MDIsImlhdCI6MTU3NzA5MTQwMn0.jtwImZIdKK-9WxeQQHef5YLSXvN05CiJeAw-lXCcHtE"
                    };
                    this.servicehttp.addData(this.configData.endpoint, postData).subscribe(( /**
                     * @param {?} response
                     * @return {?}
                     */function (response) {
                        if (response.status == "success") {
                            _this.openDialog(_this.successMessage);
                            setTimeout(( /**
                             * @return {?}
                             */function () {
                                _this.dialogRef.close();
                            }), 2000);
                            _this.router.navigate([_this.configData.callBack]);
                        }
                        else {
                            alert("Some error occurred. Please try again.");
                        }
                    }), ( /**
                     * @param {?} error
                     * @return {?}
                     */function (error) {
                        alert("Some error occurred. Please try again.");
                    }));
                }
            };
        // ================================================================================================== 
        // =========================================MODAL functions==========================================
        // ================================================================================================== 
        // =========================================MODAL functions==========================================
        /**
         * @param {?} x
         * @return {?}
         */
        AddeditServiceComponent.prototype.openDialog =
            // ================================================================================================== 
            // =========================================MODAL functions==========================================
            /**
             * @param {?} x
             * @return {?}
             */
            function (x) {
                this.dialogRef = this.dialog.open(Modal, {
                    width: '250px',
                    data: { msg: x }
                });
                this.dialogRef.afterClosed().subscribe(( /**
                 * @param {?} result
                 * @return {?}
                 */function (result) {
                }));
            };
        // =================================================================================================
        // =================================================================================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.resetserviceForm =
            // =================================================================================================
            /**
             * @return {?}
             */
            function () {
                this.serviceForm.reset();
            };
        /**
         * @param {?} val
         * @return {?}
         */
        AddeditServiceComponent.prototype.inputBlur = /**
         * @param {?} val
         * @return {?}
         */
            function (val) {
                this.serviceForm.controls[val].markAsUntouched();
            };
        // ================================================================================================
        // ================================================================================================
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.clear_image =
            // ================================================================================================
            /**
             * @return {?}
             */
            function () {
                this.flag = false;
                this.img_missing = true;
            };
        /**
         * @return {?}
         */
        AddeditServiceComponent.prototype.clear_image2 = /**
         * @return {?}
         */
            function () {
                this.flag2 = false;
                this.serviceForm.value.additional_img = false;
            };
        AddeditServiceComponent.decorators = [
            { type: i0.Component, args: [{
                        selector: 'lib-addedit-service',
                        template: "<mat-card>\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\n  </mat-toolbar>\n  <span class=\"formspan\">\n    <mat-card-content class=\"example-container\">\n\n\n      <form [formGroup]=\"serviceForm\" autocomplete=\"off\">\n\n\n\n        <!-- ------------------------------service title------------------- -->\n        <mat-form-field>\n          <input matInput placeholder=\"Service title\" formControlName=\"service_title\"\n            (blur)=\"inputBlur('service_title')\">\n          <mat-error *ngIf=\"!serviceForm.controls['service_title'].valid\n        && serviceForm.controls['service_title'].errors.required\"> Service title is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- --------------------------------description------------------- -->\n        <mat-label>Write Description...</mat-label>\n        <ck-editor formControlName=\"description\"  [config]=\"editorconfig\">\n        </ck-editor>\n        <!-- <ckeditor [data]=\"editorData\" formControlName=\"description\" (blur)=\"inputBlur('description')\"> -->\n        <!-- </ckeditor> -->\n\n        <!-- <ckeditor [editor]=\"Editor\" [config]=\"editorConfig\" formControlName=\"description\"\n          (blur)=\"inputBlur('description')\"></ckeditor> -->\n\n\n        <mat-error *ngIf=\"!serviceForm.controls['description'].valid\n          && serviceForm.controls['description'].errors.required && serviceForm.controls['description'].touched\">\n          Description is required.\n        </mat-error>\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------additional details------------------- -->\n\n        <mat-label>Additional Details If Any...</mat-label>\n        <ck-editor formControlName=\"additional_details\" [config]=\"editorconfig\">\n        </ck-editor>\n\n        <br>\n        <!-- -------------------------------------------------------------- -->\n\n        <!-- --------------------------------priority------------------- -->\n        <mat-form-field>\n          <input matInput type=\"number\" placeholder=\"Priority\" formControlName=\"priority\"\n            (blur)=\"inputBlur('priority')\">\n          <mat-error *ngIf=\"!serviceForm.controls['priority'].valid\n           && serviceForm.controls['priority'].errors.required\"> Priority is required.</mat-error>\n        </mat-form-field><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n        <!-- --------------------------------status------------------- -->\n        <mat-label>Status:</mat-label><br>\n        <mat-checkbox color=\"primary\" formControlName=\"status\">Active</mat-checkbox><br>\n        <!-- -------------------------------------------------------------- -->\n\n\n\n        <!-- ______________________________________________FORM ARRAY_________________________________________ -->\n\n        <div formArrayName=\"bulletarr\" class=\"bulletarr\"\n          *ngFor=\"let blist of serviceForm.controls.bulletarr?.value; let i = index; trackBy: trackByFn\">\n          <ng-container [formGroupName]=\"i\">\n            <div class=\"top_header\">\n              bullet list\n            </div>\n            <!-- ------------bullet title-----------  -->\n            <mat-form-field>\n              <input matInput formControlName=\"bullet_title\" placeholder=\"Bullet title\">\n              <mat-icon matSuffix>title</mat-icon>\n            </mat-form-field><br>\n            <!-- -----------------------------------  -->\n\n\n            <!-- --------------------bullet description-----------------  -->\n            <mat-form-field>\n              <textarea matInput formControlName=\"bullet_desc\" placeholder=\"Bullet description\"></textarea>\n              <mat-icon matSuffix>format_list_bulleted</mat-icon>\n            </mat-form-field><br>\n            <!-- ----------------------------------------------------------  -->\n          </ng-container>\n          <button (click)=\"addBulletList('','')\" type=\"button\">\n            <mat-icon>add</mat-icon>\n          </button>\n          <button (click)=\"deleteBulletList()\" *ngIf=\"i!=0\" type=\"button\">\n            <mat-icon>remove</mat-icon>\n          </button>\n        </div>\n        <!-- __________________________________________________________________________________________________________ -->\n\n        <h1>Service Image:</h1>\n\n        <div class=\"warning_reso\">\n          <mat-icon>warning</mat-icon>\n          <p>Resolution: 650 x 300</p>\n        </div>\n\n\n        <lib-file-upload [config]=\"imageConfigData\"></lib-file-upload>\n        <div *ngIf=\"ErrCode==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one service image.</p>\n        </div>\n        <div *ngIf=\"img_missing==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please provide a service image.</p>\n        </div>\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var\">\n            <mat-card-title>{{ image_name }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <!-- ______________________________________________________________________________________________________________ -->\n        <!-- Additional Image  -->\n        <h1>Additional Image:</h1>\n        <lib-file-upload [config]=\"imageConfigData2\"></lib-file-upload>\n        <div *ngIf=\"ErrCode2==true\" class=\"desc_error\">\n          <mat-icon>error</mat-icon>\n          <p>Please add just one additional image.</p>\n        </div><br>\n\n\n\n\n        <mat-card-content class=\"files-view\" *ngIf=\"flag2==true\">\n          <mat-card class=\"example-card\">\n            <img mat-card-image [attr.src]=\"img_var2\">\n            <mat-card-title>{{ image_name2 }}</mat-card-title>\n            <mat-card-subtitle>{{ image_type2 }}</mat-card-subtitle>\n            <span class=\"closecard\" (click)=\"clear_image2()\"><i class=\"material-icons\">clear</i></span>\n          </mat-card>\n        </mat-card-content>\n\n        <span><button type=\"button\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"onSubmit()\">{{buttonText}}</button></span>\n        <span><button type=\"reset\" class=\"submitbtn\" mat-raised-button color=\"primary\"\n            (click)=\"resetserviceForm()\">RESET</button></span>\n\n      </form>\n    </mat-card-content>\n  </span>\n</mat-card>",
                        styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}.bulletarr{margin-top:20px;border:3px solid #3f50b4;box-sizing:border-box;margin-bottom:15px;padding:10px}.top_header{background:#3f50b4;padding:16px;color:#fff;font-weight:700;text-transform:capitalize}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}.desc_error{color:#d8000c;border:2px solid #d8000c;background-color:#ff97ce;padding:0 10px;display:inline-flex;align-items:center}.desc_error .mat-icon{margin-right:10px}.warning_reso{color:#d8000c;border:2px solid #d8000c;background-color:#edf104;padding:0 10px;display:inline-flex;align-items:center}.warning_reso .mat-icon{margin-right:10px}"]
                    }] }
        ];
        /** @nocollapse */
        AddeditServiceComponent.ctorParameters = function () {
            return [
                { type: forms.FormBuilder },
                { type: ServicelibService },
                { type: router.Router },
                { type: dialog.MatDialog },
                { type: i2.CookieService }
            ];
        };
        AddeditServiceComponent.propDecorators = {
            config: [{ type: i0.Input }],
            imageUpload: [{ type: i0.Input }],
            imageUpload2: [{ type: i0.Input }]
        };
        return AddeditServiceComponent;
    }());
    // ============================================MODAL COMPONENT===========================================
    var Modal = /** @class */ (function () {
        function Modal(dialogRef, data) {
            this.dialogRef = dialogRef;
            this.data = data;
        }
        /**
         * @return {?}
         */
        Modal.prototype.onNoClick = /**
         * @return {?}
         */
            function () {
                this.dialogRef.close();
            };
        Modal.decorators = [
            { type: i0.Component, args: [{
                        selector: 'app-modal',
                        template: "<h1 mat-dialog-title>MESSAGE</h1>\n<div mat-dialog-content>\n   <p>{{ data.msg }}</p>\n</div>\n\n"
                    }] }
        ];
        /** @nocollapse */
        Modal.ctorParameters = function () {
            return [
                { type: dialog.MatDialogRef },
                { type: undefined, decorators: [{ type: i0.Inject, args: [dialog.MAT_DIALOG_DATA,] }] }
            ];
        };
        return Modal;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: lib/servicelib.module.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ServicelibModule = /** @class */ (function () {
        function ServicelibModule() {
        }
        ServicelibModule.decorators = [
            { type: i0.NgModule, args: [{
                        declarations: [ServicelibComponent, AddeditServiceComponent, Modal],
                        imports: [
                            DemoMaterialModule,
                            i1.HttpClientModule,
                            router.RouterModule,
                            ngxCkeditor.CKEditorModule,
                            forms.FormsModule,
                            forms.ReactiveFormsModule,
                            common.CommonModule,
                            platformBrowser.BrowserModule,
                            listingAngular7.ListingModule,
                            fileUploadLibInfluxiq.FileUploadModule
                        ],
                        exports: [ServicelibComponent, AddeditServiceComponent, Modal],
                        entryComponents: [Modal],
                        providers: [i2.CookieService]
                    },] }
        ];
        return ServicelibModule;
    }());

    /**
     * @fileoverview added by tsickle
     * Generated from: public-api.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * Generated from: service-lib-influxiq.ts
     * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ServicelibService = ServicelibService;
    exports.ServicelibComponent = ServicelibComponent;
    exports.ServicelibModule = ServicelibModule;
    exports.ɵa = AddeditServiceComponent;
    exports.ɵb = Modal;
    exports.ɵc = DemoMaterialModule;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=service-lib-influxiq.umd.js.map