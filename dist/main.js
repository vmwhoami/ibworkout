/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss ***!
  \***********************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _assets_FuturaPTMedium_otf__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/FuturaPTMedium.otf */ \"./src/assets/FuturaPTMedium.otf\");\n/* harmony import */ var _assets_FuturaPTLight_otf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/FuturaPTLight.otf */ \"./src/assets/FuturaPTLight.otf\");\n/* harmony import */ var _assets_FuturaPTBold_otf__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/FuturaPTBold.otf */ \"./src/assets/FuturaPTBold.otf\");\n/* harmony import */ var _assets_images_mainbg_jpeg__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/images/mainbg.jpeg */ \"./src/assets/images/mainbg.jpeg\");\n/* harmony import */ var _assets_images_pointsky_jpeg__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/images/pointsky.jpeg */ \"./src/assets/images/pointsky.jpeg\");\n// Imports\n\n\n\n\n\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_FuturaPTMedium_otf__WEBPACK_IMPORTED_MODULE_2__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_FuturaPTLight_otf__WEBPACK_IMPORTED_MODULE_3__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_2___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_FuturaPTBold_otf__WEBPACK_IMPORTED_MODULE_4__.default);\nvar ___CSS_LOADER_URL_REPLACEMENT_3___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_mainbg_jpeg__WEBPACK_IMPORTED_MODULE_5__);\nvar ___CSS_LOADER_URL_REPLACEMENT_4___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_1___default()(_assets_images_pointsky_jpeg__WEBPACK_IMPORTED_MODULE_6__);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"@font-face {\\n  font-family: futura;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \") format(\\\"opentype\\\");\\n}\\n@font-face {\\n  font-family: futuralt;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_1___ + \") format(\\\"opentype\\\");\\n}\\n@font-face {\\n  font-family: futurabd;\\n  src: url(\" + ___CSS_LOADER_URL_REPLACEMENT_2___ + \") format(\\\"opentype\\\");\\n}\\n.white-color {\\n  color: white;\\n}\\n\\n.hcenter {\\n  margin: 6rem 0;\\n  font-size: 3.5rem;\\n  text-align: center;\\n  font-weight: 600;\\n}\\n\\n.nav {\\n  position: fixed;\\n  top: 0;\\n  left: 0;\\n  width: 100%;\\n  height: 7rem;\\n  background-color: #F2F2F2;\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n  padding: 0 5rem 0 5rem;\\n  z-index: 2;\\n  box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 3px;\\n  transition: background-color 1s;\\n}\\n.nav__logo {\\n  color: blue;\\n  font-size: 3rem;\\n  font-family: \\\"Lucida Sans\\\", \\\"Lucida Sans Regular\\\", \\\"Lucida Grande\\\", \\\"Lucida Sans Unicode\\\", Geneva, Verdana, sans-serif;\\n}\\n.nav__list {\\n  display: flex;\\n  list-style: none;\\n  font-size: 2rem;\\n  font-family: futura, Arial, sans-serif;\\n  height: 100%;\\n}\\n.nav__lsitem {\\n  display: inline-flex;\\n  height: 100%;\\n  justify-content: center;\\n  text-decoration: none;\\n  color: black;\\n  margin: 0 1rem 0 1rem;\\n  cursor: pointer;\\n  position: relative;\\n  height: 100%;\\n  align-items: center;\\n}\\n.nav__lsitem::after {\\n  content: \\\"\\\";\\n  position: absolute;\\n  left: 0;\\n  bottom: 50%;\\n  opacity: 0;\\n  width: 100%;\\n  height: 100%;\\n  border-bottom: 1px solid #b53b45;\\n  -webkit-box-shadow: inset 0px -1px 0px 0px #b53b45;\\n  -moz-box-shadow: inset 0px -1px 0px 0px #b53b45;\\n  box-shadow: inset 0px -1px 0px 0px #b53b45;\\n  -webkit-transition: all 0.3s ease;\\n  transition: all 0.3s ease;\\n}\\n.nav__lsitem:hover {\\n  color: #b53b45;\\n}\\n.nav__lsitem:hover::after {\\n  bottom: 30%;\\n  opacity: 100%;\\n}\\n.nav__roundbtn {\\n  margin-right: 1rem;\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n  width: 3.5rem;\\n  height: 3.5rem;\\n  background-color: #000000;\\n  border-radius: 50%;\\n}\\n.nav__svg {\\n  fill: white;\\n  width: 2rem;\\n  height: 2rem;\\n}\\n\\n.faded {\\n  background-color: rgba(255, 255, 255, 0.4);\\n}\\n\\n.head {\\n  width: 100%;\\n  height: 100vh;\\n  overflow: hidden;\\n}\\n.head__bg {\\n  width: 100%;\\n  height: 100vh;\\n  background: linear-gradient(to right, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_3___ + \");\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  position: relative;\\n  z-index: 0;\\n  filter: blur(1px);\\n}\\n.head__container {\\n  position: absolute;\\n  top: 50%;\\n  left: 50%;\\n  transform: translate(-50%, -50%);\\n  color: white;\\n  max-width: 110rem;\\n  text-align: center;\\n}\\n.head__h1 {\\n  font-family: futurabd, Arial, sans-serif, Arial, sans-serif;\\n  font-size: 6rem;\\n}\\n.head__btn {\\n  display: inline-block;\\n  margin-top: 2rem;\\n  padding: 1.5rem 4rem;\\n  background-color: #DB0000;\\n  color: white;\\n  text-decoration: none;\\n  font-size: 2rem;\\n  border-radius: 2rem;\\n}\\n.head p {\\n  font-size: 2.5rem;\\n  font-family: futura, Arial, sans-serif, Arial, sans-serif;\\n}\\n\\n.how {\\n  height: 100vh;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.how__h1 {\\n  padding-top: 2rem;\\n  font-size: 2rem;\\n}\\n.how__h1 h1 {\\n  font-family: Arial, sans-serif;\\n}\\n.how__h1 p {\\n  text-align: center;\\n}\\n.how__description {\\n  color: #7F7F8D;\\n}\\n.how__vidcont {\\n  width: 80vw;\\n  height: 70vh;\\n  margin-top: 3rem;\\n}\\n.how__vid {\\n  width: 100%;\\n  height: 100%;\\n}\\n.how__video {\\n  width: 100%;\\n  height: 100%;\\n}\\n\\n.why {\\n  background-image: linear-gradient(to right, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.6)), url(\" + ___CSS_LOADER_URL_REPLACEMENT_4___ + \");\\n  background-position: center;\\n  background-size: cover;\\n  background-repeat: no-repeat;\\n  padding: 10rem 2rem;\\n}\\n.why__heading {\\n  text-align: center;\\n  font-size: 6rem;\\n  padding: 2rem;\\n}\\n.why__p {\\n  text-align: center;\\n  font-size: 2.2rem;\\n}\\n.why__container {\\n  margin-top: 5rem;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  text-align: center;\\n}\\n.why__section {\\n  flex: 0 1 40rem;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n.why__img {\\n  width: 10rem;\\n}\\n\\n.steps {\\n  max-width: 120rem;\\n  margin: 0 auto;\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: center;\\n  align-items: center;\\n}\\n.steps__left {\\n  flex: 1 1 15vw;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n}\\n.steps__wrapper {\\n  margin: 4rem 1rem;\\n  display: flex;\\n}\\n.steps__wrapper h4 {\\n  margin-bottom: 2rem;\\n}\\n.steps__svgwrap {\\n  margin: 2rem 1rem;\\n}\\n.steps__svg {\\n  width: 7rem;\\n  height: 7rem;\\n}\\n.steps__imgcon {\\n  flex: 1 0 20vw;\\n}\\n.steps__img {\\n  width: 100%;\\n  height: 100%;\\n}\\n.steps__right {\\n  flex: 1 1 15vw;\\n  display: flex;\\n  flex-direction: column;\\n  padding: 1rem;\\n}\\n\\n.messanging {\\n  position: fixed;\\n  display: flex;\\n  justify-content: center;\\n  align-items: center;\\n  bottom: 10%;\\n  right: 6%;\\n  width: 7rem;\\n  height: 7rem;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  background-color: white;\\n  z-index: 200;\\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);\\n  opacity: 100%;\\n}\\n.messanging__checkbox:checked + .messanging__label {\\n  display: none;\\n}\\n.messanging__cover {\\n  position: absolute;\\n  width: 7rem;\\n  height: 7rem;\\n  border-radius: 50%;\\n  cursor: pointer;\\n  background-color: #17ac03;\\n  z-index: 300;\\n}\\n.messanging__phone {\\n  position: absolute;\\n}\\n.messanging__messenger {\\n  position: absolute;\\n}\\n.messanging__whatsapp {\\n  position: absolute;\\n}\\n.messanging__svg {\\n  width: 5em;\\n  height: 5rem;\\n}\\n\\n.shaper {\\n  display: inline-flex;\\n  justify-content: center;\\n  align-items: center;\\n  background-color: white;\\n  width: 7rem;\\n  height: 7rem;\\n  border-radius: 50%;\\n  box-shadow: 0px 0px 20px 0px rgba(0, 0, 0, 0.3);\\n  cursor: pointer;\\n}\\n\\n.fillgreen {\\n  fill: #00d824;\\n}\\n\\n.hide {\\n  opacity: 0;\\n  transform: scaleY(0);\\n  transition: opacity 0.3s;\\n}\\n\\n.phone_tr {\\n  transform: translateY(-9.5em);\\n  transition: transform 0.2s;\\n}\\n\\n.messanger_tr {\\n  transform: translateY(-6rem);\\n  transition: transform 0.2s;\\n}\\n\\n.whatsapp_tr {\\n  transform: translateY(-28rem);\\n  transition: transform 0.2s;\\n}\\n\\n* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nhtml {\\n  font-size: 62.5%;\\n  /* Now 10px = 1rem! */\\n  scroll-behavior: smooth;\\n}\\n\\nbody {\\n  font-size: 16px;\\n  /* px fallback */\\n  font-size: 1.6rem;\\n  /* default font-size for document */\\n  line-height: 1.5;\\n  /* a nice line-height */\\n  background-color: black;\\n  font-family: Arial, sans-serif;\\n}\\n\\n.container {\\n  display: flex;\\n  flex-direction: column;\\n  background-color: white;\\n}\\n\\n.text-center {\\n  font-family: futura, Arial, sans-serif, Arial, sans-serif;\\n  text-align: center;\\n}\\n\\n.center {\\n  align-self: center;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://ibworkout/./src/style/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery, dedupe) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var i = 0; i < this.length; i++) {\n        // eslint-disable-next-line prefer-destructuring\n        var id = this[i][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _i = 0; _i < modules.length; _i++) {\n      var item = [].concat(modules[_i]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        // eslint-disable-next-line no-continue\n        continue;\n      }\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://ibworkout/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    // eslint-disable-next-line no-param-reassign\n    options = {};\n  } // eslint-disable-next-line no-underscore-dangle, no-param-reassign\n\n\n  url = url && url.__esModule ? url.default : url;\n\n  if (typeof url !== 'string') {\n    return url;\n  } // If url is already wrapped in quotes, remove them\n\n\n  if (/^['\"].*['\"]$/.test(url)) {\n    // eslint-disable-next-line no-param-reassign\n    url = url.slice(1, -1);\n  }\n\n  if (options.hash) {\n    // eslint-disable-next-line no-param-reassign\n    url += options.hash;\n  } // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n\n\n  if (/[\"'() \\t\\n]/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, '\\\\n'), \"\\\"\");\n  }\n\n  return url;\n};\n\n//# sourceURL=webpack://ibworkout/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./src/assets/FuturaPTBold.otf":
/*!*************************************!*\
  !*** ./src/assets/FuturaPTBold.otf ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"b22b8109a56a2445c366cb3b6d6740a9.otf\");\n\n//# sourceURL=webpack://ibworkout/./src/assets/FuturaPTBold.otf?");

/***/ }),

