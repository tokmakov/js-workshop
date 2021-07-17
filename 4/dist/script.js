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
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/lib/components/accordion.js":
/*!********************************************!*\
  !*** ./src/js/lib/components/accordion.js ***!
  \********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.accordion = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      // если клик по элементу, который уже открыт — ничего делать не нужно
      if (Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).hasClass('accordion-heading-active')) return; // находим тот элемент(ы) аккордеона, который сейчас открыт — и плавно
      // его закрываем; по окончании анимации — плавно открываем другой

      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).nextSibling().parent().find('.accordion-content-active').slideUp(500, () => {
        // все открытые элементы закрыты, удаляем css-класс active
        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).parent().find('.accordion-heading-active').removeClass('accordion-heading-active');
        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).nextSibling().parent().find('.accordion-content-active').removeClass('accordion-content-active'); // теперь открываем контент элемента, по которому кликнули

        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).nextSibling().slideDown(500, 'block', () => {
          // элемент открыт, добавляем css-класс active
          Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('accordion-heading-active');
          Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).nextSibling().addClass('accordion-content-active');
        });
      });
    });
  }
};

Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-accordion="true"] .accordion-heading').accordion();

/***/ }),

/***/ "./src/js/lib/components/carousel.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/carousel.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.carousel = function (autoplay = true) {
  /*
   * <div class="carousel"> width: 100% (от контейнера .container 900px)
   *     <div class="carousel-window"> width: 100% (от родителя 900px); height: 500px
   *         <div class="carousel-slides"> display: flex, style.width = 300% (2700px)
   *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
   *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
   *             <div class="carousel-item">...</div> style.width = 33.33333% (900px)
   *         </div>
   *     </div>
   * </div>
   * Можно сказать, что carousel-window представляет собой окно просмотра 900x500px,
   * в этом окне просмотра виден одновременно только один кадр (слайд). Элемент
   * carousel-slides представляет из себя цепочку из трех кадров (как в кино). Эти
   * кадры выстроены по горизонтали благодаря display:flex. При клике на кнопки
   * next и prev — цепочка смещается влево, и в окне просмотра появляется очередной
   * кадр (слайд).
   */
  class Slider {
    constructor(slider, autoplay = true) {
      this.slider = slider; // все кадры (слайды)

      this.allFrames = Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slider).find('.carousel-item'); // цепочка кадров

      this.frameChain = Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slider).find('.carousel-slides'); // кнопка «вперед»

      this.nextButton = Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slider).find('.carousel-next'); // кнопка «назад»

      this.prevButton = Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(slider).find('.carousel-prev');
      this.index = 0; // индекс кадра, который сейчас в окне просмотра

      this.length = this.allFrames.length; // сколько всего есть кадров

      this.autoplay = autoplay; // включить автоматическую прокрутку?

      this.paused = null; // чтобы можно было выключать автопрокрутку

      this.dotButtons = this.dots(); // создать индикатор текущего кадра
    }

    init() {
      // все кадры должны быть одной ширины, равной ширине окна просмотра;
      // если кадров три, то ширина каждого кадра будет 100/3 = 33.33333%
      // от ширины контейнера .carousel-slides, то есть 900 пикселей
      this.allFrames.css('width', 100 / this.length + '%'); // ширина цепочки кадров должна равна ширине всех кадров, то есть
      // 900*3 = 2700 пикселей; но удобнее задать в процентах от родителя,
      // если кадров три, то ширина контейнера кадров будет 100*3 = 300%

      this.frameChain.css('width', 100 * this.length + '%');
      this.nextButton.click(event => {
        // клик по кнопке «вперед»
        event.preventDefault();
        this.next();
      });
      this.prevButton.click(event => {
        // клик по кнопке «назад»
        event.preventDefault();
        this.prev();
      });
      this.dotButtons.click(event => {
        // клик по кнопке индикатора
        event.preventDefault();
        const index = this.dotButtons.indexOf(event.target);
        if (index === this.index) return;
        this.goto(index);
      });

      if (this.autoplay) {
        // включить автоматическую прокрутку?
        this.play(); // когда мышь над слайдером — останавливаем автоматическую прокрутку

        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.slider).on('mouseenter', () => {
          clearInterval(this.paused);
        }); // когда мышь покидает пределы слайдера — опять запускаем прокрутку

        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this.slider).on('mouseleave', () => {
          this.play();
        });
      }
    } // перейти к кадру с индексом index


    goto(index) {
      // изменить текущий индекс...
      if (index > this.length - 1) {
        this.index = 0;
      } else if (index < 0) {
        this.index = this.length - 1;
      } else {
        this.index = index;
      } // ...и выполнить смещение


      this.move();
    } // перейти к следующему кадру


    next() {
      this.goto(this.index + 1);
    } // перейти к предыдущему кадру


    prev() {
      this.goto(this.index - 1);
    } // рассчитать и выполнить смещение


    move() {
      // на сколько нужно сместить, чтобы нужный кадр попал в окно
      const offset = 100 / this.length * this.index;
      this.frameChain.css('transform', `translateX(-${offset}%)`);
      this.dotButtons.removeClass('active');
      this.dotButtons[this.index].classList.add('active');
    } // запустить автоматическую прокрутку


    play() {
      this.paused = setInterval(() => this.next(), 3000);
    } // создать индикатор текущего слайда


    dots() {
      const ol = document.createElement('ol');
      ol.classList.add('carousel-indicators');

      for (let i = 0; i < this.length; i++) {
        let li = document.createElement('li');
        if (i === 0) li.classList.add('active');
        ol.append(li);
      }

      this.slider.prepend(ol);
      return Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(ol).children();
    }

  }

  for (let i = 0; i < this.length; i++) {
    new Slider(this[i], autoplay).init();
  }
};

Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.carousel').carousel();

