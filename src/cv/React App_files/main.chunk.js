(window["webpackJsonpportfolio"] = window["webpackJsonpportfolio"] || []).push([["main"],{

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/about.css":
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/about.css ***!
  \******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, "#about{\n  display: flow-root;\n}\n.aboutbox article {\n  border-bottom: 1px solid gold;\n  text-align: center;\n  padding-bottom: 50px; \n}\n.aboutbox>article:not(.bio){\n  padding-top: 50px;\n}\n.bio .date{\nfloat:left;\n}\n.skills .date{\nfloat:right;\n}\n.skills>p span{\n  color:gold;\n}\n.date span {\n  font-family: \"Lobster\", cursive;\n  font-size: 3em;\n  line-height: 90px;\n  color: white;\n}\n.date {\n  border: 4px gold double;\n  shape-outside: circle(95px);\n  width: 90px;\n  height: 90px;\n  border-radius: 90px;\n  text-align:center;\n  margin: 50px;\n  /* background-color: gold; */\n}\n\n", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/contact.css":
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/contact.css ***!
  \********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".contact {\n  display: flex;\n  flex-wrap:nowrap;\n}\nform, .collab {\n  flex-basis: 50%;\n}\ninput,\ntextarea,button {\n  width: 40vw;\n  border: 2px solid transparent;\n  margin: 5px;\n  padding: 5px;\n  background-color: transparent;\n  color: gold;\n  font-size: 1em;\n}\ntextarea {\n  height: 20vw;\n}\ninput::placeholder,\ntextarea::placeholder {\n  color: white;\n  text-align: left;\n}\n.contact ul li{\n  border-bottom: 1px solid gold;\n}\nbutton[type=\"submit\"]{\n  text-align:left;\n}\nbutton[type=\"submit\"] i{\n  font-size:2em;\n  color:white;\n}\nbutton[type=\"submit\"] i:hover {\n  color: gold;\n  transition: color 1s;\n}\n.collab{\n  align-self:center;\n  font-size:3em;\n  text-align:center;\n  font-family: 'Cabin Sketch', cursive;\n}\n#next-line-intent{\n  text-indent: 2em; \n  font-size:1em;\n}\n#colorSign{\n  color:navy; \n  font-size:1em;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/home.css":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/home.css ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/rose-egg.svg */ "./src/images/rose-egg.svg"));

// Module
exports.push([module.i, ".home{\n  /* overflow: hidden; */\n  width: 100%; \n  font-family: 'Cabin Sketch', cursive;\n}\n.full {\n  height: 100vh;\n  display: grid;\n  grid-template-rows: repeat (5, 1fr);\n  grid-template-columns: auto-fit 1fr 1fr 1fr 600px;\n  grid-gap: 15px;\n  padding: 0 0 20px 20px;\n\n}\n.full > a,\n.iconsnav:not(.welcome) {\n  /* border-left: 4px black solid;\n  border-top: 4px black solid; */\n  align-self:center;\n  text-align: center;\n  font-size:50px;\n  padding:20px;\n}\n.full > a:hover{\n  color: navy;\n  transition: color 2s;\n}\n.aboutme {\n  grid-area: 1 / 1 / 4 / 1;\n}\n.work {\n  grid-area: 2 / 2 / 4 / 4;\n}\n.welcome {\n  grid-area: 1 / 4 / 5 / 6;\n  background-image: url(" + ___CSS_LOADER_URL___0___ + ");\n  background-size: contain;\n  background-position: right;\n  /* background-attachment: fixed; */\n  background-repeat: no-repeat;\n  overflow: visible;\n  display: grid;\n  place-items: center;\n}\n.welcome p {\n  font-family: 'Cabin Sketch', cursive;\n  color:navy;\n  font-size:4em;\n  text-align: right;\n  border-right: 5px dotted navy;\n  padding-right:20px;\n  margin:20px;\n}\n/* .welcome p:hover{\n  color: whitesmoke;\n  transition: color 2s;\n} */\n.logo{\n  display: none;\n}\n.iconsnav {\n  grid-area: 4 / 1 / 4 / 4;\n}\n.iconsnav a{\n  padding: 0 10px 0 10px;\n}\n.iconsnav img{\n  height: 3em;\n}\n.iconsnav a:last-child{\n  font-size: 1.5em;\n  padding:0;\n}\n.iconsnav a:last-child:hover{\n  color: #000080;\n}\n.iconsnav img:hover {\n  filter: invert(15%) sepia(91%) saturate(6288%) hue-rotate(215deg) brightness(56%) contrast(112%);\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/navTop.css":
/*!*******************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/navTop.css ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".navTop {\r\n    padding: 50px;\r\n    display: flex;\r\n    /* position: relative; */\r\n    background-color: transparent;\r\n    justify-content: flex-end;\r\n    align-items: center;\r\n    text-align: center;\r\n  }\r\n  .back-arrow{\r\n    position:relative;\r\n    color:gold;\r\n    font-size:3em;\r\n    line-height:1em;\r\n  }\r\n  /* .back-arrow::before{\r\n    position: absolute;\r\n    content:\"<\";\r\n    color: gold;\r\n    font-family: 'Cabin Sketch', cursive;\r\n    font-size: 6em;\r\n    right: 40%;\r\n    top: 0;\r\n  } */\r\n  .navTop a {\r\n    padding: 0 3% 0 3%;\r\n  }\r\n  .navTop img{\r\n    height:3em;\r\n  }\r\n  .back-arrow:hover:before{\r\n    color: navy;\r\n  }\r\n  .navTop img:hover {\r\n    filter: invert(15%) sepia(91%) saturate(6288%) hue-rotate(215deg) brightness(56%) contrast(112%);\r\n  }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/projects.css":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/projects.css ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Module
exports.push([module.i, ".projectbox{\n  position:relative;\n  background: rgba(black, .7);\n  text-align:center;\n  margin-top:70px;\n}\n.projectbox img {\n  margin:0 auto;\n  display: block;\n  max-width: 100%;\n  margin-bottom: 30px;\n  transition:opacity ease-out 250ms;\n  opacity:1;\n}\n.projectbox:hover img{\n  opacity:0.1;\n}\n.projectbox::before{\n  content:\"\";\n  position:absolute;\n  top:1.25em;\n  bottom:1.25em;\n  left:1.25em;\n  right:1.25em;\n  transform:scale(0,1);\n  transition: transform ease-out 250ms;\n  border-bottom:1px solid white;\n}\n.projectbox::after{\n  content:\"\";\n  position:absolute;\n  top:1.25em;\n  bottom:1.25em;\n  left:1.25em;\n  right:1.25em;\n  transform:scale(1,0);\n  transition: transform ease-out 250ms;\n  border-left: 1px solid white;\n}\n.projectbox:hover::before{\n  transform: scale(1.05,1);\n}\n.projectbox:hover::after{\n  transform: scale(1,1.05);\n  }\n  .projectbox ul{\n  position:absolute;\n  top:50%;\n  left:50%;\n  transform: translate(-50%,-50%);\n  opacity:0;\n  z-index: 1;\n  transition: opacity ease-out 250ms;\n}\n.projectbox:hover ul{\n  opacity:1;\n}\nh2 {\n  font-size: 2em;\n  padding-bottom: 15px;\n  font-family: \"Lobster\", cursive;\n  color: gold;\n  white-space: wrap;\n}\n.projectbox li:last-child {\n  display: flex;\n  width: 50vw;\n  justify-content: center;\n  align-content: center;\n  padding: 50px;\n}\n.button {\n  display:flex;\n  justify-content: center;\n  align-items: center;\n  border: 1px solid white;\n  border-radius: 50%;\n  width: 80px;\n  height: 80px; \n  margin: 10px;\n}\n.button i{\n  font-size: 1.5em;\n}\nul span {\n  display: none;\n}", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/responsive.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/css/responsive.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var urlEscape = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ../images/rose-egg.svg */ "./src/images/rose-egg.svg"));

// Module
exports.push([module.i, "@media screen and (max-width: 768px) {\r\n.full{\r\n  height: auto;\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin:0;\r\n    padding:0;\r\n    padding-top:30%;\r\n    background-image: url(" + ___CSS_LOADER_URL___0___ + ");\r\n    background-position: top;\r\n    background-size: cover;\r\n  }\r\n  .full > a{\r\n    color:navy;\r\n    font-size:4em;\r\n    width: 100%;\r\n    margin:0;\r\n  }\r\n  .welcome{\r\n    display:none;\r\n\r\n}\r\n.logo{\r\n    background-color:deeppink;\r\n}\r\n\r\n.iconsnav{\r\n  width:95vw;\r\n}\r\n.iconsnav, .navTop{\r\n   position:fixed;\r\n   width: 100%;\r\n   top:0;\r\n   left:0;\r\n    margin:0;\r\n    z-index:1;\r\n}\r\n.iconsnav img{\r\n    width: 15%;\r\n    height: 15%;\r\n  filter: invert(12%) sepia(97%) saturate(7491%) hue-rotate(217deg) brightness(57%) contrast(129%);\r\n\r\n  }\r\n.iconsnav a:last-child{\r\n  font-size: 17vw;\r\n  color:#1f489f;\r\n  }\r\n.navTop{\r\n  background-color: tan;\r\n  width:100%;\r\n  padding: 5px;\r\n  justify-content: space-evenly;\r\n}\r\n.navTop a{\r\n  float:right;\r\n  color:#000080;\r\n}\r\n.navTop img{\r\n  font-size: 15px;\r\n  margin:0;\r\n  filter:none;\r\n  filter: invert(12%) sepia(97%) saturate(7491%) hue-rotate(217deg) brightness(57%) contrast(129%);\r\n\r\n}\r\n.back-arrow{\r\n  color:navy;\r\n\r\n}\r\n.aboutbox-article{\r\n  display: block;\r\n  margin:0;\r\n}\r\n.aboutbox p{\r\n  padding: 10px;\r\n  margin: 0;\r\n}\r\n.date{\r\n  display: none;\r\n}\r\n.projectbox:hover img{\r\n  opacity:inherit;\r\n}\r\n.projectbox::before, .projectbox::after{\r\n  display: none;\r\n}\r\n.projectbox:not(:first-of-type){\r\n  margin-top:5px;\r\n}\r\n.projectbox ul{\r\n  position: static;\r\n  opacity:1;\r\n  transform: none;\r\n  }\r\n  .projectbox li:last-child {\r\n    width: auto;\r\n    padding:0;\r\n\r\n  }\r\n  .button i{\r\n    font-size: 3em;\r\n  }\r\n  .collab{\r\n    display:none;\r\n  }\r\n  .contact{\r\n    display:none;\r\n  }\r\n  }", ""]);



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css":
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/index.css ***!
  \**************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Open+Sans:300|Cabin+Sketch|Fredericka+the+Great|Lobster|Quicksand&display=swap);", ""]);
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/home.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/home.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/about.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/about.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/projects.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/projects.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/contact.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/contact.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/navTop.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/navTop.css"), "");
exports.i(__webpack_require__(/*! -!../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!../src/css/responsive.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/css/responsive.css"), "");
var urlEscape = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/url-escape.js */ "./node_modules/css-loader/dist/runtime/url-escape.js");
var ___CSS_LOADER_URL___0___ = urlEscape(__webpack_require__(/*! ./images/rose-blue.svg */ "./src/images/rose-blue.svg"));

// Module
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  list-style: none;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.004);\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: gold;\n  box-sizing: border-box;\n  /* text-transform: uppercase; */\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'Open Sans', sans-serif;\nscroll-behavior: smooth;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nheight: auto;\nwidth: 100%;\nbackground-color:mediumspringgreen;\nmargin: 0 auto;\nfont-family: 'Fredericka the Great', cursive;\n}\nbody{\nbackground-image: url(" + ___CSS_LOADER_URL___0___ + ");\nbackground-size:cover;\nbackground-attachment: fixed;\nbackground-repeat: repeat;\n}\n/* border page */\n#top, #bottom, #left, #right {\n  background: whitesmoke;\n  position: fixed;\n  z-index:1;\n}\n#left, #right {\n  top: 0; bottom: 0;\n  width: 5px;\n}\n#left { left: 0; }\n#right { right: 0; }\n  \n#top, #bottom {\n  left: 0; right: 0;\n  height: 5px;\n}\n#top { top: 0; }\n#bottom { bottom: 0; }\n/* border page end*/\n\nsection:not(.home) {\n  /* position:relative; */\n  /* width: inherit;  */\n  height: fit-content;\n  margin: 0 50px 50px 50px;\n  padding: 70px 50px 50px 50px;\n  background-color: rgba(0, 0, 0, 0.4);\n   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);\n  }\n  .content{\n    width: 100%;\n    margin-top:70px;\n  }\n  h1 {\n    font-size: 3em;\n    text-align:center;\n    font-weight:100;\n    font-family: 'Fredericka the Great', cursive;\n}\nh1::before, h1::after{\n  content:\" \";\n  display: block;\n  border-bottom: 5px dotted navy; \n  width:2em;\n  margin:auto;\n  padding: 5px;\n}\narticle,p{\n  color:white;\n \n}\nh1, h2{\n  color: white;\n}\nh3,\n{\n  color:#123C69;\n}\n/* animation */\n\n.trademark{\n  font-family: 'Cabin Sketch', cursive;\n  z-index:1;\n}\n\n.puff-in-center {\n  animation: puff-in-center 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;\n}\n/* keyframes */\n@keyframes puff-in-center {\n  0% {\n    transform: scale(2);\n    filter: blur(4px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n\n@media screen and (max-width: 768px) {\n  html{\n    background-color:tan;\n  }\n  body{\n    background-size:contain;\n  }\n  #top, #bottom, #left, #right{\n    display: none;\n  }\n  section:not(.home){\n  margin:0 auto;\n  padding:0;\n  padding-bottom:50px;\n  background-color:transparent;\n  padding-top:15vh;\n}\n.home{\n  overflow:auto;\n  height: 100vh;\n}\nh1{\n  font-size: 3em;  \n  padding:0;\n}\narticle,p{\n  color: navy;\n}\n.trademark{\n  display: none;\n}\n\n  }", ""]);



