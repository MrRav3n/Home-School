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

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div *ngIf=\"loading\" class=\"h-100 w-100 row justify-content-center align-items-center\">\n  <div class=\"spinner-border\" role=\"status\" >\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n</div>\n<div *ngIf=\"!loading\">\n  <app-navbar></app-navbar>\n  <router-outlet></router-outlet>\n</div>\n\n<app-login></app-login>\n<app-register></app-register>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger modal -->\n<button type=\"button\" #openModal class=\"d-none\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n  Launch demo modal\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zaloguj się</h5>\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form__group field\">\n          <input type=\"text\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailLogin' required />\n          <label for=\"emailLogin\" class=\"form__label\">Nazwa użytkownika</label>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordLogin' required />\n          <label for=\"passwordLogin\" class=\"form__label\">Hasło</label>\n        </div>\n\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openRegisterModal()\">\n          Nie masz jeszcze konta? Zarejestruj się!\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html":
/*!**********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html ***!
  \**********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Button trigger modal -->\n<button type=\"button\" #openRegister class=\"d-none\" data-toggle=\"modal\" data-target=\"#registerModal\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zarejestruj się</h5>\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group row justify-content-center\">\n          <div class=\"role role1 col-5\" (click)=\"select(0)\" [ngClass]=\"{'roleSelected': selectedRole === 0}\">Uczeń</div>\n          <div class=\"role role2 col-5\" (click)=\"select(1)\" [ngClass]=\"{'roleSelected': selectedRole === 1}\">Nauczyciel</div>\n        </div>\n        <div class=\"form__group field\">\n          <input type=\"email\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailRegister'/>\n          <label for=\"emailRegister\" class=\"form__label\">Email</label>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordRegister'/>\n          <label for=\"passwordRegister\" class=\"form__label\">Hasło</label>\n        </div>\n        <div class=\"form__group field\" *ngIf=\"!selectedRole\">\n          <input type=\"password\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='studentCode' formControlName=\"userCode\"/>\n          <label for=\"studentCode\" class=\"form__label\">Kod dostępu</label>\n        </div>\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openLoginModal()\">\n          Powrót do logowania\n      </div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"cover\">\r\n  <div class=\"text-center mainDiv\">\r\n    <h1 class=\"display-3 font-weight-bold\">Kontakt</h1>\r\n    <h1 class=\"mb-5 font-weight-bold\">Skontaktuj się z nami!</h1>\r\n  </div>\r\n  <div class=\"rest\">\r\n    123123\r\n  </div>\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>footer works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/friends/friends.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/friends/friends.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"containerMain container\">\r\n<div class=\"container text-center\">\r\n  <h1>Wyszukaj lub znajomego</h1>\r\n  <form [formGroup]=\"searchFriend\" class=\"w-100 row justify-content-center\">\r\n    <div class=\"form__group field col-12\">\r\n      <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='friend' required formControlName=\"searchName\" />\r\n      <label for=\"friend\" class=\"form__label\">Ilość osób*</label>\r\n    </div>\r\n  </form>\r\n</div>\r\n<div class=\"container friendsList\">\r\n  <div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h2 class=\"mb-0 text-center\">\r\n          <button class=\"friendBtn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\r\n            Kazimierz Adam\r\n          </button>\r\n        </h2>\r\n      </div>\r\n\r\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"accordion\" id=\"accordionExample\">\r\n    <div class=\"card\">\r\n      <div class=\"card-header\" id=\"headingOne\">\r\n        <h2 class=\"mb-0 text-center\">\r\n          <button class=\"friendBtn\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapseOne\" aria-expanded=\"false\" aria-controls=\"collapseOne\">\r\n            Kazimierz Adam\r\n          </button>\r\n        </h2>\r\n      </div>\r\n\r\n      <div id=\"collapseOne\" class=\"collapse\" aria-labelledby=\"headingOne\" data-parent=\"#accordionExample\">\r\n        <div class=\"card-body\">\r\n          Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n<div class=\"container text-center justify-content-center containerInfo\">\r\n  <h1>Jak to właściwie działa?</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n  <h1>123</h1>\r\n\r\n\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" (click)=\"this.main.ifUserExists()\">Home-School</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n<!--    noone-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!this.main.user;else elseBlock\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" (click)=\"this.shared.openLoginModal()\">Zaloguj się</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n    </ul>\n<!--    student-->\n    <ng-template #elseBlock>\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"this.main.user.userRole == 0\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"profile\">Konto</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\">Twoja klasa</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"friends\">Znajomi</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link logout\" (click)=\"this.main.logout()\">Wyloguj się</a>\n      </li>\n    </ul>\n<!--    teacher-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"this.main.user.userRole == 1\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"profile\">Konto</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"teacher/create-classrom\">Utwórz klasę</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"friends\">Twoi znajomi</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link logout\" (click)=\"this.main.logout()\">Wyloguj się</a>\n      </li>\n    </ul>\n    </ng-template>\n  </div>\n</nav>\n\n\n\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"h-100 w-100 row justify-content-center pt-5\">\n  <div class=\"profile col-8 row p-3\">\n    <div class=\"col-2\">\n      <img src=\"https://www.melbourneentertainmentco.com.au/wp-content/uploads/2018/05/Phoebe-Singer-Pianist-Profile-600x600.jpg\" class=\"img-fluid\">\n    </div>\n    <div class=\"col-10 row justify-content-end properties\">\n      <div class=\"col-12\">Imie {{user.name}}</div>\n      <div class=\"col-12\">Email {{user.email}}</div>\n      <div class=\"col-12\">Imie</div>\n    </div>\n  </div>\n</div>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/student/main-student/main-student.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/student/main-student/main-student.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>main-student works!</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"text-center mainDiv\">\r\n  <h1 class=\"display-3 font-weight-bold\">Panel nauczyciela</h1>\r\n  <h1 class=\"mb-5 font-weight-bold\">Tutaj możesz zarządzać swoimi uczniami</h1>\r\n</div>\r\n<div class=\"row\">\r\n  <div class=\"col-lg-8 col-12 text-center p-4\">\r\n    <h1>Twoje klasy</h1>\r\n  </div>\r\n  <div class=\"col-md-4 col-12 p-4 text-center\">\r\n    <h1>Ostatnie wiadomości</h1>\r\n  </div>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html ***!
  \*******************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"p-2\">\r\n  <div class=\"container text-center justify-content-center containerMain\">\r\n    <h1>Dodaj nową klasę!</h1>\r\n    <form [formGroup]=\"Classrom\" class=\"row justify-content-around\">\r\n\r\n        <div class=\"form__group field col-md-11 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='className' required />\r\n          <label for=\"className\" class=\"form__label\">Nazwa klasy*</label>\r\n        </div>\r\n\r\n        <div class=\"form__group field  col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='numberPeople' required />\r\n          <label for=\"numberPeople\" class=\"form__label\">Ilość osób*</label>\r\n        </div>\r\n\r\n        <div class=\"form__group field col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='schoolName' required />\r\n          <label for=\"schoolName\" class=\"form__label\">Nazwa szkoły</label>\r\n        </div>\r\n\r\n\r\n      <button type=\"submit\" class=\"formBtn col-4\">Wyślij</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"container text-center justify-content-center containerInfo\">\r\n    <h1>Jak to właściwie działa?</h1>\r\n    <h3>Musisz dodać klasę</h3>\r\n\r\n\r\n\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main h-100\">\n  <div class=\"text-center mainDiv\">\n    <h1 class=\"display-1 font-weight-bold\">Home-School</h1>\n    <h1 class=\"display-4 mb-5 font-weight-bold\">spróbuj nauki nie wychodząc z domu</h1>\n  </div>\n  <div class=\"text-center iconsDiv\">\n    <h1 class=\"display-4 font-weight-bold mb-5\">Zalety</h1>\n    <div class=\"row justify-content-around iconsDiv2 m-5\">\n      <div class=\"col-12 col-md-3 p-5 p-md-0 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-child\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Tylko ty</h1>\n        <p class=\"iconsP\">\n          Sam narzucasz sobie kiedy, gdzie i jak będziesz pracował. Nikt cię nie ograniczna\n        </p>\n      </div>\n      <div class=\"col-12 col-md-3 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fab fa-chromecast\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Nowocześność</h1>\n        <p class=\"iconsP\">\n          Świat ciągle idzie do przodu czas, żeby sposób w jaki się uczymy też się zmieniał\n        </p>\n      </div>\n      <div class=\"col-md-3 p-5 p-md-0 col-12 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-graduation-cap\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Wygoda</h1>\n        <p class=\"iconsP\">\n          Home-School pozwala na łatwe, szybkie i proste dodawanie i rozwiązywanie zadań. Nauka tutaj jest po\n          prostu przyjemna.\n        </p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"descriptionDiv\">\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Dodanie zadań</h1>\n        <p>Klikasz se</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg img-fluid\">\n        </div>\n      </div>\n    </div>\n\n    <div class=\"flex-column flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg img-fluid\">\n        </div>\n      </div>\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Rozwiązanie zadania</h1>\n        <p>Też se klikasz</p>\n      </div>\n    </div>\n\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Ocena zadania</h1>\n        <p>Elo elo 420</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg img-fluid\">\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/welcome-page/welcome/welcome.component */ "./src/app/components/welcome-page/welcome/welcome.component.ts");