/***/ }),

/***/ "./src/js/lib/components/dropdown.js":
/*!*******************************************!*\
  !*** ./src/js/lib/components/dropdown.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.dropdown = function () {
  for (let i = 0; i < this.length; i++) {
    let button = this[i].querySelector('.dropdown-toggle');
    let menu = this[i].querySelector('.dropdown-menu');
    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menu).hide(); // изначально меню должно быть скрыто

    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(button).click(() => {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(menu).fadeToggle(300);
    });
  }

  return this;
};

Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])('.dropdown[data-dropdown="true"]').dropdown();

/***/ }),

/***/ "./src/js/lib/components/modal.js":
/*!****************************************!*\
  !*** ./src/js/lib/components/modal.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.modal = function () {
  for (let i = 0; i < this.length; i++) {
    // получаем идентификатор окна, которое надо открыть
    const target = this[i].getAttribute('data-target'); // модального окна не существует — ничего не делаем

    if (!document.querySelector(target)) continue;
    /*
     * Навешиваем обработчик события на кнопку/ссылку открытия
     */

    if (!this[i].hasAttribute('data-click')) {
      // если еще не навесили
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(event => {
        event.preventDefault();
        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeIn(500); // чтобы контент страницы нельзя было прокручивать

        document.body.style.overflow = 'hidden';
        this[i].setAttribute('data-click', '');
      });
    }
    /*
     * Навешиваем обработчик события на кнопку/ссылку закрытия
     */


    const closeButtons = document.querySelectorAll(`${target} [data-close]`);
    closeButtons.forEach(item => {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(item).click(event => {
        event.preventDefault();
        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
      });
    });
    /*
     * Закрыть окно, если был клик за пределами модального окна
     */

    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target).click(event => {
      if (event.target.classList.contains('modal')) {
        Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(target).fadeOut(500);
        document.body.style.overflow = '';
      }
    });
  }
};

Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-modal="true"]').modal();

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.createModal = function ({
  content,
  buttons
} = {}) {
  for (let i = 0; i < this.length; i++) {
    // создаем модальное окно «на лету»; окно уже могло быть создано
    // при предыдущем вызове этой функции, так что надо это проверить
    let modal = document.querySelector(this[i].getAttribute('data-target'));
    if (modal) modal.remove();
    modal = document.createElement('div');
    modal.classList.add('modal');
    modal.setAttribute('id', this[i].getAttribute('data-target').slice(1));
    /*
     * ВХОДНЫЕ ПАРАМЕТРЫ ФУНКЦИИ createModal()
     * data = {
     *     content: {title: '...', body: '...'},
     *     buttons: [
     *         {classes: ['one', 'two'], text: '...', close: true, callback: function() {...}},
     *         {classes: ['one', 'two'], text: '...', close: true, callback: function() {...}}
     *     ]
     * };
     */

    const btns = []; // кнопки в подвале модального окна

    for (let j = 0; j < buttons.length; j++) {
      let btn = document.createElement('button');
      btn.classList.add('btn', ...buttons[j].classes);
      btn.textContent = buttons[j].text;

      if (buttons[j].close) {
        btn.setAttribute('data-close', '');
      }

      if (typeof buttons[j].callback === "function") {
        btn.addEventListener('click', buttons[j].callback);
      }

      btns.push(btn);
    }

    modal.innerHTML = `
        <div class="modal-dialog">
            <div class="modal-content">
                <button class="close" data-close>
                    <span>&times;</span>
                </button>
                <div class="modal-header">
                    <div class="modal-title">
                        ${content.title}
                    </div>
                </div>
                <div class="modal-body">
                    ${content.body}
                </div>
                <div class="modal-footer"></div>
            </div>
        </div>
        `;
    modal.querySelector('.modal-footer').append(...btns); // добавляем кнопки

    modal.querySelector('.modal-footer button').after(' '); // пробел между кнопками

    document.body.append(modal); // чтобы не навешивать обработчик клика для окрытия окна при вызове функции modal,
    // потому что обработчик будет открывать модальное окно, а мы окно открываем сами;
    // нам от функции modal нужно, только чтобы она навесила обработчики закрытия окна

    this[i].setAttribute('data-click', '');
    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).modal(); // назначаем обработчик клика для закрытия окна

    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(modal).fadeIn(500); // сразу открываем это модальное окно
  }
};

