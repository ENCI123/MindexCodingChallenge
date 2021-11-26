(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<h1 class=\"page-title\">Mindex Coding Challenge</h1>\n<app-employee-list></app-employee-list>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"data.editDelete === 'deleted'\">\r\n  <div>Deleted successfully</div>\r\n</div>\r\n\r\n<div *ngIf=\"data.editDelete === 'editted'\">\r\n  <div>Updated successfully</div>\r\n</div>\r\n\r\n<!--Delete Dialog  -->\r\n<div *ngIf=\"data.editDelete === 'delete'\">\r\n  <div class=\"edit-delete-container\">\r\n    <h2 mat-dialog-title>Delete Employee</h2>\r\n    <mat-dialog-content>\r\n      <p>\r\n        Permanently Delete Employee {{ data.reporter.firstName }}\r\n        {{ data.reporter.lastName }} ?\r\n      </p>\r\n      <p>This cannot be undone.</p>\r\n    </mat-dialog-content>\r\n    <mat-dialog-actions>\r\n      <button\r\n        mat-raised-button\r\n        class=\"delete-ok\"\r\n        (click)=\"deleteReporter(data.reporter, 'delete')\"\r\n      >\r\n        OK\r\n      </button>\r\n      <button mat-button mat-dialog-close>CANCEL</button>\r\n    </mat-dialog-actions>\r\n  </div>\r\n</div>\r\n\r\n<!--Edit Dialog  -->\r\n<div *ngIf=\"data.editDelete === 'edit'\">\r\n  <form class=\"edit-delete-container\">\r\n    <p>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>First name</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"First Name\"\r\n          [value]=\"data.reporter.firstName\"\r\n          disabled\r\n        />\r\n      </mat-form-field>\r\n    </p>\r\n    <p>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Last name</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"Last Name\"\r\n          [value]=\"data.reporter.lastName\"\r\n          disabled\r\n        />\r\n      </mat-form-field>\r\n    </p>\r\n    <p>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Position</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"Title\"\r\n          [value]=\"data.reporter.position\"\r\n          disabled\r\n        />\r\n      </mat-form-field>\r\n    </p>\r\n\r\n    <p>\r\n      <mat-form-field appearance=\"outline\">\r\n        <mat-label>Compensation</mat-label>\r\n        <input\r\n          matInput\r\n          placeholder=\"Compensation\"\r\n          required\r\n          type=\"number\"\r\n          [value]=\"data.reporter.compensation || null\"\r\n          id=\"compensation\"\r\n          #compensation\r\n        />\r\n      </mat-form-field>\r\n    </p>\r\n    <mat-dialog-actions>\r\n      <button\r\n        mat-raised-button\r\n        (click)=\"\r\n          updateEmployeeCompensation(data.reporter, compensation.value, 'edit')\r\n        \"\r\n      >\r\n        SAVE\r\n      </button>\r\n      <button mat-button mat-dialog-close>CANCEL</button>\r\n    </mat-dialog-actions>\r\n  </form>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html":
/*!**************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html ***!
  \**************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-grid-list class=\"employee-list\" cols=\"1\" rowHeight=\"200px\">\r\n  <mat-grid-tile *ngFor=\"let emp of employees\">\r\n    <app-employee\r\n      (delete)=\"handleDeleteRequest($event)\"\r\n      (updateCompensation)=\"handleEditRequest($event)\"\r\n      [employee]=\"emp\"\r\n    ></app-employee>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"employee\">\r\n  <mat-card-header>\r\n    <mat-card-title\r\n      >{{ employee.lastName }} {{ employee.firstName }},\r\n      {{ employee.position }}</mat-card-title\r\n    >\r\n    <mat-card-subtitle>\r\n      <dt>\r\n        Employee ID:{{ employee.id }} Direct Reports:{{\r\n          employee.directReports ? employee.directReports.length : 0\r\n        }}\r\n      </dt>\r\n    </mat-card-subtitle>\r\n  </mat-card-header>\r\n\r\n  <mat-card-content>\r\n    <table>\r\n      <thead>\r\n        <tr>\r\n          <th id=\"reports\">Direct Reports:</th>\r\n          <th id=\"compnesation\">Compensation</th>\r\n          <th id=\"edit\">Edit</th>\r\n          <th id=\"delete\">Delete</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody *ngIf=\"employee.directReports\">\r\n        <tr mat-cell *ngFor=\"let reporter of dirReports\">\r\n          <td>\r\n            {{ reporter.firstName }}\r\n            {{ reporter.lastName }}\r\n            ,\r\n            {{ reporter.position }}\r\n          </td>\r\n          <td>\r\n            {{ reporter.compensation }}\r\n          </td>\r\n          <td>\r\n            <button\r\n              mat-raised-button\r\n              (click)=\"openDialog(employee, reporter, 'edit')\"\r\n              mat-flat-button\r\n              color=\"black\"\r\n              aria-label=\"edit_button\"\r\n            >\r\n              <mat-icon>edit</mat-icon>\r\n            </button>\r\n          </td>\r\n          <td>\r\n            <button\r\n              mat-raised-button\r\n              (click)=\"openDialog(employee, reporter, 'delete')\"\r\n              mat-flat-button\r\n              color=\"black\"\r\n              aria-label=\"delete_button\"\r\n            >\r\n              <mat-icon>delete</mat-icon>\r\n            </button>\r\n          </td>\r\n        </tr>\r\n      </tbody>\r\n\r\n      <tbody\r\n        *ngIf=\"!employee.directReports || employee.directReports?.length === 0\"\r\n      >\r\n        <tr mat-cell>\r\n          <td>This employee has no reports.</td>\r\n          <td>N/A</td>\r\n          <td>N/A</td>\r\n          <td>N/A</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </mat-card-content>\r\n</mat-card>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".page-title {\r\n  text-align: center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5wYWdlLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var forms_1 = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var platform_browser_1 = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
var animations_1 = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
var angular_in_memory_web_api_1 = __webpack_require__(/*! angular-in-memory-web-api */ "./node_modules/angular-in-memory-web-api/__ivy_ngcc__/index.js");
var app_component_1 = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
var backendless_mock_service_1 = __webpack_require__(/*! ./backendless-mock.service */ "./src/app/backendless-mock.service.ts");
var employee_component_1 = __webpack_require__(/*! ./employee/employee.component */ "./src/app/employee/employee.component.ts");
var employee_list_component_1 = __webpack_require__(/*! ./employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_service_1 = __webpack_require__(/*! ./employee.service */ "./src/app/employee.service.ts");
var card_1 = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
var grid_list_1 = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
var input_1 = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
var menu_1 = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
var icon_1 = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
var button_1 = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var dialog_2 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_dialog_component_1 = __webpack_require__(/*! ./employee-dialog/employee-dialog.component */ "./src/app/employee-dialog/employee-dialog.component.ts");
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                employee_component_1.EmployeeComponent,
                employee_list_component_1.EmployeeListComponent,
                employee_dialog_component_1.EmployeeDialogComponent,
            ],
            imports: [
                platform_browser_1.BrowserModule,
                animations_1.BrowserAnimationsModule,
                forms_1.FormsModule,
                http_1.HttpClientModule,
                angular_in_memory_web_api_1.HttpClientInMemoryWebApiModule.forRoot(backendless_mock_service_1.BackendlessMockService, {
                    apiBase: "api/",
                    delay: 250,
                    passThruUnknownUrl: true,
                    post204: false,
                    put204: false,
                }),
                card_1.MatCardModule,
                grid_list_1.MatGridListModule,
                input_1.MatInputModule,
                menu_1.MatMenuModule,
                icon_1.MatIconModule,
                button_1.MatButtonModule,
                dialog_1.MatDialogModule,
            ],
            entryComponents: [employee_dialog_component_1.EmployeeDialogComponent],
            providers: [
                employee_service_1.EmployeeService,
                //{ provide: MatDialog, useClass: EmployeeDialogComponent },
                { provide: dialog_2.MatDialogRef, useValue: {} },
                { provide: dialog_2.MAT_DIALOG_DATA, useValue: [] },
            ],
            bootstrap: [app_component_1.AppComponent],
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;