/* harmony import */ var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/models/register/register.component */ "./src/app/components/models/register/register.component.ts");
/* harmony import */ var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/teacher/main-teacher/main-teacher.component */ "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
/* harmony import */ var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/teacher/new-classrom/new-classrom.component */ "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
/* harmony import */ var _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/friends/friends.component */ "./src/app/components/shared/friends/friends.component.ts");
/* harmony import */ var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/shared/contact/contact.component */ "./src/app/components/shared/contact/contact.component.ts");
/* harmony import */ var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/shared/profile/profile.component */ "./src/app/components/shared/profile/profile.component.ts");
/* harmony import */ var _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/student/main-student/main-student.component */ "./src/app/components/student/main-student/main-student.component.ts");











const routes = [
    { path: '', component: _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"] },
    { path: 'register', component: _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"] },
    { path: 'teacher', component: _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__["MainTeacherComponent"] },
    { path: 'teacher/create-classrom', component: _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_6__["NewClassromComponent"] },
    { path: 'friends', component: _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_7__["FriendsComponent"] },
    { path: 'student', component: _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_10__["MainStudentComponent"] },
    { path: 'contact', component: _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"] },
    { path: 'profile', component: _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_9__["ProfileComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".min {\n  position: relative;\n}\n\napp-navbar {\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n\nrouter-outlet > {\n  margin: 0px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSxXQUFBO0FDR0YiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWluIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuYXBwLW5hdmJhciB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG5yb3V0ZXItb3V0bGV0PiB7XHJcbiAgbWFyZ2luOiAwcHg7XHJcbn1cclxuIiwiLm1pbiB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cblxuYXBwLW5hdmJhciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgei1pbmRleDogMTA7XG59XG5cbnJvdXRlci1vdXRsZXQgPiB7XG4gIG1hcmdpbjogMHB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");





let AppComponent = class AppComponent {
    constructor(router, main, toastr) {
        this.router = router;
        this.main = main;
        this.toastr = toastr;
        this.loading = true;
        this.router.events.subscribe((event) => {
            switch (true) {
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]: {
                    this.loading = true;
                    break;
                }
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationCancel"]:
                case event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationError"]: {
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
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] },
    { type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"] }
];
AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/shared/navbar/navbar.component */ "./src/app/components/shared/navbar/navbar.component.ts");
/* harmony import */ var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/shared/footer/footer.component */ "./src/app/components/shared/footer/footer.component.ts");
/* harmony import */ var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/welcome-page/welcome/welcome.component */ "./src/app/components/welcome-page/welcome/welcome.component.ts");
/* harmony import */ var _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/models/login/login.component */ "./src/app/components/models/login/login.component.ts");
/* harmony import */ var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/models/register/register.component */ "./src/app/components/models/register/register.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
/* harmony import */ var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/teacher/main-teacher/main-teacher.component */ "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
/* harmony import */ var _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/student/main-student/main-student.component */ "./src/app/components/student/main-student/main-student.component.ts");
/* harmony import */ var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/teacher/new-classrom/new-classrom.component */ "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
/* harmony import */ var _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/shared/friends/friends.component */ "./src/app/components/shared/friends/friends.component.ts");
/* harmony import */ var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/shared/contact/contact.component */ "./src/app/components/shared/contact/contact.component.ts");
/* harmony import */ var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/shared/profile/profile.component */ "./src/app/components/shared/profile/profile.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./core/auth/auth.interceptor */ "./src/app/core/auth/auth.interceptor.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./core/interceptor/http-error.interceptor */ "./src/app/core/interceptor/http-error.interceptor.ts");























let AppModule = class AppModule {
};
AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
            _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"],
            _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"],
            _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"],
            _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_13__["MainTeacherComponent"],
            _components_student_main_student_main_student_component__WEBPACK_IMPORTED_MODULE_14__["MainStudentComponent"],
            _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_15__["NewClassromComponent"],
            _components_shared_friends_friends_component__WEBPACK_IMPORTED_MODULE_16__["FriendsComponent"],
            _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_17__["ContactComponent"],
            _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_18__["ProfileComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
            ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
                timeOut: 10000,
                positionClass: 'toast-top-right',
                preventDuplicates: true,
            }),
        ],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        providers: [
            _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"],
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
                useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_20__["AuthInterceptor"],
                multi: true
            },
            {
                provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HTTP_INTERCEPTORS"],
                useClass: _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_22__["HttpErrorInterceptor"],
                multi: true,
                deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]]
            }
        ],
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/models/login/login.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/components/models/login/login.component.scss ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n  z-index: 100;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--green);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n}\n\n.transformUnder:hover {\n  cursor: pointer;\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0Esd0JBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtBQ0lGOztBREZBO0VBQ0UsZUFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxuICB6LWluZGV4OiAxMDA7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG4gIHotaW5kZXg6IDEwMDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi50cmFuc2Zvcm1VbmRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkKSB2YXIoLS1yYWQpO1xuICBwYWRkaW5nOiAxMHB4O1xuICBmb250LXNpemU6IDIwcHg7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFuc2Zvcm1VbmRlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let LoginComponent = class LoginComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('string@kupa.pl', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('string', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
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
                this.main.user = res.user;
                this.main.ifUserExists();
                localStorage.setItem('homeschooltoken', res.token);
            });
        }
    }
};
LoginComponent.ctorParameters = () => [
    { type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('openModal')
], LoginComponent.prototype, "openModal", void 0);
LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.scss */ "./src/app/components/models/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/components/models/register/register.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/components/models/register/register.component.scss ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--green);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n}\n\n.transformUnder:hover {\n  cursor: pointer;\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n\noption {\n  padding: 5px !important;\n}\n\nselect {\n  border-radius: var(--rad) !important;\n}\n\n.role {\n  text-align: center;\n  font-size: 30px;\n  background: var(--dark);\n  transition: all 0.2s;\n  cursor: pointer;\n  padding: 5px;\n}\n\n.roleSelected {\n  transform: scale(1.2);\n  background: var(--warn);\n}\n\n.role1 {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2 {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0FDTUY7O0FESEE7RUFDRSx1QkFBQTtBQ01GOztBREpBO0VBQ0Usb0NBQUE7QUNPRjs7QURMQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ1FGOztBRE5BO0VBQ0UscUJBQUE7RUFDQSx1QkFBQTtBQ1NGOztBRFBBO0VBQ0UsbUJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDVUY7O0FEUkE7RUFDRSxrQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL3JlZ2lzdGVyL3JlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZ3JlZW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbm9wdGlvbiB7XHJcbiAgcGFkZGluZzogNXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuc2VsZWN0IHtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpICFpbXBvcnRhbnQ7XHJcbn1cclxuLnJvbGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFyayk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ucm9sZVNlbGVjdGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbn1cclxuLnJvbGUxIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDc5JSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcbi5yb2xlMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAyMSUgMTAwJSk7XHJcbn1cclxuIiwiLm1vZGFsLWNvbnRlbnQge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4udHJhbnNmb3JtVW5kZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWdyZWVuKTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZCkgdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnRyYW5zZm9ybVVuZGVyOmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5vcHRpb24ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKSAhaW1wb3J0YW50O1xufVxuXG4ucm9sZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYXJrKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogNXB4O1xufVxuXG4ucm9sZVNlbGVjdGVkIHtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcbn1cblxuLnJvbGUxIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNzklIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG59XG5cbi5yb2xlMiB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDIxJSAxMDAlKTtcbn0iXX0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");





