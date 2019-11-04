/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component, Input, Inject } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NewsTitleService } from '../../../news-title.service';
import { Router } from '@angular/router';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
/**
 * @record
 */
export function DialogData() { }
if (false) {
    /** @type {?} */
    DialogData.prototype.msg;
}
export class AddEditSubcategoryComponent {
    /**
     * @param {?} formBuilder
     * @param {?} newsletterService
     * @param {?} router
     * @param {?} dialog
     */
    constructor(formBuilder, newsletterService, router, dialog) {
        this.formBuilder = formBuilder;
        this.newsletterService = newsletterService;
        this.router = router;
        this.dialog = dialog;
        // ====================declarations==================
        this.buttonText = "SUBMIT";
        this.header_name = "Add Subscription Category";
        this.successMessage = "Submitted Successfully!!!";
    }
    // ==================================================
    /**
     * @param {?} getConfig
     * @return {?}
     */
    set config(getConfig) {
        this.configData = getConfig;
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        //generating the form
        this.generateForm();
        // --------------------------------checking the cases------------------------ 
        switch (this.configData.action) {
            case 'add':
                /* Button text */
                break;
            case 'edit':
                /* Button text */
                this.buttonText = "UPDATE";
                this.successMessage = "One row updated!!!";
                this.setDefaultValue(this.configData.defaultData);
                this.header_name = "EDIT";
                break;
        }
        // --------------------------------------------------------------------------
    }
    // =========================================MODAL functions==========================================
    /**
     * @param {?} x
     * @return {?}
     */
    openDialog(x) {
        this.dialogRef = this.dialog.open(Modal, {
            width: '250px',
            data: { msg: x }
        });
        this.dialogRef.afterClosed().subscribe((/**
         * @param {?} result
         * @return {?}
         */
        result => {
        }));
    }
    // =====================================================================================================
    // ================================================Default value======================================
    /**
     * @param {?} defaultValue
     * @return {?}
     */
    setDefaultValue(defaultValue) {
        this.subscriptionCatForm.patchValue({
            name: defaultValue.name,
            priority: defaultValue.priority,
            status: defaultValue.status,
        });
    }
    // ==================================================================================================
    // ======================form generation=====================
    /**
     * @return {?}
     */
    generateForm() {
        this.subscriptionCatForm = this.formBuilder.group({
            name: [],
            priority: [],
            status: []
        });
    }
    // ==========================================================
    // =========================SUBMIT FUNCTION======================
    /**
     * @return {?}
     */
    onSubmit() {
        /* stop here if form is invalid */
        if (this.subscriptionCatForm.invalid) {
            return;
        }
        else {
            if (this.subscriptionCatForm.value.status) {
                this.subscriptionCatForm.value.status = parseInt("1");
            }
            else {
                this.subscriptionCatForm.value.status = parseInt("0");
                ;
            }
            /* start process to submited data */
            /** @type {?} */
            let postData = {
                source: this.configData.source,
                data: Object.assign(this.subscriptionCatForm.value, this.configData.condition)
            };
            this.newsletterService.addData(this.configData.endpoint, postData).subscribe((/**
             * @param {?} response
             * @return {?}
             */
            (response) => {
                if (response.status == "success") {
                    this.openDialog(this.successMessage);
                    setTimeout((/**
                     * @return {?}
                     */
                    () => {
                        this.dialogRef.close();
                    }), 2000);
                    this.router.navigate([this.configData.callBack]);
                }
                else {
                    alert("Some error occurred. Please try angain.");
                }
            }), (/**
             * @param {?} error
             * @return {?}
             */
            (error) => {
                alert("Some error occurred. Please try angain.");
            }));
        }
    }
}
AddEditSubcategoryComponent.decorators = [
    { type: Component, args: [{
                selector: 'lib-add-edit-subcategory',
                template: "<mat-card>\r\n  <mat-toolbar color=\"primary\" style=\"justify-content: center; align-items: center;\">\r\n    <h2 class=\"headerSpan\">{{ header_name }}</h2>\r\n  </mat-toolbar>\r\n  <span class=\"formspan\">\r\n    <mat-card-content class=\"example-container\">\r\n\r\n      <form autocomplete=\"off\" [formGroup]=\"subscriptionCatForm\">\r\n\r\n\r\n        <!-- Name  -->\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"name\" formControlName=\"name\">\r\n        </mat-form-field>\r\n\r\n\r\n        <!-- Priority -->\r\n\r\n        <mat-form-field>\r\n          <mat-label>Priority</mat-label>\r\n          <input matInput placeholder=\"priority\" type=\"number\" formControlName=\"priority\">\r\n        </mat-form-field>\r\n\r\n        <!-- Status  -->\r\n        <mat-label>Status</mat-label>\r\n        <mat-checkbox formControlName=\"status\">Active</mat-checkbox><br>\r\n\r\n\r\n        <!-- Button  -->\r\n        <button type=\"button\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button\r\n          color=\"primary\" (click)=\"onSubmit()\">{{buttonText}}</button>\r\n        <button type=\"reset\" class=\"submitbtn\" class=\"submitbtn\" mat-raised-button color=\"primary\">RESET</button>\r\n      </form>\r\n\r\n    </mat-card-content>\r\n  </span>\r\n</mat-card>",
                styles: [".example-container{display:flex;flex-direction:column}.example-container>*{width:100%}.main-class .submitbtn{display:block;width:170px;margin:10px auto;background:#3f50b5!important;color:#fff}.main-class .material-icons{cursor:pointer}.formspan{background-color:#e7e9ea;border:6px solid #fff;border-bottom:10px solid #fff;display:inline-block;width:100%;position:relative;z-index:9}.formspan .example-container{display:flex;flex-direction:column;width:98%;padding:14px;margin-bottom:0}.formspan .form-field-span,.formspan .mat-form-field{display:inline-block;position:relative;text-align:left;width:98%;background:#fff;margin-bottom:9px;padding:1px 14px}.formspan .form-field-span .mat-checkbox,.formspan .form-field-span .mat-radio-button{padding-right:15px;padding-bottom:15px;display:inline-block}.formspan .mat-form-field-wrapper{padding-bottom:0!important}.form-field-span .mat-error{font-size:13px!important}.mat-error{color:#f44336;font-size:13px!important}button.submitbtn.mat-raised-button.mat-primary{margin-right:15px}h1{color:#3f50b4}.files-view{background-repeat:no-repeat;background-size:cover;background-position:center;height:auto!important;width:82%;margin:20px auto;border-radius:10px;display:flex;justify-content:center;align-items:stretch;flex-wrap:wrap}.files-view .mat-card{z-index:9;margin:10px!important;display:flex;flex-wrap:wrap;justify-content:center;width:27%;position:relative}.files-view .mat-card .mat-card-actions,.files-view .mat-card .mat-card-titlt{display:inline-block;width:100%}.files-view .mat-card .mat-card-subtitle{display:inline-block;width:100%;text-align:center}.closecard{position:absolute;top:-10px;right:-8px;background:#464545;height:25px;width:25px;border-radius:50%;border:1px solid #696969;color:#fff;text-align:center;box-shadow:0 2px 6px #00000070;cursor:pointer}.closecard i{font-size:18px;line-height:27px}"]
            }] }
];
/** @nocollapse */
AddEditSubcategoryComponent.ctorParameters = () => [
    { type: FormBuilder },
    { type: NewsTitleService },
    { type: Router },
    { type: MatDialog }
];
AddEditSubcategoryComponent.propDecorators = {
    config: [{ type: Input }]
};
if (false) {
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.buttonText;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.header_name;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.subscriptionCatForm;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.configData;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.successMessage;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.dialogRef;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.formBuilder;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.newsletterService;
    /**
     * @type {?}
     * @private
     */
    AddEditSubcategoryComponent.prototype.router;
    /** @type {?} */
    AddEditSubcategoryComponent.prototype.dialog;
}
// ============================================MODAL COMPONENT===========================================
export class Modal {
    /**
     * @param {?} dialogRef
     * @param {?} data
     */
    constructor(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    /**
     * @return {?}
     */
    onNoClick() {
        this.dialogRef.close();
    }
}
Modal.decorators = [
    { type: Component, args: [{
                selector: 'app-modal',
                template: "<h1 mat-dialog-title>MESSAGE</h1>\r\n<div mat-dialog-content>\r\n   <p>{{ data.msg }}</p>\r\n</div>\r\n\r\n"
            }] }
];
/** @nocollapse */
Modal.ctorParameters = () => [
    { type: MatDialogRef },
    { type: undefined, decorators: [{ type: Inject, args: [MAT_DIALOG_DATA,] }] }
];
if (false) {
    /** @type {?} */
    Modal.prototype.dialogRef;
    /** @type {?} */
    Modal.prototype.data;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmV3cy10aXRsZS8iLCJzb3VyY2VzIjpbImxpYi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5L2FkZC1lZGl0LXN1YmNhdGVnb3J5LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsTUFBTSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2pFLE9BQU8sRUFBZSxXQUFXLEVBQXlCLE1BQU0sZ0JBQWdCLENBQUM7QUFDakYsT0FBTyxFQUFFLGdCQUFnQixFQUFFLE1BQU0sNkJBQTZCLENBQUM7QUFDL0QsT0FBTyxFQUFFLE1BQU0sRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ3pDLE9BQU8sRUFBRSxTQUFTLEVBQUUsWUFBWSxFQUFFLGVBQWUsRUFBRSxNQUFNLDBCQUEwQixDQUFDOzs7O0FBQ3BGLGdDQUVDOzs7SUFEQyx5QkFBWTs7QUFTZCxNQUFNLE9BQU8sMkJBQTJCOzs7Ozs7O0lBbUJ0QyxZQUFvQixXQUF3QixFQUFVLGlCQUFtQyxFQUMvRSxNQUFjLEVBQVcsTUFBaUI7UUFEaEMsZ0JBQVcsR0FBWCxXQUFXLENBQWE7UUFBVSxzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBQy9FLFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVyxXQUFNLEdBQU4sTUFBTSxDQUFXOztRQWpCcEQsZUFBVSxHQUFRLFFBQVEsQ0FBQztRQUMzQixnQkFBVyxHQUFRLDJCQUEyQixDQUFBO1FBRzlDLG1CQUFjLEdBQVEsMkJBQTJCLENBQUE7SUFhTyxDQUFDOzs7Ozs7SUFQekQsSUFDSSxNQUFNLENBQUMsU0FBYztRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFNBQVMsQ0FBQztJQUM5QixDQUFDOzs7O0lBTUQsUUFBUTtRQUNOLHFCQUFxQjtRQUNyQixJ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LENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO2lCQUNsRDtxQkFBTTtvQkFDTCxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztpQkFDbEQ7WUFDSCxDQUFDOzs7O1lBQUUsQ0FBQyxLQUFLLEVBQUUsRUFBRTtnQkFDWCxLQUFLLENBQUMseUNBQXlDLENBQUMsQ0FBQztZQUNuRCxDQUFDLEVBQUMsQ0FBQztTQUNKO0lBQ0gsQ0FBQzs7O1lBeEhGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsMEJBQTBCO2dCQUNwQyxrMUNBQW9EOzthQUVyRDs7OztZQWJxQixXQUFXO1lBQ3hCLGdCQUFnQjtZQUNoQixNQUFNO1lBQ04sU0FBUzs7O3FCQXdCZixLQUFLOzs7O0lBVk4saURBQTJCOztJQUMzQixrREFBOEM7O0lBQzlDLDBEQUErQjs7SUFDL0IsaURBQWdCOztJQUNoQixxREFBaUQ7O0lBQ2pELGdEQUFlOzs7OztJQVdILGtEQUFnQzs7Ozs7SUFBRSx3REFBMkM7Ozs7O0lBQ3ZGLDZDQUFzQjs7SUFBSSw2Q0FBd0I7OztBQTBHdEQsTUFBTSxPQUFPLEtBQUs7Ozs7O0lBRWhCLFlBQ1MsU0FBOEIsRUFDTCxJQUFnQjtRQUR6QyxjQUFTLEdBQVQsU0FBUyxDQUFxQjtRQUNMLFNBQUksR0FBSixJQUFJLENBQVk7SUFBSSxDQUFDOzs7O0lBRXZELFNBQVM7UUFDUCxJQUFJLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxDQUFDO0lBQ3pCLENBQUM7OztZQVpGLFNBQVMsU0FBQztnQkFDVCxRQUFRLEVBQUUsV0FBVztnQkFDckIsdUhBQXlCO2FBQzFCOzs7O1lBeEltQixZQUFZOzRDQTZJM0IsTUFBTSxTQUFDLGVBQWU7Ozs7SUFEdkIsMEJBQXFDOztJQUNyQyxxQkFBZ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIEluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBGb3JtQ29udHJvbCwgRm9ybUJ1aWxkZXIsIEZvcm1Hcm91cCwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcclxuaW1wb3J0IHsgTmV3c1RpdGxlU2VydmljZSB9IGZyb20gJy4uLy4uLy4uL25ld3MtdGl0bGUuc2VydmljZSc7XHJcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XHJcbmltcG9ydCB7IE1hdERpYWxvZywgTWF0RGlhbG9nUmVmLCBNQVRfRElBTE9HX0RBVEEgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xyXG5leHBvcnQgaW50ZXJmYWNlIERpYWxvZ0RhdGEge1xyXG4gIG1zZzogc3RyaW5nO1xyXG59XHJcblxyXG5cclxuQENvbXBvbmVudCh7XHJcbiAgc2VsZWN0b3I6ICdsaWItYWRkLWVkaXQtc3ViY2F0ZWdvcnknLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9hZGQtZWRpdC1zdWJjYXRlZ29yeS5jb21wb25lbnQuaHRtbCcsXHJcbiAgc3R5bGVVcmxzOiBbJy4vYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50LmNzcyddXHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PWRlY2xhcmF0aW9ucz09PT09PT09PT09PT09PT09PVxyXG4gIGJ1dHRvblRleHQ6IGFueSA9IFwiU1VCTUlUXCI7XHJcbiAgaGVhZGVyX25hbWU6IGFueSA9IFwiQWRkIFN1YnNjcmlwdGlvbiBDYXRlZ29yeVwiXHJcbiAgc3Vic2NyaXB0aW9uQ2F0Rm9ybTogRm9ybUdyb3VwO1xyXG4gIGNvbmZpZ0RhdGE6IGFueTtcclxuICBzdWNjZXNzTWVzc2FnZTogYW55ID0gXCJTdWJtaXR0ZWQgU3VjY2Vzc2Z1bGx5ISEhXCJcclxuICBkaWFsb2dSZWY6IGFueTtcclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5cclxuXHJcblxyXG4gIEBJbnB1dCgpXHJcbiAgc2V0IGNvbmZpZyhnZXRDb25maWc6IGFueSkge1xyXG4gICAgdGhpcy5jb25maWdEYXRhID0gZ2V0Q29uZmlnO1xyXG4gIH1cclxuXHJcblxyXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZm9ybUJ1aWxkZXI6IEZvcm1CdWlsZGVyLCBwcml2YXRlIG5ld3NsZXR0ZXJTZXJ2aWNlOiBOZXdzVGl0bGVTZXJ2aWNlLFxyXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlciAsICBwdWJsaWMgZGlhbG9nOiBNYXREaWFsb2cpIHsgfVxyXG5cclxuICBuZ09uSW5pdCgpIHtcclxuICAgIC8vZ2VuZXJhdGluZyB0aGUgZm9ybVxyXG4gICAgdGhpcy5nZW5lcmF0ZUZvcm0oKTtcclxuXHJcblxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1jaGVja2luZyB0aGUgY2FzZXMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0gXHJcbiAgICBzd2l0Y2ggKHRoaXMuY29uZmlnRGF0YS5hY3Rpb24pIHtcclxuICAgICAgY2FzZSAnYWRkJzpcclxuICAgICAgICAvKiBCdXR0b24gdGV4dCAqL1xyXG5cclxuICAgICAgICBicmVhaztcclxuICAgICAgY2FzZSAnZWRpdCc6XHJcbiAgICAgICAgLyogQnV0dG9uIHRleHQgKi9cclxuICAgICAgICB0aGlzLmJ1dHRvblRleHQgPSBcIlVQREFURVwiO1xyXG4gICAgICAgIHRoaXMuc3VjY2Vzc01lc3NhZ2UgPSBcIk9uZSByb3cgdXBkYXRlZCEhIVwiO1xyXG4gICAgICAgIHRoaXMuc2V0RGVmYXVsdFZhbHVlKHRoaXMuY29uZmlnRGF0YS5kZWZhdWx0RGF0YSk7XHJcbiAgICAgICAgdGhpcy5oZWFkZXJfbmFtZSA9IFwiRURJVFwiO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gICAgLy8gLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cclxuICB9XHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PU1PREFMIGZ1bmN0aW9ucz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIG9wZW5EaWFsb2coeDogYW55KTogdm9pZCB7XHJcbiAgICB0aGlzLmRpYWxvZ1JlZiA9IHRoaXMuZGlhbG9nLm9wZW4oTW9kYWwsIHtcclxuICAgICAgd2lkdGg6ICcyNTBweCcsXHJcbiAgICAgIGRhdGE6IHsgbXNnOiB4IH1cclxuICAgIH0pO1xyXG5cclxuICAgIHRoaXMuZGlhbG9nUmVmLmFmdGVyQ2xvc2VkKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XHJcblxyXG4gICAgfSk7XHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PURlZmF1bHQgdmFsdWU9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4gIHNldERlZmF1bHRWYWx1ZShkZWZhdWx0VmFsdWUpIHtcclxuICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2F0Rm9ybS5wYXRjaFZhbHVlKHtcclxuICAgICAgbmFtZTogZGVmYXVsdFZhbHVlLm5hbWUsXHJcbiAgICAgIHByaW9yaXR5OiBkZWZhdWx0VmFsdWUucHJpb3JpdHksXHJcbiAgICAgIHN0YXR1czogZGVmYXVsdFZhbHVlLnN0YXR1cyxcclxuXHJcbiAgICB9KTtcclxuXHJcbiAgfVxyXG4gIC8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09Zm9ybSBnZW5lcmF0aW9uPT09PT09PT09PT09PT09PT09PT09XHJcbiAgZ2VuZXJhdGVGb3JtKCkge1xyXG4gICAgdGhpcy5zdWJzY3JpcHRpb25DYXRGb3JtID0gdGhpcy5mb3JtQnVpbGRlci5ncm91cCh7XHJcbiAgICAgIG5hbWU6IFtdLFxyXG4gICAgICBwcmlvcml0eTogW10sXHJcbiAgICAgIHN0YXR1czogW11cclxuICAgIH0pO1xyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XHJcblxyXG5cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09U1VCTUlUIEZVTkNUSU9OPT09PT09PT09PT09PT09PT09PT09PVxyXG4gIG9uU3VibWl0KCkge1xyXG5cclxuICAgIC8qIHN0b3AgaGVyZSBpZiBmb3JtIGlzIGludmFsaWQgKi9cclxuICAgIGlmICh0aGlzLnN1YnNjcmlwdGlvbkNhdEZvcm0uaW52YWxpZCkge1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICBpZiAodGhpcy5zdWJzY3JpcHRpb25DYXRGb3JtLnZhbHVlLnN0YXR1cykge1xyXG4gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9uQ2F0Rm9ybS52YWx1ZS5zdGF0dXMgPSBwYXJzZUludChcIjFcIik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25DYXRGb3JtLnZhbHVlLnN0YXR1cyA9IHBhcnNlSW50KFwiMFwiKTs7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIC8qIHN0YXJ0IHByb2Nlc3MgdG8gc3VibWl0ZWQgZGF0YSAqL1xyXG4gICAgICBsZXQgcG9zdERhdGE6IGFueSA9IHtcclxuICAgICAgICBzb3VyY2U6IHRoaXMuY29uZmlnRGF0YS5zb3VyY2UsXHJcbiAgICAgICAgZGF0YTogT2JqZWN0LmFzc2lnbih0aGlzLnN1YnNjcmlwdGlvbkNhdEZvcm0udmFsdWUsIHRoaXMuY29uZmlnRGF0YS5jb25kaXRpb24pXHJcbiAgICAgIH07XHJcbiAgICAgIHRoaXMubmV3c2xldHRlclNlcnZpY2UuYWRkRGF0YSh0aGlzLmNvbmZpZ0RhdGEuZW5kcG9pbnQsIHBvc3REYXRhKS5zdWJzY3JpYmUoKHJlc3BvbnNlOiBhbnkpID0+IHtcclxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID09IFwic3VjY2Vzc1wiKSB7XHJcbiAgICAgICAgICBcclxuICAgICAgICAgIHRoaXMub3BlbkRpYWxvZyh0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcclxuICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xyXG4gICAgICAgICAgfSwgMjAwMCk7XHJcbiAgICAgICAgICB0aGlzLnJvdXRlci5uYXZpZ2F0ZShbdGhpcy5jb25maWdEYXRhLmNhbGxCYWNrXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIGFsZXJ0KFwiU29tZSBlcnJvciBvY2N1cnJlZC4gUGxlYXNlIHRyeSBhbmdhaW4uXCIpO1xyXG4gICAgICAgIH1cclxuICAgICAgfSwgKGVycm9yKSA9PiB7XHJcbiAgICAgICAgYWxlcnQoXCJTb21lIGVycm9yIG9jY3VycmVkLiBQbGVhc2UgdHJ5IGFuZ2Fpbi5cIik7XHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gIH1cclxuICAvLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG59XHJcblxyXG5cclxuXHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09TU9EQUwgQ09NUE9ORU5UPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG5AQ29tcG9uZW50KHtcclxuICBzZWxlY3RvcjogJ2FwcC1tb2RhbCcsXHJcbiAgdGVtcGxhdGVVcmw6ICdtb2RhbC5odG1sJyxcclxufSlcclxuZXhwb3J0IGNsYXNzIE1vZGFsIHtcclxuXHJcbiAgY29uc3RydWN0b3IoXHJcbiAgICBwdWJsaWMgZGlhbG9nUmVmOiBNYXREaWFsb2dSZWY8TW9kYWw+LFxyXG4gICAgQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBkYXRhOiBEaWFsb2dEYXRhKSB7IH1cclxuXHJcbiAgb25Ob0NsaWNrKCk6IHZvaWQge1xyXG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcclxuICB9XHJcblxyXG59XHJcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxyXG4iXX0=