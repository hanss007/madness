webpackHotUpdate_N_E("pages/news",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardEvents */ \"./components/CardEvents.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/Calendar.js\",\n    _this = undefined;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 10px;\\n  background-color: gray;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 70%;\\n  height: 80%;\\n  background-color: transparent;\\n  margin: 0 auto;\\n  border-bottom-left-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  color: white;\\n  letter-spacing: 3px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 70%;\\n  height: 60px;\\n  background-color: rgba(249, 83, 83, 1);\\n  border-top-left-radius: 10px;\\n  border-top-right-radius: 10px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  background-color: #e6e6e6;\\n  width: 100vw;\\n  height: 540px;\\n  color: black;\\n  margin: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar events = [{\n  title: \"Grudzień\",\n  day: \"05\",\n  content: \"Mistrzostwa Polski Górników i Przyjaciół\"\n}, {\n  title: \"Grudzień\",\n  day: \"07\",\n  content: \"Mistrzostwa Polski Ratowników Górniczych\"\n}, {\n  title: \"Grudzień\",\n  day: \"15\",\n  content: \"Turniej przykaład 3\"\n}, {\n  title: \"Grudzień\",\n  day: \"22\",\n  content: \"Turniej przykład 4\"\n}];\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nvar StyledCalender = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StyledCalender;\nvar CalendarHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = CalendarHeader;\nvar NameHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h1(_templateObject4());\n_c4 = NameHeader;\nvar CalendarItems = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = CalendarItems;\nvar StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c6 = StyledAside;\n\nvar Calendar = function Calendar(_ref) {\n  var title = _ref.title,\n      day = _ref.day,\n      content = _ref.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledCalender, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CalendarHeader, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NameHeader, {\n          children: \"Grudzie\\u0144\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 77,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CalendarItems, {\n        children: events.map(function (event) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            titel: event.title,\n            day: event.day,\n            content: event.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 82,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 80,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledAside, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 90,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"StyledCalender\");\n$RefreshReg$(_c3, \"CalendarHeader\");\n$RefreshReg$(_c4, \"NameHeader\");\n$RefreshReg$(_c5, \"CalendarItems\");\n$RefreshReg$(_c6, \"StyledAside\");\n$RefreshReg$(_c7, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxlbmRhci5qcz8yNDdmIl0sIm5hbWVzIjpbImV2ZW50cyIsInRpdGxlIiwiZGF5IiwiY29udGVudCIsIlN0eWxlZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRDYWxlbmRlciIsIkNhbGVuZGFySGVhZGVyIiwiTmFtZUhlYWRlciIsImgxIiwiQ2FsZW5kYXJJdGVtcyIsIlN0eWxlZEFzaWRlIiwiQ2FsZW5kYXIiLCJtYXAiLCJldmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxPQUFLLEVBQUUsVUFEVDtBQUVFQyxLQUFHLEVBQUUsSUFGUDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQURhLEVBTWI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsS0FBRyxFQUFFLElBRlA7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FOYSxFQVdiO0FBQ0VGLE9BQUssRUFBRSxVQURUO0FBRUVDLEtBQUcsRUFBRSxJQUZQO0FBR0VDLFNBQU8sRUFBRTtBQUhYLENBWGEsRUFnQmI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsS0FBRyxFQUFFLElBRlA7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FoQmEsQ0FBZjtBQXVCQSxJQUFNQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0tBQU1GLGE7QUFVTixJQUFNRyxjQUFjLEdBQUdGLHlEQUFNLENBQUNDLEdBQVYsb0JBQXBCO01BQU1DLGM7QUFPTixJQUFNQyxjQUFjLEdBQUdILHlEQUFNLENBQUNDLEdBQVYsb0JBQXBCO01BQU1FLGM7QUFRTixJQUFNQyxVQUFVLEdBQUdKLHlEQUFNLENBQUNLLEVBQVYsb0JBQWhCO01BQU1ELFU7QUFNTixJQUFNRSxhQUFhLEdBQUdOLHlEQUFNLENBQUNDLEdBQVYsb0JBQW5CO01BQU1LLGE7QUFTTixJQUFNQyxXQUFXLEdBQUdQLHlEQUFNLENBQUNDLEdBQVYsb0JBQWpCO01BQU1NLFc7O0FBS04sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVc7QUFBQSxNQUFHWixLQUFILFFBQUdBLEtBQUg7QUFBQSxNQUFVQyxHQUFWLFFBQVVBLEdBQVY7QUFBQSxNQUFlQyxPQUFmLFFBQWVBLE9BQWY7QUFBQSxzQkFDZixxRUFBQyxhQUFEO0FBQUEsNEJBQ0UscUVBQUMsY0FBRDtBQUFBLDhCQUNFLHFFQUFDLGNBQUQ7QUFBQSwrQkFDRSxxRUFBQyxVQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBS0UscUVBQUMsYUFBRDtBQUFBLGtCQUNHSCxNQUFNLENBQUNjLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsOEJBQ1YscUVBQUMsbURBQUQ7QUFDRSxpQkFBSyxFQUFFQSxLQUFLLENBQUNkLEtBRGY7QUFFRSxlQUFHLEVBQUVjLEtBQUssQ0FBQ2IsR0FGYjtBQUdFLG1CQUFPLEVBQUVhLEtBQUssQ0FBQ1o7QUFIakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEVTtBQUFBLFNBQVg7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREYsZUFnQkUscUVBQUMsV0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBaEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O01BQU1VLFE7QUFxQlNBLHVFQUFmIiwiZmlsZSI6Ii4vY29tcG9uZW50cy9DYWxlbmRhci5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgQ2FyZEV2ZW50cyBmcm9tIFwiLi9DYXJkRXZlbnRzXCI7XG5cbmNvbnN0IGV2ZW50cyA9IFtcbiAge1xuICAgIHRpdGxlOiBcIkdydWR6aWXFhFwiLFxuICAgIGRheTogXCIwNVwiLFxuICAgIGNvbnRlbnQ6IFwiTWlzdHJ6b3N0d2EgUG9sc2tpIEfDs3JuaWvDs3cgaSBQcnp5amFjacOzxYJcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkdydWR6aWXFhFwiLFxuICAgIGRheTogXCIwN1wiLFxuICAgIGNvbnRlbnQ6IFwiTWlzdHJ6b3N0d2EgUG9sc2tpIFJhdG93bmlrw7N3IEfDs3JuaWN6eWNoXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHcnVkemllxYRcIixcbiAgICBkYXk6IFwiMTVcIixcbiAgICBjb250ZW50OiBcIlR1cm5pZWogcHJ6eWthxYJhZCAzXCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJHcnVkemllxYRcIixcbiAgICBkYXk6IFwiMjJcIixcbiAgICBjb250ZW50OiBcIlR1cm5pZWogcHJ6eWvFgmFkIDRcIixcbiAgfSxcbl07XG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwYWRkaW5nOiAxMHB4O1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDJmciAxZnI7XG4gIGJhY2tncm91bmQtY29sb3I6ICNlNmU2ZTY7XG4gIHdpZHRoOiAxMDB2dztcbiAgaGVpZ2h0OiA1NDBweDtcbiAgY29sb3I6IGJsYWNrO1xuICBtYXJnaW46IDA7XG5gO1xuY29uc3QgU3R5bGVkQ2FsZW5kZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbmA7XG5cbmNvbnN0IENhbGVuZGFySGVhZGVyID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA2MHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI0OSwgODMsIDgzLCAxKTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDEwcHg7XG5gO1xuXG5jb25zdCBOYW1lSGVhZGVyID0gc3R5bGVkLmgxYFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbGV0dGVyLXNwYWNpbmc6IDNweDtcbmA7XG5cbmNvbnN0IENhbGVuZGFySXRlbXMgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDgwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiAxMHB4O1xuICBib3JkZXItYm90dG9tLXJpZ2h0LXJhZGl1czogMTBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFzaWRlID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luOiAxMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xuYDtcblxuY29uc3QgQ2FsZW5kYXIgPSAoeyB0aXRsZSwgZGF5LCBjb250ZW50IH0pID0+IChcbiAgPFN0eWxlZFdyYXBwZXI+XG4gICAgPFN0eWxlZENhbGVuZGVyPlxuICAgICAgPENhbGVuZGFySGVhZGVyPlxuICAgICAgICA8TmFtZUhlYWRlcj5HcnVkemllxYQ8L05hbWVIZWFkZXI+XG4gICAgICA8L0NhbGVuZGFySGVhZGVyPlxuXG4gICAgICA8Q2FsZW5kYXJJdGVtcz5cbiAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgPENhcmRFdmVudHNcbiAgICAgICAgICAgIHRpdGVsPXtldmVudC50aXRsZX1cbiAgICAgICAgICAgIGRheT17ZXZlbnQuZGF5fVxuICAgICAgICAgICAgY29udGVudD17ZXZlbnQuY29udGVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2FsZW5kYXJJdGVtcz5cbiAgICA8L1N0eWxlZENhbGVuZGVyPlxuICAgIDxTdHlsZWRBc2lkZSAvPlxuICA8L1N0eWxlZFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

})