let RegisterComponent = class RegisterComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
        this.selectedRole = 0;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
            userCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
        });
    }
    ngOnInit() {
        this.shared.openRegister.subscribe(res => {
            this.openRegister.nativeElement.click();
        });
    }
    submit() {
        this.registerForm.setControl('userRole', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedRole));
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
};
RegisterComponent.ctorParameters = () => [
    { type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('openRegister')
], RegisterComponent.prototype, "openRegister", void 0);
RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-register',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./register.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./register.component.scss */ "./src/app/components/models/register/register.component.scss")).default]
    })
], RegisterComponent);



/***/ }),

/***/ "./src/app/components/shared/contact/contact.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/contact/contact.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.rest {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEVBQUE7VUFBQSxrRUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxxRkFBQTtZQUFBLDZFQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLGtCQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnJlc3Qge1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG4iLCIubWFpbkRpdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICBwYWRkaW5nOiAyNXB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubWFpbkRpdiB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDApICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5yZXN0IHtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let ContactComponent = class ContactComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-contact',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./contact.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./contact.component.scss */ "./src/app/components/shared/contact/contact.component.scss")).default]
    })
], ContactComponent);



/***/ }),

/***/ "./src/app/components/shared/footer/footer.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/footer/footer.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let FooterComponent = class FooterComponent {
    constructor() { }
    ngOnInit() {
    }
};
FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-footer',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./footer.component.scss */ "./src/app/components/shared/footer/footer.component.scss")).default]
    })
], FooterComponent);