/***/ }),

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Home__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/Home */ "./src/components/Home.js");
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/App.js";



class App extends react__WEBPACK_IMPORTED_MODULE_0___default.a.Component {
  render() {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 8
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      className: "App",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 9
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("header", {
      className: "App-header",
      __source: {
        fileName: _jsxFileName,
        lineNumber: 10
      },
      __self: this
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Home__WEBPACK_IMPORTED_MODULE_1__["default"], {
      __source: {
        fileName: _jsxFileName,
        lineNumber: 11
      },
      __self: this
    }))));
  }

}

/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/components/About.js":
/*!*********************************!*\
  !*** ./src/components/About.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTop */ "./src/components/NavTop.js");
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/About.js";



const About = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavTop__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "about puff-in-center",
  id: "about",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, "About me..."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content aboutbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
  className: "bio",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, "Bio")), "I gained my first experience with HTML/CSS by creating a website for a political project called \"Alltagsalternativen\" at my studies for Kunst- und Bildgeschichte in 2011. There I discovered my passion for building websites and I wanted to know more about it. I started a full year course in web development at DCI Berlin to dive deeper into the possibilities for creating web applications. At the same time Iam extending my knowledge by attending online courses and creating small projects. Always improving my skills, Iam looking forward to participate in interesting projects and challenges."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
  className: "skills",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "date",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 25
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, "Skills")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}, "LANGUAGES/ FRAMEWORKS/ LIBRARIES:"), " HTML | CSS | SASS | BOOTSTRAP | JAVASCRIPT | JQUERY | REACT | REDUX | MONGO DB | MONGOOSE | LOWDB | NODE.JS | EXPRESS"), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 28
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, "TOOLS:"), " GIT | WEBPACK | POSTMAN | COMPASS | TERMINAL | VS CODE | SUBLIME TEXT")))));

