function _createForOfIteratorHelper(o) { if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (o = _unsupportedIterableToArray(o))) { var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var it, normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"this.shared.loading\" class=\"h-100 w-100 row justify-content-center align-items-center\">\n  <app-spinner class=\"h-100 w-100\"></app-spinner>\n\n</div>\n<div *ngIf=\"!this.shared.loading\" class=\"min\">\n  <app-navbar></app-navbar>\n  <div class=\"outlet\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<app-login></app-login>\n<app-register></app-register>\n<app-show-code></app-show-code>\n<app-homework-response-modal></app-homework-response-modal>\n<app-marks-list></app-marks-list>\n<app-show-members></app-show-members>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/classrom/classrom.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/classrom/classrom.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromClassromClassromComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div *ngIf=\"!this.main.currentClassrom.subjects[0]\">\n  <h1 class=\"text-center p-5\">Ta klasa nie ma jescze żadnych przedmiotów</h1>\n</div>\n<div class=\"cover\" *ngIf=\"this.main.currentClassrom.subjects[0]\">\n  <div class=\"p-3\">\n    <div class=\"text-center mainDiv row p-0 justify-content-center align-items-center\">\n      <h1 class=\"display-3 font-weight-bold pb-3 collapseClass d-block col-12\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\">\n        {{this.classrom.className}}\n      </h1>\n      <h1 class=\"d-block showCode text-center d-block pb-3 col-lg-4 col-11 m-2\" (click)=\"this.showCode($event, classrom.id)\" *ngIf=\"this.main.isEducator\">Kod dostępu</h1>\n      <h1 class=\"d-block showCode text-center d-block pb-3 col-lg-4 col-11 m-2\" (click)=\"this.showMembers()\" *ngIf=\"this.main.isEducator\">Lista członków klasy</h1>\n      <div class=\"col-12\">\n        <div class=\"collapse collapseClassInfo\" id=\"collapseExample\">\n          <div class=\"pb-3 pt-3\">\n            <h1 class=\"display-4 font-weight-bold\">Jesteś\n              <span *ngIf=\"this.main.isEducator\">założycielem klasy</span>\n              <span *ngIf=\"this.main.currentRole === 0\">uczniem</span>\n              <span *ngIf=\"this.main.currentRole === 1 && !this.main.isEducator\">nauczycielem</span>\n            </h1>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row classrom m-0 p-0\">\n\n    <div class=\"col-lg-9 col-12 d-none d-md-block p-3\">\n      <div class=\"subject\" #subject>\n        <app-subject [currentSubSet]=\"this.main.currentSubject\"></app-subject>\n      </div>\n    </div>\n\n    <div class=\"p-3 col-md-3 col-12\" >\n      <div class=\"d-none d-md-block text-center subjectsChoosing\">\n        <h1>Przedmioty</h1>\n        <div class=\"example_d p-3 mb-3\" *ngFor=\"let subject of subjects; let i=index\" (click)=\"setCurrentSubject(i)\">{{subject.name}}</div>\n      </div>\n      <div class=\"d-block d-md-none text-center subjectsChoosing\">\n        <h1>Przedmioty</h1>\n        <div class=\" example_d p-3 mb-3\" *ngFor=\"let subject of subjects; let i=index\" (click)=\"setCurrentSubjectNotAsync(i)\" routerLink=\"/subject\">{{subject.name}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-finished/homework-finished.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-finished/homework-finished.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromHomeworkFinishedHomeworkFinishedComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-around m-3\">\n  <a class=\"font-weight-bold pb-3 col-11 singeHomeworkDesc\" data-toggle=\"collapse\"\n     (click)=\"addFocusClass()\" role=\"button\" [href]=\"'#homework-'+iterator\"\n     aria-expanded=\"false\" aria-controls=\"collapseExample\" [ngClass]=\"{'singeHomeworkDescFocused': clickedStatus}\">\n    <div class=\"row justify-content-between m-0 p-0\">\n      <div  class=\"m-0 p-1 col-md-6 col-12\">\n        <h1>{{homework.name}}</h1>\n        <div *ngIf=\"main.currentRole === 0\">\n          <div *ngIf=\"homework.responses[0]\">\n            <div class=\"markMarked\" *ngIf=\"homework.responses[0].mark\" >Ocena: {{homework.responses[0].mark}}</div>\n            <div class=\"markNoMarked\" *ngIf=\"!homework.responses[0].mark\">Nie oceniono</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row col-md-6 text-md-right col-12\">\n        <div class=\"m-0 p-1 col-12\">Data dodania: {{startTime}}</div>\n        <div class=\"m-0 p-1 col-12\">Termin: <span class=\"text-danger\">{{endTime}}</span> </div>\n        <div class=\"m-0 p-1 col-12\" *ngIf=\"main.currentRole === 0\">Data odesłania:\n          <span class=\"text-danger\" *ngIf=\"homework.responses[0]\">{{sendTime}}</span>\n          <span class=\"text-danger\" *ngIf=\"!homework.responses[0]\">---------</span>\n        </div>\n      </div>\n    </div>\n  </a>\n\n  <div class=\"collapse homeworkDesc col-11 p-0 row justify-content-start\" [id]=\"'homework-' + iterator\">\n    <div class=\"col-12 p-3\">\n      <span class=\"infoSpan\">Opis zadania</span>\n    </div>\n    <h2 class=\"pr-3 pl-3 pb-3 col-12 m-0 description\">{{homework.description}}</h2>\n    <app-show-homework-file [homeworkSet]=\"homework\" class=\"col-12 p-0\"></app-show-homework-file>\n\n    <div *ngIf=\"main.currentRole === 0 && homework.responses[0]\" class=\"col-12 p-0\">\n      <app-homework-response [responseSet]=\"this.homework.responses[0]\"></app-homework-response>\n    </div>\n\n<!--    teacher -->\n    <div *ngIf=\"main.currentRole === 1\" class=\"homeworksList row m-0 p-3 justify-content-center col-12\">\n      <div class=\"row p-0 justify-content-between col-12\">\n        <div class=\"form-group col-md-4 col-10 row align-items-end\">\n          <input type=\"email\" class=\"form-control\" placeholder=\"Filtruj listę\" name=\"name\" required [(ngModel)]=\"text\" (ngModelChange)=\"filter()\"/>\n        </div>\n        <div class=\"col-md-6 col-10 row pb-2 justify-content-center\">\n          <button class=\"formBtn\" (click)=\"showGrades()\">Lista ocen</button>\n        </div>\n        <div class=\"col-md-2\">\n          <i class=\"fas fa-trash\" (click)=\"deleteHomework()\"></i>\n        </div>\n      </div>\n      <div class=\"row p-0 justify-content-between col-12\" *ngIf=\"homework.responses[0]\">\n\n        <ul class=\"list-group mt-5 mb-3 col-12\" *ngIf=\"this.homework.responses[0]\">\n          <li class=\"list-group-item m-1\" *ngFor=\"let res of this.homework.responses; let i=index\" (click)=\"openHomeworkModal(res)\">\n            <div class=\"row p-0 m-0\">\n              <div class=\"col-12\">\n                <h2 class=\"text-center d-block\">Imię i nazwisko: {{res.senderName}} {{res.senderSurname}}</h2>\n                <h4 class=\"text-center d-block green\" *ngIf=\"res.mark\">Oceniono - {{res.mark}}</h4>\n                <h4 class=\"text-center d-block red\" *ngIf=\"!res.mark\">Nie oceniono</h4>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-12 row p-0\"  *ngIf=\"!homework.responses[0]\">\n        <h2 class=\"col-10 p-0\">Nikt jeszcze nie odpowiedział na to zadanie.</h2>\n        <div class=\"col-2\">\n          <i class=\"fas fa-trash\" (click)=\"deleteHomework()\"></i>\n        </div>\n      </div>\n    </div>\n<!--    student doesn't answear -->\n    <div *ngIf=\"main.currentRole === 0 && !homework.responses[0]\" class=\"p-3\">\n      <h2 class=\"text-center\">Niestety nie zdążyłeś odpowiedzieć na to pytanie</h2>\n    </div>\n\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-response/homework-response.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-response/homework-response.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromHomeworkResponseHomeworkResponseComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row p-0 m-0\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Odpowiedź ucznia {{response.senderName}} {{response.senderSurname}} </span>\n  </div>\n  <div class=\"col-12 mt-2 pb-3\" *ngIf=\"response.description\">\n    <h2>{{response.description}}</h2>\n  </div>\n  <div class=\"col-12 mt-2 pb-3\" *ngIf=\"!response.description\">\n    <h2>Nie udzieliłeś odpowiedzi na to pytanie</h2>\n  </div>\n  <app-show-response-file [responseSet]=\"response\" class=\"col-12 p-0\"></app-show-response-file>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework/homework.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework/homework.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromHomeworkHomeworkComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row justify-content-center m-3\">\n  <a class=\"font-weight-bold pb-3 col-11 singeHomeworkDesc\" data-toggle=\"collapse\"\n     (click)=\"addFocusClass()\" role=\"button\" [href]=\"'#homework-'+iterator\"\n     aria-expanded=\"false\" aria-controls=\"collapseExample\" [ngClass]=\"{'singeHomeworkDescFocused': clickedStatus}\">\n    <div class=\"row justify-content-between m-0 p-0\">\n      <div  class=\"m-0 p-1 col-md-6 col-12\"><h1>{{homework.name}}</h1></div>\n      <div class=\"row col-md-6 col-12 text-md-right\">\n        <div class=\"m-0 p-1 col-12\">Data dodania: {{startTime}}</div>\n        <div class=\"m-0 p-1 col-12\">Termin: <span class=\"text-danger\">{{endTime}}</span> </div>\n      </div>\n      <div class=\"col-12 m-0 p-1\">\n        <h3>Pozostało {{leftHours}} godzin i {{leftMinutes}} minut</h3>\n      </div>\n    </div>\n\n  </a>\n\n  <div class=\"collapse homeworkDesc col-11 row justify-content-center p-0\" [id]=\"'homework-' + iterator\">\n    <div class=\"col-12 row justify-content-center p-0\">\n      <div class=\"col-12 p-3\">\n        <span class=\"infoSpan\">Opis zadania</span>\n      </div>\n      <h2 class=\"pr-3 pl-3 pb-3 col-12 m-0 description\">{{homework.description}}</h2>\n      <app-show-homework-file [homeworkSet]=\"homework\" class=\"col-12 p-0\"></app-show-homework-file>\n    </div>\n    <div class=\"col-12 p-0\">\n      <div class=\"col-12 p-3\">\n        <span class=\"infoSpan\">Twoja odpowiedź</span>\n      </div>\n      <form [formGroup]=\"homeworkResponseForm\" class=\"row justify-content-around p-md-3 p-0 m-0\">\n        <div class=\"form-group col-12\">\n        <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" formControlName=\"description\" placeholder=\"Treść odpowiedzi\">\n\n        </textarea>\n        </div>\n        <div class=\"form-group col-12 row p-0 justify-content-center\">\n          <button class=\"formBtn\" (click)=\"addLink()\">Dodaj link</button>\n          <input *ngFor=\"let iter of linksIterator; let i = index\" type=\"text\"  class=\"form-control col-12 mt-2 mb-2\"  [(ngModel)]=\"linkHrefs[i]\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"this.show(i)\">\n        </div>\n        <div class=\"col-12 row justify-content-center m-0\">\n          <div class=\"custom-file col-12\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\">\n            <label class=\"custom-file-label\" for=\"customFile\">Dołącz plik do zadania</label>\n          </div>\n\n          <div class=\"col-12 mt-3 p-0\" *ngIf=\"files\">\n            <div class=\"progress mt-2 mr-0 ml-0\" *ngFor=\"let file of files\" >\n              <div class=\"progress-bar\" role=\"progressbar\" [style]=\"{'width': file.progress + '%'}\" [ngClass]=\"{'green': file.finished}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                {{file.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"formBtn col-md-4 col-8 mb-2 mb-md-0\" (click)=\"addNewResponse()\">Dodaj</button>\n      </form>\n    </div>\n\n  </div>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/subject/subject.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/subject/subject.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromSubjectSubjectComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"goBackDiv d-block d-md-none\" (click)=\"goBack()\">Wybierz przedmiot</div>\n<div class=\"col-12 pt-5 pt-md-0\" *ngIf=\"this.main.currentRole === 2\">\n    <h1 class=\"text-center\">Brak dostępu do danych przedmiotu. Nie jesteś jego nauczycielem</h1>\n</div>\n<div *ngIf=\"this.main.currentRole !== 2\">\n<div class=\"text-center subHeader pt-5 pt-md-0 text-wrap\">{{this.main.currentSubject.name}}</div>\n<div class=\"row justify-content-around subButtons p-3 m-0 mb-5\">\n\n  <a class=\"example_f col-12 col-md-3\" *ngIf=\"main.currentRole === 1 || main.currentRole === 2\" data-toggle=\"collapse\" href=\"#addNewHomework\"><span>Dodaj zadanie</span></a>\n  <a class=\"example_f col-12 col-md-4\" *ngIf=\"whichHomeworks === 0\" (click)=\"whichHomeworks = 1; showChat = false\"><span>Pokaż najnowsze zadania</span></a>\n  <a class=\"example_f col-12 col-md-4\" *ngIf=\"whichHomeworks === 1\" (click)=\"whichHomeworks = 0; showChat = false\"><span>Przejdź do archiwum</span></a>\n  <a class=\"example_f col-12 col-md-3\" (click)=\"showChat = !showChat\"><span>Otwórz chat</span></a>\n\n  <div class=\"col-12 pt-3\">\n    <div class=\"addNewHomeworkForm collapse col-12\" id=\"addNewHomework\">\n      <form [formGroup]=\"homeworkForm\" class=\"row justify-content-around p-md-3 p-0\">\n        <div class=\"col-12 row m-0 p-0 headerDiv p-3 justify-content-between align-items-end\">\n          <div class=\"form-group col-md-5 col-12 mb-md-5 p-0\">\n            <h3 class=\"text-white termin\">Nazwa zadania</h3>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Nazwa\" name=\"name\" id='numberPeople' required formControlName=\"name\"/>\n            <div *ngIf=\"homeworkForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj nazwę zadania.\n            </div>\n          </div>\n          <div class=\"col-md-5 col-12 mb-md-5 row justify-content-center align-items-center pickerDiv p-0 m-0\">\n            <h3 class=\"text-white termin text-left\">Termin oddania</h3>\n            <div id=\"picker\">   </div>\n            <input type=\"hidden\" id=\"result\" value=\"\" #timeValue>\n            <div *ngIf=\"homeworkForm.controls.time.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj termin odddania zadania.\n            </div>\n          </div>\n\n        </div>\n\n        <div class=\"form-group col-12\">\n          <h3 class=\"text-white termin\">Treść zadania</h3>\n        <textarea class=\"form-control p-2 m-0\" id=\"exampleFormControlTextarea1\" rows=\"4\" formControlName=\"description\" placeholder=\"Treść\">\n\n        </textarea>\n        </div>\n        <div class=\"form-group col-12 row p-0 justify-content-center\">\n          <button class=\"formBtn\" (click)=\"addLink()\">Dodaj link</button>\n          <input *ngFor=\"let iter of linksIterator; let i = index\" type=\"text\" class=\"form-control col-12 mt-2 mb-2\" [(ngModel)]=\"linkHrefs[i]\" [ngModelOptions]=\"{standalone: true}\">\n        </div>\n        <div class=\"col-12 row justify-content-center p-3 m-0\">\n          <div class=\"custom-file col-12\">\n            <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\">\n            <label class=\"custom-file-label\" for=\"customFile\">Dołącz plik</label>\n          </div>\n\n          <div class=\"col-10 mt-3 p-0\" *ngIf=\"files\">\n            <div class=\"progress mt-2 mr-0 ml-0\" *ngFor=\"let file of files\" >\n              <div class=\"progress-bar\" role=\"progressbar\" [style]=\"{'width': file.progress + '%'}\" [ngClass]=\"{'green': file.finished}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n                {{file.name}}\n              </div>\n            </div>\n          </div>\n        </div>\n        <button type=\"submit\" class=\"formBtn col-6 mb-2 mb-md-0 col-md-4\" (click)=\"addNewHomework()\">Dodaj</button>\n      </form>\n    </div>\n  </div>\n</div>\n<!-- div for students -->\n<div class=\"homeworksDiv\" *ngIf=\"whichHomeworks === 1  && !showChat\">\n  <div *ngIf=\"this.main.currentRole === 0\">\n    <h1 class=\"text-center subHomeworks\" >Zadania do zrobienia</h1>\n    <div *ngFor=\"let homework of this.currentHomeworks; let i=index\">\n      <app-homework [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework>\n    </div>\n  </div>\n<!-- div for teachers -->\n  <div *ngIf=\"this.main.currentRole !== 0\">\n    <h1 class=\"text-center subHomeworks\" >Obecnie trwające</h1>\n    <div *ngFor=\"let homework of this.currentHomeworks; let i=index\">\n      <app-homework-finished [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework-finished>\n    </div>\n  </div>\n</div>\n<div class=\"homeworksDiv\" *ngIf=\"whichHomeworks === 0 && !showChat\">\n  <h1 class=\"text-center subHomeworks\">Zakończone zadania</h1>\n  <div *ngFor=\"let homework of this.finishedHomeworks; let i=index\">\n    <app-homework-finished [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework-finished>\n  </div>\n</div>\n<div class=\"homeworksDiv\" *ngIf=\"showChat\">\n  <h1 class=\"text-center subHomeworks\">Chat</h1>\n  <app-text-chat></app-text-chat>\n</div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/text-chat/text-chat.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/text-chat/text-chat.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsClassromTextChatTextChatComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"row m-0 p-4 mainChatDiv\">\n\n  <div class=\"chat col-12\" id=\"chatDiv\">\n\n    <div class=\"singleMessage row p-0\" *ngFor=\"let message of messages\">\n      <div class=\"col-12\">\n        <span class=\"name\">{{message.senderName}} {{message.senderSurname}}</span>\n        <span class=\"time\">{{message.sendTime}}</span>\n      </div>\n      <div class=\"col-12\">\n        {{message.msessage}}\n      </div>\n    </div>\n    <div class=\"load\" *ngIf=\"loadingMessages\">Ładowanie wiadomości</div>\n  </div>\n  <form class=\"row m-0 align-items-end p-0 col-12\" [formGroup]=\"messageForm\">\n    <div class=\"form-group col-10 m-0 pr-2 pl-0\">\n      <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Wiadomość\" formControlName=\"message\">\n    </div>\n    <button class=\"formBtn col-2\" (click)=\"sendMessage()\"><i class=\"fas fa-reply\"></i></button>\n  </form>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/homework-response/homework-response-modal.component.html":
  /*!**********************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/homework-response/homework-response-modal.component.html ***!
    \**********************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsHomeworkResponseHomeworkResponseModalComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #showHomework class=\"d-none\" data-toggle=\"modal\" data-target=\"#openHomeworkModal\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"openHomeworkModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"openHomeworkModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"response\">\n        <app-homework-response [responseSet]=\"response\"></app-homework-response>\n      <div class=\"row m-0 p-0 justify-content-between gradeRow\">\n        <form [formGroup]=\"markForm\" class=\"col-6\">\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control markInput\" placeholder=\"6\" formControlName=\"mark\" maxlength=\"1\">\n          </div>\n        </form>\n        <button type=\"submit\" class=\"formBtn col-5\" (click)=\"addMark()\">Oceń</button>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html":
  /*!****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html ***!
    \****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #openModal class=\"d-none\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\">\n  Launch demo modal\n</button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zaloguj się</h5>\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form__group field\">\n          <input type=\"text\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailLogin' />\n          <label for=\"emailLogin\" class=\"form__label\">Nazwa użytkownika</label>\n          <div *ngIf=\"loginForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny email.\n          </div>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordLogin' />\n          <label for=\"passwordLogin\" class=\"form__label\">Hasło</label>\n          <div *ngIf=\"loginForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawne hasło. Minimum 5 znaków.\n          </div>\n        </div>\n\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openRegisterModal()\">\n          Nie masz jeszcze konta? Zarejestruj się!\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/marks-list/marks-list.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/marks-list/marks-list.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsMarksListMarksListComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #showMarksList class=\"d-none\" data-toggle=\"modal\" data-target=\"#openMarksList\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"openMarksList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"openMarksList\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"response\">\n      <h1 class=\"text-center marksListH1 pb-2\">Lista ocen</h1>\n      <div *ngFor=\"let res of response\" class=\"row justify-content-between studentsList\">\n        <div class=\"col-8\">{{res.senderName}} {{res.senderSurname}}</div>\n        <div class=\"col-4 text-left\" *ngIf=\"res.mark\">{{res.mark}}</div>\n        <div class=\"col-4 text-left\" *ngIf=\"!res.mark\">Brak</div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsRegisterRegisterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #openRegister class=\"d-none\" data-toggle=\"modal\" data-target=\"#registerModal\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zarejestruj się</h5>\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group row justify-content-center\">\n          <div class=\"role role1 col-5\" (click)=\"select(0)\" [ngClass]=\"{'roleSelected': selectedRole === 0}\">Uczeń</div>\n          <div class=\"role role2 col-5\" (click)=\"select(1)\" [ngClass]=\"{'roleSelected': selectedRole === 1}\">Nauczyciel</div>\n        </div>\n        <div class=\"row p-0 justify-content-between col-12 m-0\">\n          <div class=\"form__group field col-md-5 col-12 \">\n            <input type=\"email\" class=\"form__field\" formControlName=\"name\" placeholder=\"Name\" name=\"name\" id='name'/>\n            <label for=\"emailRegister\" class=\"form__label\">Imię</label>\n            <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj imię.\n            </div>\n          </div>\n          <div class=\"form__group field col-md-5 col-12 \">\n            <input type=\"email\" class=\"form__field\" formControlName=\"surname\" placeholder=\"Name\" name=\"name\" id='surname'/>\n            <label for=\"emailRegister\" class=\"form__label\">Nazwisko</label>\n            <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj nazwisko.\n            </div>\n          </div>\n        </div>\n        <div class=\"form__group field\">\n          <input type=\"email\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailRegister'/>\n          <label for=\"emailRegister\" class=\"form__label\">Email</label>\n          <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny email.\n          </div>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordRegister'/>\n          <label for=\"passwordRegister\" class=\"form__label\">Hasło</label>\n          <div *ngIf=\"registerForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawne hasło. Minimum 5 znaków.\n          </div>\n        </div>\n        <div class=\"form__group field\" *ngIf=\"!selectedRole\">\n          <input type=\"text\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='studentCode' formControlName=\"userCode\"/>\n          <label for=\"studentCode\" class=\"form__label\">Kod dostępu</label>\n          <div *ngIf=\"registerForm.controls.userCode.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny kod.\n          </div>\n        </div>\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openLoginModal()\">\n          Powrót do logowania\n      </div>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-code/show-code.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-code/show-code.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsShowCodeShowCodeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #showCode class=\"d-none\" data-toggle=\"modal\" data-target=\"#openCodeModal\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"openCodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" data-backdrop=\"static\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\" (click)=\"copyCodeFunc()\">\n      <div class=\"row m-0 p-3\">\n        <div class=\"col-12 headerText\">Kliknij żeby skopiować</div>\n        <h4 class=\"text-center d-block col-12\">Wyślij ten kod do wszystkich uczniów którzy chcą dołączyć do tej klasy.</h4>\n        <div class=\"code col-12\" #codeCopy>{{code}}</div>\n      </div>\n\n\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-members/show-members.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-members/show-members.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsModelsShowMembersShowMembersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- Button trigger modal -->\n<button type=\"button\" #showMembers class=\"d-none\" data-toggle=\"modal\" data-target=\"#openMembersModal\"></button>\n\n<!-- Modal -->\n<div class=\"modal fade\" id=\"openMembersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"members\">\n      <h1 class=\"text-center marksListH1 pb-2\">Lista osób należących do klasy</h1>\n      <div *ngFor=\"let res of members; let i=index\" class=\"row justify-content-between studentsList m-2\">\n        <div class=\"col-8 personData\">{{res}}</div>\n        <div class=\"col-md-4\">\n          <i class=\"fas fa-trash\" (click)=\"deleteUser(i)\"></i>\n        </div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedContactContactComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"cover flex-column d-flex flex-column\">\r\n  <div class=\"text-center mainDiv\">\r\n    <h1 class=\"display-3 font-weight-bold\">Kontakt</h1>\r\n    <h1 class=\"mb-5 font-weight-bold\">Skontaktuj się z nami!</h1>\r\n  </div>\r\n  <div class=\"rest h-100\">\r\n    <div class=\"row justify-content-center p-4\">\r\n      <div class=\"container mt-4 row contactDetails p-0\">\r\n        <h1 class=\"col-12 d-block contactUs\">Skontaktuj się z nami</h1>\r\n        <div class=\"row infoRow col-12 p-0\">\r\n          <div class=\"col-12 singeInfo row m-0\">\r\n            <div class=\"col-md-6 col-12 text-center text-md-left\">Email:</div>\r\n            <div class=\"col-md-6 col-12 text-md-right text-center emailText\">dawidmrraven@gmail.com</div>\r\n            <div class=\"col-12 text-md-right text-center emailText\">szymbaramichal@gmail.com</div>\r\n          </div>\r\n          <div class=\"col-12 singeInfo row m-0\">\r\n            <div class=\"col-md-6 col-12 text-center text-md-left\">Telefon:</div>\r\n            <div class=\"col-md-6 col-12 text-md-right text-center\">+48 503683773</div>\r\n            <div class=\"col-12 text-md-right text-center\">+48 537329845</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>footer works!</p>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedNavbarNavbarComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"mainPage\" *ngIf=\"this.main.user\" [routerLinkActive]=\"['activeBrand']\">Home-School</a>\n  <a class=\"navbar-brand\" routerLink=\"\" *ngIf=\"!this.main.user\">Home-School</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n<!--    noone-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!this.main.user\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link loginNav\" (click)=\"this.shared.openLoginModal()\">Zaloguj się</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n    </ul>\n\n<!--    teacher-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"this.main.user\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"profile\">Konto</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.main.user.userRole == 1\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"teacher/create-classrom\">Zarządzanie klasą</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!this.main.classrom[1] && this.main.classrom[0]\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"classrom/0\">Twoja klasa</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"this.main.classrom[1]\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Twoje klasy\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown2\">\n          <a class=\"dropdown-item\" *ngFor=\"let classrom of this.main.classrom; let i=index\" [routerLink]=\"['classrom',i]\">{{classrom.className}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link logout\" (click)=\"this.main.logout()\">Wyloguj się</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedProfileProfileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"cover flex-column d-flex\">\n  <div class=\"text-center mainDiv\">\n    <h1 class=\"display-3 font-weight-bold\">Twój profil</h1>\n    <h1 class=\"mb-5 font-weight-bold\">Tutaj możesz edytować swoje dane</h1>\n  </div>\n  <div class=\"rest h-100\">\n    <div class=\"row justify-content-center p-4\">\n      <div class=\"container mt-4 row contactDetails p-0\">\n        <h1 class=\"col-12 d-block contactUs\">Jesteś\n          <span *ngIf=\"this.main.user.userRole === 1\">nauczycielem</span>\n          <span *ngIf=\"this.main.user.userRole === 0\">uczniem</span>\n        </h1>\n        <div class=\"col-md-3 col-12 row justify-content-center align-items-center m-0 p-0 profilePicRow\">\n          <div class=\"col-md-10 col-lg-8 col-5 p-3\">\n            <img src=\"https://woj-pol.pl/wp-content/uploads/2020/03/mundur-policji-2-600x600.jpg\" class=\"img-fluid\">\n          </div>\n        </div>\n        <div class=\"row infoRow col-md-9 col-12 p-0 m-0\">\n          <div class=\"col-12 singeInfo row m-0 align-items-center\">\n            <div class=\"col-md-6 col-12 text-center text-md-left\">Imię i nazwisko:</div>\n            <div class=\"col-md-6 col-12 text-md-right text-center\">{{user.name}} {{user.surrname}}</div>\n          </div>\n          <div class=\"col-12 singeInfo row m-0 align-items-center\">\n            <div class=\"col-md-6 col-12 text-center text-md-left\">Adres email:</div>\n            <div class=\"col-md-6 col-12 text-md-right text-center\">{{user.email}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  </div>\n\n\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-homework-file/show-homework-file.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-homework-file/show-homework-file.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedShowHomeworkFileShowHomeworkFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"homework.files[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Pliki do zadania</span>\n  </div>\n  <div class=\"col-12 p-0 m-0 row justify-content-start p-3\">\n    <button class=\"formBtn pr-3 pl-3 pb-3 \" (click)=\"downloadAllFiles()\" >Pobierz pliki</button>\n  </div>\n\n  <div class=\"col-12 mt-2 mb-2 p-3\" *ngFor=\"let srcItem of src; let i=index\">\n    <button class=\"formBtn openInBrowserBtn col-12 \" (click)=\"openWindow(i)\">Pobierz na dysk</button>\n    <div class=\"embed-responsive embed-responsive-16by9\"   >\n\n      <iframe class=\"embed-responsive-item\" [src]=\"getSrc(i)\"  allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"homework.linkHrefs[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Linki do zadania</span>\n  </div>\n  <div class=\"pb-2 pr-3 pl-3 \">\n    <div *ngFor=\"let link of homework.linkHrefs\" class=\"col-12 mb-2 text-center p-0\">\n      <a [href]=\"link\" target=\"_blank\" class=\"linkHref\">{{link}}</a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-response-file/show-response-file.component.html":
  /*!******************************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-response-file/show-response-file.component.html ***!
    \******************************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedShowResponseFileShowResponseFileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"response.files[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Pliki do odpowiedzi</span>\n  </div>\n  <div class=\"col-12 p-0 m-0 row justify-content-start p-3\">\n    <button class=\"formBtn pr-3 pl-3 pb-3 \" (click)=\"downloadAllFiles()\" >Pobierz pliki</button>\n  </div>\n\n  <div class=\"col-12 mt-2 mb-2 p-3\" *ngFor=\"let srcItem of src; let i=index\">\n    <button class=\"formBtn openInBrowserBtn col-12 \" (click)=\"openWindow(i)\">Pobierz na dysk</button>\n    <div class=\"embed-responsive embed-responsive-16by9\"   >\n\n      <iframe class=\"embed-responsive-item\" [src]=\"getSrc(i)\"  allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"response.linkHrefs[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Linki do odpowiedzi</span>\n  </div>\n  <div class=\"pb-2 pr-3 pl-3 \">\n    <div *ngFor=\"let link of response.linkHrefs\" class=\"col-12 mb-2 text-center p-0\">\n      <a [href]=\"link\" target=\"_blank\" class=\"linkHref\">{{link}}</a>\n    </div>\n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/spinner/spinner.component.html":
  /*!********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/spinner/spinner.component.html ***!
    \********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSharedSpinnerSpinnerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div id=\"main\">\n\n  <span class=\"spinner\"></span>\n\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherMainTeacherMainTeacherComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex h-100 flex-column\">\r\n  <div class=\"text-center mainDiv\">\r\n    <h1 class=\"display-3 font-weight-bold\">Strona główna</h1>\r\n    <h1 class=\"mb-5 font-weight-bold\">Najnowsze informacje</h1>\r\n  </div>\r\n  <div class=\"row rest justify-content-around align-items-start\">\r\n    <div class=\"col-lg-8 col-12 \">\r\n      <div class=\"text-center classromDiv row p-0 justify-content-center\">\r\n        <h1 class=\"mb-2\">Twoje klasy</h1>\r\n        <div *ngFor=\"let classrom of this.main.classrom; let i = index\" [routerLink]=\"['/classrom', i]\" class=\"singleClassrom col-11 row justify-content-center align-items-center mb-3\">\r\n          <h1 class=\"col-lg-9 col-12 d-block text-center text-lg-left\">{{classrom.className}} - {{classrom.schoolName}}</h1>\r\n          <h3 class=\"col-lg-3 col-12 d-block text-right showCode text-center mb-2 mb-lg-0\" (click)=\"this.showCode($event, classrom.id)\">Kod dostępu</h3>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <div class=\"classromDiv text-center row p-0 justify-content-center\">\r\n        <h1>Ostatnie wiadomości</h1>\r\n        <h3>Wkrótce!</h3>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html":
  /*!*******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html ***!
    \*******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTeacherNewClassromNewClassromComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"d-flex flex-column h-100 mainDiv p-2\">\r\n  <div class=\"container text-center justify-content-center containerMain\">\r\n    <h1>Dodaj nową klasę!</h1>\r\n    <p class=\"iconsP p-0 p-md-2\">Po dodaniu nowej klasy wyświetli Ci się kod dostępu.\r\n      Wyślij go do wszystkich uczniów, którzy mają dołączyć do klasy.\r\n      Będą go musieli podać podczas rejestracji.\r\n    <br><span class=\"red\">Kod dostępny jest również na stronie głównej i stronie klasy. </span>\r\n    </p>\r\n    <form [formGroup]=\"addClassromForm\" class=\"row justify-content-around\">\r\n\r\n        <div class=\"form__group field col-md-11 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='className' formControlName=\"className\"/>\r\n          <label for=\"className\" class=\"form__label\">Nazwa klasy*</label>\r\n          <div *ngIf=\"addClassromForm.controls.className.invalid && submittedFirstPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę klasy.\r\n          </div>\r\n        </div>\r\n\r\n<!--        <div class=\"form__group field  col-md-5 col-12\">-->\r\n<!--          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='numberPeople' />-->\r\n<!--          <label for=\"numberPeople\" class=\"form__label\">Ilość osób</label>-->\r\n<!--        </div>-->\r\n\r\n        <div class=\"form__group field col-md-11 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='schoolName' formControlName=\"schoolName\"/>\r\n          <label for=\"schoolName\" class=\"form__label\">Nazwa szkoły*</label>\r\n          <div *ngIf=\"addClassromForm.controls.schoolName.invalid && submittedFirstPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę szkoły.\r\n          </div>\r\n        </div>\r\n\r\n\r\n      <button type=\"submit\" class=\"formBtn col-4\" (click)=\"addNewClass()\">Dodaj</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"container text-center justify-content-center containerInfo\">\r\n    <h1>Dodaj nowy przedmiot</h1>\r\n    <form [formGroup]=\"addSubjectForm\" class=\"row justify-content-around\">\r\n      <div class=\"form-group col-12 col-md-5\">\r\n        <h3>Wybierz klasę</h3>\r\n        <select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"classID\">\r\n          <option *ngFor=\"let classrom of this.main.classrom;let indexOfelement=index;\" [value]=\"this.main.classrom[indexOfelement].id\">{{classrom.className}} - {{classrom.schoolName}} </option>\r\n        </select>\r\n        <div *ngIf=\"addSubjectForm.controls.classID.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n          Wybierz klasę.\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-around col-12\">\r\n        <div class=\"form__group field col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field yellowInput\" placeholder=\"Name\" name=\"name\" id='userToAddEmail' formControlName=\"userToAddEmail\"/>\r\n          <label for=\"userToAddEmail\" class=\"form__label\">Email nauczyciela</label>\r\n          <div *ngIf=\"addSubjectForm.controls.userToAddEmail.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n            Podaj poprawny email.\r\n          </div>\r\n        </div>\r\n        <div class=\"form__group field col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field yellowInput\" placeholder=\"Name\" name=\"name\" id='subjectName' formControlName=\"subjectName\"/>\r\n          <label for=\"subjectName\" class=\"form__label\">Nazwa przedmiotu</label>\r\n          <div *ngIf=\"addSubjectForm.controls.subjectName.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę przedmiotu.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <button type=\"submit\" class=\"formBtn col-4\" (click)=\"addNewSubject()\">Dodaj</button>\r\n    <h1 class=\"deleteSubH1\">Usuń przedmiot</h1>\r\n    <form [formGroup]=\"deleteSubjectForm\" class=\"row justify-content-around\">\r\n      <div class=\"form-group col-12 col-md-5\">\r\n        <h3>Wybierz klasę</h3>\r\n        <select class=\"form-control\"  formControlName=\"classID\">\r\n          <option *ngFor=\"let classrom of this.main.classrom;let indexOfelement=index;\" [value]=\"this.main.classrom[indexOfelement].id\">{{classrom.className}} - {{classrom.schoolName}} </option>\r\n        </select>\r\n        <div *ngIf=\"this.classrom\">\r\n          <h3>Wybierz przedmiot</h3>\r\n          <select class=\"form-control\"  formControlName=\"subjectID\">\r\n            <option *ngFor=\"let subject of this.classrom.subjects\" [value]=\"subject.id\">{{subject.name}}</option>\r\n          </select>\r\n        </div>\r\n\r\n        <div *ngIf=\"addSubjectForm.controls.classID.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n          Wybierz klasę.\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n\r\n    <button type=\"submit\" class=\"formBtn col-4 redBg\" (click)=\"deleteSubject()\">Usuń</button>\r\n\r\n  </div>\r\n\r\n</div>\r\n\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsWelcomePageWelcomeWelcomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"main h-100\">\n  <div class=\"text-center mainDiv\">\n    <h1 class=\"display-1 font-weight-bold\">Home-School</h1>\n    <h1 class=\"display-4 mb-5 font-weight-bold\">spróbuj nauki nie wychodząc z domu</h1>\n  </div>\n  <div class=\"text-center iconsDiv\">\n    <h1 class=\"display-4 font-weight-bold mb-5\">Zalety</h1>\n    <div class=\"row justify-content-around iconsDiv2 m-md-5 m-0\">\n      <div class=\"col-12 col-md-3 p-5 p-md-0 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-child\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Tylko ty</h1>\n        <p class=\"iconsP\">\n          Sam narzucasz sobie kiedy, gdzie i jak będziesz pracował. Nikt cię nie ograniczna.\n        </p>\n      </div>\n      <div class=\"col-12 col-md-3 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fab fa-chromecast\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Nowocześność</h1>\n        <p class=\"iconsP\">\n          Świat ciągle idzie do przodu, czas żeby sposób w jaki się uczymy też się zmieniał.\n        </p>\n      </div>\n      <div class=\"col-md-3 p-5 p-md-0 col-12 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-graduation-cap\"></i>\n        </div>\n        <h1 class=\"iconsHeader\">Wygoda</h1>\n        <p class=\"iconsP\">\n          Home-School pozwala na łatwe, szybkie i proste dodawanie i rozwiązywanie zadań. Nauka tutaj jest po\n          prostu przyjemna.\n        </p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"descriptionDiv\">\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Ułatwienie pracy dla nauczycieli</h1>\n        <p class=\"iconsP\">Wysyłanie zadań oraz oczekiwanie na odpowiedź zawsze były problemem.<br>Od dziś możesz się z tym pożegnać! Dodawaj zadania, sprawdzaj je i oceniaj przy użyciu kilku kliknięć.</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg2 img-fluid\"></div>\n      </div>\n    </div>\n\n    <div class=\"flex-column flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg1 img-fluid\"></div>\n      </div>\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Pracuj wydajnie</h1>\n        <p class=\"iconsP\">Już nie musisz się trzymać planu lekcji. Ucz się wtedy kiedy masz na to ochotę.<br> Wykorzystuj zastrzyki motywacji, żeby szybko i precyzyjnie rozwiązywać zadania. Home-School daje możliwość nauki o każdej porze. </p>\n      </div>\n    </div>\n\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <h1>Wszystko w jednym miejscu</h1>\n        <p class=\"iconsP\">Nie musisz już używać wielu programów do nauki jednego przedmiotu. Home-School pozwala na robienie tego wszystkiego czego oczekują nauczyciele od platformu e-lerningowej.</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg3 img-fluid\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"teamDiv row justify-content-center p-0 text-center pb-5\">\n    <h1 class=\"display-4 font-weight-bold mb-5 col-12 mt-5\">Twórcy</h1>\n    <div class=\"teamPersonDiv col-lg-6 col-12 row p-0 justify-content-center mb-5 mb-md-0\">\n      <img src=\"assets/img/dawid.jpg\" class=\"img-fluid personIMG\" alt=\"Responsive image\">\n      <h1 class=\"col-12 pt-2 pb-2\">Dawid Kruk</h1>\n      <p class=\"iconsP\">Frontend developer</p>\n    </div>\n    <div class=\"teamPersonDiv col-lg-6 col-12 flex-column justify-content-center\">\n      <img src=\"assets/img/majki.png\" class=\"img-fluid personIMG\" alt=\"Responsive image\">\n      <h1 class=\"col-12 pt-2 pb-2\">Michał Szymbara</h1>\n      <p class=\"iconsP\">Backend developer</p>\n    </div>\n  </div>\n  <div class=\"footer row justify-content-center pt-3 m-0\">\n    <h4 class=\"text-center\">Home-School &copy; wszelkie prawa zastrzeżone</h4>\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/welcome-page/welcome/welcome.component */
    "./src/app/components/welcome-page/welcome/welcome.component.ts");
    /* harmony import */


    var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/models/register/register.component */
    "./src/app/components/models/register/register.component.ts");
    /* harmony import */


    var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/teacher/main-teacher/main-teacher.component */
    "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
    /* harmony import */


    var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/teacher/new-classrom/new-classrom.component */
    "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
    /* harmony import */


    var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/contact/contact.component */
    "./src/app/components/shared/contact/contact.component.ts");
    /* harmony import */


    var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/shared/profile/profile.component */
    "./src/app/components/shared/profile/profile.component.ts");
    /* harmony import */


    var _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/classrom/classrom/classrom.component */
    "./src/app/components/classrom/classrom/classrom.component.ts");
    /* harmony import */


    var _components_classrom_subject_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/classrom/subject/subject.component */
    "./src/app/components/classrom/subject/subject.component.ts");

    var routes = [{
      path: '',
      component: _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
    }, {
      path: 'register',
      component: _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
    }, {
      path: 'mainPage',
      component: _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__["MainTeacherComponent"]
    }, {
      path: 'teacher/create-classrom',
      component: _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_6__["NewClassromComponent"]
    }, {
      path: 'contact',
      component: _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
    }, {
      path: 'profile',
      component: _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
    }, {
      path: 'classrom/:classID',
      component: _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_9__["ClassromComponent"]
    }, {
      path: 'subject',
      component: _components_classrom_subject_subject_component__WEBPACK_IMPORTED_MODULE_10__["SubjectComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".min {\n  position: relative;\n  height: 100%;\n}\n\napp-navbar {\n  height: 64px !important;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n\n.outlet {\n  height: 100% !important;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxhcHAuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UsdUJBQUE7RUFDQSxlQUFBO0VBQ0EsV0FBQTtFQUNBLE1BQUE7RUFDQSxXQUFBO0FDRUY7O0FEQUE7RUFDRSx1QkFBQTtFQUNBLFNBQUE7QUNHRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYXBwLW5hdmJhciB7XHJcbiAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ub3V0bGV0IHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4iLCIubWluIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbmFwcC1uYXZiYXIge1xuICBoZWlnaHQ6IDY0cHggIWltcG9ydGFudDtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICB6LWluZGV4OiAxMDtcbn1cblxuLm91dGxldCB7XG4gIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xuICBtYXJnaW46IDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(router, main, toastr, shared) {
        _classCallCheck(this, AppComponent);

        this.router = router;
        this.main = main;
        this.toastr = toastr;
        this.shared = shared;
        this.loading = true; //   this.router.events.subscribe((event: Event) => {
        //   switch ( false ) {
        //     case event instanceof NavigationStart: {
        //       this.shared.loading = true;
        //       break;
        //     }
        //     case event instanceof NavigationEnd:
        //     case event instanceof NavigationCancel:
        //     case event instanceof NavigationError: {
        //       this.shared.loading = false;
        //       break;
        //     }
        //     default: {
        //       break;
        //     }
        //   }
        // });
      }

      _createClass(AppComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.main.user) {
            this.main.ifUserExists();
          }
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
      }];
    };

    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/shared/navbar/navbar.component */
    "./src/app/components/shared/navbar/navbar.component.ts");
    /* harmony import */


    var _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/shared/footer/footer.component */
    "./src/app/components/shared/footer/footer.component.ts");
    /* harmony import */


    var _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/welcome-page/welcome/welcome.component */
    "./src/app/components/welcome-page/welcome/welcome.component.ts");
    /* harmony import */


    var _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/models/login/login.component */
    "./src/app/components/models/login/login.component.ts");
    /* harmony import */


    var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/models/register/register.component */
    "./src/app/components/models/register/register.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/teacher/main-teacher/main-teacher.component */
    "./src/app/components/teacher/main-teacher/main-teacher.component.ts");
    /* harmony import */


    var _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/teacher/new-classrom/new-classrom.component */
    "./src/app/components/teacher/new-classrom/new-classrom.component.ts");
    /* harmony import */


    var _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/shared/contact/contact.component */
    "./src/app/components/shared/contact/contact.component.ts");
    /* harmony import */


    var _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/shared/profile/profile.component */
    "./src/app/components/shared/profile/profile.component.ts");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./core/auth/auth.interceptor */
    "./src/app/core/auth/auth.interceptor.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
    /* harmony import */


    var _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./core/interceptor/http-error.interceptor */
    "./src/app/core/interceptor/http-error.interceptor.ts");
    /* harmony import */


    var _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/classrom/classrom/classrom.component */
    "./src/app/components/classrom/classrom/classrom.component.ts");
    /* harmony import */


    var _components_classrom_subject_subject_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/classrom/subject/subject.component */
    "./src/app/components/classrom/subject/subject.component.ts");
    /* harmony import */


    var _components_classrom_homework_homework_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/classrom/homework/homework.component */
    "./src/app/components/classrom/homework/homework.component.ts");
    /* harmony import */


    var _components_shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/shared/spinner/spinner.component */
    "./src/app/components/shared/spinner/spinner.component.ts");
    /* harmony import */


    var _components_classrom_homework_finished_homework_finished_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/classrom/homework-finished/homework-finished.component */
    "./src/app/components/classrom/homework-finished/homework-finished.component.ts");
    /* harmony import */


    var _components_classrom_homework_response_homework_response_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/classrom/homework-response/homework-response.component */
    "./src/app/components/classrom/homework-response/homework-response.component.ts");
    /* harmony import */


    var _components_models_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/models/show-code/show-code.component */
    "./src/app/components/models/show-code/show-code.component.ts");
    /* harmony import */


    var _components_models_homework_response_homework_response_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/models/homework-response/homework-response-modal.component */
    "./src/app/components/models/homework-response/homework-response-modal.component.ts");
    /* harmony import */


    var _components_models_marks_list_marks_list_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/models/marks-list/marks-list.component */
    "./src/app/components/models/marks-list/marks-list.component.ts");
    /* harmony import */


    var _components_shared_show_homework_file_show_homework_file_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/shared/show-homework-file/show-homework-file.component */
    "./src/app/components/shared/show-homework-file/show-homework-file.component.ts");
    /* harmony import */


    var _components_shared_show_response_file_show_response_file_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/shared/show-response-file/show-response-file.component */
    "./src/app/components/shared/show-response-file/show-response-file.component.ts");
    /* harmony import */


    var _components_models_show_members_show_members_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/models/show-members/show-members.component */
    "./src/app/components/models/show-members/show-members.component.ts");
    /* harmony import */


    var _components_classrom_text_chat_text_chat_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/classrom/text-chat/text-chat.component */
    "./src/app/components/classrom/text-chat/text-chat.component.ts");

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__["FooterComponent"], _components_welcome_page_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_8__["WelcomeComponent"], _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"], _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_10__["RegisterComponent"], _components_teacher_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_13__["MainTeacherComponent"], _components_teacher_new_classrom_new_classrom_component__WEBPACK_IMPORTED_MODULE_14__["NewClassromComponent"], _components_shared_contact_contact_component__WEBPACK_IMPORTED_MODULE_15__["ContactComponent"], _components_shared_profile_profile_component__WEBPACK_IMPORTED_MODULE_16__["ProfileComponent"], _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_21__["ClassromComponent"], _components_classrom_subject_subject_component__WEBPACK_IMPORTED_MODULE_22__["SubjectComponent"], _components_classrom_homework_homework_component__WEBPACK_IMPORTED_MODULE_23__["HomeworkComponent"], _components_shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_24__["SpinnerComponent"], _components_classrom_homework_finished_homework_finished_component__WEBPACK_IMPORTED_MODULE_25__["HomeworkFinishedComponent"], _components_classrom_homework_response_homework_response_component__WEBPACK_IMPORTED_MODULE_26__["HomeworkResponseComponent"], _components_models_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_27__["ShowCodeComponent"], _components_models_homework_response_homework_response_modal_component__WEBPACK_IMPORTED_MODULE_28__["HomeworkResponseModalComponent"], _components_models_marks_list_marks_list_component__WEBPACK_IMPORTED_MODULE_29__["MarksListComponent"], _components_shared_show_homework_file_show_homework_file_component__WEBPACK_IMPORTED_MODULE_30__["ShowHomeworkFileComponent"], _components_shared_show_response_file_show_response_file_component__WEBPACK_IMPORTED_MODULE_31__["ShowResponseFileComponent"], _components_models_show_members_show_members_component__WEBPACK_IMPORTED_MODULE_32__["ShowMembersComponent"], _components_classrom_text_chat_text_chat_component__WEBPACK_IMPORTED_MODULE_33__["TextChatComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_19__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrModule"].forRoot({
        timeOut: 10000,
        positionClass: 'toast-top-right',
        preventDuplicates: true
      }), _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
      providers: [_core_shared_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
        useClass: _core_auth_auth_interceptor__WEBPACK_IMPORTED_MODULE_18__["AuthInterceptor"],
        multi: true
      }, {
        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_17__["HTTP_INTERCEPTORS"],
        useClass: _core_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_20__["HttpErrorInterceptor"],
        multi: true,
        deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_12__["ToastrService"]]
      }]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/classrom/classrom/classrom.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/classrom/classrom/classrom.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromClassromClassromComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  background: #F9C74F;\n  padding: 3px;\n  transition: 0.3s all;\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n}\n\n.mainDiv:hover {\n  box-shadow: 0px 0px 14px 6px #f8961e;\n}\n\n.collapseClass {\n  cursor: pointer;\n}\n\n.classrom {\n  flex: 1 1 auto;\n  position: relative;\n}\n\n.subjectToChoose {\n  font-size: 25px;\n  background: orange;\n  cursor: pointer;\n  -webkit-clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);\n          clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);\n}\n\n.role1 {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2 {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n\n.subjectToChoose:hover {\n  background: orange !important;\n}\n\n.cover {\n  display: flex;\n  flex-flow: column;\n  min-height: 100%;\n  background: #E0FBFC;\n}\n\n.showCode {\n  padding: 5px;\n  margin-top: -20px;\n  cursor: pointer;\n  background: var(--warn);\n  border-radius: var(--rad);\n  transition: all 0.3s;\n}\n\n.showCode:hover {\n  background: #ff8e00;\n}\n\n.subject {\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n  background: #577590;\n  transition: all 0.5s;\n  padding: 40px !important;\n}\n\n.subjectsChoosing {\n  background: #F8961E;\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n  padding: 40px !important;\n}\n\n.example_d {\n  font-size: 25px;\n  font-weight: bold;\n  padding: 0;\n  color: #577590;\n  border: 4px solid #577590;\n}\n\n.example_d:hover {\n  box-shadow: 0px 0px 10px 3px #575457;\n  border-color: #F8961E !important;\n}\n\n.opacity0 {\n  opacity: 0;\n}\n\n.opacity1 {\n  opacity: 1;\n}\n\n.collapseClassInfo {\n  border-top: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9jbGFzc3JvbS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsYXNzcm9tXFxjbGFzc3JvbVxcY2xhc3Nyb20uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vY2xhc3Nyb20vY2xhc3Nyb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUdBLGdEQUFBO0FDQ0Y7O0FEQ0E7RUFHRSxvQ0FBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FDSUY7O0FERkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FDTUY7O0FESkE7RUFDRSxrQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUNPRjs7QURKQTtFQUNFLDZCQUFBO0FDT0Y7O0FETEE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FDUUY7O0FETkE7RUFFRSxZQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDUUY7O0FETkE7RUFDRSxtQkFBQTtBQ1NGOztBRFBBO0VBR0UsZ0RBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esd0JBQUE7QUNVRjs7QURSQTtFQUNFLG1CQUFBO0VBR0EsZ0RBQUE7RUFDQSx3QkFBQTtBQ1dGOztBRFRBO0VBQ0UsZUFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLGNBQUE7RUFDQSx5QkFBQTtBQ1lGOztBRFZBO0VBR0Usb0NBQUE7RUFDQSxnQ0FBQTtBQ2FGOztBRFhBO0VBQ0UsVUFBQTtBQ2NGOztBRFpBO0VBQ0UsVUFBQTtBQ2VGOztBRGJBO0VBQ0UsMkJBQUE7QUNnQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsYXNzcm9tL2NsYXNzcm9tL2NsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6ICNGOUM3NEY7XHJcbiAgcGFkZGluZzogM3B4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxufVxyXG4ubWFpbkRpdjpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMjQ4LDE1MCwzMCwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgyNDgsMTUwLDMwLDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgyNDgsMTUwLDMwLDEpO1xyXG59XHJcbi5jb2xsYXBzZUNsYXNzIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmNsYXNzcm9tIHtcclxuICBmbGV4OiAxIDEgYXV0bztcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnN1YmplY3RUb0Nob29zZSB7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwJSAxMDAlKTtcclxufVxyXG4ucm9sZTEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNzklIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XHJcbn1cclxuLnJvbGUyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDIxJSAxMDAlKTtcclxufVxyXG5cclxuLnN1YmplY3RUb0Nob29zZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogb3JhbmdlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNvdmVyIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZmxvdzogY29sdW1uO1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcclxufVxyXG4uc2hvd0NvZGUge1xyXG5cclxuICBwYWRkaW5nOiA1cHg7XHJcbiAgbWFyZ2luLXRvcDogLTIwcHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnNob3dDb2RlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY4ZTAwO1xyXG59XHJcbi5zdWJqZWN0IHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYmFja2dyb3VuZDogIzU3NzU5MDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC41cztcclxuICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLnN1YmplY3RzQ2hvb3Npbmcge1xyXG4gIGJhY2tncm91bmQ6ICNGODk2MUU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIHBhZGRpbmc6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG4uZXhhbXBsZV9kIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogIzU3NzU5MDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjNTc3NTkwO1xyXG59XHJcbi5leGFtcGxlX2Q6aG92ZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg4Nyw4NCw4NywxKTtcclxuICBib3JkZXItY29sb3I6ICNGODk2MUUgIWltcG9ydGFudDtcclxufVxyXG4ub3BhY2l0eTAge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLm9wYWNpdHkxIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb2xsYXBzZUNsYXNzSW5mbyB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrXHJcbn1cclxuXHJcbiIsIi5tYWluRGl2IHtcbiAgYmFja2dyb3VuZDogI0Y5Qzc0RjtcbiAgcGFkZGluZzogM3B4O1xuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5tYWluRGl2OmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4ICNmODk2MWU7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCAjZjg5NjFlO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4ICNmODk2MWU7XG59XG5cbi5jb2xsYXBzZUNsYXNzIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4uY2xhc3Nyb20ge1xuICBmbGV4OiAxIDEgYXV0bztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uc3ViamVjdFRvQ2hvb3NlIHtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDE1JSAwLCAxMDAlIDAsIDg1JSAxMDAlLCAwJSAxMDAlKTtcbn1cblxuLnJvbGUxIHtcbiAgcGFkZGluZy1yaWdodDogMTBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNzklIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XG59XG5cbi5yb2xlMiB7XG4gIHBhZGRpbmctbGVmdDogMzBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDIxJSAxMDAlKTtcbn1cblxuLnN1YmplY3RUb0Nob29zZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6IG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4uY292ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWZsb3c6IGNvbHVtbjtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcbn1cblxuLnNob3dDb2RlIHtcbiAgcGFkZGluZzogNXB4O1xuICBtYXJnaW4tdG9wOiAtMjBweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaG93Q29kZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhlMDA7XG59XG5cbi5zdWJqZWN0IHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJhY2tncm91bmQ6ICM1Nzc1OTA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjVzO1xuICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XG59XG5cbi5zdWJqZWN0c0Nob29zaW5nIHtcbiAgYmFja2dyb3VuZDogI0Y4OTYxRTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIHBhZGRpbmc6IDQwcHggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGVfZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjNTc3NTkwO1xuICBib3JkZXI6IDRweCBzb2xpZCAjNTc3NTkwO1xufVxuXG4uZXhhbXBsZV9kOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4ICM1NzU0NTc7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCAjNTc1NDU3O1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4ICM1NzU0NTc7XG4gIGJvcmRlci1jb2xvcjogI0Y4OTYxRSAhaW1wb3J0YW50O1xufVxuXG4ub3BhY2l0eTAge1xuICBvcGFjaXR5OiAwO1xufVxuXG4ub3BhY2l0eTEge1xuICBvcGFjaXR5OiAxO1xufVxuXG4uY29sbGFwc2VDbGFzc0luZm8ge1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/classrom/classrom/classrom.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/classrom/classrom/classrom.component.ts ***!
    \********************************************************************/

  /*! exports provided: ClassromComponent */

  /***/
  function srcAppComponentsClassromClassromClassromComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassromComponent", function () {
      return ClassromComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");

    var ClassromComponent = /*#__PURE__*/function () {
      function ClassromComponent(main, route, shared, classService) {
        _classCallCheck(this, ClassromComponent);

        this.main = main;
        this.route = route;
        this.shared = shared;
        this.classService = classService;
      }

      _createClass(ClassromComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this = this;

          this.route.paramMap.subscribe(function (params) {
            _this.main.currentClassrom = _this.main.classrom[+params.get('classID')];
            _this.classrom = _this.main.currentClassrom;
            _this.subjects = _this.classrom.subjects;
            _this.main.isEducator = _this.main.user.id === _this.classrom.creatorID;

            _this.setCurrentSubject(0);
          });
        }
      }, {
        key: "checkUserRole",
        value: function checkUserRole() {
          if (this.main.currentSubject) {
            if (this.main.user.id === this.main.currentSubject.teacherID) {
              this.main.currentRole = 1;
            } else if (this.main.user.userRole === 0) {
              this.main.currentRole = 0;
            } else if (this.main.user.userRole === 1) {
              this.main.currentRole = 2;
            }
          }
        }
      }, {
        key: "showMembers",
        value: function showMembers() {
          var _this2 = this;

          this.classService.showClassromMembers({
            classID: this.main.currentClassrom.id
          }).subscribe(function (res) {
            _this2.shared.openMembersModal(res);
          });
        }
      }, {
        key: "setCurrentSubject",
        value: function setCurrentSubject(i) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var timeout;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    if (!this.subjectDiv) {
                      _context.next = 9;
                      break;
                    }

                    timeout = function timeout(ms) {
                      return new Promise(function (resolve) {
                        return setTimeout(resolve, ms);
                      });
                    };

                    this.subjectDiv.nativeElement.classList.toggle('opacity0');
                    _context.next = 5;
                    return timeout(200);

                  case 5:
                    this.main.currentSubject = this.main.currentClassrom.subjects[i];
                    this.subjectDiv.nativeElement.classList.toggle('opacity0');
                    _context.next = 10;
                    break;

                  case 9:
                    this.main.currentSubject = this.main.currentClassrom.subjects[i];

                  case 10:
                    this.checkUserRole();

                  case 11:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "setCurrentSubjectNotAsync",
        value: function setCurrentSubjectNotAsync(i) {
          this.main.currentSubject = this.main.currentClassrom.subjects[i];
          this.checkUserRole();
        }
      }, {
        key: "showCode",
        value: function showCode(e, id) {
          e.stopPropagation();
          e.preventDefault();
          this.shared.openCodeModal(id);
        }
      }]);

      return ClassromComponent;
    }();

    ClassromComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('subject')], ClassromComponent.prototype, "subjectDiv", void 0);
    ClassromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-classrom',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./classrom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/classrom/classrom.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./classrom.component.scss */
      "./src/app/components/classrom/classrom/classrom.component.scss"))["default"]]
    })], ClassromComponent);
    /***/
  },

  /***/
  "./src/app/components/classrom/homework-finished/homework-finished.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/classrom/homework-finished/homework-finished.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromHomeworkFinishedHomeworkFinishedComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".singeHomeworkDesc {\n  background: #43AA8B;\n  border-radius: var(--rad);\n  padding: 10px;\n  transition: 0.3s all;\n  border: 2px solid inherit;\n}\n\n.singeHomeworkDesc:hover {\n  box-shadow: 0px 0px 10px 3px black;\n}\n\n.singeHomeworkDescFocused {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.homeworkDesc {\n  border: 2px solid black;\n  border-bottom-right-radius: var(--rad);\n  border-bottom-left-radius: var(--rad);\n  background: #90BE6D;\n}\n\n.markMarked {\n  color: #AA4362;\n  background: inherit;\n  font-size: 28px;\n}\n\n.markNoMarked {\n  background: inherit;\n  font-size: 28px;\n}\n\n.list-group {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.list-group-item {\n  transition: 0.5s all ease;\n}\n\n.list-group-item:hover {\n  background: #F9C74F;\n  cursor: pointer;\n}\n\n.green {\n  color: var(--green);\n}\n\n.red {\n  color: var(--warn);\n}\n\n.example_d {\n  font-size: 25px;\n  font-weight: bold;\n  padding: 0;\n  color: #F8961E;\n}\n\n.description {\n  border-bottom: 2px solid black;\n}\n\n.fa-trash {\n  cursor: pointer;\n  padding: 15px;\n  text-align: center;\n  color: #151515;\n  background: var(--warn);\n  border-radius: var(--rad);\n  font-size: 45px;\n  transition: all 0.3s;\n}\n\n.fa-trash:hover {\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);\n  background: #f16127;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9ob21ld29yay1maW5pc2hlZC9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsYXNzcm9tXFxob21ld29yay1maW5pc2hlZFxcaG9tZXdvcmstZmluaXNoZWQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vaG9tZXdvcmstZmluaXNoZWQvaG9tZXdvcmstZmluaXNoZWQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUdFLGtDQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UsY0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDTUY7O0FESkE7RUFDRSxpQkFBQTtFQUNBLGtCQUFBO0FDT0Y7O0FETEE7RUFDRSx5QkFBQTtBQ1FGOztBRE5BO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtBQ1VGOztBRFJBO0VBQ0csa0JBQUE7QUNXSDs7QURUQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0FDWUY7O0FEVkE7RUFDRSw4QkFBQTtBQ2FGOztBRFhBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FDY0Y7O0FEWkE7RUFHRSxnREFBQTtFQUNBLG1CQUFBO0FDZUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NsYXNzcm9tL2hvbWV3b3JrLWZpbmlzaGVkL2hvbWV3b3JrLWZpbmlzaGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdlSG9tZXdvcmtEZXNjIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBpbmhlcml0O1xyXG59XHJcbi5zaW5nZUhvbWV3b3JrRGVzYzpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcbi5zaW5nZUhvbWV3b3JrRGVzY0ZvY3VzZWQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmhvbWV3b3JrRGVzYyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xyXG59XHJcbi5tYXJrTWFya2VkIHtcclxuICBjb2xvcjogI0FBNDM2MjtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ubWFya05vTWFya2VkIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0Y5Qzc0RjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmdyZWVuIHtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4pXHJcbn1cclxuLnJlZCB7XHJcbiAgIGNvbG9yOiB2YXIoLS13YXJuKVxyXG59XHJcbi5leGFtcGxlX2Qge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjg5NjFFO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5mYS10cmFzaCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjEsIDIxLCAyMSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgO1xyXG59XHJcbi5mYS10cmFzaDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJhY2tncm91bmQ6ICNmMTYxMjc7XHJcbn1cclxuIiwiLnNpbmdlSG9tZXdvcmtEZXNjIHtcbiAgYmFja2dyb3VuZDogIzQzQUE4QjtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMTBweDtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGw7XG4gIGJvcmRlcjogMnB4IHNvbGlkIGluaGVyaXQ7XG59XG5cbi5zaW5nZUhvbWV3b3JrRGVzYzpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBibGFjaztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IGJsYWNrO1xufVxuXG4uc2luZ2VIb21ld29ya0Rlc2NGb2N1c2VkIHtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XG59XG5cbi5ob21ld29ya0Rlc2Mge1xuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIGJhY2tncm91bmQ6ICM5MEJFNkQ7XG59XG5cbi5tYXJrTWFya2VkIHtcbiAgY29sb3I6ICNBQTQzNjI7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLm1hcmtOb01hcmtlZCB7XG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogMjhweDtcbn1cblxuLmxpc3QtZ3JvdXAge1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xufVxuXG4ubGlzdC1ncm91cC1pdGVtIHtcbiAgdHJhbnNpdGlvbjogMC41cyBhbGwgZWFzZTtcbn1cblxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNGOUM3NEY7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLmdyZWVuIHtcbiAgY29sb3I6IHZhcigtLWdyZWVuKTtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiB2YXIoLS13YXJuKTtcbn1cblxuLmV4YW1wbGVfZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRjg5NjFFO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5mYS10cmFzaCB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgcGFkZGluZzogMTVweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBjb2xvcjogIzE1MTUxNTtcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIGZvbnQtc2l6ZTogNDVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5mYS10cmFzaDpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBiYWNrZ3JvdW5kOiAjZjE2MTI3O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/classrom/homework-finished/homework-finished.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/classrom/homework-finished/homework-finished.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: HomeworkFinishedComponent */

  /***/
  function srcAppComponentsClassromHomeworkFinishedHomeworkFinishedComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkFinishedComponent", function () {
      return HomeworkFinishedComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");

    var HomeworkFinishedComponent = /*#__PURE__*/function () {
      function HomeworkFinishedComponent(main, classService, shared) {
        _classCallCheck(this, HomeworkFinishedComponent);

        this.main = main;
        this.classService = classService;
        this.shared = shared;
        this.clickedStatus = false;
        this.text = '';
      }

      _createClass(HomeworkFinishedComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this3 = this;

          this.shared.openHomework.subscribe(function (res) {
            if (res.mark) {
              for (var i = 0; i < _this3.allResponses.length; i++) {
                if (_this3.allResponses[i].id === res.id) {
                  _this3.allResponses[i].mark = res.mark;

                  _this3.filter();

                  break;
                }
              }
            }
          });
        }
      }, {
        key: "filter",
        value: function filter() {
          var _this4 = this;

          this.homework.responses = this.allResponses.filter(function (v) {
            return v.senderName.toLocaleLowerCase().includes(_this4.text.toLocaleLowerCase()) || v.senderSurname.toLocaleLowerCase().includes(_this4.text.toLocaleLowerCase());
          });
        }
      }, {
        key: "addFocusClass",
        value: function addFocusClass() {
          var _this5 = this;

          if (this.clickedStatus) {
            setTimeout(function () {
              return _this5.clickedStatus = !_this5.clickedStatus;
            }, 400);
          } else {
            this.clickedStatus = !this.clickedStatus;
          }
        }
      }, {
        key: "showGrades",
        value: function showGrades() {
          this.shared.openMarksListModal(this.allResponses);
        }
      }, {
        key: "deleteHomework",
        value: function deleteHomework() {
          var bodyToSend = {
            classID: this.main.currentClassrom.id,
            homeworkID: this.homework.id,
            subjectID: this.main.currentSubject.id
          };
          this.classService.deleteHomework(bodyToSend);
        }
      }, {
        key: "openHomeworkModal",
        value: function openHomeworkModal(response) {
          response.homeworkID = this.homework.id;
          response.singleHomework = true;
          this.shared.openHomeworkModal(response);
        }
      }, {
        key: "homeworkSet",
        set: function set(hom) {
          this.homework = hom;
          this.startTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
          this.endTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.homework.endDate).format('YYYY-MM-DD HH:mm:ss');
          this.sendTime = moment__WEBPACK_IMPORTED_MODULE_2__(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
          this.allResponses = this.homework.responses;
        }
      }, {
        key: "iteratorSet",
        set: function set(iter) {
          this.iterator = iter;
        }
      }]);

      return HomeworkFinishedComponent;
    }();

    HomeworkFinishedComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeworkFinishedComponent.prototype, "homeworkSet", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeworkFinishedComponent.prototype, "iteratorSet", null);
    HomeworkFinishedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homework-finished',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homework-finished.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-finished/homework-finished.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homework-finished.component.scss */
      "./src/app/components/classrom/homework-finished/homework-finished.component.scss"))["default"]]
    })], HomeworkFinishedComponent);
    /***/
  },

  /***/
  "./src/app/components/classrom/homework-response/homework-response.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/classrom/homework-response/homework-response.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromHomeworkResponseHomeworkResponseComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".infoSpan {\n  display: block;\n  float: left;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9ob21ld29yay1yZXNwb25zZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsYXNzcm9tXFxob21ld29yay1yZXNwb25zZVxcaG9tZXdvcmstcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vaG9tZXdvcmstcmVzcG9uc2UvaG9tZXdvcmstcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxjQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vaG9tZXdvcmstcmVzcG9uc2UvaG9tZXdvcmstcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb1NwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbiIsIi5pbmZvU3BhbiB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBmbG9hdDogbGVmdDtcbiAgY2xlYXI6IGJvdGg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/classrom/homework-response/homework-response.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/classrom/homework-response/homework-response.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: HomeworkResponseComponent */

  /***/
  function srcAppComponentsClassromHomeworkResponseHomeworkResponseComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkResponseComponent", function () {
      return HomeworkResponseComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var HomeworkResponseComponent = /*#__PURE__*/function () {
      function HomeworkResponseComponent() {
        _classCallCheck(this, HomeworkResponseComponent);
      }

      _createClass(HomeworkResponseComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "responseSet",
        set: function set(response) {
          this.response = response;
        }
      }]);

      return HomeworkResponseComponent;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeworkResponseComponent.prototype, "responseSet", null);
    HomeworkResponseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homework-response',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homework-response.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework-response/homework-response.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homework-response.component.scss */
      "./src/app/components/classrom/homework-response/homework-response.component.scss"))["default"]]
    })], HomeworkResponseComponent);
    /***/
  },

  /***/
  "./src/app/components/classrom/homework/homework.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/classrom/homework/homework.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromHomeworkHomeworkComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".singeHomeworkDesc {\n  background: #43AA8B;\n  border-radius: var(--rad);\n  padding: 10px;\n  transition: 0.3s all;\n  border: 2px solid inherit;\n}\n\n.singeHomeworkDesc:hover {\n  box-shadow: 0px 0px 10px 3px black;\n}\n\n.singeHomeworkDescFocused {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.homeworkDesc {\n  border: 2px solid black;\n  border-bottom-right-radius: var(--rad);\n  border-bottom-left-radius: var(--rad);\n  background: #90BE6D;\n}\n\n.iframeWrapper {\n  display: inline-block;\n  position: relative;\n}\n\n.iframeWrapper iframe {\n  vertical-align: top;\n  pointer-events: none;\n  /* let any clicks go trough me */\n}\n\n.files {\n  padding: 20px 0;\n  border-top: 2px solid black;\n}\n\n.openInBrowserBtn {\n  border-bottom-right-radius: 0;\n  color: grey;\n  border-bottom-left-radius: 0;\n}\n\n.progress {\n  height: 35px;\n  font-size: 20px;\n}\n\n.green {\n  background: green;\n}\n\n.description {\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9ob21ld29yay9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNsYXNzcm9tXFxob21ld29ya1xcaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsYUFBQTtFQUNBLG9CQUFBO0VBQ0EseUJBQUE7QUNDRjs7QURDQTtFQUdFLGtDQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtFQUNBLDRCQUFBO0FDR0Y7O0FEREE7RUFDRSx1QkFBQTtFQUNBLHNDQUFBO0VBQ0EscUNBQUE7RUFDQSxtQkFBQTtBQ0lGOztBREZBO0VBQ0UscUJBQUE7RUFDQSxrQkFBQTtBQ0tGOztBREhBO0VBQ0UsbUJBQUE7RUFDQSxvQkFBQTtFQUFzQixnQ0FBQTtBQ094Qjs7QURMQTtFQUNFLGVBQUE7RUFDQSwyQkFBQTtBQ1FGOztBRExBO0VBQ0UsNkJBQUE7RUFDQSxXQUFBO0VBQ0EsNEJBQUE7QUNRRjs7QUROQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxpQkFBQTtBQ1VGOztBRFJBO0VBQ0UsOEJBQUE7QUNXRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vaG9tZXdvcmsvaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2VIb21ld29ya0Rlc2Mge1xyXG4gIGJhY2tncm91bmQ6ICM0M0FBOEI7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGluaGVyaXQ7XHJcbn1cclxuLnNpbmdlSG9tZXdvcmtEZXNjOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSgwLDAsMCwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSgwLDAsMCwxKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuLnNpbmdlSG9tZXdvcmtEZXNjRm9jdXNlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uaG9tZXdvcmtEZXNjIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIGJhY2tncm91bmQ6ICM5MEJFNkQ7XHJcbn1cclxuLmlmcmFtZVdyYXBwZXJ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmlmcmFtZVdyYXBwZXIgaWZyYW1le1xyXG4gIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogbGV0IGFueSBjbGlja3MgZ28gdHJvdWdoIG1lICovXHJcbn1cclxuLmZpbGVzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ub3BlbkluQnJvd3NlckJ0biB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6MjBweDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiIsIi5zaW5nZUhvbWV3b3JrRGVzYyB7XG4gIGJhY2tncm91bmQ6ICM0M0FBOEI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xuICBib3JkZXI6IDJweCBzb2xpZCBpbmhlcml0O1xufVxuXG4uc2luZ2VIb21ld29ya0Rlc2M6aG92ZXIge1xuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggYmxhY2s7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCBibGFjaztcbn1cblxuLnNpbmdlSG9tZXdvcmtEZXNjRm9jdXNlZCB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAwO1xufVxuXG4uaG9tZXdvcmtEZXNjIHtcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xufVxuXG4uaWZyYW1lV3JhcHBlciB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuXG4uaWZyYW1lV3JhcHBlciBpZnJhbWUge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbiAgLyogbGV0IGFueSBjbGlja3MgZ28gdHJvdWdoIG1lICovXG59XG5cbi5maWxlcyB7XG4gIHBhZGRpbmc6IDIwcHggMDtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ub3BlbkluQnJvd3NlckJ0biB7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xuICBjb2xvcjogZ3JleTtcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcbn1cblxuLnByb2dyZXNzIHtcbiAgaGVpZ2h0OiAzNXB4O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5ncmVlbiB7XG4gIGJhY2tncm91bmQ6IGdyZWVuO1xufVxuXG4uZGVzY3JpcHRpb24ge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/classrom/homework/homework.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/classrom/homework/homework.component.ts ***!
    \********************************************************************/

  /*! exports provided: HomeworkComponent */

  /***/
  function srcAppComponentsClassromHomeworkHomeworkComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkComponent", function () {
      return HomeworkComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");

    var HomeworkComponent = /*#__PURE__*/function () {
      function HomeworkComponent(main, classService, sanitizer, toastr, shared) {
        _classCallCheck(this, HomeworkComponent);

        this.main = main;
        this.classService = classService;
        this.sanitizer = sanitizer;
        this.toastr = toastr;
        this.shared = shared;
        this.clickedStatus = false;
        this.files = [];
        this.filesID = [];
        this.linksIterator = [];
        this.linkHrefs = [];
        this.homeworkResponseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](''),
          classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.main.currentClassrom.id)
        });
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('')
        });
      }

      _createClass(HomeworkComponent, [{
        key: "addFocusClass",
        value: function addFocusClass() {
          var _this6 = this;

          if (this.clickedStatus) {
            setTimeout(function () {
              return _this6.clickedStatus = !_this6.clickedStatus;
            }, 400);
          } else {
            this.clickedStatus = !this.clickedStatus;
          }
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.uploadFile();
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          var _this7 = this;

          var formData = new FormData();
          var file = this.uploadForm.get('profile').value;
          this.files.push(file);
          formData.append('file', file);
          file.inProgress = true;
          this.classService.addNewFileToResponse(this.main.currentClassrom.id, this.homework.id, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_8__["map"])(function (event) {
            var index = _this7.files.findIndex(function (v) {
              return v.name === file.name;
            });

            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].UploadProgress:
                _this7.files[index].progress = Math.round(event.loaded * 100 / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_9__["HttpEventType"].Response:
                _this7.files[index].finished = true;

                _this7.filesID.push(event.body.fileID);

                break;
            }
          })).subscribe();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addLink",
        value: function addLink() {
          this.linksIterator.push(this.linksIterator.length);
        }
      }, {
        key: "addNewResponse",
        value: function addNewResponse() {
          var _this8 = this;

          this.homeworkResponseForm.addControl('homeworkID', new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"](this.homework.id));
          var body = this.homeworkResponseForm.value;
          body.filesID = this.filesID;
          body.linkHrefs = this.linkHrefs;

          if (this.homeworkResponseForm.valid) {
            this.classService.addNewResponse(body).subscribe(function (res) {
              _this8.shared.switchHomeworkEmit(res.responseObj.homeworkID);

              _this8.linksIterator = [];
              _this8.linkHrefs = [];
              _this8.files = [];
              _this8.filesID = [];

              _this8.main.currentSubject.homeworks.filter(function (v) {
                return v.id === res.responseObj.homeworkID;
              }).map(function (v) {
                return v.responses.push(res.responseObj);
              });

              _this8.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
            });
          }
        }
      }, {
        key: "homeworkSet",
        set: function set(hom) {
          this.homework = hom;
          var endDate = moment__WEBPACK_IMPORTED_MODULE_3__(this.homework.endDate);
          var currentTime = moment__WEBPACK_IMPORTED_MODULE_3__();
          var timeLeft = endDate.diff(currentTime, 'minutes');
          this.leftHours = Math.floor(timeLeft / 60);
          this.leftMinutes = Math.floor(timeLeft - this.leftHours * 60);
          this.startTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
          this.endTime = moment__WEBPACK_IMPORTED_MODULE_3__(this.homework.endDate).format('YYYY-MM-DD HH:mm:ss');
        }
      }, {
        key: "iteratorSet",
        set: function set(iter) {
          this.iterator = iter;
        }
      }]);

      return HomeworkComponent;
    }();

    HomeworkComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_7__["ToastrService"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeworkComponent.prototype, "homeworkSet", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], HomeworkComponent.prototype, "iteratorSet", null);
    HomeworkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homework',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homework.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/homework/homework.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homework.component.scss */
      "./src/app/components/classrom/homework/homework.component.scss"))["default"]]
    })], HomeworkComponent);
    /***/
  },

  /***/
  "./src/app/components/classrom/subject/subject.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/classrom/subject/subject.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromSubjectSubjectComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".addNewHomeworkForm {\n  background: #43AA8B;\n  border-radius: var(--rad);\n}\n\n.button_cont {\n  background: red;\n}\n\n.subHeader {\n  font-size: 75px;\n}\n\n.subHomeworks {\n  font-size: 35px;\n  padding: 7px;\n}\n\n.subButtons {\n  padding: 10px;\n  border-bottom: 3px solid black;\n  margin-bottom: 15px !important;\n}\n\n.homeworksDiv {\n  padding: 10px;\n  background: #F9C74F;\n  border-radius: var(--rad);\n}\n\n.subBtn {\n  font-size: 20px !important;\n  text-align: center !important;\n}\n\n.pickerDiv {\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.headerDiv {\n  padding: 15px 0;\n}\n\n#picker {\n  text-align: center;\n  width: 100%;\n}\n\n.pickerDiv:hover > #picker {\n  color: var(--warn);\n}\n\n.example_d {\n  font-size: 25px;\n  font-weight: bold;\n  padding: 0;\n  color: #F8961E;\n  border: 4px solid #F8961E;\n}\n\n.example_d:hover {\n  border-color: #577590 !important;\n  box-shadow: 0px 0px 10px 3px #575457;\n}\n\n.progress {\n  height: 35px;\n  font-size: 20px;\n}\n\n.green {\n  background: green;\n}\n\n.fullWidth {\n  width: 100vh;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n.example_f {\n  border-radius: 40px;\n  font-weight: bold;\n}\n\n.goBackDiv {\n  position: fixed;\n  top: 64px;\n  width: 100%;\n  z-index: 5;\n  background: #90BE6D;\n  padding: 10px;\n  text-align: center;\n  font-size: 25px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n.goBackDiv:hover {\n  background: #739754;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9zdWJqZWN0L0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcY2xhc3Nyb21cXHN1YmplY3RcXHN1YmplY3QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vc3ViamVjdC9zdWJqZWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtBQ0NGOztBRENBO0VBQ0UsZUFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLFlBQUE7QUNJRjs7QURGQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLDhCQUFBO0FDS0Y7O0FESEE7RUFDRSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSx5QkFBQTtBQ01GOztBREpBO0VBQ0UsMEJBQUE7RUFDQSw2QkFBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FDUUY7O0FETkE7RUFDRSxlQUFBO0FDU0Y7O0FEUEE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUNVRjs7QURSQTtFQUNDLGtCQUFBO0FDV0Q7O0FEUkE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FDV0Y7O0FEVEE7RUFDRSxnQ0FBQTtFQUdBLG9DQUFBO0FDWUY7O0FEVEE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQ1lGOztBRFZBO0VBQ0UsaUJBQUE7QUNhRjs7QURYQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUNjRjs7QURYQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUNjRjs7QURaQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNlRjs7QURiQTtFQUNFLG1CQUFBO0FDZ0JGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS9zdWJqZWN0L3N1YmplY3QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuYWRkTmV3SG9tZXdvcmtGb3JtIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbn1cclxuLmJ1dHRvbl9jb250IHtcclxuICBiYWNrZ3JvdW5kOiByZWQ7XHJcbn1cclxuLnN1YkhlYWRlciB7XHJcbiAgZm9udC1zaXplOiA3NXB4O1xyXG59XHJcbi5zdWJIb21ld29ya3Mge1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBwYWRkaW5nOiA3cHg7XHJcbn1cclxuLnN1YkJ1dHRvbnMge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogM3B4IHNvbGlkIGJsYWNrO1xyXG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcclxufVxyXG4uaG9tZXdvcmtzRGl2IHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6ICNGOUM3NEY7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxufVxyXG4uc3ViQnRuIHtcclxuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG4ucGlja2VyRGl2IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGVhZGVyRGl2IHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuI3BpY2tlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5waWNrZXJEaXY6aG92ZXIgPiAjcGlja2VyIHtcclxuIGNvbG9yOiB2YXIoLS13YXJuKVxyXG5cclxufVxyXG4uZXhhbXBsZV9kIHtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgcGFkZGluZzogMDtcclxuICBjb2xvcjogI0Y4OTYxRTtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjRjg5NjFFO1xyXG59XHJcbi5leGFtcGxlX2Q6aG92ZXIge1xyXG4gIGJvcmRlci1jb2xvcjogIzU3NzU5MCAhaW1wb3J0YW50O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg4Nyw4NCw4NywxKTtcclxufVxyXG5cclxuLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG4uZnVsbFdpZHRoIHtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcblxyXG59XHJcbi5leGFtcGxlX2Yge1xyXG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuLmdvQmFja0RpdiB7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHRvcDogNjRweDtcclxuICB3aWR0aDogMTAwJTtcclxuICB6LWluZGV4OiA1O1xyXG4gIGJhY2tncm91bmQ6ICM5MEJFNkQ7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcclxufVxyXG4uZ29CYWNrRGl2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjNzM5NzU0O1xyXG59XHJcbiIsIi5hZGROZXdIb21ld29ya0Zvcm0ge1xuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xufVxuXG4uYnV0dG9uX2NvbnQge1xuICBiYWNrZ3JvdW5kOiByZWQ7XG59XG5cbi5zdWJIZWFkZXIge1xuICBmb250LXNpemU6IDc1cHg7XG59XG5cbi5zdWJIb21ld29ya3Mge1xuICBmb250LXNpemU6IDM1cHg7XG4gIHBhZGRpbmc6IDdweDtcbn1cblxuLnN1YkJ1dHRvbnMge1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XG4gIG1hcmdpbi1ib3R0b206IDE1cHggIWltcG9ydGFudDtcbn1cblxuLmhvbWV3b3Jrc0RpdiB7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJhY2tncm91bmQ6ICNGOUM3NEY7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG59XG5cbi5zdWJCdG4ge1xuICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcbiAgdGV4dC1hbGlnbjogY2VudGVyICFpbXBvcnRhbnQ7XG59XG5cbi5waWNrZXJEaXYge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5oZWFkZXJEaXYge1xuICBwYWRkaW5nOiAxNXB4IDA7XG59XG5cbiNwaWNrZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4ucGlja2VyRGl2OmhvdmVyID4gI3BpY2tlciB7XG4gIGNvbG9yOiB2YXIoLS13YXJuKTtcbn1cblxuLmV4YW1wbGVfZCB7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIHBhZGRpbmc6IDA7XG4gIGNvbG9yOiAjRjg5NjFFO1xuICBib3JkZXI6IDRweCBzb2xpZCAjRjg5NjFFO1xufVxuXG4uZXhhbXBsZV9kOmhvdmVyIHtcbiAgYm9yZGVyLWNvbG9yOiAjNTc3NTkwICFpbXBvcnRhbnQ7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCAjNTc1NDU3O1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggIzU3NTQ1NztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCAjNTc1NDU3O1xufVxuXG4ucHJvZ3Jlc3Mge1xuICBoZWlnaHQ6IDM1cHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLmdyZWVuIHtcbiAgYmFja2dyb3VuZDogZ3JlZW47XG59XG5cbi5mdWxsV2lkdGgge1xuICB3aWR0aDogMTAwdmg7XG4gIGhlaWdodDogMTAwdmg7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbn1cblxuLmV4YW1wbGVfZiB7XG4gIGJvcmRlci1yYWRpdXM6IDQwcHg7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xufVxuXG4uZ29CYWNrRGl2IHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDY0cHg7XG4gIHdpZHRoOiAxMDAlO1xuICB6LWluZGV4OiA1O1xuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMjVweDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICB0cmFuc2l0aW9uOiBhbGwgMC40cztcbn1cblxuLmdvQmFja0Rpdjpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICM3Mzk3NTQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/classrom/subject/subject.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/classrom/subject/subject.component.ts ***!
    \******************************************************************/

  /*! exports provided: SubjectComponent */

  /***/
  function srcAppComponentsClassromSubjectSubjectComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubjectComponent", function () {
      return SubjectComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");

    var SubjectComponent = /*#__PURE__*/function () {
      function SubjectComponent(main, classService, toastr, router, location, shared) {
        _classCallCheck(this, SubjectComponent);

        this.main = main;
        this.classService = classService;
        this.toastr = toastr;
        this.router = router;
        this.location = location;
        this.shared = shared;
        this.currentHomeworks = [];
        this.finishedHomeworks = [];
        this.whichHomeworks = 1;
        this.showChat = false;
        this.files = [];
        this.filesID = [];
        this.linkHrefs = [];
        this.submitted = false;
        this.linksIterator = [];
        this.homeworkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required),
          description: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](''),
          time: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
        this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('')
        });
      }

      _createClass(SubjectComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this9 = this;

          (function ($) {
            $(document).ready(function () {
              $('#picker').dateTimePicker();
            });
          })(jQuery);

          if (!this.main.currentClassrom) {
            this.router.navigateByUrl('classrom/0');
          }

          this.currentTime = moment__WEBPACK_IMPORTED_MODULE_6__().toISOString();
          this.sortHomeworks(this.currentTime);
          this.shared.switchHomework.subscribe(function (res) {
            var index = _this9.currentHomeworks.findIndex(function (v) {
              return v.id === res;
            });

            if (index > -1) {
              _this9.currentHomeworks.splice(index, 1);

              _this9.finishedHomeworks.push(_this9.currentHomeworks[index]);
            }
          });
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.location.back();
        }
      }, {
        key: "addLink",
        value: function addLink() {
          this.linksIterator.push(this.linksIterator.length);
        }
      }, {
        key: "sortHomeworks",
        value: function sortHomeworks(currentTime) {
          this.currentHomeworks = [];
          this.finishedHomeworks = [];

          for (var i = 0; i < this.main.currentSubject.homeworks.length; i++) {
            var currHom = this.main.currentSubject.homeworks[i];

            if (this.main.currentRole === 0) {
              // returning homeworks for student
              if (currHom.endDate > currentTime && !currHom.responses[0]) {
                this.currentHomeworks.push(currHom);
              } else {
                this.finishedHomeworks.push(currHom);
              }
            } else {
              if (currHom.endDate > currentTime) {
                this.currentHomeworks.push(currHom);
              } else {
                this.finishedHomeworks.push(currHom);
              }
            }
          }
        }
      }, {
        key: "onFileSelect",
        value: function onFileSelect(event) {
          if (event.target.files.length > 0) {
            var file = event.target.files[0];
            this.uploadForm.get('profile').setValue(file);
            this.uploadFile();
          }
        }
      }, {
        key: "uploadFile",
        value: function uploadFile() {
          var _this10 = this;

          var formData = new FormData();
          var file = this.uploadForm.get('profile').value;
          this.files.push(file);
          formData.append('file', file);
          file.inProgress = true;
          this.classService.addNewFileToHomework(this.main.currentClassrom.id, this.main.currentSubject.id, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["map"])(function (event) {
            var index = _this10.files.findIndex(function (v) {
              return v.name === file.name;
            });

            switch (event.type) {
              case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].UploadProgress:
                _this10.files[index].progress = Math.round(event.loaded * 100 / event.total);
                break;

              case _angular_common_http__WEBPACK_IMPORTED_MODULE_8__["HttpEventType"].Response:
                _this10.files[index].finished = true;

                _this10.filesID.push(event.body.fileID);

                break;
            }
          })).subscribe(function (res) {});
        }
      }, {
        key: "addNewHomework",
        value: function addNewHomework() {
          var _this11 = this;

          this.submitted = true;
          var timeUtc = moment__WEBPACK_IMPORTED_MODULE_6__(this.timeValue.nativeElement.value).toISOString();
          this.homeworkForm.patchValue({
            time: timeUtc
          });
          var bodyToSend = this.homeworkForm.value;
          bodyToSend.filesID = this.filesID;
          bodyToSend.linkHrefs = this.linkHrefs;
          bodyToSend.subjectID = this.main.currentSubject.id;
          bodyToSend.classID = this.main.currentClassrom.id;

          if (this.homeworkForm.valid) {
            this.classService.addNewHomework(bodyToSend).subscribe(function (res) {
              _this11.submitted = false;

              _this11.homeworkForm.reset();

              _this11.files = [];
              _this11.linksIterator = [];
              _this11.linkHrefs = [];
              _this11.filesID = [];

              _this11.currentHomeworks.push(res);

              _this11.main.currentSubject.homeworks.push(res);

              _this11.toastr.success('Pomyślnie dodano nowe zadanie.', 'Udało się!');
            });
          }
        }
      }, {
        key: "currentSubSet",
        set: function set(sub) {
          this.showChat = false;
          this.sortHomeworks(this.currentTime);
        }
      }]);

      return SubjectComponent;
    }();

    SubjectComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_4__["ClassService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_9__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_10__["Router"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_11__["SharedService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], SubjectComponent.prototype, "currentSubSet", null);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('timeValue')], SubjectComponent.prototype, "timeValue", void 0);
    SubjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-subject',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./subject.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/subject/subject.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./subject.component.scss */
      "./src/app/components/classrom/subject/subject.component.scss"))["default"]]
    })], SubjectComponent);
    /***/
  },

  /***/
  "./src/app/components/classrom/text-chat/text-chat.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/classrom/text-chat/text-chat.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsClassromTextChatTextChatComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".formBtn {\n  height: 48px;\n  font-size: 25px;\n  padding: 5px;\n}\n\n.mainChatDiv {\n  border-radius: var(--rad);\n  background: grey;\n}\n\n.chat {\n  display: flex;\n  flex-direction: column-reverse;\n  max-height: 400px;\n  overflow-y: scroll;\n  border-radius: 15px;\n  padding: 10px;\n  background: #cecece;\n}\n\n.name {\n  font-weight: bold;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\n.singleMessage {\n  margin: 10px 0 10px 0;\n}\n\n.load {\n  border-radius: 15px;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 15px;\n  padding: 5px;\n  background: #90BE6D;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jbGFzc3JvbS90ZXh0LWNoYXQvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxjbGFzc3JvbVxcdGV4dC1jaGF0XFx0ZXh0LWNoYXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vdGV4dC1jaGF0L3RleHQtY2hhdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtBQ0NGOztBRENBO0VBQ0UseUJBQUE7RUFDQSxnQkFBQTtBQ0VGOztBREFBO0VBRUUsYUFBQTtFQUNBLDhCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxpQkFBQTtFQUNBLGVBQUE7RUFDQSxpQkFBQTtBQ0dGOztBRERBO0VBQ0UscUJBQUE7QUNJRjs7QURGQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvY2xhc3Nyb20vdGV4dC1jaGF0L3RleHQtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtQnRuIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWFpbkNoYXREaXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG4uY2hhdCB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5zaW5nbGVNZXNzYWdlIHtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbn1cclxuLmxvYWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG4iLCIuZm9ybUJ0biB7XG4gIGhlaWdodDogNDhweDtcbiAgZm9udC1zaXplOiAyNXB4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5tYWluQ2hhdERpdiB7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIGJhY2tncm91bmQ6IGdyZXk7XG59XG5cbi5jaGF0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBiYWNrZ3JvdW5kOiAjY2VjZWNlO1xufVxuXG4ubmFtZSB7XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBmb250LXNpemU6IDE3cHg7XG4gIG1hcmdpbi1yaWdodDogN3B4O1xufVxuXG4uc2luZ2xlTWVzc2FnZSB7XG4gIG1hcmdpbjogMTBweCAwIDEwcHggMDtcbn1cblxuLmxvYWQge1xuICBib3JkZXItcmFkaXVzOiAxNXB4O1xuICBmb250LXNpemU6IDI1cHg7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTVweDtcbiAgcGFkZGluZzogNXB4O1xuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/classrom/text-chat/text-chat.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/classrom/text-chat/text-chat.component.ts ***!
    \**********************************************************************/

  /*! exports provided: TextChatComponent */

  /***/
  function srcAppComponentsClassromTextChatTextChatComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextChatComponent", function () {
      return TextChatComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_chat_service_text_chat_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/chat-service/text-chat.service */
    "./src/app/core/chat-service/text-chat.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");

    var TextChatComponent = /*#__PURE__*/function () {
      function TextChatComponent(tcService, main) {
        _classCallCheck(this, TextChatComponent);

        this.tcService = tcService;
        this.main = main;
        this.loadingMessages = true;
        this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormGroup"]({
          message: new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required)
        });
      }

      _createClass(TextChatComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this12 = this;

          this.getLastMessages();
          this.timer = setInterval(function () {
            _this12.getNewerMessages();
          }, 5000);
        }
      }, {
        key: "sendMessage",
        value: function sendMessage() {
          var _this13 = this;

          this.messageForm.setControl('subjectID', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.main.currentSubject.id));
          this.messageForm.setControl('classID', new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"](this.main.currentClassrom.id));

          if (this.messageForm.valid) {
            this.tcService.sendMessage(this.messageForm.value).subscribe(function (res) {
              _this13.messages.unshift(res);
            });
          }
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          clearInterval(this.timer);
        }
      }, {
        key: "getNewerMessages",
        value: function getNewerMessages() {
          var _this14 = this;

          this.tcService.getNewerMessages(this.messages[0].messageID).subscribe(function (res) {
            if (res) {
              var _iterator = _createForOfIteratorHelper(res.messages),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var message = _step.value;

                  _this14.messages.push(message);
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            }
          });
        }
      }, {
        key: "getLastMessages",
        value: function getLastMessages() {
          var _this15 = this;

          this.tcService.getLastMessages().subscribe(function (res) {
            _this15.loadingMessages = false;
            _this15.messages = res.messages;
            var objDiv = document.getElementById('chatDiv');
            objDiv.addEventListener('scroll', function (e) {
              if (objDiv.scrollTop < 5 && !_this15.loadingMessages) {
                _this15.getOlderMessages();
              }
            });
          });
        }
      }, {
        key: "getOlderMessages",
        value: function getOlderMessages() {
          var _this16 = this;

          this.loadingMessages = true;
          this.tcService.getOlderMessages(this.messages[this.messages.length - 1].messageID).subscribe(function (res) {
            if (res.messages) {
              var _iterator2 = _createForOfIteratorHelper(res.messages),
                  _step2;

              try {
                for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                  var message = _step2.value;

                  _this16.messages.push(message);
                }
              } catch (err) {
                _iterator2.e(err);
              } finally {
                _iterator2.f();
              }
            }

            _this16.loadingMessages = false;
          });
        }
      }]);

      return TextChatComponent;
    }();

    TextChatComponent.ctorParameters = function () {
      return [{
        type: _core_chat_service_text_chat_service__WEBPACK_IMPORTED_MODULE_2__["TextChatService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }];
    };

    TextChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-text-chat',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./text-chat.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/text-chat/text-chat.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./text-chat.component.scss */
      "./src/app/components/classrom/text-chat/text-chat.component.scss"))["default"]]
    })], TextChatComponent);
    /***/
  },

  /***/
  "./src/app/components/models/homework-response/homework-response-modal.component.scss":
  /*!********************************************************************************************!*\
    !*** ./src/app/components/models/homework-response/homework-response-modal.component.scss ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsHomeworkResponseHomeworkResponseModalComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".markInput {\n  margin: 15px;\n  font-size: 40px;\n  width: 64px;\n  height: 64px;\n}\n\napp-homework-response {\n  border-bottom: 2px solid black;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvaG9tZXdvcmstcmVzcG9uc2UvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXGhvbWV3b3JrLXJlc3BvbnNlXFxob21ld29yay1yZXNwb25zZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvaG9tZXdvcmstcmVzcG9uc2UvaG9tZXdvcmstcmVzcG9uc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0FDRUYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21vZGVscy9ob21ld29yay1yZXNwb25zZS9ob21ld29yay1yZXNwb25zZS1tb2RhbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrSW5wdXQge1xyXG4gIG1hcmdpbjogMTVweDtcclxuICBmb250LXNpemU6IDQwcHg7XHJcbiAgd2lkdGg6IDY0cHg7XHJcbiAgaGVpZ2h0OiA2NHB4O1xyXG59XHJcbmFwcC1ob21ld29yay1yZXNwb25zZSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmctYm90dG9tOiAxNXB4O1xyXG59XHJcbiIsIi5tYXJrSW5wdXQge1xuICBtYXJnaW46IDE1cHg7XG4gIGZvbnQtc2l6ZTogNDBweDtcbiAgd2lkdGg6IDY0cHg7XG4gIGhlaWdodDogNjRweDtcbn1cblxuYXBwLWhvbWV3b3JrLXJlc3BvbnNlIHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/models/homework-response/homework-response-modal.component.ts":
  /*!******************************************************************************************!*\
    !*** ./src/app/components/models/homework-response/homework-response-modal.component.ts ***!
    \******************************************************************************************/

  /*! exports provided: HomeworkResponseModalComponent */

  /***/
  function srcAppComponentsModelsHomeworkResponseHomeworkResponseModalComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeworkResponseModalComponent", function () {
      return HomeworkResponseModalComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");

    var HomeworkResponseModalComponent = /*#__PURE__*/function () {
      function HomeworkResponseModalComponent(shared, toastr, main, classService) {
        _classCallCheck(this, HomeworkResponseModalComponent);

        this.shared = shared;
        this.toastr = toastr;
        this.main = main;
        this.classService = classService;
        this.markForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          mark: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
      }

      _createClass(HomeworkResponseModalComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this17 = this;

          this.shared.openHomework.subscribe(function (res) {
            _this17.response = res;

            _this17.showHomework.nativeElement.click();
          });
        }
      }, {
        key: "addMark",
        value: function addMark() {
          var _this18 = this;

          this.markForm.setControl('responseID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.response.id));
          this.markForm.setControl('homeworkID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.response.homeworkID));
          this.markForm.setControl('classID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.main.currentClassrom.id));
          this.markForm.setControl('subjectID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.main.currentSubject.id));

          if (this.markForm.valid) {
            this.classService.addNewMark(this.markForm.value).subscribe(function (res) {
              _this18.toastr.success('Pomyślnie dodano nową ocenę.', 'Udało się!');

              _this18.shared.openHomeworkModal(res);
            });
          }
        }
      }]);

      return HomeworkResponseModalComponent;
    }();

    HomeworkResponseModalComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showHomework')], HomeworkResponseModalComponent.prototype, "showHomework", void 0);
    HomeworkResponseModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-homework-response-modal',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./homework-response-modal.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/homework-response/homework-response-modal.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./homework-response-modal.component.scss */
      "./src/app/components/models/homework-response/homework-response-modal.component.scss"))["default"]]
    })], HomeworkResponseModalComponent);
    /***/
  },

  /***/
  "./src/app/components/models/login/login.component.scss":
  /*!**************************************************************!*\
    !*** ./src/app/components/models/login/login.component.scss ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n  z-index: 100;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--submit);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.transformUnder:hover {\n  background: var(--submitHover);\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsOEJBQUE7QUNLRjs7QURIQTtFQUNFLGFBQUE7QUNNRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbiAgei1pbmRleDogMTAwO1xyXG59XHJcbi5tb2RhbC10aXRsZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzVweDtcclxuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcbi5idG4tcHJpbWFyeSB7XHJcbiAgd2lkdGg6IDYwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG59XHJcbi50cmFuc2Zvcm1VbmRlciB7XHJcbiAgaGVpZ2h0OiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdCk7XHJcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZCkgdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4udHJhbnNmb3JtVW5kZXI6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICB2YXIoLS1zdWJtaXRIb3Zlcik7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcbiIsIi5tb2RhbC1jb250ZW50IHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICB6LWluZGV4OiAxMDA7XG59XG5cbi5tb2RhbC10aXRsZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzNXB4O1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xufVxuXG4uYnRuLXByaW1hcnkge1xuICB3aWR0aDogNjAlO1xuICBib3JkZXItcmFkaXVzOiAxMnB4O1xufVxuXG4udHJhbnNmb3JtVW5kZXIge1xuICBoZWlnaHQ6IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdCk7XG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi50cmFuc2Zvcm1VbmRlcjpob3ZlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdEhvdmVyKTtcbn1cblxuLnRyYW5zZm9ybVVuZGVyOmZvY3VzIHtcbiAgb3V0bGluZTogbm9uZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/models/login/login.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/models/login/login.component.ts ***!
    \************************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppComponentsModelsLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(shared, main) {
        _classCallCheck(this, LoginComponent);

        this.shared = shared;
        this.main = main;
        this.submitted = false;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)])
        });
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this19 = this;

          this.shared.openLogin.subscribe(function (res) {
            _this19.openModal.nativeElement.click();
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this20 = this;

          this.submitted = true;

          if (this.loginForm.valid) {
            this.shared.loading = true;
            this.shared.openLoginModal();
            this.main.login(this.loginForm.value).subscribe(function (res) {
              _this20.main.user = res.userToReturn;
              _this20.main.classrom = res.classes;

              _this20.main.ifUserExists();

              localStorage.setItem('homeschooltoken', res.token);
            }, function (err) {
              _this20.shared.loading = false;
            });
          }
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('openModal')], LoginComponent.prototype, "openModal", void 0);
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/components/models/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/components/models/marks-list/marks-list.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/models/marks-list/marks-list.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsMarksListMarksListComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".marksListH1 {\n  border-bottom: 2px solid black;\n}\n\n.studentsList {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbWFya3MtbGlzdC9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXG1vZGVsc1xcbWFya3MtbGlzdFxcbWFya3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvbWFya3MtbGlzdC9tYXJrcy1saXN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsOEJBQUE7QUNDRjs7QURDQTtFQUNFLGVBQUE7QUNFRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL21hcmtzLWxpc3QvbWFya3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrc0xpc3RIMSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5zdHVkZW50c0xpc3Qge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iLCIubWFya3NMaXN0SDEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5zdHVkZW50c0xpc3Qge1xuICBmb250LXNpemU6IDI1cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/models/marks-list/marks-list.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/models/marks-list/marks-list.component.ts ***!
    \**********************************************************************/

  /*! exports provided: MarksListComponent */

  /***/
  function srcAppComponentsModelsMarksListMarksListComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MarksListComponent", function () {
      return MarksListComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");

    var MarksListComponent = /*#__PURE__*/function () {
      function MarksListComponent(shared) {
        _classCallCheck(this, MarksListComponent);

        this.shared = shared;
      }

      _createClass(MarksListComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this21 = this;

          this.shared.openMarksList.subscribe(function (res) {
            _this21.response = res;

            _this21.showMarksList.nativeElement.click();
          });
        }
      }]);

      return MarksListComponent;
    }();

    MarksListComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showMarksList')], MarksListComponent.prototype, "showMarksList", void 0);
    MarksListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-marks-list',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./marks-list.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/marks-list/marks-list.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./marks-list.component.scss */
      "./src/app/components/models/marks-list/marks-list.component.scss"))["default"]]
    })], MarksListComponent);
    /***/
  },

  /***/
  "./src/app/components/models/register/register.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/models/register/register.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsRegisterRegisterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--submit);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  transition: all 0.3s;\n  text-align: center;\n  cursor: pointer;\n}\n\n.transformUnder:hover {\n  background: var(--submitHover);\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n\noption {\n  padding: 5px !important;\n}\n\nselect {\n  border-radius: var(--rad) !important;\n}\n\n.role {\n  text-align: center;\n  font-size: 30px;\n  background: var(--negative);\n  transition: all 0.2s;\n  cursor: pointer;\n  padding: 5px;\n}\n\n@media (max-width: 992px) {\n  .role {\n    font-size: 22px;\n  }\n}\n\n.roleSelected {\n  transform: scale(1.2);\n  background: #ff7700;\n}\n\n.role1 {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2 {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvRTpcXEhvbWUtU2Nob29sL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtb2RlbHNcXHJlZ2lzdGVyXFxyZWdpc3Rlci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUNDRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUNHRjs7QUREQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FDSUY7O0FERkE7RUFDRSw4QkFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GOztBREhBO0VBQ0UsdUJBQUE7QUNNRjs7QURKQTtFQUNFLG9DQUFBO0FDT0Y7O0FETEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUNRRjs7QUROQTtFQUNFO0lBQ0UsZUFBQTtFQ1NGO0FBQ0Y7O0FEUEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSxtQkFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUNVRjs7QURSQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQ1dGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvcmVnaXN0ZXIvcmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubW9kYWwtY29udGVudCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHBhZGRpbmc6IDMycHggMzJweCAwIDMycHg7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4udHJhbnNmb3JtVW5kZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXRIb3Zlcik7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyOmZvY3VzIHtcclxuICBvdXRsaW5lOiBub25lO1xyXG59XHJcblxyXG5vcHRpb24ge1xyXG4gIHBhZGRpbmc6IDVweCAhaW1wb3J0YW50O1xyXG59XHJcbnNlbGVjdCB7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKSAhaW1wb3J0YW50O1xyXG59XHJcbi5yb2xlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW5lZ2F0aXZlKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4ycztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgcGFkZGluZzogNXB4O1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDk5MnB4KSB7XHJcbiAgLnJvbGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG4ucm9sZVNlbGVjdGVkIHtcclxuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XHJcbiAgYmFja2dyb3VuZDogI2ZmNzcwMDtcclxufVxyXG4ucm9sZTEge1xyXG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgNzklIDAsIDEwMCUgMTAwJSwgMCUgMTAwJSk7XHJcbn1cclxuLnJvbGUyIHtcclxuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDAgMCwgMTAwJSAwLCAxMDAlIDEwMCUsIDIxJSAxMDAlKTtcclxufVxyXG4iLCIubW9kYWwtY29udGVudCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcbn1cblxuLm1vZGFsLXRpdGxlIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBmb250LXNpemU6IDM1cHg7XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG59XG5cbi5idG4tcHJpbWFyeSB7XG4gIHdpZHRoOiA2MCU7XG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XG59XG5cbi50cmFuc2Zvcm1VbmRlciB7XG4gIGhlaWdodDogNTBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0KTtcbiAgYm9yZGVyLXJhZGl1czogMCAwIHZhcigtLXJhZCkgdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMTBweDtcbiAgZm9udC1zaXplOiAyMHB4O1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoNTBweCk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnRyYW5zZm9ybVVuZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0SG92ZXIpO1xufVxuXG4udHJhbnNmb3JtVW5kZXI6Zm9jdXMge1xuICBvdXRsaW5lOiBub25lO1xufVxuXG5vcHRpb24ge1xuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcbn1cblxuc2VsZWN0IHtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKSAhaW1wb3J0YW50O1xufVxuXG4ucm9sZSB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZWdhdGl2ZSk7XG4gIHRyYW5zaXRpb246IGFsbCAwLjJzO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIHBhZGRpbmc6IDVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5yb2xlIHtcbiAgICBmb250LXNpemU6IDIycHg7XG4gIH1cbn1cbi5yb2xlU2VsZWN0ZWQge1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMik7XG4gIGJhY2tncm91bmQ6ICNmZjc3MDA7XG59XG5cbi5yb2xlMSB7XG4gIHBhZGRpbmctcmlnaHQ6IDEwcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDc5JSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xufVxuXG4ucm9sZTIge1xuICBwYWRkaW5nLWxlZnQ6IDMwcHg7XG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAyMSUgMTAwJSk7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/models/register/register.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/models/register/register.component.ts ***!
    \******************************************************************/

  /*! exports provided: RegisterComponent */

  /***/
  function srcAppComponentsModelsRegisterRegisterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
      return RegisterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var RegisterComponent = /*#__PURE__*/function () {
      function RegisterComponent(shared, main, toastr) {
        _classCallCheck(this, RegisterComponent);

        this.shared = shared;
        this.main = main;
        this.toastr = toastr;
        this.selectedRole = 0;
        this.submitted = false;
        this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
          email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
          password: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(5)]),
          name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Dawid', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('Kruk', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
          userCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
        });
      }

      _createClass(RegisterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this22 = this;

          this.shared.openRegister.subscribe(function (res) {
            _this22.openRegister.nativeElement.click();
          });
        }
      }, {
        key: "submit",
        value: function submit() {
          var _this23 = this;

          this.submitted = true;
          this.registerForm.setControl('userRole', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.selectedRole));

          if (this.registerForm.valid) {
            this.main.register(this.registerForm.value).subscribe(function (res) {
              localStorage.setItem('homeschooltoken', res.token);
              _this23.main.user = res.userToReturn;

              _this23.toastr.success('Rejestracja przebiegła pomyślnie', 'Udało się!');

              _this23.shared.openRegisterModal();

              _this23.main.ifUserExists();
            });
          }
        } // select you are student or teacher ( 0 - student, 1 - teacher)

      }, {
        key: "select",
        value: function select(_select) {
          this.selectedRole = _select;
        }
      }]);

      return RegisterComponent;
    }();

    RegisterComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('openRegister')], RegisterComponent.prototype, "openRegister", void 0);
    RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-register',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./register.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./register.component.scss */
      "./src/app/components/models/register/register.component.scss"))["default"]]
    })], RegisterComponent);
    /***/
  },

  /***/
  "./src/app/components/models/show-code/show-code.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/models/show-code/show-code.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsShowCodeShowCodeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".headerText {\n  border-bottom: 2px solid var(--main) !important;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 7px;\n  padding: 5px;\n}\n\n.code {\n  font-size: 30px;\n  padding: 10px;\n  text-align: center;\n  color: var(--warn);\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n\n@media (max-width: 720px) {\n  .code {\n    font-size: 22px;\n  }\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  /* If you want dots under the hoverable text */\n}\n\n/* Tooltip text */\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.modal-content:hover {\n  cursor: pointer;\n}\n\n.modal-content:hover .code {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvc2hvdy1jb2RlL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kZWxzXFxzaG93LWNvZGVcXHNob3ctY29kZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvc2hvdy1jb2RlL3Nob3ctY29kZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLCtDQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtFQUNBLGlCQUFBO0FDRUY7O0FEQUE7RUFDRTtJQUNFLGVBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0Usa0JBQUE7RUFDQSxxQkFBQTtFQUNBLCtCQUFBO0VBQWlDLDhDQUFBO0FDSW5DOztBRERBLGlCQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0VBQ0EsdUJBQUE7RUFDQSxXQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFFQSxvREFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBQ0dGOztBREFBLG9FQUFBOztBQUNBO0VBQ0UsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7QUNJRjs7QURGQTtFQUNFLFVBQUE7QUNLRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL3Nob3ctY29kZS9zaG93LWNvZGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVhZGVyVGV4dCB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIHZhcigtLW1haW4pICFpbXBvcnRhbnQ7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTozNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDdweDtcclxuICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuLmNvZGUge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBwYWRkaW5nOjEwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmNvZGUge1xyXG4gICAgZm9udC1zaXplOiAyMnB4O1xyXG4gIH1cclxufVxyXG4udG9vbHRpcCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcclxuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrOyAvKiBJZiB5b3Ugd2FudCBkb3RzIHVuZGVyIHRoZSBob3ZlcmFibGUgdGV4dCAqL1xyXG59XHJcblxyXG4vKiBUb29sdGlwIHRleHQgKi9cclxuLnRvb2x0aXAgLnRvb2x0aXB0ZXh0IHtcclxuICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgd2lkdGg6IDEyMHB4O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xyXG4gIGNvbG9yOiAjZmZmO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBwYWRkaW5nOiA1cHggMDtcclxuICBib3JkZXItcmFkaXVzOiA2cHg7XHJcblxyXG4gIC8qIFBvc2l0aW9uIHRoZSB0b29sdGlwIHRleHQgLSBzZWUgZXhhbXBsZXMgYmVsb3chICovXHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHotaW5kZXg6IDE7XHJcbn1cclxuXHJcbi8qIFNob3cgdGhlIHRvb2x0aXAgdGV4dCB3aGVuIHlvdSBtb3VzZSBvdmVyIHRoZSB0b29sdGlwIGNvbnRhaW5lciAqL1xyXG4udG9vbHRpcDpob3ZlciAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IHZpc2libGU7XHJcbn1cclxuLm1vZGFsLWNvbnRlbnQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4ubW9kYWwtY29udGVudDpob3ZlciAuY29kZSB7XHJcbiAgY29sb3I6IHJlZDtcclxufVxyXG4iLCIuaGVhZGVyVGV4dCB7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCB2YXIoLS1tYWluKSAhaW1wb3J0YW50O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGZvbnQtc2l6ZTogMzVweDtcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xuICBwYWRkaW5nOiA1cHg7XG59XG5cbi5jb2RlIHtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB2YXIoLS13YXJuKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZTtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAuY29kZSB7XG4gICAgZm9udC1zaXplOiAyMnB4O1xuICB9XG59XG4udG9vbHRpcCB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItYm90dG9tOiAxcHggZG90dGVkIGJsYWNrO1xuICAvKiBJZiB5b3Ugd2FudCBkb3RzIHVuZGVyIHRoZSBob3ZlcmFibGUgdGV4dCAqL1xufVxuXG4vKiBUb29sdGlwIHRleHQgKi9cbi50b29sdGlwIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcbiAgd2lkdGg6IDEyMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6ICNmZmY7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogNXB4IDA7XG4gIGJvcmRlci1yYWRpdXM6IDZweDtcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB6LWluZGV4OiAxO1xufVxuXG4vKiBTaG93IHRoZSB0b29sdGlwIHRleHQgd2hlbiB5b3UgbW91c2Ugb3ZlciB0aGUgdG9vbHRpcCBjb250YWluZXIgKi9cbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XG4gIHZpc2liaWxpdHk6IHZpc2libGU7XG59XG5cbi5tb2RhbC1jb250ZW50OmhvdmVyIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG4ubW9kYWwtY29udGVudDpob3ZlciAuY29kZSB7XG4gIGNvbG9yOiByZWQ7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/models/show-code/show-code.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/models/show-code/show-code.component.ts ***!
    \********************************************************************/

  /*! exports provided: ShowCodeComponent */

  /***/
  function srcAppComponentsModelsShowCodeShowCodeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowCodeComponent", function () {
      return ShowCodeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var ShowCodeComponent = /*#__PURE__*/function () {
      function ShowCodeComponent(shared, toastr) {
        _classCallCheck(this, ShowCodeComponent);

        this.shared = shared;
        this.toastr = toastr;
      }

      _createClass(ShowCodeComponent, [{
        key: "copyCodeFunc",
        value: function copyCodeFunc() {
          var _this24 = this;

          document.addEventListener('copy', function (e) {
            e.clipboardData.setData('text/plain', _this24.codeCopy.nativeElement.textContent);
            e.preventDefault();
          });
          document.execCommand('copy');
          this.shared.openCodeModal('');
          this.toastr.success('Możesz go teraz łatwo wysłać swoim uczniom.', 'Skopiowano kod!');
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this25 = this;

          this.shared.openCode.subscribe(function (res) {
            _this25.code = res;

            _this25.showCode.nativeElement.click();
          });
        }
      }]);

      return ShowCodeComponent;
    }();

    ShowCodeComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showCode')], ShowCodeComponent.prototype, "showCode", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('codeCopy')], ShowCodeComponent.prototype, "codeCopy", void 0);
    ShowCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-code',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./show-code.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-code/show-code.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./show-code.component.scss */
      "./src/app/components/models/show-code/show-code.component.scss"))["default"]]
    })], ShowCodeComponent);
    /***/
  },

  /***/
  "./src/app/components/models/show-members/show-members.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/models/show-members/show-members.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsModelsShowMembersShowMembersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".fa-trash {\n  cursor: pointer;\n  padding: 15px;\n  text-align: center;\n  color: #151515;\n  background: var(--warn);\n  border-radius: var(--rad);\n  font-size: 45px;\n  transition: all 0.3s;\n}\n\n.fa-trash:hover {\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);\n  background: #f16127;\n}\n\n.personData {\n  font-size: 30px;\n}\n\n.marksListH1 {\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvc2hvdy1tZW1iZXJzL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcbW9kZWxzXFxzaG93LW1lbWJlcnNcXHNob3ctbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tb2RlbHMvc2hvdy1tZW1iZXJzL3Nob3ctbWVtYmVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQ0NGOztBRENBO0VBR0UsZ0RBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsZUFBQTtBQ0dGOztBRERBO0VBQ0UsOEJBQUE7QUNJRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbW9kZWxzL3Nob3ctbWVtYmVycy9zaG93LW1lbWJlcnMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZmEtdHJhc2gge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBwYWRkaW5nOiAxNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBjb2xvcjogcmdiKDIxLCAyMSwgMjEpO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgZm9udC1zaXplOiA0NXB4O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIDtcclxufVxyXG4uZmEtdHJhc2g6aG92ZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBiYWNrZ3JvdW5kOiAjZjE2MTI3O1xyXG59XHJcbi5wZXJzb25EYXRhIHtcclxuICBmb250LXNpemU6IDMwcHg7XHJcbn1cclxuLm1hcmtzTGlzdEgxIHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuIiwiLmZhLXRyYXNoIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBwYWRkaW5nOiAxNXB4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiAjMTUxNTE1O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgZm9udC1zaXplOiA0NXB4O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcbn1cblxuLmZhLXRyYXNoOmhvdmVyIHtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gIGJhY2tncm91bmQ6ICNmMTYxMjc7XG59XG5cbi5wZXJzb25EYXRhIHtcbiAgZm9udC1zaXplOiAzMHB4O1xufVxuXG4ubWFya3NMaXN0SDEge1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/models/show-members/show-members.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/models/show-members/show-members.component.ts ***!
    \**************************************************************************/

  /*! exports provided: ShowMembersComponent */

  /***/
  function srcAppComponentsModelsShowMembersShowMembersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowMembersComponent", function () {
      return ShowMembersComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");

    var ShowMembersComponent = /*#__PURE__*/function () {
      function ShowMembersComponent(shared, toastr, main, classService) {
        _classCallCheck(this, ShowMembersComponent);

        this.shared = shared;
        this.toastr = toastr;
        this.main = main;
        this.classService = classService;
      }

      _createClass(ShowMembersComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this26 = this;

          this.shared.openMembers.subscribe(function (res) {
            _this26.members = res.users;

            _this26.showMembers.nativeElement.click();
          });
        }
      }, {
        key: "deleteUser",
        value: function deleteUser(i) {
          var bodyToSend = {
            userToDeleteID: this.main.currentClassrom.members[i],
            classID: this.main.currentClassrom.id
          };
          this.classService.deleteClassMember(bodyToSend);
        }
      }]);

      return ShowMembersComponent;
    }();

    ShowMembersComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('showMembers')], ShowMembersComponent.prototype, "showMembers", void 0);
    ShowMembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-members',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./show-members.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-members/show-members.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./show-members.component.scss */
      "./src/app/components/models/show-members/show-members.component.scss"))["default"]]
    })], ShowMembersComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/contact/contact.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/contact/contact.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedContactContactComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n.cover {\n  height: 100%;\n}\n\n@media (max-width: 992px) {\n  .cover {\n    height: auto !important;\n  }\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.contactDetails {\n  background: #E0FBFC;\n}\n\n.rest {\n  margin-top: -150px;\n  padding-top: 150px;\n  background: var(--submit);\n}\n\n.contactUs {\n  background: #43AA8B;\n  border-top-left-radius: var(--rad);\n  border-top-right-radius: var(--rad);\n  text-align: center;\n  padding: 20px;\n  border-bottom: 2px solid black;\n}\n\n.container {\n  border-radius: var(--rad) !important;\n}\n\n.singeInfo {\n  padding: 10px;\n  margin-bottom: 3px;\n  border-bottom: 2px solid grey;\n  font-size: 35px;\n}\n\n@media (max-width: 992px) {\n  .singeInfo {\n    font-size: 25px !important;\n  }\n}\n\n.singeInfo:last-child {\n  border-bottom: none !important;\n}\n\n.infoRow {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcY29udGFjdFxcY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEVBQUE7VUFBQSxrRUFBQTtBQ0NGOztBRENBO0VBQ0UsWUFBQTtBQ0VGOztBREFBO0VBQ0U7SUFDRSx1QkFBQTtFQ0dGO0FBQ0Y7O0FEREE7RUFDRTtJQUNFLHFGQUFBO1lBQUEsNkVBQUE7RUNHRjtBQUNGOztBRERBO0VBQ0UsbUJBQUE7QUNHRjs7QUREQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsOEJBQUE7QUNLRjs7QURIQTtFQUNHLG9DQUFBO0FDTUg7O0FESkE7RUFDRSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSw2QkFBQTtFQUNBLGVBQUE7QUNPRjs7QURMQTtFQUNFO0lBQ0UsMEJBQUE7RUNRRjtBQUNGOztBRE5BO0VBQ0UsOEJBQUE7QUNRRjs7QURMQTtFQUNFLFNBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbi5jb3ZlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb3ZlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgODUlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmNvbnRhY3REZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xyXG59XHJcbi5yZXN0IHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdClcclxufVxyXG4uY29udGFjdFVzIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCkgIWltcG9ydGFudDtcclxufVxyXG4uc2luZ2VJbmZvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc2luZ2VJbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc2luZ2VJbmZvOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluZm9Sb3cge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iLCIubWFpbkRpdiB7XG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xuICBwYWRkaW5nOiAyNXB4O1xuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XG59XG5cbi5jb3ZlciB7XG4gIGhlaWdodDogMTAwJTtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb3ZlciB7XG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAubWFpbkRpdiB7XG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDg1JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5jb250YWN0RGV0YWlscyB7XG4gIGJhY2tncm91bmQ6ICNFMEZCRkM7XG59XG5cbi5yZXN0IHtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBwYWRkaW5nLXRvcDogMTUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdCk7XG59XG5cbi5jb250YWN0VXMge1xuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogdmFyKC0tcmFkKTtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpICFpbXBvcnRhbnQ7XG59XG5cbi5zaW5nZUluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuc2luZ2VJbmZvIHtcbiAgICBmb250LXNpemU6IDI1cHggIWltcG9ydGFudDtcbiAgfVxufVxuLnNpbmdlSW5mbzpsYXN0LWNoaWxkIHtcbiAgYm9yZGVyLWJvdHRvbTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4uaW5mb1JvdyB7XG4gIG1hcmdpbjogMDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/shared/contact/contact.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/contact/contact.component.ts ***!
    \****************************************************************/

  /*! exports provided: ContactComponent */

  /***/
  function srcAppComponentsSharedContactContactComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
      return ContactComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var ContactComponent = /*#__PURE__*/function () {
      function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      }

      _createClass(ContactComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ContactComponent;
    }();

    ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contact',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./contact.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/contact/contact.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./contact.component.scss */
      "./src/app/components/shared/contact/contact.component.scss"))["default"]]
    })], ContactComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedFooterFooterComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/footer/footer.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/footer/footer.component.ts ***!
    \**************************************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppComponentsSharedFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var FooterComponent = /*#__PURE__*/function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/footer/footer.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./footer.component.scss */
      "./src/app/components/shared/footer/footer.component.scss"))["default"]]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".nav-link:hover {\n  color: #ff8e00 !important;\n}\n\n.nav-link {\n  cursor: pointer;\n  color: white !important;\n  font-size: 23px;\n  transition: all 0.3s;\n}\n\n.navbar-toggler {\n  border: 2px solid rgba(255, 255, 255, 0.62);\n}\n\n.navbar-toggler:focus {\n  outline: none;\n}\n\n.navbar {\n  background-color: var(--main);\n  box-shadow: 0px 3px 5px 0px rgba(0, 0, 0, 0.75);\n}\n\n.logout {\n  color: var(--warn) !important;\n}\n\n.navbar-brand {\n  font-size: 30px;\n  font-family: \"Lato Heavy\";\n}\n\n.loginNav {\n  background: #F8961E !important;\n  padding: 10px !important;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n.loginNav:hover {\n  background: #D05B23 !important;\n  color: white !important;\n}\n\n.hr {\n  display: none;\n}\n\n@media (max-width: 720px) {\n  .loginNav {\n    -webkit-clip-path: none;\n            clip-path: none;\n    border-radius: 20px;\n  }\n}\n\n.navbar-brand:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  transition: all 0.3s;\n}\n\n.dropdown-item {\n  transition: 0.3s all ease;\n  font-size: 20px;\n  border-bottom: 1px solid grey;\n}\n\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n\n.dropdown-item:hover {\n  background: var(--submit);\n}\n\n.active .nav-link {\n  color: #ff8e00 !important;\n}\n\n.activeBrand {\n  color: #ff8e00 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxuYXZiYXJcXG5hdmJhci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURBQTtFQUNFLDJDQUFBO0FDR0Y7O0FERUE7RUFDRSxhQUFBO0FDQ0Y7O0FEQ0E7RUFDRSw2QkFBQTtFQUdBLCtDQUFBO0FDRUY7O0FEQUE7RUFDRSw2QkFBQTtBQ0dGOztBRERBO0VBQ0UsZUFBQTtFQUNBLHlCQUFBO0FDSUY7O0FERkE7RUFDRSw4QkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0ZBQUE7VUFBQSx3RUFBQTtBQ0lGOztBREZBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQ0tGOztBREhBO0VBQ0UsYUFBQTtBQ01GOztBREpBO0VBQ0U7SUFDRSx1QkFBQTtZQUFBLGVBQUE7SUFDQSxtQkFBQTtFQ09GO0FBQ0Y7O0FETEE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQ09GOztBRExBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUNRRjs7QUROQTtFQUNFLG1CQUFBO0FDU0Y7O0FEUEE7RUFDRSx5QkFBQTtBQ1VGOztBRFJBO0VBQ0UseUJBQUE7QUNXRjs7QURSQTtFQUNFLHlCQUFBO0FDV0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMjNweDtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXIge1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Mik7XHJcbn1cclxuLm5hdmJhci10b2dnbGVyLWljb24ge1xyXG5cclxufVxyXG4ubmF2YmFyLXRvZ2dsZXI6Zm9jdXMge1xyXG4gIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuLm5hdmJhciB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tbWFpbik7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAzcHggNXB4IDBweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5sb2dvdXQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBmb250LWZhbWlseTogXCJMYXRvIEhlYXZ5XCI7XHJcbn1cclxuLmxvZ2luTmF2IHtcclxuICBiYWNrZ3JvdW5kOiAjRjg5NjFFICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbn1cclxuLmxvZ2luTmF2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRDA1QjIzICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmxvZ2luTmF2IHtcclxuICAgIGNsaXAtcGF0aDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxufVxyXG4uZHJvcGRvd24taXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG59XHJcbi5hY3RpdmUgLm5hdi1saW5re1xyXG4gIGNvbG9yIDogI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlQnJhbmQge1xyXG4gIGNvbG9yOiAgI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG59XHJcbiIsIi5uYXYtbGluazpob3ZlciB7XG4gIGNvbG9yOiAjZmY4ZTAwICFpbXBvcnRhbnQ7XG59XG5cbi5uYXYtbGluayB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5uYXZiYXItdG9nZ2xlciB7XG4gIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoMjU1LCAyNTUsIDI1NSwgMC42Mik7XG59XG5cbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XG4gIG91dGxpbmU6IG5vbmU7XG59XG5cbi5uYXZiYXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggM3B4IDVweCAwcHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDNweCA1cHggMHB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG59XG5cbi5sb2dvdXQge1xuICBjb2xvcjogdmFyKC0td2FybikgIWltcG9ydGFudDtcbn1cblxuLm5hdmJhci1icmFuZCB7XG4gIGZvbnQtc2l6ZTogMzBweDtcbiAgZm9udC1mYW1pbHk6IFwiTGF0byBIZWF2eVwiO1xufVxuXG4ubG9naW5OYXYge1xuICBiYWNrZ3JvdW5kOiAjRjg5NjFFICFpbXBvcnRhbnQ7XG4gIHBhZGRpbmc6IDEwcHggIWltcG9ydGFudDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAyNSUsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwJSAyNSUpO1xufVxuXG4ubG9naW5OYXY6aG92ZXIge1xuICBiYWNrZ3JvdW5kOiAjRDA1QjIzICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xufVxuXG4uaHIge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLmxvZ2luTmF2IHtcbiAgICBjbGlwLXBhdGg6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgfVxufVxuLm5hdmJhci1icmFuZDpob3ZlciB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6ICNmZjhlMDAgIWltcG9ydGFudDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5kcm9wZG93bi1pdGVtIHtcbiAgdHJhbnNpdGlvbjogMC4zcyBhbGwgZWFzZTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcbn1cblxuLmRyb3Bkb3duLWl0ZW06bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmU7XG59XG5cbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0KTtcbn1cblxuLmFjdGl2ZSAubmF2LWxpbmsge1xuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xufVxuXG4uYWN0aXZlQnJhbmQge1xuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/navbar/navbar.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/shared/navbar/navbar.component.ts ***!
    \**************************************************************/

  /*! exports provided: NavbarComponent */

  /***/
  function srcAppComponentsSharedNavbarNavbarComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
      return NavbarComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");

    var NavbarComponent = /*#__PURE__*/function () {
      function NavbarComponent(shared, main) {
        _classCallCheck(this, NavbarComponent);

        this.shared = shared;
        this.main = main;
      }

      _createClass(NavbarComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {// this.shared.openRegisterModal();
        }
      }]);

      return NavbarComponent;
    }();

    NavbarComponent.ctorParameters = function () {
      return [{
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }];
    };

    NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-navbar',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/navbar/navbar.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./navbar.component.scss */
      "./src/app/components/shared/navbar/navbar.component.scss"))["default"]]
    })], NavbarComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/profile/profile.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/profile/profile.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedProfileProfileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.contactDetails {\n  background: #E0FBFC;\n}\n\n.cover {\n  height: 100%;\n}\n\n@media (max-width: 992px) {\n  .cover {\n    height: auto !important;\n  }\n}\n\n.rest {\n  margin-top: -150px;\n  padding-top: 150px;\n  background: var(--submit);\n}\n\n.contactUs {\n  background: #43AA8B;\n  border-top-left-radius: var(--rad);\n  border-top-right-radius: var(--rad);\n  text-align: center;\n  margin: 0;\n  padding: 20px;\n  border-bottom: 2px solid black;\n}\n\n.container {\n  border-radius: var(--rad) !important;\n}\n\n.singeInfo {\n  padding: 10px;\n  margin-bottom: 3px;\n  border-bottom: 2px solid grey;\n  font-size: 35px;\n}\n\n.singeInfo:last-child {\n  border-bottom: none !important;\n}\n\n@media (min-width: 720px) {\n  .infoRow {\n    border-left: 2px solid grey;\n  }\n}\n\n@media (max-width: 720px) {\n  .profilePicRow {\n    border-bottom: 2px solid grey;\n  }\n}\n\n.img-fluid {\n  border: 4px solid #F8961E;\n  border-radius: var(--rad);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxccHJvZmlsZVxccHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvcHJvZmlsZS9wcm9maWxlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEVBQUE7VUFBQSxrRUFBQTtBQ0NGOztBRENBO0VBQ0U7SUFDRSxxRkFBQTtZQUFBLDZFQUFBO0VDRUY7QUFDRjs7QURBQTtFQUNFLG1CQUFBO0FDRUY7O0FEQUE7RUFDRSxZQUFBO0FDR0Y7O0FEREE7RUFDRTtJQUNFLHVCQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSx5QkFBQTtBQ0lGOztBREZBO0VBQ0UsbUJBQUE7RUFDQSxrQ0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0JBQUE7RUFDQSxTQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FDS0Y7O0FESEE7RUFDRSxvQ0FBQTtBQ01GOztBREpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FDT0Y7O0FETEE7RUFDRSw4QkFBQTtBQ1FGOztBRExBO0VBQ0U7SUFDRSwyQkFBQTtFQ1FGO0FBQ0Y7O0FETkE7RUFDRTtJQUNFLDZCQUFBO0VDUUY7QUFDRjs7QUROQTtFQUNFLHlCQUFBO0VBQ0EseUJBQUE7QUNRRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvc2hhcmVkL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLm1haW5EaXYge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDg1JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jb250YWN0RGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcclxufVxyXG4uY292ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY292ZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5yZXN0IHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdClcclxufVxyXG4uY29udGFjdFVzIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCkgIWltcG9ydGFudDtcclxufVxyXG4uc2luZ2VJbmZvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLnNpbmdlSW5mbzpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLmluZm9Sb3cge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5wcm9maWxlUGljUm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG4gIH1cclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjRjg5NjFFO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbn1cclxuIiwiLm1haW5EaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMjVweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1haW5EaXYge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA4NSUsIDUwJSAxMDAlLCAwIDg1JSwgMCAwKSAhaW1wb3J0YW50O1xuICB9XG59XG4uY29udGFjdERldGFpbHMge1xuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xufVxuXG4uY292ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xuICAuY292ZXIge1xuICAgIGhlaWdodDogYXV0byAhaW1wb3J0YW50O1xuICB9XG59XG4ucmVzdCB7XG4gIG1hcmdpbi10b3A6IC0xNTBweDtcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xufVxuXG4uY29udGFjdFVzIHtcbiAgYmFja2dyb3VuZDogIzQzQUE4QjtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogdmFyKC0tcmFkKTtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAwO1xuICBwYWRkaW5nOiAyMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XG59XG5cbi5jb250YWluZXIge1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpICFpbXBvcnRhbnQ7XG59XG5cbi5zaW5nZUluZm8ge1xuICBwYWRkaW5nOiAxMHB4O1xuICBtYXJnaW4tYm90dG9tOiAzcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xuICBmb250LXNpemU6IDM1cHg7XG59XG5cbi5zaW5nZUluZm86bGFzdC1jaGlsZCB7XG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDcyMHB4KSB7XG4gIC5pbmZvUm93IHtcbiAgICBib3JkZXItbGVmdDogMnB4IHNvbGlkIGdyZXk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA3MjBweCkge1xuICAucHJvZmlsZVBpY1JvdyB7XG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGdyZXk7XG4gIH1cbn1cbi5pbWctZmx1aWQge1xuICBib3JkZXI6IDRweCBzb2xpZCAjRjg5NjFFO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/profile/profile.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/profile/profile.component.ts ***!
    \****************************************************************/

  /*! exports provided: ProfileComponent */

  /***/
  function srcAppComponentsSharedProfileProfileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
      return ProfileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");

    var ProfileComponent = /*#__PURE__*/function () {
      function ProfileComponent(main) {
        _classCallCheck(this, ProfileComponent);

        this.main = main;
      }

      _createClass(ProfileComponent, [{
        key: "getUser",
        value: function getUser() {
          this.user = this.main.user;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getUser();
        }
      }]);

      return ProfileComponent;
    }();

    ProfileComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }];
    };

    ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-profile',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./profile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/profile/profile.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./profile.component.scss */
      "./src/app/components/shared/profile/profile.component.scss"))["default"]]
    })], ProfileComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/show-homework-file/show-homework-file.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/shared/show-homework-file/show-homework-file.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedShowHomeworkFileShowHomeworkFileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  border-bottom: 2px solid black;\n}\n\n.linkHref {\n  color: #4e4eb1;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1ob21ld29yay1maWxlL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxzaG93LWhvbWV3b3JrLWZpbGVcXHNob3ctaG9tZXdvcmstZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1ob21ld29yay1maWxlL3Nob3ctaG9tZXdvcmstZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1ob21ld29yay1maWxlL3Nob3ctaG9tZXdvcmstZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmxpbmtIcmVmIHtcclxuICBjb2xvcjogIzRlNGViMTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiIsIi5tYWluRGl2IHtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubGlua0hyZWYge1xuICBjb2xvcjogIzRlNGViMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/show-homework-file/show-homework-file.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/shared/show-homework-file/show-homework-file.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ShowHomeworkFileComponent */

  /***/
  function srcAppComponentsSharedShowHomeworkFileShowHomeworkFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowHomeworkFileComponent", function () {
      return ShowHomeworkFileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var ShowHomeworkFileComponent = /*#__PURE__*/function () {
      function ShowHomeworkFileComponent(main, classService, sanitizer) {
        _classCallCheck(this, ShowHomeworkFileComponent);

        this.main = main;
        this.classService = classService;
        this.sanitizer = sanitizer;
        this.src = [];
        this.names = [];
        this.mimes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
        this.files = [];
        this.filesID = [];
      }

      _createClass(ShowHomeworkFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getSrc",
        value: function getSrc(i) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.src[i]);
        }
      }, {
        key: "openWindow",
        value: function openWindow(i) {
          this.downloadFile(this.src[i], this.names[i]);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(url, fileName) {
          var file = fileName.split('.');
          var finalFileName = this.homework.name + '.' + file[file.length - 1];
          var a = document.createElement('a');
          document.body.appendChild(a); // @ts-ignore

          a.style = 'display: none';
          a.href = url;
          a.download = finalFileName;
          a.click();
          window.URL.revokeObjectURL(fileName);
        }
      }, {
        key: "downloadAllFiles",
        value: function downloadAllFiles() {
          var _this27 = this;

          for (var i = 0; i < this.homework.files.length; i++) {
            var fileData = {
              homeworkID: this.homework.id,
              classID: this.main.currentClassrom.id,
              subjectID: this.main.currentSubject.id,
              fileID: this.homework.files[i]
            };
            this.classService.returnFileFromHomework(fileData).subscribe(function (res) {
              var type = res.headers.get('Content-Type');
              var fileName = res.headers.get('filename');

              _this27.names.push(fileName);

              var file = new Blob([res.body], {
                type: type
              });
              var fileURL = URL.createObjectURL(file);

              if (!_this27.mimes.includes(type)) {
                _this27.downloadFile(fileURL, fileName);
              } else {
                _this27.src.push(fileURL);
              }
            });
          }
        }
      }, {
        key: "homeworkSet",
        set: function set(hom) {
          this.homework = hom;
        }
      }]);

      return ShowHomeworkFileComponent;
    }();

    ShowHomeworkFileComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ShowHomeworkFileComponent.prototype, "homeworkSet", null);
    ShowHomeworkFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-homework-file',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./show-homework-file.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-homework-file/show-homework-file.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./show-homework-file.component.scss */
      "./src/app/components/shared/show-homework-file/show-homework-file.component.scss"))["default"]]
    })], ShowHomeworkFileComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/show-response-file/show-response-file.component.scss":
  /*!****************************************************************************************!*\
    !*** ./src/app/components/shared/show-response-file/show-response-file.component.scss ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedShowResponseFileShowResponseFileComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  border-top: 2px solid black;\n}\n\n.linkHref {\n  color: #4e4eb1;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1yZXNwb25zZS1maWxlL0U6XFxIb21lLVNjaG9vbC9zcmNcXGFwcFxcY29tcG9uZW50c1xcc2hhcmVkXFxzaG93LXJlc3BvbnNlLWZpbGVcXHNob3ctcmVzcG9uc2UtZmlsZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1yZXNwb25zZS1maWxlL3Nob3ctcmVzcG9uc2UtZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDJCQUFBO0FDQ0Y7O0FEQ0E7RUFDRSxjQUFBO0VBQ0EsMEJBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtBQ0VGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc2hvdy1yZXNwb25zZS1maWxlL3Nob3ctcmVzcG9uc2UtZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmxpbmtIcmVmIHtcclxuICBjb2xvcjogIzRlNGViMTtcclxuICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG59XHJcbiIsIi5tYWluRGl2IHtcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xufVxuXG4ubGlua0hyZWYge1xuICBjb2xvcjogIzRlNGViMTtcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZm9udC1zaXplOiAyNXB4O1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/show-response-file/show-response-file.component.ts":
  /*!**************************************************************************************!*\
    !*** ./src/app/components/shared/show-response-file/show-response-file.component.ts ***!
    \**************************************************************************************/

  /*! exports provided: ShowResponseFileComponent */

  /***/
  function srcAppComponentsSharedShowResponseFileShowResponseFileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ShowResponseFileComponent", function () {
      return ShowResponseFileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");

    var ShowResponseFileComponent = /*#__PURE__*/function () {
      function ShowResponseFileComponent(main, classService, sanitizer) {
        _classCallCheck(this, ShowResponseFileComponent);

        this.main = main;
        this.classService = classService;
        this.sanitizer = sanitizer;
        this.src = [];
        this.names = [];
        this.mimes = ['application/pdf', 'image/jpeg', 'image/png', 'image/jpg'];
        this.files = [];
        this.filesID = [];
      }

      _createClass(ShowResponseFileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "getSrc",
        value: function getSrc(i) {
          return this.sanitizer.bypassSecurityTrustResourceUrl(this.src[i]);
        }
      }, {
        key: "openWindow",
        value: function openWindow(i) {
          this.downloadFile(this.src[i], this.names[i]);
        }
      }, {
        key: "downloadFile",
        value: function downloadFile(url, fileName) {
          var file = fileName.split('.');
          var finalFileName = this.response.homeworkName + '_' + this.response.senderSurname + '_' + this.response.senderName + '.' + file[file.length - 1];
          var a = document.createElement('a');
          document.body.appendChild(a); // @ts-ignore

          a.style = 'display: none';
          a.href = url;
          a.download = finalFileName;
          a.click();
          window.URL.revokeObjectURL(fileName);
        }
      }, {
        key: "downloadAllFiles",
        value: function downloadAllFiles() {
          var _this28 = this;

          for (var i = 0; i < this.response.files.length; i++) {
            var fileData = {
              homeworkID: this.response.homeworkID,
              classID: this.main.currentClassrom.id,
              subjectID: this.main.currentSubject.id,
              fileID: this.response.files[i]
            };
            this.classService.returnFileFromResponse(fileData).subscribe(function (res) {
              var type = res.headers.get('Content-Type');
              var fileName = res.headers.get('filename');

              _this28.names.push(fileName);

              var file = new Blob([res.body], {
                type: type
              });
              var fileURL = URL.createObjectURL(file);

              if (!_this28.mimes.includes(type)) {
                _this28.downloadFile(fileURL, fileName);
              } else {
                _this28.src.push(fileURL);
              }
            });
          }
        }
      }, {
        key: "responseSet",
        set: function set(res) {
          this.response = res;
        }
      }]);

      return ShowResponseFileComponent;
    }();

    ShowResponseFileComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]
      }, {
        type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["DomSanitizer"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ShowResponseFileComponent.prototype, "responseSet", null);
    ShowResponseFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-show-response-file',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./show-response-file.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/show-response-file/show-response-file.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./show-response-file.component.scss */
      "./src/app/components/shared/show-response-file/show-response-file.component.scss"))["default"]]
    })], ShowResponseFileComponent);
    /***/
  },

  /***/
  "./src/app/components/shared/spinner/spinner.component.scss":
  /*!******************************************************************!*\
    !*** ./src/app/components/shared/spinner/spinner.component.scss ***!
    \******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSharedSpinnerSpinnerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "#main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  position: relative;\n}\n\n.spinner:before, .spinner:after {\n  content: \"\";\n  position: relative;\n  display: block;\n}\n\n.spinner:before {\n  -webkit-animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  width: 6em;\n  height: 6em;\n  background-color: #F8961E;\n}\n\n.spinner:after {\n  margin-top: 1em;\n  -webkit-animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  bottom: -0.5em;\n  height: 0.25em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n@-webkit-keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@-webkit-keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n\n@keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc3Bpbm5lci9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHNoYXJlZFxcc3Bpbm5lclxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FDQ0Y7O0FERUE7RUFDRSxrQkFBQTtBQ0NGOztBRENBO0VBQ0UsV0FBQTtFQUNBLGtCQUFBO0VBQ0EsY0FBQTtBQ0VGOztBREFBO0VBQ0UsNkVBQUE7VUFBQSxxRUFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EseUJBQUE7QUNHRjs7QUREQTtFQUNFLGVBQUE7RUFDQSw0RUFBQTtVQUFBLG9FQUFBO0VBQ0EsY0FBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLG9DQUFBO0FDSUY7O0FEREE7RUFDRTtJQUNFLGtCQUFBO0lBQ0Esb0NBQUE7RUNJRjtFREZBO0lBQ0Usa0NBQUE7RUNJRjtBQUNGOztBRFhBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG9DQUFBO0VDSUY7RURGQTtJQUNFLGtDQUFBO0VDSUY7QUFDRjs7QURGQTtFQUNFO0lBQ0UscUJBQUE7SUFDQSxvQ0FBQTtFQ0lGO0FBQ0Y7O0FEUkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esb0NBQUE7RUNJRjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zaGFyZWQvc3Bpbm5lci9zcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlLCAuc3Bpbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlIHtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NjFFO1xyXG59XHJcbi5zcGlubmVyOmFmdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYW5pbWF0aW9uOiBzaGFkb3cgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgYm90dG9tOiAtLjVlbTtcclxuICBoZWlnaHQ6IC4yNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsMC4yKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICA1MCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDcyMGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93IHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLDAuMSk7XHJcbiAgfVxyXG59XHJcbiIsIiNtYWluIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDUwJTtcbiAgbGVmdDogNTAlO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAtNTAlKTtcbn1cblxuLnNwaW5uZXIge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5cbi5zcGlubmVyOmJlZm9yZSwgLnNwaW5uZXI6YWZ0ZXIge1xuICBjb250ZW50OiBcIlwiO1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uc3Bpbm5lcjpiZWZvcmUge1xuICBhbmltYXRpb246IHNwaW5uZXIgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XG4gIHdpZHRoOiA2ZW07XG4gIGhlaWdodDogNmVtO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NjFFO1xufVxuXG4uc3Bpbm5lcjphZnRlciB7XG4gIG1hcmdpbi10b3A6IDFlbTtcbiAgYW5pbWF0aW9uOiBzaGFkb3cgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XG4gIGJvdHRvbTogLTAuNWVtO1xuICBoZWlnaHQ6IDAuMjVlbTtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuMik7XG59XG5cbkBrZXlmcmFtZXMgc3Bpbm5lciB7XG4gIDUwJSB7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIHRyYW5zZm9ybTogc2NhbGUoMC41KSByb3RhdGUoMzYwZGVnKTtcbiAgfVxuICAxMDAlIHtcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDEpIHJvdGF0ZSg3MjBkZWcpO1xuICB9XG59XG5Aa2V5ZnJhbWVzIHNoYWRvdyB7XG4gIDUwJSB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xuICAgIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMCwgMCwgMCwgMC4xKTtcbiAgfVxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/shared/spinner/spinner.component.ts":
  /*!****************************************************************!*\
    !*** ./src/app/components/shared/spinner/spinner.component.ts ***!
    \****************************************************************/

  /*! exports provided: SpinnerComponent */

  /***/
  function srcAppComponentsSharedSpinnerSpinnerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
      return SpinnerComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SpinnerComponent = /*#__PURE__*/function () {
      function SpinnerComponent() {
        _classCallCheck(this, SpinnerComponent);
      }

      _createClass(SpinnerComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SpinnerComponent;
    }();

    SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-spinner',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/shared/spinner/spinner.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./spinner.component.scss */
      "./src/app/components/shared/spinner/spinner.component.scss"))["default"]]
    })], SpinnerComponent);
    /***/
  },

  /***/
  "./src/app/components/teacher/main-teacher/main-teacher.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/teacher/main-teacher/main-teacher.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTeacherMainTeacherMainTeacherComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.singleClassrom {\n  background: var(--submit);\n  cursor: pointer;\n  border-radius: var(--rad);\n  transition: 0.5s all ease;\n}\n\n.singleClassrom:hover {\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n}\n\n.classromDiv {\n  background: #577590;\n  border-radius: var(--rad);\n  margin-top: 40px;\n}\n\n.rest {\n  min-height: 100%;\n  padding-top: 150px;\n  margin-top: -150px;\n  background: #E0FBFC;\n}\n\n.showCode {\n  padding: 5px;\n  margin: 0;\n  cursor: pointer;\n  background: var(--warn);\n  border-radius: var(--rad);\n  transition: all 0.3s;\n}\n\n.showCode:hover {\n  background: #ff8e00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL21haW4tdGVhY2hlci9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG1haW4tdGVhY2hlclxcbWFpbi10ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbWFpbi10ZWFjaGVyL21haW4tdGVhY2hlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNDRjs7QURDQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0VGO0FBQ0Y7O0FEQUE7RUFFRSx5QkFBQTtFQUNBLGVBQUE7RUFDQSx5QkFBQTtFQUNBLHlCQUFBO0FDQ0Y7O0FEQ0E7RUFHRSxnREFBQTtBQ0VGOztBREFBO0VBRUUsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGdCQUFBO0FDRUY7O0FEQ0E7RUFDRSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtBQ0VGOztBREFBO0VBQ0UsWUFBQTtFQUNBLFNBQUE7RUFDQSxlQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLG9CQUFBO0FDR0Y7O0FEREE7RUFDRSxtQkFBQTtBQ0lGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL21haW4tdGVhY2hlci9tYWluLXRlYWNoZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdiB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XHJcbiAgcGFkZGluZzoyNXB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA2NSUsIDUwJSAxMDAlLCAwIDY1JSwgMCAwKTtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5tYWluRGl2IHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAwKSAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc2luZ2xlQ2xhc3Nyb20ge1xyXG5cclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbn1cclxuLnNpbmdsZUNsYXNzcm9tOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLmNsYXNzcm9tRGl2IHtcclxuXHJcbiAgYmFja2dyb3VuZDogIzU3NzU5MDtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIG1hcmdpbi10b3A6NDBweDtcclxufVxyXG5cclxuLnJlc3Qge1xyXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIG1hcmdpbi10b3A6IC0xNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xyXG59XHJcbi5zaG93Q29kZSB7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbjogMDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxufVxyXG4uc2hvd0NvZGU6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICNmZjhlMDA7XHJcbn1cclxuIiwiLm1haW5EaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMjVweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1haW5EaXYge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwIDc1JSwgMCAwKSAhaW1wb3J0YW50O1xuICB9XG59XG4uc2luZ2xlQ2xhc3Nyb20ge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XG59XG5cbi5zaW5nbGVDbGFzc3JvbTpob3ZlciB7XG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLCAwLCAwLCAwLjc1KTtcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG4uY2xhc3Nyb21EaXYge1xuICBiYWNrZ3JvdW5kOiAjNTc3NTkwO1xuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xuICBtYXJnaW4tdG9wOiA0MHB4O1xufVxuXG4ucmVzdCB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIHBhZGRpbmctdG9wOiAxNTBweDtcbiAgbWFyZ2luLXRvcDogLTE1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xufVxuXG4uc2hvd0NvZGUge1xuICBwYWRkaW5nOiA1cHg7XG4gIG1hcmdpbjogMDtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XG59XG5cbi5zaG93Q29kZTpob3ZlciB7XG4gIGJhY2tncm91bmQ6ICNmZjhlMDA7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/teacher/main-teacher/main-teacher.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/teacher/main-teacher/main-teacher.component.ts ***!
    \***************************************************************************/

  /*! exports provided: MainTeacherComponent */

  /***/
  function srcAppComponentsTeacherMainTeacherMainTeacherComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainTeacherComponent", function () {
      return MainTeacherComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/shared/shared.service */
    "./src/app/core/shared/shared.service.ts");

    var MainTeacherComponent = /*#__PURE__*/function () {
      function MainTeacherComponent(main, shared) {
        _classCallCheck(this, MainTeacherComponent);

        this.main = main;
        this.shared = shared;
      }

      _createClass(MainTeacherComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "showCode",
        value: function showCode(e, id) {
          e.stopPropagation();
          e.preventDefault();
          this.shared.openCodeModal(id);
        }
      }]);

      return MainTeacherComponent;
    }();

    MainTeacherComponent.ctorParameters = function () {
      return [{
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_2__["MainService"]
      }, {
        type: _core_shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }];
    };

    MainTeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-main-teacher',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./main-teacher.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/main-teacher/main-teacher.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./main-teacher.component.scss */
      "./src/app/components/teacher/main-teacher/main-teacher.component.scss"))["default"]]
    })], MainTeacherComponent);
    /***/
  },

  /***/
  "./src/app/components/teacher/new-classrom/new-classrom.component.scss":
  /*!*****************************************************************************!*\
    !*** ./src/app/components/teacher/new-classrom/new-classrom.component.scss ***!
    \*****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTeacherNewClassromNewClassromComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".containerMain {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n}\n\n.containerInfo {\n  margin-top: -400px;\n  margin-bottom: 50px;\n  background: var(--submit);\n  padding-top: 400px;\n  padding-bottom: 25px;\n  border-bottom-left-radius: var(--rad);\n  border-bottom-right-radius: var(--rad);\n}\n\n.containerDelete {\n  margin-top: -100px;\n  margin-bottom: 50px;\n  background: var(--main);\n  padding-top: 100px;\n  padding-bottom: 25px;\n}\n\n@media (max-width: 992px) {\n  .containerMain {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0% 90%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0% 90%, 0 0) !important;\n  }\n}\n\n.form {\n  padding: 10px;\n  background: white;\n}\n\n.mainDiv {\n  background: #E0FBFC;\n}\n\n.iconsP {\n  padding: 20px;\n  font-size: 27px;\n}\n\n.red {\n  color: var(--warn) !important;\n}\n\n.redBg {\n  background: var(--warn) !important;\n}\n\n.deleteSubH1 {\n  margin-top: 30px;\n  border-top: 2px solid black;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL25ldy1jbGFzc3JvbS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHRlYWNoZXJcXG5ldy1jbGFzc3JvbVxcbmV3LWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3RlYWNoZXIvbmV3LWNsYXNzcm9tL25ldy1jbGFzc3JvbS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGdCQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLDRCQUFBO0VBQ0EsMkVBQUE7VUFBQSxtRUFBQTtBQ0NGOztBRENBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtFQUNBLHFDQUFBO0VBQ0Esc0NBQUE7QUNFRjs7QURDQTtFQUNFLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSx1QkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0Usc0ZBQUE7WUFBQSw4RUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7QUNFRjs7QURBQTtFQUNFLG1CQUFBO0FDR0Y7O0FEREE7RUFDRSxhQUFBO0VBQ0EsZUFBQTtBQ0lGOztBREZBO0VBQ0UsNkJBQUE7QUNLRjs7QURIQTtFQUNFLGtDQUFBO0FDTUY7O0FESkE7RUFDRSxnQkFBQTtFQUNBLDJCQUFBO0VBQ0EsYUFBQTtBQ09GIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL25ldy1jbGFzc3JvbS9uZXctY2xhc3Nyb20uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29udGFpbmVyTWFpbiB7XHJcbiAgbWFyZ2luLXRvcDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIHBhZGRpbmc6MjBweCAyMHB4IDcwcHggMjBweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCUgNzUlLCAwIDApO1xyXG59XHJcbi5jb250YWluZXJJbmZvIHtcclxuICBtYXJnaW4tdG9wOiAtNDAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG4gIHBhZGRpbmctdG9wOiA0MDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAgdmFyKC0tcmFkKTtcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogIHZhcigtLXJhZCk7XHJcblxyXG59XHJcbi5jb250YWluZXJEZWxldGUge1xyXG4gIG1hcmdpbi10b3A6IC0xMDBweDtcclxuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmctdG9wOiAxMDBweDtcclxuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb250YWluZXJNYWluIHtcclxuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA5MCUsIDUwJSAxMDAlLCAwJSA5MCUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG59XHJcbi5mb3JtIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIGJhY2tncm91bmQ6IHdoaXRlO1xyXG59XHJcbi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xyXG59XHJcbi5pY29uc1Age1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgZm9udC1zaXplOiAyN3B4O1xyXG59XHJcbi5yZWQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xyXG59XHJcbi5yZWRCZyB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2FybikgIWltcG9ydGFudDtcclxufVxyXG4uZGVsZXRlU3ViSDEge1xyXG4gIG1hcmdpbi10b3A6IDMwcHg7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuIiwiLmNvbnRhaW5lck1haW4ge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcbiAgcGFkZGluZzogMjBweCAyMHB4IDcwcHggMjBweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcbn1cblxuLmNvbnRhaW5lckluZm8ge1xuICBtYXJnaW4tdG9wOiAtNDAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdCk7XG4gIHBhZGRpbmctdG9wOiA0MDBweDtcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiB2YXIoLS1yYWQpO1xufVxuXG4uY29udGFpbmVyRGVsZXRlIHtcbiAgbWFyZ2luLXRvcDogLTEwMHB4O1xuICBtYXJnaW4tYm90dG9tOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZy10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWJvdHRvbTogMjVweDtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDk5MnB4KSB7XG4gIC5jb250YWluZXJNYWluIHtcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgOTAlLCA1MCUgMTAwJSwgMCUgOTAlLCAwIDApICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5mb3JtIHtcbiAgcGFkZGluZzogMTBweDtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG59XG5cbi5tYWluRGl2IHtcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcbn1cblxuLmljb25zUCB7XG4gIHBhZGRpbmc6IDIwcHg7XG4gIGZvbnQtc2l6ZTogMjdweDtcbn1cblxuLnJlZCB7XG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xufVxuXG4ucmVkQmcge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xufVxuXG4uZGVsZXRlU3ViSDEge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBib3JkZXItdG9wOiAycHggc29saWQgYmxhY2s7XG4gIHBhZGRpbmc6IDIwcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/teacher/new-classrom/new-classrom.component.ts":
  /*!***************************************************************************!*\
    !*** ./src/app/components/teacher/new-classrom/new-classrom.component.ts ***!
    \***************************************************************************/

  /*! exports provided: NewClassromComponent */

  /***/
  function srcAppComponentsTeacherNewClassromNewClassromComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewClassromComponent", function () {
      return NewClassromComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../../core/classService/class.service */
    "./src/app/core/classService/class.service.ts");
    /* harmony import */


    var _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../core/main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var NewClassromComponent = /*#__PURE__*/function () {
      function NewClassromComponent(classService, toastr, main) {
        _classCallCheck(this, NewClassromComponent);

        this.classService = classService;
        this.toastr = toastr;
        this.main = main;
        this.submittedFirstPart = false;
        this.submittedSecondPart = false;
        this.addClassromForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          className: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]),
          schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required])
        });
        this.addSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          userToAddEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].email]),
          classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(22)]),
          subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
        this.deleteSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormGroup"]({
          classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(22)]),
          subjectID: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required)
        });
      }

      _createClass(NewClassromComponent, [{
        key: "addNewClass",
        value: function addNewClass() {
          this.submittedFirstPart = true;

          if (this.addClassromForm.valid) {
            this.classService.addNewClass(this.addClassromForm.value);
          }
        }
      }, {
        key: "addNewSubject",
        value: function addNewSubject() {
          this.submittedSecondPart = true;

          if (this.addSubjectForm.valid) {
            this.classService.addNewSubject(this.addSubjectForm.value);
          }
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.deleteSubjectForm.get('classID').valueChanges.subscribe(function (val) {
            _this29.classrom = _this29.main.classrom.find(function (v) {
              return v.id === val;
            });
          });
        }
      }, {
        key: "deleteSubject",
        value: function deleteSubject() {
          if (this.deleteSubjectForm.valid) {
            this.classService.deleteSubject(this.deleteSubjectForm.value);
          }
        }
      }]);

      return NewClassromComponent;
    }();

    NewClassromComponent.ctorParameters = function () {
      return [{
        type: _core_classService_class_service__WEBPACK_IMPORTED_MODULE_3__["ClassService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }, {
        type: _core_main_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
      }];
    };

    NewClassromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-new-classrom',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./new-classrom.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/new-classrom/new-classrom.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./new-classrom.component.scss */
      "./src/app/components/teacher/new-classrom/new-classrom.component.scss"))["default"]]
    })], NewClassromComponent);
    /***/
  },

  /***/
  "./src/app/components/welcome-page/welcome/welcome.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/welcome-page/welcome/welcome.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsWelcomePageWelcomeWelcomeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".main {\n  padding: 0;\n  margin: 0;\n}\n\n.mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.iconsDiv {\n  margin: 50px 0;\n}\n\n.iconsDiv2 {\n  margin: 0;\n}\n\n.iconsP {\n  font-size: 20px;\n}\n\n.singleIconsDiv {\n  padding: 10px;\n}\n\n.icon {\n  font-size: 70px;\n}\n\n.descriptionText {\n  background: #DADDE5;\n  padding: 40px;\n}\n\n.descriptionImg {\n  min-height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0;\n  height: 296px;\n}\n\n@media (min-width: 992px) {\n  .descriptionImg {\n    height: 100% !important;\n  }\n\n  .descriptionText {\n    padding: 100px !important;\n  }\n}\n\n.descriptionImg1 {\n  background-image: url('studingfromhome1.jpg');\n}\n\n.descriptionImg2 {\n  background-image: url('studingfromhome2.jpg');\n}\n\n.descriptionImg3 {\n  background-image: url('studingfromhome3.jpg');\n}\n\n.buyDiv {\n  padding: 50px;\n  background: #EEC643;\n  margin: 0;\n}\n\n.app-paypal {\n  color: white;\n  border-radius: 10px;\n  padding: 20px;\n  background: #2F405C;\n  width: 80%;\n}\n\n.descriptionRow {\n  margin: 0;\n  padding: 0;\n}\n\n.personIMG {\n  width: 300px !important;\n  height: 300px !important;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.descriptionDiv {\n  margin-bottom: 10px;\n}\n\n.footer {\n  background: var(--main);\n  width: 100%;\n  min-height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS9FOlxcSG9tZS1TY2hvb2wvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHdlbGNvbWUtcGFnZVxcd2VsY29tZVxcd2VsY29tZS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lLXBhZ2Uvd2VsY29tZS93ZWxjb21lLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsVUFBQTtFQUNBLFNBQUE7QUNDRjs7QURDQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUNFRjs7QURBQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQ0dGO0FBQ0Y7O0FEQUE7RUFDRSxjQUFBO0FDRUY7O0FEQUE7RUFDRSxTQUFBO0FDR0Y7O0FEREE7RUFDRSxlQUFBO0FDSUY7O0FERkE7RUFDRSxhQUFBO0FDS0Y7O0FESEE7RUFDRSxlQUFBO0FDTUY7O0FESkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUNPRjs7QURMQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUNRRjs7QUROQTtFQUNFO0lBQ0UsdUJBQUE7RUNTRjs7RURQQTtJQUNFLHlCQUFBO0VDVUY7QUFDRjs7QURSQTtFQUNFLDZDQUFBO0FDVUY7O0FEUkE7RUFDRSw2Q0FBQTtBQ1dGOztBRFRBO0VBQ0UsNkNBQUE7QUNZRjs7QURWQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUNhRjs7QURYQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUNjRjs7QURaQTtFQUNFLFNBQUE7RUFDQSxVQUFBO0FDZUY7O0FEYkE7RUFDRSx1QkFBQTtFQUNBLHdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBQ2dCRjs7QURkQTtFQUNFLG1CQUFBO0FDaUJGOztBRGZBO0VBQ0UsdUJBQUE7RUFFQSxXQUFBO0VBQ0EsZ0JBQUE7QUNpQkYiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUtcGFnZS93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgODUlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuXHJcbi5pY29uc0RpdiB7XHJcbiAgbWFyZ2luOiA1MHB4IDA7XHJcbn1cclxuLmljb25zRGl2MiB7XHJcbiAgbWFyZ2luOiAwO1xyXG59XHJcbi5pY29uc1Age1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG4uc2luZ2xlSWNvbnNEaXYge1xyXG4gIHBhZGRpbmc6MTBweDtcclxufVxyXG4uaWNvbiB7XHJcbiAgZm9udC1zaXplOiA3MHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvblRleHQge1xyXG4gIGJhY2tncm91bmQ6ICNEQURERTU7XHJcbiAgcGFkZGluZzogNDBweDtcclxufVxyXG4uZGVzY3JpcHRpb25JbWcge1xyXG4gIG1pbi1oZWlnaHQ6IDMwMHB4O1xyXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcclxuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbiAgcGFkZGluZzogMDtcclxuICBoZWlnaHQ6IDI5NnB4O1xyXG59XHJcbkBtZWRpYShtaW4td2lkdGg6IDk5MnB4KSB7XHJcbiAgLmRlc2NyaXB0aW9uSW1nIHtcclxuICAgIGhlaWdodDogMTAwJSAhaW1wb3J0YW50O1xyXG4gIH1cclxuICAuZGVzY3JpcHRpb25UZXh0IHtcclxuICAgIHBhZGRpbmc6IDEwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5kZXNjcmlwdGlvbkltZzEge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc3R1ZGluZ2Zyb21ob21lMS5qcGdcIik7XHJcbn1cclxuLmRlc2NyaXB0aW9uSW1nMiB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zdHVkaW5nZnJvbWhvbWUyLmpwZ1wiKTtcclxufVxyXG4uZGVzY3JpcHRpb25JbWczIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3N0dWRpbmdmcm9taG9tZTMuanBnXCIpO1xyXG59XHJcbi5idXlEaXYge1xyXG4gIHBhZGRpbmc6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogI0VFQzY0MztcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLmFwcC1wYXlwYWwge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgYmFja2dyb3VuZDogIzJGNDA1QztcclxuICB3aWR0aDogODAlO1xyXG59XHJcbi5kZXNjcmlwdGlvblJvdyB7XHJcbiAgbWFyZ2luOiAwO1xyXG4gIHBhZGRpbmc6IDA7XHJcbn1cclxuLnBlcnNvbklNRyB7XHJcbiAgd2lkdGg6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcbi5kZXNjcmlwdGlvbkRpdiB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxufVxyXG4uZm9vdGVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuXHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgbWluLWhlaWdodDogNjRweDtcclxufVxyXG4iLCIubWFpbiB7XG4gIHBhZGRpbmc6IDA7XG4gIG1hcmdpbjogMDtcbn1cblxuLm1haW5EaXYge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgcGFkZGluZzogMjVweDtcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcbiAgLm1haW5EaXYge1xuICAgIGNsaXAtcGF0aDogcG9seWdvbig1MCUgMCUsIDEwMCUgMCwgMTAwJSA4NSUsIDUwJSAxMDAlLCAwIDg1JSwgMCAwKSAhaW1wb3J0YW50O1xuICB9XG59XG4uaWNvbnNEaXYge1xuICBtYXJnaW46IDUwcHggMDtcbn1cblxuLmljb25zRGl2MiB7XG4gIG1hcmdpbjogMDtcbn1cblxuLmljb25zUCB7XG4gIGZvbnQtc2l6ZTogMjBweDtcbn1cblxuLnNpbmdsZUljb25zRGl2IHtcbiAgcGFkZGluZzogMTBweDtcbn1cblxuLmljb24ge1xuICBmb250LXNpemU6IDcwcHg7XG59XG5cbi5kZXNjcmlwdGlvblRleHQge1xuICBiYWNrZ3JvdW5kOiAjREFEREU1O1xuICBwYWRkaW5nOiA0MHB4O1xufVxuXG4uZGVzY3JpcHRpb25JbWcge1xuICBtaW4taGVpZ2h0OiAzMDBweDtcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xuICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xuICBwYWRkaW5nOiAwO1xuICBoZWlnaHQ6IDI5NnB4O1xufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogOTkycHgpIHtcbiAgLmRlc2NyaXB0aW9uSW1nIHtcbiAgICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcbiAgfVxuXG4gIC5kZXNjcmlwdGlvblRleHQge1xuICAgIHBhZGRpbmc6IDEwMHB4ICFpbXBvcnRhbnQ7XG4gIH1cbn1cbi5kZXNjcmlwdGlvbkltZzEge1xuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3N0dWRpbmdmcm9taG9tZTEuanBnXCIpO1xufVxuXG4uZGVzY3JpcHRpb25JbWcyIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zdHVkaW5nZnJvbWhvbWUyLmpwZ1wiKTtcbn1cblxuLmRlc2NyaXB0aW9uSW1nMyB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc3R1ZGluZ2Zyb21ob21lMy5qcGdcIik7XG59XG5cbi5idXlEaXYge1xuICBwYWRkaW5nOiA1MHB4O1xuICBiYWNrZ3JvdW5kOiAjRUVDNjQzO1xuICBtYXJnaW46IDA7XG59XG5cbi5hcHAtcGF5cGFsIHtcbiAgY29sb3I6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICBwYWRkaW5nOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiAjMkY0MDVDO1xuICB3aWR0aDogODAlO1xufVxuXG4uZGVzY3JpcHRpb25Sb3cge1xuICBtYXJnaW46IDA7XG4gIHBhZGRpbmc6IDA7XG59XG5cbi5wZXJzb25JTUcge1xuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcbiAgaGVpZ2h0OiAzMDBweCAhaW1wb3J0YW50O1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5cbi5kZXNjcmlwdGlvbkRpdiB7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG59XG5cbi5mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1pbi1oZWlnaHQ6IDY0cHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/welcome-page/welcome/welcome.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/welcome-page/welcome/welcome.component.ts ***!
    \**********************************************************************/

  /*! exports provided: WelcomeComponent */

  /***/
  function srcAppComponentsWelcomePageWelcomeWelcomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
      return WelcomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var WelcomeComponent = /*#__PURE__*/function () {
      function WelcomeComponent() {
        _classCallCheck(this, WelcomeComponent);
      }

      _createClass(WelcomeComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return WelcomeComponent;
    }();

    WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-welcome',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/welcome-page/welcome/welcome.component.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./welcome.component.scss */
      "./src/app/components/welcome-page/welcome/welcome.component.scss"))["default"]]
    })], WelcomeComponent);
    /***/
  },

  /***/
  "./src/app/core/auth/auth.interceptor.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/auth/auth.interceptor.ts ***!
    \***********************************************/

  /*! exports provided: AuthInterceptor */

  /***/
  function srcAppCoreAuthAuthInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
      return AuthInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var AuthInterceptor = /*#__PURE__*/function () {
      function AuthInterceptor() {
        _classCallCheck(this, AuthInterceptor);
      }

      _createClass(AuthInterceptor, [{
        key: "intercept",
        value: function intercept(req, next) {
          var idToken = localStorage.getItem('homeschooltoken');

          if (idToken) {
            var cloned = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
          } else {
            return next.handle(req);
          }
        }
      }]);

      return AuthInterceptor;
    }();

    AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
    /***/
  },

  /***/
  "./src/app/core/chat-service/text-chat.service.ts":
  /*!********************************************************!*\
    !*** ./src/app/core/chat-service/text-chat.service.ts ***!
    \********************************************************/

  /*! exports provided: TextChatService */

  /***/
  function srcAppCoreChatServiceTextChatServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TextChatService", function () {
      return TextChatService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _main_main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../main/main.service */
    "./src/app/core/main/main.service.ts");
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! moment */
    "./node_modules/moment/moment.js");
    /* harmony import */


    var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

    var TextChatService = /*#__PURE__*/function () {
      function TextChatService(http, main, shared) {
        _classCallCheck(this, TextChatService);

        this.http = http;
        this.main = main;
        this.shared = shared;
        this.api = this.shared.apiText;
      }

      _createClass(TextChatService, [{
        key: "sendMessage",
        value: function sendMessage(messageObj) {
          return this.http.post(this.api + 'TextChat/sendMessage', messageObj).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
            v.sendTime = moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD HH:mm:ss');
            return v;
          }));
        }
      }, {
        key: "getLastMessages",
        value: function getLastMessages() {
          return this.http.get(this.api + "TextChat/getLastMessages/".concat(this.main.currentClassrom.id, "/").concat(this.main.currentSubject.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
            for (var i = 0; i < v.messages.length; i++) {
              v.messages[i].sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
            }

            return v;
          }));
        }
      }, {
        key: "getNewerMessages",
        value: function getNewerMessages(messageID) {
          return this.http.get(this.api + "TextChat/getNewerMessages/".concat(messageID, "/").concat(this.main.currentClassrom.id, "/").concat(this.main.currentSubject.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
            if (v.messages) {
              for (var i = 0; i < v.messages.length; i++) {
                v.messages[i].sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
              }

              return v;
            }
          }));
        }
      }, {
        key: "getOlderMessages",
        value: function getOlderMessages(messageID) {
          return this.http.get(this.api + "TextChat/getOlderMessages/".concat(messageID, "/").concat(this.main.currentClassrom.id, "/").concat(this.main.currentSubject.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
            for (var i = 0; i < v.messages.length; i++) {
              v.messages[i].sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(v.messages[i].sendTime).format('YYYY-MM-DD HH:mm:ss');
            }

            return v;
          }));
        }
      }]);

      return TextChatService;
    }();

    TextChatService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: _main_main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
      }, {
        type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
      }];
    };

    TextChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], TextChatService);
    /***/
  },

  /***/
  "./src/app/core/classService/class.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/core/classService/class.service.ts ***!
    \****************************************************/

  /*! exports provided: ClassService */

  /***/
  function srcAppCoreClassServiceClassServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ClassService", function () {
      return ClassService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _main_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../main/main.service */
    "./src/app/core/main/main.service.ts");

    var ClassService = /*#__PURE__*/function () {
      function ClassService(http, toastr, shared, main) {
        _classCallCheck(this, ClassService);

        this.http = http;
        this.toastr = toastr;
        this.shared = shared;
        this.main = main;
        this.api = this.shared.api;
      }

      _createClass(ClassService, [{
        key: "addNewClass",
        value: function addNewClass(classroom) {
          var _this30 = this;

          this.http.post(this.api + 'Class/create', classroom).subscribe(function (res) {
            _this30.main.classrom.push(res);

            _this30.shared.openCodeModal(res.id);

            _this30.toastr.success('Pomyślnie utworzono nową klasę.', 'Udało się!');
          });
        }
      }, {
        key: "addNewMark",
        value: function addNewMark(mark) {
          return this.http.put(this.api + 'Mark', mark);
        }
      }, {
        key: "addUserToClass",
        value: function addUserToClass(userToAdd) {
          return this.http.put(this.api + 'Class/addMember', userToAdd);
        }
      }, {
        key: "addNewHomework",
        value: function addNewHomework(homework) {
          return this.http.post(this.api + 'Homework/createHomework', homework);
        }
      }, {
        key: "returnFileFromHomework",
        value: function returnFileFromHomework(homworkData) {
          var httpOptions = {
            responseType: 'arraybuffer',
            observe: 'response'
          }; // @ts-ignore

          return this.http.post("".concat(this.shared.apiFiles, "HomeworkFiles/returnFileFromHomework"), homworkData, httpOptions);
        }
      }, {
        key: "returnClassromNames",
        value: function returnClassromNames(classId) {
          return this.http.post("".concat(this.shared.apiNames, "ReturnNames"), classId);
        }
      }, {
        key: "returnFileFromResponse",
        value: function returnFileFromResponse(responseData) {
          var httpOptions = {
            responseType: 'arraybuffer',
            observe: 'response'
          }; // @ts-ignore

          return this.http.post("".concat(this.shared.apiFiles, "HomeworkFiles/returnFileFromResponse"), responseData, httpOptions);
        }
      }, {
        key: "addNewFileToResponse",
        value: function addNewFileToResponse(classID, homeworkID, fileToSend) {
          return this.http.post("".concat(this.shared.apiFiles, "HomeworkFiles/uploadToResponse/").concat(classID, "/").concat(homeworkID), fileToSend, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addNewFileToHomework",
        value: function addNewFileToHomework(classID, subjectID, fileToSend) {
          return this.http.post("".concat(this.shared.apiFiles, "HomeworkFiles/uploadToHomework/").concat(classID, "/").concat(subjectID), fileToSend, {
            reportProgress: true,
            observe: 'events'
          });
        }
      }, {
        key: "addNewResponse",
        value: function addNewResponse(response) {
          return this.http.post(this.api + 'Homework/createResponse', response);
        }
      }, {
        key: "addNewSubject",
        value: function addNewSubject(subject) {
          var _this31 = this;

          this.http.post(this.api + 'Subject/create', subject).subscribe(function (res) {
            _this31.main.classrom.filter(function (value) {
              return value.id === subject.classID;
            }).map(function (val) {
              return val.subjects.push(res.subject);
            });

            _this31.toastr.success('Pomyślnie dodano nauczyciela do klasy.', 'Udało się!');
          });
        }
      }, {
        key: "deleteHomework",
        value: function deleteHomework(homework) {
          var _this32 = this;

          return this.http.put(this.api + 'Homework/deleteHomework', homework).subscribe(function (res) {
            _this32.toastr.success('Usunięto zadanie.', 'Udało się!');
          });
        }
      }, {
        key: "deleteClassMember",
        value: function deleteClassMember(member) {
          var _this33 = this;

          return this.http.put(this.api + 'Class/deleteMember', member).subscribe(function (res) {
            _this33.toastr.success('Usunięto użytkownika.', 'Udało się!');
          });
        }
      }, {
        key: "showClassromMembers",
        value: function showClassromMembers(classID) {
          return this.http.post(this.shared.apiNames + 'ReturnNames', classID);
        }
      }, {
        key: "deleteSubject",
        value: function deleteSubject(subject) {
          var _this34 = this;

          return this.http.put(this.api + 'Class/deleteSubject', subject).subscribe(function (res) {
            _this34.toastr.success('Usunięto zadanie.', 'Udało się!');
          });
        }
      }]);

      return ClassService;
    }();

    ClassService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
      }, {
        type: _main_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
      }];
    };

    ClassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ClassService);
    /***/
  },

  /***/
  "./src/app/core/interceptor/http-error.interceptor.ts":
  /*!************************************************************!*\
    !*** ./src/app/core/interceptor/http-error.interceptor.ts ***!
    \************************************************************/

  /*! exports provided: InterceptorSkipHeader, HttpErrorInterceptor */

  /***/
  function srcAppCoreInterceptorHttpErrorInterceptorTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InterceptorSkipHeader", function () {
      return InterceptorSkipHeader;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HttpErrorInterceptor", function () {
      return HttpErrorInterceptor;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var InterceptorSkipHeader = 'X-Skip-Interceptor';

    var HttpErrorInterceptor = /*#__PURE__*/function () {
      function HttpErrorInterceptor(toastr, shared) {
        _classCallCheck(this, HttpErrorInterceptor);

        this.toastr = toastr;
        this.shared = shared;
      }

      _createClass(HttpErrorInterceptor, [{
        key: "intercept",
        value: function intercept(request, next) {
          var _this35 = this;

          if (request.headers.has(InterceptorSkipHeader)) {
            var headers = request.headers["delete"](InterceptorSkipHeader);
            return next.handle(request.clone({
              headers: headers
            }));
          }

          return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["catchError"])(function (error) {
            var errorTitle = '';
            var errorMessage = '';

            if (error.error) {
              errorTitle = error.error.err;
              errorMessage = error.error.desc;

              _this35.toastr.error(errorMessage, errorTitle);
            } else {
              errorTitle = "Kod b\u0142\u0119du: ".concat(error.status);
              errorMessage = "Wiadomo\u015B\u0107: ".concat(error.message);

              _this35.toastr.error(errorMessage, errorTitle);
            }

            return Object(rxjs__WEBPACK_IMPORTED_MODULE_1__["throwError"])(errorMessage);
          }));
        }
      }]);

      return HttpErrorInterceptor;
    }();
    /***/

  },

  /***/
  "./src/app/core/main/main.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/core/main/main.service.ts ***!
    \*******************************************/

  /*! exports provided: MainService */

  /***/
  function srcAppCoreMainMainServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MainService", function () {
      return MainService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../shared/shared.service */
    "./src/app/core/shared/shared.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
    /* harmony import */


    var _interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../interceptor/http-error.interceptor */
    "./src/app/core/interceptor/http-error.interceptor.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/__ivy_ngcc__/fesm2015/ngx-toastr.js");

    var headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set(_interceptor_http_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');

    var MainService = /*#__PURE__*/function () {
      function MainService(shared, http, router, toastr) {
        _classCallCheck(this, MainService);

        this.shared = shared;
        this.http = http;
        this.router = router;
        this.toastr = toastr;
        this.api = this.shared.api;
      }

      _createClass(MainService, [{
        key: "loginViaToken",
        value: function loginViaToken() {
          return this.http.get("".concat(this.api, "UserAuth/loginviatoken"), {
            headers: headers
          });
        }
      }, {
        key: "login",
        value: function login(user) {
          return this.http.post("".concat(this.api, "UserAuth/login"), user);
        }
      }, {
        key: "register",
        value: function register(user) {
          return this.http.post("".concat(this.api, "UserAuth/register"), user);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.removeItem('homeschooltoken');
          this.user = undefined;
          this.classrom = undefined;
          this.ifUserExists(); // this.toastr.success('Pomyślnie się wylogowałeś.', 'Udało się!');
        }
      }, {
        key: "tokenLogin",
        value: function tokenLogin() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var data;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    if (!localStorage.getItem('homeschooltoken')) {
                      _context2.next = 11;
                      break;
                    }

                    _context2.prev = 1;
                    _context2.next = 4;
                    return this.loginViaToken().toPromise();

                  case 4:
                    data = _context2.sent;
                    this.user = data.userToReturn;
                    this.classrom = data.classes;
                    _context2.next = 11;
                    break;

                  case 9:
                    _context2.prev = 9;
                    _context2.t0 = _context2["catch"](1);

                  case 11:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this, [[1, 9]]);
          }));
        }
      }, {
        key: "ifUserExists",
        value: function ifUserExists() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {
            return regeneratorRuntime.wrap(function _callee3$(_context3) {
              while (1) {
                switch (_context3.prev = _context3.next) {
                  case 0:
                    _context3.next = 2;
                    return this.tokenLogin();

                  case 2:
                    this.shared.loading = false;

                    if (!this.user) {
                      this.router.navigateByUrl('/');
                    } else if (this.user.userRole === 0) {
                      this.router.navigateByUrl('student');
                    } else if (this.user.userRole === 1) {
                      this.router.navigateByUrl('123');
                    }

                    console.log(this.user);
                    console.log(this.classrom);

                  case 6:
                  case "end":
                    return _context3.stop();
                }
              }
            }, _callee3, this);
          }));
        }
      }]);

      return MainService;
    }();

    MainService.ctorParameters = function () {
      return [{
        type: _shared_shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
      }, {
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_6__["ToastrService"]
      }];
    };

    MainService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], MainService);
    /***/
  },

  /***/
  "./src/app/core/shared/shared.service.ts":
  /*!***********************************************!*\
    !*** ./src/app/core/shared/shared.service.ts ***!
    \***********************************************/

  /*! exports provided: SharedService */

  /***/
  function srcAppCoreSharedSharedServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharedService", function () {
      return SharedService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");

    var SharedService = /*#__PURE__*/function () {
      function SharedService() {
        _classCallCheck(this, SharedService);

        this.openLogin = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openRegister = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openCode = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMembers = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.openMarksList = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.switchHomework = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.loading = true;
        this.openHomework = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.api = 'https://homeschool-api.azurewebsites.net/api/';
        this.apiFiles = 'https://filestorage-api.azurewebsites.net/api/';
        this.apiNames = 'https://returnusernamesapi.azurewebsites.net/api/';
        this.apiText = 'https://textchatapi.azurewebsites.net/api/';
      }

      _createClass(SharedService, [{
        key: "openLoginModal",
        value: function openLoginModal() {
          this.openLogin.emit();
        }
      }, {
        key: "switchHomeworkEmit",
        value: function switchHomeworkEmit(res) {
          this.switchHomework.emit(res);
        }
      }, {
        key: "openMembersModal",
        value: function openMembersModal(res) {
          this.openMembers.emit(res);
        }
      }, {
        key: "openMarksListModal",
        value: function openMarksListModal(res) {
          this.openMarksList.emit(res);
        }
      }, {
        key: "openHomeworkModal",
        value: function openHomeworkModal(res) {
          this.openHomework.emit(res);
        }
      }, {
        key: "openCodeModal",
        value: function openCodeModal(code) {
          this.openCode.emit(code);
        }
      }, {
        key: "openRegisterModal",
        value: function openRegisterModal() {
          this.openRegister.emit();
        }
      }]);

      return SharedService;
    }();

    SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SharedService);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! E:\Home-School\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map