/***/ }),

/***/ "./src/app/backendless-mock.service.ts":
/*!*********************************************!*\
  !*** ./src/app/backendless-mock.service.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var BackendlessMockService = /** @class */ (function () {
    function BackendlessMockService() {
    }
    BackendlessMockService.prototype.createDb = function () {
        var employees = [
            {
                id: 1,
                firstName: "Brian",
                lastName: "McGee",
                position: "CEO",
                directReports: [2, 3],
                compensation: 1000000,
            },
            {
                id: 2,
                firstName: "Homer",
                lastName: "Thompson",
                position: "Dev Manager",
                directReports: [4],
                compensation: 200000,
            },
            {
                id: 3,
                firstName: "Rock",
                lastName: "Strongo",
                position: "Lead Tester",
                compensation: 300000,
            },
            {
                id: 4,
                firstName: "Max",
                lastName: "Power",
                position: "Junior Software Engineer",
                compensation: 4000000,
            },
        ];
        return { employees: employees };
    };
    return BackendlessMockService;
}());
exports.BackendlessMockService = BackendlessMockService;


/***/ }),

/***/ "./src/app/employee-dialog/employee-dialog.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/employee-dialog/employee-dialog.component.ts ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var EmployeeDialogComponent = /** @class */ (function () {
    function EmployeeDialogComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    EmployeeDialogComponent.prototype.ngOnInit = function () { };
    //handle delete  button click
    EmployeeDialogComponent.prototype.deleteReporter = function (reporter, editDelete) {
        this.dialogRef.close(__assign(__assign({}, reporter), { editDelete: editDelete }));
    };
    //handle edit save buton click
    EmployeeDialogComponent.prototype.updateEmployeeCompensation = function (reporter, newCompensation, editDelete) {
        reporter.compensation = newCompensation;
        this.dialogRef.close(__assign(__assign({}, reporter), { editDelete: editDelete }));
    };
    EmployeeDialogComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialogRef },
        { type: undefined, decorators: [{ type: core_1.Inject, args: [dialog_1.MAT_DIALOG_DATA,] }] }
    ]; };
    EmployeeDialogComponent = __decorate([
        core_1.Component({
            selector: "app-employee-dialog",
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-dialog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-dialog/employee-dialog.component.html")).default,
        }),
        __param(1, core_1.Inject(dialog_1.MAT_DIALOG_DATA)),
        __metadata("design:paramtypes", [dialog_1.MatDialogRef, Object])
    ], EmployeeDialogComponent);
    return EmployeeDialogComponent;
}());
exports.EmployeeDialogComponent = EmployeeDialogComponent;


