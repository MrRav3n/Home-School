(function () {
  function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it["return"] != null) it["return"](); } finally { if (didErr) throw err; } } }; }

  function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

  function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
    /***/
    "+YUm":
    /*!**********************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/add-homework-response/add-homework-response.component.html ***!
      \**********************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function YUm(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"homeworkResponseForm\" class=\"row justify-content-around p-md-3 p-0 m-0\">\n  <div class=\"form-group col-12\">\n    <label for=\"exampleFormControlTextarea1\"></label>\n    <textarea class=\"form-control\" id=\"exampleFormControlTextarea1\" rows=\"4\" formControlName=\"description\" placeholder=\"Treść odpowiedzi\"></textarea>\n  </div>\n  <div class=\"form-group col-12 row p-0 justify-content-center\">\n    <button class=\"formBtn\" (click)=\"addLink()\">Dodaj link</button>\n    <label>\n      <input *ngFor=\"let iter of linksIterator; let i = index\" type=\"text\"  class=\"form-control col-12 mt-2 mb-2\"  [(ngModel)]=\"linkHrefs[i]\" [ngModelOptions]=\"{standalone: true}\" (ngModelChange)=\"this.show(i)\">\n    </label>\n  </div>\n  <div class=\"col-12 row justify-content-center m-0\">\n    <div class=\"custom-file col-12\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\">\n      <label class=\"custom-file-label\" for=\"customFile\">Dołącz plik do zadania</label>\n    </div>\n\n    <div class=\"col-12 mt-3 p-0\" *ngIf=\"files\">\n      <div class=\"progress mt-2 mr-0 ml-0\" *ngFor=\"let file of files\" >\n        <div class=\"progress-bar\" role=\"progressbar\"\n             [style]=\"{'width': file.progress + '%'}\"\n             [ngClass]=\"{'green': file.finished}\"\n             aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">{{file.name}}</div>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"formBtn col-md-4 col-8 mb-2 mb-md-0\" (click)=\"addNewResponse()\">Dodaj</button>\n</form>\n";
      /***/
    },

    /***/
    "+tdT":
    /*!**********************************************************************!*\
      !*** ./src/app/components/static-pages/contact/contact.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ContactComponent */

    /***/
    function tdT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ContactComponent", function () {
        return ContactComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./contact.component.html */
      "/0b7");
      /* harmony import */


      var _contact_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./contact.component.scss */
      "Kdbi");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var ContactComponent = function ContactComponent() {
        _classCallCheck(this, ContactComponent);
      };

      ContactComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-contact',
        template: _raw_loader_contact_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_contact_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ContactComponent);
      /***/
    },

    /***/
    "+wC0":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/static-pages/welcome/welcome.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function wC0(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"main h-100\">\n  <div class=\"text-center mainDiv\">\n    <h1 class=\"fontBiggest\">Home-School</h1>\n    <h2 class=\"fontBigger mb-5\">spróbuj nauki nie wychodząc z domu</h2>\n  </div>\n  <div class=\"text-center iconsDiv\">\n\n    <div class=\"row justify-content-around iconsDiv2 m-md-5 m-0\">\n      <div class=\"col-12 col-md-3 p-5 p-md-0 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-child\"></i>\n        </div>\n        <h1 class=\"fontMedium\">Tylko ty</h1>\n        <p class=\"fontNormal\">\n          Sam narzucasz sobie kiedy, gdzie i jak będziesz pracował. Nikt cię nie ograniczna.\n        </p>\n      </div>\n      <div class=\"col-12 col-md-3 p-5 p-md-0 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fab fa-chromecast\"></i>\n        </div>\n        <h1 class=\"fontMedium\">Nowocześność</h1>\n        <p class=\"fontNormal\">\n          Świat ciągle idzie do przodu, czas żeby sposób w jaki się uczymy też się zmieniał.\n        </p>\n      </div>\n      <div class=\"col-md-3 p-5 p-md-0 col-12 singleIconsDiv\">\n        <div class=\"icon\">\n          <i class=\"fas fa-graduation-cap\"></i>\n        </div>\n        <h1 class=\"fontMedium\">Wygoda</h1>\n        <p class=\"fontNormal\">\n          Home-School pozwala na łatwe, szybkie i proste dodawanie i rozwiązywanie zadań. Nauka tutaj jest po\n          prostu przyjemna.\n        </p>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"descriptionDiv\">\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <div class=\"fontMedium\">Ułatwienie pracy dla nauczycieli</div>\n        <p class=\"fontNormal\">Wysyłanie zadań oraz oczekiwanie na odpowiedź zawsze były problemem.<br>Od dziś możesz się z tym pożegnać! Dodawaj zadania, sprawdzaj je i oceniaj przy użyciu kilku kliknięć.</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg2 img-fluid\"></div>\n      </div>\n    </div>\n\n    <div class=\"flex-column flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg1 img-fluid\"></div>\n      </div>\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <div class=\"fontMedium\">Pracuj wydajnie</div>\n        <p class=\"fontNormal\">Już nie musisz się trzymać planu lekcji. Ucz się wtedy kiedy masz na to ochotę.<br> Wykorzystuj zastrzyki motywacji, żeby szybko i precyzyjnie rozwiązywać zadania. Home-School daje możliwość nauki o każdej porze. </p>\n      </div>\n    </div>\n\n    <div class=\"flex-column-reverse flex-lg-row d-flex descriptionRow\">\n      <div class=\"col-lg-6 col-12 descriptionText\">\n        <div class=\"fontMedium\">Wszystko w jednym miejscu</div>\n        <p class=\"fontNormal\">Nie musisz już używać wielu programów do nauki jednego przedmiotu. Home-School pozwala na robienie tego wszystkiego czego oczekują nauczyciele od platformu e-lerningowej.</p>\n      </div>\n      <div class=\"col-lg-6 col-12 p-0\">\n        <div class=\"descriptionImg descriptionImg3 img-fluid\"></div>\n      </div>\n    </div>\n  </div>\n  <div class=\"teamDiv row justify-content-center p-0 text-center pb-5\">\n    <h1 class=\"mb-5 col-12 mt-5 fontBigger\">Twórcy</h1>\n    <div class=\"teamPersonDiv col-lg-6 col-12 row p-0 justify-content-center mb-5 mb-md-0\">\n      <img src=\"../../../../assets/img/dawid.jpg\" class=\"img-fluid personIMG\" alt=\"Responsive image\">\n      <div class=\"col-12 pt-2 pb-2 fontMedium\">Dawid Kruk</div>\n      <p class=\"iconsP fontNormal\">Frontend developer</p>\n    </div>\n    <div class=\"teamPersonDiv col-lg-6 col-12 flex-column justify-content-center\">\n      <img src=\"../../../../assets/img/majki.png\" class=\"img-fluid personIMG\" alt=\"Responsive image\">\n      <div class=\"col-12 pt-2 pb-2 fontMedium\">Michał Szymbara</div>\n      <p class=\"iconsP fontNormal\">Backend developer</p>\n    </div>\n  </div>\n  <div class=\"footer row justify-content-center pt-3 m-0\">\n    <h4 class=\"text-center\">Home-School &copy; wszelkie prawa zastrzeżone</h4>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "/0b7":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/static-pages/contact/contact.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function b7(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover flex-column d-flex flex-column\">\r\n  <div class=\"text-center mainDiv\">\r\n    <div class=\"fontBigger\">Kontakt</div>\r\n    <div class=\"mb-5 fontMedium\">Skontaktuj się z nami!</div>\r\n  </div>\r\n  <div class=\"rest h-100\">\r\n    <div class=\"row justify-content-center p-4\">\r\n      <div class=\"container mt-4 row contactDetails p-0 fontMedium\">\r\n        <h1 class=\"col-12 d-block contactUs fontMedium\">Dane kontaktowe</h1>\r\n        <div class=\"row infoRow col-12 p-0\">\r\n          <div class=\"col-12 singeInfo row m-0\">\r\n            <div class=\"col-md-6 col-12 text-center text-md-left \">Email:</div>\r\n            <div class=\"col-md-6 col-12 text-md-right text-center emailText\">dawidmrraven@gmail.com</div>\r\n            <div class=\"col-12 text-md-right text-center emailText\">szymbaramichal@gmail.com</div>\r\n          </div>\r\n          <div class=\"col-12 singeInfo row m-0\">\r\n            <div class=\"col-md-6 col-12 text-center text-md-left\">Telefon:</div>\r\n            <div class=\"col-md-6 col-12 text-md-right text-center\">+48 503683773</div>\r\n            <div class=\"col-12 text-md-right text-center\">+48 537329845</div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n";
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
      "zUnb");
      /***/
    },

    /***/
    "07sz":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework-response/homework-response.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function sz(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".infoSpan {\n  display: block;\n  float: left;\n  clear: both;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbWV3b3JrLXJlc3BvbnNlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsY0FBQTtFQUNBLFdBQUE7RUFDQSxXQUFBO0FBQ0YiLCJmaWxlIjoiaG9tZXdvcmstcmVzcG9uc2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaW5mb1NwYW4ge1xyXG4gIGRpc3BsYXk6IGJsb2NrO1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGNsZWFyOiBib3RoO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "0Pzb":
    /*!********************************************************************!*\
      !*** ./src/app/components/models/show-code/show-code.component.ts ***!
      \********************************************************************/

    /*! exports provided: ShowCodeComponent */

    /***/
    function Pzb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowCodeComponent", function () {
        return ShowCodeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_code_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-code.component.html */
      "fW3l");
      /* harmony import */


      var _show_code_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-code.component.scss */
      "T7ZU");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var ShowCodeComponent = /*#__PURE__*/function () {
        function ShowCodeComponent(shared, toastr) {
          _classCallCheck(this, ShowCodeComponent);

          this.shared = shared;
          this.toastr = toastr;
        }

        _createClass(ShowCodeComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this = this;

            this.shared.openCode.subscribe(function (res) {
              _this.code = res;

              _this.showCode.nativeElement.click();
            });
          }
        }, {
          key: "copyCodeFunc",
          value: function copyCodeFunc() {
            var _this2 = this;

            document.addEventListener('copy', function (e) {
              _this2.clipboardDataSet(e);
            });
            document.execCommand('copy');
            this.shared.openCodeModal('');
            this.toastr.success('Możesz go teraz łatwo wysłać swoim uczniom.', 'Skopiowano kod!');
          }
        }, {
          key: "clipboardDataSet",
          value: function clipboardDataSet(e) {
            e.clipboardData.setData('text/plain', this.codeCopy.nativeElement.textContent);
            e.preventDefault();
          }
        }]);

        return ShowCodeComponent;
      }();

      ShowCodeComponent.ctorParameters = function () {
        return [{
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }];
      };

      ShowCodeComponent.propDecorators = {
        showCode: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['showCode']
        }],
        codeCopy: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['codeCopy']
        }]
      };
      ShowCodeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-code',
        template: _raw_loader_show_code_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_code_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowCodeComponent);
      /***/
    },

    /***/
    "1BEf":
    /*!********************************************************************!*\
      !*** ./src/app/components/classrom/classrom/classrom.component.ts ***!
      \********************************************************************/

    /*! exports provided: ClassromComponent */

    /***/
    function BEf(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassromComponent", function () {
        return ClassromComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_classrom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./classrom.component.html */
      "J6ks");
      /* harmony import */


      var _classrom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./classrom.component.scss */
      "TwS8");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/services/class.service */
      "cNJU");

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
            var _this3 = this;

            this.route.paramMap.subscribe(function (params) {
              var _a;

              _this3.main.currentClassrom = _this3.main.classrom[+params.get('classID')];

              if (_this3.main.currentClassrom) {
                _this3.classrom = _this3.main.currentClassrom;
                _this3.subjects = (_a = _this3.classrom) === null || _a === void 0 ? void 0 : _a.subjects;
                _this3.main.isEducator = _this3.main.user.id === _this3.classrom.creatorID;
              }

              _this3.setCurrentSubject(0);
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
          key: "checkIfSubjectsExists",
          value: function checkIfSubjectsExists() {
            var _a;

            return !!((_a = this.main.currentClassrom) === null || _a === void 0 ? void 0 : _a.subjects[0]);
          }
        }, {
          key: "showMembers",
          value: function showMembers() {
            var _this4 = this;

            this.classService.showClassromMembers({
              classID: this.main.currentClassrom.id
            }).subscribe(function (res) {
              _this4.shared.openMembersModal(res);
            });
          }
        }, {
          key: "setCurrentSubject",
          value: function setCurrentSubject(i) {
            var _a;

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
                      this.main.currentSubject = (_a = this.main.currentClassrom) === null || _a === void 0 ? void 0 : _a.subjects[i];

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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"]
        }];
      };

      ClassromComponent.propDecorators = {
        subjectDiv: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['subject']
        }]
      };
      ClassromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-classrom',
        template: _raw_loader_classrom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_classrom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ClassromComponent);
      /***/
    },

    /***/
    "1lHB":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/static-pages/navbar/navbar.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function lHB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-lg navbar-dark\">\n  <a class=\"navbar-brand\" routerLink=\"mainPage\" *ngIf=\"this.main.user\" [routerLinkActive]=\"['activeBrand']\">Home-School</a>\n  <a class=\"navbar-brand\" routerLink=\"\" *ngIf=\"!this.main.user\">Home-School</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n          aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n<!--    noone-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"!this.main.user\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link loginNav\" (click)=\"this.shared.openLoginModal()\">Zaloguj się</a>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n    </ul>\n\n<!--    teacher-->\n    <ul class=\"navbar-nav ml-auto\" *ngIf=\"this.main.user\">\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"profile\">Konto</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"this.main.user.userRole == 1\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"teacher/create-classrom\">Zarządzanie klasą</a>\n      </li>\n      <li class=\"nav-item\" *ngIf=\"!this.main.classrom[1] && this.main.classrom[0]\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"classrom/0\">Twoja klasa</a>\n      </li>\n      <li class=\"nav-item dropdown\" *ngIf=\"this.main.classrom[1]\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown2\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          Twoje klasy\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown2\">\n          <a class=\"dropdown-item\" *ngFor=\"let classrom of this.main.classrom; let i=index\" [routerLink]=\"['classrom',i]\">{{classrom.className}}</a>\n        </div>\n      </li>\n      <li class=\"nav-item\" [routerLinkActive]=\"['active']\">\n        <a class=\"nav-link\" routerLink=\"contact\">Kontakt</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link logout\" (click)=\"this.main.logout()\">Wyloguj się</a>\n      </li>\n    </ul>\n\n  </div>\n</nav>\n\n\n\n";
      /***/
    },

    /***/
    "1vTJ":
    /*!************************************************************************!*\
      !*** ./src/app/components/quiz/add-new-quiz/add-new-quiz.component.ts ***!
      \************************************************************************/

    /*! exports provided: AddNewQuizComponent */

    /***/
    function vTJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddNewQuizComponent", function () {
        return AddNewQuizComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_new_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-new-quiz.component.html */
      "9HVQ");
      /* harmony import */


      var _add_new_quiz_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-new-quiz.component.scss */
      "Hm16");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddNewQuizComponent = /*#__PURE__*/function () {
        function AddNewQuizComponent() {
          _classCallCheck(this, AddNewQuizComponent);

          this.submitted = false;
          this.quizForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            startDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
            finishDate: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
          });
        }

        _createClass(AddNewQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addDateTimePickers();
          }
        }, {
          key: "addDateTimePickers",
          value: function addDateTimePickers() {
            (function ($) {
              $(document).ready(function () {
                $('#startDatePicker').dateTimePicker();
                $('#finishDatePicker').dateTimePicker();
              });
            })(jQuery);
          }
        }, {
          key: "addNewHomework",
          value: function addNewHomework() {
            return;
          }
        }, {
          key: "addQuestion",
          value: function addQuestion() {}
        }]);

        return AddNewQuizComponent;
      }();

      AddNewQuizComponent.ctorParameters = function () {
        return [];
      };

      AddNewQuizComponent.propDecorators = {
        startDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['startDate']
        }],
        finishDate: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['finishDate']
        }]
      };
      AddNewQuizComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-new-quiz',
        template: _raw_loader_add_new_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_new_quiz_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddNewQuizComponent);
      /***/
    },

    /***/
    "2DHe":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework-finished/homework-finished.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: HomeworkFinishedComponent */

    /***/
    function DHe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeworkFinishedComponent", function () {
        return HomeworkFinishedComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homework_finished_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homework-finished.component.html */
      "EWVB");
      /* harmony import */


      var _homework_finished_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homework-finished.component.scss */
      "NuXY");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../../core/services/class.service */
      "cNJU");

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
          key: "setHomeworkData",
          value: function setHomeworkData(homework) {
            this.homework = homework;
            this.startTime = moment__WEBPACK_IMPORTED_MODULE_4__(homework.createDate).format('YYYY-MM-DD HH:mm:ss');
            this.endTime = moment__WEBPACK_IMPORTED_MODULE_4__(homework.endDate).format('YYYY-MM-DD HH:mm:ss');
            this.sendTime = moment__WEBPACK_IMPORTED_MODULE_4__(homework.createDate).format('YYYY-MM-DD HH:mm:ss');
            this.allResponses = homework.responses;
          }
        }, {
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this5 = this;

            this.shared.openHomework.subscribe(function (res) {
              if (!res.mark) {
                return;
              }

              var _iterator = _createForOfIteratorHelper(_this5.allResponses),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var response = _step.value;

                  if (response.id === res.id) {
                    response.mark = res.mark;

                    _this5.filter();

                    break;
                  }
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            });
          }
        }, {
          key: "filter",
          value: function filter() {
            var _this6 = this;

            this.homework.responses = this.allResponses.filter(function (v) {
              return v.senderName.toLocaleLowerCase().includes(_this6.text.toLocaleLowerCase()) || v.senderSurname.toLocaleLowerCase().includes(_this6.text.toLocaleLowerCase());
            });
          }
        }, {
          key: "addFocusClass",
          value: function addFocusClass() {
            var _this7 = this;

            if (this.clickedStatus) {
              setTimeout(function () {
                return _this7.clickedStatus = !_this7.clickedStatus;
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
          set: function set(homework) {
            this.setHomeworkData(homework);
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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      HomeworkFinishedComponent.propDecorators = {
        homeworkSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iteratorSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HomeworkFinishedComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homework-finished',
        template: _raw_loader_homework_finished_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homework_finished_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeworkFinishedComponent);
      /***/
    },

    /***/
    "2F3d":
    /*!************************************************************************!*\
      !*** ./src/app/components/static-pages/spinner/spinner.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function F3d(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "#main {\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.spinner {\n  position: relative;\n}\n\n.spinner:before, .spinner:after {\n  content: \"\";\n  position: relative;\n  display: block;\n}\n\n.spinner:before {\n  -webkit-animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: spinner 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  width: 6em;\n  height: 6em;\n  background-color: #F8961E;\n}\n\n.spinner:after {\n  margin-top: 1em;\n  -webkit-animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n          animation: shadow 2.5s cubic-bezier(0.75, 0, 0.5, 1) infinite normal;\n  bottom: -0.5em;\n  height: 0.25em;\n  border-radius: 50%;\n  background-color: rgba(0, 0, 0, 0.2);\n}\n\n@-webkit-keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@keyframes spinner {\n  50% {\n    border-radius: 50%;\n    transform: scale(0.5) rotate(360deg);\n  }\n  100% {\n    transform: scale(1) rotate(720deg);\n  }\n}\n\n@-webkit-keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n\n@keyframes shadow {\n  50% {\n    transform: scale(0.5);\n    background-color: rgba(0, 0, 0, 0.1);\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3Bpbm5lci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFNBQUE7RUFDQSxnQ0FBQTtBQUNGOztBQUVBO0VBQ0Usa0JBQUE7QUFDRjs7QUFDQTtFQUNFLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7QUFFRjs7QUFBQTtFQUNFLDZFQUFBO1VBQUEscUVBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHlCQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0VBQ0EsNEVBQUE7VUFBQSxvRUFBQTtFQUNBLGNBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQ0FBQTtBQUlGOztBQURBO0VBQ0U7SUFDRSxrQkFBQTtJQUNBLG9DQUFBO0VBSUY7RUFGQTtJQUNFLGtDQUFBO0VBSUY7QUFDRjs7QUFYQTtFQUNFO0lBQ0Usa0JBQUE7SUFDQSxvQ0FBQTtFQUlGO0VBRkE7SUFDRSxrQ0FBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRTtJQUNFLHFCQUFBO0lBQ0Esb0NBQUE7RUFJRjtBQUNGOztBQVJBO0VBQ0U7SUFDRSxxQkFBQTtJQUNBLG9DQUFBO0VBSUY7QUFDRiIsImZpbGUiOiJzcGlubmVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI21haW4ge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDUwJTtcclxuICBsZWZ0OiA1MCU7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XHJcbn1cclxuXHJcbi5zcGlubmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlLCAuc3Bpbm5lcjphZnRlciB7XHJcbiAgY29udGVudDogXCJcIjtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuLnNwaW5uZXI6YmVmb3JlIHtcclxuICBhbmltYXRpb246IHNwaW5uZXIgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgd2lkdGg6IDZlbTtcclxuICBoZWlnaHQ6IDZlbTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjg5NjFFO1xyXG59XHJcbi5zcGlubmVyOmFmdGVyIHtcclxuICBtYXJnaW4tdG9wOiAxZW07XHJcbiAgYW5pbWF0aW9uOiBzaGFkb3cgMi41cyBjdWJpYy1iZXppZXIoMC43NSwgMCwgMC41LCAxKSBpbmZpbml0ZSBub3JtYWw7XHJcbiAgYm90dG9tOiAtLjVlbTtcclxuICBoZWlnaHQ6IC4yNWVtO1xyXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKCMwMDAsMC4yKTtcclxufVxyXG5cclxuQGtleWZyYW1lcyBzcGlubmVyIHtcclxuICA1MCUge1xyXG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gIH1cclxuICAxMDAlIHtcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMSkgcm90YXRlKDcyMGRlZyk7XHJcbiAgfVxyXG59XHJcbkBrZXlmcmFtZXMgc2hhZG93IHtcclxuICA1MCUge1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwLjUpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgjMDAwLDAuMSk7XHJcbiAgfVxyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "2IlC":
    /*!******************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/add-homework-response/add-homework-response.component.ts ***!
      \******************************************************************************************************/

    /*! exports provided: AddHomeworkResponseComponent */

    /***/
    function IlC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHomeworkResponseComponent", function () {
        return AddHomeworkResponseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_homework_response_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-homework-response.component.html */
      "+YUm");
      /* harmony import */


      var _add_homework_response_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-homework-response.component.scss */
      "mlCZ");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");

      var AddHomeworkResponseComponent = /*#__PURE__*/function () {
        function AddHomeworkResponseComponent(main, classService, sanitizer, toastr, shared) {
          _classCallCheck(this, AddHomeworkResponseComponent);

          this.main = main;
          this.classService = classService;
          this.sanitizer = sanitizer;
          this.toastr = toastr;
          this.shared = shared;
          this.files = [];
          this.filesID = [];
          this.linksIterator = [];
          this.linkHrefs = [];
          this.homeworkResponseForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
            classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.main.currentClassrom.id)
          });
          this.uploadForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
            profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
          });
        }

        _createClass(AddHomeworkResponseComponent, [{
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
            var _this8 = this;

            var formData = new FormData();
            var file = this.uploadForm.get('profile').value;
            this.files.push(file);
            formData.append('file', file);
            file.inProgress = true;
            this.classService.addNewFileToResponse(this.main.currentClassrom.id, this.homework.id, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_10__["map"])(function (event) {
              var index = _this8.files.findIndex(function (v) {
                return v.name === file.name;
              });

              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].UploadProgress:
                  _this8.files[index].progress = Math.round(event.loaded * 100 / event.total);
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpEventType"].Response:
                  _this8.files[index].finished = true;

                  _this8.filesID.push(event.body.fileID);

                  break;
              }
            })).subscribe();
          }
        }, {
          key: "addNewResponse",
          value: function addNewResponse() {
            var _this9 = this;

            this.homeworkResponseForm.addControl('homeworkID', new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](this.homework.id));
            var body = this.homeworkResponseForm.value;
            body.filesID = this.filesID;
            body.linkHrefs = this.linkHrefs;

            if (this.homeworkResponseForm.valid) {
              this.classService.addNewResponse(body).subscribe(function (res) {
                _this9.shared.switchHomeworkEmit(res.responseObj.homeworkID);

                _this9.linksIterator = [];
                _this9.linkHrefs = [];
                _this9.files = [];
                _this9.filesID = [];

                _this9.main.currentSubject.homeworks.filter(function (v) {
                  return v.id === res.responseObj.homeworkID;
                }).map(function (v) {
                  return v.responses.push(res.responseObj);
                });

                _this9.toastr.success('Pomyślnie dodano odpowiedź.', 'Udało się!');
              });
            }
          }
        }, {
          key: "addLink",
          value: function addLink() {
            this.linksIterator.push(this.linksIterator.length);
          }
        }, {
          key: "homeworkSet",
          set: function set(homework) {
            this.homework = homework;
          }
        }]);

        return AddHomeworkResponseComponent;
      }();

      AddHomeworkResponseComponent.ctorParameters = function () {
        return [{
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_6__["ClassService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_7__["DomSanitizer"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_9__["SharedService"]
        }];
      };

      AddHomeworkResponseComponent.propDecorators = {
        homeworkSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      AddHomeworkResponseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-homework-response',
        template: _raw_loader_add_homework_response_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_homework_response_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddHomeworkResponseComponent);
      /***/
    },

    /***/
    "4JQ5":
    /*!*********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/subject/subject.component.html ***!
      \*********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JQ5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"goBackDiv d-block d-md-none\" (click)=\"goBack()\">Wybierz przedmiot</div>\n<div class=\"col-12 pt-5 pt-md-0\" *ngIf=\"checkIfEducator()\">\n    <h1 class=\"text-center\">Brak dostępu do danych przedmiotu. Nie jesteś jego nauczycielem</h1>\n</div>\n<div *ngIf=\"!checkIfEducator()\">\n  <div class=\"text-center subHeader pt-5 pt-md-0 text-wrap fontBigger\">{{this.main.currentSubject.name}}</div>\n  <div class=\"row justify-content-around subButtons p-3 m-0 mb-5\">\n    <a class=\"example_f col-12 col-md-3 fontNormal\" *ngIf=\"checkIfEducator() || checkIfTeacher()\" data-toggle=\"collapse\" href=\"#addNewHomework\"><span>Dodaj zadanie</span></a>\n    <a class=\"example_f col-12 col-md-3 fontNormal\" *ngIf=\"checkIfEducator() || checkIfTeacher()\" data-toggle=\"collapse\" href=\"#addNewQuiz\"><span>Dodaj test</span></a>\n    <a class=\"example_f col-12 col-md-3 fontNormal\" (click)=\"navigateOverSubject('chat')\"><span>Otwórz chat</span></a>\n    <a class=\"example_f col-12 col-md-5 fontNormal\" *ngIf=\"whatIsCurrentlyShowed() === 'finishedHomeworks' || whatIsCurrentlyShowed() === 'chat'\" (click)=\"navigateOverSubject('liveHomeworks')\"><span>Pokaż najnowsze zadania</span></a>\n    <a class=\"example_f col-12 col-md-5 fontNormal\" *ngIf=\"whatIsCurrentlyShowed() === 'liveHomeworks'\" (click)=\"navigateOverSubject('finishedHomeworks')\"><span>Przejdź do archiwum</span></a>\n    <div class=\"col-12 pt-3\">\n      <div class=\"addNewHomeworkForm collapse col-12\" id=\"addNewHomework\">\n        <app-add-homework (newHomework)=\"outputNewHomework($event)\"></app-add-homework>\n      </div>\n    </div>\n    <div class=\"col-12 pt-3\">\n      <div class=\"addNewHomeworkForm collapse col-12\" id=\"addNewQuiz\">\n        <app-add-new-quiz></app-add-new-quiz>\n      </div>\n    </div>\n  </div>\n  <!-- div for students -->\n  <div class=\"homeworksDiv\" *ngIf=\"whatIsCurrentlyShowed() === 'liveHomeworks'\">\n    <div *ngIf=\"this.main.currentRole === 0\">\n      <h1 class=\"text-center subHomeworks fontMedium\" >Zadania do zrobienia</h1>\n      <div *ngFor=\"let homework of this.currentHomeworks; let i=index\">\n        <app-homework [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework>\n      </div>\n    </div>\n  <!-- div for teachers -->\n    <div *ngIf=\"!checkIfStudent()\">\n      <h1 class=\"text-center subHomeworks\" >Obecnie trwające</h1>\n      <div *ngFor=\"let homework of this.currentHomeworks; let i=index\">\n        <app-homework-finished [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework-finished>\n      </div>\n    </div>\n  </div>\n  <div class=\"homeworksDiv\" *ngIf=\"whatIsCurrentlyShowed() === 'finishedHomeworks'\">\n    <h1 class=\"text-center subHomeworks\">Zakończone zadania</h1>\n    <div *ngFor=\"let homework of this.finishedHomeworks; let i=index\">\n      <app-homework-finished [homeworkSet]=\"homework\" [iteratorSet]=\"i\"></app-homework-finished>\n    </div>\n  </div>\n  <div class=\"homeworksDiv\" *ngIf=\"whatIsCurrentlyShowed() === 'chat'\">\n    <h1 class=\"text-center subHomeworks\">Chat</h1>\n    <app-text-chat></app-text-chat>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "4UMR":
    /*!****************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/login/login.component.html ***!
      \****************************************************************************************************/

    /*! exports provided: default */

    /***/
    function UMR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #openModal class=\"d-none\" data-toggle=\"modal\" data-target=\"#exampleModalCenter\"></button>\n\n<div class=\"modal fade\" id=\"exampleModalCenter\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zaloguj się</h5>\n      <form [formGroup]=\"loginForm\">\n        <div class=\"form__group field\">\n          <input type=\"text\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailLogin' />\n          <label for=\"emailLogin\" class=\"form__label\">Nazwa użytkownika</label>\n          <div *ngIf=\"loginForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny email.\n          </div>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordLogin' />\n          <label for=\"passwordLogin\" class=\"form__label\">Hasło</label>\n          <div *ngIf=\"loginForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawne hasło. Minimum 5 znaków.\n          </div>\n        </div>\n\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openRegisterModal()\">\n          Nie masz jeszcze konta? Zarejestruj się!\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "7DvF":
    /*!****************************************************************************!*\
      !*** ./src/app/components/models/show-members/show-members.component.scss ***!
      \****************************************************************************/

    /*! exports provided: default */

    /***/
    function DvF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".fa-trash {\n  cursor: pointer;\n  padding: 15px;\n  text-align: center;\n  color: #151515;\n  background: var(--warn);\n  border-radius: var(--rad);\n  font-size: 45px;\n  transition: all 0.3s;\n}\n\n.fa-trash:hover {\n  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.75);\n  background: #f16127;\n}\n\n.personData {\n  font-size: 30px;\n}\n\n.marksListH1 {\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvdy1tZW1iZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLG9CQUFBO0FBQ0Y7O0FBQ0E7RUFHRSxnREFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxlQUFBO0FBR0Y7O0FBREE7RUFDRSw4QkFBQTtBQUlGIiwiZmlsZSI6InNob3ctbWVtYmVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mYS10cmFzaCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjEsIDIxLCAyMSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgO1xyXG59XHJcbi5mYS10cmFzaDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggNXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJhY2tncm91bmQ6ICNmMTYxMjc7XHJcbn1cclxuLnBlcnNvbkRhdGEge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxufVxyXG4ubWFya3NMaXN0SDEge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "9/x+":
    /*!*******************************************************************!*\
      !*** ./src/app/components/subject/subject/subject.component.scss ***!
      \*******************************************************************/

    /*! exports provided: default */

    /***/
    function x(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".addNewHomeworkForm {\n  background: #43AA8B;\n  border-radius: var(--rad);\n}\n\n.button_cont {\n  background: red;\n}\n\n.subHomeworks {\n  font-size: 35px;\n  padding: 7px;\n}\n\n.subButtons {\n  padding: 10px;\n  border-bottom: 3px solid black;\n  margin-bottom: 15px !important;\n}\n\n.homeworksDiv {\n  padding: 10px;\n  background: #F9C74F;\n  border-radius: var(--rad);\n}\n\n.subBtn {\n  font-size: 20px !important;\n  text-align: center !important;\n}\n\n.example_d {\n  font-size: 25px;\n  font-weight: bold;\n  padding: 0;\n  color: #F8961E;\n  border: 4px solid #F8961E;\n}\n\n.example_d:hover {\n  border-color: #577590 !important;\n  box-shadow: 0 0 10px 3px #575457;\n}\n\n.fullWidth {\n  width: 100vh;\n  height: 100vh;\n  top: 0;\n  left: 0;\n}\n\n.example_f {\n  border-radius: 40px;\n  font-weight: bold;\n}\n\n.goBackDiv {\n  position: fixed;\n  top: 64px;\n  width: 100%;\n  z-index: 5;\n  background: #90BE6D;\n  padding: 10px;\n  text-align: center;\n  font-size: 25px;\n  cursor: pointer;\n  transition: all 0.4s;\n}\n\n.goBackDiv:hover {\n  background: #739754;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc3ViamVjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLG1CQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7QUFFRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FBRUY7O0FBQUE7RUFDRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSw4QkFBQTtBQUdGOztBQURBO0VBQ0UsYUFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLDBCQUFBO0VBQ0EsNkJBQUE7QUFLRjs7QUFIQTtFQUNFLGVBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxjQUFBO0VBQ0EseUJBQUE7QUFNRjs7QUFKQTtFQUNFLGdDQUFBO0VBR0EsZ0NBQUE7QUFPRjs7QUFKQTtFQUNFLFlBQUE7RUFDQSxhQUFBO0VBQ0EsTUFBQTtFQUNBLE9BQUE7QUFPRjs7QUFMQTtFQUNFLG1CQUFBO0VBQ0EsaUJBQUE7QUFRRjs7QUFOQTtFQUNFLGVBQUE7RUFDQSxTQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxlQUFBO0VBQ0Esb0JBQUE7QUFTRjs7QUFQQTtFQUNFLG1CQUFBO0FBVUYiLCJmaWxlIjoic3ViamVjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGROZXdIb21ld29ya0Zvcm0ge1xyXG4gIGJhY2tncm91bmQ6ICM0M0FBOEI7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxufVxyXG4uYnV0dG9uX2NvbnQge1xyXG4gIGJhY2tncm91bmQ6IHJlZDtcclxufVxyXG5cclxuLnN1YkhvbWV3b3JrcyB7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIHBhZGRpbmc6IDdweDtcclxufVxyXG4uc3ViQnV0dG9ucyB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBib3JkZXItYm90dG9tOiAzcHggc29saWQgYmxhY2s7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTVweCAhaW1wb3J0YW50O1xyXG59XHJcbi5ob21ld29ya3NEaXYge1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI0Y5Qzc0RjtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG59XHJcbi5zdWJCdG4ge1xyXG4gIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlciAhaW1wb3J0YW50O1xyXG59XHJcbi5leGFtcGxlX2Qge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjg5NjFFO1xyXG4gIGJvcmRlcjogNHB4IHNvbGlkICNGODk2MUU7XHJcbn1cclxuLmV4YW1wbGVfZDpob3ZlciB7XHJcbiAgYm9yZGVyLWNvbG9yOiAjNTc3NTkwICFpbXBvcnRhbnQ7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSg4Nyw4NCw4NywxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG59XHJcblxyXG4uZnVsbFdpZHRoIHtcclxuICB3aWR0aDogMTAwdmg7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICB0b3A6MDtcclxuICBsZWZ0OjA7XHJcbn1cclxuLmV4YW1wbGVfZiB7XHJcbiAgYm9yZGVyLXJhZGl1czogNDBweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4uZ29CYWNrRGl2IHtcclxuICBwb3NpdGlvbjogZml4ZWQ7XHJcbiAgdG9wOiA2NHB4O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHotaW5kZXg6IDU7XHJcbiAgYmFja2dyb3VuZDogIzkwQkU2RDtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDI1cHg7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjRzO1xyXG59XHJcbi5nb0JhY2tEaXY6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6ICM3Mzk3NTQ7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "9HVQ":
    /*!****************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quiz/add-new-quiz/add-new-quiz.component.html ***!
      \****************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function HVQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"quizForm\" class=\"row justify-content-around p-md-3 p-0\">\n  <div class=\"col-12 row m-0 p-0 headerDiv p-3 justify-content-between align-items-end\">\n    <div class=\"form-group col-md-4 col-12 mb-md-5 p-0\">\n      <h3 class=\"text-white termin\">Nazwa zadania</h3>\n      <label for='numberPeople'></label><input type=\"email\" class=\"form-control\" placeholder=\"Nazwa\" name=\"name\" id='numberPeople' required formControlName=\"name\"/>\n      <div *ngIf=\"quizForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n        Podaj nazwę zadania.\n      </div>\n    </div>\n    <div class=\"col-md-4 col-12 mb-md-5 row justify-content-center align-items-center pickerDiv p-0 m-0\">\n      <h3 class=\"text-white termin text-left\">Termin rozpoczęcia testu</h3>\n      <div id=\"startDatePicker\">   </div>\n      <input type=\"hidden\" id=\"startDate\" value=\"\" #startDate>\n      <div *ngIf=\"quizForm.controls.time.invalid && submitted\" class=\"alert alert-danger\">\n        Podaj termin rozpoczęcia testu.\n      </div>\n    </div>\n    <div class=\"col-md-4 col-12 mb-md-5 row justify-content-center align-items-center pickerDiv p-0 m-0\">\n      <h3 class=\"text-white termin text-left\">Termin zakończenia testu</h3>\n      <div id=\"finishDatePicker\">   </div>\n      <input type=\"hidden\" id=\"endDate\" value=\"\" #finishDate>\n      <div *ngIf=\"quizForm.controls.time.invalid && submitted\" class=\"alert alert-danger\">\n        Podaj termin zakończenia testu.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group col-12\">\n    <h3 class=\"text-white termin\">Dodaj pytanie</h3>\n    <button class=\"formBtn\" (click)=\"addQuestion()\">Dodaj link</button>\n  </div>\n\n  <button type=\"submit\" class=\"formBtn col-6 mb-2 mb-md-0 col-md-4\" (click)=\"addNewHomework()\">Dodaj</button>\n</form>\n";
      /***/
    },

    /***/
    "9aNY":
    /*!**********************************************************************!*\
      !*** ./src/app/components/static-pages/profile/profile.component.ts ***!
      \**********************************************************************/

    /*! exports provided: ProfileComponent */

    /***/
    function aNY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ProfileComponent", function () {
        return ProfileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./profile.component.html */
      "ffNC");
      /* harmony import */


      var _profile_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./profile.component.scss */
      "Oa1a");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");

      var ProfileComponent = /*#__PURE__*/function () {
        function ProfileComponent(main) {
          _classCallCheck(this, ProfileComponent);

          this.main = main;
        }

        _createClass(ProfileComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.getUser();
          }
        }, {
          key: "getUser",
          value: function getUser() {
            this.user = this.main.user;
          }
        }]);

        return ProfileComponent;
      }();

      ProfileComponent.ctorParameters = function () {
        return [{
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }];
      };

      ProfileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-profile',
        template: _raw_loader_profile_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_profile_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ProfileComponent);
      /***/
    },

    /***/
    "A52i":
    /*!***********************************************************************!*\
      !*** ./src/app/components/subject/text-chat/text-chat.component.scss ***!
      \***********************************************************************/

    /*! exports provided: default */

    /***/
    function A52i(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".formBtn {\n  height: 48px;\n  font-size: 25px;\n  padding: 5px;\n}\n\n.mainChatDiv {\n  border-radius: var(--rad);\n  background: grey;\n}\n\n.chat {\n  display: flex;\n  flex-direction: column-reverse;\n  max-height: 400px;\n  overflow-y: scroll;\n  border-radius: 15px;\n  padding: 10px;\n  background: #cecece;\n}\n\n.name {\n  font-weight: bold;\n  font-size: 17px;\n  margin-right: 7px;\n}\n\n.singleMessage {\n  margin: 10px 0 10px 0;\n}\n\n.load {\n  border-radius: 15px;\n  font-size: 25px;\n  text-align: center;\n  margin-top: 15px;\n  padding: 5px;\n  background: #90BE6D;\n  cursor: pointer;\n  transition: 0.3s all;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcdGV4dC1jaGF0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLGdCQUFBO0FBRUY7O0FBQUE7RUFFRSxhQUFBO0VBQ0EsOEJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7QUFFRjs7QUFBQTtFQUNFLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLGlCQUFBO0FBR0Y7O0FBREE7RUFDRSxxQkFBQTtBQUlGOztBQUZBO0VBQ0UsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQUtGIiwiZmlsZSI6InRleHQtY2hhdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3JtQnRuIHtcclxuICBoZWlnaHQ6IDQ4cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4ubWFpbkNoYXREaXYge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYmFja2dyb3VuZDogZ3JleTtcclxufVxyXG4uY2hhdCB7XHJcblxyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbi1yZXZlcnNlO1xyXG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xyXG4gIG92ZXJmbG93LXk6IHNjcm9sbDtcclxuICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgYmFja2dyb3VuZDogI2NlY2VjZTtcclxufVxyXG4ubmFtZSB7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgZm9udC1zaXplOiAxN3B4O1xyXG4gIG1hcmdpbi1yaWdodDogN3B4O1xyXG59XHJcbi5zaW5nbGVNZXNzYWdlIHtcclxuICBtYXJnaW46IDEwcHggMCAxMHB4IDA7XHJcbn1cclxuLmxvYWQge1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgZm9udC1zaXplOiAyNXB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBtYXJnaW4tdG9wOiAxNXB4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "AAhW":
    /*!*********************************************************************!*\
      !*** ./src/app/components/subject/text-chat/text-chat.component.ts ***!
      \*********************************************************************/

    /*! exports provided: TextChatComponent */

    /***/
    function AAhW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextChatComponent", function () {
        return TextChatComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_text_chat_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./text-chat.component.html */
      "o0aB");
      /* harmony import */


      var _text_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./text-chat.component.scss */
      "A52i");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_text_chat_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/text-chat.service */
      "ahmJ");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");

      var TextChatComponent = /*#__PURE__*/function () {
        function TextChatComponent(tcService, main) {
          _classCallCheck(this, TextChatComponent);

          this.tcService = tcService;
          this.main = main;
          this.loadingMessages = true;
          this.messageForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormGroup"]({
            message: new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required)
          });
        }

        _createClass(TextChatComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this10 = this;

            this.getLastMessages();
            this.timer = setInterval(function () {
              _this10.getNewerMessages();
            }, 5000);
          }
        }, {
          key: "sendMessage",
          value: function sendMessage() {
            var _this11 = this;

            this.messageForm.setControl('subjectID', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.main.currentSubject.id));
            this.messageForm.setControl('classID', new _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormControl"](this.main.currentClassrom.id));

            if (this.messageForm.valid) {
              this.tcService.sendMessage(this.messageForm.value).subscribe(function (res) {
                _this11.messages.unshift(res);
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
            var _this12 = this;

            this.tcService.getNewerMessages(this.messages[0].messageID).subscribe(function (res) {
              if (res) {
                var _iterator2 = _createForOfIteratorHelper(res.messages),
                    _step2;

                try {
                  for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
                    var message = _step2.value;

                    _this12.messages.push(message);
                  }
                } catch (err) {
                  _iterator2.e(err);
                } finally {
                  _iterator2.f();
                }
              }
            });
          }
        }, {
          key: "getLastMessages",
          value: function getLastMessages() {
            var _this13 = this;

            this.tcService.getLastMessages().subscribe(function (res) {
              _this13.loadingMessages = false;
              _this13.messages = res.messages;
              var objDiv = document.getElementById('chatDiv');
              objDiv.addEventListener('scroll', function () {
                if (objDiv.scrollTop < 5 && !_this13.loadingMessages) {
                  _this13.getOlderMessages();
                }
              });
            });
          }
        }, {
          key: "getOlderMessages",
          value: function getOlderMessages() {
            var _this14 = this;

            this.loadingMessages = true;
            this.tcService.getOlderMessages(this.messages[this.messages.length - 1].messageID).subscribe(function (res) {
              if (res.messages) {
                var _iterator3 = _createForOfIteratorHelper(res.messages),
                    _step3;

                try {
                  for (_iterator3.s(); !(_step3 = _iterator3.n()).done;) {
                    var message = _step3.value;

                    _this14.messages.push(message);
                  }
                } catch (err) {
                  _iterator3.e(err);
                } finally {
                  _iterator3.f();
                }
              }

              _this14.loadingMessages = false;
            });
          }
        }]);

        return TextChatComponent;
      }();

      TextChatComponent.ctorParameters = function () {
        return [{
          type: _core_services_text_chat_service__WEBPACK_IMPORTED_MODULE_4__["TextChatService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      TextChatComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-text-chat',
        template: _raw_loader_text_chat_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_text_chat_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], TextChatComponent);
      /***/
    },

    /***/
    "AS5O":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/show-homework-data/show-response-file/show-response-file.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function AS5O(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  border-top: 2px solid black;\n}\n\n.linkHref {\n  color: #4e4eb1;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaG93LXJlc3BvbnNlLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwyQkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzaG93LXJlc3BvbnNlLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdiB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5saW5rSHJlZiB7XHJcbiAgY29sb3I6ICM0ZTRlYjE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "ATwp":
    /*!**************************************************************!*\
      !*** ./src/app/components/models/login/login.component.scss ***!
      \**************************************************************/

    /*! exports provided: default */

    /***/
    function ATwp(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n  z-index: 100;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--submit);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  text-align: center;\n  transition: all 0.3s;\n  cursor: pointer;\n}\n\n.transformUnder:hover {\n  background: var(--submitHover);\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsVUFBQTtFQUNBLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7RUFDQSx3Q0FBQTtFQUNBLGFBQUE7RUFDQSxlQUFBO0VBQ0EsMkJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtBQUlGOztBQUZBO0VBQ0UsOEJBQUE7QUFLRjs7QUFIQTtFQUNFLGFBQUE7QUFNRiIsImZpbGUiOiJsb2dpbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tb2RhbC1jb250ZW50IHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgcGFkZGluZzogMzJweCAzMnB4IDAgMzJweDtcclxuICBib3JkZXItcmFkaXVzOiAxMnB4O1xyXG4gIHotaW5kZXg6IDEwMDtcclxufVxyXG4ubW9kYWwtdGl0bGUge1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG4uYnRuLXByaW1hcnkge1xyXG4gIHdpZHRoOiA2MCU7XHJcbiAgYm9yZGVyLXJhZGl1czogMTJweDtcclxufVxyXG4udHJhbnNmb3JtVW5kZXIge1xyXG4gIGhlaWdodDogNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDAgMCB2YXIoLS1yYWQpIHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBmb250LXNpemU6IDIwcHg7XHJcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKDUwcHgpO1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAgdmFyKC0tc3VibWl0SG92ZXIpO1xyXG59XHJcbi50cmFuc2Zvcm1VbmRlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "AytR":
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /*! exports provided: environment */

    /***/
    function AytR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "environment", function () {
        return environment;
      }); // This file can be replaced during build by using the `fileReplacements` array.
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
    "EWVB":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/homework-finished/homework-finished.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function EWVB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row justify-content-around m-3\">\n  <a class=\"font-weight-bold pb-3 col-11 singeHomeworkDesc\" data-toggle=\"collapse\"\n     (click)=\"addFocusClass()\" role=\"button\" [href]=\"'#homework-'+iterator\"\n     aria-expanded=\"false\" aria-controls=\"collapseExample\" [ngClass]=\"{'singeHomeworkDescFocused': clickedStatus}\">\n    <div class=\"row justify-content-between m-0 p-0\">\n      <div  class=\"m-0 p-1 col-md-6 col-12\">\n        <h1>{{homework.name}}</h1>\n        <div *ngIf=\"main.currentRole === 0\">\n          <div *ngIf=\"homework.responses[0]\">\n            <div class=\"markMarked\" *ngIf=\"homework.responses[0].mark\" >Ocena: {{homework.responses[0].mark}}</div>\n            <div class=\"markNoMarked\" *ngIf=\"!homework.responses[0].mark\">Nie oceniono</div>\n          </div>\n        </div>\n      </div>\n      <div class=\"row col-md-6 text-md-right col-12\">\n        <div class=\"m-0 p-1 col-12\">Data dodania: {{startTime}}</div>\n        <div class=\"m-0 p-1 col-12\">Termin: <span class=\"text-danger\">{{endTime}}</span> </div>\n        <div class=\"m-0 p-1 col-12\" *ngIf=\"main.currentRole === 0\">Data odesłania:\n          <span class=\"text-danger\" *ngIf=\"homework.responses[0]\">{{sendTime}}</span>\n          <span class=\"text-danger\" *ngIf=\"!homework.responses[0]\">---------</span>\n        </div>\n      </div>\n    </div>\n  </a>\n\n  <div class=\"collapse homeworkDesc col-11 p-0 row justify-content-start\" [id]=\"'homework-' + iterator\">\n    <div class=\"col-12 p-3\">\n      <span class=\"infoSpan\">Opis zadania</span>\n    </div>\n    <h2 class=\"pr-3 pl-3 pb-3 col-12 m-0 description\">{{homework.description}}</h2>\n    <app-show-homework-file [homeworkSet]=\"homework\" class=\"col-12 p-0\"></app-show-homework-file>\n\n    <div *ngIf=\"main.currentRole === 0 && homework.responses[0]\" class=\"col-12 p-0\">\n      <app-homework-response [responseSet]=\"this.homework.responses[0]\"></app-homework-response>\n    </div>\n\n<!--    teacher -->\n    <div *ngIf=\"main.currentRole === 1\" class=\"homeworksList row m-0 p-3 justify-content-center col-12\">\n      <div class=\"row p-0 justify-content-between col-12\">\n        <div class=\"form-group col-md-4 col-10 row align-items-end\">\n          <label>\n            <input type=\"email\" class=\"form-control\" placeholder=\"Filtruj listę\" name=\"name\" required [(ngModel)]=\"text\" (ngModelChange)=\"filter()\"/>\n          </label>\n        </div>\n        <div class=\"col-md-6 col-10 row pb-2 justify-content-center\">\n          <button class=\"formBtn\" (click)=\"showGrades()\">Lista ocen</button>\n        </div>\n        <div class=\"col-md-2\">\n          <i class=\"fas fa-trash\" (click)=\"deleteHomework()\"></i>\n        </div>\n      </div>\n      <div class=\"row p-0 justify-content-between col-12\" *ngIf=\"homework.responses[0]\">\n\n        <ul class=\"list-group mt-5 mb-3 col-12\" *ngIf=\"this.homework.responses[0]\">\n          <li class=\"list-group-item m-1\" *ngFor=\"let res of this.homework.responses; let i=index\" (click)=\"openHomeworkModal(res)\">\n            <div class=\"row p-0 m-0\">\n              <div class=\"col-12\">\n                <h2 class=\"text-center d-block\">Imię i nazwisko: {{res.senderName}} {{res.senderSurname}}</h2>\n                <h4 class=\"text-center d-block green\" *ngIf=\"res.mark\">Oceniono - {{res.mark}}</h4>\n                <h4 class=\"text-center d-block red\" *ngIf=\"!res.mark\">Nie oceniono</h4>\n              </div>\n            </div>\n          </li>\n        </ul>\n      </div>\n      <div class=\"col-12 row p-0\"  *ngIf=\"!homework.responses[0]\">\n        <h2 class=\"col-10 p-0\">Nikt jeszcze nie odpowiedział na to zadanie.</h2>\n        <div class=\"col-2\">\n          <i class=\"fas fa-trash\" (click)=\"deleteHomework()\"></i>\n        </div>\n      </div>\n    </div>\n<!--    student doesn't answear -->\n    <div *ngIf=\"main.currentRole === 0 && !homework.responses[0]\" class=\"p-3\">\n      <h2 class=\"text-center\">Niestety nie zdążyłeś odpowiedzieć na to pytanie</h2>\n    </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "FBqh":
    /*!************************************************************************************!*\
      !*** ./src/app/components/subject/homework/add-homework/add-homework.component.ts ***!
      \************************************************************************************/

    /*! exports provided: AddHomeworkComponent */

    /***/
    function FBqh(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddHomeworkComponent", function () {
        return AddHomeworkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_homework_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-homework.component.html */
      "eZ+F");
      /* harmony import */


      var _add_homework_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-homework.component.scss */
      "pCGu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ../../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var AddHomeworkComponent = /*#__PURE__*/function () {
        function AddHomeworkComponent(main, classService, toastr) {
          _classCallCheck(this, AddHomeworkComponent);

          this.main = main;
          this.classService = classService;
          this.toastr = toastr;
          this.newHomework = new _angular_core__WEBPACK_IMPORTED_MODULE_3__["EventEmitter"]();
          this.submitted = false;
          this.uploadedFiles = [];
          this.uploadedFilesId = [];
          this.uploadedLinks = [];
          this.uploadedLinksIterator = [];
        }

        _createClass(AddHomeworkComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.addDateTimePicker();
            this.homeworkForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              description: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"](''),
              time: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
            this.uploadFileForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              profile: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('')
            });
          }
        }, {
          key: "addDateTimePicker",
          value: function addDateTimePicker() {
            (function ($) {
              $(document).ready(function () {
                $('#picker').dateTimePicker();
              });
            })(jQuery);
          }
        }, {
          key: "addNewHomework",
          value: function addNewHomework() {
            var _this15 = this;

            this.submitted = true;
            var timeUtc = moment__WEBPACK_IMPORTED_MODULE_5__(this.timeValue.nativeElement.value).toISOString();
            this.homeworkForm.patchValue({
              time: timeUtc
            });
            var bodyToSend = this.homeworkForm.value;
            bodyToSend.filesID = this.uploadedFilesId;
            bodyToSend.linkHrefs = this.uploadedLinks;
            bodyToSend.subjectID = this.main.currentSubject.id;
            bodyToSend.classID = this.main.currentClassrom.id;

            if (this.homeworkForm.valid) {
              this.classService.addNewHomework(bodyToSend).subscribe(function (res) {
                _this15.submitted = false;

                _this15.homeworkForm.reset();

                _this15.uploadedFiles = [];
                _this15.uploadedLinksIterator = [];
                _this15.uploadedLinks = [];
                _this15.uploadedFilesId = [];

                _this15.emitNewHomework(res);

                _this15.main.currentSubject.homeworks.push(res);

                _this15.toastr.success('Pomyślnie dodano nowe zadanie.', 'Udało się!');
              });
            }
          }
        }, {
          key: "uploadFile",
          value: function uploadFile() {
            var _this16 = this;

            var formData = new FormData();
            var file = this.uploadFileForm.get('profile').value;
            this.uploadedFiles.push(file);
            formData.append('file', file);
            file.inProgress = true;
            this.classService.addNewFileToHomework(this.main.currentClassrom.id, this.main.currentSubject.id, formData).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["map"])(function (event) {
              var index = _this16.uploadedFiles.findIndex(function (v) {
                return v.name === file.name;
              });

              switch (event.type) {
                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].UploadProgress:
                  _this16.uploadedFiles[index].progress = Math.round(event.loaded * 100 / event.total);
                  break;

                case _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpEventType"].Response:
                  _this16.uploadedFiles[index].finished = true;

                  _this16.uploadedFilesId.push(event.body.fileID);

                  break;
              }
            })).subscribe(function () {});
          }
        }, {
          key: "onFileSelect",
          value: function onFileSelect(event) {
            if (event.target.files.length > 0) {
              var file = event.target.files[0];
              this.uploadFileForm.get('profile').setValue(file);
              this.uploadFile();
            }
          }
        }, {
          key: "addLink",
          value: function addLink() {
            this.uploadedLinksIterator.push(this.uploadedLinksIterator.length);
          }
        }, {
          key: "emitNewHomework",
          value: function emitNewHomework(homework) {
            this.newHomework.emit(homework);
          }
        }]);

        return AddHomeworkComponent;
      }();

      AddHomeworkComponent.ctorParameters = function () {
        return [{
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_8__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_9__["ClassService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrService"]
        }];
      };

      AddHomeworkComponent.propDecorators = {
        timeValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['timeValue']
        }],
        newHomework: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Output"]
        }]
      };
      AddHomeworkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-homework',
        template: _raw_loader_add_homework_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_homework_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddHomeworkComponent);
      /***/
    },

    /***/
    "HcO8":
    /*!****************************************************************************************!*\
      !*** ./src/app/components/quiz/add-question-to-quiz/add-question-to-quiz.component.ts ***!
      \****************************************************************************************/

    /*! exports provided: AddQuestionToQuizComponent */

    /***/
    function HcO8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AddQuestionToQuizComponent", function () {
        return AddQuestionToQuizComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_add_question_to_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./add-question-to-quiz.component.html */
      "jHMj");
      /* harmony import */


      var _add_question_to_quiz_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./add-question-to-quiz.component.scss */
      "twY+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var AddQuestionToQuizComponent = /*#__PURE__*/function () {
        function AddQuestionToQuizComponent() {
          _classCallCheck(this, AddQuestionToQuizComponent);
        }

        _createClass(AddQuestionToQuizComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.questionForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              question: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              correctAnswer: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              incorrectAnswer1: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              incorrectAnswer2: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required),
              incorrectAnswer3: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }, {
          key: "addNewQuestion",
          value: function addNewQuestion() {}
        }]);

        return AddQuestionToQuizComponent;
      }();

      AddQuestionToQuizComponent.ctorParameters = function () {
        return [];
      };

      AddQuestionToQuizComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-add-question-to-quiz',
        template: _raw_loader_add_question_to_quiz_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_add_question_to_quiz_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AddQuestionToQuizComponent);
      /***/
    },

    /***/
    "Hm16":
    /*!**************************************************************************!*\
      !*** ./src/app/components/quiz/add-new-quiz/add-new-quiz.component.scss ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function Hm16(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".progress {\n  height: 35px;\n  font-size: 20px;\n}\n\n.green {\n  background: green;\n}\n\n.pickerDiv {\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.headerDiv {\n  padding: 15px 0;\n}\n\n#picker {\n  text-align: center;\n  width: 100%;\n}\n\n.pickerDiv:hover > #picker {\n  color: var(--warn);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcYWRkLW5ldy1xdWl6LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBQTtFQUNBLGVBQUE7QUFDRjs7QUFDQTtFQUNFLGlCQUFBO0FBRUY7O0FBQUE7RUFDRSx5QkFBQTtFQUNBLGVBQUE7QUFHRjs7QUFEQTtFQUNFLGVBQUE7QUFJRjs7QUFGQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtBQUtGOztBQUhBO0VBQ0Usa0JBQUE7QUFNRiIsImZpbGUiOiJhZGQtbmV3LXF1aXouY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6MjBweDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcbi5waWNrZXJEaXYge1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5oZWFkZXJEaXYge1xyXG4gIHBhZGRpbmc6IDE1cHggMDtcclxufVxyXG4jcGlja2VyIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbn1cclxuLnBpY2tlckRpdjpob3ZlciA+ICNwaWNrZXIge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKVxyXG5cclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Im7X":
    /*!*************************************************!*\
      !*** ./src/app/core/services/shared.service.ts ***!
      \*************************************************/

    /*! exports provided: SharedService */

    /***/
    function Im7X(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SharedService", function () {
        return SharedService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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
          this.apiUrl = 'https://homeschoolapi.herokuapp.com/api/';
          this.apiFilesUrl = 'https://filestorageapi.herokuapp.com/api/';
          this.apiNamesUrl = 'https://returnusernamesapi.herokuapp.com/api/';
          this.apiChatUrl = 'https://textchatapi.herokuapp.com/api/';
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

      SharedService.ctorParameters = function () {
        return [];
      };

      SharedService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], SharedService);
      /***/
    },

    /***/
    "J6ks":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/classrom/classrom.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function J6ks(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"!checkIfSubjectsExists()\">\n  <h1 class=\"text-center p-5\">Ta klasa nie ma jescze żadnych przedmiotów</h1>\n</div>\n\n<div class=\"cover p-3\" *ngIf=\"checkIfSubjectsExists()\">\n  <div class=\"\">\n    <div class=\"text-center mainDiv row p-0 justify-content-center align-items-center\">\n      <div class=\"collapseClass col-12 row justify-content-center\" data-toggle=\"collapse\" href=\"#collapseExample\" aria-expanded=\"false\">\n        <div class=\"fontBigger\">\n          {{this.classrom.className}}\n        </div>\n      </div>\n\n      <div class=\"col-12\">\n        <div class=\"collapse collapseClassInfo\" id=\"collapseExample\">\n          <div class=\"pb-3 pt-3\">\n            <div class=\"fontMedium\">Jesteś\n              <span *ngIf=\"this.main.isEducator\">założycielem klasy</span>\n              <span *ngIf=\"this.main.currentRole === 0\">uczniem</span>\n              <span *ngIf=\"this.main.currentRole === 1 && !this.main.isEducator\">nauczycielem</span>\n            </div>\n          </div>\n          <div class=\"row p-0 m-0 justify-content-center fontMedium\">\n            <div class=\"d-block showCode text-center col-lg-3 col-12 pb-3 m-2\" (click)=\"this.showCode($event, classrom.id)\" *ngIf=\"this.main.isEducator\"><h2>Kod dostępu</h2></div>\n            <div class=\"d-block showCode text-center col-lg-3 col-12 pb-3 m-2\" (click)=\"this.showMembers()\" *ngIf=\"this.main.isEducator\"><h2>Lista członków klasy</h2></div>\n          </div>\n        </div>\n      </div>\n\n    </div>\n  </div>\n  <div class=\"row classrom m-0 p-0\">\n\n    <div class=\"col-lg-9 col-12 d-none d-md-block p-3\">\n      <div class=\"subject\" #subject>\n        <app-subject [currentSubSet]=\"this.main.currentSubject\"></app-subject>\n      </div>\n    </div>\n\n    <div class=\"p-3 col-md-3 col-12\" >\n      <div class=\"d-none d-md-block text-center subjectsChoosing\">\n        <h2 class=\"fontMedium\">Przedmioty</h2>\n        <div class=\"example_d p-3 mb-3 fontNormal\" *ngFor=\"let subject of subjects; let i=index\" (click)=\"setCurrentSubject(i)\">{{subject.name}}</div>\n      </div>\n      <div class=\"d-block d-md-none text-center subjectsChoosing\">\n        <h2 class=\"fontMedium\">Przedmioty</h2>\n        <div class=\"example_d p-3 mb-3 fontNormal\" *ngFor=\"let subject of subjects; let i=index\" (click)=\"setCurrentSubjectNotAsync(i)\" routerLink=\"/subject\">{{subject.name}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "JnRe":
    /*!*********************************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/show-homework-data/show-homework-file/show-homework-file.component.scss ***!
      \*********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function JnRe(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  border-bottom: 2px solid black;\n}\n\n.linkHref {\n  color: #4e4eb1;\n  text-decoration: underline;\n  cursor: pointer;\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXC4uXFxzaG93LWhvbWV3b3JrLWZpbGUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSw4QkFBQTtBQUNGOztBQUNBO0VBQ0UsY0FBQTtFQUNBLDBCQUFBO0VBQ0EsZUFBQTtFQUNBLGVBQUE7QUFFRiIsImZpbGUiOiJzaG93LWhvbWV3b3JrLWZpbGUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbkRpdiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5saW5rSHJlZiB7XHJcbiAgY29sb3I6ICM0ZTRlYjE7XHJcbiAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "K7IL":
    /*!******************************************************************!*\
      !*** ./src/app/components/models/register/register.component.ts ***!
      \******************************************************************/

    /*! exports provided: RegisterComponent */

    /***/
    function K7IL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "RegisterComponent", function () {
        return RegisterComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./register.component.html */
      "bvRv");
      /* harmony import */


      var _register_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./register.component.scss */
      "f4+7");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var RegisterComponent = /*#__PURE__*/function () {
        function RegisterComponent(shared, main) {
          _classCallCheck(this, RegisterComponent);

          this.shared = shared;
          this.main = main;
          this.selectedRole = 0;
          this.submitted = false;
          this.registerForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5)]),
            name: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('Dawid', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            surname: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('Kruk', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required),
            userCode: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }

        _createClass(RegisterComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this17 = this;

            this.shared.openRegister.subscribe(function () {
              _this17.openRegister.nativeElement.click();
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            this.submitted = true;
            this.registerForm.setControl('userRole', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.selectedRole));

            if (this.registerForm.valid) {
              this.main.register(this.registerForm.value);
            }
          }
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
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      RegisterComponent.propDecorators = {
        openRegister: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['openRegister']
        }]
      };
      RegisterComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-register',
        template: _raw_loader_register_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_register_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], RegisterComponent);
      /***/
    },

    /***/
    "Kdbi":
    /*!************************************************************************!*\
      !*** ./src/app/components/static-pages/contact/contact.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Kdbi(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n.cover {\n  height: 100%;\n}\n\n@media (max-width: 992px) {\n  .cover {\n    height: auto !important;\n  }\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.contactDetails {\n  background: #E0FBFC;\n}\n\n.rest {\n  margin-top: -150px;\n  padding-top: 150px;\n  background: var(--submit);\n}\n\n.contactUs {\n  background: #43AA8B;\n  border-top-left-radius: var(--rad);\n  border-top-right-radius: var(--rad);\n  text-align: center;\n  padding: 20px;\n  border-bottom: 2px solid black;\n}\n\n.container {\n  border-radius: var(--rad) !important;\n}\n\n.singeInfo {\n  padding: 10px;\n  margin-bottom: 3px;\n  border-bottom: 2px solid grey;\n  font-size: 35px;\n}\n\n@media (max-width: 992px) {\n  .singeInfo {\n    font-size: 25px !important;\n  }\n}\n\n.singeInfo:last-child {\n  border-bottom: none !important;\n}\n\n.infoRow {\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY29udGFjdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUFDRjs7QUFDQTtFQUNFLFlBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsdUJBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0U7SUFDRSxxRkFBQTtZQUFBLDZFQUFBO0VBR0Y7QUFDRjs7QUFEQTtFQUNFLG1CQUFBO0FBR0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDhCQUFBO0FBS0Y7O0FBSEE7RUFDRyxvQ0FBQTtBQU1IOztBQUpBO0VBQ0UsYUFBQTtFQUNBLGtCQUFBO0VBQ0EsNkJBQUE7RUFDQSxlQUFBO0FBT0Y7O0FBTEE7RUFDRTtJQUNFLDBCQUFBO0VBUUY7QUFDRjs7QUFOQTtFQUNFLDhCQUFBO0FBUUY7O0FBTEE7RUFDRSxTQUFBO0FBUUYiLCJmaWxlIjoiY29udGFjdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbi5jb3ZlciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbkBtZWRpYSAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5jb3ZlciB7XHJcbiAgICBoZWlnaHQ6IGF1dG8gIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgODUlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmNvbnRhY3REZXRhaWxzIHtcclxuICBiYWNrZ3JvdW5kOiAjRTBGQkZDO1xyXG59XHJcbi5yZXN0IHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdClcclxufVxyXG4uY29udGFjdFVzIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6MjBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgYmxhY2s7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCkgIWltcG9ydGFudDtcclxufVxyXG4uc2luZ2VJbmZvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuc2luZ2VJbmZvIHtcclxuICAgIGZvbnQtc2l6ZTogMjVweCAhaW1wb3J0YW50O1xyXG4gIH1cclxufVxyXG4uc2luZ2VJbmZvOmxhc3QtY2hpbGQge1xyXG4gIGJvcmRlci1ib3R0b206IG5vbmUgIWltcG9ydGFudDtcclxufVxyXG5cclxuLmluZm9Sb3cge1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "LjPw":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/homework/homework.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function LjPw(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row justify-content-center m-3\">\n  <a class=\"font-weight-bold pb-3 col-11 singeHomeworkDesc\" data-toggle=\"collapse\"\n     (click)=\"addFocusClass()\" role=\"button\" [href]=\"'#homework-'+iterator\"\n     aria-expanded=\"false\" aria-controls=\"collapseExample\" [ngClass]=\"{'singeHomeworkDescFocused': clickedStatus}\">\n    <div class=\"row justify-content-between m-0 p-0\">\n      <div  class=\"m-0 p-1 col-md-6 col-12\"><div class=\"fontMedium\">{{homework.name}}</div></div>\n      <div class=\"row col-md-6 col-12 text-md-right\">\n        <div class=\"m-0 p-1 col-12\">Data dodania: {{startTime}}</div>\n        <div class=\"m-0 p-1 col-12\">Termin: <span class=\"text-danger\">{{endTime}}</span> </div>\n      </div>\n      <div class=\"col-12 m-0 p-1\">\n        <h3>Pozostało {{leftHours}} godzin i {{leftMinutes}} minut</h3>\n      </div>\n    </div>\n  </a>\n\n  <div class=\"collapse homeworkDesc col-11 row justify-content-center p-0\" [id]=\"'homework-' + iterator\">\n    <div class=\"col-12 row justify-content-center p-0\">\n      <div class=\"col-12 p-3\">\n        <span class=\"infoSpan\">Opis zadania</span>\n      </div>\n      <h2 class=\"pr-3 pl-3 pb-3 col-12 m-0 description\">{{homework.description}}</h2>\n      <app-show-homework-file [homeworkSet]=\"homework\" class=\"col-12 p-0\"></app-show-homework-file>\n    </div>\n    <div class=\"col-12 p-0\">\n      <div class=\"col-12 p-3\">\n        <span class=\"infoSpan\">Twoja odpowiedź</span>\n      </div>\n      <app-add-homework-response [homeworkSet]=\"homework\"></app-add-homework-response>\n    </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "MEET":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/show-homework-data/show-homework-file/show-homework-file.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ShowHomeworkFileComponent */

    /***/
    function MEET(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowHomeworkFileComponent", function () {
        return ShowHomeworkFileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_homework_file_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-homework-file.component.html */
      "n3lE");
      /* harmony import */


      var _show_homework_file_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-homework-file.component.scss */
      "JnRe");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

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
            document.body.appendChild(a);
            a.style.display = 'none';
            a.href = url;
            a.download = finalFileName;
            a.click();
            window.URL.revokeObjectURL(fileName);
          }
        }, {
          key: "downloadAllFiles",
          value: function downloadAllFiles() {
            var _this18 = this;

            var _iterator4 = _createForOfIteratorHelper(this.homework.files),
                _step4;

            try {
              for (_iterator4.s(); !(_step4 = _iterator4.n()).done;) {
                var homeworkID = _step4.value;
                var fileData = {
                  homeworkID: this.homework.id,
                  classID: this.main.currentClassrom.id,
                  subjectID: this.main.currentSubject.id,
                  fileID: homeworkID
                };
                this.classService.returnFileFromHomework(fileData).subscribe(function (res) {
                  var type = res.headers.get('Content-Type');
                  var fileName = res.headers.get('filename');

                  _this18.names.push(fileName);

                  var file = new Blob([res.body], {
                    type: type
                  });
                  var fileURL = URL.createObjectURL(file);

                  if (!_this18.mimes.includes(type)) {
                    _this18.downloadFile(fileURL, fileName);
                  } else {
                    _this18.src.push(fileURL);
                  }
                });
              }
            } catch (err) {
              _iterator4.e(err);
            } finally {
              _iterator4.f();
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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }];
      };

      ShowHomeworkFileComponent.propDecorators = {
        homeworkSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ShowHomeworkFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-homework-file',
        template: _raw_loader_show_homework_file_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_homework_file_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowHomeworkFileComponent);
      /***/
    },

    /***/
    "NBzH":
    /*!************************************************************************************!*\
      !*** ./src/app/components/classrom/manage-classrom/manage-classrom.component.scss ***!
      \************************************************************************************/

    /*! exports provided: default */

    /***/
    function NBzH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".containerMain {\n  margin-top: 50px;\n  background: var(--main);\n  border-radius: var(--rad);\n  padding: 20px 20px 70px 20px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0% 75%, 0 0);\n}\n\n.containerInfo {\n  margin-top: -400px;\n  margin-bottom: 50px;\n  background: var(--submit);\n  padding-top: 400px;\n  padding-bottom: 25px;\n  border-bottom-left-radius: var(--rad);\n  border-bottom-right-radius: var(--rad);\n}\n\n.containerDelete {\n  margin-top: -100px;\n  margin-bottom: 50px;\n  background: var(--main);\n  padding-top: 100px;\n  padding-bottom: 25px;\n}\n\n@media (max-width: 992px) {\n  .containerMain {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0% 90%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 90%, 50% 100%, 0% 90%, 0 0) !important;\n  }\n}\n\n.form {\n  padding: 10px;\n  background: white;\n}\n\n.mainDiv {\n  background: #E0FBFC;\n}\n\n.iconsP {\n  padding: 20px;\n  font-size: 27px;\n}\n\n.red {\n  color: var(--warn) !important;\n}\n\n.redBg {\n  background: var(--warn) !important;\n}\n\n.deleteSubH1 {\n  margin-top: 30px;\n  border-top: 2px solid black;\n  padding: 20px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFuYWdlLWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0EsNEJBQUE7RUFDQSwyRUFBQTtVQUFBLG1FQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLG1CQUFBO0VBQ0EseUJBQUE7RUFDQSxrQkFBQTtFQUNBLG9CQUFBO0VBQ0EscUNBQUE7RUFDQSxzQ0FBQTtBQUVGOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxtQkFBQTtFQUNBLHVCQUFBO0VBQ0Esa0JBQUE7RUFDQSxvQkFBQTtBQUVGOztBQUFBO0VBQ0U7SUFDRSxzRkFBQTtZQUFBLDhFQUFBO0VBR0Y7QUFDRjs7QUFBQTtFQUNFLGFBQUE7RUFDQSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSw2QkFBQTtBQUtGOztBQUhBO0VBQ0Usa0NBQUE7QUFNRjs7QUFKQTtFQUNFLGdCQUFBO0VBQ0EsMkJBQUE7RUFDQSxhQUFBO0FBT0YiLCJmaWxlIjoibWFuYWdlLWNsYXNzcm9tLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lck1haW4ge1xyXG4gIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tbWFpbik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOjIwcHggMjBweCA3MHB4IDIwcHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDc1JSwgNTAlIDEwMCUsIDAlIDc1JSwgMCAwKTtcclxufVxyXG4uY29udGFpbmVySW5mbyB7XHJcbiAgbWFyZ2luLXRvcDogLTQwMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0KTtcclxuICBwYWRkaW5nLXRvcDogNDAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogIHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6ICB2YXIoLS1yYWQpO1xyXG5cclxufVxyXG4uY29udGFpbmVyRGVsZXRlIHtcclxuICBtYXJnaW4tdG9wOiAtMTAwcHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogNTBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nLXRvcDogMTAwcHg7XHJcbiAgcGFkZGluZy1ib3R0b206IDI1cHg7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY29udGFpbmVyTWFpbiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgOTAlLCA1MCUgMTAwJSwgMCUgOTAlLCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxufVxyXG4uZm9ybSB7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICBiYWNrZ3JvdW5kOiB3aGl0ZTtcclxufVxyXG4ubWFpbkRpdiB7XHJcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcclxufVxyXG4uaWNvbnNQIHtcclxuICBwYWRkaW5nOiAyMHB4O1xyXG4gIGZvbnQtc2l6ZTogMjdweDtcclxufVxyXG4ucmVkIHtcclxuICBjb2xvcjogdmFyKC0td2FybikgIWltcG9ydGFudDtcclxufVxyXG4ucmVkQmcge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm4pICFpbXBvcnRhbnQ7XHJcbn1cclxuLmRlbGV0ZVN1YkgxIHtcclxuICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "NWbu":
    /*!**********************************************************************!*\
      !*** ./src/app/components/static-pages/navbar/navbar.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function NWbu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".nav-link:hover {\n  color: #ff7233 !important;\n}\n\n.nav-link {\n  cursor: pointer;\n  color: white !important;\n  font-size: 1.3rem;\n  transition: all 0.3s;\n}\n\n.navbar-toggler {\n  border: 2px solid rgba(255, 255, 255, 0.62);\n}\n\n.navbar-toggler:focus {\n  outline: none;\n}\n\n.iconsHeader {\n  font-size: 100px !important;\n}\n\n.advantagesH1 {\n  font-size: 40px !important;\n}\n\n.navbar {\n  background-color: var(--main);\n  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.75);\n}\n\n.logout {\n  color: var(--warn) !important;\n}\n\n.navbar-brand {\n  font-size: 30px;\n}\n\n.loginNav {\n  background: #ff7233 !important;\n  padding: 10px !important;\n  -webkit-clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);\n}\n\n.loginNav:hover {\n  background: #D05B23 !important;\n  color: white !important;\n}\n\n.hr {\n  display: none;\n}\n\n@media (max-width: 720px) {\n  .loginNav {\n    -webkit-clip-path: none;\n            clip-path: none;\n    border-radius: 20px;\n  }\n}\n\n.navbar-brand:hover {\n  cursor: pointer;\n  color: #ff8e00 !important;\n  transition: all 0.3s;\n}\n\n.dropdown-item {\n  transition: 0.3s all ease;\n  font-size: 20px;\n  border-bottom: 1px solid grey;\n}\n\n.dropdown-item:last-child {\n  border-bottom: none;\n}\n\n.dropdown-item:hover {\n  background: var(--submit);\n}\n\n.active .nav-link {\n  color: #ff8e00 !important;\n}\n\n.activeBrand {\n  color: #ff8e00 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbmF2YmFyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UseUJBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSx1QkFBQTtFQUNBLGlCQUFBO0VBQ0Esb0JBQUE7QUFFRjs7QUFBQTtFQUNFLDJDQUFBO0FBR0Y7O0FBRUE7RUFDRSxhQUFBO0FBQ0Y7O0FBQ0E7RUFDRSwyQkFBQTtBQUVGOztBQUFBO0VBQ0UsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLDZCQUFBO0VBQ0EsMkNBQUE7QUFJRjs7QUFGQTtFQUNFLDZCQUFBO0FBS0Y7O0FBSEE7RUFDRSxlQUFBO0FBTUY7O0FBSEE7RUFDRSw4QkFBQTtFQUNBLHdCQUFBO0VBRUEsZ0ZBQUE7VUFBQSx3RUFBQTtBQUtGOztBQUhBO0VBQ0UsOEJBQUE7RUFDQSx1QkFBQTtBQU1GOztBQUpBO0VBQ0UsYUFBQTtBQU9GOztBQUxBO0VBQ0U7SUFDRSx1QkFBQTtZQUFBLGVBQUE7SUFDQSxtQkFBQTtFQVFGO0FBQ0Y7O0FBTkE7RUFDRSxlQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVFGOztBQU5BO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0VBQ0EsNkJBQUE7QUFTRjs7QUFQQTtFQUNFLG1CQUFBO0FBVUY7O0FBUkE7RUFDRSx5QkFBQTtBQVdGOztBQVRBO0VBQ0UseUJBQUE7QUFZRjs7QUFUQTtFQUNFLHlCQUFBO0FBWUYiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm5hdi1saW5rOmhvdmVyIHtcclxuICBjb2xvcjogI2ZmNzIzMyAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXYtbGluayB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gIGZvbnQtc2l6ZTogMS4zcmVtO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5uYXZiYXItdG9nZ2xlciB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgcmdiYSgyNTUsIDI1NSwgMjU1LCAwLjYyKTtcclxufVxyXG4ubmF2YmFyLXRvZ2dsZXItaWNvbiB7XHJcblxyXG59XHJcbi5uYXZiYXItdG9nZ2xlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG4uaWNvbnNIZWFkZXIge1xyXG4gIGZvbnQtc2l6ZTogMTAwcHggIWltcG9ydGFudDtcclxufVxyXG4uYWR2YW50YWdlc0gxIHtcclxuICBmb250LXNpemU6IDQwcHggIWltcG9ydGFudDtcclxufVxyXG4ubmF2YmFyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1tYWluKTtcclxuICBib3gtc2hhZG93OiAwIDJweCA1cHggMCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5sb2dvdXQge1xyXG4gIGNvbG9yOiB2YXIoLS13YXJuKSAhaW1wb3J0YW50O1xyXG59XHJcbi5uYXZiYXItYnJhbmQge1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuXHJcbn1cclxuLmxvZ2luTmF2IHtcclxuICBiYWNrZ3JvdW5kOiAjZmY3MjMzICFpbXBvcnRhbnQ7XHJcbiAgcGFkZGluZzogMTBweCAhaW1wb3J0YW50O1xyXG5cclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDI1JSwgMTAwJSA3NSUsIDUwJSAxMDAlLCAwJSA3NSUsIDAlIDI1JSk7XHJcbn1cclxuLmxvZ2luTmF2OmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjRDA1QjIzICFpbXBvcnRhbnQ7XHJcbiAgY29sb3I6IHdoaXRlICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhyIHtcclxuICBkaXNwbGF5OiBub25lO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLmxvZ2luTmF2IHtcclxuICAgIGNsaXAtcGF0aDogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgfVxyXG59XHJcbi5uYXZiYXItYnJhbmQ6aG92ZXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjogI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtIHtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbCBlYXNlO1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgZ3JleTtcclxufVxyXG4uZHJvcGRvd24taXRlbTpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lO1xyXG59XHJcbi5kcm9wZG93bi1pdGVtOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1zdWJtaXQpO1xyXG59XHJcbi5hY3RpdmUgLm5hdi1saW5re1xyXG4gIGNvbG9yIDogI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uYWN0aXZlQnJhbmQge1xyXG4gIGNvbG9yOiAgI2ZmOGUwMCAhaW1wb3J0YW50O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "Neo8":
    /*!*************************************************************!*\
      !*** ./src/app/core/interceptors/http-error.interceptor.ts ***!
      \*************************************************************/

    /*! exports provided: InterceptorSkipHeader, HttpErrorInterceptor */

    /***/
    function Neo8(module, __webpack_exports__, __webpack_require__) {
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


      var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! rxjs */
      "qCKp");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");

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
            var _this19 = this;

            if (request.headers.has(InterceptorSkipHeader)) {
              var headers = request.headers["delete"](InterceptorSkipHeader);
              return next.handle(request.clone({
                headers: headers
              }));
            }

            return next.handle(request).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["retry"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["catchError"])(function (error) {
              _this19.shared.loading = false;
              var errorTitle;
              var errorMessage;

              if (error.error) {
                errorTitle = error.error.err;
                errorMessage = error.error.desc;

                _this19.toastr.error(errorMessage, errorTitle);
              } else {
                errorTitle = "Kod b\u0142\u0119du: ".concat(error.status);
                errorMessage = "Wiadomo\u015B\u0107: ".concat(error.message);

                _this19.toastr.error(errorMessage, errorTitle);
              }

              return Object(rxjs__WEBPACK_IMPORTED_MODULE_0__["throwError"])(errorMessage);
            }));
          }
        }]);

        return HttpErrorInterceptor;
      }();
      /***/

    },

    /***/
    "NuXY":
    /*!************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework-finished/homework-finished.component.scss ***!
      \************************************************************************************************/

    /*! exports provided: default */

    /***/
    function NuXY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".singeHomeworkDesc {\n  background: #43AA8B;\n  border-radius: var(--rad);\n  padding: 10px;\n  transition: 0.3s all;\n  border: 2px solid inherit;\n}\n\n.singeHomeworkDesc:hover {\n  box-shadow: 0 0 10px 3px black;\n}\n\n.singeHomeworkDescFocused {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.homeworkDesc {\n  border: 2px solid black;\n  border-bottom-right-radius: var(--rad);\n  border-bottom-left-radius: var(--rad);\n  background: #90BE6D;\n}\n\n.markMarked {\n  color: #AA4362;\n  background: inherit;\n  font-size: 28px;\n}\n\n.markNoMarked {\n  background: inherit;\n  font-size: 28px;\n}\n\n.list-group {\n  max-height: 400px;\n  overflow-y: scroll;\n}\n\n.list-group-item {\n  transition: 0.5s all ease;\n}\n\n.list-group-item:hover {\n  background: #F9C74F;\n  cursor: pointer;\n}\n\n.green {\n  color: var(--green);\n}\n\n.red {\n  color: var(--warn);\n}\n\n.example_d {\n  font-size: 25px;\n  font-weight: bold;\n  padding: 0;\n  color: #F8961E;\n}\n\n.description {\n  border-bottom: 2px solid black;\n}\n\n.fa-trash {\n  cursor: pointer;\n  padding: 15px;\n  text-align: center;\n  color: #151515;\n  background: var(--warn);\n  border-radius: var(--rad);\n  font-size: 45px;\n  transition: all 0.3s;\n}\n\n.fa-trash:hover {\n  box-shadow: 0 0 10px 5px rgba(0, 0, 0, 0.75);\n  background: #f16127;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbWV3b3JrLWZpbmlzaGVkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFHRSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLGNBQUE7RUFDQSxtQkFBQTtFQUNBLGVBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQU1GOztBQUpBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtBQU9GOztBQUxBO0VBQ0UseUJBQUE7QUFRRjs7QUFOQTtFQUNFLG1CQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsbUJBQUE7QUFVRjs7QUFSQTtFQUNHLGtCQUFBO0FBV0g7O0FBVEE7RUFDRSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxVQUFBO0VBQ0EsY0FBQTtBQVlGOztBQVZBO0VBQ0UsOEJBQUE7QUFhRjs7QUFYQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxjQUFBO0VBQ0EsdUJBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxvQkFBQTtBQWNGOztBQVpBO0VBR0UsNENBQUE7RUFDQSxtQkFBQTtBQWVGIiwiZmlsZSI6ImhvbWV3b3JrLWZpbmlzaGVkLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNpbmdlSG9tZXdvcmtEZXNjIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgcGFkZGluZzogMTBweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICBib3JkZXI6IDJweCBzb2xpZCBpbmhlcml0O1xyXG59XHJcbi5zaW5nZUhvbWV3b3JrRGVzYzpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCAzcHggcmdiYSgwLDAsMCwxKTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsMCwwLDEpO1xyXG59XHJcbi5zaW5nZUhvbWV3b3JrRGVzY0ZvY3VzZWQge1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiAwO1xyXG4gIGJvcmRlci1ib3R0b20tbGVmdC1yYWRpdXM6IDA7XHJcbn1cclxuLmhvbWV3b3JrRGVzYyB7XHJcbiAgYm9yZGVyOiAycHggc29saWQgYmxhY2s7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBiYWNrZ3JvdW5kOiAjOTBCRTZEO1xyXG59XHJcbi5tYXJrTWFya2VkIHtcclxuICBjb2xvcjogI0FBNDM2MjtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ubWFya05vTWFya2VkIHtcclxuICBiYWNrZ3JvdW5kOiBpbmhlcml0O1xyXG4gIGZvbnQtc2l6ZTogMjhweDtcclxufVxyXG4ubGlzdC1ncm91cCB7XHJcbiAgbWF4LWhlaWdodDogNDAwcHg7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5saXN0LWdyb3VwLWl0ZW0ge1xyXG4gIHRyYW5zaXRpb246IDAuNXMgYWxsIGVhc2U7XHJcbn1cclxuLmxpc3QtZ3JvdXAtaXRlbTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI0Y5Qzc0RjtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuLmdyZWVuIHtcclxuICBjb2xvcjogdmFyKC0tZ3JlZW4pXHJcbn1cclxuLnJlZCB7XHJcbiAgIGNvbG9yOiB2YXIoLS13YXJuKVxyXG59XHJcbi5leGFtcGxlX2Qge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGNvbG9yOiAjRjg5NjFFO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5mYS10cmFzaCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDE1cHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGNvbG9yOiByZ2IoMjEsIDIxLCAyMSk7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0td2Fybik7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBmb250LXNpemU6IDQ1cHg7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgO1xyXG59XHJcbi5mYS10cmFzaDpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTBweCA1cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxMHB4IDVweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJhY2tncm91bmQ6ICNmMTYxMjc7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "Nypu":
    /*!**********************************************************************************!*\
      !*** ./src/app/components/classrom/manage-classrom/manage-classrom.component.ts ***!
      \**********************************************************************************/

    /*! exports provided: ManageClassromComponent */

    /***/
    function Nypu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ManageClassromComponent", function () {
        return ManageClassromComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_manage_classrom_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./manage-classrom.component.html */
      "le2L");
      /* harmony import */


      var _manage_classrom_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./manage-classrom.component.scss */
      "NBzH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");

      var ManageClassromComponent = /*#__PURE__*/function () {
        function ManageClassromComponent(classService, main) {
          _classCallCheck(this, ManageClassromComponent);

          this.classService = classService;
          this.main = main;
          this.submittedFirstPart = false;
          this.submittedSecondPart = false;
          this.initializeForms();
        }

        _createClass(ManageClassromComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this20 = this;

            this.deleteSubjectForm.get('classID').valueChanges.subscribe(function (val) {
              _this20.classrom = _this20.main.classrom.find(function (v) {
                return v.id === val;
              });
            });
          }
        }, {
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
          key: "deleteSubject",
          value: function deleteSubject() {
            if (this.deleteSubjectForm.valid) {
              this.classService.deleteSubject(this.deleteSubjectForm.value);
            }
          }
        }, {
          key: "initializeForms",
          value: function initializeForms() {
            this.addClassromForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              className: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]),
              schoolName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required])
            });
            this.addSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              userToAddEmail: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]),
              classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(22)]),
              subjectName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
            this.deleteSubjectForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormGroup"]({
              classID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(22)]),
              subjectID: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]('', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required)
            });
          }
        }]);

        return ManageClassromComponent;
      }();

      ManageClassromComponent.ctorParameters = function () {
        return [{
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }];
      };

      ManageClassromComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-new-classrom',
        template: _raw_loader_manage_classrom_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_manage_classrom_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ManageClassromComponent);
      /***/
    },

    /***/
    "Oa1a":
    /*!************************************************************************!*\
      !*** ./src/app/components/static-pages/profile/profile.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function Oa1a(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.contactDetails {\n  background: #E0FBFC;\n}\n\n.cover {\n  height: 100%;\n}\n\n@media (max-width: 992px) {\n  .cover {\n    height: auto !important;\n  }\n}\n\n.rest {\n  margin-top: -150px;\n  padding-top: 150px;\n  background: var(--submit);\n}\n\n.contactUs {\n  background: #43AA8B;\n  border-top-left-radius: var(--rad);\n  border-top-right-radius: var(--rad);\n  text-align: center;\n  margin: 0;\n  padding: 20px;\n  border-bottom: 2px solid black;\n}\n\n.container {\n  border-radius: var(--rad) !important;\n}\n\n.singeInfo {\n  padding: 10px;\n  margin-bottom: 3px;\n  border-bottom: 2px solid grey;\n  font-size: 35px;\n}\n\n.singeInfo:last-child {\n  border-bottom: none !important;\n}\n\n@media (min-width: 720px) {\n  .infoRow {\n    border-left: 2px solid grey;\n  }\n}\n\n@media (max-width: 720px) {\n  .profilePicRow {\n    border-bottom: 2px solid grey;\n  }\n}\n\n.img-fluid {\n  border: 4px solid #F8961E;\n  border-radius: var(--rad);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccHJvZmlsZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLHVCQUFBO0VBQ0EsYUFBQTtFQUNBLDBFQUFBO1VBQUEsa0VBQUE7QUFDRjs7QUFDQTtFQUNFO0lBQ0UscUZBQUE7WUFBQSw2RUFBQTtFQUVGO0FBQ0Y7O0FBQUE7RUFDRSxtQkFBQTtBQUVGOztBQUFBO0VBQ0UsWUFBQTtBQUdGOztBQURBO0VBQ0U7SUFDRSx1QkFBQTtFQUlGO0FBQ0Y7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EseUJBQUE7QUFJRjs7QUFGQTtFQUNFLG1CQUFBO0VBQ0Esa0NBQUE7RUFDQSxtQ0FBQTtFQUNBLGtCQUFBO0VBQ0EsU0FBQTtFQUNBLGFBQUE7RUFDQSw4QkFBQTtBQUtGOztBQUhBO0VBQ0Usb0NBQUE7QUFNRjs7QUFKQTtFQUNFLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDZCQUFBO0VBQ0EsZUFBQTtBQU9GOztBQUxBO0VBQ0UsOEJBQUE7QUFRRjs7QUFMQTtFQUNFO0lBQ0UsMkJBQUE7RUFRRjtBQUNGOztBQU5BO0VBQ0U7SUFDRSw2QkFBQTtFQVFGO0FBQ0Y7O0FBTkE7RUFDRSx5QkFBQTtFQUNBLHlCQUFBO0FBUUYiLCJmaWxlIjoicHJvZmlsZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1tYWluKTtcclxuICBwYWRkaW5nOjI1cHg7XHJcbiAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDY1JSwgNTAlIDEwMCUsIDAgNjUlLCAwIDApO1xyXG59XHJcbkBtZWRpYShtYXgtd2lkdGg6IDcyMHB4KSB7XHJcbiAgLm1haW5EaXYge1xyXG4gICAgY2xpcC1wYXRoOiBwb2x5Z29uKDUwJSAwJSwgMTAwJSAwLCAxMDAlIDg1JSwgNTAlIDEwMCUsIDAgODUlLCAwIDApICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5jb250YWN0RGV0YWlscyB7XHJcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcclxufVxyXG4uY292ZXIge1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5AbWVkaWEgKG1heC13aWR0aDogOTkycHgpIHtcclxuICAuY292ZXIge1xyXG4gICAgaGVpZ2h0OiBhdXRvICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG59XHJcbi5yZXN0IHtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgcGFkZGluZy10b3A6IDE1MHB4O1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXN1Ym1pdClcclxufVxyXG4uY29udGFjdFVzIHtcclxuICBiYWNrZ3JvdW5kOiAjNDNBQThCO1xyXG4gIGJvcmRlci10b3AtbGVmdC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbjogMDtcclxuICBwYWRkaW5nOjIwcHg7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5jb250YWluZXIge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCkgIWltcG9ydGFudDtcclxufVxyXG4uc2luZ2VJbmZvIHtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDNweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgZ3JleTtcclxuICBmb250LXNpemU6IDM1cHg7XHJcbn1cclxuLnNpbmdlSW5mbzpsYXN0LWNoaWxkIHtcclxuICBib3JkZXItYm90dG9tOiBub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbkBtZWRpYShtaW4td2lkdGg6IDcyMHB4KSB7XHJcbiAgLmluZm9Sb3cge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCBncmV5O1xyXG4gIH1cclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA3MjBweCkge1xyXG4gIC5wcm9maWxlUGljUm93IHtcclxuICAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBncmV5O1xyXG4gIH1cclxufVxyXG4uaW1nLWZsdWlkIHtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjRjg5NjFFO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "P/E5":
    /*!************************************************************************!*\
      !*** ./src/app/components/static-pages/welcome/welcome.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function PE5(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".main {\n  padding: 0;\n  margin: 0;\n}\n\n.mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 85%, 50% 100%, 0 85%, 0 0) !important;\n  }\n}\n\n.homeSchoolH1 {\n  font-size: 60px !important;\n}\n\n.homeSchoolH2 {\n  font-size: 45px !important;\n}\n\n.fas, .fab {\n  color: #ff7233;\n}\n\n.iconsDiv {\n  margin: 50px 0;\n}\n\n.iconsDiv2 {\n  margin: 0;\n}\n\n.singleIconsDiv {\n  padding: 10px;\n}\n\n.icon {\n  font-size: 70px;\n}\n\n.descriptionText {\n  background: #DADDE5;\n  padding: 40px;\n}\n\n.descriptionImg {\n  min-height: 300px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  padding: 0;\n  height: 296px;\n}\n\n@media (min-width: 992px) {\n  .descriptionImg {\n    height: 100% !important;\n  }\n\n  .descriptionText {\n    padding: 100px !important;\n  }\n}\n\n.descriptionImg1 {\n  background-image: url('studingfromhome1.jpg');\n}\n\n.descriptionImg2 {\n  background-image: url('studingfromhome2.jpg');\n}\n\n.descriptionImg3 {\n  background-image: url('studingfromhome3.jpg');\n}\n\n.buyDiv {\n  padding: 50px;\n  background: #EEC643;\n  margin: 0;\n}\n\n.app-paypal {\n  color: white;\n  border-radius: 10px;\n  padding: 20px;\n  background: #2F405C;\n  width: 80%;\n}\n\n.descriptionRow {\n  margin: 0;\n  padding: 0;\n}\n\n.personIMG {\n  width: 300px !important;\n  height: 300px !important;\n  border-radius: 50%;\n  overflow: hidden;\n}\n\n.descriptionDiv {\n  margin-bottom: 10px;\n}\n\n.footer {\n  background: var(--main);\n  width: 100%;\n  min-height: 64px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcd2VsY29tZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFVBQUE7RUFDQSxTQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGFBQUE7RUFDQSwwRUFBQTtVQUFBLGtFQUFBO0FBRUY7O0FBQUE7RUFDRTtJQUNFLHFGQUFBO1lBQUEsNkVBQUE7RUFHRjtBQUNGOztBQURBO0VBQ0UsMEJBQUE7QUFHRjs7QUFEQTtFQUNFLDBCQUFBO0FBSUY7O0FBRkE7RUFDRSxjQUFBO0FBS0Y7O0FBSEE7RUFDRSxjQUFBO0FBTUY7O0FBSkE7RUFDRSxTQUFBO0FBT0Y7O0FBSkE7RUFDRSxhQUFBO0FBT0Y7O0FBTEE7RUFDRSxlQUFBO0FBUUY7O0FBTkE7RUFDRSxtQkFBQTtFQUNBLGFBQUE7QUFTRjs7QUFQQTtFQUNFLGlCQUFBO0VBQ0EsMkJBQUE7RUFDQSw0QkFBQTtFQUNBLHNCQUFBO0VBQ0EsVUFBQTtFQUNBLGFBQUE7QUFVRjs7QUFSQTtFQUNFO0lBQ0UsdUJBQUE7RUFXRjs7RUFUQTtJQUNFLHlCQUFBO0VBWUY7QUFDRjs7QUFWQTtFQUNFLDZDQUFBO0FBWUY7O0FBVkE7RUFDRSw2Q0FBQTtBQWFGOztBQVhBO0VBQ0UsNkNBQUE7QUFjRjs7QUFaQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFNBQUE7QUFlRjs7QUFiQTtFQUNFLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7QUFnQkY7O0FBZEE7RUFDRSxTQUFBO0VBQ0EsVUFBQTtBQWlCRjs7QUFmQTtFQUNFLHVCQUFBO0VBQ0Esd0JBQUE7RUFDQSxrQkFBQTtFQUNBLGdCQUFBO0FBa0JGOztBQWhCQTtFQUNFLG1CQUFBO0FBbUJGOztBQWpCQTtFQUNFLHVCQUFBO0VBRUEsV0FBQTtFQUNBLGdCQUFBO0FBbUJGIiwiZmlsZSI6IndlbGNvbWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbiB7XHJcbiAgcGFkZGluZzogMDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgODUlLCA1MCUgMTAwJSwgMCA4NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmhvbWVTY2hvb2xIMSB7XHJcbiAgZm9udC1zaXplOiA2MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmhvbWVTY2hvb2xIMiB7XHJcbiAgZm9udC1zaXplOiA0NXB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmZhcywgLmZhYiB7XHJcbiAgY29sb3I6ICNmZjcyMzM7XHJcbn1cclxuLmljb25zRGl2IHtcclxuICBtYXJnaW46IDUwcHggMDtcclxufVxyXG4uaWNvbnNEaXYyIHtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcbi5zaW5nbGVJY29uc0RpdiB7XHJcbiAgcGFkZGluZzoxMHB4O1xyXG59XHJcbi5pY29uIHtcclxuICBmb250LXNpemU6IDcwcHg7XHJcbn1cclxuLmRlc2NyaXB0aW9uVGV4dCB7XHJcbiAgYmFja2dyb3VuZDogI0RBRERFNTtcclxuICBwYWRkaW5nOiA0MHB4O1xyXG59XHJcbi5kZXNjcmlwdGlvbkltZyB7XHJcbiAgbWluLWhlaWdodDogMzAwcHg7XHJcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xyXG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XHJcbiAgYmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcclxuICBwYWRkaW5nOiAwO1xyXG4gIGhlaWdodDogMjk2cHg7XHJcbn1cclxuQG1lZGlhKG1pbi13aWR0aDogOTkycHgpIHtcclxuICAuZGVzY3JpcHRpb25JbWcge1xyXG4gICAgaGVpZ2h0OiAxMDAlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG4gIC5kZXNjcmlwdGlvblRleHQge1xyXG4gICAgcGFkZGluZzogMTAwcHggIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLmRlc2NyaXB0aW9uSW1nMSB7XHJcbiAgYmFja2dyb3VuZC1pbWFnZTogdXJsKFwiLi4vLi4vLi4vLi4vYXNzZXRzL2ltZy9zdHVkaW5nZnJvbWhvbWUxLmpwZ1wiKTtcclxufVxyXG4uZGVzY3JpcHRpb25JbWcyIHtcclxuICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXCIuLi8uLi8uLi8uLi9hc3NldHMvaW1nL3N0dWRpbmdmcm9taG9tZTIuanBnXCIpO1xyXG59XHJcbi5kZXNjcmlwdGlvbkltZzMge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IHVybChcIi4uLy4uLy4uLy4uL2Fzc2V0cy9pbWcvc3R1ZGluZ2Zyb21ob21lMy5qcGdcIik7XHJcbn1cclxuLmJ1eURpdiB7XHJcbiAgcGFkZGluZzogNTBweDtcclxuICBiYWNrZ3JvdW5kOiAjRUVDNjQzO1xyXG4gIG1hcmdpbjogMDtcclxufVxyXG4uYXBwLXBheXBhbCB7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjMkY0MDVDO1xyXG4gIHdpZHRoOiA4MCU7XHJcbn1cclxuLmRlc2NyaXB0aW9uUm93IHtcclxuICBtYXJnaW46IDA7XHJcbiAgcGFkZGluZzogMDtcclxufVxyXG4ucGVyc29uSU1HIHtcclxuICB3aWR0aDogMzAwcHggIWltcG9ydGFudDtcclxuICBoZWlnaHQ6IDMwMHB4ICFpbXBvcnRhbnQ7XHJcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLmRlc2NyaXB0aW9uRGl2IHtcclxuICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG59XHJcbi5mb290ZXIge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG5cclxuICB3aWR0aDogMTAwJTtcclxuICBtaW4taGVpZ2h0OiA2NHB4O1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "QHrJ":
    /*!****************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework/homework.component.ts ***!
      \****************************************************************************/

    /*! exports provided: HomeworkComponent */

    /***/
    function QHrJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeworkComponent", function () {
        return HomeworkComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homework_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homework.component.html */
      "LjPw");
      /* harmony import */


      var _homework_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homework.component.scss */
      "rRbH");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);

      var HomeworkComponent = /*#__PURE__*/function () {
        function HomeworkComponent() {
          _classCallCheck(this, HomeworkComponent);

          this.clickedStatus = false;
        }

        _createClass(HomeworkComponent, [{
          key: "setHomeworkData",
          value: function setHomeworkData(hom) {
            this.homework = hom;
            var endDate = moment__WEBPACK_IMPORTED_MODULE_4__(this.homework.endDate);
            var currentTime = moment__WEBPACK_IMPORTED_MODULE_4__();
            var timeLeft = endDate.diff(currentTime, 'minutes');
            this.leftHours = Math.floor(timeLeft / 60);
            this.leftMinutes = Math.floor(timeLeft - this.leftHours * 60);
            this.startTime = moment__WEBPACK_IMPORTED_MODULE_4__(this.homework.createDate).format('YYYY-MM-DD HH:mm:ss');
            this.endTime = moment__WEBPACK_IMPORTED_MODULE_4__(this.homework.endDate).format('YYYY-MM-DD HH:mm:ss');
          }
        }, {
          key: "addFocusClass",
          value: function addFocusClass() {
            var _this21 = this;

            if (this.clickedStatus) {
              setTimeout(function () {
                return _this21.clickedStatus = !_this21.clickedStatus;
              }, 400);
            } else {
              this.clickedStatus = !this.clickedStatus;
            }
          }
        }, {
          key: "homeworkSet",
          set: function set(homework) {
            this.setHomeworkData(homework);
          }
        }, {
          key: "iteratorSet",
          set: function set(iter) {
            this.iterator = iter;
          }
        }]);

        return HomeworkComponent;
      }();

      HomeworkComponent.propDecorators = {
        homeworkSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        iteratorSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HomeworkComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homework',
        template: _raw_loader_homework_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homework_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeworkComponent);
      /***/
    },

    /***/
    "RnhZ":
    /*!**************************************************!*\
      !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
      \**************************************************/

    /*! no static exports found */

    /***/
    function RnhZ(module, exports, __webpack_require__) {
      var map = {
        "./af": "K/tc",
        "./af.js": "K/tc",
        "./ar": "jnO4",
        "./ar-dz": "o1bE",
        "./ar-dz.js": "o1bE",
        "./ar-kw": "Qj4J",
        "./ar-kw.js": "Qj4J",
        "./ar-ly": "HP3h",
        "./ar-ly.js": "HP3h",
        "./ar-ma": "CoRJ",
        "./ar-ma.js": "CoRJ",
        "./ar-sa": "gjCT",
        "./ar-sa.js": "gjCT",
        "./ar-tn": "bYM6",
        "./ar-tn.js": "bYM6",
        "./ar.js": "jnO4",
        "./az": "SFxW",
        "./az.js": "SFxW",
        "./be": "H8ED",
        "./be.js": "H8ED",
        "./bg": "hKrs",
        "./bg.js": "hKrs",
        "./bm": "p/rL",
        "./bm.js": "p/rL",
        "./bn": "kEOa",
        "./bn-bd": "loYQ",
        "./bn-bd.js": "loYQ",
        "./bn.js": "kEOa",
        "./bo": "0mo+",
        "./bo.js": "0mo+",
        "./br": "aIdf",
        "./br.js": "aIdf",
        "./bs": "JVSJ",
        "./bs.js": "JVSJ",
        "./ca": "1xZ4",
        "./ca.js": "1xZ4",
        "./cs": "PA2r",
        "./cs.js": "PA2r",
        "./cv": "A+xa",
        "./cv.js": "A+xa",
        "./cy": "l5ep",
        "./cy.js": "l5ep",
        "./da": "DxQv",
        "./da.js": "DxQv",
        "./de": "tGlX",
        "./de-at": "s+uk",
        "./de-at.js": "s+uk",
        "./de-ch": "u3GI",
        "./de-ch.js": "u3GI",
        "./de.js": "tGlX",
        "./dv": "WYrj",
        "./dv.js": "WYrj",
        "./el": "jUeY",
        "./el.js": "jUeY",
        "./en-au": "Dmvi",
        "./en-au.js": "Dmvi",
        "./en-ca": "OIYi",
        "./en-ca.js": "OIYi",
        "./en-gb": "Oaa7",
        "./en-gb.js": "Oaa7",
        "./en-ie": "4dOw",
        "./en-ie.js": "4dOw",
        "./en-il": "czMo",
        "./en-il.js": "czMo",
        "./en-in": "7C5Q",
        "./en-in.js": "7C5Q",
        "./en-nz": "b1Dy",
        "./en-nz.js": "b1Dy",
        "./en-sg": "t+mt",
        "./en-sg.js": "t+mt",
        "./eo": "Zduo",
        "./eo.js": "Zduo",
        "./es": "iYuL",
        "./es-do": "CjzT",
        "./es-do.js": "CjzT",
        "./es-mx": "tbfe",
        "./es-mx.js": "tbfe",
        "./es-us": "Vclq",
        "./es-us.js": "Vclq",
        "./es.js": "iYuL",
        "./et": "7BjC",
        "./et.js": "7BjC",
        "./eu": "D/JM",
        "./eu.js": "D/JM",
        "./fa": "jfSC",
        "./fa.js": "jfSC",
        "./fi": "gekB",
        "./fi.js": "gekB",
        "./fil": "1ppg",
        "./fil.js": "1ppg",
        "./fo": "ByF4",
        "./fo.js": "ByF4",
        "./fr": "nyYc",
        "./fr-ca": "2fjn",
        "./fr-ca.js": "2fjn",
        "./fr-ch": "Dkky",
        "./fr-ch.js": "Dkky",
        "./fr.js": "nyYc",
        "./fy": "cRix",
        "./fy.js": "cRix",
        "./ga": "USCx",
        "./ga.js": "USCx",
        "./gd": "9rRi",
        "./gd.js": "9rRi",
        "./gl": "iEDd",
        "./gl.js": "iEDd",
        "./gom-deva": "qvJo",
        "./gom-deva.js": "qvJo",
        "./gom-latn": "DKr+",
        "./gom-latn.js": "DKr+",
        "./gu": "4MV3",
        "./gu.js": "4MV3",
        "./he": "x6pH",
        "./he.js": "x6pH",
        "./hi": "3E1r",
        "./hi.js": "3E1r",
        "./hr": "S6ln",
        "./hr.js": "S6ln",
        "./hu": "WxRl",
        "./hu.js": "WxRl",
        "./hy-am": "1rYy",
        "./hy-am.js": "1rYy",
        "./id": "UDhR",
        "./id.js": "UDhR",
        "./is": "BVg3",
        "./is.js": "BVg3",
        "./it": "bpih",
        "./it-ch": "bxKX",
        "./it-ch.js": "bxKX",
        "./it.js": "bpih",
        "./ja": "B55N",
        "./ja.js": "B55N",
        "./jv": "tUCv",
        "./jv.js": "tUCv",
        "./ka": "IBtZ",
        "./ka.js": "IBtZ",
        "./kk": "bXm7",
        "./kk.js": "bXm7",
        "./km": "6B0Y",
        "./km.js": "6B0Y",
        "./kn": "PpIw",
        "./kn.js": "PpIw",
        "./ko": "Ivi+",
        "./ko.js": "Ivi+",
        "./ku": "JCF/",
        "./ku.js": "JCF/",
        "./ky": "lgnt",
        "./ky.js": "lgnt",
        "./lb": "RAwQ",
        "./lb.js": "RAwQ",
        "./lo": "sp3z",
        "./lo.js": "sp3z",
        "./lt": "JvlW",
        "./lt.js": "JvlW",
        "./lv": "uXwI",
        "./lv.js": "uXwI",
        "./me": "KTz0",
        "./me.js": "KTz0",
        "./mi": "aIsn",
        "./mi.js": "aIsn",
        "./mk": "aQkU",
        "./mk.js": "aQkU",
        "./ml": "AvvY",
        "./ml.js": "AvvY",
        "./mn": "lYtQ",
        "./mn.js": "lYtQ",
        "./mr": "Ob0Z",
        "./mr.js": "Ob0Z",
        "./ms": "6+QB",
        "./ms-my": "ZAMP",
        "./ms-my.js": "ZAMP",
        "./ms.js": "6+QB",
        "./mt": "G0Uy",
        "./mt.js": "G0Uy",
        "./my": "honF",
        "./my.js": "honF",
        "./nb": "bOMt",
        "./nb.js": "bOMt",
        "./ne": "OjkT",
        "./ne.js": "OjkT",
        "./nl": "+s0g",
        "./nl-be": "2ykv",
        "./nl-be.js": "2ykv",
        "./nl.js": "+s0g",
        "./nn": "uEye",
        "./nn.js": "uEye",
        "./oc-lnc": "Fnuy",
        "./oc-lnc.js": "Fnuy",
        "./pa-in": "8/+R",
        "./pa-in.js": "8/+R",
        "./pl": "jVdC",
        "./pl.js": "jVdC",
        "./pt": "8mBD",
        "./pt-br": "0tRk",
        "./pt-br.js": "0tRk",
        "./pt.js": "8mBD",
        "./ro": "lyxo",
        "./ro.js": "lyxo",
        "./ru": "lXzo",
        "./ru.js": "lXzo",
        "./sd": "Z4QM",
        "./sd.js": "Z4QM",
        "./se": "//9w",
        "./se.js": "//9w",
        "./si": "7aV9",
        "./si.js": "7aV9",
        "./sk": "e+ae",
        "./sk.js": "e+ae",
        "./sl": "gVVK",
        "./sl.js": "gVVK",
        "./sq": "yPMs",
        "./sq.js": "yPMs",
        "./sr": "zx6S",
        "./sr-cyrl": "E+lV",
        "./sr-cyrl.js": "E+lV",
        "./sr.js": "zx6S",
        "./ss": "Ur1D",
        "./ss.js": "Ur1D",
        "./sv": "X709",
        "./sv.js": "X709",
        "./sw": "dNwA",
        "./sw.js": "dNwA",
        "./ta": "PeUW",
        "./ta.js": "PeUW",
        "./te": "XLvN",
        "./te.js": "XLvN",
        "./tet": "V2x9",
        "./tet.js": "V2x9",
        "./tg": "Oxv6",
        "./tg.js": "Oxv6",
        "./th": "EOgW",
        "./th.js": "EOgW",
        "./tk": "Wv91",
        "./tk.js": "Wv91",
        "./tl-ph": "Dzi0",
        "./tl-ph.js": "Dzi0",
        "./tlh": "z3Vd",
        "./tlh.js": "z3Vd",
        "./tr": "DoHr",
        "./tr.js": "DoHr",
        "./tzl": "z1FC",
        "./tzl.js": "z1FC",
        "./tzm": "wQk9",
        "./tzm-latn": "tT3J",
        "./tzm-latn.js": "tT3J",
        "./tzm.js": "wQk9",
        "./ug-cn": "YRex",
        "./ug-cn.js": "YRex",
        "./uk": "raLr",
        "./uk.js": "raLr",
        "./ur": "UpQW",
        "./ur.js": "UpQW",
        "./uz": "Loxo",
        "./uz-latn": "AQ68",
        "./uz-latn.js": "AQ68",
        "./uz.js": "Loxo",
        "./vi": "KSF8",
        "./vi.js": "KSF8",
        "./x-pseudo": "/X5v",
        "./x-pseudo.js": "/X5v",
        "./yo": "fzPg",
        "./yo.js": "fzPg",
        "./zh-cn": "XDpg",
        "./zh-cn.js": "XDpg",
        "./zh-hk": "SatO",
        "./zh-hk.js": "SatO",
        "./zh-mo": "OmwH",
        "./zh-mo.js": "OmwH",
        "./zh-tw": "kOpN",
        "./zh-tw.js": "kOpN"
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
      webpackContext.id = "RnhZ";
      /***/
    },

    /***/
    "S39P":
    /*!********************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/main-teacher/main-teacher.component.html ***!
      \********************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function S39P(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex h-100 flex-column\">\r\n  <div class=\"text-center mainDiv\">\r\n    <div class=\"fontBigger\">Strona główna</div>\r\n    <div class=\"mb-5 fontMedium \">Najnowsze informacje</div>\r\n  </div>\r\n  <div class=\"row rest justify-content-around align-items-start\">\r\n    <div class=\"col-lg-8 col-12 \">\r\n      <div class=\"text-center classromDiv row p-0 justify-content-center\">\r\n        <div class=\"mb-2 fontMedium\">Twoje klasy</div>\r\n        <div *ngFor=\"let classrom of this.main.classrom; let i = index\" [routerLink]=\"['/classrom', i]\" class=\"singleClassrom col-11 row justify-content-center align-items-center mb-3\">\r\n          <div class=\"col-lg-9 col-12 d-block text-center text-lg-left fontNormal\">{{classrom.className}} - {{classrom.schoolName}}</div>\r\n          <div class=\"col-lg-3 col-12 d-block text-right showCode text-center mb-2 mb-lg-0 fontNormal\" (click)=\"this.showCode($event, classrom.id)\">Kod dostępu</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"col-md-3 col-12\">\r\n      <div class=\"classromDiv text-center row p-0 justify-content-center\">\r\n        <div class=\"fontMedium\">Ostatnie wiadomości</div>\r\n        <div class=\"fontMedium\">Wkrótce!</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "SLNG":
    /*!********************************************************************************************!*\
      !*** ./src/app/components/models/homework-response/homework-response-modal.component.scss ***!
      \********************************************************************************************/

    /*! exports provided: default */

    /***/
    function SLNG(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".markInput {\n  margin: 15px;\n  font-size: 40px;\n  width: 64px;\n  height: 64px;\n}\n\napp-homework-response {\n  border-bottom: 2px solid black;\n  padding-bottom: 15px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcaG9tZXdvcmstcmVzcG9uc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSw4QkFBQTtFQUNBLG9CQUFBO0FBRUYiLCJmaWxlIjoiaG9tZXdvcmstcmVzcG9uc2UtbW9kYWwuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFya0lucHV0IHtcclxuICBtYXJnaW46IDE1cHg7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG4gIHdpZHRoOiA2NHB4O1xyXG4gIGhlaWdodDogNjRweDtcclxufVxyXG5hcHAtaG9tZXdvcmstcmVzcG9uc2Uge1xyXG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "Sy1n":
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /*! exports provided: AppComponent */

    /***/
    function Sy1n(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
        return AppComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./app.component.html */
      "VzVu");
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app.component.scss */
      "ynWL");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./core/services/shared.service */
      "Im7X");

      var AppComponent = /*#__PURE__*/function () {
        function AppComponent(router, main, shared) {
          _classCallCheck(this, AppComponent);

          this.router = router;
          this.main = main;
          this.shared = shared;
        }

        _createClass(AppComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            if (localStorage.getItem('homeschooltoken')) {
              this.main.loginViaToken();
            } else {
              this.shared.loading = false;
              this.main.redirect();
            }
          }
        }]);

        return AppComponent;
      }();

      AppComponent.ctorParameters = function () {
        return [{
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_6__["SharedService"]
        }];
      };

      AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-root',
        template: _raw_loader_app_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], AppComponent);
      /***/
    },

    /***/
    "T7ZU":
    /*!**********************************************************************!*\
      !*** ./src/app/components/models/show-code/show-code.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function T7ZU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".headerText {\n  border-bottom: 2px solid var(--main) !important;\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 7px;\n  padding: 5px;\n}\n\n.code {\n  font-size: 30px;\n  padding: 10px;\n  text-align: center;\n  color: var(--warn);\n  transition: all 0.3s ease;\n  font-weight: bold;\n}\n\n@media (max-width: 720px) {\n  .code {\n    font-size: 22px;\n  }\n}\n\n.tooltip {\n  position: relative;\n  display: inline-block;\n  border-bottom: 1px dotted black;\n  /* If you want dots under the hoverable text */\n}\n\n/* Tooltip text */\n\n.tooltip .tooltiptext {\n  visibility: hidden;\n  width: 120px;\n  background-color: black;\n  color: #fff;\n  text-align: center;\n  padding: 5px 0;\n  border-radius: 6px;\n  /* Position the tooltip text - see examples below! */\n  position: absolute;\n  z-index: 1;\n}\n\n/* Show the tooltip text when you mouse over the tooltip container */\n\n.tooltip:hover .tooltiptext {\n  visibility: visible;\n}\n\n.modal-content:hover {\n  cursor: pointer;\n}\n\n.modal-content:hover .code {\n  color: red;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcc2hvdy1jb2RlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsK0NBQUE7RUFDQSxrQkFBQTtFQUNBLGVBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFDRjs7QUFDQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsaUJBQUE7QUFFRjs7QUFBQTtFQUNFO0lBQ0UsZUFBQTtFQUdGO0FBQ0Y7O0FBREE7RUFDRSxrQkFBQTtFQUNBLHFCQUFBO0VBQ0EsK0JBQUE7RUFBaUMsOENBQUE7QUFJbkM7O0FBREEsaUJBQUE7O0FBQ0E7RUFDRSxrQkFBQTtFQUNBLFlBQUE7RUFDQSx1QkFBQTtFQUNBLFdBQUE7RUFDQSxrQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUVBLG9EQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0FBR0Y7O0FBQUEsb0VBQUE7O0FBQ0E7RUFDRSxtQkFBQTtBQUdGOztBQURBO0VBQ0UsZUFBQTtBQUlGOztBQUZBO0VBQ0UsVUFBQTtBQUtGIiwiZmlsZSI6InNob3ctY29kZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5oZWFkZXJUZXh0IHtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgdmFyKC0tbWFpbikgIWltcG9ydGFudDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOjM1cHg7XHJcbiAgbWFyZ2luLWJvdHRvbTogN3B4O1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG4uY29kZSB7XHJcbiAgZm9udC1zaXplOiAzMHB4O1xyXG4gIHBhZGRpbmc6MTBweDtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY29sb3I6IHZhcigtLXdhcm4pO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2U7XHJcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAuY29kZSB7XHJcbiAgICBmb250LXNpemU6IDIycHg7XHJcbiAgfVxyXG59XHJcbi50b29sdGlwIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGJvcmRlci1ib3R0b206IDFweCBkb3R0ZWQgYmxhY2s7IC8qIElmIHlvdSB3YW50IGRvdHMgdW5kZXIgdGhlIGhvdmVyYWJsZSB0ZXh0ICovXHJcbn1cclxuXHJcbi8qIFRvb2x0aXAgdGV4dCAqL1xyXG4udG9vbHRpcCAudG9vbHRpcHRleHQge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICB3aWR0aDogMTIwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgY29sb3I6ICNmZmY7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDVweCAwO1xyXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcclxuXHJcbiAgLyogUG9zaXRpb24gdGhlIHRvb2x0aXAgdGV4dCAtIHNlZSBleGFtcGxlcyBiZWxvdyEgKi9cclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgei1pbmRleDogMTtcclxufVxyXG5cclxuLyogU2hvdyB0aGUgdG9vbHRpcCB0ZXh0IHdoZW4geW91IG1vdXNlIG92ZXIgdGhlIHRvb2x0aXAgY29udGFpbmVyICovXHJcbi50b29sdGlwOmhvdmVyIC50b29sdGlwdGV4dCB7XHJcbiAgdmlzaWJpbGl0eTogdmlzaWJsZTtcclxufVxyXG4ubW9kYWwtY29udGVudDpob3ZlciB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5tb2RhbC1jb250ZW50OmhvdmVyIC5jb2RlIHtcclxuICBjb2xvcjogcmVkO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "TwS8":
    /*!**********************************************************************!*\
      !*** ./src/app/components/classrom/classrom/classrom.component.scss ***!
      \**********************************************************************/

    /*! exports provided: default */

    /***/
    function TwS8(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  background: #F9C74F;\n  padding: 3px;\n  transition: 0.3s all;\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n}\n\n.mainDiv:hover {\n  box-shadow: 0px 0px 14px 6px #f8961e;\n}\n\n.collapseClass {\n  cursor: pointer;\n}\n\n.classrom {\n  flex: 1 1 auto;\n  position: relative;\n}\n\n.subjectToChoose {\n  font-size: 22px;\n  background: orange;\n  cursor: pointer;\n  -webkit-clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);\n          clip-path: polygon(15% 0, 100% 0, 85% 100%, 0% 100%);\n}\n\n.role1 {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2 {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n\n.subjectToChoose:hover {\n  background: orange !important;\n}\n\n.cover {\n  display: flex;\n  flex-flow: column;\n  min-height: 100%;\n  background: #E0FBFC;\n}\n\n.showCode {\n  text-align: center;\n  line-height: 63px;\n  padding: 5px;\n  margin-top: -20px;\n  cursor: pointer;\n  background: var(--warn);\n  border-radius: var(--rad);\n  transition: all 0.3s;\n}\n\n.showCode h2 {\n  font-size: 29px;\n}\n\n.showCode:hover {\n  background: #ff8e00;\n}\n\n.subject {\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n  background: #577590;\n  transition: all 0.5s;\n  padding: 40px !important;\n}\n\n.subjectsChoosing {\n  background: #F8961E;\n  box-shadow: 0px 0px 14px 6px rgba(0, 0, 0, 0.75);\n  padding: 40px !important;\n}\n\n.example_d {\n  padding: 5px !important;\n  color: #577590;\n  border: 4px solid #577590;\n}\n\n.example_d:hover {\n  box-shadow: 0px 0px 10px 3px #575457;\n  border-color: #F8961E !important;\n}\n\n.opacity0 {\n  opacity: 0;\n}\n\n.opacity1 {\n  opacity: 1;\n}\n\n.collapseClassInfo {\n  border-top: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcY2xhc3Nyb20uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxvQkFBQTtFQUdBLGdEQUFBO0FBQ0Y7O0FBQ0E7RUFHRSxvQ0FBQTtBQUVGOztBQUFBO0VBQ0UsZUFBQTtBQUdGOztBQURBO0VBQ0UsY0FBQTtFQUNBLGtCQUFBO0FBSUY7O0FBRkE7RUFDRSxlQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQUtGOztBQUhBO0VBQ0UsbUJBQUE7RUFDQSwwREFBQTtVQUFBLGtEQUFBO0FBTUY7O0FBSkE7RUFDRSxrQkFBQTtFQUNBLDREQUFBO1VBQUEsb0RBQUE7QUFPRjs7QUFKQTtFQUNFLDZCQUFBO0FBT0Y7O0FBTEE7RUFDRSxhQUFBO0VBQ0EsaUJBQUE7RUFDQSxnQkFBQTtFQUNBLG1CQUFBO0FBUUY7O0FBTkE7RUFDRSxrQkFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtFQUNBLGlCQUFBO0VBQ0EsZUFBQTtFQUNBLHVCQUFBO0VBQ0EseUJBQUE7RUFDQSxvQkFBQTtBQVNGOztBQVBBO0VBQ0UsZUFBQTtBQVVGOztBQVJBO0VBQ0UsbUJBQUE7QUFXRjs7QUFUQTtFQUdFLGdEQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLHdCQUFBO0FBWUY7O0FBVkE7RUFDRSxtQkFBQTtFQUdBLGdEQUFBO0VBQ0Esd0JBQUE7QUFhRjs7QUFYQTtFQUdFLHVCQUFBO0VBQ0EsY0FBQTtFQUNBLHlCQUFBO0FBWUY7O0FBVkE7RUFHRSxvQ0FBQTtFQUNBLGdDQUFBO0FBYUY7O0FBWEE7RUFDRSxVQUFBO0FBY0Y7O0FBWkE7RUFDRSxVQUFBO0FBZUY7O0FBYkE7RUFDRSwyQkFBQTtBQWdCRiIsImZpbGUiOiJjbGFzc3JvbS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluRGl2IHtcclxuICBiYWNrZ3JvdW5kOiAjRjlDNzRGO1xyXG4gIHBhZGRpbmc6IDNweDtcclxuICB0cmFuc2l0aW9uOiAwLjNzIGFsbDtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbn1cclxuLm1haW5EaXY6aG92ZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDI0OCwxNTAsMzAsMSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMjQ4LDE1MCwzMCwxKTtcclxuICBib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMjQ4LDE1MCwzMCwxKTtcclxufVxyXG4uY29sbGFwc2VDbGFzcyB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi5jbGFzc3JvbSB7XHJcbiAgZmxleDogMSAxIGF1dG87XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcbi5zdWJqZWN0VG9DaG9vc2Uge1xyXG4gIGZvbnQtc2l6ZTogMjJweDtcclxuICBiYWNrZ3JvdW5kOiBvcmFuZ2U7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigxNSUgMCwgMTAwJSAwLCA4NSUgMTAwJSwgMCUgMTAwJSk7XHJcbn1cclxuLnJvbGUxIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDc5JSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcbi5yb2xlMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAyMSUgMTAwJSk7XHJcbn1cclxuXHJcbi5zdWJqZWN0VG9DaG9vc2U6aG92ZXIge1xyXG4gIGJhY2tncm91bmQ6IG9yYW5nZSAhaW1wb3J0YW50O1xyXG59XHJcbi5jb3ZlciB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWZsb3c6IGNvbHVtbjtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIGJhY2tncm91bmQ6ICNFMEZCRkM7XHJcbn1cclxuLnNob3dDb2RlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbGluZS1oZWlnaHQ6IDYzcHg7XHJcbiAgcGFkZGluZzogNXB4O1xyXG4gIG1hcmdpbi10b3A6IC0yMHB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS13YXJuKTtcclxuICBib3JkZXItcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzO1xyXG59XHJcbi5zaG93Q29kZSBoMiB7XHJcbiAgZm9udC1zaXplOiAyOXB4O1xyXG59XHJcbi5zaG93Q29kZTpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogI2ZmOGUwMDtcclxufVxyXG4uc3ViamVjdCB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE0cHggNnB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJhY2tncm91bmQ6ICM1Nzc1OTA7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuNXM7XHJcbiAgcGFkZGluZzogNDBweCAhaW1wb3J0YW50O1xyXG59XHJcbi5zdWJqZWN0c0Nob29zaW5nIHtcclxuICBiYWNrZ3JvdW5kOiAjRjg5NjFFO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBwYWRkaW5nOiA0MHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuLmV4YW1wbGVfZCB7XHJcblxyXG5cclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxuICBjb2xvcjogIzU3NzU5MDtcclxuICBib3JkZXI6IDRweCBzb2xpZCAjNTc3NTkwO1xyXG59XHJcbi5leGFtcGxlX2Q6aG92ZXIge1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDNweCByZ2JhKDg3LDg0LDg3LDEpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAwcHggMTBweCAzcHggcmdiYSg4Nyw4NCw4NywxKTtcclxuICBib3JkZXItY29sb3I6ICNGODk2MUUgIWltcG9ydGFudDtcclxufVxyXG4ub3BhY2l0eTAge1xyXG4gIG9wYWNpdHk6IDA7XHJcbn1cclxuLm9wYWNpdHkxIHtcclxuICBvcGFjaXR5OiAxO1xyXG59XHJcbi5jb2xsYXBzZUNsYXNzSW5mbyB7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrXHJcbn1cclxuXHJcbiJdfQ== */";
      /***/
    },

    /***/
    "UtUD":
    /*!**********************************************************************!*\
      !*** ./src/app/components/models/marks-list/marks-list.component.ts ***!
      \**********************************************************************/

    /*! exports provided: MarksListComponent */

    /***/
    function UtUD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MarksListComponent", function () {
        return MarksListComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_marks_list_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./marks-list.component.html */
      "u3Mt");
      /* harmony import */


      var _marks_list_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./marks-list.component.scss */
      "dQLI");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");

      var MarksListComponent = /*#__PURE__*/function () {
        function MarksListComponent(shared) {
          _classCallCheck(this, MarksListComponent);

          this.shared = shared;
        }

        _createClass(MarksListComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this22 = this;

            this.shared.openMarksList.subscribe(function (res) {
              _this22.response = res;

              _this22.showMarksList.nativeElement.click();
            });
          }
        }]);

        return MarksListComponent;
      }();

      MarksListComponent.ctorParameters = function () {
        return [{
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      };

      MarksListComponent.propDecorators = {
        showMarksList: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['showMarksList']
        }]
      };
      MarksListComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-marks-list',
        template: _raw_loader_marks_list_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_marks_list_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MarksListComponent);
      /***/
    },

    /***/
    "VzVu":
    /*!**************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
      \**************************************************************************/

    /*! exports provided: default */

    /***/
    function VzVu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div *ngIf=\"this.shared.loading\" class=\"h-100 w-100 row justify-content-center align-items-center\">\n  <app-spinner class=\"h-100 w-100\"></app-spinner>\n</div>\n<div *ngIf=\"!this.shared.loading\" class=\"min\">\n  <app-navbar></app-navbar>\n  <div class=\"outlet\">\n    <router-outlet></router-outlet>\n  </div>\n</div>\n\n<!-- Modals -->\n<app-login></app-login>\n<app-register></app-register>\n<app-show-code></app-show-code>\n<app-homework-response-modal></app-homework-response-modal>\n<app-marks-list></app-marks-list>\n<app-show-members></app-show-members>\n";
      /***/
    },

    /***/
    "X4ox":
    /*!********************************************************************!*\
      !*** ./src/app/components/static-pages/navbar/navbar.component.ts ***!
      \********************************************************************/

    /*! exports provided: NavbarComponent */

    /***/
    function X4ox(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "NavbarComponent", function () {
        return NavbarComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./navbar.component.html */
      "1lHB");
      /* harmony import */


      var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./navbar.component.scss */
      "NWbu");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");

      var NavbarComponent = function NavbarComponent(shared, main) {
        _classCallCheck(this, NavbarComponent);

        this.shared = shared;
        this.main = main;
      };

      NavbarComponent.ctorParameters = function () {
        return [{
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      NavbarComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-navbar',
        template: _raw_loader_navbar_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], NavbarComponent);
      /***/
    },

    /***/
    "Y+C6":
    /*!***********************************************!*\
      !*** ./src/app/core/services/main.service.ts ***!
      \***********************************************/

    /*! exports provided: MainService */

    /***/
    function YC6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainService", function () {
        return MainService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./shared.service */
      "Im7X");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../interceptors/http-error.interceptor */
      "Neo8");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");

      var errorInterceptorSkip = new _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpHeaders"]().set(_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_5__["InterceptorSkipHeader"], '');

      var MainService = /*#__PURE__*/function () {
        function MainService(shared, http, router, toastr) {
          _classCallCheck(this, MainService);

          this.shared = shared;
          this.http = http;
          this.router = router;
          this.toastr = toastr;
          this.api = this.shared.apiUrl;
        }

        _createClass(MainService, [{
          key: "loginViaToken",
          value: function loginViaToken() {
            var _this23 = this;

            return this.http.get(this.api + 'UserAuth/loginviatoken', {
              headers: errorInterceptorSkip
            }).subscribe(function (res) {
              _this23.shared.loading = false;

              _this23.setUserDataAndToken(res);

              _this23.redirect();
            }, function () {
              _this23.shared.loading = false;
            });
          }
        }, {
          key: "login",
          value: function login(user) {
            var _this24 = this;

            return this.http.post(this.api + 'UserAuth/login', user).subscribe(function (res) {
              _this24.shared.loading = false;

              _this24.setUserDataAndToken(res);

              _this24.redirect();
            });
          }
        }, {
          key: "register",
          value: function register(user) {
            var _this25 = this;

            return this.http.post(this.api + 'UserAuth/register', user).subscribe(function (res) {
              _this25.shared.loading = false;

              _this25.setUserDataAndToken(res);

              _this25.toastr.success('Rejestracja przebiegła pomyślnie', 'Udało się!');

              _this25.shared.openRegisterModal();

              _this25.redirect();
            });
          }
        }, {
          key: "logout",
          value: function logout() {
            localStorage.removeItem('homeschooltoken');
            this.user = undefined;
            this.classrom = undefined;
            this.redirect();
          }
        }, {
          key: "setUserDataAndToken",
          value: function setUserDataAndToken(res) {
            this.user = res.userToReturn;
            this.classrom = res.classes;

            if (res.token) {
              localStorage.setItem('homeschooltoken', res.token);
            }
          }
        }, {
          key: "redirect",
          value: function redirect() {
            if (!this.user) {
              this.router.navigateByUrl('');
            } else if (this.user.userRole === 0) {
              this.router.navigateByUrl('student');
            } else if (this.user.userRole === 1) {
              this.router.navigateByUrl('/classrom/0');
            }
          }
        }]);

        return MainService;
      }();

      MainService.ctorParameters = function () {
        return [{
          type: _shared_service__WEBPACK_IMPORTED_MODULE_2__["SharedService"]
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
    "YtmO":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/models/homework-response/homework-response-modal.component.ts ***!
      \******************************************************************************************/

    /*! exports provided: HomeworkResponseModalComponent */

    /***/
    function YtmO(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeworkResponseModalComponent", function () {
        return HomeworkResponseModalComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homework_response_modal_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homework-response-modal.component.html */
      "iqQJ");
      /* harmony import */


      var _homework_response_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homework-response-modal.component.scss */
      "SLNG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ../../../core/services/class.service */
      "cNJU");

      var HomeworkResponseModalComponent = /*#__PURE__*/function () {
        function HomeworkResponseModalComponent(shared, toastr, main, classService) {
          _classCallCheck(this, HomeworkResponseModalComponent);

          this.shared = shared;
          this.toastr = toastr;
          this.main = main;
          this.classService = classService;
          this.markForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            mark: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('')
          });
        }

        _createClass(HomeworkResponseModalComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this26 = this;

            this.shared.openHomework.subscribe(function (res) {
              _this26.response = res;

              _this26.showHomework.nativeElement.click();
            });
          }
        }, {
          key: "addMark",
          value: function addMark() {
            var _this27 = this;

            this.setFormControls();

            if (!this.markForm.valid) {
              return;
            }

            this.classService.addNewMark(this.markForm.value).subscribe(function (res) {
              _this27.toastr.success('Pomyślnie dodano nową ocenę.', 'Udało się!');

              _this27.shared.openHomeworkModal(res);
            });
          }
        }, {
          key: "setFormControls",
          value: function setFormControls() {
            this.markForm.setControl('responseID', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.response.id));
            this.markForm.setControl('homeworkID', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.response.homeworkID));
            this.markForm.setControl('classID', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.main.currentClassrom.id));
            this.markForm.setControl('subjectID', new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"](this.main.currentSubject.id));
          }
        }]);

        return HomeworkResponseModalComponent;
      }();

      HomeworkResponseModalComponent.ctorParameters = function () {
        return [{
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_7__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_8__["ClassService"]
        }];
      };

      HomeworkResponseModalComponent.propDecorators = {
        showHomework: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['showHomework']
        }]
      };
      HomeworkResponseModalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homework-response-modal',
        template: _raw_loader_homework_response_modal_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homework_response_modal_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeworkResponseModalComponent);
      /***/
    },

    /***/
    "ZAI4":
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /*! exports provided: AppModule */

    /***/
    function ZAI4(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppModule", function () {
        return AppModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      "vY5A");
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      "Sy1n");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _components_static_pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/static-pages/navbar/navbar.component */
      "X4ox");
      /* harmony import */


      var _components_static_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/static-pages/welcome/welcome.component */
      "jkVP");
      /* harmony import */


      var _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/models/login/login.component */
      "pN5s");
      /* harmony import */


      var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/models/register/register.component */
      "K7IL");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _components_classrom_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./components/classrom/main-teacher/main-teacher.component */
      "mV1k");
      /* harmony import */


      var _components_classrom_manage_classrom_manage_classrom_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./components/classrom/manage-classrom/manage-classrom.component */
      "Nypu");
      /* harmony import */


      var _components_static_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! ./components/static-pages/contact/contact.component */
      "+tdT");
      /* harmony import */


      var _components_static_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! ./components/static-pages/profile/profile.component */
      "9aNY");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! ./core/interceptors/auth.interceptor */
      "htiD");
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      "R1ws");
      /* harmony import */


      var _core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! ./core/interceptors/http-error.interceptor */
      "Neo8");
      /* harmony import */


      var _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! ./components/classrom/classrom/classrom.component */
      "1BEf");
      /* harmony import */


      var _components_subject_subject_subject_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! ./components/subject/subject/subject.component */
      "ZTb9");
      /* harmony import */


      var _components_subject_homework_homework_homework_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ./components/subject/homework/homework/homework.component */
      "QHrJ");
      /* harmony import */


      var _components_static_pages_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! ./components/static-pages/spinner/spinner.component */
      "ZBB6");
      /* harmony import */


      var _components_subject_homework_homework_finished_homework_finished_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! ./components/subject/homework/homework-finished/homework-finished.component */
      "2DHe");
      /* harmony import */


      var _components_subject_homework_homework_response_homework_response_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! ./components/subject/homework/homework-response/homework-response.component */
      "ch08");
      /* harmony import */


      var _components_models_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! ./components/models/show-code/show-code.component */
      "0Pzb");
      /* harmony import */


      var _components_models_homework_response_homework_response_modal_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
      /*! ./components/models/homework-response/homework-response-modal.component */
      "YtmO");
      /* harmony import */


      var _components_models_marks_list_marks_list_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
      /*! ./components/models/marks-list/marks-list.component */
      "UtUD");
      /* harmony import */


      var _components_subject_homework_show_homework_data_show_homework_file_show_homework_file_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
      /*! ./components/subject/homework/show-homework-data/show-homework-file/show-homework-file.component */
      "MEET");
      /* harmony import */


      var _components_subject_homework_show_homework_data_show_response_file_show_response_file_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
      /*! ./components/subject/homework/show-homework-data/show-response-file/show-response-file.component */
      "lVdF");
      /* harmony import */


      var _components_models_show_members_show_members_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
      /*! ./components/models/show-members/show-members.component */
      "e47L");
      /* harmony import */


      var _components_subject_text_chat_text_chat_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
      /*! ./components/subject/text-chat/text-chat.component */
      "AAhW");
      /* harmony import */


      var _components_subject_homework_add_homework_add_homework_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
      /*! ./components/subject/homework/add-homework/add-homework.component */
      "FBqh");
      /* harmony import */


      var _components_subject_homework_add_homework_response_add_homework_response_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
      /*! ./components/subject/homework/add-homework-response/add-homework-response.component */
      "2IlC");
      /* harmony import */


      var _components_quiz_add_new_quiz_add_new_quiz_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
      /*! ./components/quiz/add-new-quiz/add-new-quiz.component */
      "1vTJ");
      /* harmony import */


      var _components_quiz_add_question_to_quiz_add_question_to_quiz_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
      /*! ./components/quiz/add-question-to-quiz/add-question-to-quiz.component */
      "HcO8"); // tslint:disable-next-line:max-line-length
      // tslint:disable-next-line:max-line-length


      var AppModule = function AppModule() {
        _classCallCheck(this, AppModule);
      };

      AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_static_pages_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"], _components_static_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_7__["WelcomeComponent"], _components_models_login_login_component__WEBPACK_IMPORTED_MODULE_8__["LoginComponent"], _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_9__["RegisterComponent"], _components_classrom_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_12__["MainTeacherComponent"], _components_classrom_manage_classrom_manage_classrom_component__WEBPACK_IMPORTED_MODULE_13__["ManageClassromComponent"], _components_static_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_14__["ContactComponent"], _components_static_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_15__["ProfileComponent"], _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_20__["ClassromComponent"], _components_subject_subject_subject_component__WEBPACK_IMPORTED_MODULE_21__["SubjectComponent"], _components_subject_homework_homework_homework_component__WEBPACK_IMPORTED_MODULE_22__["HomeworkComponent"], _components_static_pages_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_23__["SpinnerComponent"], _components_subject_homework_homework_finished_homework_finished_component__WEBPACK_IMPORTED_MODULE_24__["HomeworkFinishedComponent"], _components_subject_homework_homework_response_homework_response_component__WEBPACK_IMPORTED_MODULE_25__["HomeworkResponseComponent"], _components_models_show_code_show_code_component__WEBPACK_IMPORTED_MODULE_26__["ShowCodeComponent"], _components_models_homework_response_homework_response_modal_component__WEBPACK_IMPORTED_MODULE_27__["HomeworkResponseModalComponent"], _components_models_marks_list_marks_list_component__WEBPACK_IMPORTED_MODULE_28__["MarksListComponent"], _components_subject_homework_show_homework_data_show_homework_file_show_homework_file_component__WEBPACK_IMPORTED_MODULE_29__["ShowHomeworkFileComponent"], _components_subject_homework_show_homework_data_show_response_file_show_response_file_component__WEBPACK_IMPORTED_MODULE_30__["ShowResponseFileComponent"], _components_models_show_members_show_members_component__WEBPACK_IMPORTED_MODULE_31__["ShowMembersComponent"], _components_subject_text_chat_text_chat_component__WEBPACK_IMPORTED_MODULE_32__["TextChatComponent"], _components_subject_homework_add_homework_add_homework_component__WEBPACK_IMPORTED_MODULE_33__["AddHomeworkComponent"], _components_subject_homework_add_homework_response_add_homework_response_component__WEBPACK_IMPORTED_MODULE_34__["AddHomeworkResponseComponent"], _components_quiz_add_new_quiz_add_new_quiz_component__WEBPACK_IMPORTED_MODULE_35__["AddNewQuizComponent"], _components_quiz_add_question_to_quiz_add_question_to_quiz_component__WEBPACK_IMPORTED_MODULE_36__["AddQuestionToQuizComponent"]],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_18__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HttpClientModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
          timeOut: 10000,
          positionClass: 'toast-top-right',
          preventDuplicates: true
        }), _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        providers: [_core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"], {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors_auth_interceptor__WEBPACK_IMPORTED_MODULE_17__["AuthInterceptor"],
          multi: true
        }, {
          provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_16__["HTTP_INTERCEPTORS"],
          useClass: _core_interceptors_http_error_interceptor__WEBPACK_IMPORTED_MODULE_19__["HttpErrorInterceptor"],
          multi: true,
          deps: [ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrService"], _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]]
        }]
      })], AppModule);
      /***/
    },

    /***/
    "ZBB6":
    /*!**********************************************************************!*\
      !*** ./src/app/components/static-pages/spinner/spinner.component.ts ***!
      \**********************************************************************/

    /*! exports provided: SpinnerComponent */

    /***/
    function ZBB6(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SpinnerComponent", function () {
        return SpinnerComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./spinner.component.html */
      "rPmW");
      /* harmony import */


      var _spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./spinner.component.scss */
      "2F3d");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      SpinnerComponent.ctorParameters = function () {
        return [];
      };

      SpinnerComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-spinner',
        template: _raw_loader_spinner_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_spinner_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SpinnerComponent);
      /***/
    },

    /***/
    "ZTb9":
    /*!*****************************************************************!*\
      !*** ./src/app/components/subject/subject/subject.component.ts ***!
      \*****************************************************************/

    /*! exports provided: SubjectComponent */

    /***/
    function ZTb9(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SubjectComponent", function () {
        return SubjectComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_subject_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./subject.component.html */
      "4JQ5");
      /* harmony import */


      var _subject_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./subject.component.scss */
      "9/x+");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");

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
          this.currentlyShowed = 'liveHomeworks';
          this.showChat = false;
        }

        _createClass(SubjectComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this28 = this;

            if (!this.main.currentClassrom) {
              this.router.navigateByUrl('classrom/0');
            }

            this.currentTime = moment__WEBPACK_IMPORTED_MODULE_7__().toISOString();
            this.sortHomeworks(this.currentTime);
            this.shared.switchHomework.subscribe(function (res) {
              var index = _this28.currentHomeworks.findIndex(function (v) {
                return v.id === res;
              });

              if (index > -1) {
                _this28.currentHomeworks.splice(index, 1);

                _this28.finishedHomeworks.push(_this28.currentHomeworks[index]);
              }
            });
          }
        }, {
          key: "navigateOverSubject",
          value: function navigateOverSubject(whereToGo) {
            this.currentlyShowed = whereToGo;
          }
        }, {
          key: "whatIsCurrentlyShowed",
          value: function whatIsCurrentlyShowed() {
            return this.currentlyShowed;
          }
        }, {
          key: "goBack",
          value: function goBack() {
            this.location.back();
          }
        }, {
          key: "outputNewHomework",
          value: function outputNewHomework(homework) {
            this.currentHomeworks.push(homework);
          }
        }, {
          key: "sortHomeworks",
          value: function sortHomeworks(currentTime) {
            this.currentHomeworks = [];
            this.finishedHomeworks = [];

            var _iterator5 = _createForOfIteratorHelper(this.main.currentSubject.homeworks),
                _step5;

            try {
              for (_iterator5.s(); !(_step5 = _iterator5.n()).done;) {
                var homework = _step5.value;

                if (this.main.currentRole === 0) {
                  // returning homeworks for student
                  if (homework.endDate > currentTime && !homework.responses[0]) {
                    this.currentHomeworks.push(homework);
                  } else {
                    this.finishedHomeworks.push(homework);
                  }
                } else {
                  if (homework.endDate > currentTime) {
                    this.currentHomeworks.push(homework);
                  } else {
                    this.finishedHomeworks.push(homework);
                  }
                }
              }
            } catch (err) {
              _iterator5.e(err);
            } finally {
              _iterator5.f();
            }
          }
        }, {
          key: "checkIfStudent",
          value: function checkIfStudent() {
            if (this.main.currentRole === 0) {
              return true;
            }
          }
        }, {
          key: "checkIfTeacher",
          value: function checkIfTeacher() {
            if (this.main.currentRole === 1) {
              return true;
            }
          }
        }, {
          key: "checkIfEducator",
          value: function checkIfEducator() {
            if (this.main.currentRole === 2) {
              return true;
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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrService"]
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_9__["Router"]
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"]
        }];
      };

      SubjectComponent.propDecorators = {
        currentSubSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }],
        timeValue: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['timeValue']
        }]
      };
      SubjectComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-subject',
        template: _raw_loader_subject_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_subject_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], SubjectComponent);
      /***/
    },

    /***/
    "ahmJ":
    /*!****************************************************!*\
      !*** ./src/app/core/services/text-chat.service.ts ***!
      \****************************************************/

    /*! exports provided: TextChatService */

    /***/
    function ahmJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "TextChatService", function () {
        return TextChatService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./main.service */
      "Y+C6");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./shared.service */
      "Im7X");
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! rxjs/operators */
      "kU1M");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! moment */
      "wd/R");
      /* harmony import */


      var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);

      var TextChatService = /*#__PURE__*/function () {
        function TextChatService(http, main, shared) {
          _classCallCheck(this, TextChatService);

          this.http = http;
          this.main = main;
          this.shared = shared;
          this.api = this.shared.apiChatUrl;
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
              var _iterator6 = _createForOfIteratorHelper(v.messages),
                  _step6;

              try {
                for (_iterator6.s(); !(_step6 = _iterator6.n()).done;) {
                  var message = _step6.value;
                  message.sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
                }
              } catch (err) {
                _iterator6.e(err);
              } finally {
                _iterator6.f();
              }

              return v;
            }));
          }
        }, {
          key: "getNewerMessages",
          value: function getNewerMessages(messageID) {
            return this.http.get(this.api + "TextChat/getNewerMessages/".concat(messageID, "/").concat(this.main.currentClassrom.id, "/").concat(this.main.currentSubject.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
              if (v.messages) {
                var _iterator7 = _createForOfIteratorHelper(v.messages),
                    _step7;

                try {
                  for (_iterator7.s(); !(_step7 = _iterator7.n()).done;) {
                    var message = _step7.value;
                    message.sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
                  }
                } catch (err) {
                  _iterator7.e(err);
                } finally {
                  _iterator7.f();
                }

                return v;
              }
            }));
          }
        }, {
          key: "getOlderMessages",
          value: function getOlderMessages(messageID) {
            return this.http.get(this.api + "TextChat/getOlderMessages/".concat(messageID, "/").concat(this.main.currentClassrom.id, "/").concat(this.main.currentSubject.id)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (v) {
              var _iterator8 = _createForOfIteratorHelper(v.messages),
                  _step8;

              try {
                for (_iterator8.s(); !(_step8 = _iterator8.n()).done;) {
                  var message = _step8.value;
                  message.sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
                }
              } catch (err) {
                _iterator8.e(err);
              } finally {
                _iterator8.f();
              }

              return v;
            }));
          }
        }, {
          key: "formatMessageTime",
          value: function formatMessageTime(messages) {
            var _iterator9 = _createForOfIteratorHelper(messages),
                _step9;

            try {
              for (_iterator9.s(); !(_step9 = _iterator9.n()).done;) {
                var message = _step9.value;
                message.sendTime = moment__WEBPACK_IMPORTED_MODULE_6__(message.sendTime).format('YYYY-MM-DD HH:mm:ss');
              }
            } catch (err) {
              _iterator9.e(err);
            } finally {
              _iterator9.f();
            }
          }
        }]);

        return TextChatService;
      }();

      TextChatService.ctorParameters = function () {
        return [{
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_3__["MainService"]
        }, {
          type: _shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }];
      };

      TextChatService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], TextChatService);
      /***/
    },

    /***/
    "bvRv":
    /*!**********************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/register/register.component.html ***!
      \**********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function bvRv(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #openRegister class=\"d-none\" data-toggle=\"modal\" data-target=\"#registerModal\"></button>\n\n<div class=\"modal fade\" id=\"registerModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\">\n      <h5 class=\"modal-title\" id=\"exampleModalCenterTitle\">Zarejestruj się</h5>\n      <form [formGroup]=\"registerForm\">\n        <div class=\"form-group row justify-content-center\">\n          <div class=\"role role1 col-5\" (click)=\"select(0)\" [ngClass]=\"{'roleSelected': selectedRole === 0}\">Uczeń</div>\n          <div class=\"role role2 col-5\" (click)=\"select(1)\" [ngClass]=\"{'roleSelected': selectedRole === 1}\">Nauczyciel</div>\n        </div>\n        <div class=\"row p-0 justify-content-between col-12 m-0\">\n          <div class=\"form__group field col-md-5 col-12 \">\n            <label for='name'></label><input type=\"email\" class=\"form__field\" formControlName=\"name\" placeholder=\"Name\" name=\"name\" id='name'/>\n            <label for=\"emailRegister\" class=\"form__label\">Imię</label>\n            <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj imię.\n            </div>\n          </div>\n          <div class=\"form__group field col-md-5 col-12 \">\n            <label for='surname'></label><input type=\"email\" class=\"form__field\" formControlName=\"surname\" placeholder=\"Name\" name=\"name\" id='surname'/>\n            <label for=\"emailRegister\" class=\"form__label\">Nazwisko</label>\n            <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n              Podaj nazwisko.\n            </div>\n          </div>\n        </div>\n        <div class=\"form__group field\">\n          <input type=\"email\" class=\"form__field\" formControlName=\"email\" placeholder=\"Name\" name=\"name\" id='emailRegister'/>\n          <label for=\"emailRegister\" class=\"form__label\">Email</label>\n          <div *ngIf=\"registerForm.controls.email.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny email.\n          </div>\n        </div>\n\n        <div class=\"form__group field\">\n          <input type=\"password\" class=\"form__field\" formControlName=\"password\" placeholder=\"Name\" name=\"name\" id='passwordRegister'/>\n          <label for=\"passwordRegister\" class=\"form__label\">Hasło</label>\n          <div *ngIf=\"registerForm.controls.password.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawne hasło. Minimum 5 znaków.\n          </div>\n        </div>\n        <div class=\"form__group field\" *ngIf=\"!selectedRole\">\n          <input type=\"text\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='studentCode' formControlName=\"userCode\"/>\n          <label for=\"studentCode\" class=\"form__label\">Kod dostępu</label>\n          <div *ngIf=\"registerForm.controls.userCode.invalid && submitted\" class=\"alert alert-danger\">\n            Podaj poprawny kod.\n          </div>\n        </div>\n        <div class=\"row justify-content-center\">\n          <button type=\"submit\" class=\"formBtn\" (click)=\"submit()\">Wyślij</button>\n        </div>\n      </form>\n\n      <div class=\"transformUnder\" data-dismiss=\"modal\" (click)=\"this.shared.openLoginModal()\">\n          Powrót do logowania\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "cNJU":
    /*!************************************************!*\
      !*** ./src/app/core/services/class.service.ts ***!
      \************************************************/

    /*! exports provided: ClassService */

    /***/
    function cNJU(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ClassService", function () {
        return ClassService;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/common/http */
      "tk/3");
      /* harmony import */


      var _shared_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./shared.service */
      "Im7X");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./main.service */
      "Y+C6");

      var ClassService = /*#__PURE__*/function () {
        function ClassService(http, toastr, shared, main) {
          _classCallCheck(this, ClassService);

          this.http = http;
          this.toastr = toastr;
          this.shared = shared;
          this.main = main;
          this.api = this.shared.apiUrl;
          this.fileApiHeaders = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
            responseType: 'arraybuffer',
            observe: 'response'
          });
        }

        _createClass(ClassService, [{
          key: "addNewClass",
          value: function addNewClass(classroom) {
            var _this29 = this;

            this.http.post(this.api + 'Class/create', classroom).subscribe(function (res) {
              _this29.main.classrom.push(res);

              _this29.shared.openCodeModal(res.id);

              _this29.toastr.success('Pomyślnie utworzono nową klasę.', 'Udało się!');
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
            return this.http.post(this.shared.apiFilesUrl + 'HomeworkFiles/returnFileFromHomework', homworkData, {
              headers: this.fileApiHeaders
            });
          }
        }, {
          key: "returnFileFromResponse",
          value: function returnFileFromResponse(responseData) {
            return this.http.post(this.shared.apiFilesUrl + 'HomeworkFiles/returnFileFromResponse', responseData, {
              headers: this.fileApiHeaders
            });
          }
        }, {
          key: "addNewFileToResponse",
          value: function addNewFileToResponse(classID, homeworkID, fileToSend) {
            return this.http.post(this.shared.apiFilesUrl + 'HomeworkFiles/uploadToResponse/${classID}/${homeworkID}', fileToSend, {
              reportProgress: true,
              observe: 'events'
            });
          }
        }, {
          key: "addNewFileToHomework",
          value: function addNewFileToHomework(classID, subjectID, fileToSend) {
            return this.http.post(this.shared.apiFilesUrl + 'HomeworkFiles/uploadToHomework/${classID}/${subjectID}', fileToSend, {
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
            var _this30 = this;

            this.http.post(this.api + 'Subject/create', subject).subscribe(function (res) {
              _this30.main.classrom.filter(function (value) {
                return value.id === subject.classID;
              }).map(function (val) {
                return val.subjects.push(res.subject);
              });

              _this30.toastr.success('Pomyślnie dodano nauczyciela do klasy.', 'Udało się!');
            });
          }
        }, {
          key: "deleteHomework",
          value: function deleteHomework(homework) {
            var _this31 = this;

            return this.http.put(this.api + 'Homework/deleteHomework', homework).subscribe(function () {
              _this31.toastr.success('Usunięto zadanie.', 'Udało się!');
            });
          }
        }, {
          key: "deleteClassMember",
          value: function deleteClassMember(member) {
            var _this32 = this;

            return this.http.put(this.api + 'Class/deleteMember', member).subscribe(function () {
              _this32.toastr.success('Usunięto użytkownika.', 'Udało się!');
            });
          }
        }, {
          key: "showClassromMembers",
          value: function showClassromMembers(classID) {
            return this.http.post(this.shared.apiNamesUrl + 'ReturnNames', classID);
          }
        }, {
          key: "deleteSubject",
          value: function deleteSubject(subject) {
            var _this33 = this;

            return this.http.put(this.api + 'Class/deleteSubject', subject).subscribe(function () {
              _this33.toastr.success('Usunięto zadanie.', 'Udało się!');
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
          type: _shared_service__WEBPACK_IMPORTED_MODULE_3__["SharedService"]
        }, {
          type: _main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      ClassService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
        providedIn: 'root'
      })], ClassService);
      /***/
    },

    /***/
    "ch08":
    /*!**********************************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework-response/homework-response.component.ts ***!
      \**********************************************************************************************/

    /*! exports provided: HomeworkResponseComponent */

    /***/
    function ch08(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "HomeworkResponseComponent", function () {
        return HomeworkResponseComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_homework_response_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./homework-response.component.html */
      "uyyT");
      /* harmony import */


      var _homework_response_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./homework-response.component.scss */
      "07sz");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var HomeworkResponseComponent = /*#__PURE__*/function () {
        function HomeworkResponseComponent() {
          _classCallCheck(this, HomeworkResponseComponent);
        }

        _createClass(HomeworkResponseComponent, [{
          key: "responseSet",
          set: function set(response) {
            this.response = response;
          }
        }]);

        return HomeworkResponseComponent;
      }();

      HomeworkResponseComponent.propDecorators = {
        responseSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      HomeworkResponseComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-homework-response',
        template: _raw_loader_homework_response_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_homework_response_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], HomeworkResponseComponent);
      /***/
    },

    /***/
    "dQLI":
    /*!************************************************************************!*\
      !*** ./src/app/components/models/marks-list/marks-list.component.scss ***!
      \************************************************************************/

    /*! exports provided: default */

    /***/
    function dQLI(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".marksListH1 {\n  border-bottom: 2px solid black;\n}\n\n.studentsList {\n  font-size: 25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFya3MtbGlzdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLDhCQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxlQUFBO0FBRUYiLCJmaWxlIjoibWFya3MtbGlzdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYXJrc0xpc3RIMSB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbi5zdHVkZW50c0xpc3Qge1xyXG4gIGZvbnQtc2l6ZTogMjVweDtcclxufVxyXG4iXX0= */";
      /***/
    },

    /***/
    "dnHK":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/show-homework-data/show-response-file/show-response-file.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function dnHK(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"response.files[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Pliki do odpowiedzi</span>\n  </div>\n  <div class=\"col-12 p-0 m-0 row justify-content-start p-3\">\n    <button class=\"formBtn pr-3 pl-3 pb-3 \" (click)=\"downloadAllFiles()\" >Pobierz pliki</button>\n  </div>\n\n  <div class=\"col-12 mt-2 mb-2 p-3\" *ngFor=\"let srcItem of src; let i=index\">\n    <button class=\"formBtn openInBrowserBtn col-12 \" (click)=\"openWindow(i)\">Pobierz na dysk</button>\n    <div class=\"embed-responsive embed-responsive-16by9\"   >\n\n      <iframe class=\"embed-responsive-item\" [src]=\"getSrc(i)\"  allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"response.linkHrefs[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Linki do odpowiedzi</span>\n  </div>\n  <div class=\"pb-2 pr-3 pl-3 \">\n    <div *ngFor=\"let link of response.linkHrefs\" class=\"col-12 mb-2 text-center p-0\">\n      <a [href]=\"link\" target=\"_blank\" class=\"linkHref\">{{link}}</a>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "e47L":
    /*!**************************************************************************!*\
      !*** ./src/app/components/models/show-members/show-members.component.ts ***!
      \**************************************************************************/

    /*! exports provided: ShowMembersComponent */

    /***/
    function e47L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowMembersComponent", function () {
        return ShowMembersComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_members_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-members.component.html */
      "fFU3");
      /* harmony import */


      var _show_members_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-members.component.scss */
      "7DvF");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ngx-toastr */
      "5eHb");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ../../../core/services/class.service */
      "cNJU");

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
            var _this34 = this;

            this.shared.openMembers.subscribe(function (res) {
              _this34.members = res.users;

              _this34.showMembers.nativeElement.click();
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
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_6__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_7__["ClassService"]
        }];
      };

      ShowMembersComponent.propDecorators = {
        showMembers: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['showMembers']
        }]
      };
      ShowMembersComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-members',
        template: _raw_loader_show_members_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_members_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowMembersComponent);
      /***/
    },

    /***/
    "eZ+F":
    /*!****************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/add-homework/add-homework.component.html ***!
      \****************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function eZF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<form [formGroup]=\"homeworkForm\" class=\"row justify-content-around p-md-3 p-0\">\n  <div class=\"col-12 row m-0 p-0 headerDiv p-3 justify-content-between align-items-end\">\n    <div class=\"form-group col-md-5 col-12 mb-md-5 p-0\">\n      <h3 class=\"text-white termin\">Nazwa zadania</h3>\n      <label for='numberPeople'></label><input type=\"email\" class=\"form-control\" placeholder=\"Nazwa\" name=\"name\" id='numberPeople' required formControlName=\"name\"/>\n      <div *ngIf=\"homeworkForm.controls.name.invalid && submitted\" class=\"alert alert-danger\">\n        Podaj nazwę zadania.\n      </div>\n    </div>\n    <div class=\"col-md-5 col-12 mb-md-5 row justify-content-center align-items-center pickerDiv p-0 m-0\">\n      <h3 class=\"text-white termin text-left\">Termin oddania</h3>\n      <div id=\"picker\">   </div>\n      <input type=\"hidden\" id=\"result\" value=\"\" #timeValue>\n      <div *ngIf=\"homeworkForm.controls.time.invalid && submitted\" class=\"alert alert-danger\">\n        Podaj termin odddania zadania.\n      </div>\n    </div>\n  </div>\n\n  <div class=\"form-group col-12\">\n    <h3 class=\"text-white termin\">Treść zadania</h3>\n    <label for=\"exampleFormControlTextarea1\"></label><textarea class=\"form-control p-2 m-0\" id=\"exampleFormControlTextarea1\" rows=\"4\" formControlName=\"description\" placeholder=\"Treść\"></textarea>\n  </div>\n  <div class=\"form-group col-12 row p-0 justify-content-center\">\n    <button class=\"formBtn\" (click)=\"addLink()\">Dodaj link</button>\n    <label>\n      <input *ngFor=\"let iter of uploadedLinksIterator; let i = index\" type=\"text\" class=\"form-control col-12 mt-2 mb-2\" [(ngModel)]=\"uploadedLinks[i]\" [ngModelOptions]=\"{standalone: true}\">\n    </label>\n  </div>\n\n  <div class=\"col-12 row justify-content-center p-3 m-0\">\n    <div class=\"custom-file col-12\">\n      <input type=\"file\" class=\"custom-file-input\" id=\"customFile\" (change)=\"onFileSelect($event)\">\n      <label class=\"custom-file-label\" for=\"customFile\">Dołącz plik</label>\n    </div>\n    <div class=\"col-10 mt-3 p-0\" *ngIf=\"uploadedFiles\">\n      <div class=\"progress mt-2 mr-0 ml-0\" *ngFor=\"let file of uploadedFiles\" >\n        <div class=\"progress-bar\" role=\"progressbar\" [style]=\"{'width': file.progress + '%'}\" [ngClass]=\"{'green': file.finished}\" aria-valuenow=\"25\" aria-valuemin=\"0\" aria-valuemax=\"100\">\n          {{file.name}}\n        </div>\n      </div>\n    </div>\n  </div>\n  <button type=\"submit\" class=\"formBtn col-6 mb-2 mb-md-0 col-md-4\" (click)=\"addNewHomework()\">Dodaj</button>\n</form>\n";
      /***/
    },

    /***/
    "f4+7":
    /*!********************************************************************!*\
      !*** ./src/app/components/models/register/register.component.scss ***!
      \********************************************************************/

    /*! exports provided: default */

    /***/
    function f47(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".modal-content {\n  position: relative;\n  padding: 32px 32px 0 32px;\n  border-radius: 12px;\n}\n\n.modal-title {\n  text-align: center;\n  font-size: 35px;\n  margin-bottom: 20px;\n}\n\n.btn-primary {\n  width: 60%;\n  border-radius: 12px;\n}\n\n.transformUnder {\n  height: 50px;\n  background: var(--submit);\n  border-radius: 0 0 var(--rad) var(--rad);\n  padding: 10px;\n  font-size: 20px;\n  transform: translateY(50px);\n  transition: all 0.3s;\n  text-align: center;\n  cursor: pointer;\n}\n\n.transformUnder:hover {\n  background: var(--submitHover);\n}\n\n.transformUnder:focus {\n  outline: none;\n}\n\noption {\n  padding: 5px !important;\n}\n\nselect {\n  border-radius: var(--rad) !important;\n}\n\n.role {\n  text-align: center;\n  font-size: 30px;\n  background: var(--negative);\n  transition: all 0.2s;\n  cursor: pointer;\n  padding: 5px;\n}\n\n@media (max-width: 992px) {\n  .role {\n    font-size: 22px;\n  }\n}\n\n.roleSelected {\n  transform: scale(1.2);\n  background: #ff7700;\n}\n\n.role1 {\n  padding-right: 10px;\n  -webkit-clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n          clip-path: polygon(0 0, 79% 0, 100% 100%, 0% 100%);\n}\n\n.role2 {\n  padding-left: 30px;\n  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n          clip-path: polygon(0 0, 100% 0, 100% 100%, 21% 100%);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxccmVnaXN0ZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxrQkFBQTtFQUNBLHlCQUFBO0VBQ0EsbUJBQUE7QUFDRjs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsZUFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxVQUFBO0VBQ0EsbUJBQUE7QUFHRjs7QUFEQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLHdDQUFBO0VBQ0EsYUFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxlQUFBO0FBSUY7O0FBRkE7RUFDRSw4QkFBQTtBQUtGOztBQUhBO0VBQ0UsYUFBQTtBQU1GOztBQUhBO0VBQ0UsdUJBQUE7QUFNRjs7QUFKQTtFQUNFLG9DQUFBO0FBT0Y7O0FBTEE7RUFDRSxrQkFBQTtFQUNBLGVBQUE7RUFDQSwyQkFBQTtFQUNBLG9CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QUFRRjs7QUFOQTtFQUNFO0lBQ0UsZUFBQTtFQVNGO0FBQ0Y7O0FBUEE7RUFDRSxxQkFBQTtFQUNBLG1CQUFBO0FBU0Y7O0FBUEE7RUFDRSxtQkFBQTtFQUNBLDBEQUFBO1VBQUEsa0RBQUE7QUFVRjs7QUFSQTtFQUNFLGtCQUFBO0VBQ0EsNERBQUE7VUFBQSxvREFBQTtBQVdGIiwiZmlsZSI6InJlZ2lzdGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1vZGFsLWNvbnRlbnQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBwYWRkaW5nOiAzMnB4IDMycHggMCAzMnB4O1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLm1vZGFsLXRpdGxlIHtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgZm9udC1zaXplOiAzNXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XHJcbn1cclxuLmJ0bi1wcmltYXJ5IHtcclxuICB3aWR0aDogNjAlO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEycHg7XHJcbn1cclxuLnRyYW5zZm9ybVVuZGVyIHtcclxuICBoZWlnaHQ6IDUwcHg7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0KTtcclxuICBib3JkZXItcmFkaXVzOiAwIDAgdmFyKC0tcmFkKSB2YXIoLS1yYWQpO1xyXG4gIHBhZGRpbmc6IDEwcHg7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlWSg1MHB4KTtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcztcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcbi50cmFuc2Zvcm1VbmRlcjpob3ZlciB7XHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0SG92ZXIpO1xyXG59XHJcbi50cmFuc2Zvcm1VbmRlcjpmb2N1cyB7XHJcbiAgb3V0bGluZTogbm9uZTtcclxufVxyXG5cclxub3B0aW9uIHtcclxuICBwYWRkaW5nOiA1cHggIWltcG9ydGFudDtcclxufVxyXG5zZWxlY3Qge1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCkgIWltcG9ydGFudDtcclxufVxyXG4ucm9sZSB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGZvbnQtc2l6ZTogMzBweDtcclxuICBiYWNrZ3JvdW5kOiB2YXIoLS1uZWdhdGl2ZSk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuMnM7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIHBhZGRpbmc6IDVweDtcclxufVxyXG5AbWVkaWEobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5yb2xlIHtcclxuICAgIGZvbnQtc2l6ZTogMjJweDtcclxuICB9XHJcbn1cclxuLnJvbGVTZWxlY3RlZCB7XHJcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjIpO1xyXG4gIGJhY2tncm91bmQ6ICNmZjc3MDA7XHJcbn1cclxuLnJvbGUxIHtcclxuICBwYWRkaW5nLXJpZ2h0OiAxMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDc5JSAwLCAxMDAlIDEwMCUsIDAlIDEwMCUpO1xyXG59XHJcbi5yb2xlMiB7XHJcbiAgcGFkZGluZy1sZWZ0OiAzMHB4O1xyXG4gIGNsaXAtcGF0aDogcG9seWdvbigwIDAsIDEwMCUgMCwgMTAwJSAxMDAlLCAyMSUgMTAwJSk7XHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "fFU3":
    /*!******************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-members/show-members.component.html ***!
      \******************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fFU3(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #showMembers class=\"d-none\" data-toggle=\"modal\" data-target=\"#openMembersModal\"></button>\n\n<div class=\"modal fade\" id=\"openMembersModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"members\">\n      <h1 class=\"text-center marksListH1 pb-2\">Lista osób należących do klasy</h1>\n      <div *ngFor=\"let res of members; let i=index\" class=\"row justify-content-between studentsList m-2\">\n        <div class=\"col-8 personData\">{{res}}</div>\n        <div class=\"col-md-4\">\n          <i class=\"fas fa-trash\" (click)=\"deleteUser(i)\"></i>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n";
      /***/
    },

    /***/
    "fW3l":
    /*!************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/show-code/show-code.component.html ***!
      \************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function fW3l(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #showCode class=\"d-none\" data-toggle=\"modal\" data-target=\"#openCodeModal\"></button>\n\n<div class=\"modal fade\" id=\"openCodeModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalCenterTitle\" aria-hidden=\"true\" data-backdrop=\"static\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content\" (click)=\"copyCodeFunc()\">\n      <div class=\"row m-0 p-3\">\n        <div class=\"col-12 headerText\">Kliknij żeby skopiować</div>\n        <h4 class=\"text-center d-block col-12\">Wyślij ten kod do wszystkich uczniów którzy chcą dołączyć do tej klasy.</h4>\n        <div class=\"code col-12\" #codeCopy>{{code}}</div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "ffNC":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/static-pages/profile/profile.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function ffNC(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"cover flex-column d-flex\">\n  <div class=\"text-center mainDiv\">\n    <div class=\"fontBigger\">Twój profil</div>\n    <div class=\"mb-5 fontMedium\">Tutaj możesz edytować swoje dane</div>\n  </div>\n  <div class=\"rest h-100\">\n    <div class=\"row justify-content-center p-4\">\n      <div class=\"container mt-4 row contactDetails p-0\">\n        <h1 class=\"col-12 d-block contactUs fontMedium\">Jesteś\n          <span *ngIf=\"this.main.user.userRole === 1\">nauczycielem</span>\n          <span *ngIf=\"this.main.user.userRole === 0\">uczniem</span>\n        </h1>\n        <div class=\"col-md-3 col-12 row justify-content-center align-items-center m-0 p-0 profilePicRow\">\n          <div class=\"col-md-10 col-lg-8 col-5 p-3\">\n            <img src=\"https://woj-pol.pl/wp-content/uploads/2020/03/mundur-policji-2-600x600.jpg\" class=\"img-fluid\" alt=\"avatar\">\n          </div>\n        </div>\n        <div class=\"row infoRow col-md-9 col-12 p-0 m-0\">\n          <div class=\"col-12 singeInfo row m-0 align-items-center\">\n            <div class=\"col-md-6 col-12 text-center text-md-left fontMedium\">Imię i nazwisko:</div>\n            <div class=\"col-md-6 col-12 text-md-right text-center fontMedium\">{{user.name}} {{user.surrname}}</div>\n          </div>\n          <div class=\"col-12 singeInfo row m-0 align-items-center\">\n            <div class=\"col-md-6 col-12 text-center text-md-left fontMedium\">Adres email:</div>\n            <div class=\"col-md-6 col-12 text-md-right text-center fontMedium\">{{user.email}}</div>\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "htiD":
    /*!*******************************************************!*\
      !*** ./src/app/core/interceptors/auth.interceptor.ts ***!
      \*******************************************************/

    /*! exports provided: AuthInterceptor */

    /***/
    function htiD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthInterceptor", function () {
        return AuthInterceptor;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

      var AuthInterceptor = /*#__PURE__*/function () {
        function AuthInterceptor() {
          _classCallCheck(this, AuthInterceptor);
        }

        _createClass(AuthInterceptor, [{
          key: "intercept",
          value: function intercept(req, next) {
            var idToken = localStorage.getItem('homeschooltoken');

            if (!idToken) {
              return next.handle(req);
            }

            var cloned = req.clone({
              headers: req.headers.set('Authorization', 'Bearer ' + idToken)
            });
            return next.handle(cloned);
          }
        }]);

        return AuthInterceptor;
      }();

      AuthInterceptor = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], AuthInterceptor);
      /***/
    },

    /***/
    "iqQJ":
    /*!**********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/homework-response/homework-response-modal.component.html ***!
      \**********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function iqQJ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #showHomework class=\"d-none\" data-toggle=\"modal\" data-target=\"#openHomeworkModal\"></button>\n\n<div class=\"modal fade\" id=\"openHomeworkModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"openHomeworkModal\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"response\">\n        <app-homework-response [responseSet]=\"response\"></app-homework-response>\n      <div class=\"row m-0 p-0 justify-content-between gradeRow\">\n        <form [formGroup]=\"markForm\" class=\"col-6\">\n          <div class=\"form-group\">\n            <input type=\"email\" class=\"form-control markInput\" placeholder=\"6\" formControlName=\"mark\" maxlength=\"1\">\n          </div>\n        </form>\n        <button type=\"submit\" class=\"formBtn col-5\" (click)=\"addMark()\">Oceń</button>\n      </div>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "jHMj":
    /*!********************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/quiz/add-question-to-quiz/add-question-to-quiz.component.html ***!
      \********************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function jHMj(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<p>add-question-to-quiz works!</p>\n";
      /***/
    },

    /***/
    "jkVP":
    /*!**********************************************************************!*\
      !*** ./src/app/components/static-pages/welcome/welcome.component.ts ***!
      \**********************************************************************/

    /*! exports provided: WelcomeComponent */

    /***/
    function jkVP(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function () {
        return WelcomeComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./welcome.component.html */
      "+wC0");
      /* harmony import */


      var _welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./welcome.component.scss */
      "P/E5");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");

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

      WelcomeComponent.ctorParameters = function () {
        return [];
      };

      WelcomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-welcome',
        template: _raw_loader_welcome_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_welcome_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], WelcomeComponent);
      /***/
    },

    /***/
    "kQR1":
    /*!******************************************************************************!*\
      !*** ./src/app/components/classrom/main-teacher/main-teacher.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function kQR1(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".mainDiv {\n  background: var(--main);\n  padding: 25px;\n  -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n          clip-path: polygon(50% 0%, 100% 0, 100% 65%, 50% 100%, 0 65%, 0 0);\n}\n\n@media (max-width: 720px) {\n  .mainDiv {\n    -webkit-clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n            clip-path: polygon(50% 0%, 100% 0, 100% 75%, 50% 100%, 0 75%, 0 0) !important;\n  }\n}\n\n.singleClassrom {\n  background: var(--submit);\n  cursor: pointer;\n  border-radius: var(--rad);\n  transition: 0.5s all ease;\n}\n\n.singleClassrom:hover {\n  box-shadow: 0 0 14px 6px rgba(0, 0, 0, 0.75);\n}\n\n.classromDiv {\n  background: #577590;\n  border-radius: var(--rad);\n  margin-top: 40px;\n}\n\n.rest {\n  min-height: 100%;\n  padding-top: 150px;\n  margin-top: -150px;\n  background: #E0FBFC;\n}\n\n.showCode {\n  padding: 5px;\n  margin: 0;\n  cursor: pointer;\n  background: var(--warn);\n  border-radius: var(--rad);\n  transition: all 0.3s;\n}\n\n.showCode:hover {\n  background: #ff8e00;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcbWFpbi10ZWFjaGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsdUJBQUE7RUFDQSxhQUFBO0VBQ0EsMEVBQUE7VUFBQSxrRUFBQTtBQUNGOztBQUNBO0VBQ0U7SUFDRSxxRkFBQTtZQUFBLDZFQUFBO0VBRUY7QUFDRjs7QUFBQTtFQUVFLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLHlCQUFBO0VBQ0EseUJBQUE7QUFDRjs7QUFDQTtFQUdFLDRDQUFBO0FBRUY7O0FBQUE7RUFFRSxtQkFBQTtFQUNBLHlCQUFBO0VBQ0EsZ0JBQUE7QUFFRjs7QUFDQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxrQkFBQTtFQUNBLG1CQUFBO0FBRUY7O0FBQUE7RUFDRSxZQUFBO0VBQ0EsU0FBQTtFQUNBLGVBQUE7RUFDQSx1QkFBQTtFQUNBLHlCQUFBO0VBQ0Esb0JBQUE7QUFHRjs7QUFEQTtFQUNFLG1CQUFBO0FBSUYiLCJmaWxlIjoibWFpbi10ZWFjaGVyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1haW5EaXYge1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLW1haW4pO1xyXG4gIHBhZGRpbmc6MjVweDtcclxuICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNjUlLCA1MCUgMTAwJSwgMCA2NSUsIDAgMCk7XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDogNzIwcHgpIHtcclxuICAubWFpbkRpdiB7XHJcbiAgICBjbGlwLXBhdGg6IHBvbHlnb24oNTAlIDAlLCAxMDAlIDAsIDEwMCUgNzUlLCA1MCUgMTAwJSwgMCA3NSUsIDAgMCkgIWltcG9ydGFudDtcclxuICB9XHJcbn1cclxuLnNpbmdsZUNsYXNzcm9tIHtcclxuXHJcbiAgYmFja2dyb3VuZDogdmFyKC0tc3VibWl0KTtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICB0cmFuc2l0aW9uOiAwLjVzIGFsbCBlYXNlO1xyXG59XHJcbi5zaW5nbGVDbGFzc3JvbTpob3ZlciB7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwIDAgMTRweCA2cHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDAgMCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDAgMCAxNHB4IDZweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG59XHJcbi5jbGFzc3JvbURpdiB7XHJcblxyXG4gIGJhY2tncm91bmQ6ICM1Nzc1OTA7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBtYXJnaW4tdG9wOjQwcHg7XHJcbn1cclxuXHJcbi5yZXN0IHtcclxuICBtaW4taGVpZ2h0OiAxMDAlO1xyXG4gIHBhZGRpbmctdG9wOiAxNTBweDtcclxuICBtYXJnaW4tdG9wOiAtMTUwcHg7XHJcbiAgYmFja2dyb3VuZDogI0UwRkJGQztcclxufVxyXG4uc2hvd0NvZGUge1xyXG4gIHBhZGRpbmc6IDVweDtcclxuICBtYXJnaW46IDA7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGJhY2tncm91bmQ6IHZhcigtLXdhcm4pO1xyXG4gIGJvcmRlci1yYWRpdXM6IHZhcigtLXJhZCk7XHJcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3M7XHJcbn1cclxuLnNob3dDb2RlOmhvdmVyIHtcclxuICBiYWNrZ3JvdW5kOiAjZmY4ZTAwO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "lVdF":
    /*!*******************************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/show-homework-data/show-response-file/show-response-file.component.ts ***!
      \*******************************************************************************************************************/

    /*! exports provided: ShowResponseFileComponent */

    /***/
    function lVdF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "ShowResponseFileComponent", function () {
        return ShowResponseFileComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_show_response_file_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./show-response-file.component.html */
      "dnHK");
      /* harmony import */


      var _show_response_file_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./show-response-file.component.scss */
      "AS5O");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../../../core/services/class.service */
      "cNJU");
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/platform-browser */
      "jhN1");

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
            var fileExtension = file[file.length - 1];
            var finalFileName = this.buildFinalFileName(fileExtension);
            var a = document.createElement('a');
            document.body.appendChild(a);
            a.style.display = 'none';
            a.href = url;
            a.download = finalFileName;
            a.click();
            window.URL.revokeObjectURL(fileName);
          }
        }, {
          key: "buildFinalFileName",
          value: function buildFinalFileName(fileExtension) {
            return this.response.homeworkName + '_' + this.response.senderSurname + '_' + this.response.senderName + '.' + fileExtension;
          }
        }, {
          key: "downloadAllFiles",
          value: function downloadAllFiles() {
            var _this35 = this;

            var _iterator10 = _createForOfIteratorHelper(this.response.files),
                _step10;

            try {
              for (_iterator10.s(); !(_step10 = _iterator10.n()).done;) {
                var responseFileID = _step10.value;
                var fileData = {
                  homeworkID: this.response.homeworkID,
                  classID: this.main.currentClassrom.id,
                  subjectID: this.main.currentSubject.id,
                  fileID: responseFileID
                };
                this.classService.returnFileFromResponse(fileData).subscribe(function (res) {
                  var type = res.headers.get('Content-Type');
                  var fileName = res.headers.get('filename');

                  _this35.names.push(fileName);

                  var file = new Blob([res.body], {
                    type: type
                  });
                  var fileURL = URL.createObjectURL(file);

                  if (!_this35.mimes.includes(type)) {
                    _this35.downloadFile(fileURL, fileName);
                  } else {
                    _this35.src.push(fileURL);
                  }
                });
              }
            } catch (err) {
              _iterator10.e(err);
            } finally {
              _iterator10.f();
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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _core_services_class_service__WEBPACK_IMPORTED_MODULE_5__["ClassService"]
        }, {
          type: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_6__["DomSanitizer"]
        }];
      };

      ShowResponseFileComponent.propDecorators = {
        responseSet: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["Input"]
        }]
      };
      ShowResponseFileComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-show-response-file',
        template: _raw_loader_show_response_file_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_show_response_file_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], ShowResponseFileComponent);
      /***/
    },

    /***/
    "le2L":
    /*!**************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/classrom/manage-classrom/manage-classrom.component.html ***!
      \**************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function le2L(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"d-flex flex-column h-100 mainDiv p-2\">\r\n  <div class=\"container text-center justify-content-center containerMain\">\r\n    <h1>Dodaj nową klasę!</h1>\r\n    <p class=\"iconsP p-0 p-md-2\">Po dodaniu nowej klasy wyświetli Ci się kod dostępu.\r\n      Wyślij go do wszystkich uczniów, którzy mają dołączyć do klasy.\r\n      Będą go musieli podać podczas rejestracji.\r\n    <br><span class=\"red\">Kod dostępny jest również na stronie głównej i stronie klasy. </span>\r\n    </p>\r\n    <form [formGroup]=\"addClassromForm\" class=\"row justify-content-around\">\r\n        <div class=\"form__group field col-md-11 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='className' formControlName=\"className\"/>\r\n          <label for=\"className\" class=\"form__label\">Nazwa klasy*</label>\r\n          <div *ngIf=\"addClassromForm.controls.className.invalid && submittedFirstPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę klasy.\r\n          </div>\r\n        </div>\r\n        <div class=\"form__group field col-md-11 col-12\">\r\n          <input type=\"email\" class=\"form__field\" placeholder=\"Name\" name=\"name\" id='schoolName' formControlName=\"schoolName\"/>\r\n          <label for=\"schoolName\" class=\"form__label\">Nazwa szkoły*</label>\r\n          <div *ngIf=\"addClassromForm.controls.schoolName.invalid && submittedFirstPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę szkoły.\r\n          </div>\r\n        </div>\r\n      <button type=\"submit\" class=\"formBtn col-4\" (click)=\"addNewClass()\">Dodaj</button>\r\n    </form>\r\n  </div>\r\n  <div class=\"container text-center justify-content-center containerInfo\">\r\n    <h1>Dodaj nowy przedmiot</h1>\r\n    <form [formGroup]=\"addSubjectForm\" class=\"row justify-content-around\">\r\n      <div class=\"form-group col-12 col-md-5\">\r\n        <h3>Wybierz klasę</h3>\r\n        <label for=\"exampleFormControlSelect1\"></label><select class=\"form-control\" id=\"exampleFormControlSelect1\" formControlName=\"classID\">\r\n          <option *ngFor=\"let classrom of this.main.classrom;let indexOfelement=index;\" [value]=\"this.main.classrom[indexOfelement].id\">{{classrom.className}} - {{classrom.schoolName}} </option>\r\n        </select>\r\n        <div *ngIf=\"addSubjectForm.controls.classID.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n          Wybierz klasę.\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-around col-12\">\r\n        <div class=\"form__group field col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field yellowInput\" placeholder=\"Name\" name=\"name\" id='userToAddEmail' formControlName=\"userToAddEmail\"/>\r\n          <label for=\"userToAddEmail\" class=\"form__label\">Email nauczyciela</label>\r\n          <div *ngIf=\"addSubjectForm.controls.userToAddEmail.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n            Podaj poprawny email.\r\n          </div>\r\n        </div>\r\n        <div class=\"form__group field col-md-5 col-12\">\r\n          <input type=\"email\" class=\"form__field yellowInput\" placeholder=\"Name\" name=\"name\" id='subjectName' formControlName=\"subjectName\"/>\r\n          <label for=\"subjectName\" class=\"form__label\">Nazwa przedmiotu</label>\r\n          <div *ngIf=\"addSubjectForm.controls.subjectName.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n            Podaj nazwę przedmiotu.\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n    <button type=\"submit\" class=\"formBtn col-4\" (click)=\"addNewSubject()\">Dodaj</button>\r\n    <h1 class=\"deleteSubH1\">Usuń przedmiot</h1>\r\n    <form [formGroup]=\"deleteSubjectForm\" class=\"row justify-content-around\">\r\n      <div class=\"form-group col-12 col-md-5\">\r\n        <h3>Wybierz klasę</h3>\r\n        <label>\r\n          <select class=\"form-control\"  formControlName=\"classID\">\r\n            <option *ngFor=\"let classrom of this.main.classrom;let indexOfelement=index;\" [value]=\"this.main.classrom[indexOfelement].id\">{{classrom.className}} - {{classrom.schoolName}} </option>\r\n          </select>\r\n        </label>\r\n        <div *ngIf=\"this.classrom\">\r\n          <h3>Wybierz przedmiot</h3>\r\n          <label>\r\n            <select class=\"form-control\"  formControlName=\"subjectID\">\r\n              <option *ngFor=\"let subject of this.classrom.subjects\" [value]=\"subject.id\">{{subject.name}}</option>\r\n            </select>\r\n          </label>\r\n        </div>\r\n\r\n        <div *ngIf=\"addSubjectForm.controls.classID.invalid && submittedSecondPart\" class=\"alert alert-danger\">\r\n          Wybierz klasę.\r\n        </div>\r\n      </div>\r\n    </form>\r\n    <button type=\"submit\" class=\"formBtn col-4 redBg\" (click)=\"deleteSubject()\">Usuń</button>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n";
      /***/
    },

    /***/
    "mV1k":
    /*!****************************************************************************!*\
      !*** ./src/app/components/classrom/main-teacher/main-teacher.component.ts ***!
      \****************************************************************************/

    /*! exports provided: MainTeacherComponent */

    /***/
    function mV1k(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "MainTeacherComponent", function () {
        return MainTeacherComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_main_teacher_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./main-teacher.component.html */
      "S39P");
      /* harmony import */


      var _main_teacher_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./main-teacher.component.scss */
      "kQR1");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");

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
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_4__["MainService"]
        }, {
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]
        }];
      };

      MainTeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-main-teacher',
        template: _raw_loader_main_teacher_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_main_teacher_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], MainTeacherComponent);
      /***/
    },

    /***/
    "mlCZ":
    /*!********************************************************************************************************!*\
      !*** ./src/app/components/subject/homework/add-homework-response/add-homework-response.component.scss ***!
      \********************************************************************************************************/

    /*! exports provided: default */

    /***/
    function mlCZ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtaG9tZXdvcmstcmVzcG9uc2UuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    },

    /***/
    "n3lE":
    /*!***********************************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/show-homework-data/show-homework-file/show-homework-file.component.html ***!
      \***********************************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function n3lE(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"homework.files[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Pliki do zadania</span>\n  </div>\n  <div class=\"col-12 p-0 m-0 row justify-content-start p-3\">\n    <button class=\"formBtn pr-3 pl-3 pb-3 \" (click)=\"downloadAllFiles()\" >Pobierz pliki</button>\n  </div>\n\n  <div class=\"col-12 mt-2 mb-2 p-3\" *ngFor=\"let srcItem of src; let i=index\">\n    <button class=\"formBtn openInBrowserBtn col-12 \" (click)=\"openWindow(i)\">Pobierz na dysk</button>\n    <div class=\"embed-responsive embed-responsive-16by9\"   >\n\n      <iframe class=\"embed-responsive-item\" [src]=\"getSrc(i)\"  allowfullscreen></iframe>\n    </div>\n  </div>\n</div>\n<div class=\"col-12 files row justify-content-start p-0 m-0 mainDiv\" *ngIf=\"homework.linkHrefs[0]\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Linki do zadania</span>\n  </div>\n  <div class=\"pb-2 pr-3 pl-3 \">\n    <div *ngFor=\"let link of homework.linkHrefs\" class=\"col-12 mb-2 text-center p-0\">\n      <a [href]=\"link\" target=\"_blank\" class=\"linkHref\">{{link}}</a>\n    </div>\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "o0aB":
    /*!*************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/text-chat/text-chat.component.html ***!
      \*************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function o0aB(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row m-0 p-4 mainChatDiv\">\n\n  <div class=\"chat col-12\" id=\"chatDiv\">\n\n    <div class=\"singleMessage row p-0\" *ngFor=\"let message of messages\">\n      <div class=\"col-12\">\n        <span class=\"name\">{{message.senderName}} {{message.senderSurname}}</span>\n        <span class=\"time\">{{message.sendTime}}</span>\n      </div>\n      <div class=\"col-12\">\n        {{message.msessage}}\n      </div>\n    </div>\n    <div class=\"load\" *ngIf=\"loadingMessages\">Ładowanie wiadomości</div>\n  </div>\n  <form class=\"row m-0 align-items-end p-0 col-12\" [formGroup]=\"messageForm\">\n    <div class=\"form-group col-10 m-0 pr-2 pl-0\">\n      <label>\n        <input type=\"text\" class=\"form-control form-control-lg\" placeholder=\"Wiadomość\" formControlName=\"message\">\n      </label>\n    </div>\n    <button class=\"formBtn col-2\" (click)=\"sendMessage()\"><i class=\"fas fa-reply\"></i></button>\n  </form>\n</div>\n\n";
      /***/
    },

    /***/
    "pCGu":
    /*!**************************************************************************************!*\
      !*** ./src/app/components/subject/homework/add-homework/add-homework.component.scss ***!
      \**************************************************************************************/

    /*! exports provided: default */

    /***/
    function pCGu(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".progress {\n  height: 35px;\n  font-size: 20px;\n}\n\n.green {\n  background: green;\n}\n\n.pickerDiv {\n  transition: all 0.3s ease;\n  cursor: pointer;\n}\n\n.headerDiv {\n  padding: 15px 0;\n}\n\n#picker {\n  text-align: center;\n  width: 100%;\n}\n\n.pickerDiv:hover > #picker {\n  color: var(--warn);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGFkZC1ob21ld29yay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFlBQUE7RUFDQSxlQUFBO0FBQ0Y7O0FBQ0E7RUFDRSxpQkFBQTtBQUVGOztBQUFBO0VBQ0UseUJBQUE7RUFDQSxlQUFBO0FBR0Y7O0FBREE7RUFDRSxlQUFBO0FBSUY7O0FBRkE7RUFDRSxrQkFBQTtFQUNBLFdBQUE7QUFLRjs7QUFIQTtFQUNFLGtCQUFBO0FBTUYiLCJmaWxlIjoiYWRkLWhvbWV3b3JrLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnByb2dyZXNzIHtcclxuICBoZWlnaHQ6IDM1cHg7XHJcbiAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuLmdyZWVuIHtcclxuICBiYWNrZ3JvdW5kOiBncmVlbjtcclxufVxyXG4ucGlja2VyRGl2IHtcclxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG4uaGVhZGVyRGl2IHtcclxuICBwYWRkaW5nOiAxNXB4IDA7XHJcbn1cclxuI3BpY2tlciB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5waWNrZXJEaXY6aG92ZXIgPiAjcGlja2VyIHtcclxuICBjb2xvcjogdmFyKC0td2FybilcclxuXHJcbn1cclxuIl19 */";
      /***/
    },

    /***/
    "pN5s":
    /*!************************************************************!*\
      !*** ./src/app/components/models/login/login.component.ts ***!
      \************************************************************/

    /*! exports provided: LoginComponent */

    /***/
    function pN5s(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
        return LoginComponent;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! raw-loader!./login.component.html */
      "4UMR");
      /* harmony import */


      var _login_component_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./login.component.scss */
      "ATwp");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../core/services/shared.service */
      "Im7X");
      /* harmony import */


      var _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ../../../core/services/main.service */
      "Y+C6");
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/forms */
      "3Pt+");

      var LoginComponent = /*#__PURE__*/function () {
        function LoginComponent(shared, main) {
          _classCallCheck(this, LoginComponent);

          this.shared = shared;
          this.main = main;
          this.submitted = false;
          this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            email: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('dawid@wp.pl', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].email]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('DAW100kr', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(5)])
          });
        }

        _createClass(LoginComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            var _this36 = this;

            this.shared.openLogin.subscribe(function () {
              _this36.openModal.nativeElement.click();
            });
          }
        }, {
          key: "submit",
          value: function submit() {
            this.submitted = true;

            if (this.loginForm.valid) {
              this.shared.loading = true;
              this.shared.openLoginModal();
              this.main.login(this.loginForm.value);
            }
          }
        }]);

        return LoginComponent;
      }();

      LoginComponent.ctorParameters = function () {
        return [{
          type: _core_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"]
        }, {
          type: _core_services_main_service__WEBPACK_IMPORTED_MODULE_5__["MainService"]
        }];
      };

      LoginComponent.propDecorators = {
        openModal: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"],
          args: ['openModal']
        }]
      };
      LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
        selector: 'app-login',
        template: _raw_loader_login_component_html__WEBPACK_IMPORTED_MODULE_1__["default"],
        styles: [_login_component_scss__WEBPACK_IMPORTED_MODULE_2__["default"]]
      })], LoginComponent);
      /***/
    },

    /***/
    "rPmW":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/static-pages/spinner/spinner.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function rPmW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div id=\"main\">\r\n\r\n  <span class=\"spinner\"></span>\r\n\r\n</div>\r\n\r\n";
      /***/
    },

    /***/
    "rRbH":
    /*!******************************************************************************!*\
      !*** ./src/app/components/subject/homework/homework/homework.component.scss ***!
      \******************************************************************************/

    /*! exports provided: default */

    /***/
    function rRbH(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".singeHomeworkDesc {\n  background: #43AA8B;\n  border-radius: var(--rad);\n  padding: 10px;\n  transition: 0.3s all;\n  border: 2px solid inherit;\n}\n\n.singeHomeworkDesc:hover {\n  box-shadow: 0 0 10px 3px black;\n}\n\n.singeHomeworkDescFocused {\n  border-bottom-right-radius: 0;\n  border-bottom-left-radius: 0;\n}\n\n.homeworkDesc {\n  border: 2px solid black;\n  border-bottom-right-radius: var(--rad);\n  border-bottom-left-radius: var(--rad);\n  background: #90BE6D;\n}\n\n.iframeWrapper {\n  display: inline-block;\n  position: relative;\n}\n\n.iframeWrapper iframe {\n  vertical-align: top;\n  pointer-events: none;\n  /* let any clicks go trough me */\n}\n\n.files {\n  padding: 20px 0;\n  border-top: 2px solid black;\n}\n\n.openInBrowserBtn {\n  border-bottom-right-radius: 0;\n  color: grey;\n  border-bottom-left-radius: 0;\n}\n\n.progress {\n  height: 35px;\n  font-size: 20px;\n}\n\n.green {\n  background: green;\n}\n\n.description {\n  border-bottom: 2px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcLi5cXC4uXFwuLlxcLi5cXGhvbWV3b3JrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsbUJBQUE7RUFDQSx5QkFBQTtFQUNBLGFBQUE7RUFDQSxvQkFBQTtFQUNBLHlCQUFBO0FBQ0Y7O0FBQ0E7RUFHRSw4QkFBQTtBQUVGOztBQUFBO0VBQ0UsNkJBQUE7RUFDQSw0QkFBQTtBQUdGOztBQURBO0VBQ0UsdUJBQUE7RUFDQSxzQ0FBQTtFQUNBLHFDQUFBO0VBQ0EsbUJBQUE7QUFJRjs7QUFGQTtFQUNFLHFCQUFBO0VBQ0Esa0JBQUE7QUFLRjs7QUFIQTtFQUNFLG1CQUFBO0VBQ0Esb0JBQUE7RUFBc0IsZ0NBQUE7QUFPeEI7O0FBTEE7RUFDRSxlQUFBO0VBQ0EsMkJBQUE7QUFRRjs7QUFMQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLDRCQUFBO0FBUUY7O0FBTkE7RUFDRSxZQUFBO0VBQ0EsZUFBQTtBQVNGOztBQVBBO0VBQ0UsaUJBQUE7QUFVRjs7QUFSQTtFQUNFLDhCQUFBO0FBV0YiLCJmaWxlIjoiaG9tZXdvcmsuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2luZ2VIb21ld29ya0Rlc2Mge1xyXG4gIGJhY2tncm91bmQ6ICM0M0FBOEI7XHJcbiAgYm9yZGVyLXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBwYWRkaW5nOiAxMHB4O1xyXG4gIHRyYW5zaXRpb246IDAuM3MgYWxsO1xyXG4gIGJvcmRlcjogMnB4IHNvbGlkIGluaGVyaXQ7XHJcbn1cclxuLnNpbmdlSG9tZXdvcmtEZXNjOmhvdmVyIHtcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDAgMCAxMHB4IDNweCByZ2JhKDAsMCwwLDEpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbiAgYm94LXNoYWRvdzogMCAwIDEwcHggM3B4IHJnYmEoMCwwLDAsMSk7XHJcbn1cclxuLnNpbmdlSG9tZXdvcmtEZXNjRm9jdXNlZCB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4uaG9tZXdvcmtEZXNjIHtcclxuICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogdmFyKC0tcmFkKTtcclxuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiB2YXIoLS1yYWQpO1xyXG4gIGJhY2tncm91bmQ6ICM5MEJFNkQ7XHJcbn1cclxuLmlmcmFtZVdyYXBwZXJ7XHJcbiAgZGlzcGxheTppbmxpbmUtYmxvY2s7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLmlmcmFtZVdyYXBwZXIgaWZyYW1le1xyXG4gIHZlcnRpY2FsLWFsaWduOnRvcDtcclxuICBwb2ludGVyLWV2ZW50czogbm9uZTsgLyogbGV0IGFueSBjbGlja3MgZ28gdHJvdWdoIG1lICovXHJcbn1cclxuLmZpbGVzIHtcclxuICBwYWRkaW5nOiAyMHB4IDA7XHJcbiAgYm9yZGVyLXRvcDogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcblxyXG4ub3BlbkluQnJvd3NlckJ0biB7XHJcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDA7XHJcbiAgY29sb3I6IGdyZXk7XHJcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMDtcclxufVxyXG4ucHJvZ3Jlc3Mge1xyXG4gIGhlaWdodDogMzVweDtcclxuICBmb250LXNpemU6MjBweDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gIGJhY2tncm91bmQ6IGdyZWVuO1xyXG59XHJcbi5kZXNjcmlwdGlvbiB7XHJcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG59XHJcbiJdfQ== */";
      /***/
    },

    /***/
    "twY+":
    /*!******************************************************************************************!*\
      !*** ./src/app/components/quiz/add-question-to-quiz/add-question-to-quiz.component.scss ***!
      \******************************************************************************************/

    /*! exports provided: default */

    /***/
    function twY(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhZGQtcXVlc3Rpb24tdG8tcXVpei5jb21wb25lbnQuc2NzcyJ9 */";
      /***/
    },

    /***/
    "u3Mt":
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/models/marks-list/marks-list.component.html ***!
      \**************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function u3Mt(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<button type=\"button\" #showMarksList class=\"d-none\" data-toggle=\"modal\" data-target=\"#openMarksList\"></button>\n\n<div class=\"modal fade\" id=\"openMarksList\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"openMarksList\" aria-hidden=\"true\">\n  <div class=\"modal-dialog modal-dialog-centered\" role=\"document\">\n    <div class=\"modal-content p-3\" *ngIf=\"response\">\n      <h1 class=\"text-center marksListH1 pb-2\">Lista ocen</h1>\n      <div *ngFor=\"let res of response\" class=\"row justify-content-between studentsList\">\n        <div class=\"col-8\">{{res.senderName}} {{res.senderSurname}}</div>\n        <div class=\"col-4 text-left\" *ngIf=\"res.mark\">{{res.mark}}</div>\n        <div class=\"col-4 text-left\" *ngIf=\"!res.mark\">Brak</div>\n      </div>\n\n    </div>\n\n  </div>\n</div>\n";
      /***/
    },

    /***/
    "uyyT":
    /*!**************************************************************************************************************************************!*\
      !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/subject/homework/homework-response/homework-response.component.html ***!
      \**************************************************************************************************************************************/

    /*! exports provided: default */

    /***/
    function uyyT(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<div class=\"row p-0 m-0\">\n  <div class=\"col-12 p-3\">\n    <span class=\"infoSpan\">Odpowiedź ucznia {{response.senderName}} {{response.senderSurname}} </span>\n  </div>\n  <div class=\"col-12 mt-2 pb-3\" *ngIf=\"response.description\">\n    <h2>{{response.description}}</h2>\n  </div>\n  <div class=\"col-12 mt-2 pb-3\" *ngIf=\"!response.description\">\n    <h2>Nie udzieliłeś odpowiedzi na to pytanie</h2>\n  </div>\n  <app-show-response-file [responseSet]=\"response\" class=\"col-12 p-0\"></app-show-response-file>\n</div>\n";
      /***/
    },

    /***/
    "vY5A":
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /*! exports provided: AppRoutingModule */

    /***/
    function vY5A(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
        return AppRoutingModule;
      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! tslib */
      "mrSG");
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _components_static_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./components/static-pages/welcome/welcome.component */
      "jkVP");
      /* harmony import */


      var _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./components/models/register/register.component */
      "K7IL");
      /* harmony import */


      var _components_classrom_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! ./components/classrom/main-teacher/main-teacher.component */
      "mV1k");
      /* harmony import */


      var _components_classrom_manage_classrom_manage_classrom_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! ./components/classrom/manage-classrom/manage-classrom.component */
      "Nypu");
      /* harmony import */


      var _components_static_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! ./components/static-pages/contact/contact.component */
      "+tdT");
      /* harmony import */


      var _components_static_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! ./components/static-pages/profile/profile.component */
      "9aNY");
      /* harmony import */


      var _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! ./components/classrom/classrom/classrom.component */
      "1BEf");
      /* harmony import */


      var _components_subject_subject_subject_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! ./components/subject/subject/subject.component */
      "ZTb9");

      var routes = [{
        path: '',
        component: _components_static_pages_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_3__["WelcomeComponent"]
      }, {
        path: 'register',
        component: _components_models_register_register_component__WEBPACK_IMPORTED_MODULE_4__["RegisterComponent"]
      }, {
        path: 'mainPage',
        component: _components_classrom_main_teacher_main_teacher_component__WEBPACK_IMPORTED_MODULE_5__["MainTeacherComponent"]
      }, {
        path: 'teacher/create-classrom',
        component: _components_classrom_manage_classrom_manage_classrom_component__WEBPACK_IMPORTED_MODULE_6__["ManageClassromComponent"]
      }, {
        path: 'contact',
        component: _components_static_pages_contact_contact_component__WEBPACK_IMPORTED_MODULE_7__["ContactComponent"]
      }, {
        path: 'profile',
        component: _components_static_pages_profile_profile_component__WEBPACK_IMPORTED_MODULE_8__["ProfileComponent"]
      }, {
        path: 'classrom/:classID',
        component: _components_classrom_classrom_classrom_component__WEBPACK_IMPORTED_MODULE_9__["ClassromComponent"]
      }, {
        path: 'subject',
        component: _components_subject_subject_subject_component__WEBPACK_IMPORTED_MODULE_10__["SubjectComponent"]
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
    "ynWL":
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /*! exports provided: default */

    /***/
    function ynWL(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = ".min {\n  position: relative;\n  height: 100%;\n}\n\napp-navbar {\n  height: 64px !important;\n  position: fixed;\n  width: 100%;\n  top: 0;\n  z-index: 10;\n}\n\n.outlet {\n  height: 100% !important;\n  margin: 0;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uXFwuLlxcYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxZQUFBO0FBQ0Y7O0FBQ0E7RUFDRSx1QkFBQTtFQUNBLGVBQUE7RUFDQSxXQUFBO0VBQ0EsTUFBQTtFQUNBLFdBQUE7QUFFRjs7QUFBQTtFQUNFLHVCQUFBO0VBQ0EsU0FBQTtBQUdGIiwiZmlsZSI6ImFwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5taW4ge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuYXBwLW5hdmJhciB7XHJcbiAgaGVpZ2h0OiA2NHB4ICFpbXBvcnRhbnQ7XHJcbiAgcG9zaXRpb246IGZpeGVkO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIHRvcDogMDtcclxuICB6LWluZGV4OiAxMDtcclxufVxyXG4ub3V0bGV0IHtcclxuICBoZWlnaHQ6IDEwMCUgIWltcG9ydGFudDtcclxuICBtYXJnaW46IDA7XHJcbn1cclxuXHJcblxyXG4iXX0= */";
      /***/
    },

    /***/
    "zUnb":
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /*! no exports provided */

    /***/
    function zUnb(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      "a3Wg");
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./app/app.module */
      "ZAI4");
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./environments/environment */
      "AytR");

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
      }

      Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])["catch"](function (err) {
        return console.error(err);
      });
      /***/
    },

    /***/
    "zn8P":
    /*!******************************************************!*\
      !*** ./$$_lazy_route_resource lazy namespace object ***!
      \******************************************************/

    /*! no static exports found */

    /***/
    function zn8P(module, exports) {
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
      webpackEmptyAsyncContext.id = "zn8P";
      /***/
    }
  }, [[0, "runtime", "vendor"]]]);
})();
//# sourceMappingURL=main-es5.js.map