(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/welcome-page/welcome/welcome.component */ "./src/app/components/welcome-page/welcome/welcome.component.ts");
/* harmony import */ var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/models/register/register.component */ "./src/app/components/models/register/register.component.ts");
/* harmony import */ var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/teacher/main-teacher/main-teacher.component */ "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
/* harmony import */ var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/teacher/new-classrom/new-classrom.component */ "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
/* harmony import */ var _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/friends/friends.component */ "./src/app/components/shared/friends/friends.component.ts");
/* harmony import */ var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/contact/contact.component */ "./src/app/components/shared/contact/contact.component.ts");
/* harmony import */ var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/profile/profile.component */ "./src/app/components/shared/profile/profile.component.ts");











const routes = [
    { path: '', component: _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_2__["WelcomeComponent"] },
    { path: 'register', component: _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_3__["RegisterComponent"] },
    { path: 'teacher', component: _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_4__["MainTeacherComponent"] },
    { path: 'teacher/create-classrom', component: _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_5__["NewClassromComponent"] },
    { path: 'friends', component: _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_6__["FriendsComponent"] },
    { path: 'contact', component: _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"] },
    { path: 'profile', component: _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"] }
];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
        _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/models/login/login.component */ "./src/app/components/models/login/login.component.ts");
/* harmony import */ var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/models/register/register.component */ "./src/app/components/models/register/register.component.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");









function AppComponent_div_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "span", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Loading...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AppComponent_div_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "router-outlet");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, main) {
        this.router = router;
        this.main = main;
        this.loading = true;
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationStart"]: {
                    this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationError"]: {
                    this.loading = false;
                    break;
                }
                default: {
                    break;
                }
            }
        });
    }
    ngOnInit() {
        this.main.ifUserExists();
        // this.router.navigateByUrl('friends');
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 4, vars: 2, consts: [["class", "h-100 w-100 row justify-content-center align-items-center", 4, "ngIf"], [4, "ngIf"], [1, "h-100", "w-100", "row", "justify-content-center", "align-items-center"], ["role", "status", 1, "spinner-border"], [1, "sr-only"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, AppComponent_div_0_Template, 4, 0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, AppComponent_div_1_Template, 3, 0, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-login");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-register");
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.loading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.loading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"], _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_5__["RegisterComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"]], styles: [".min[_ngcontent-%COMP%] {\n  position: relative;\n}\n\napp-navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n\nrouter-outlet[_ngcontent-%COMP%]    >  {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuYXBwLW5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5yb3V0ZXItb3V0bGV0PiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuIiwiLm1pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYXBwLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbnJvdXRlci1vdXRsZXQgPiB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.scss']
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/welcome-page/welcome/welcome.component */ "./src/app/components/welcome-page/welcome/welcome.component.ts");
/* harmony import */ var _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/models/login/login.component */ "./src/app/components/models/login/login.component.ts");
/* harmony import */ var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/models/register/register.component */ "./src/app/components/models/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/teacher/main-teacher/main-teacher.component */ "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
/* harmony import */ var _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/student/main-student/main-student.component */ "./src/app/components/student/main-student/main-student.component.ts");
/* harmony import */ var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/teacher/new-classrom/new-classrom.component */ "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
/* harmony import */ var _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/shared/friends/friends.component */ "./src/app/components/shared/friends/friends.component.ts");
/* harmony import */ var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/contact/contact.component */ "./src/app/components/shared/contact/contact.component.ts");
/* harmony import */ var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/profile/profile.component */ "./src/app/components/shared/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./core/auth/auth.interceptor */ "./src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/interceptor/http-error.interceptor */ "./src/app/core/interceptor/http-error.interceptor.ts");