/* harmony default export */ __webpack_exports__["default"] = (About);

/***/ }),

/***/ "./src/components/Contact.js":
/*!***********************************!*\
  !*** ./src/components/Contact.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTop */ "./src/components/NavTop.js");
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Contact.js";



const Contact = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 5
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavTop__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 6
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "contact puff-in-center",
  id: "contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
  action: "https://formspree.io/katrinsalac@gmail.com",
  method: "POST",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "text",
  name: "name",
  placeholder: "name",
  size: "15",
  maxLength: "30",
  required: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "text",
  name: "company",
  placeholder: "company",
  size: "15",
  maxLength: "30",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 32
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
  type: "email",
  name: "email",
  placeholder: "e-mail",
  size: "15",
  maxLength: "30",
  required: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 33
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
  name: "message",
  cols: "20",
  rows: "10",
  placeholder: "message",
  required: true,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
  type: "submit",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "far fa-handshake",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 51
  },
  __self: undefined
})))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  className: "collab",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "Collaborate", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  id: "next-line-intent",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "with me"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  id: "colorSign",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 54
  },
  __self: undefined
}, "!"))));

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ }),

/***/ "./src/components/Home.js":
/*!********************************!*\
  !*** ./src/components/Home.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/logo.png */ "./src/images/logo.png");
