webpackHotUpdate("main",{

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
exports.push([module.i, "* {\n  padding: 0;\n  margin: 0;\n  text-decoration: none;\n  list-style: none;\n  text-shadow: 1px 1px 1px rgba(0,0,0,0.004);\n  text-rendering: optimizeLegibility !important;\n  -webkit-font-smoothing: antialiased !important;\n  font-size: calc(14px + (26 - 14) * ((100vw - 300px) / (1600 - 300)));\n  color: gold;\n  box-sizing: border-box;\n  font-family: 'Fredericka the Great', cursive;\n  /* text-transform: uppercase; */\n}\n*:before,\n*:after {\n  box-sizing: border-box;\n}\nhtml {\n  font-family: 'Open Sans', sans-serif;\nscroll-behavior: smooth;\n-webkit-font-smoothing: antialiased;\n-moz-osx-font-smoothing: grayscale;\nheight: auto;\nwidth: 100%;\nbackground-color:mediumspringgreen;\nmargin: 0 auto;\n}\nbody{\nbackground-image: url(" + ___CSS_LOADER_URL___0___ + ");\nbackground-size:cover;\nbackground-attachment: fixed;\nbackground-repeat: repeat;\n}\n/* border page */\n#top, #bottom, #left, #right {\n  background: whitesmoke;\n  position: fixed;\n  z-index:1;\n}\n#left, #right {\n  top: 0; bottom: 0;\n  width: 5px;\n}\n#left { left: 0; }\n#right { right: 0; }\n  \n#top, #bottom {\n  left: 0; right: 0;\n  height: 5px;\n}\n#top { top: 0; }\n#bottom { bottom: 0; }\n/* border page end*/\n\nsection:not(.home) {\n  /* position:relative; */\n  /* width: inherit;  */\n  height: fit-content;\n  margin: 0 50px 50px 50px;\n  padding: 70px 50px 50px 50px;\n  background-color: rgba(0, 0, 0, 0.4);\n   box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.4);\n  }\n  .content{\n    width: 100%;\n    margin-top:70px;\n  }\n  h1 {\n    font-size: 3em;\n    text-align:center;\n    font-weight:100;\n    font-family: 'Fredericka the Great', cursive;\n}\nh1::before, h1::after{\n  content:\" \";\n  display: block;\n  border-bottom: 5px dotted navy; \n  width:2em;\n  margin:auto;\n  padding: 5px;\n}\narticle,p{\n  color:white;\n \n}\nh1, h2{\n  color: white;\n}\nh3,\n{\n  color:#123C69;\n}\n/* animation */\n\n.trademark{\n  font-family: 'Cabin Sketch', cursive;\n  z-index:1;\n}\n\n.puff-in-center {\n  animation: puff-in-center 0.5s cubic-bezier(0.680, -0.550, 0.265, 1.550) both;\n}\n/* keyframes */\n@keyframes puff-in-center {\n  0% {\n    transform: scale(2);\n    filter: blur(4px);\n    opacity: 0;\n  }\n  100% {\n    transform: scale(1);\n    filter: blur(0px);\n    opacity: 1;\n  }\n}\n\n\n@media screen and (max-width: 768px) {\n  html{\n    background-color:tan;\n  }\n  body{\n    background-size:contain;\n  }\n  #top, #bottom, #left, #right{\n    display: none;\n  }\n  section:not(.home){\n  margin:0 auto;\n  padding:0;\n  padding-bottom:50px;\n  background-color:transparent;\n  padding-top:15vh;\n}\n.home{\n  overflow:auto;\n  height: 100vh;\n}\nh1{\n  font-size: 3em;  \n  padding:0;\n}\narticle,p{\n  color: navy;\n}\n.trademark{\n  display: none;\n}\n\n  }", ""]);



/***/ })

})
//# sourceMappingURL=main.72bc5bb1ee903ebfe58c.hot-update.js.map