/***/ }),

/***/ "./src/app/employee-list/employee-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.css ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VtcGxveWVlLWxpc3QvZW1wbG95ZWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/employee-list/employee-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/employee-list/employee-list.component.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var employee_service_1 = __webpack_require__(/*! ../employee.service */ "./src/app/employee.service.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_dialog_component_1 = __webpack_require__(/*! ../employee-dialog/employee-dialog.component */ "./src/app/employee-dialog/employee-dialog.component.ts");
var EmployeeListComponent = /** @class */ (function () {
    function EmployeeListComponent(dialog, employeeService) {
        this.dialog = dialog;
        this.employeeService = employeeService;
        this.employees = [];
    }
    EmployeeListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.employeeService
            .getAll()
            .pipe(operators_1.reduce(function (emps, e) { return emps.concat(e); }, []), operators_1.map(function (emps) { return (_this.employees = emps); }), operators_1.catchError(this.handleError.bind(this)))
            .subscribe();
    };
    EmployeeListComponent.prototype.getAllEmployees = function () {
        var _this = this;
        this.employeeService
            .getAll()
            .pipe(operators_1.reduce(function (emps, e) { return emps.concat(e); }, []), operators_1.map(function (emps) { return (_this.employees = emps); }), operators_1.catchError(this.handleError.bind(this)))
            .subscribe();
    };
    //process the data from emitter:delete, delete the target employee
    EmployeeListComponent.prototype.handleDeleteRequest = function (employee) {
        var _this = this;
        this.employeeService
            .save(employee)
            .pipe(operators_1.catchError(this.handleError.bind(this)))
            .subscribe(function () {
            var editDelete = "deleted";
            // open delete confirmation dialog after successfully delete the target employee
            _this.dialog.open(employee_dialog_component_1.EmployeeDialogComponent, {
                data: __assign(__assign({}, employee), { editDelete: editDelete }),
            });
            setTimeout(function () { return _this.dialog.closeAll(); }, 880);
            //get the updated data after service call
            _this.getAllEmployees();
        });
    };
    //process the data emitter:updateCompensation, update the target employee
    EmployeeListComponent.prototype.handleEditRequest = function (employee) {
        var _this = this;
        this.employeeService
            .save(employee)
            .pipe(operators_1.catchError(this.handleError.bind(this)))
            .subscribe(function () {
            var editDelete = "editted";
            // open edit confirmation dialog after successfully edit the target employee
            _this.dialog.open(employee_dialog_component_1.EmployeeDialogComponent, {
                data: __assign(__assign({}, employee), { editDelete: editDelete }),
            });
            //get the updated data after service call
            setTimeout(function () { return _this.dialog.closeAll(); }, 880);
            _this.getAllEmployees();
        });
    };
    EmployeeListComponent.prototype.handleError = function (e) {
        console.error(e);
        return (this.errorMessage = e.message || "Unable to retrieve employees");
    };
    EmployeeListComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialog },
        { type: employee_service_1.EmployeeService }
    ]; };
    EmployeeListComponent = __decorate([
        core_1.Component({
            selector: "app-employee-list",
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee-list/employee-list.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee-list.component.css */ "./src/app/employee-list/employee-list.component.css")).default]
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog,
            employee_service_1.EmployeeService])
    ], EmployeeListComponent);
    return EmployeeListComponent;
}());
exports.EmployeeListComponent = EmployeeListComponent;


