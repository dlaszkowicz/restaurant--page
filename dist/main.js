/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantContactPage = () => {\n  const container = document.querySelector(\".content-area\");\n\n  const formContainer = document.createElement(\"div\");\n  formContainer.classList.add(\"form-container\");\n\n  const contactForm = document.createElement(\"form\");\n\n  const emailInput = document.createElement(\"input\");\n  emailInput.placeholder = \"Your Email\";\n  emailInput.type = \"email\";\n\n  contactForm.appendChild(emailInput);\n\n  const topicSelect = document.createElement(\"select\");\n\n  const topicOption = document.createElement(\"option\");\n  topicOption.textContent = \"Topic\";\n\n  topicSelect.appendChild(topicOption);\n  contactForm.appendChild(topicSelect);\n\n  const citySelect = document.createElement(\"select\");\n\n  const cityOption = document.createElement(\"option\");\n  cityOption.textContent = \"City\";\n\n  citySelect.appendChild(cityOption);\n  contactForm.appendChild(citySelect);\n\n  const messageInput = document.createElement(\"input\");\n  messageInput.placeholder = \"Message\";\n  messageInput.classList.add(\"message-input\");\n\n  contactForm.appendChild(messageInput);\n\n  const termsContainer = document.createElement(\"div\");\n  const termsInput = document.createElement(\"input\");\n  termsInput.type = \"checkbox\";\n  termsInput.name = \"terms\";\n  const termsLabel = document.createElement(\"label\");\n  termsLabel.for = \"terms\";\n  termsLabel.innerHTML = `I confirm that I have read the Privacy <br> Policy of Dan Inc. with office in <br> Copenhagen.`;\n\n  termsContainer.appendChild(termsInput);\n  termsContainer.appendChild(termsLabel);\n\n  contactForm.appendChild(termsContainer);\n\n  const submitBtn = document.createElement(\"button\");\n  submitBtn.type = \"submit\";\n  submitBtn.textContent = \"Send\";\n\n  contactForm.appendChild(submitBtn);\n\n  container.appendChild(formContainer);\n  formContainer.appendChild(contactForm);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantContactPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/contact.js?");

/***/ }),

/***/ "./src/footer.js":
/*!***********************!*\
  !*** ./src/footer.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createFooter = () => {\n  const container = document.querySelector(\".container\");\n  const footer = document.createElement(\"div\");\n  footer.innerHTML = `<a href=\"https://github.com/dlaszkowicz\">Copyright © 2023 dlaszkowicz <svg xmlns=\"\n  http://www.w3.org/2000/svg\" width=\"16\" height=\"16\" fill=\"currentColor\" class=\"bi bi-github\" viewBox=\"0 0 16 16\">\n  <path d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z\"/>\n</svg></a>`;\n  footer.classList.add(\"footer\");\n  container.appendChild(footer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createFooter);\n\n\n//# sourceURL=webpack://restaurant-page/./src/footer.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pageLoad__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pageLoad */ \"./src/pageLoad.js\");\n\n\n(0,_pageLoad__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantMenuPage = () => {\n  const container = document.querySelector(\".content-area\");\n  const menuContainer = document.createElement(\"div\");\n  menuContainer.classList.add(\"menu-container\");\n  container.appendChild(menuContainer);\n\n  const menuSlot1 = document.createElement(\"div\");\n\n  const img1 = document.createElement(\"img\");\n  img1.src = \"../images/menu-1.png\";\n  img1.width = \"300\";\n  img1.height = \"200\";\n  menuSlot1.appendChild(img1);\n\n  const text1 = document.createElement(\"p\");\n  text1.innerHTML = \"BBQ Beef Burger <br> $7.20\";\n  menuSlot1.appendChild(text1);\n\n  const menuSlot2 = document.createElement(\"div\");\n\n  const img2 = document.createElement(\"img\");\n  img2.src = \"../images/menu-2.png\";\n  img2.width = \"300\";\n  img2.height = \"200\";\n  menuSlot2.appendChild(img2);\n\n  const text2 = document.createElement(\"p\");\n  text2.innerHTML = \"Spicy Beef Burger <br> $5.20\";\n  menuSlot2.appendChild(text2);\n\n  const menuSlot3 = document.createElement(\"div\");\n\n  const img3 = document.createElement(\"img\");\n  img3.src = \"../images/menu-3.png\";\n  img3.width = \"300\";\n  img3.height = \"200\";\n  menuSlot3.appendChild(img3);\n\n  const text3 = document.createElement(\"p\");\n  text3.innerHTML = \"Classic Beef Burger <br> $6.20\";\n  menuSlot3.appendChild(text3);\n\n  const menuSlot4 = document.createElement(\"div\");\n\n  const img4 = document.createElement(\"img\");\n  img4.src = \"../images/menu-4.png\";\n  img4.width = \"300\";\n  img4.height = \"200\";\n  menuSlot4.appendChild(img4);\n\n  const text4 = document.createElement(\"p\");\n  text4.innerHTML = \"Cheese Beef Burger <br> $5.30\";\n  menuSlot4.appendChild(text4);\n\n  menuContainer.appendChild(menuSlot1);\n  menuContainer.appendChild(menuSlot2);\n  menuContainer.appendChild(menuSlot3);\n  menuContainer.appendChild(menuSlot4);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantMenuPage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/menu.js?");

