/**
 * @fileoverview added by tsickle
 * Generated from: lib/news-title.module.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NewsTitleComponent, modalData } from './news-title.component';
import { DemoMaterialModule } from './material-module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ApiService } from './api.service';
import { ListingNewsletterComponent } from './Components/listing-newsletter/listing-newsletter.component';
import { ListingModule } from 'listing-angular7';
import { AddEditSubcategoryComponent, Modal } from './Components/subscriptioncategory/add-edit-subcategory/add-edit-subcategory.component';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ListingSubcategoryComponent } from './Components/subscriptioncategory/listing-subcategory/listing-subcategory.component';
import { AddEditSubscriptiongroupComponent, Modal2 } from './Components/add-edit-subscriptiongroup/add-edit-subscriptiongroup.component';
import { AddEditNewsletterlibComponent } from './Components/newsletter/add-edit-newsletterlib/add-edit-newsletterlib.component';
import { ListingNewsletterlibComponent } from './Components/newsletter/listing-newsletterlib/listing-newsletterlib.component';
import { AddEditSenderComponent, Modal3 } from './Components/senderslist/add-edit-sender/add-edit-sender.component';
import { ListingSenderComponent } from './Components/senderslist/listing-sender/listing-sender.component';
import { AddEditTestemaillibComponent, Modal4 } from './Components/testemails/add-edit-testemaillib/add-edit-testemaillib.component';
import { ListingTestemaillibComponent } from './Components/testemails/listing-testemaillib/listing-testemaillib.component';
import { AmazingTimePickerModule } from 'amazing-time-picker';
// import {NgxMaterialTimepickerModule} from 'ngx-material-timepicker';
import { DatePipe } from '@angular/common';
import { CKEditorModule } from 'ngx-ckeditor';
import { MomentModule } from 'ngx-moment';
var NewsTitleModule = /** @class */ (function () {
    function NewsTitleModule() {
    }
    NewsTitleModule.decorators = [
        { type: NgModule, args: [{
                    declarations: [Modal4, Modal2, Modal, NewsTitleComponent, modalData, ListingNewsletterComponent,
                        AddEditSubcategoryComponent, ListingSubcategoryComponent, AddEditSubscriptiongroupComponent,
                        AddEditNewsletterlibComponent, ListingNewsletterlibComponent, AddEditSenderComponent,
                        ListingSenderComponent, Modal3, AddEditTestemaillibComponent, ListingTestemaillibComponent,
                    ],
                    imports: [
                        DemoMaterialModule,
                        ReactiveFormsModule, FormsModule,
                        BrowserAnimationsModule,
                        CommonModule,
                        ListingModule,
                        RouterModule,
                        HttpClientModule,
                        AmazingTimePickerModule,
                        // NgxMaterialTimepickerModule,
                        CKEditorModule,
                        MomentModule
                    ],
                    exports: [AddEditSenderComponent, AddEditNewsletterlibComponent, AddEditSubscriptiongroupComponent,
                        Modal, NewsTitleComponent, ListingNewsletterComponent, AddEditSubcategoryComponent,
                        ListingSubcategoryComponent, AddEditTestemaillibComponent, ListingTestemaillibComponent, ListingNewsletterlibComponent,
                        ListingSenderComponent],
                    schemas: [CUSTOM_ELEMENTS_SCHEMA],
                    providers: [ApiService, DatePipe],
                    entryComponents: [Modal4, Modal3, NewsTitleComponent, modalData, Modal, Modal2]
                },] }
    ];
    return NewsTitleModule;
}());
export { NewsTitleModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV3cy10aXRsZS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZXdzLXRpdGxlLWxpYi1pbmZsdXhpcS8iLCJzb3VyY2VzIjpbImxpYi9uZXdzLXRpdGxlLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFBRSxRQUFRLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDakUsT0FBTyxFQUFFLGtCQUFrQixFQUFFLFNBQVMsRUFBRSxNQUFNLHdCQUF3QixDQUFDO0FBQ3ZFLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLG1CQUFtQixDQUFDO0FBQ3ZELE9BQU8sRUFBRSxtQkFBbUIsRUFBRSxXQUFXLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNsRSxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxzQ0FBc0MsQ0FBQztBQUMvRSxPQUFPLEVBQUUsWUFBWSxFQUFFLE1BQU0saUJBQWlCLENBQUM7QUFDL0MsT0FBTyxFQUFFLFVBQVUsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMzQyxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSw4REFBOEQsQ0FBQztBQUMxRyxPQUFPLEVBQUUsYUFBYSxFQUFFLE1BQU0sa0JBQWtCLENBQUM7QUFDakQsT0FBTyxFQUFFLDJCQUEyQixFQUFDLEtBQUssRUFBRSxNQUFNLHVGQUF1RixDQUFDO0FBQzFJLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTSxpQkFBaUIsQ0FBQztBQUMvQyxPQUFPLEVBQUUsZ0JBQWdCLEVBQUUsTUFBTSxzQkFBc0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsMkJBQTJCLEVBQUUsTUFBTSxxRkFBcUYsQ0FBQztBQUNsSSxPQUFPLEVBQUUsaUNBQWlDLEVBQUMsTUFBTSxFQUFFLE1BQU0sOEVBQThFLENBQUM7QUFDeEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0saUZBQWlGLENBQUM7QUFDaEksT0FBTyxFQUFFLDZCQUE2QixFQUFFLE1BQU0sK0VBQStFLENBQUM7QUFDOUgsT0FBTyxFQUFFLHNCQUFzQixFQUFHLE1BQU0sRUFBQyxNQUFNLG9FQUFvRSxDQUFDO0FBQ3BILE9BQU8sRUFBRSxzQkFBc0IsRUFBRSxNQUFNLGtFQUFrRSxDQUFDO0FBQzFHLE9BQU8sRUFBRSw0QkFBNEIsRUFBQyxNQUFNLEVBQUUsTUFBTSwrRUFBK0UsQ0FBQztBQUNwSSxPQUFPLEVBQUUsNEJBQTRCLEVBQUUsTUFBTSw2RUFBNkUsQ0FBQztBQUMzSCxPQUFPLEVBQUUsdUJBQXVCLEVBQUUsTUFBTSxxQkFBcUIsQ0FBQzs7QUFFOUQsT0FBTyxFQUFFLFFBQVEsRUFBQyxNQUFNLGlCQUFpQixDQUFDO0FBQzFDLE9BQU8sRUFBRSxjQUFjLEVBQUUsTUFBTSxjQUFjLENBQUM7QUFDOUMsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLFlBQVksQ0FBQztBQUcxQztJQUFBO0lBNEIrQixDQUFDOztnQkE1Qi9CLFFBQVEsU0FBQztvQkFDUixZQUFZLEVBQUUsQ0FBQyxNQUFNLEVBQUMsTUFBTSxFQUFDLEtBQUssRUFBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUUsMEJBQTBCO3dCQUMxRiwyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSxpQ0FBaUM7d0JBQzNGLDZCQUE2QixFQUFFLDZCQUE2QixFQUFFLHNCQUFzQjt3QkFDcEYsc0JBQXNCLEVBQUMsTUFBTSxFQUFFLDRCQUE0QixFQUFFLDRCQUE0QjtxQkFDeEY7b0JBQ0gsT0FBTyxFQUFFO3dCQUNQLGtCQUFrQjt3QkFDbEIsbUJBQW1CLEVBQUMsV0FBVzt3QkFDL0IsdUJBQXVCO3dCQUN2QixZQUFZO3dCQUNaLGFBQWE7d0JBQ2IsWUFBWTt3QkFDWixnQkFBZ0I7d0JBQ2hCLHVCQUF1Qjt3QkFDdkIsK0JBQStCO3dCQUMvQixjQUFjO3dCQUNkLFlBQVk7cUJBRWI7b0JBQ0QsT0FBTyxFQUFFLENBQUMsc0JBQXNCLEVBQUMsNkJBQTZCLEVBQUMsaUNBQWlDO3dCQUM5RixLQUFLLEVBQUMsa0JBQWtCLEVBQUMsMEJBQTBCLEVBQUMsMkJBQTJCO3dCQUMvRSwyQkFBMkIsRUFBQyw0QkFBNEIsRUFBQyw0QkFBNEIsRUFBQyw2QkFBNkI7d0JBQ25ILHNCQUFzQixDQUFDO29CQUN6QixPQUFPLEVBQUUsQ0FBQyxzQkFBc0IsQ0FBQztvQkFDakMsU0FBUyxFQUFFLENBQUMsVUFBVSxFQUFDLFFBQVEsQ0FBQztvQkFDaEMsZUFBZSxFQUFDLENBQUMsTUFBTSxFQUFDLE1BQU0sRUFBQyxrQkFBa0IsRUFBRSxTQUFTLEVBQUMsS0FBSyxFQUFDLE1BQU0sQ0FBQztpQkFDM0U7O0lBQzhCLHNCQUFDO0NBQUEsQUE1QmhDLElBNEJnQztTQUFuQixlQUFlIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUsIENVU1RPTV9FTEVNRU5UU19TQ0hFTUEgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhIH0gZnJvbSAnLi9uZXdzLXRpdGxlLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBEZW1vTWF0ZXJpYWxNb2R1bGUgfSBmcm9tICcuL21hdGVyaWFsLW1vZHVsZSc7XG5pbXBvcnQgeyBSZWFjdGl2ZUZvcm1zTW9kdWxlLCBGb3Jtc01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IEJyb3dzZXJBbmltYXRpb25zTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci9hbmltYXRpb25zJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBBcGlTZXJ2aWNlIH0gZnJvbSAnLi9hcGkuc2VydmljZSc7XG5pbXBvcnQgeyBMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy9saXN0aW5nLW5ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVyLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBMaXN0aW5nTW9kdWxlIH0gZnJvbSAnbGlzdGluZy1hbmd1bGFyNyc7XG5pbXBvcnQgeyBBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsTW9kYWwgfSBmcm9tICcuL0NvbXBvbmVudHMvc3Vic2NyaXB0aW9uY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkvYWRkLWVkaXQtc3ViY2F0ZWdvcnkuY29tcG9uZW50JztcbmltcG9ydCB7IFJvdXRlck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5pbXBvcnQgeyBIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL3N1YnNjcmlwdGlvbmNhdGVnb3J5L2xpc3Rpbmctc3ViY2F0ZWdvcnkvbGlzdGluZy1zdWJjYXRlZ29yeS5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LE1vZGFsMiB9IGZyb20gJy4vQ29tcG9uZW50cy9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC9hZGQtZWRpdC1zdWJzY3JpcHRpb25ncm91cC5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvbmV3c2xldHRlci9hZGQtZWRpdC1uZXdzbGV0dGVybGliL2FkZC1lZGl0LW5ld3NsZXR0ZXJsaWIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdOZXdzbGV0dGVybGliQ29tcG9uZW50IH0gZnJvbSAnLi9Db21wb25lbnRzL25ld3NsZXR0ZXIvbGlzdGluZy1uZXdzbGV0dGVybGliL2xpc3RpbmctbmV3c2xldHRlcmxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQWRkRWRpdFNlbmRlckNvbXBvbmVudCAsIE1vZGFsM30gZnJvbSAnLi9Db21wb25lbnRzL3NlbmRlcnNsaXN0L2FkZC1lZGl0LXNlbmRlci9hZGQtZWRpdC1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IExpc3RpbmdTZW5kZXJDb21wb25lbnQgfSBmcm9tICcuL0NvbXBvbmVudHMvc2VuZGVyc2xpc3QvbGlzdGluZy1zZW5kZXIvbGlzdGluZy1zZW5kZXIuY29tcG9uZW50JztcbmltcG9ydCB7IEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTW9kYWw0IH0gZnJvbSAnLi9Db21wb25lbnRzL3Rlc3RlbWFpbHMvYWRkLWVkaXQtdGVzdGVtYWlsbGliL2FkZC1lZGl0LXRlc3RlbWFpbGxpYi5jb21wb25lbnQnO1xuaW1wb3J0IHsgTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCB9IGZyb20gJy4vQ29tcG9uZW50cy90ZXN0ZW1haWxzL2xpc3RpbmctdGVzdGVtYWlsbGliL2xpc3RpbmctdGVzdGVtYWlsbGliLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBBbWF6aW5nVGltZVBpY2tlck1vZHVsZSB9IGZyb20gJ2FtYXppbmctdGltZS1waWNrZXInO1xuLy8gaW1wb3J0IHtOZ3hNYXRlcmlhbFRpbWVwaWNrZXJNb2R1bGV9IGZyb20gJ25neC1tYXRlcmlhbC10aW1lcGlja2VyJztcbmltcG9ydCB7IERhdGVQaXBlfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgQ0tFZGl0b3JNb2R1bGUgfSBmcm9tICduZ3gtY2tlZGl0b3InO1xuaW1wb3J0IHsgTW9tZW50TW9kdWxlIH0gZnJvbSAnbmd4LW1vbWVudCc7XG5cblxuQE5nTW9kdWxlKHtcbiAgZGVjbGFyYXRpb25zOiBbTW9kYWw0LE1vZGFsMixNb2RhbCxOZXdzVGl0bGVDb21wb25lbnQsIG1vZGFsRGF0YSwgTGlzdGluZ05ld3NsZXR0ZXJDb21wb25lbnQsIFxuICAgIEFkZEVkaXRTdWJjYXRlZ29yeUNvbXBvbmVudCwgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LCBBZGRFZGl0U3Vic2NyaXB0aW9uZ3JvdXBDb21wb25lbnQsIFxuICAgIEFkZEVkaXROZXdzbGV0dGVybGliQ29tcG9uZW50LCBMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCwgQWRkRWRpdFNlbmRlckNvbXBvbmVudCwgXG4gICAgTGlzdGluZ1NlbmRlckNvbXBvbmVudCxNb2RhbDMsIEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsIExpc3RpbmdUZXN0ZW1haWxsaWJDb21wb25lbnQsXG4gICAgXSxcbiAgaW1wb3J0czogW1xuICAgIERlbW9NYXRlcmlhbE1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLEZvcm1zTW9kdWxlLFxuICAgIEJyb3dzZXJBbmltYXRpb25zTW9kdWxlLFxuICAgIENvbW1vbk1vZHVsZSxcbiAgICBMaXN0aW5nTW9kdWxlLFxuICAgIFJvdXRlck1vZHVsZSxcbiAgICBIdHRwQ2xpZW50TW9kdWxlLFxuICAgIEFtYXppbmdUaW1lUGlja2VyTW9kdWxlLFxuICAgIC8vIE5neE1hdGVyaWFsVGltZXBpY2tlck1vZHVsZSxcbiAgICBDS0VkaXRvck1vZHVsZSxcbiAgICBNb21lbnRNb2R1bGVcbiAgICBcbiAgXSxcbiAgZXhwb3J0czogW0FkZEVkaXRTZW5kZXJDb21wb25lbnQsQWRkRWRpdE5ld3NsZXR0ZXJsaWJDb21wb25lbnQsQWRkRWRpdFN1YnNjcmlwdGlvbmdyb3VwQ29tcG9uZW50LFxuICAgIE1vZGFsLE5ld3NUaXRsZUNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlckNvbXBvbmVudCxBZGRFZGl0U3ViY2F0ZWdvcnlDb21wb25lbnQsXG4gICAgTGlzdGluZ1N1YmNhdGVnb3J5Q29tcG9uZW50LEFkZEVkaXRUZXN0ZW1haWxsaWJDb21wb25lbnQsTGlzdGluZ1Rlc3RlbWFpbGxpYkNvbXBvbmVudCxMaXN0aW5nTmV3c2xldHRlcmxpYkNvbXBvbmVudCxcbiAgICBMaXN0aW5nU2VuZGVyQ29tcG9uZW50XSxcbiAgc2NoZW1hczogW0NVU1RPTV9FTEVNRU5UU19TQ0hFTUFdLFxuICBwcm92aWRlcnM6IFtBcGlTZXJ2aWNlLERhdGVQaXBlXSxcbiAgZW50cnlDb21wb25lbnRzOltNb2RhbDQsTW9kYWwzLE5ld3NUaXRsZUNvbXBvbmVudCwgbW9kYWxEYXRhLE1vZGFsLE1vZGFsMl1cbn0pXG5leHBvcnQgY2xhc3MgTmV3c1RpdGxlTW9kdWxlIHsgfVxuXG5cblxuIl19