/***/ }),

/***/ "./src/app/components/shared/friends/friends.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/friends/friends.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".friendsList {\n  padding: 15px;\n  max-height: 400px;\n  overflow-y: scroll;\n  margin-bottom: 50px;\n}\n\n.containerMain {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(52% 0, 100% 0, 100% 84%, 50% 100%, 0 85%, 0 0);\n          clip-path: polygon(52% 0, 100% 0, 100% 84%, 50% 100%, 0 85%, 0 0);\n}\n\n.containerInfo {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n  border-radius: var(--rad);\n}\n\n::-webkit-scrollbar {\n  width: 20px;\n}\n\n/* Track */\n\n::-webkit-scrollbar-track {\n  box-shadow: inset 0 0 5px grey;\n  border-radius: 10px !important;\n}\n\n/* Handle */\n\n::-webkit-scrollbar-thumb {\n  background: #41454d;\n  border-radius: 10px !important;\n}\n\n/* Handle on hover */\n\n::-webkit-scrollbar-thumb:hover {\n  background: #7b9bb3;\n}\n\n.friendBtn {\n  border-bottom: 1px solid transparent;\n  text-align: center;\n  font-size: 30px;\n  border-right: none;\n  transition: 0.3s all;\n}\n\n.friendBtn:focus {\n  border: none;\n  outline: none !important;\n}\n\n.friendBtn:hover {\n  border-bottom: 1px solid green !important;\n}\n\n.card {\n  border-radius: 0;\n  border: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcZnJpZW5kc1xcZnJpZW5kcy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsYUFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0NGOztBRENBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSx5RUFBQTtVQUFBLGlFQUFBO0FDRUY7O0FEQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0dGOztBRERBO0VBQ0UsV0FBQTtBQ0lGOztBRERBLFVBQUE7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLDhCQUFBO0FDSUY7O0FEREEsV0FBQTs7QUFDQTtFQUNFLG1CQUFBO0VBQ0EsOEJBQUE7QUNJRjs7QUREQSxvQkFBQTs7QUFDQTtFQUNFLG1CQUFBO0FDSUY7O0FERkE7RUFDRSxvQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNLRjs7QURIQTtFQUNFLFlBQUE7RUFDQSx3QkFBQTtBQ01GOztBREpBO0VBQ0UseUNBQUE7QUNPRjs7QURMQTtFQUNFLGdCQUFBO0VBQ0EsWUFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvZnJpZW5kcy9mcmllbmRzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmZyaWVuZHNMaXN0IHtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG59XHJcbi5jb250YWluZXJNYWluIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzoyMHB4IDIwcHggNzBweCAyMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MiUgMCwgMTAwJSAwLCAxMDAlIDg0JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApO1xyXG59XHJcbi5jb250YWluZXJJbmZvIHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcclxuICBwYWRkaW5nLXRvcDogMTUwcHg7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxufVxyXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcclxuICB3aWR0aDogMjBweDtcclxufVxyXG5cclxuLyogVHJhY2sgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgYm94LXNoYWRvdzogaW5zZXQgMCAwIDVweCBncmV5O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLyogSGFuZGxlICovXHJcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gIGJhY2tncm91bmQ6ICM0MTQ1NGQ7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cclxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogIzdiOWJiMztcclxufVxyXG4uZnJpZW5kQnRuIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBib3JkZXItcmlnaHQ6IG5vbmU7XHJcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XHJcbn1cclxuLmZyaWVuZEJ0bjpmb2N1cyB7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIG91dGxpbmU6IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG4uZnJpZW5kQnRuOmhvdmVyIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JlZW4gIWltcG9ydGFudDtcclxufVxyXG4uY2FyZCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMDtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuIiwiLmZyaWVuZHNMaXN0IHtcbiAgcGFkZGluZzogMTVweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcbn1cblxuLmNvbnRhaW5lck1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMjBweCAyMHB4IDcwcHggMjBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUyJSAwLCAxMDAlIDAsIDEwMCUgODQlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCk7XG59XG5cbi5jb250YWluZXJJbmZvIHtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG59XG5cbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xuICB3aWR0aDogMjBweDtcbn1cblxuLyogVHJhY2sgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xuICBib3gtc2hhZG93OiBpbnNldCAwIDAgNXB4IGdyZXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHggIWltcG9ydGFudDtcbn1cblxuLyogSGFuZGxlICovXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcbiAgYmFja2dyb3VuZDogIzQxNDU0ZDtcbiAgYm9yZGVyLXJhZGl1czogMTBweCAhaW1wb3J0YW50O1xufVxuXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjN2I5YmIzO1xufVxuXG4uZnJpZW5kQnRuIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbn1cblxuLmZyaWVuZEJ0bjpmb2N1cyB7XG4gIGJvcmRlcjogbm9uZTtcbiAgb3V0bGluZTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uZnJpZW5kQnRuOmhvdmVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGdyZWVuICFpbXBvcnRhbnQ7XG59XG5cbi5jYXJkIHtcbiAgYm9yZGVyLXJhZGl1czogMDtcbiAgYm9yZGVyOiBub25lO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");




let FriendsComponent = class FriendsComponent {
    constructor(main) {
        this.main = main;
    }
    ngOnInit() {
        this.friends = this.main.user.friends;
        this.searchFriend = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
            searchName: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
        });
    }
};
FriendsComponent.ctorParameters = () => [
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
FriendsComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-friends',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./friends.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/friends/friends.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./friends.component.scss */ "./src/app/components/shared/friends/friends.component.scss")).default]
    })
], FriendsComponent);