/***/ "./src/assets/FuturaPTLight.otf":
/*!**************************************!*\
  !*** ./src/assets/FuturaPTLight.otf ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"725c77b4e125ed776783530c13bd9dd6.otf\");\n\n//# sourceURL=webpack://ibworkout/./src/assets/FuturaPTLight.otf?");

/***/ }),

/***/ "./src/assets/FuturaPTMedium.otf":
/*!***************************************!*\
  !*** ./src/assets/FuturaPTMedium.otf ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + \"7af6976ce738bec1704e11c6c22da82c.otf\");\n\n//# sourceURL=webpack://ibworkout/./src/assets/FuturaPTMedium.otf?");

/***/ }),

/***/ "./src/style/style.scss":
/*!******************************!*\
  !*** ./src/style/style.scss ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => __WEBPACK_DEFAULT_EXPORT__\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!../../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style/style.scss\");\n\n            \n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default, options);\n\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_1__.default.locals || {});\n\n//# sourceURL=webpack://ibworkout/./src/style/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDom.length; i++) {\n    if (stylesInDom[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var index = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3]\n    };\n\n    if (index !== -1) {\n      stylesInDom[index].references++;\n      stylesInDom[index].updater(obj);\n    } else {\n      stylesInDom.push({\n        identifier: identifier,\n        updater: addStyle(obj, options),\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : 0;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.media ? \"@media \".concat(obj.media, \" {\").concat(obj.css, \"}\") : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && typeof btoa !== 'undefined') {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDom[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDom[_index].references === 0) {\n        stylesInDom[_index].updater();\n\n        stylesInDom.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://ibworkout/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/assets/images/mainbg.jpeg":
/*!***************************************!*\
  !*** ./src/assets/images/mainbg.jpeg ***!
  \***************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"9e5b3cdb475c09d2ccea.jpeg\";\n\n//# sourceURL=webpack://ibworkout/./src/assets/images/mainbg.jpeg?");

/***/ }),

