/**
 * @fileoverview added by tsickle
 * Generated from: lib/Components/newsletter/listing-newsletterlib/listing-newsletterlib.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input } from '@angular/core';
export class ListingNewsletterlibComponent {
    // ====================================================================================================
    constructor() {
        this.loader = true;
    }
    // =====================================================================================================
    // ================================================Input For Lib Listing================================
    /**
     * @param {?} receivedData
     * @return {?}
     */
    set config(receivedData) {
        this.newsConfigForm = {
            apiUrl: receivedData.apiBaseUrl,
            listEndPoint: receivedData.listEndPoint,
            datasource: receivedData.datasource,
            tableName: receivedData.tableName,
            listArray_skip: ["_id", "userId", "created_at", "id", "updated_at", "title_search", "publishdate_normal_format"],
            listArray_modify_header: {
                'title': 'Title', 'subject': 'Subject', 'userGroup': 'User Group', 'time': 'Publish Time',
                'publishdate': 'Publish Date', 'status': 'Status'
            },
            admintablenameTableName: "admin",
            statusarr: [{ val: 1, name: "Active" }, { val: 0, name: 'Inactive' }],
            updateurl: receivedData.updateEndpoint,
            editUrl: receivedData.editUrl,
            jwtToken: receivedData.jwtToken,
            deleteEndPoint: receivedData.deleteEndPoint,
            view: receivedData.view,
            detail_header: ['_id', 'publishdate_normal_format', 'title_search'],
            date_search_source: receivedData.view,
            date_search_endpoint: 'datalist',
            search_settings: {
                textsearch: [{ label: "Search by title...", field: 'title_search' },
                    { label: "Search by subject...", field: 'subject' }],
                datesearch: [{ startdatelabel: "Start Date", enddatelabel: "End Date", submit: "Search By Date", field: "publishdate_normal_format" }],
            },
        };
        this.loader = false;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
    }
}
ListingNewsletterlibComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-listing-newsletterlib',
                template: "<mat-card *ngIf=\"loader==true\">\n  <mat-spinner class=\"spinner\"></mat-spinner>\n</mat-card>\n\n\n\n<!-- ------------------------lib listing being called------------------------ -->\n<mat-card *ngIf=\"loader==false\">\n  <lib-listing class=\"formfilterdiv\"\n      *ngIf=\"newsConfigForm.datasource !=null && newsConfigForm.datasource.length > 0\"\n      [datasource]=\"newsConfigForm.datasource\" [skip]=\"newsConfigForm.listArray_skip\"\n      [modify_header_array]=\"newsConfigForm.listArray_modify_header\" [sourcedata]=\"newsConfigForm.tableName\"\n      [statusarr]=\"newsConfigForm.statusarr\" [jwttoken]=\"newsConfigForm.jwtToken\"\n      [apiurl]=\"newsConfigForm.apiUrl\" [editroute]=\"newsConfigForm.editUrl\"\n      [deleteendpoint]=\"newsConfigForm.deleteEndPoint\"\n      [date_search_source]=\"newsConfigForm.view\"\n      [date_search_endpoint]=\"newsConfigForm.listEndPoint\"\n      [search_settings]=\"newsConfigForm.search_settings\"\n      [detail_skip_array]=\"newsConfigForm.detail_header\">\n  </lib-listing>\n<!-- ----------------------------------------------------------------------------->\n\n\n  <h2 *ngIf=\"newsConfigForm.datasource.length == 0\">No record found.</h2>\n</mat-card>",
                styles: [""]
            }] }
];
/** @nocollapse */
ListingNewsletterlibComponent.ctorParameters = () => [];
ListingNewsletterlibComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    ListingNewsletterlibComponent.prototype.newsConfigForm;
    /** @type {?} */
    ListingNewsletterlibComponent.prototype.loader;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25ld3MtdGl0bGUtbGliLWluZmx1eGlxLyIsInNvdXJjZXMiOlsibGliL0NvbXBvbmVudHMvbmV3c2xldHRlci9saXN0aW5nLW5ld3NsZXR0ZXJsaWIvbGlzdGluZy1uZXdzbGV0dGVybGliLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQVUsS0FBSyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBT3pELE1BQU0sT0FBTyw2QkFBNkI7O0lBNEN4QztRQXhDTyxXQUFNLEdBQVksSUFBSSxDQUFDO0lBMEM5QixDQUFDOzs7Ozs7O0lBbkNELElBQ0ksTUFBTSxDQUFDLFlBQWlCO1FBQzFCLElBQUksQ0FBQyxjQUFjLEdBQUc7WUFDcEIsTUFBTSxFQUFFLFlBQVksQ0FBQyxVQUFVO1lBQy9CLFlBQVksRUFBRSxZQUFZLENBQUMsWUFBWTtZQUN2QyxVQUFVLEVBQUUsWUFBWSxDQUFDLFVBQVU7WUFDbkMsU0FBUyxFQUFFLFlBQVksQ0FBQyxTQUFTO1lBQ2pDLGNBQWMsRUFBRSxDQUFDLEtBQUssRUFBRSxRQUFRLEVBQUUsWUFBWSxFQUFFLElBQUksRUFBRSxZQUFZLEVBQUMsY0FBYyxFQUFDLDJCQUEyQixDQUFDO1lBQzlHLHVCQUF1QixFQUFFO2dCQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLEVBQUUsV0FBVyxFQUFFLFlBQVksRUFBRSxNQUFNLEVBQUUsY0FBYztnQkFDekYsYUFBYSxFQUFFLGNBQWMsRUFBRSxRQUFRLEVBQUUsUUFBUTthQUNsRDtZQUNELHVCQUF1QixFQUFFLE9BQU87WUFDaEMsU0FBUyxFQUFFLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFFLElBQUksRUFBRSxRQUFRLEVBQUUsRUFBRSxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRSxDQUFDO1lBQ3JFLFNBQVMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUN0QyxPQUFPLEVBQUUsWUFBWSxDQUFDLE9BQU87WUFDN0IsUUFBUSxFQUFFLFlBQVksQ0FBQyxRQUFRO1lBQy9CLGNBQWMsRUFBRSxZQUFZLENBQUMsY0FBYztZQUMzQyxJQUFJLEVBQUUsWUFBWSxDQUFDLElBQUk7WUFDdkIsYUFBYSxFQUFFLENBQUMsS0FBSyxFQUFDLDJCQUEyQixFQUFDLGNBQWMsQ0FBQztZQUNqRSxrQkFBa0IsRUFBQyxZQUFZLENBQUMsSUFBSTtZQUNwQyxvQkFBb0IsRUFBQyxVQUFVO1lBQy9CLGVBQWUsRUFBRTtnQkFDZixVQUFVLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxvQkFBb0IsRUFBRSxLQUFLLEVBQUUsY0FBYyxFQUFFO29CQUNuRSxFQUFFLEtBQUssRUFBRSxzQkFBc0IsRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFFLENBQUM7Z0JBQ3BELFVBQVUsRUFBQyxDQUFDLEVBQUMsY0FBYyxFQUFDLFlBQVksRUFBQyxZQUFZLEVBQUMsVUFBVSxFQUFDLE1BQU0sRUFBQyxnQkFBZ0IsRUFBRyxLQUFLLEVBQUMsMkJBQTJCLEVBQUMsQ0FBQzthQUUvSDtTQUNGLENBQUE7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztJQUN0QixDQUFDOzs7O0lBT0QsUUFBUTtJQUNSLENBQUM7OztZQXRERixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLDJCQUEyQjtnQkFDckMseXNDQUFxRDs7YUFFdEQ7Ozs7O3FCQVlFLEtBQUs7Ozs7SUFSTix1REFBMkI7O0lBQzNCLCtDQUE4QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0LCBJbnB1dCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdsaWItbGlzdGluZy1uZXdzbGV0dGVybGliJyxcbiAgdGVtcGxhdGVVcmw6ICcuL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQuY3NzJ11cbn0pXG5leHBvcnQgY2xhc3MgTGlzdGluZ05ld3NsZXR0ZXJsaWJDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1kZWNsYXJhdGlvbj09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XG4gIHB1YmxpYyBuZXdzQ29uZmlnRm9ybTogYW55O1xuICBwdWJsaWMgbG9hZGVyOiBib29sZWFuID0gdHJ1ZTtcbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cblxuXG5cblxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1JbnB1dCBGb3IgTGliIExpc3Rpbmc9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuICBASW5wdXQoKVxuICBzZXQgY29uZmlnKHJlY2VpdmVkRGF0YTogYW55KSB7XG4gICAgdGhpcy5uZXdzQ29uZmlnRm9ybSA9IHtcbiAgICAgIGFwaVVybDogcmVjZWl2ZWREYXRhLmFwaUJhc2VVcmwsXG4gICAgICBsaXN0RW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5saXN0RW5kUG9pbnQsXG4gICAgICBkYXRhc291cmNlOiByZWNlaXZlZERhdGEuZGF0YXNvdXJjZSxcbiAgICAgIHRhYmxlTmFtZTogcmVjZWl2ZWREYXRhLnRhYmxlTmFtZSxcbiAgICAgIGxpc3RBcnJheV9za2lwOiBbXCJfaWRcIiwgXCJ1c2VySWRcIiwgXCJjcmVhdGVkX2F0XCIsIFwiaWRcIiwgXCJ1cGRhdGVkX2F0XCIsXCJ0aXRsZV9zZWFyY2hcIixcInB1Ymxpc2hkYXRlX25vcm1hbF9mb3JtYXRcIl0sXG4gICAgICBsaXN0QXJyYXlfbW9kaWZ5X2hlYWRlcjoge1xuICAgICAgICAndGl0bGUnOiAnVGl0bGUnLCAnc3ViamVjdCc6ICdTdWJqZWN0JywgJ3VzZXJHcm91cCc6ICdVc2VyIEdyb3VwJywgJ3RpbWUnOiAnUHVibGlzaCBUaW1lJyxcbiAgICAgICAgJ3B1Ymxpc2hkYXRlJzogJ1B1Ymxpc2ggRGF0ZScsICdzdGF0dXMnOiAnU3RhdHVzJ1xuICAgICAgfSxcbiAgICAgIGFkbWludGFibGVuYW1lVGFibGVOYW1lOiBcImFkbWluXCIsXG4gICAgICBzdGF0dXNhcnI6IFt7IHZhbDogMSwgbmFtZTogXCJBY3RpdmVcIiB9LCB7IHZhbDogMCwgbmFtZTogJ0luYWN0aXZlJyB9XSxcbiAgICAgIHVwZGF0ZXVybDogcmVjZWl2ZWREYXRhLnVwZGF0ZUVuZHBvaW50LFxuICAgICAgZWRpdFVybDogcmVjZWl2ZWREYXRhLmVkaXRVcmwsXG4gICAgICBqd3RUb2tlbjogcmVjZWl2ZWREYXRhLmp3dFRva2VuLFxuICAgICAgZGVsZXRlRW5kUG9pbnQ6IHJlY2VpdmVkRGF0YS5kZWxldGVFbmRQb2ludCxcbiAgICAgIHZpZXc6IHJlY2VpdmVkRGF0YS52aWV3LFxuICAgICAgZGV0YWlsX2hlYWRlcjogWydfaWQnLCdwdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0JywndGl0bGVfc2VhcmNoJ10sXG4gICAgICBkYXRlX3NlYXJjaF9zb3VyY2U6cmVjZWl2ZWREYXRhLnZpZXcsXG4gICAgICBkYXRlX3NlYXJjaF9lbmRwb2ludDonZGF0YWxpc3QnLFxuICAgICAgc2VhcmNoX3NldHRpbmdzOiB7XG4gICAgICAgIHRleHRzZWFyY2g6IFt7IGxhYmVsOiBcIlNlYXJjaCBieSB0aXRsZS4uLlwiLCBmaWVsZDogJ3RpdGxlX3NlYXJjaCcgfSxcbiAgICAgICAgeyBsYWJlbDogXCJTZWFyY2ggYnkgc3ViamVjdC4uLlwiLCBmaWVsZDogJ3N1YmplY3QnIH1dLFxuICAgICAgICBkYXRlc2VhcmNoOlt7c3RhcnRkYXRlbGFiZWw6XCJTdGFydCBEYXRlXCIsZW5kZGF0ZWxhYmVsOlwiRW5kIERhdGVcIixzdWJtaXQ6XCJTZWFyY2ggQnkgRGF0ZVwiLCAgZmllbGQ6XCJwdWJsaXNoZGF0ZV9ub3JtYWxfZm9ybWF0XCJ9XSxcbiAgICAgICAgLy8gc2VhcmNoOiBbeyBsYWJlbDogXCJTZWFyY2ggQnkgZ3JvdXBcIiwgZmllbGQ6ICcnIH1dXG4gICAgICB9LCAgXG4gICAgfVxuICAgIHRoaXMubG9hZGVyID0gZmFsc2U7XG4gIH1cbiAgLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4gIGNvbnN0cnVjdG9yKCkge1xuXG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgfVxuXG59XG5cblxuIl19