/***/ }),

/***/ "./src/app/employee.service.ts":
/*!*************************************!*\
  !*** ./src/app/employee.service.ts ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var http_1 = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var rxjs_1 = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var operators_1 = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var EmployeeService = /** @class */ (function () {
    function EmployeeService(http) {
        this.http = http;
        this.url = "/api/employees";
    }
    EmployeeService.prototype.getAll = function () {
        return this.http.get(this.url).pipe(operators_1.flatMap(function (emps) { return rxjs_1.from(emps); }), operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.get = function (id) {
        return this.http
            .get(this.url + "/" + id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.save = function (emp) {
        var response = !!emp.id ? this.put(emp) : this.post(emp);
        console.log(emp);
        return response.pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.remove = function (emp) {
        return this.http
            .delete(this.url + "/" + emp.id)
            .pipe(operators_1.catchError(this.handleError));
    };
    EmployeeService.prototype.post = function (emp) {
        return this.http.post(this.url, emp);
    };
    EmployeeService.prototype.put = function (emp) {
        return this.http.put(this.url + "/" + emp.id, emp);
    };
    EmployeeService.prototype.handleError = function (res) {
        return rxjs_1.throwError(res.error || "Server error");
    };
    EmployeeService.ctorParameters = function () { return [
        { type: http_1.HttpClient }
    ]; };
    EmployeeService = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [http_1.HttpClient])
    ], EmployeeService);
    return EmployeeService;
}());
exports.EmployeeService = EmployeeService;


/***/ }),

/***/ "./src/app/employee.ts":
/*!*****************************!*\
  !*** ./src/app/employee.ts ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Employee = /** @class */ (function () {
    function Employee() {
    }
    return Employee;
}());
exports.Employee = Employee;


/***/ }),

/***/ "./src/app/employee/employee.component.css":
/*!*************************************************!*\
  !*** ./src/app/employee/employee.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".table-header-align-left {\r\n  text-align: left;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\n.matcard-header-align-left {\r\n  text-align: left;\r\n  -webkit-box-pack: end;\r\n          justify-content: flex-end;\r\n}\r\ntr.mat-row {\r\n  /* row border */\r\n  border: 1px solid #ffa600;\r\n}\r\n.mat-card {\r\n  width: 600px;\r\n}\r\ntable {\r\n  width: 600px;\r\n}\r\nth {\r\n  text-align: left;\r\n}\r\ntd {\r\n  text-align: left;\r\n}\r\n.mat-card-title {\r\n  text-align: left;\r\n}\r\n.mat-card-header {\r\n  border-bottom: 1px solid #000;\r\n  margin-bottom: 1px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1wbG95ZWUvZW1wbG95ZWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBeUI7VUFBekIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxnQkFBZ0I7RUFDaEIscUJBQXlCO1VBQXpCLHlCQUF5QjtBQUMzQjtBQUVBO0VBQ0UsZUFBZTtFQUNmLHlCQUF5QjtBQUMzQjtBQUNBO0VBQ0UsWUFBWTtBQUNkO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLGdCQUFnQjtBQUNsQjtBQUVBO0VBQ0UsZ0JBQWdCO0FBQ2xCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFDQTtFQUNFLDZCQUE2QjtFQUM3QixrQkFBa0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9lbXBsb3llZS9lbXBsb3llZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRhYmxlLWhlYWRlci1hbGlnbi1sZWZ0IHtcclxuICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbn1cclxuLm1hdGNhcmQtaGVhZGVyLWFsaWduLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcclxufVxyXG5cclxudHIubWF0LXJvdyB7XHJcbiAgLyogcm93IGJvcmRlciAqL1xyXG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmE2MDA7XHJcbn1cclxuLm1hdC1jYXJkIHtcclxuICB3aWR0aDogNjAwcHg7XHJcbn1cclxudGFibGUge1xyXG4gIHdpZHRoOiA2MDBweDtcclxufVxyXG50aCB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG5cclxudGQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5tYXQtY2FyZC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogbGVmdDtcclxufVxyXG4ubWF0LWNhcmQtaGVhZGVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICBtYXJnaW4tYm90dG9tOiAxcHg7XHJcbn1cclxuIl19 */");