/***/ }),

/***/ "./src/js/lib/components/tab.js":
/*!**************************************!*\
  !*** ./src/js/lib/components/tab.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.tab = function () {
  for (let i = 0; i < this.length; i++) {
    Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).click(() => {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).addClass('tab-item-active').siblings().removeClass('tab-item-active').closest('.tab').find('.tab-content').removeClass('tab-content-active').valueOf(Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).parent().children().indexOf(this[i])).addClass('tab-content-active');
    });
  }
};

Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])('[data-tab="true"] .tab-item').tab();

/***/ }),

/***/ "./src/js/lib/core.js":
/*!****************************!*\
  !*** ./src/js/lib/core.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
const $ = function (selector) {
  return new init(selector);
};

const init = function (selector) {
  let elements = this._(selector);

  for (let i = 0; i < elements.length; i++) {
    this[i] = elements[i];
  }

  this.length = elements.length;
};

init.prototype = $.extensions = {};

init.prototype._ = function (selector) {
  let elements = []; // selector может быть селектором элементов, объектом NodeList или объектом $(…)

  if (typeof selector === "string") {
    let elems = document.querySelectorAll(selector);

    for (let i = 0; i < elems.length; i++) {
      elements[i] = elems[i];
    }
  }

  if (typeof selector === "object") {
    if (selector instanceof NodeList) {
      for (let i = 0; i < selector.length; i++) {
        elements[i] = selector[i];
      }
    }

    if (selector instanceof init) {
      for (let i = 0; i < selector.length; i++) {
        elements[i] = selector[i];
      }
    }

    if (selector instanceof HTMLElement) {
      elements[0] = selector;
    }

    ;
  }

  return elements;
};

window.$ = $;
/* harmony default export */ __webpack_exports__["default"] = ($);

/***/ }),

/***/ "./src/js/lib/lib.js":
/*!***************************!*\
  !*** ./src/js/lib/lib.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core.js */ "./src/js/lib/core.js");