class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
            useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
            multi: true
        },
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
            useClass: _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["HttpErrorInterceptor"],
            multi: true
        }
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
        _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
        _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
        _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
        _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
        _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_12__["MainTeacherComponent"],
        _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_13__["MainStudentComponent"],
        _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_14__["NewClassromComponent"],
        _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_15__["FriendsComponent"],
        _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
        _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_5__["NavbarComponent"],
                    _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                    _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"],
                    _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"],
                    _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"],
                    _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_12__["MainTeacherComponent"],
                    _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_13__["MainStudentComponent"],
                    _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_14__["NewClassromComponent"],
                    _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_15__["FriendsComponent"],
                    _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_16__["ContactComponent"],
                    _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_17__["ProfileComponent"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
                        timeOut: 10000,
                        positionClass: 'toast-top-right',
                        preventDuplicates: true,
                    }),
                ],
                providers: [
                    _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
                        useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_19__["AuthInterceptor"],
                        multi: true
                    },
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HTTP_INTERCEPTORS"],
                        useClass: _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["HttpErrorInterceptor"],
                        multi: true
                    }
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/components/models/login/login.component.ts":
/*!************************************************************!*\
  !*** ./src/app/components/models/login/login.component.ts ***!
  \************************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");






const _c0 = ["openModal"];
class LoginComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('string', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('string', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required),
        });
    }
    ngOnInit() {
        this.shared.openLogin.subscribe(res => {
            this.openModal.nativeElement.click();
        });
    }
    submit() {
        if (this.loginForm.valid) {
            this.main.login(this.loginForm.value).subscribe(res => {
                this.main.user = res.userFromRepo;
                console.log(res.userFromRepo);
                localStorage.setItem('homeschooltoken', res.token);
            });
        }
    }
}
LoginComponent.ɵfac = function LoginComponent_Factory(t) { return new (t || LoginComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"])); };
LoginComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoginComponent, selectors: [["app-login"]], viewQuery: function LoginComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.openModal = _t.first);
    } }, decls: 22, vars: 1, consts: [["type", "button", "data-toggle", "modal", "data-target", "#exampleModalCenter", 1, "d-none"], ["openModal", ""], ["id", "exampleModalCenter", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["id", "exampleModalCenterTitle", 1, "modal-title"], [3, "formGroup"], [1, "form__group", "field"], ["type", "text", "formControlName", "email", "placeholder", "Name", "name", "name", "id", "emailLogin", "required", "", 1, "form__field"], ["for", "emailLogin", 1, "form__label"], ["type", "password", "formControlName", "password", "placeholder", "Name", "name", "name", "id", "passwordLogin", "required", "", 1, "form__field"], ["for", "passwordLogin", 1, "form__label"], [1, "row", "justify-content-center"], ["type", "submit", 1, "formBtn", 3, "click"], ["data-dismiss", "modal", 1, "transformUnder", 3, "click"]], template: function LoginComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Launch demo modal\n");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "Zaloguj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nazwa u\u017Cytkownika");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "button", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_18_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function LoginComponent_Template_div_click_20_listener() { return ctx.shared.openRegisterModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " Nie masz jeszcze konta? Zarejestruj si\u0119! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.loginForm);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n  z-index: 100;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder[_ngcontent-%COMP%] {\n  height: 50px;\n  background: var(--green);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n}\n\n.transformUnder[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.transformUnder[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi50cmFuc2Zvcm1VbmRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkKSB2YXIoLS1yYWQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFuc2Zvcm1VbmRlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoginComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-login',
                templateUrl: './login.component.html',
                styleUrls: ['./login.component.scss']
            }]
    }], function () { return [{ type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }]; }, { openModal: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['openModal']
        }] }); })();


/***/ }),

/***/ "./src/app/components/models/register/register.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/components/models/register/register.component.ts ***!
  \******************************************************************/