/***/ "./src/assets/images/pointsky.jpeg":
/*!*****************************************!*\
  !*** ./src/assets/images/pointsky.jpeg ***!
  \*****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"2362b926301f717f3ed7.jpeg\";\n\n//# sourceURL=webpack://ibworkout/./src/assets/images/pointsky.jpeg?");

/***/ }),

/***/ "./src/components/navscroll.js":
/*!*************************************!*\
  !*** ./src/components/navscroll.js ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => /* binding */ scrollfade\n/* harmony export */ });\nfunction scrollfade() {\n\n  function debounce(func, wait = 10, immediate = true) {\n    let timeout;\n    return () => {\n      const contest = this; const\n        args = arguments;\n      const later = () => {\n        timeout = null;\n        if (!immediate) {\n          func.apply(contest, args);\n        }\n      };\n      const callnow = immediate && !timeout;\n      clearTimeout(timeout);\n      timeout = setTimeout(later, wait);\n      if (callnow) func.apply(contest, args);\n    };\n  }\n\n\n\n  const navbarFade = () => {\n    const nav = document.querySelector('.nav');\n    const scroll = window.pageYOffset;\n    if (scroll > 20) {\n      nav.classList.add('faded');\n    } else {\n      nav.classList.remove('faded');\n    }\n  };\n\n\n  window.addEventListener('scroll', debounce(navbarFade));\n}\n\n\n//# sourceURL=webpack://ibworkout/./src/components/navscroll.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style/style.scss */ \"./src/style/style.scss\");\n/* harmony import */ var _components_navscroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/navscroll */ \"./src/components/navscroll.js\");\n\n\n(0,_components_navscroll__WEBPACK_IMPORTED_MODULE_1__.default)()\n\n\nfunction messagingBtns() {\n  const container = document.querySelector('.messanging');\n  let cover = document.querySelector('.messanging__cover');\n  let phone = document.querySelector('.messanging__phone');\n  let messanger = document.querySelector('.messanging__messenger');\n  let whatsapp = document.querySelector('.messanging__whatsapp')\n  container.addEventListener('click', () => {\n    // cover.classList.add('hide');\n    // phone.classList.add('phone_tr')\n    // messanger.classList.add('messanger_tr')\n    // whatsapp.classList.add('whatsapp_tr')\n    // console.log(cover);\n\n  });\n\n\n}\n\nmessagingBtns()\n\n\n\n//# sourceURL=webpack://ibworkout/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;