/* harmony import */ var _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_images_logo_png__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _Iconbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Iconbar */ "./src/components/Iconbar.js");
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Home.js";





const Nav = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "home puff-in-center",
  id: "home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 7
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
  className: "full",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 8
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/aboutme",
  className: "aboutme",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, "About"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/work",
  className: "work",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "mailto:katrinsalac@gmail.com",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, "Email"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_2__["Link"], {
  to: "/contact",
  className: "contact",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, "Contact"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "welcome",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, "Hi, my name is Kasa. I`m a web developer in Berlin."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_logo_png__WEBPACK_IMPORTED_MODULE_1___default.a,
  alt: "logo",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Iconbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
})));

/* harmony default export */ __webpack_exports__["default"] = (Nav);

/***/ }),

/***/ "./src/components/Iconbar.js":
/*!***********************************!*\
  !*** ./src/components/Iconbar.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _cv_CV_KatrinSalac_pdf__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cv/CV-KatrinSalac.pdf */ "./src/cv/CV-KatrinSalac.pdf");
/* harmony import */ var _cv_CV_KatrinSalac_pdf__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_cv_CV_KatrinSalac_pdf__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _images_codepen2_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/codepen2.png */ "./src/images/codepen2.png");
/* harmony import */ var _images_codepen2_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_codepen2_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/github.png */ "./src/images/github.png");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_github_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/linkedin.png */ "./src/images/linkedin.png");
/* harmony import */ var _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Iconbar.js";