/*! exports provided: RegisterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegisterComponent", function() { return RegisterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







const _c0 = ["openRegister"];
function RegisterComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "label", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kod dost\u0119pu");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
const _c1 = function (a0) { return { "roleSelected": a0 }; };
class RegisterComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
        this.selectedRole = 0;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(5)]),
            userCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.shared.openRegister.subscribe(res => {
            this.openRegister.nativeElement.click();
        });
    }
    submit() {
        this.registerForm.setControl('userRole', new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](this.selectedRole));
        console.log(this.registerForm.value);
        console.log(this.registerForm.valid);
        if (this.registerForm.valid) {
            this.main.register(this.registerForm.value).subscribe(res => {
                console.log(res);
            });
        }
        else {
        }
    }
    // select you are student or teacher ( 0 - student, 1 - teacher)
    select(select) {
        this.selectedRole = select;
    }
}
RegisterComponent.ɵfac = function RegisterComponent_Factory(t) { return new (t || RegisterComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"])); };
RegisterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: RegisterComponent, selectors: [["app-register"]], viewQuery: function RegisterComponent_Query(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵviewQuery"](_c0, true);
    } if (rf & 2) {
        var _t;
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵloadQuery"]()) && (ctx.openRegister = _t.first);
    } }, decls: 27, vars: 8, consts: [["type", "button", "data-toggle", "modal", "data-target", "#registerModal", 1, "d-none"], ["openRegister", ""], ["id", "registerModal", "tabindex", "-1", "role", "dialog", "aria-labelledby", "exampleModalCenterTitle", "aria-hidden", "true", 1, "modal", "fade"], ["role", "document", 1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], ["id", "exampleModalCenterTitle", 1, "modal-title"], [3, "formGroup"], [1, "form-group", "row", "justify-content-center"], [1, "role", "role1", "col-5", 3, "ngClass", "click"], [1, "role", "role2", "col-5", 3, "ngClass", "click"], [1, "form__group", "field"], ["type", "email", "formControlName", "email", "placeholder", "Name", "name", "name", "id", "emailRegister", 1, "form__field"], ["for", "emailRegister", 1, "form__label"], ["type", "password", "formControlName", "password", "placeholder", "Name", "name", "name", "id", "passwordRegister", 1, "form__field"], ["for", "passwordRegister", 1, "form__label"], ["class", "form__group field", 4, "ngIf"], [1, "row", "justify-content-center"], ["type", "submit", 1, "formBtn", 3, "click"], ["data-dismiss", "modal", 1, "transformUnder", 3, "click"], ["type", "password", "placeholder", "Name", "name", "name", "id", "studentCode", "formControlName", "userCode", 1, "form__field"], ["for", "studentCode", 1, "form__label"]], template: function RegisterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "button", 0, 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h5", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Zarejestruj si\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_9_listener() { return ctx.select(0); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Ucze\u0144");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_11_listener() { return ctx.select(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Nauczyciel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Email");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "input", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "label", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Has\u0142o");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, RegisterComponent_div_21_Template, 4, 0, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_button_click_23_listener() { return ctx.submit(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function RegisterComponent_Template_div_click_25_listener() { return ctx.shared.openLoginModal(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " Powr\u00F3t do logowania ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.registerForm);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](4, _c1, ctx.selectedRole === 0));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpureFunction1"](6, _c1, ctx.selectedRole === 1));
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.selectedRole);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgClass"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: [".modal-content[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n}\n\n.modal-title[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary[_ngcontent-%COMP%] {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder[_ngcontent-%COMP%] {\n  height: 50px;\n  background: var(--green);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n}\n\n.transformUnder[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n}\n\n.transformUnder[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\noption[_ngcontent-%COMP%] {\n  padding: 5px !important;\n}\n\nselect[_ngcontent-%COMP%] {\n  border-radius: var(--rad) !important;\n}\n\n.role[_ngcontent-%COMP%] {\n  text-align: center;\n  font-size: 30px;\n  background: var(--dark);\n  transition: all 0.2s;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.roleSelected[_ngcontent-%COMP%] {\n  transform: scale(1.2);\n  background: var(--warn);\n}\n\n.role1[_ngcontent-%COMP%] {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2[_ngcontent-%COMP%] {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FESEE7RUFDRSx1QkFBQTtBQ01GOztBREpBO0VBQ0Usb0NBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1FGOztBRE5BO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1NGOztBRFBBO0VBQ0UsbUJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvbGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ucm9sZVNlbGVjdGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbn1cclxuLnJvbGUxIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDc5JSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcbi5yb2xlMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAyMSUgMTAwJSk7XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4udHJhbnNmb3JtVW5kZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZCkgdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyYW5zZm9ybVVuZGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5vcHRpb24ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKSAhaW1wb3J0YW50O1xufVxuXG4ucm9sZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucm9sZVNlbGVjdGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcbn1cblxuLnJvbGUxIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNzklIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG59XG5cbi5yb2xlMiB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDIxJSAxMDAlKTtcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](RegisterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-register',
                templateUrl: './register.component.html',
                styleUrls: ['./register.component.scss']
            }]
    }], function () { return [{ type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }]; }, { openRegister: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewChild"],
            args: ['openRegister']
        }] }); })();


/***/ }),