/* harmony import */ var _modules_display_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/display.js */ "./src/js/lib/modules/display.js");
/* harmony import */ var _modules_classes_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/classes.js */ "./src/js/lib/modules/classes.js");
/* harmony import */ var _modules_handlers_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/handlers.js */ "./src/js/lib/modules/handlers.js");
/* harmony import */ var _modules_content_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/content.js */ "./src/js/lib/modules/content.js");
/* harmony import */ var _modules_collection_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/collection.js */ "./src/js/lib/modules/collection.js");
/* harmony import */ var _modules_styles_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/styles.js */ "./src/js/lib/modules/styles.js");
/* harmony import */ var _modules_effects_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/effects.js */ "./src/js/lib/modules/effects.js");
/* harmony import */ var _components_dropdown_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/dropdown.js */ "./src/js/lib/components/dropdown.js");
/* harmony import */ var _components_modal_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/modal.js */ "./src/js/lib/components/modal.js");
/* harmony import */ var _components_tab_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/tab.js */ "./src/js/lib/components/tab.js");
/* harmony import */ var _components_accordion_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/accordion.js */ "./src/js/lib/components/accordion.js");
/* harmony import */ var _components_carousel_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/carousel.js */ "./src/js/lib/components/carousel.js");
/* harmony import */ var _services_requests_js__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./services/requests.js */ "./src/js/lib/services/requests.js");














/* harmony default export */ __webpack_exports__["default"] = (_core_js__WEBPACK_IMPORTED_MODULE_0__["default"]);

/***/ }),

/***/ "./src/js/lib/modules/classes.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/classes.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.addClass = function (...classNames) {
  // после rest-оператора ... переменная classNames это массив ["one", "two"]
  for (let i = 0; i < this.length; i++) {
    // после spread-оператора ... функция получит две строки: "one", "two"
    this[i].classList.add(...classNames);
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.removeClass = function (...classNames) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.remove(...classNames);
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.toggleClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    this[i].classList.toggle(className);
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.hasClass = function (className) {
  for (let i = 0; i < this.length; i++) {
    if (this[i].classList.contains(className)) {
      return true;
    }
  }

  return false;
};

/***/ }),