/***/ }),

/***/ "./src/app/components/shared/navbar/navbar.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".nav-link:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  border-bottom: 1px solid !important;\n}\n\n.nav-link {\n  border-bottom: 1px solid transparent;\n  font-size: 20px;\n  transition: all 0.3s;\n}\n\n.navbar-toggler {\n  border: 1px solid #ffb351;\n}\n\n.navbar-toggler:focus {\n  outline: none;\n}\n\n.navbar {\n  background-color: var(--main);\n}\n\n.logout {\n  color: var(--warn) !important;\n}\n\n.navbar-brand {\n  font-size: 30px;\n  font-family: \"Lato Heavy\";\n}\n\n.navbar-brand:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  transition: all 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSx5QkFBQTtFQUNBLG1DQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxvQ0FBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0VGOztBREFBO0VBQ0UseUJBQUE7QUNHRjs7QUREQTtFQUNFLGFBQUE7QUNJRjs7QURGQTtFQUNFLDZCQUFBO0FDS0Y7O0FESEE7RUFDRSw2QkFBQTtBQ01GOztBREpBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDT0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ1FGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5uYXYtbGluazpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiAjZmY4ZTAwICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdi1saW5rIHtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYm9yZGVyOiAxcHggc29saWQgI2ZmYjM1MTtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XHJcbn1cclxuLmxvZ291dCB7XHJcbiAgY29sb3I6IHZhcigtLXdhcm4pICFpbXBvcnRhbnQ7XHJcbn1cclxuLm5hdmJhci1icmFuZCB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGZvbnQtZmFtaWx5OiBcIkxhdG8gSGVhdnlcIjtcclxufVxyXG4ubmF2YmFyLWJyYW5kOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6ICNmZjhlMDAgIWltcG9ydGFudDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4iLCIubmF2LWxpbms6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmY4ZTAwICFpbXBvcnRhbnQ7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAhaW1wb3J0YW50O1xufVxuXG4ubmF2LWxpbmsge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgdHJhbnNwYXJlbnQ7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNmZmIzNTE7XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbn1cblxuLmxvZ291dCB7XG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xufVxuXG4ubmF2YmFyLWJyYW5kIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBmb250LWZhbWlseTogXCJMYXRvIEhlYXZ5XCI7XG59XG5cbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiAjZmY4ZTAwICFpbXBvcnRhbnQ7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/shared/shared.service */ "./src/app/core/shared/shared.service.ts");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");




let NavbarComponent = class NavbarComponent {
    constructor(shared, main) {
        this.shared = shared;
        this.main = main;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
        // this.shared.openRegisterModal();
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"] }
];
NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/components/shared/navbar/navbar.component.scss")).default]
    })
], NavbarComponent);