/***/ "./src/app/components/shared/contact/contact.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/contact/contact.component.ts ***!
  \****************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 8, vars: 0, consts: [[1, "cover"], [1, "text-center", "mainDiv"], [1, "display-3", "font-weight-bold"], [1, "mb-5", "font-weight-bold"], [1, "rest"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Kontakt");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "Skontaktuj si\u0119 z nami!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " 123123 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainDiv[_ngcontent-%COMP%] {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv[_ngcontent-%COMP%] {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.rest[_ngcontent-%COMP%] {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEVBQUE7VUFBQSxrRUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxxRkFBQTtZQUFBLDZFQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnJlc3Qge1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG4iLCIubWFpbkRpdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICBwYWRkaW5nOiAyNXB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubWFpbkRpdiB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDApICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5yZXN0IHtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.ts ***!
  \**************************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 2, vars: 0, template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "footer works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/friends/friends.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/friends/friends.component.ts ***!
  \****************************************************************/
/*! exports provided: FriendsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FriendsComponent", function() { return FriendsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");





class FriendsComponent {
    constructor(main) {
        this.main = main;
    }
    ngOnInit() {
        this.friends = this.main.user.friends;
        this.searchFriend = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            searchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
}
FriendsComponent.ɵfac = function FriendsComponent_Factory(t) { return new (t || FriendsComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
FriendsComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FriendsComponent, selectors: [["app-friends"]], decls: 55, vars: 1, consts: [[1, "containerMain", "container"], [1, "container", "text-center"], [1, "w-100", "row", "justify-content-center", 3, "formGroup"], [1, "form__group", "field", "col-12"], ["type", "email", "placeholder", "Name", "name", "name", "id", "friend", "required", "", "formControlName", "searchName", 1, "form__field"], ["for", "friend", 1, "form__label"], [1, "container", "friendsList"], ["id", "accordionExample", 1, "accordion"], [1, "card"], ["id", "headingOne", 1, "card-header"], [1, "mb-0", "text-center"], ["type", "button", "data-toggle", "collapse", "data-target", "#collapseOne", "aria-expanded", "false", "aria-controls", "collapseOne", 1, "friendBtn"], ["id", "collapseOne", "aria-labelledby", "headingOne", "data-parent", "#accordionExample", 1, "collapse"], [1, "card-body"], [1, "container", "text-center", "justify-content-center", "containerInfo"]], template: function FriendsComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Wyszukaj lub znajomego");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Ilo\u015B\u0107 os\u00F3b*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " Kazimierz Adam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h2", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Kazimierz Adam ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "Jak to w\u0142a\u015Bciwie dzia\u0142a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](50, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "123");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.searchFriend);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControlName"]], styles: [".friendsList[_ngcontent-%COMP%] {\n  padding: 15px;\n  max-height: 400px;\n  overflow-y: scroll;\n  margin-bottom: 50px;\n}\n\n.containerMain[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(52% 0, 100% 0, 100% 84%, 50% 100%, 0 85%, 0 0);\n          clip-path: polygon(52% 0, 100% 0, 100% 84%, 50% 100%, 0 85%, 0 0);\n}\n\n.containerInfo[_ngcontent-%COMP%] {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n  border-radius: var(--rad);\n}\n\n[_ngcontent-%COMP%]::-webkit-scrollbar {\n  width: 20px;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px !important;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb {\n  background: #41454d;\n  border-radius: 10px !important;\n}\n\n\n\n[_ngcontent-%COMP%]::-webkit-scrollbar-thumb:hover {\n  background: #7b9bb3;\n}\n\n.friendBtn[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  text-align: center;\n  font-size: 30px;\n  border-right: none;\n  transition: 0.3s all;\n}\n\n.friendBtn[_ngcontent-%COMP%]:focus {\n  border: none;\n  outline: none !important;\n}\n\n.friendBtn[_ngcontent-%COMP%]:hover {\n  border-bottom: 1px solid green !important;\n}\n\n.card[_ngcontent-%COMP%] {\n  border-radius: 0;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcZnJpZW5kc1xcZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5RUFBQTtVQUFBLGlFQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBRERBLFVBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0FDSUY7O0FEREEsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QUREQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQ01GOztBREpBO0VBQ0UseUNBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZHNMaXN0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jb250YWluZXJNYWluIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzoyMHB4IDIwcHggNzBweCAyMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MiUgMCwgMTAwJSAwLCAxMDAlIDg0JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApO1xyXG59XHJcbi5jb250YWluZXJJbmZvIHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM0MTQ1NGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzdiOWJiMztcclxufVxyXG4uZnJpZW5kQnRuIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuLmZyaWVuZEJ0bjpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uZnJpZW5kQnRuOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIiwiLmZyaWVuZHNMaXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhaW5lck1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMjBweCAyMHB4IDcwcHggMjBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUyJSAwLCAxMDAlIDAsIDEwMCUgODQlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCk7XG59XG5cbi5jb250YWluZXJJbmZvIHtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzQxNDU0ZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2I5YmIzO1xufVxuXG4uZnJpZW5kQnRuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuLmZyaWVuZEJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZnJpZW5kQnRuOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FriendsComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-friends',
                templateUrl: './friends.component.html',
                styleUrls: ['./friends.component.scss']
            }]
    }], function () { return [{ type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
  \**************************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






function NavbarComponent_ul_6_Template(rf, ctx) { if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_ul_6_Template_a_click_2_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r9); const ctx_r8 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r8.shared.openLoginModal(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Zaloguj si\u0119");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_7_ul_0_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Konto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Twoja klasa");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Znajomi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_7_ul_1_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "ul", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "a", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Konto");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "a", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "Utw\u00F3rz klas\u0119");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Twoi znajomi");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "li", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "a", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Kontakt");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function NavbarComponent_ng_template_7_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](0, NavbarComponent_ng_template_7_ul_0_Template, 13, 0, "ul", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](1, NavbarComponent_ng_template_7_ul_1_Template, 13, 0, "ul", 11);
} if (rf & 2) {
    const ctx_r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.main.user.userRole == 0);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx_r7.main.user.userRole == 1);
} }
class NavbarComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.shared.openRegisterModal();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 9, vars: 2, consts: [[1, "navbar", "navbar-expand-lg", "navbar-dark"], [1, "navbar-brand", 3, "click"], ["type", "button", "data-toggle", "collapse", "data-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], ["class", "navbar-nav ml-auto", 4, "ngIf", "ngIfElse"], ["elseBlock", ""], [1, "navbar-nav", "ml-auto"], [1, "nav-item", "active"], [1, "nav-link", 3, "click"], ["routerLink", "contact", 1, "nav-link"], ["class", "navbar-nav ml-auto", 4, "ngIf"], ["routerLink", "profile", 1, "nav-link"], [1, "nav-link"], ["routerLink", "friends", 1, "nav-link"], ["routerLink", "teacher/create-classrom", 1, "nav-link"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "a", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_a_click_1_listener() { return ctx.main.ifUserExists(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Home-School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "button", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "span", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, NavbarComponent_ul_6_Template, 7, 0, "ul", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, NavbarComponent_ng_template_7_Template, 2, 2, "ng-template", null, 6, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplateRefExtractor"]);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        const _r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.main.user)("ngIfElse", _r6);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterLinkWithHref"]], styles: [".nav-link[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  border-bottom: 1px solid !important;\n}\n\n.nav-link[_ngcontent-%COMP%] {\n  border-bottom: 1px solid transparent;\n  font-size: 20px;\n  transition: all 0.3s;\n}\n\n.navbar-toggler[_ngcontent-%COMP%] {\n  border: 1px solid #ffb351;\n}\n\n.navbar-toggler[_ngcontent-%COMP%]:focus {\n  outline: none;\n}\n\n.navbar[_ngcontent-%COMP%] {\n  background-color: var(--main);\n}\n\n.navbar-brand[_ngcontent-%COMP%] {\n  font-size: 30px;\n  font-family: \"Lato Heavy\";\n}\n\n.navbar-brand[_ngcontent-%COMP%]:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0FDS0Y7O0FERkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7QUNLRjs7QURIQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDTUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZjhlMDAgIWltcG9ydGFudDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIWltcG9ydGFudDtcclxufVxyXG4ubmF2LWxpbmsge1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCB0cmFuc3BhcmVudDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyIHtcclxuICBib3JkZXI6IDFweCBzb2xpZCAjZmZiMzUxO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxufVxyXG5cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG8gSGVhdnlcIjtcclxufVxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZjhlMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4iLCIubmF2LWxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmY4ZTAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmIzNTE7XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0byBIZWF2eVwiO1xufVxuXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.scss']
            }]
    }], function () { return [{ type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"] }, { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/shared/profile/profile.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/profile/profile.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");



class ProfileComponent {
    constructor(main) {
        this.main = main;
    }
    getUser() {
        this.user = this.main.user;
    }
    ngOnInit() {
        this.getUser();
    }
}
ProfileComponent.ɵfac = function ProfileComponent_Factory(t) { return new (t || ProfileComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_core_main_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"])); };
ProfileComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProfileComponent, selectors: [["app-profile"]], decls: 11, vars: 2, consts: [[1, "h-100", "w-100", "row", "justify-content-center", "pt-5"], [1, "profile", "col-8", "row", "p-3"], [1, "col-2"], ["src", "https://www.melbourneentertainmentco.com.au/wp-content/uploads/2018/05/Phoebe-Singer-Pianist-Profile-600x600.jpg", 1, "img-fluid"], [1, "col-10", "row", "justify-content-end", "properties"], [1, "col-12"]], template: function ProfileComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "img", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Imie");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Imie ", ctx.user.name, "");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Email ", ctx.user.email, "");
    } }, styles: [".properties[_ngcontent-%COMP%] {\n  text-align: end;\n  color: white;\n  font-size: 25px;\n}\n\n.profile[_ngcontent-%COMP%] {\n  background: var(--dark);\n  border-radius: var(--rad);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydGllcyB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbn1cclxuIiwiLnByb3BlcnRpZXMge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProfileComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-profile',
                templateUrl: './profile.component.html',
                styleUrls: ['./profile.component.scss']
            }]
    }], function () { return [{ type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_1__["MainService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/components/student/main-student/main-student.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/student/main-student/main-student.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainStudentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainStudentComponent", function() { return MainStudentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainStudentComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainStudentComponent.ɵfac = function MainStudentComponent_Factory(t) { return new (t || MainStudentComponent)(); };
MainStudentComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainStudentComponent, selectors: [["app-main-student"]], decls: 2, vars: 0, template: function MainStudentComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "main-student works!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9tYWluLXN0dWRlbnQvbWFpbi1zdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainStudentComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-student',
                templateUrl: './main-student.component.html',
                styleUrls: ['./main-student.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/teacher/main-teacher/main-teacher.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/teacher/main-teacher/main-teacher.component.ts ***!
  \***************************************************************************/
/*! exports provided: MainTeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainTeacherComponent", function() { return MainTeacherComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class MainTeacherComponent {
    constructor() { }
    ngOnInit() {
    }
}
MainTeacherComponent.ɵfac = function MainTeacherComponent_Factory(t) { return new (t || MainTeacherComponent)(); };
MainTeacherComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: MainTeacherComponent, selectors: [["app-main-teacher"]], decls: 12, vars: 0, consts: [[1, "text-center", "mainDiv"], [1, "display-3", "font-weight-bold"], [1, "mb-5", "font-weight-bold"], [1, "row"], [1, "col-lg-8", "col-12", "text-center", "p-4"], [1, "col-md-4", "col-12", "p-4", "text-center"]], template: function MainTeacherComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h1", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, "Panel nauczyciela");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Tutaj mo\u017Cesz zarz\u0105dza\u0107 swoimi uczniami");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Twoje klasy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ostatnie wiadomo\u015Bci");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".mainDiv[_ngcontent-%COMP%] {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv[_ngcontent-%COMP%] {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL21haW4tdGVhY2hlci9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG1haW4tdGVhY2hlclxcbWFpbi10ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbWFpbi10ZWFjaGVyL21haW4tdGVhY2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbWFpbi10ZWFjaGVyL21haW4tdGVhY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLm1haW5EaXYge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluRGl2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA2NSUsIDUwJSAxMDAlLCAwIDY1JSwgMCAwKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5tYWluRGl2IHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](MainTeacherComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-main-teacher',
                templateUrl: './main-teacher.component.html',
                styleUrls: ['./main-teacher.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/teacher/new-classrom/new-classrom.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/components/teacher/new-classrom/new-classrom.component.ts ***!
  \***************************************************************************/
/*! exports provided: NewClassromComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewClassromComponent", function() { return NewClassromComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




class NewClassromComponent {
    constructor() {
        this.Classrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
}
NewClassromComponent.ɵfac = function NewClassromComponent_Factory(t) { return new (t || NewClassromComponent)(); };
NewClassromComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NewClassromComponent, selectors: [["app-new-classrom"]], decls: 24, vars: 1, consts: [[1, "p-2"], [1, "container", "text-center", "justify-content-center", "containerMain"], [1, "row", "justify-content-around", 3, "formGroup"], [1, "form__group", "field", "col-md-11", "col-12"], ["type", "email", "placeholder", "Name", "name", "name", "id", "className", "required", "", 1, "form__field"], ["for", "className", 1, "form__label"], [1, "form__group", "field", "col-md-5", "col-12"], ["type", "email", "placeholder", "Name", "name", "name", "id", "numberPeople", "required", "", 1, "form__field"], ["for", "numberPeople", 1, "form__label"], ["type", "email", "placeholder", "Name", "name", "name", "id", "schoolName", "required", "", 1, "form__field"], ["for", "schoolName", 1, "form__label"], ["type", "submit", 1, "formBtn", "col-4"], [1, "container", "text-center", "justify-content-center", "containerInfo"]], template: function NewClassromComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Dodaj now\u0105 klas\u0119!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "input", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "label", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Nazwa klasy*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "input", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "label", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ilo\u015B\u0107 os\u00F3b*");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "input", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "label", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Nazwa szko\u0142y");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Wy\u015Blij");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Jak to w\u0142a\u015Bciwie dzia\u0142a?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "Musisz doda\u0107 klas\u0119");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("formGroup", ctx.Classrom);
    } }, directives: [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroupDirective"]], styles: [".containerMain[_ngcontent-%COMP%] {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n}\n\n.containerInfo[_ngcontent-%COMP%] {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n}\n\n.form[_ngcontent-%COMP%] {\n  padding: 10px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL25ldy1jbGFzc3JvbS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG5ldy1jbGFzc3JvbVxcbmV3LWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbmV3LWNsYXNzcm9tL25ldy1jbGFzc3JvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBRUEsMkVBQUE7VUFBQSxtRUFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9uZXctY2xhc3Nyb20vbmV3LWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lck1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOjIwcHggMjBweCA3MHB4IDIwcHg7XHJcblxyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuLmNvbnRhaW5lckluZm8ge1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCIuY29udGFpbmVyTWFpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggNzBweCAyMHB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwIDApO1xufVxuXG4uY29udGFpbmVySW5mbyB7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NewClassromComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-new-classrom',
                templateUrl: './new-classrom.component.html',
                styleUrls: ['./new-classrom.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/components/welcome-page/welcome/welcome.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome/welcome.component.ts ***!
  \**********************************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
}
WelcomeComponent.ɵfac = function WelcomeComponent_Factory(t) { return new (t || WelcomeComponent)(); };
WelcomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: WelcomeComponent, selectors: [["app-welcome"]], decls: 54, vars: 0, consts: [[1, "main", "h-100"], [1, "text-center", "mainDiv"], [1, "display-1", "font-weight-bold"], [1, "display-4", "mb-5", "font-weight-bold"], [1, "text-center", "iconsDiv"], [1, "display-4", "font-weight-bold", "mb-5"], [1, "row", "justify-content-around", "iconsDiv2", "m-5"], [1, "col-12", "col-md-3", "p-5", "p-md-0", "p-5", "p-md-0", "singleIconsDiv"], [1, "icon"], [1, "fas", "fa-child"], [1, "iconsHeader"], [1, "iconsP"], [1, "col-12", "col-md-3", "p-5", "p-md-0", "singleIconsDiv"], [1, "fab", "fa-chromecast"], [1, "col-md-3", "p-5", "p-md-0", "col-12", "singleIconsDiv"], [1, "fas", "fa-graduation-cap"], [1, "descriptionDiv"], [1, "flex-column-reverse", "flex-lg-row", "d-flex", "descriptionRow"], [1, "col-lg-6", "col-12", "descriptionText"], [1, "col-lg-6", "col-12", "p-0"], [1, "descriptionImg", "img-fluid"], [1, "flex-column", "flex-lg-row", "d-flex", "descriptionRow"]], template: function WelcomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Home-School");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h1", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "spr\u00F3buj nauki nie wychodz\u0105c z domu");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "h1", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Zalety");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](14, "Tylko to");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " Sam narzucasz sobie kiedy, gdzie i jak b\u0119dziesz pracowa\u0142. Nikt ci\u0119 nie ograniczna ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "i", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h1", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Nowocze\u015Bno\u015B\u0107");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " \u015Awiat ci\u0105gle idzie do przodu czas, \u017Ceby spos\u00F3b w jaki si\u0119 uczymy te\u017C si\u0119 zmienia\u0142 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "i", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "p", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](28, " Home-School pozwala na \u0142atwe, szybkie i proste dodawanie i rozwi\u0105zywanie zada\u0144. Nauka tutaj jest po prostu przyjemna. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](30, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "Dodanie zada\u0144");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, "Klikasz se");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](37, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, "Rozwi\u0105zanie zadania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "Te\u017C se klikasz");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, "Ocena zadania");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](51, "Elo elo 420");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "div", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".main[_ngcontent-%COMP%] {\n  padding: 0;\n  margin: 0;\n}\n\n.mainDiv[_ngcontent-%COMP%] {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv[_ngcontent-%COMP%] {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.iconsDiv[_ngcontent-%COMP%] {\n  margin: 50px 0;\n}\n\n.iconsDiv2[_ngcontent-%COMP%] {\n  margin: 0;\n}\n\n.iconsP[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.singleIconsDiv[_ngcontent-%COMP%] {\n  padding: 10px;\n}\n\n.icon[_ngcontent-%COMP%] {\n  font-size: 70px;\n}\n\n.descriptionText[_ngcontent-%COMP%] {\n  background: #DADDE5;\n  padding: 100px;\n}\n\n.descriptionImg[_ngcontent-%COMP%] {\n  background-image: url(\"https://www.kuchniaplus.pl/img/artykuly/pszczoly.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.buyDiv[_ngcontent-%COMP%] {\n  padding: 50px;\n  background: #EEC643;\n  margin: 0;\n}\n\n.app-paypal[_ngcontent-%COMP%] {\n  color: white;\n  border-radius: 10px;\n  padding: 20px;\n  background: #2F405C;\n  width: 80%;\n}\n\n.descriptionRow[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 0;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  padding: 0;\n  height: 296px;\n}\n\n.descriptionDiv[_ngcontent-%COMP%] {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlbGNvbWUtcGFnZVxcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxTQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNPRjs7QURMQTtFQUNFLDZFQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDVUY7O0FEUkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFRBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNZRjs7QURWQTtFQUNFLG9CQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUtcGFnZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uc0RpdiB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuLmljb25zRGl2MiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5pY29uc1Age1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2luZ2xlSWNvbnNEaXYge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvblRleHQge1xyXG4gIGJhY2tncm91bmQ6ICNEQURERTU7XHJcbiAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uSW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5rdWNobmlhcGx1cy5wbC9pbWcvYXJ0eWt1bHkvcHN6Y3pvbHkuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJ1eURpdiB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRUVDNjQzO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXBwLXBheXBhbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMkY0MDVDO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uUm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMjk2cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uRGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG4iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1haW5EaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMjVweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1haW5EaXYge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAwKSAhaW1wb3J0YW50O1xuICB9XG59XG4uaWNvbnNEaXYge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmljb25zRGl2MiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmljb25zUCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpbmdsZUljb25zRGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5kZXNjcmlwdGlvblRleHQge1xuICBiYWNrZ3JvdW5kOiAjREFEREU1O1xuICBwYWRkaW5nOiAxMDBweDtcbn1cblxuLmRlc2NyaXB0aW9uSW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cua3VjaG5pYXBsdXMucGwvaW1nL2FydHlrdWx5L3BzemN6b2x5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYnV5RGl2IHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZDogI0VFQzY0MztcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwLXBheXBhbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzJGNDA1QztcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmRlc2NyaXB0aW9uUm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAyOTZweDtcbn1cblxuLmRlc2NyaXB0aW9uRGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](WelcomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-welcome',
                templateUrl: './welcome.component.html',
                styleUrls: ['./welcome.component.scss']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/auth/auth.interceptor.ts":
/*!***********************************************!*\
  !*** ./src/app/core/auth/auth.interceptor.ts ***!
  \***********************************************/
/*! exports provided: AuthInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function() { return AuthInterceptor; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class AuthInterceptor {
    constructor() { }
    intercept(req, next) {
        const idToken = localStorage.getItem('homeschooltoken');
        if (idToken) {
            const cloned = req.clone({
                headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
        }
        else {
            return next.handle(req);
        }
    }
}
AuthInterceptor.ɵfac = function AuthInterceptor_Factory(t) { return new (t || AuthInterceptor)(); };
AuthInterceptor.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptor, factory: AuthInterceptor.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptor, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/core/interceptor/http-error.interceptor.ts":
/*!************************************************************!*\
  !*** ./src/app/core/interceptor/http-error.interceptor.ts ***!
  \************************************************************/
/*! exports provided: HttpErrorInterceptor */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function() { return HttpErrorInterceptor; });
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");


class HttpErrorInterceptor {
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])((error) => {
            let errorMessage = '';
            if (error.error instanceof ErrorEvent) {
                // client-side error
                errorMessage = `Error: ${error.error.message}`;
            }
            else {
                // server-side error
                errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
            }
            window.alert(errorMessage);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
        }));
    }
}


