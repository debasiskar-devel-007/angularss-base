import { OnInit, ComponentFactoryResolver, ViewContainerRef } from '@angular/core';
import { MatSort, MatTableDataSource, MatPaginator } from '@angular/material';
import { ApiService } from './api.service';
import { MatDialog, MatDialogRef } from '@angular/material';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { FormBuilder, FormControl } from '@angular/forms';
import { Router } from "@angular/router";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";
import { DomSanitizer } from '@angular/platform-browser';
export declare class ListingComponent implements OnInit {
    _apiService: ApiService;
    dialog: MatDialog;
    private bottomSheet;
    fb: FormBuilder;
    private router;
    private resolver;
    private container;
    _http: HttpClient;
    sanitizer: DomSanitizer;
    myControl: FormControl;
    datasourceval: any;
    search_settingsval: any;
    click_to_add_ananother_pageval: any;
    grab_linkval: any;
    date_search_sourceval: any;
    date_search_endpointval: any;
    urlval: any;
    searchendpointval: any;
    searchListval: any;
    pdf_link_val: any;
    statusarrval: any;
    skipval: any;
    errormg: any;
    jwttokenval: any;
    detail_datatypeval: any;
    detail_skip_arrayval: any;
    deleteendpointval: any;
    editrouteval: any;
    apiurlval: any;
    updateendpointval: any;
    modify_header_arrayval: any;
    selection: any;
    sourcedataval: any;
    emailarrayval: any;
    columns: any;
    olddata: any;
    tsearch: any;
    autosearch: any;
    x: any;
    custombuttonval: any;
    result: any;
    sh: any;
    art: any;
    aud2: any;
    aud: any;
    previewFlug: any;
    search_settings: any;
    click_to_add_ananother_page: any;
    grab_link: any;
    custombutton: any;
    date_search_source: any;
    date_search_endpoint: any;
    url: any;
    searchendpoint: any;
    pdf_link: any;
    searchList: any;
    datasource: any;
    skip: any;
    detail_datatype: any;
    detail_skip_array: any;
    sourcedata: any;
    modify_header_array: any;
    deleteendpoint: any;
    updateendpoint: any;
    apiurl: any;
    jwttoken: any;
    statusarr: any;
    emailarray: any;
    editroute: any;
    preview_artistxp: any;
    stateGroups: string[];
    stateGroup: Observable<string[]>;
    displayedColumns: string[];
    datacolumns: string[];
    displayedColumnsheader: string[];
    formarray: any;
    start_date: any;
    dateSearch_condition: any;
    selectSearch_condition: any;
    autoSearch_condition: any;
    textSearch_condition: any;
    end_date: any;
    i: any;
    loading: any;
    preresult: any;
    dataSource: MatTableDataSource<{}>;
    sort: MatSort;
    paginator: MatPaginator;
    myForm: any;
    constructor(_apiService: ApiService, dialog: MatDialog, bottomSheet: MatBottomSheet, fb: FormBuilder, router: Router, resolver: ComponentFactoryResolver, container: ViewContainerRef, _http: HttpClient, sanitizer: DomSanitizer);
    inputblur(val: any): void;
    ngOnInit(): void;
    onSubmit(): void;
    dateSearch(val: any): void;
    selectSearch(value: any, type: any): void;
    autosearchfunction(value: any): void;
    textsearchfunction(value: any): void;
    private _filter;
    getstatus(val: any): any;
    hi(val: any): void;
    grapurl(val: any): void;
    copyText(row: any, val: string): void;
    clickurl(val: any, url: any): void;
    /** Whether the number of selected elements matches the total number of rows. */
    isAllSelected(): boolean;
    /** Selects all rows if they are not all selected; otherwise clear selection. */
    masterToggle(): void;
    /** The label for the checkbox on the passed row */
    checkboxLabel(row?: any): string;
    createData(point: any): {};
    applyFilter(filterValue: string): void;
    styleCell(col_name: any, row: any): {};
    viewdata(data1: any): void;
    managestatus(data: any): void;
    custombuttonfunc(data: any): void;
    managestatusmultiple(): void;
    deletemultiple(): void;
    deletedata(data: any): void;
    editdata(data: any): void;
    artistxpPreview(singleData: any): void;
}
export declare class Confirmdialog {
    dialogRef: MatDialogRef<Confirmdialog>;
    data: any;
    sanitizer: DomSanitizer;
    constructor(dialogRef: MatDialogRef<Confirmdialog>, data: any, sanitizer: DomSanitizer);
    onNoClick(): void;
    sanitizeUrl(unsafeurl: any, data: any, rowdata: any): import("@angular/platform-browser").SafeResourceUrl;
}
export declare class BottomSheet {
    private bottomSheetRef;
    data: any;
    constructor(bottomSheetRef: MatBottomSheetRef<BottomSheet>, data: any);
    openLink(val: any): void;
}