/***/ "./src/js/lib/modules/collection.js":
/*!******************************************!*\
  !*** ./src/js/lib/modules/collection.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");
 // Возвращает элемент коллекции по индексу, обернутый в $(…)

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.valueOf = function (i) {
  if (i >= this.length) return this.zero();
  const item = this[i];
  this.zero(); // будем записывать в this новую коллекцию

  this[0] = item;
  this.length = 1;
  return this;
}; // Возвращает первый элемент коллекции, обернутый в $(…)


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.first = function () {
  return this.valueOf(0);
}; // Возвращает последний элемент коллекции, обернутый в $(…)


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.last = function () {
  return this.valueOf(this.length - 1);
}; // Возвращает массив элементов коллекции


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.toArray = function () {
  return this._(this);
}; // Удаляет все элементы из коллекции


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.zero = function () {
  for (let i = 0; i < this.length; i++) {
    delete this[i];
  }

  this.length = 0;
  return this;
}; // Убирает дубли из коллекции элементов


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.uniq = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0;

  for (let i = 0; i < items.length; i++) {
    if (!this.oneExist(item[i])) {
      // если еще нет — добавляем
      this[counter++] = item[i];
      this.length = counter;
    }
  }

  return this;
}; // Возвращает индекс элемента в коллекции; подразумевается, что объект $(…) содержит коллекцию
// однотипных элементов (например, элементы слайдера) и нужно найти индекс отдельного элемента


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.indexOf = function (selector) {
  let elements = this._(selector);

  for (let i = 0; i < this.length; i++) {
    if (this[i] == elements[0]) return i;
  }

  return -1;
}; // Находит элементы среди потомков элементов коллекции по css-селектору и возвращает
// объект $(…) с новой коллекцией


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.find = function (selector) {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0;

  for (let i = 0; i < items.length; i++) {
    let children = items[i].querySelectorAll(selector);

    for (let j = 0; j < children.length; j++) {
      if (!this.oneExist(children[j])) {
        // исключаем дубли
        this[counter++] = children[j]; // записываем в this новую коллекцию

        this.length = counter;
      }
    }
  }

  return this;
}; // Фильтрует элементы коллекции по css-селектору и возвращает объект $(…) с новой коллекцией


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.filter = function (selector) {
  let elements = this._(selector);

  if (elements.length === 0) {
    return this; // если фильтр пустой, ничего не делаем
  }

  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0;

  for (let i = 0; i < items.length; i++) {
    for (let j = 0; j < elements.length; j++) {
      if (items[i] == elements[j]) {
        this[counter++] = items[i]; // записываем в this новую коллекцию
      }
    }
  }

  this.length = counter;
  return this;
}; // Добавляет к коллекции элементы по css-селектору и возвращает объект $(…) с новой коллекцией


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.plus = function (selector) {
  let elements = this._(selector);

  let counter = this.length;

  for (let i = 0; i < elements.length; i++) {
    if (this.oneExist(elements[i])) continue; // исключаем дубли

    this[counter++] = elements[i];
    this.length = counter;
  }

  return this;
}; // Удаляет из коллекции элементы по css-селектору и возвращает объект $(…) с новой коллекцией


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.minus = function (selector) {
  let oneItems = this.toArray(); // массив элементов исходной коллекции

  let twoItems = this._(selector); // массив элементов второй коллекции


  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      add;

  for (let i = 0; i < oneItems.length; i++) {
    add = true; // добавлять или нет элемент в this?

    for (let j = 0; j < twoItems.length; j++) {
      // элемент исходной коллекции есть во второй — нам не подходит
      if (oneItems[i] == twoItems[j]) add = false;
    }

    if (add) this[counter++] = oneItems[i];
  }

  this.length = counter;
  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.closest = function (selector) {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0;

  for (let i = 0; i < items.length; i++) {
    let closest = items[i].closest(selector);

    if (closest && !this.oneExist(closest)) {
      this[counter++] = closest;
      this.length = counter;
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.nextSibling = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      next;

  for (let i = 0; i < items.length; i++) {
    next = items[i].nextElementSibling;

    if (next) {
      this[counter++] = next;
    }
  }

  this.length = counter;
  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.prevSibling = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      prev;

  for (let i = 0; i < items.length; i++) {
    prev = items[i].previousElementSibling;

    if (prev) {
      this[counter++] = prev;
    }
  }

  this.length = counter;
  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.siblings = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      parent,
      children;

  for (let i = 0; i < items.length; i++) {
    let parent = items[i].parentElement;

    if (parent) {
      children = parent.children;

      for (let j = 0; j < children.length; j++) {
        if (children[j] == items[i]) continue;
        if (this.oneExist(children[j])) continue; // исключаем дубли

        this[counter++] = children[j];
        this.length = counter;
      }
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.children = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      children;

  for (let i = 0; i < items.length; i++) {
    children = items[i].children;

    for (let j = 0; j < children.length; j++) {
      this[counter++] = children[j];
    }
  }

  this.length = counter;
  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.parent = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      parent;

  for (let i = 0; i < items.length; i++) {
    parent = items[i].parentElement;

    if (parent && !this.oneExist(parent)) {
      this[counter++] = parent;
      this.length = counter;
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.firstChild = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      firstChild;

  for (let i = 0; i < items.length; i++) {
    firstChild = items[i].firstElementChild;

    if (firstChild) {
      this[counter++] = firstChild;
    }
  }

  this.length = counter;
  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.lastChild = function () {
  let items = this.toArray(); // массив элементов исходной коллекции

  this.zero(); // будем записывать в this новую коллекцию

  let counter = 0,
      lastChild;

  for (let i = 0; i < items.length; i++) {
    lastChild = items[i].lastElementChild;

    if (lastChild) {
      this[counter++] = lastChild;
    }
  }

  this.length = counter;
  return this;
}; // Проверяет, что элемент с css-селектором уже есть в коллекции; подразумевается, что элемент
// должен быть один, поэтому проверяется только первый


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.oneExist = function (selector) {
  let items = this._(selector);

  if (items.length === 0) return false;
  if (this.length === 0) return false;

  for (let i = 0; i < this.length; i++) {
    if (this[i] == items[0]) return true;
  }

  return false;
}; // Проверяет, что хотя бы один элемент с css-селектором уже есть в коллекции


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.anyExist = function (selector) {
  let items = this._(selector);

  if (items.length === 0) return false;
  if (this.length === 0) return false;

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (this[i] == items[j]) return true;
    }
  }

  return false;
}; // Проверяет, что все элементы с заданным css-селектором уже есть в коллекции


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.allExist = function (selector) {
  let items = this._(selector);

  if (items.length === 0) return false;
  if (this.length === 0) return false;
  let counter = 0;

  for (let i = 0; i < this.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (this[i] == items[j]) {
        items[j] = null;
        counter++;
      }
    }
  }

  return counter === items.length;
};

/***/ }),