const Iconbar = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "iconsnav",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://codepen.io/KasaBerlin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_codepen2_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "codepen",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://www.linkedin.com/in/katrin-salac",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "linkedin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: "https://github.com/KasaBerlin",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_github_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  href: _cv_CV_KatrinSalac_pdf__WEBPACK_IMPORTED_MODULE_1___default.a,
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "CV"));

/* harmony default export */ __webpack_exports__["default"] = (Iconbar);

/***/ }),

/***/ "./src/components/NavTop.js":
/*!**********************************!*\
  !*** ./src/components/NavTop.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _images_codepen_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/codepen.png */ "./src/images/codepen.png");
/* harmony import */ var _images_codepen_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_codepen_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/github.png */ "./src/images/github.png");
/* harmony import */ var _images_github_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_github_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/linkedin.png */ "./src/images/linkedin.png");
/* harmony import */ var _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_linkedin_png__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/NavTop.js";






const NavTop = () => {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    className: "navTop",
    id: "navTop",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Link"], {
    to: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "back-arrow",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    },
    __self: undefined
  }, "\u21DC")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://codepen.io/KasaBerlin",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_codepen_png__WEBPACK_IMPORTED_MODULE_2___default.a,
    alt: "codepen",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 17
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.linkedin.com/in/katrin-salac",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_linkedin_png__WEBPACK_IMPORTED_MODULE_4___default.a,
    alt: "linkedin",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: undefined
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://github.com/KasaBerlin",
    target: "blank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: _images_github_png__WEBPACK_IMPORTED_MODULE_3___default.a,
    alt: "github",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: undefined
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (NavTop);

/***/ }),