/***/ }),

/***/ "./src/app/employee/employee.component.ts":
/*!************************************************!*\
  !*** ./src/app/employee/employee.component.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var employee_list_component_1 = __webpack_require__(/*! ../employee-list/employee-list.component */ "./src/app/employee-list/employee-list.component.ts");
var employee_1 = __webpack_require__(/*! ../employee */ "./src/app/employee.ts");
var dialog_1 = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
var employee_dialog_component_1 = __webpack_require__(/*! ../employee-dialog/employee-dialog.component */ "./src/app/employee-dialog/employee-dialog.component.ts");
var EmployeeComponent = /** @class */ (function () {
    function EmployeeComponent(dialog, employeeList) {
        this.dialog = dialog;
        this.employeeList = employeeList;
        //Emitters share data between employee and employeeList
        this.delete = new core_1.EventEmitter();
        this.updateCompensation = new core_1.EventEmitter();
        this.employeesList = [];
        this.dirReports = [];
    }
    //get detailed direc reporters info
    EmployeeComponent.prototype.ngOnInit = function () {
        this.employeesList = this.employeeList.employees;
        this.get_dir_report_names();
    };
    //display dialog when edit or delete button is clicked
    EmployeeComponent.prototype.openDialog = function (employee, reporter, editDelete) {
        var _this = this;
        var dialogRef = this.dialog.open(employee_dialog_component_1.EmployeeDialogComponent, {
            data: { reporter: reporter, editDelete: editDelete },
        });
        dialogRef.afterClosed().subscribe(function (reporter) {
            if (reporter.editDelete == "delete") {
                _this.deleteDirectReporter(reporter);
            }
            else if (reporter.editDelete == "edit") {
                _this.updateDirectReporterCompensation(reporter);
            }
        });
    };
    //helper function to handle delete
    EmployeeComponent.prototype.deleteDirectReporter = function (reporter) {
        if (this.employee.directReports.includes(reporter.id)) {
            var idx = this.employee.directReports.indexOf(reporter.id);
            this.employee.directReports.splice(idx, 1);
            //send updated employee object
            this.delete.emit(this.employee);
        }
    };
    //helper function to handle edit
    EmployeeComponent.prototype.updateDirectReporterCompensation = function (reporter) {
        if (this.employee.directReports.includes(reporter.id)) {
            //send updated employee object
            this.updateCompensation.emit(reporter);
        }
    };
    // use to get the detail information of reporters
    EmployeeComponent.prototype.get_dir_report_names = function () {
        var id = this.employee.id;
        var reports = this.employee.directReports;
        if (!!reports) {
            for (var i = 0; i < reports.length; i++) {
                for (var j = 0; j < this.employeesList.length; j++) {
                    if (reports[i] == this.employeesList[j].id) {
                        this.dirReports.push({
                            id: this.employeesList[j].id,
                            firstName: this.employeesList[j].firstName,
                            lastName: this.employeesList[j].lastName,
                            position: this.employeesList[j].position,
                            directReports: this.employeesList[j].directReports,
                            compensation: this.employeesList[j].compensation,
                        });
                    }
                }
            }
        }
    };
    EmployeeComponent.ctorParameters = function () { return [
        { type: dialog_1.MatDialog },
        { type: employee_list_component_1.EmployeeListComponent }
    ]; };
    __decorate([
        core_1.Input(),
        __metadata("design:type", employee_1.Employee)
    ], EmployeeComponent.prototype, "employee", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "delete", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], EmployeeComponent.prototype, "updateCompensation", void 0);
    EmployeeComponent = __decorate([
        core_1.Component({
            selector: "app-employee",
            template: __importDefault(__webpack_require__(/*! raw-loader!./employee.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/employee/employee.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./employee.component.css */ "./src/app/employee/employee.component.css")).default]
        }),
        __metadata("design:paramtypes", [dialog_1.MatDialog,
            employee_list_component_1.EmployeeListComponent])
    ], EmployeeComponent);
    return EmployeeComponent;
}());
exports.EmployeeComponent = EmployeeComponent;


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __importDefault = (this && this.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var platform_browser_dynamic_1 = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
var app_module_1 = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
var environment_1 = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
if (environment_1.environment.production) {
    core_1.enableProdMode();
}
platform_browser_dynamic_1.platformBrowserDynamic().bootstrapModule(app_module_1.AppModule)
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\linti\Desktop\mindex-js-code-challenge\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map