/***/ }),

/***/ "./src/pageLoad.js":
/*!*************************!*\
  !*** ./src/pageLoad.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _restaurant__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant */ \"./src/restaurant.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./footer */ \"./src/footer.js\");\n\n\n\n\n\nfunction initialLoad() {\n  (0,_footer__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n  const contentArea = document.querySelector(\".content-area\");\n  function clearContainer() {\n    contentArea.innerHTML = \"\";\n  }\n  const container = document.querySelector(\".container\");\n\n  const navBar = document.createElement(\"nav\");\n  container.appendChild(navBar);\n\n  const menuBtn = document.createElement(\"button\");\n  menuBtn.textContent = \"Menu\";\n  const homeBtn = document.createElement(\"button\");\n  homeBtn.textContent = \"Home\";\n\n  const contactBtn = document.createElement(\"button\");\n  contactBtn.textContent = \"Contact\";\n\n  navBar.appendChild(menuBtn);\n  navBar.appendChild(homeBtn);\n  navBar.appendChild(contactBtn);\n\n  (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n\n  menuBtn.addEventListener(\"click\", function () {\n    clearContainer();\n    (0,_menu__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\n  });\n  homeBtn.addEventListener(\"click\", function () {\n    clearContainer();\n    (0,_restaurant__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\n  });\n  contactBtn.addEventListener(\"click\", function () {\n    clearContainer();\n    (0,_contact__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\n  });\n}\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (initialLoad);\n\n\n//# sourceURL=webpack://restaurant-page/./src/pageLoad.js?");

/***/ }),

/***/ "./src/restaurant.js":
/*!***************************!*\
  !*** ./src/restaurant.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst createRestaurantHomePage = () => {\n  const container = document.querySelector(\".content-area\");\n\n  const homeContainer = document.createElement(\"div\");\n  homeContainer.classList.add(\"home-container\");\n\n  const imgHolder = document.createElement(\"div\");\n  imgHolder.classList.add(\"img-holder\");\n  homeContainer.appendChild(imgHolder);\n\n  const img = document.createElement(\"img\");\n  img.src = \"../images/logo.png\";\n  img.width = \"560\";\n  img.height = \"392\";\n\n  const imgText = document.createElement(\"p\");\n  imgText.innerHTML = `Savor artisanal burger bliss, where each<br>\n  bite reveals a symphony of flavors tailored<br>\n  to delight.`;\n  imgHolder.appendChild(img);\n  imgHolder.appendChild(imgText);\n\n  const btnBookNow = document.createElement(\"button\");\n  btnBookNow.textContent = \"BOOK NOW\";\n  btnBookNow.classList.add(\"book-now\");\n  homeContainer.appendChild(btnBookNow);\n\n  container.appendChild(homeContainer);\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (createRestaurantHomePage);\n\n\n//# sourceURL=webpack://restaurant-page/./src/restaurant.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;