/***/ }),

/***/ "./src/app/components/shared/profile/profile.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/components/shared/profile/profile.component.scss ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".properties {\n  text-align: end;\n  color: white;\n  font-size: 25px;\n}\n\n.profile {\n  background: var(--dark);\n  border-radius: var(--rad);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDQ0Y7O0FEQ0E7RUFDRSx1QkFBQTtFQUNBLHlCQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9wcm9maWxlL3Byb2ZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvcGVydGllcyB7XHJcbiAgdGV4dC1hbGlnbjogZW5kO1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbn1cclxuLnByb2ZpbGUge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbn1cclxuIiwiLnByb3BlcnRpZXMge1xuICB0ZXh0LWFsaWduOiBlbmQ7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC1zaXplOiAyNXB4O1xufVxuXG4ucHJvZmlsZSB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWRhcmspO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/main/main.service */ "./src/app/core/main/main.service.ts");



let ProfileComponent = class ProfileComponent {
    constructor(main) {
        this.main = main;
    }
    getUser() {
        this.user = this.main.user;
    }
    ngOnInit() {
        this.getUser();
    }
};
ProfileComponent.ctorParameters = () => [
    { type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"] }
];
ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-profile',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./profile.component.scss */ "./src/app/components/shared/profile/profile.component.scss")).default]
    })
], ProfileComponent);