/***/ "./src/components/Projects.js":
/*!************************************!*\
  !*** ./src/components/Projects.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _NavTop__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./NavTop */ "./src/components/NavTop.js");
/* harmony import */ var _images_germany_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/germany.png */ "./src/images/germany.png");
/* harmony import */ var _images_germany_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_images_germany_png__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _images_alltag_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/alltag.png */ "./src/images/alltag.png");
/* harmony import */ var _images_alltag_png__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_images_alltag_png__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _images_weatherapp_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../images/weatherapp.png */ "./src/images/weatherapp.png");
/* harmony import */ var _images_weatherapp_png__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_images_weatherapp_png__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _images_blog_png__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../images/blog.png */ "./src/images/blog.png");
/* harmony import */ var _images_blog_png__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_images_blog_png__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _images_guess_png__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../images/guess.png */ "./src/images/guess.png");
/* harmony import */ var _images_guess_png__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_images_guess_png__WEBPACK_IMPORTED_MODULE_6__);
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Projects.js";








const Projects = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_NavTop__WEBPACK_IMPORTED_MODULE_1__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
  className: "projects puff-in-center",
  id: "projects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
  className: "hprojects",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
}, "Projects"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "content projectbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 16
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_alltag_png__WEBPACK_IMPORTED_MODULE_3___default.a,
  alt: "homepage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 18
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 19
  },
  __self: undefined
}, "Alltagsalternativen"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 20
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 21
  },
  __self: undefined
}, "Technology")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 23
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 24
  },
  __self: undefined
}, "CSS, JavaScript, jQuery, React")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 26
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 27
  },
  __self: undefined
}, "Goal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 29
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 30
  },
  __self: undefined
}, "This is a science project that started in 2012 as part of the seminar \"Feminismus schreiben lernen\" at Humboldt University Berlin.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 35
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: " https://kasaberlin.github.io/Alltagsalternativen/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 36
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 42
  },
  __self: undefined
}, "Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 43
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 45
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://de-de.facebook.com/Alltagsalternativen/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 46
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 52
  },
  __self: undefined
}, " Facebook "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-facebook",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 53
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 55
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://github.com/KasaBerlin/Alltagsalternativen",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 56
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 62
  },
  __self: undefined
}, "Git Hub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 63
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "projectbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 68
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_germany_png__WEBPACK_IMPORTED_MODULE_2___default.a,
  alt: "homepage",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 69
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 74
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 75
  },
  __self: undefined
}, "Germany"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 76
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 77
  },
  __self: undefined
}, "Technology")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 79
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 80
  },
  __self: undefined
}, "CSS, Bootstrap")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 82
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 83
  },
  __self: undefined
}, "Goal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 85
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 86
  },
  __self: undefined
}, "A tourist page about Germany.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 88
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://kasaberlin.github.io/Bootstrap-LP/.",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 89
  },
  __self: undefined
}, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 96
  },
  __self: undefined
}, "Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 97
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 99
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://github.com/KasaBerlin/Bootstrap-LP",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 100
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 106
  },
  __self: undefined
}, "Git Hub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 107
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "projectbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 112
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_weatherapp_png__WEBPACK_IMPORTED_MODULE_4___default.a,
  alt: "homepage",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 113
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 114
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 115
  },
  __self: undefined
}, "Weather App"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 116
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 117
  },
  __self: undefined
}, "Technology")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 119
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 120
  },
  __self: undefined
}, "CSS, JavaScript")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 122
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 123
  },
  __self: undefined
}, "Goal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 125
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 126
  },
  __self: undefined
}, "A simple weather app.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 128
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://kasaberlin.github.io/weatherApp/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 129
  },
  __self: undefined
}, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 136
  },
  __self: undefined
}, "Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 137
  },
  __self: undefined
})), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 139
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://github.com/KasaBerlin/weatherApp.git",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 140
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 146
  },
  __self: undefined
}, "Git Hub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 147
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "projectbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 152
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_blog_png__WEBPACK_IMPORTED_MODULE_5___default.a,
  alt: "homepage",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 153
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 159
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 160
  },
  __self: undefined
}, "Blogsite"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 161
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 162
  },
  __self: undefined
}, "Technology")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 164
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 165
  },
  __self: undefined
}, "CSS, Javascript, Local Storage, React")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 167
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 168
  },
  __self: undefined
}, "Goal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 170
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 171
  },
  __self: undefined
}, "Created this nice blogsite with React.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 173
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://kasaberlin.github.io/blogSite/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 174
  },
  __self: undefined
}, " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 181
  },
  __self: undefined
}, "Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 182
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 184
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://github.com/KasaBerlin/blogSite.git",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 185
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 191
  },
  __self: undefined
}, "Git Hub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 192
  },
  __self: undefined
}))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
  className: "projectbox",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 197
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
  src: _images_guess_png__WEBPACK_IMPORTED_MODULE_6___default.a,
  alt: "homepage",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 198
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 203
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 204
  },
  __self: undefined
}, "Game"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 205
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 206
  },
  __self: undefined
}, "Technology")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 208
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 209
  },
  __self: undefined
}, "CSS, Javascript")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 211
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 212
  },
  __self: undefined
}, "Goal")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 214
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 215
  },
  __self: undefined
}, "Guess a number.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 217
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://kasaberlin.github.io/guessaNumber/",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 218
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 224
  },
  __self: undefined
}, "Homepage"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fas fa-home",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 225
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 227
  },
  __self: undefined
}, "|"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
  className: "button",
  href: "https://github.com/KasaBerlin/guessaNumber.git",
  target: "_blank",
  rel: "noopener noreferrer",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 228
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 234
  },
  __self: undefined
}, "Git Hub"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
  className: "fab fa-github",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 235
  },
  __self: undefined
})))))));

