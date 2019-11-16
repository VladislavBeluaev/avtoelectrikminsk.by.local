/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./resources/js/_master.js":
/*!*********************************!*\
  !*** ./resources/js/_master.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _classes_Menu_class__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/Menu.class */ "./resources/js/classes/Menu.class.js");
/* harmony import */ var _classes_Description_class__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/Description.class */ "./resources/js/classes/Description.class.js");
/* harmony import */ var _classes_YandexMap_class__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./classes/YandexMap.class */ "./resources/js/classes/YandexMap.class.js");




(function ($) {
  $(function () {
    new _classes_Menu_class__WEBPACK_IMPORTED_MODULE_0__["Menu"]('#hamburger-btn').run();
    new _classes_Description_class__WEBPACK_IMPORTED_MODULE_1__["Description"]({
      card: '.service_type',
      cardContainer: '#card-container',
      cardTransform: '.front',
      shortDescription: '.short-description',
      fullDescription: '.full-description',
      switchShortDescContainer: '.back-collapse-text'
    }).show();
    new _classes_YandexMap_class__WEBPACK_IMPORTED_MODULE_2__["YandexMap"]({
      mapContainer: '#map_canvas',
      navigationUrl: "https://www.google.com/maps/dir//53.8991169,27.5319583/@53.899117,27.531958,16z?hl=ru-RU"
    }).run();
  });
})(jQuery);

/***/ }),

/***/ "./resources/js/classes/Description.class.js":
/*!***************************************************!*\
  !*** ./resources/js/classes/Description.class.js ***!
  \***************************************************/
/*! exports provided: Description */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Description", function() { return Description; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * Created by User on 13.11.2019.
 */
var Description =
/*#__PURE__*/
function () {
  function Description(settings) {
    _classCallCheck(this, Description);

    this._serviceType$ = $(settings.card);
    this._serviceTypeContainer = settings.cardContainer;
    this._cardTransform = settings.cardTransform;
    this._shortDescription = settings.shortDescription;
    this._fullDescription = settings.fullDescription;
    this._switchShortDescContainer$ = $(settings.switchShortDescContainer);
    this._currentOverServiceType = null;
  }

  _createClass(Description, [{
    key: "show",
    value: function show() {
      this._serviceType$.on('click.service_full_description', 'button', $.proxy(this._showFullDescription, this));

      this._serviceType$.on('mouseover.service_short_description', $.proxy(this._short_description_over, this));

      this._serviceType$.on('mouseout.service_full_description', $.proxy(this._full_description_out, this));

      $(this._cardTransform).on('click.transform-back-face', $.proxy(this._showBackFace, this));

      this._switchShortDescContainer$.on('click.service_short_description', 'span', $.proxy(this._showShortDescription, this));
    }
  }, {
    key: "_showFullDescription",
    value: function _showFullDescription(e) {
      var target = e.target;
      if (target.tagName !== 'BUTTON') return false;

      this._toggleDescription(target, 'back');

      e.stopImmediatePropagation();
    }
  }, {
    key: "_showShortDescription",
    value: function _showShortDescription(e) {
      var target = e.target;
      if (target.tagName !== 'SPAN') return false;

      this._toggleDescription(target, 'front');

      e.stopImmediatePropagation();
    }
  }, {
    key: "_short_description_over",
    value: function _short_description_over(e) {
      if (this._currentOverServiceType !== null) return false;
      var target = e.target.closest(this._serviceTypeContainer);
      if (!target) return false;
      this._currentOverServiceType = target;
    }
  }, {
    key: "_full_description_out",
    value: function _full_description_out(e) {
      if (!this._currentOverServiceType) return false;
      var relatedTarget = e.relatedTarget;

      while (relatedTarget) {
        if (relatedTarget === this._currentOverServiceType) {
          return;
        }

        relatedTarget = relatedTarget.parentNode;
      }

      this._showFrontFace();

      if ($(this._currentOverServiceType).data('full-description') !== undefined) {
        console.log('calling');
        $(this._currentOverServiceType).find(this._switchShortDescContainer$).find('span').first().trigger('click.service_short_description');
      }

      this._currentOverServiceType = null;
    }
  }, {
    key: "_toggleDescription",
    value: function _toggleDescription(target, face) {
      var currentServiceDescription$ = $(target.closest(this._serviceTypeContainer));
      var shortDescription$ = $(this._shortDescription, currentServiceDescription$);
      var fullDescription$ = $(this._fullDescription, currentServiceDescription$);
      var self = this;
      currentServiceDescription$.queue(function (next) {
        if (face === 'back') {
          $(this).data('full-description', true);

          self._toggleFade(fullDescription$, shortDescription$);
        } else if (face === 'front') {
          $(this).removeData('full-description');

          self._toggleFade(shortDescription$, fullDescription$);
        }

        $(this).animate({
          height: face === 'back' ? "".concat(fullDescription$.height() + 24, "px") : '180px'
        }, 500);
        next();
      });
    }
  }, {
    key: "_toggleFade",
    value: function _toggleFade(inEl, outEl) {
      outEl.queue(function (next) {
        $(this).fadeIn('normal');
        next();
      }).queue(function (next) {
        $(this).addClass('d-none');
        next();
      });
      inEl.queue(function (next) {
        $(this).removeClass('d-none');
        next();
      }).queue(function (next) {
        $(this).fadeOut(0);
        next();
      }).queue(function (next) {
        $(this).fadeIn('normal');
        next();
      });
    }
  }, {
    key: "_showBackFace",
    value: function _showBackFace(e) {
      var target = e.target;
      if (!target.closest(this._cardTransform)) return false;

      this._showFrontFace();

      var card = target.closest(this._cardTransform).parentNode;
      $(card).queue(function (next) {
        $(this).css({
          transform: 'rotateY(180deg)'
        }).attr('data-current-transform', true);
        next();
      }).queue(function (next) {
        var parent$ = $(this).parent();
        parent$.find('.blackout, .service-header').css({
          visibility: 'hidden'
        });
        next();
      });
    }
  }, {
    key: "_showFrontFace",
    value: function _showFrontFace() {
      var currentTransform$ = $("[data-current-transform=true]");

      if (currentTransform$.length) {
        currentTransform$.queue(function (next) {
          $(this).css({
            transform: 'rotateY(0deg)'
          }).removeAttr('data-current-transform');
          next();
        }).queue(function (next) {
          var parent$ = $(this).parent();
          parent$.find('.blackout, .service-header').css({
            visibility: 'visible'
          });
          next();
        });
      }
    }
  }]);

  return Description;
}();