/***/ }),

/***/ "./src/app/components/student/main-student/main-student.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/student/main-student/main-student.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc3R1ZGVudC9tYWluLXN0dWRlbnQvbWFpbi1zdHVkZW50LmNvbXBvbmVudC5zY3NzIn0= */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainStudentComponent = class MainStudentComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainStudentComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-student',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-student.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/student/main-student/main-student.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-student.component.scss */ "./src/app/components/student/main-student/main-student.component.scss")).default]
    })
], MainStudentComponent);



/***/ }),

/***/ "./src/app/components/teacher/main-teacher/main-teacher.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/teacher/main-teacher/main-teacher.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL21haW4tdGVhY2hlci9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG1haW4tdGVhY2hlclxcbWFpbi10ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbWFpbi10ZWFjaGVyL21haW4tdGVhY2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0VGO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbWFpbi10ZWFjaGVyL21haW4tdGVhY2hlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLm1haW5EaXYge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAgNzUlLCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbiIsIi5tYWluRGl2IHtcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA2NSUsIDUwJSAxMDAlLCAwIDY1JSwgMCAwKTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XG4gIC5tYWluRGl2IHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcbiAgfVxufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let MainTeacherComponent = class MainTeacherComponent {
    constructor() { }
    ngOnInit() {
    }
};
MainTeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-main-teacher',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./main-teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./main-teacher.component.scss */ "./src/app/components/teacher/main-teacher/main-teacher.component.scss")).default]
    })
], MainTeacherComponent);



/***/ }),

/***/ "./src/app/components/teacher/new-classrom/new-classrom.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/components/teacher/new-classrom/new-classrom.component.scss ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".containerMain {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n}\n\n.containerInfo {\n  margin-top: -150px;\n  background: var(--danger);\n  padding-top: 150px;\n}\n\n.form {\n  padding: 10px;\n  background: white;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL25ldy1jbGFzc3JvbS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG5ldy1jbGFzc3JvbVxcbmV3LWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbmV3LWNsYXNzcm9tL25ldy1jbGFzc3JvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBRUEsMkVBQUE7VUFBQSxtRUFBQTtBQ0FGOztBREVBO0VBQ0Usa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGtCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGVhY2hlci9uZXctY2xhc3Nyb20vbmV3LWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lck1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOjIwcHggMjBweCA3MHB4IDIwcHg7XHJcblxyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAgMCk7XHJcbn1cclxuLmNvbnRhaW5lckluZm8ge1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1kYW5nZXIpO1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4iLCIuY29udGFpbmVyTWFpbiB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBwYWRkaW5nOiAyMHB4IDIwcHggNzBweCAyMHB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwIDApO1xufVxuXG4uY29udGFpbmVySW5mbyB7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tZGFuZ2VyKTtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xufVxuXG4uZm9ybSB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");



let NewClassromComponent = class NewClassromComponent {
    constructor() {
        this.Classrom = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
        });
    }
    ngOnInit() {
    }
};
NewClassromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-classrom',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-classrom.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-classrom.component.scss */ "./src/app/components/teacher/new-classrom/new-classrom.component.scss")).default]
    })
], NewClassromComponent);



/***/ }),