/* harmony default export */ __webpack_exports__["default"] = (Projects);

/***/ }),

/***/ "./src/components/Router.js":
/*!**********************************!*\
  !*** ./src/components/Router.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router-dom/esm/react-router-dom.js");
/* harmony import */ var _App__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../App */ "./src/App.js");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./About */ "./src/components/About.js");
/* harmony import */ var _Projects__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Projects */ "./src/components/Projects.js");
/* harmony import */ var _Contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Contact */ "./src/components/Contact.js");
/* harmony import */ var _Trademark__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Trademark */ "./src/components/Trademark.js");
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Router.js";








const Router = () => react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["HashRouter"], {
  basename: "/",
  __source: {
    fileName: _jsxFileName,
    lineNumber: 10
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Switch"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 11
  },
  __self: undefined
}, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  exact: true,
  path: "/",
  component: _App__WEBPACK_IMPORTED_MODULE_2__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 12
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/aboutme",
  component: _About__WEBPACK_IMPORTED_MODULE_3__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 13
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/work",
  component: _Projects__WEBPACK_IMPORTED_MODULE_4__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 14
  },
  __self: undefined
}), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_router_dom__WEBPACK_IMPORTED_MODULE_1__["Route"], {
  path: "/contact",
  component: _Contact__WEBPACK_IMPORTED_MODULE_5__["default"],
  __source: {
    fileName: _jsxFileName,
    lineNumber: 15
  },
  __self: undefined
})), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Trademark__WEBPACK_IMPORTED_MODULE_6__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 17
  },
  __self: undefined
}));

/* harmony default export */ __webpack_exports__["default"] = (Router);

/***/ }),

/***/ "./src/components/Trademark.js":
/*!*************************************!*\
  !*** ./src/components/Trademark.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/components/Trademark.js";


const Trademark = () => {
  const footerStyle = {
    width: "100%",
    position: "absolute",
    top: 0
  };
  const pStyle = {
    margin: "1%"
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    style: footerStyle,
    className: "trademark",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    style: pStyle,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    },
    __self: undefined
  }, "KATRIN SALAC \xA9 2019"));
};

/* harmony default export */ __webpack_exports__["default"] = (Trademark);

/***/ }),

/***/ "./src/cv/CV-KatrinSalac.pdf":
/*!***********************************!*\
  !*** ./src/cv/CV-KatrinSalac.pdf ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/CV-KatrinSalac.202bb817.pdf";

/***/ }),

/***/ "./src/images/alltag.png":
/*!*******************************!*\
  !*** ./src/images/alltag.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/alltag.dcab3f49.png";

/***/ }),