/***/ }),

/***/ "./src/app/core/main/main.service.ts":
/*!*******************************************!*\
  !*** ./src/app/core/main/main.service.ts ***!
  \*******************************************/
/*! exports provided: MainService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainService", function() { return MainService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");






class MainService {
    constructor(shared, http, router) {
        this.shared = shared;
        this.http = http;
        this.router = router;
        this.api = this.shared.api;
    }
    loginViaToken() {
        return this.http.get(`${this.api}api/userauth/loginviatoken`);
    }
    login(user) {
        return this.http.post(`${this.api}api/userauth/login`, user);
    }
    register(user) {
        return this.http.post(`${this.api}api/userauth/register`, user);
    }
    ifUserExists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (localStorage.getItem('homeschooltoken')) {
                yield this.loginViaToken().subscribe(res => {
                    console.log(res);
                });
            }
            if (!this.user) {
                this.router.navigateByUrl('/');
            }
            else if (this.user.userRole === 0) {
                this.router.navigateByUrl('student');
            }
            else if (this.user.userRole === 1) {
                this.router.navigateByUrl('teacher');
            }
        });
    }
}
MainService.ɵfac = function MainService_Factory(t) { return new (t || MainService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"])); };
MainService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: MainService, factory: MainService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](MainService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return [{ type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] }, { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/core/shared/shared.service.ts":
/*!***********************************************!*\
  !*** ./src/app/core/shared/shared.service.ts ***!
  \***********************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class SharedService {
    constructor() {
        this.openLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.openRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.api = 'https://homeschoolprojectapi.azurewebsites.net/';
    }
    openLoginModal() {
        this.openLogin.emit();
    }
    openRegisterModal() {
        this.openRegister.emit();
    }
}
SharedService.ɵfac = function SharedService_Factory(t) { return new (t || SharedService)(); };
SharedService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: SharedService, factory: SharedService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SharedService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{
                providedIn: 'root'
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! E:\Home-School\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map