/***/ "./src/app/components/welcome-page/welcome/welcome.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/components/welcome-page/welcome/welcome.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".main {\n  padding: 0;\n  margin: 0;\n}\n\n.mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.iconsDiv {\n  margin: 50px 0;\n}\n\n.iconsDiv2 {\n  margin: 0;\n}\n\n.iconsP {\n  font-size: 20px;\n}\n\n.singleIconsDiv {\n  padding: 10px;\n}\n\n.icon {\n  font-size: 70px;\n}\n\n.descriptionText {\n  background: #DADDE5;\n  padding: 100px;\n}\n\n.descriptionImg {\n  background-image: url(\"https://www.kuchniaplus.pl/img/artykuly/pszczoly.jpg\");\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n\n.buyDiv {\n  padding: 50px;\n  background: #EEC643;\n  margin: 0;\n}\n\n.app-paypal {\n  color: white;\n  border-radius: 10px;\n  padding: 20px;\n  background: #2F405C;\n  width: 80%;\n}\n\n.descriptionRow {\n  margin: 0;\n  padding: 0;\n}\n\n.img-fluid {\n  padding: 0;\n  height: 296px;\n}\n\n.descriptionDiv {\n  margin-bottom: 100px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlbGNvbWUtcGFnZVxcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxTQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLGNBQUE7QUNPRjs7QURMQTtFQUNFLDZFQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0FDUUY7O0FETkE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxTQUFBO0FDU0Y7O0FEUEE7RUFDRSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxVQUFBO0FDVUY7O0FEUkE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQ1dGOztBRFRBO0VBQ0UsVUFBQTtFQUNBLGFBQUE7QUNZRjs7QURWQTtFQUNFLG9CQUFBO0FDYUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUtcGFnZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uc0RpdiB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuLmljb25zRGl2MiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5pY29uc1Age1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2luZ2xlSWNvbnNEaXYge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvblRleHQge1xyXG4gIGJhY2tncm91bmQ6ICNEQURERTU7XHJcbiAgcGFkZGluZzogMTAwcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uSW1nIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCJodHRwczovL3d3dy5rdWNobmlhcGx1cy5wbC9pbWcvYXJ0eWt1bHkvcHN6Y3pvbHkuanBnXCIpO1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuLmJ1eURpdiB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRUVDNjQzO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXBwLXBheXBhbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMkY0MDVDO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uUm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMjk2cHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uRGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMDBweDtcclxufVxyXG4iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1haW5EaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMjVweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1haW5EaXYge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAwKSAhaW1wb3J0YW50O1xuICB9XG59XG4uaWNvbnNEaXYge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmljb25zRGl2MiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmljb25zUCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpbmdsZUljb25zRGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5kZXNjcmlwdGlvblRleHQge1xuICBiYWNrZ3JvdW5kOiAjREFEREU1O1xuICBwYWRkaW5nOiAxMDBweDtcbn1cblxuLmRlc2NyaXB0aW9uSW1nIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiaHR0cHM6Ly93d3cua3VjaG5pYXBsdXMucGwvaW1nL2FydHlrdWx5L3BzemN6b2x5LmpwZ1wiKTtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xufVxuXG4uYnV5RGl2IHtcbiAgcGFkZGluZzogNTBweDtcbiAgYmFja2dyb3VuZDogI0VFQzY0MztcbiAgbWFyZ2luOiAwO1xufVxuXG4uYXBwLXBheXBhbCB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgcGFkZGluZzogMjBweDtcbiAgYmFja2dyb3VuZDogIzJGNDA1QztcbiAgd2lkdGg6IDgwJTtcbn1cblxuLmRlc2NyaXB0aW9uUm93IHtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAwO1xufVxuXG4uaW1nLWZsdWlkIHtcbiAgcGFkZGluZzogMDtcbiAgaGVpZ2h0OiAyOTZweDtcbn1cblxuLmRlc2NyaXB0aW9uRGl2IHtcbiAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XG59Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let WelcomeComponent = class WelcomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./welcome.component.scss */ "./src/app/components/welcome-page/welcome/welcome.component.scss")).default]
    })
], WelcomeComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let AuthInterceptor = class AuthInterceptor {
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
};
AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthInterceptor);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");



class HttpErrorInterceptor {
    constructor(toastr) {
        this.toastr = toastr;
    }
    intercept(request, next) {
        return next.handle(request)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])((error) => {
            let errorTitle = '';
            let errorMessage = '';
            if (error.error) {
                errorTitle = error.error.err;
                errorMessage = error.error.desc;
                this.toastr.error(errorMessage, errorTitle);
            }
            else {
                errorTitle = `Kod błędu: ${error.status}`;
                errorMessage = `Wiadomość: ${error.message}`;
                this.toastr.error(errorMessage, errorTitle);
            }
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
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
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");





let MainService = class MainService {
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
    logout() {
        localStorage.removeItem('homeschooltoken');
        this.user = undefined;
        this.ifUserExists();
    }
    tokenLogin() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (localStorage.getItem('homeschooltoken')) {
                this.user = yield this.loginViaToken().toPromise();
            }
        });
    }
    ifUserExists() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            yield this.tokenLogin();
            if (!this.user) {
                this.router.navigateByUrl('/');
            }
            else if (this.user.userRole === 0) {
                console.log(this.user);
                this.router.navigateByUrl('student');
            }
            else if (this.user.userRole === 1) {
                console.log(this.user);
                this.router.navigateByUrl('teacher');
            }
        });
    }
};
MainService.ctorParameters = () => [
    { type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"] },
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
];
MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], MainService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


let SharedService = class SharedService {
    constructor() {
        this.openLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.api = 'https://homeschoolprojectapi.azurewebsites.net/';
    }
    openLoginModal() {
        this.openLogin.emit();
    }
    openRegisterModal() {
        this.openRegister.emit();
    }
};
SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
    })
], SharedService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
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