/***/ "./src/images/blog.png":
/*!*****************************!*\
  !*** ./src/images/blog.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/blog.d4bc372c.png";

/***/ }),

/***/ "./src/images/codepen.png":
/*!********************************!*\
  !*** ./src/images/codepen.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/codepen.f526096f.png";

/***/ }),

/***/ "./src/images/codepen2.png":
/*!*********************************!*\
  !*** ./src/images/codepen2.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/images/germany.png":
/*!********************************!*\
  !*** ./src/images/germany.png ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/germany.ccd12288.png";

/***/ }),

/***/ "./src/images/github.png":
/*!*******************************!*\
  !*** ./src/images/github.png ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/github.9a51a5f7.png";

/***/ }),

/***/ "./src/images/guess.png":
/*!******************************!*\
  !*** ./src/images/guess.png ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/guess.c8e3b483.png";

/***/ }),

/***/ "./src/images/linkedin.png":
/*!*********************************!*\
  !*** ./src/images/linkedin.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/linkedin.58775d72.png";

/***/ }),

/***/ "./src/images/logo.png":
/*!*****************************!*\
  !*** ./src/images/logo.png ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/logo.2fda64fd.png";

/***/ }),

/***/ "./src/images/rose-blue.svg":
/*!**********************************!*\
  !*** ./src/images/rose-blue.svg ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rose-blue.611a4bcb.svg";

/***/ }),

/***/ "./src/images/rose-egg.svg":
/*!*********************************!*\
  !*** ./src/images/rose-egg.svg ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/rose-egg.d5dc20f0.svg";

/***/ }),

/***/ "./src/images/weatherapp.png":
/*!***********************************!*\
  !*** ./src/images/weatherapp.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/media/weatherapp.ff8dbd06.png";

/***/ }),

/***/ "./src/index.css":
/*!***********************!*\
  !*** ./src/index.css ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var content = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

if (typeof content === 'string') {
  content = [[module.i, content, '']];
}

var options = {}

options.insert = "head";
options.singleton = false;

var update = __webpack_require__(/*! ../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js")(content, options);

if (content.locals) {
  module.exports = content.locals;
}

if (true) {
  if (!content.locals) {
    module.hot.accept(
      /*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css",
      function () {
        var newContent = __webpack_require__(/*! !../node_modules/css-loader/dist/cjs.js??ref--6-oneOf-3-1!../node_modules/postcss-loader/src??postcss!./index.css */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/postcss-loader/src/index.js?!./src/index.css");

        if (typeof newContent === 'string') {
          newContent = [[module.i, newContent, '']];
        }
        
        update(newContent);
      }
    )
  }

  module.hot.dispose(function() { 
    update();
  });
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.css */ "./src/index.css");
/* harmony import */ var _index_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_index_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/Router */ "./src/components/Router.js");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @fortawesome/fontawesome-free/css/all.css */ "./node_modules/@fortawesome/fontawesome-free/css/all.css");
/* harmony import */ var _fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_fortawesome_fontawesome_free_css_all_css__WEBPACK_IMPORTED_MODULE_4__);
var _jsxFileName = "/home/dci-rec101/Desktop/portfolio/portfolio/src/index.js";



 // import 'bootstrap/dist/css/bootstrap.min.css';


react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Router__WEBPACK_IMPORTED_MODULE_3__["default"], {
  __source: {
    fileName: _jsxFileName,
    lineNumber: 9
  },
  __self: undefined
}), document.getElementById("root"));

/***/ }),

/***/ 0:
/*!**********************************************************************************!*\
  !*** multi ./node_modules/react-dev-utils/webpackHotDevClient.js ./src/index.js ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /home/dci-rec101/Desktop/portfolio/portfolio/node_modules/react-dev-utils/webpackHotDevClient.js */"./node_modules/react-dev-utils/webpackHotDevClient.js");
module.exports = __webpack_require__(/*! /home/dci-rec101/Desktop/portfolio/portfolio/src/index.js */"./src/index.js");


/***/ })

},[[0,"runtime-main",1]]]);
//# sourceMappingURL=main.chunk.js.map