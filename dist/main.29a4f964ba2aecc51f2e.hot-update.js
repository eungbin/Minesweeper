"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateminesweeper"]("main",{

/***/ "./src/components/Game.tsx":
/*!*********************************!*\
  !*** ./src/components/Game.tsx ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _css_Game_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/Game.css */ \"./src/css/Game.css\");\nObject(function webpackMissingModule() { var e = new Error(\"Cannot find module './Board2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }());\n/* harmony import */ var _libs_initFunction__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../libs/initFunction */ \"./src/libs/initFunction.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\n\n\n\n\n\nvar boardRow = 10;\nvar boardColumn = 10;\nvar mine = 10;\n\nvar Game = function Game() {\n  var preBoard = _libs_initFunction__WEBPACK_IMPORTED_MODULE_3__.createBoard(boardRow, boardColumn);\n  _libs_initFunction__WEBPACK_IMPORTED_MODULE_3__.drawMine(mine, preBoard, boardRow, boardColumn);\n  _libs_initFunction__WEBPACK_IMPORTED_MODULE_3__.calSpaceNumber(preBoard);\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"title\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"\\uC9C0\\uB8B0\\uCC3E\\uAE30 \\uAC8C\\uC784\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"board\"\n  }, preBoard === null ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"h1\", null, \"Loading...\") : /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Object(function webpackMissingModule() { var e = new Error(\"Cannot find module './Board2'\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()), {\n    board: preBoard,\n    mine: mine\n  })));\n};\n\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_4__[\"default\"].button(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 80px;\\n  height: 50px;\\n  background-color: white;\\n  border-radius: 15px;\\n  border: 1px solid black;\\n  margin: 0 auto;\\n  text-align: center;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  &:hover {\\n    background-color: pink;\\n  };\\n  &:active {\\n    background-color: aqua;\\n  }\\n\"])));\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Game);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9HYW1lLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbWluZXN3ZWVwZXIvLi9zcmMvY29tcG9uZW50cy9HYW1lLnRzeD82YTE2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfdGVtcGxhdGVPYmplY3Q7XG5cbmZ1bmN0aW9uIF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoc3RyaW5ncywgcmF3KSB7IGlmICghcmF3KSB7IHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7IH0gcmV0dXJuIE9iamVjdC5mcmVlemUoT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoc3RyaW5ncywgeyByYXc6IHsgdmFsdWU6IE9iamVjdC5mcmVlemUocmF3KSB9IH0pKTsgfVxuXG5pbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0ICcuLi9jc3MvR2FtZS5jc3MnO1xuaW1wb3J0IEJvYXJkMiBmcm9tICcuL0JvYXJkMic7XG5pbXBvcnQgKiBhcyBtaW5lc3dlZXBlciBmcm9tICcuLi9saWJzL2luaXRGdW5jdGlvbic7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xudmFyIGJvYXJkUm93ID0gMTA7XG52YXIgYm9hcmRDb2x1bW4gPSAxMDtcbnZhciBtaW5lID0gMTA7XG5cbnZhciBHYW1lID0gZnVuY3Rpb24gR2FtZSgpIHtcbiAgdmFyIHByZUJvYXJkID0gbWluZXN3ZWVwZXIuY3JlYXRlQm9hcmQoYm9hcmRSb3csIGJvYXJkQ29sdW1uKTtcbiAgbWluZXN3ZWVwZXIuZHJhd01pbmUobWluZSwgcHJlQm9hcmQsIGJvYXJkUm93LCBib2FyZENvbHVtbik7XG4gIG1pbmVzd2VlcGVyLmNhbFNwYWNlTnVtYmVyKHByZUJvYXJkKTtcbiAgcmV0dXJuIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFJlYWN0LkZyYWdtZW50LCBudWxsLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcInRpdGxlXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoXCJoMVwiLCBudWxsLCBcIlxcdUM5QzBcXHVCOEIwXFx1Q0MzRVxcdUFFMzAgXFx1QUM4Q1xcdUM3ODRcIikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImRpdlwiLCB7XG4gICAgY2xhc3NOYW1lOiBcImJvYXJkXCJcbiAgfSwgcHJlQm9hcmQgPT09IG51bGwgPyAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcImgxXCIsIG51bGwsIFwiTG9hZGluZy4uLlwiKSA6IC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KEJvYXJkMiwge1xuICAgIGJvYXJkOiBwcmVCb2FyZCxcbiAgICBtaW5lOiBtaW5lXG4gIH0pKSk7XG59O1xuXG52YXIgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbihfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICB9O1xcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgfVxcblwiXSkpKTtcbmV4cG9ydCBkZWZhdWx0IEdhbWU7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/Game.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5e1b0aabb68979d7d339")
/******/ })();
/******/ 
/******/ }
);