/***/ }),

/***/ "./resources/js/classes/Menu.class.js":
/*!********************************************!*\
  !*** ./resources/js/classes/Menu.class.js ***!
  \********************************************/
/*! exports provided: Menu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Menu", function() { return Menu; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Menu =
/*#__PURE__*/
function () {
  function Menu(toggleBtn) {
    _classCallCheck(this, Menu);

    this._toggleBtn$ = $(toggleBtn);
    this._toggleMenu$ = this._toggleBtn$.next();
  }

  _createClass(Menu, [{
    key: "run",
    value: function run() {
      this._toggleBtn$.on('click.toggle-menu', 'i', this._toggleMenuHandler.bind(this, this._toggleMenu$));

      $(window).on('resize.toggle-menu', Menu.resizeHandler.bind(this, this._toggleBtn$, this._toggleMenu$));
    }
  }, {
    key: "_toggleMenuHandler",
    value: function _toggleMenuHandler(menu$, triggerData) {
      if (triggerData === 'close') {
        this._closeToggleMenu(menu$);

        return false;
      }

      if (menu$.hasClass('d-none')) {
        menu$.queue(function (next) {
          $(this).removeClass('d-none');
          next();
        }).queue(function (next) {
          $(this).slideUp(0);
          next();
        }).queue(function (next) {
          $(this).slideDown('normal');
          next();
        });
      } else {
        this._closeToggleMenu(menu$);
      }
    }
  }, {
    key: "_closeToggleMenu",
    value: function _closeToggleMenu(menu$) {
      menu$.queue(function (next) {
        $(this).slideUp('normal');
        next();
      }).queue(function (next) {
        $(this).addClass('d-none');
        next();
      }).queue(function (next) {
        $(this).removeAttr('style');
        next();
      });
    }
  }], [{
    key: "resizeHandler",
    value: function resizeHandler(btn$, toggleMenu$, event) {
      var windowWidth = $(event.target).width();

      if (windowWidth >= 580 && toggleMenu$.hasClass('d-none') === false) {
        btn$.find('i').trigger('click.toggle-menu', 'close');
      }
    }
  }]);

  return Menu;
}();

/***/ }),

/***/ "./resources/js/classes/YandexMap.class.js":
/*!*************************************************!*\
  !*** ./resources/js/classes/YandexMap.class.js ***!
  \*************************************************/
/*! exports provided: YandexMap */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "YandexMap", function() { return YandexMap; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var YandexMap =
/*#__PURE__*/
function () {
  function YandexMap(settings) {
    _classCallCheck(this, YandexMap);

    this._marker$ = $(settings.mapContainer);
    this._url = settings.navigationUrl;
  }

  _createClass(YandexMap, [{
    key: "run",
    value: function run() {
      this._marker$.on('click.navigation', 'img', $.proxy(this._openNavigation, this));
    }
  }, {
    key: "_openNavigation",
    value: function _openNavigation() {
      window.open(this._url);
    }
  }]);

  return YandexMap;
}();

/***/ }),

/***/ "./resources/less/_master.less":
/*!*************************************!*\
  !*** ./resources/less/_master.less ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************!*\
  !*** multi ./resources/js/_master.js ./resources/less/_master.less ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! d:\OSPanel\domains\avtoelectrikminsk.by.local\resources\js\_master.js */"./resources/js/_master.js");
module.exports = __webpack_require__(/*! d:\OSPanel\domains\avtoelectrikminsk.by.local\resources\less\_master.less */"./resources/less/_master.less");


/***/ })

/******/ });