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

/***/ "./src/components/Board.tsx":
/*!**********************************!*\
  !*** ./src/components/Board.tsx ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Board)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var _Tr__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Tr */ \"./src/components/Tr.tsx\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _libs_afterClick__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../libs/afterClick */ \"./src/libs/afterClick.tsx\");\nvar _templateObject;\n\nfunction _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }\n\nfunction _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }\n\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _iterableToArray(iter) { if (typeof Symbol !== \"undefined\" && iter[Symbol.iterator] != null || iter[\"@@iterator\"] != null) return Array.from(iter); }\n\nfunction _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\nfunction Board(_ref) {\n  var propsBoard = _ref.propsBoard,\n      mine = _ref.mine,\n      setStatus = _ref.setStatus;\n\n  var _useState = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(propsBoard),\n      _useState2 = _slicedToArray(_useState, 2),\n      board = _useState2[0],\n      setBoard = _useState2[1];\n\n  var preBoard = board;\n\n  var _useState3 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)('open'),\n      _useState4 = _slicedToArray(_useState3, 2),\n      clickStatus = _useState4[0],\n      setClickStatus = _useState4[1];\n\n  var _useState5 = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(\"ing\"),\n      _useState6 = _slicedToArray(_useState5, 2),\n      gameStatus = _useState6[0],\n      setGameStatus = _useState6[1];\n\n  var boardColumn = propsBoard[0].length;\n\n  var openOrFlag = function openOrFlag(clickStatus, r, c, status) {\n    preBoard[r][c].status = clickStatus;\n    status = _libs_afterClick__WEBPACK_IMPORTED_MODULE_2__.openSpace(preBoard, r, c);\n    setGameStatus(status);\n    setStatus(status);\n  };\n\n  var onClick = function onClick(e) {\n    var status = \"ing\";\n\n    if (gameStatus === \"ing\") {\n      var r = Math.floor(e.target.id / boardColumn);\n      var c = e.target.id % boardColumn;\n\n      if (clickStatus === \"open\") {\n        openOrFlag(clickStatus, r, c, status);\n      } else if (clickStatus === \"flag\") {\n        openOrFlag(clickStatus, r, c, status);\n      } else if (clickStatus === \"q_mark\") {\n        preBoard[r][c].status = \"q_mark\";\n      }\n\n      setBoard(_toConsumableArray(preBoard));\n    }\n  };\n\n  var changeClickStatus = function changeClickStatus(e) {\n    console.log(e.target.id);\n    if (e.target.id === \"open\") setClickStatus(\"open\");else if (e.target.id === \"flag\") setClickStatus(\"flag\");else if (e.target.id === \"q_mark\") setClickStatus(\"q_mark\");\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"div\", {\n    className: \"buttonWrapper-game\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {\n    id: \"open\",\n    onClick: changeClickStatus\n  }, \"OPEN\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {\n    id: \"flag\",\n    onClick: changeClickStatus\n  }, \"FLAG\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(Button, {\n    id: \"q_mark\",\n    onClick: changeClickStatus\n  }, \"Q_MARK\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"table\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(\"tbody\", null, board.map(function (i, index) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0__.createElement(_Tr__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      row: i,\n      key: index,\n      onClick: onClick\n    });\n  }))));\n}\nvar Button = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].button(_templateObject || (_templateObject = _taggedTemplateLiteral([\"\\n  width: 80px;\\n  height: 50px;\\n  background-color: white;\\n  border-radius: 15px;\\n  border: 1px solid black;\\n  margin: 0 auto;\\n  text-align: center;\\n  cursor: pointer;\\n  transition: background-color 0.3s;\\n  -webkit-user-select: none;\\n  -moz-user-select: none;\\n  -ms-user-select: none;\\n  user-select: none;\\n  &:hover {\\n    background-color: pink;\\n  };\\n  &:active {\\n    background-color: aqua;\\n  }\\n\"])));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9Cb2FyZC50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL21pbmVzd2VlcGVyLy4vc3JjL2NvbXBvbmVudHMvQm9hcmQudHN4P2Y2ZDEiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIF90ZW1wbGF0ZU9iamVjdDtcblxuZnVuY3Rpb24gX3RhZ2dlZFRlbXBsYXRlTGl0ZXJhbChzdHJpbmdzLCByYXcpIHsgaWYgKCFyYXcpIHsgcmF3ID0gc3RyaW5ncy5zbGljZSgwKTsgfSByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpOyB9XG5cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShhcnIpIHsgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikgeyBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShhcnIpOyB9XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxuaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFRyIGZyb20gJy4vVHInO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIGFmdGVyY2xpY2sgZnJvbSAnLi4vbGlicy9hZnRlckNsaWNrJztcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJvYXJkKF9yZWYpIHtcbiAgdmFyIHByb3BzQm9hcmQgPSBfcmVmLnByb3BzQm9hcmQsXG4gICAgICBtaW5lID0gX3JlZi5taW5lLFxuICAgICAgc2V0U3RhdHVzID0gX3JlZi5zZXRTdGF0dXM7XG5cbiAgdmFyIF91c2VTdGF0ZSA9IHVzZVN0YXRlKHByb3BzQm9hcmQpLFxuICAgICAgX3VzZVN0YXRlMiA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZSwgMiksXG4gICAgICBib2FyZCA9IF91c2VTdGF0ZTJbMF0sXG4gICAgICBzZXRCb2FyZCA9IF91c2VTdGF0ZTJbMV07XG5cbiAgdmFyIHByZUJvYXJkID0gYm9hcmQ7XG5cbiAgdmFyIF91c2VTdGF0ZTMgPSB1c2VTdGF0ZSgnb3BlbicpLFxuICAgICAgX3VzZVN0YXRlNCA9IF9zbGljZWRUb0FycmF5KF91c2VTdGF0ZTMsIDIpLFxuICAgICAgY2xpY2tTdGF0dXMgPSBfdXNlU3RhdGU0WzBdLFxuICAgICAgc2V0Q2xpY2tTdGF0dXMgPSBfdXNlU3RhdGU0WzFdO1xuXG4gIHZhciBfdXNlU3RhdGU1ID0gdXNlU3RhdGUoXCJpbmdcIiksXG4gICAgICBfdXNlU3RhdGU2ID0gX3NsaWNlZFRvQXJyYXkoX3VzZVN0YXRlNSwgMiksXG4gICAgICBnYW1lU3RhdHVzID0gX3VzZVN0YXRlNlswXSxcbiAgICAgIHNldEdhbWVTdGF0dXMgPSBfdXNlU3RhdGU2WzFdO1xuXG4gIHZhciBib2FyZENvbHVtbiA9IHByb3BzQm9hcmRbMF0ubGVuZ3RoO1xuXG4gIHZhciBvcGVuT3JGbGFnID0gZnVuY3Rpb24gb3Blbk9yRmxhZyhjbGlja1N0YXR1cywgciwgYywgc3RhdHVzKSB7XG4gICAgcHJlQm9hcmRbcl1bY10uc3RhdHVzID0gY2xpY2tTdGF0dXM7XG4gICAgc3RhdHVzID0gYWZ0ZXJjbGljay5vcGVuU3BhY2UocHJlQm9hcmQsIHIsIGMpO1xuICAgIHNldEdhbWVTdGF0dXMoc3RhdHVzKTtcbiAgICBzZXRTdGF0dXMoc3RhdHVzKTtcbiAgfTtcblxuICB2YXIgb25DbGljayA9IGZ1bmN0aW9uIG9uQ2xpY2soZSkge1xuICAgIHZhciBzdGF0dXMgPSBcImluZ1wiO1xuXG4gICAgaWYgKGdhbWVTdGF0dXMgPT09IFwiaW5nXCIpIHtcbiAgICAgIHZhciByID0gTWF0aC5mbG9vcihlLnRhcmdldC5pZCAvIGJvYXJkQ29sdW1uKTtcbiAgICAgIHZhciBjID0gZS50YXJnZXQuaWQgJSBib2FyZENvbHVtbjtcblxuICAgICAgaWYgKGNsaWNrU3RhdHVzID09PSBcIm9wZW5cIikge1xuICAgICAgICBvcGVuT3JGbGFnKGNsaWNrU3RhdHVzLCByLCBjLCBzdGF0dXMpO1xuICAgICAgfSBlbHNlIGlmIChjbGlja1N0YXR1cyA9PT0gXCJmbGFnXCIpIHtcbiAgICAgICAgb3Blbk9yRmxhZyhjbGlja1N0YXR1cywgciwgYywgc3RhdHVzKTtcbiAgICAgIH0gZWxzZSBpZiAoY2xpY2tTdGF0dXMgPT09IFwicV9tYXJrXCIpIHtcbiAgICAgICAgcHJlQm9hcmRbcl1bY10uc3RhdHVzID0gXCJxX21hcmtcIjtcbiAgICAgIH1cblxuICAgICAgc2V0Qm9hcmQoX3RvQ29uc3VtYWJsZUFycmF5KHByZUJvYXJkKSk7XG4gICAgfVxuICB9O1xuXG4gIHZhciBjaGFuZ2VDbGlja1N0YXR1cyA9IGZ1bmN0aW9uIGNoYW5nZUNsaWNrU3RhdHVzKGUpIHtcbiAgICBjb25zb2xlLmxvZyhlLnRhcmdldC5pZCk7XG4gICAgaWYgKGUudGFyZ2V0LmlkID09PSBcIm9wZW5cIikgc2V0Q2xpY2tTdGF0dXMoXCJvcGVuXCIpO2Vsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcImZsYWdcIikgc2V0Q2xpY2tTdGF0dXMoXCJmbGFnXCIpO2Vsc2UgaWYgKGUudGFyZ2V0LmlkID09PSBcInFfbWFya1wiKSBzZXRDbGlja1N0YXR1cyhcInFfbWFya1wiKTtcbiAgfTtcblxuICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoUmVhY3QuRnJhZ21lbnQsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwiZGl2XCIsIHtcbiAgICBjbGFzc05hbWU6IFwiYnV0dG9uV3JhcHBlci1nYW1lXCJcbiAgfSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgaWQ6IFwib3BlblwiLFxuICAgIG9uQ2xpY2s6IGNoYW5nZUNsaWNrU3RhdHVzXG4gIH0sIFwiT1BFTlwiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgaWQ6IFwiZmxhZ1wiLFxuICAgIG9uQ2xpY2s6IGNoYW5nZUNsaWNrU3RhdHVzXG4gIH0sIFwiRkxBR1wiKSwgLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoQnV0dG9uLCB7XG4gICAgaWQ6IFwicV9tYXJrXCIsXG4gICAgb25DbGljazogY2hhbmdlQ2xpY2tTdGF0dXNcbiAgfSwgXCJRX01BUktcIikpLCAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChcInRhYmxlXCIsIG51bGwsIC8qI19fUFVSRV9fKi9SZWFjdC5jcmVhdGVFbGVtZW50KFwidGJvZHlcIiwgbnVsbCwgYm9hcmQubWFwKGZ1bmN0aW9uIChpLCBpbmRleCkge1xuICAgIHJldHVybiAvKiNfX1BVUkVfXyovUmVhY3QuY3JlYXRlRWxlbWVudChUciwge1xuICAgICAgcm93OiBpLFxuICAgICAga2V5OiBpbmRleCxcbiAgICAgIG9uQ2xpY2s6IG9uQ2xpY2tcbiAgICB9KTtcbiAgfSkpKSk7XG59XG52YXIgQnV0dG9uID0gc3R5bGVkLmJ1dHRvbihfdGVtcGxhdGVPYmplY3QgfHwgKF90ZW1wbGF0ZU9iamVjdCA9IF90YWdnZWRUZW1wbGF0ZUxpdGVyYWwoW1wiXFxuICB3aWR0aDogODBweDtcXG4gIGhlaWdodDogNTBweDtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgYm9yZGVyLXJhZGl1czogMTVweDtcXG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xcbiAgbWFyZ2luOiAwIGF1dG87XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICBjdXJzb3I6IHBvaW50ZXI7XFxuICB0cmFuc2l0aW9uOiBiYWNrZ3JvdW5kLWNvbG9yIDAuM3M7XFxuICAtd2Via2l0LXVzZXItc2VsZWN0OiBub25lO1xcbiAgLW1vei11c2VyLXNlbGVjdDogbm9uZTtcXG4gIC1tcy11c2VyLXNlbGVjdDogbm9uZTtcXG4gIHVzZXItc2VsZWN0OiBub25lO1xcbiAgJjpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHBpbms7XFxuICB9O1xcbiAgJjphY3RpdmUge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBhcXVhO1xcbiAgfVxcblwiXSkpKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/Board.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("5f91ef84938a91ebfb54")
/******/ })();
/******/ 
/******/ }
);