/***/ "./src/js/lib/modules/content.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/content.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.html = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== undefined) {
      this[i].innerHTML = content;
    } else {
      return this[i].innerHTML;
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.text = function (content) {
  for (let i = 0; i < this.length; i++) {
    if (content !== undefined) {
      this[i].textContent = content;
    } else {
      return this[i].textContent;
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.empty = function () {
  this.text('');
  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/display.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/display.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.show = function (display = 'block') {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style) {
      this[i].style.display = display;
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.hide = function () {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style) {
      this[i].style.display = 'none';
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.toggle = function (display = 'block') {
  for (let i = 0; i < this.length; i++) {
    if (this[i].style) {
      if (this[i].style.display === 'none') {
        this[i].style.display = display;
      } else {
        this[i].style.display = 'none';
      }
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/effects.js":
/*!***************************************!*\
  !*** ./src/js/lib/modules/effects.js ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.animate = function (duration, callback, complete) {
  let startTime = null; // вспомогательная функция, которую будем передавать в requestAnimationFrame()

  function animate(currentTime) {
    // первый вызов этой функции
    if (!startTime) {
      startTime = currentTime;
    } // прогресс анимации, от 0 до 1


    let progress = (currentTime - startTime) / duration;
    if (progress > 1) progress = 1; // при каждом вызове этой функции, она вызывает callback()

    callback(progress);

    if (progress < 1) {
      requestAnimationFrame(animate); // анимация еще не завершилась
    } else {
      if (typeof complete === "function") complete(); // анимация завершилась
    }
  }

  return animate;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.fadeIn = function (duration = 1000, display = 'block', complete) {
  let animate;

  for (let i = 0; i < this.length; i++) {
    // если элемент не скрыт, то ничего делать не нужно
    if (getComputedStyle(this[i]).display !== 'none') continue;
    this[i].style.display = display;
    animate = this.animate( // общая продолжительность анимации в миллисекундах
    duration, // функция будет вызвана несколько раз, progress изменяется от 0 до 1
    progress => this[i].style.opacity = progress, // после завершения анимации будет вызвана функция complete()
    typeof complete === "function" ? complete.bind(this[i]) : undefined);
    requestAnimationFrame(animate);
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.fadeOut = function (duration = 1000, complete) {
  let animate;

  for (let i = 0; i < this.length; i++) {
    // если элемент уже скрыт, то ничего делать не нужно
    if (getComputedStyle(this[i]).display === 'none') continue;
    animate = this.animate( // общая продолжительность анимации в миллисекундах
    duration, // функция будет вызвана несколько раз, progress изменяется от 0 до 1
    progress => {
      this[i].style.opacity = 1 - progress;
      if (progress === 1) this[i].style.display = 'none';
    }, // после завершения анимации будет вызвана функция complete()
    typeof complete === "function" ? complete.bind(this[i]) : undefined);
    requestAnimationFrame(animate);
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.fadeToggle = function (duration = 1000, display = 'block', complete) {
  for (let i = 0; i < this.length; i++) {
    if (getComputedStyle(this[i]).display === 'none') {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeIn(duration, display, complete);
    } else {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).fadeOut(duration, complete);
    }
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.slideUp = function (duration = 1000, complete) {
  let animate, height, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth, marginTop, marginBottom;

  for (let i = 0; i < this.length; i++) {
    // если элемент уже скрыт, то ничего делать не нужно
    if (getComputedStyle(this[i]).display === 'none') continue;
    this[i].style.overflow = 'hidden';
    height = parseInt(getComputedStyle(this[i]).height);
    paddingTop = parseInt(getComputedStyle(this[i]).paddingTop);
    paddingBottom = parseInt(getComputedStyle(this[i]).paddingBottom);
    borderTopWidth = parseInt(getComputedStyle(this[i]).borderTopWidth);
    borderBottomWidth = parseInt(getComputedStyle(this[i]).borderBottomWidth);
    marginTop = parseInt(getComputedStyle(this[i]).marginTop);
    marginBottom = parseInt(getComputedStyle(this[i]).marginBottom);
    animate = this.animate( // общая продолжительность анимации в миллисекундах
    duration, // функция будет вызвана несколько раз, progress изменяется от 0 до 1
    progress => {
      this[i].style.height = Math.round((1 - progress) * height) + 'px';
      this[i].style.paddingTop = Math.round((1 - progress) * paddingTop) + 'px';
      this[i].style.paddingBottom = Math.round((1 - progress) * paddingBottom) + 'px';
      this[i].style.borderTopWidth = Math.round((1 - progress) * borderTopWidth) + 'px';
      this[i].style.borderBottomWidth = Math.round((1 - progress) * borderBottomWidth) + 'px';
      this[i].style.marginTop = Math.round((1 - progress) * marginTop) + 'px';
      this[i].style.marginBottom = Math.round((1 - progress) * marginBottom) + 'px';

      if (progress === 1) {
        this[i].style.display = 'none';
        this[i].style.height = '';
        this[i].style.overflow = '';
        this[i].style.paddingTop = '';
        this[i].style.paddingBottom = '';
        this[i].style.borderTopWidth = '';
        this[i].style.borderBottomWidth = '';
        this[i].style.marginTop = '';
        this[i].style.marginBottom = '';
      }
    }, // после завершения анимации будет вызвана функция complete()
    typeof complete === "function" ? complete.bind(this[i]) : undefined);
    requestAnimationFrame(animate);
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.slideDown = function (duration = 1000, display = 'block', complete) {
  let animate, height, paddingTop, paddingBottom, borderTopWidth, borderBottomWidth, marginTop, marginBottom;

  for (let i = 0; i < this.length; i++) {
    // если элемент не скрыт, то ничего делать не нужно
    if (getComputedStyle(this[i]).display !== 'none') continue;
    this[i].style.display = display;
    this[i].style.overflow = 'hidden';
    height = parseInt(getComputedStyle(this[i]).height);
    paddingTop = parseInt(getComputedStyle(this[i]).paddingTop);
    paddingBottom = parseInt(getComputedStyle(this[i]).paddingBottom);
    borderTopWidth = parseInt(getComputedStyle(this[i]).borderTopWidth);
    borderBottomWidth = parseInt(getComputedStyle(this[i]).borderBottomWidth);
    marginTop = parseInt(getComputedStyle(this[i]).marginTop);
    marginBottom = parseInt(getComputedStyle(this[i]).marginBottom);
    animate = this.animate( // общая продолжительность анимации в миллисекундах
    duration, // функция будет вызвана несколько раз, progress изменяется от 0 до 1
    progress => {
      this[i].style.height = Math.round(progress * height) + 'px';
      this[i].style.paddingTop = Math.round(progress * paddingTop) + 'px';
      this[i].style.paddingBottom = Math.round(progress * paddingBottom) + 'px';
      this[i].style.borderTopWidth = Math.round(progress * borderTopWidth) + 'px';
      this[i].style.borderBottomWidth = Math.round(progress * borderBottomWidth) + 'px';
      this[i].style.marginTop = Math.round(progress * marginTop) + 'px';
      this[i].style.marginBottom = Math.round(progress * marginBottom) + 'px';

      if (progress === 1) {
        this[i].style.height = '';
        this[i].style.overflow = '';
        this[i].style.paddingTop = '';
        this[i].style.paddingBottom = '';
        this[i].style.borderTopWidth = '';
        this[i].style.borderBottomWidth = '';
        this[i].style.marginTop = '';
        this[i].style.marginBottom = '';
      }
    }, // после завершения анимации будет вызвана функция complete()
    typeof complete === "function" ? complete.bind(this[i]) : undefined);
    requestAnimationFrame(animate);
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.slideToggle = function (duration = 1000, display = 'block', complete) {
  for (let i = 0; i < this.length; i++) {
    if (getComputedStyle(this[i]).display === 'none') {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).slideDown(duration, display, complete);
    } else {
      Object(_core_js__WEBPACK_IMPORTED_MODULE_0__["default"])(this[i]).slideUp(duration, complete);
    }
  }
};

/***/ }),

/***/ "./src/js/lib/modules/handlers.js":
/*!****************************************!*\
  !*** ./src/js/lib/modules/handlers.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.on = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    this[i].addEventListener(eventName, callback);
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.off = function (eventName, callback) {
  for (let i = 0; i < this.length; i++) {
    this[i].removeEventListener(eventName, callback);
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.click = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      // передан handler — назначаем его как обработчик события
      this[i].addEventListener('click', handler);
    } else {
      // в противном случае вызываем событие клика на элементе
      this[i].click();
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.focus = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('focus', handler);
    } else {
      this[i].focus();
    }
  }

  return this;
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.blur = function (handler) {
  for (let i = 0; i < this.length; i++) {
    if (handler) {
      this[i].addEventListener('blur', handler);
    } else {
      this[i].blur();
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/modules/styles.js":
/*!**************************************!*\
  !*** ./src/js/lib/modules/styles.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.css = function (name, value = '') {
  for (let i = 0; i < this.length; i++) {
    if (typeof name === "object") {
      for (let prop in name) {
        this[i].style[prop] = name[prop];
      }
    }

    if (typeof name === "string") {
      this[i].style[name] = value;
    }
  }

  return this;
};

/***/ }),

/***/ "./src/js/lib/services/requests.js":
/*!*****************************************!*\
  !*** ./src/js/lib/services/requests.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../core.js */ "./src/js/lib/core.js");


_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.get = async function (url, responseType = 'json') {
  let response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status ${response.status}`);
  }

  switch (responseType) {
    case 'json':
      return await response.json();

    case 'text':
      return await response.text();

    case 'blob':
      return await response.blob();

    default:
      return response.body;
  }
};

_core_js__WEBPACK_IMPORTED_MODULE_0__["default"].extensions.post = async function (url, data, options = {}, responseType = 'json') {
  let settings = {
    method: 'POST',
    body: data
  };

  for (let key in options) {
    settings[key] = options[key];
  }

  let response = await fetch(url, settings);

  if (!response.ok) {
    throw new Error(`Could not fetch ${url}, status ${response.status}`);
  }

  switch (responseType) {
    case 'json':
      return await response.json();

    case 'text':
      return await response.text();

    case 'blob':
      return await response.blob();

    default:
      return response.body;
  }
};

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_lib_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/lib.js */ "./src/js/lib/lib.js");


 // создание модального окна «на лету»

let modal = {
  content: {
    title: 'Модальное окно #three (динамическое)',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  buttons: [{
    classes: ['btn', 'btn-danger'],
    text: 'Закрыть',
    close: true,
    callback: () => alert('Закрыть')
  }, {
    classes: ['btn', 'btn-success'],
    text: 'Сохранить',
    close: false,
    callback: () => alert('Сохранить')
  }]
};
Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#modal-open').click(() => Object(_lib_lib_js__WEBPACK_IMPORTED_MODULE_0__["default"])('#modal-open').createModal(modal));

/***/ })

/******/ });
//# sourceMappingURL=script.js.map