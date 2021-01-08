webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardEvents */ \"./components/CardEvents.js\");\n/* harmony import */ var _data_events__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../data/events */ \"./data/events.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/Calendar.js\",\n    _this = undefined;\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin: 10px;\\n  background-color: gray;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 70%;\\n  height: 80%;\\n  background-color: transparent;\\n  margin: 0 auto;\\n  border-bottom-left-radius: 10px;\\n  border-bottom-right-radius: 10px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  text-align: center;\\n  text-transform: uppercase;\\n  color: white;\\n  letter-spacing: 3px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  width: 70%;\\n  height: 55px;\\n  background-color: rgba(37, 37, 37, 0.9);\\n  border-top-left-radius: 8px;\\n  border-top-right-radius: 8px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  flex-direction: column;\\n  justify-content: center;\\n  align-items: center;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n  display: grid;\\n  grid-template-columns: 2fr 1fr;\\n  /* background-color: #e6e6e6; */\\n  background-color: white;\\n  width: 100vw;\\n  height: 540px;\\n  color: black;\\n  margin: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nvar StyledCalender = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = StyledCalender;\nvar CalendarHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject3());\n_c3 = CalendarHeader;\nvar NameHeader = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2(_templateObject4());\n_c4 = NameHeader;\nvar CalendarItems = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = CalendarItems;\nvar StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject6());\n_c6 = StyledAside;\n\nvar Calendar = function Calendar(_ref) {\n  var title = _ref.title,\n      day = _ref.day,\n      month = _ref.month,\n      content = _ref.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledCalender, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CalendarHeader, {\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(NameHeader, {\n          children: title\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 57,\n          columnNumber: 9\n        }, _this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 56,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(CalendarItems, {\n        children: _data_events__WEBPACK_IMPORTED_MODULE_5__[\"events\"].map(function (event) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            titel: event.title,\n            day: event.day,\n            month: event.month,\n            content: event.content\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 62,\n            columnNumber: 11\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 60,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 55,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledAside, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 71,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 54,\n    columnNumber: 3\n  }, _this);\n};\n\n_c7 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"StyledCalender\");\n$RefreshReg$(_c3, \"CalendarHeader\");\n$RefreshReg$(_c4, \"NameHeader\");\n$RefreshReg$(_c5, \"CalendarItems\");\n$RefreshReg$(_c6, \"StyledAside\");\n$RefreshReg$(_c7, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxlbmRhci5qcz8yNDdmIl0sIm5hbWVzIjpbIlN0eWxlZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRDYWxlbmRlciIsIkNhbGVuZGFySGVhZGVyIiwiTmFtZUhlYWRlciIsImgyIiwiQ2FsZW5kYXJJdGVtcyIsIlN0eWxlZEFzaWRlIiwiQ2FsZW5kYXIiLCJ0aXRsZSIsImRheSIsIm1vbnRoIiwiY29udGVudCIsImV2ZW50cyIsIm1hcCIsImV2ZW50Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQVdOLElBQU1HLGNBQWMsR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBcEI7TUFBTUMsYztBQU9OLElBQU1DLGNBQWMsR0FBR0gseURBQU0sQ0FBQ0MsR0FBVixvQkFBcEI7TUFBTUUsYztBQVFOLElBQU1DLFVBQVUsR0FBR0oseURBQU0sQ0FBQ0ssRUFBVixvQkFBaEI7TUFBTUQsVTtBQU9OLElBQU1FLGFBQWEsR0FBR04seURBQU0sQ0FBQ0MsR0FBVixvQkFBbkI7TUFBTUssYTtBQVNOLElBQU1DLFdBQVcsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBakI7TUFBTU0sVzs7QUFLTixJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdDLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEdBQVYsUUFBVUEsR0FBVjtBQUFBLE1BQWVDLEtBQWYsUUFBZUEsS0FBZjtBQUFBLE1BQXNCQyxPQUF0QixRQUFzQkEsT0FBdEI7QUFBQSxzQkFDZixxRUFBQyxhQUFEO0FBQUEsNEJBQ0UscUVBQUMsY0FBRDtBQUFBLDhCQUNFLHFFQUFDLGNBQUQ7QUFBQSwrQkFDRSxxRUFBQyxVQUFEO0FBQUEsb0JBQWFIO0FBQWI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQUtFLHFFQUFDLGFBQUQ7QUFBQSxrQkFDR0ksbURBQU0sQ0FBQ0MsR0FBUCxDQUFXLFVBQUNDLEtBQUQ7QUFBQSw4QkFDVixxRUFBQyxtREFBRDtBQUNFLGlCQUFLLEVBQUVBLEtBQUssQ0FBQ04sS0FEZjtBQUVFLGVBQUcsRUFBRU0sS0FBSyxDQUFDTCxHQUZiO0FBR0UsaUJBQUssRUFBRUssS0FBSyxDQUFDSixLQUhmO0FBSUUsbUJBQU8sRUFBRUksS0FBSyxDQUFDSDtBQUpqQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURVO0FBQUEsU0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQWlCRSxxRUFBQyxXQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFqQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7TUFBTUosUTtBQXNCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGVuZGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJkRXZlbnRzIGZyb20gXCIuL0NhcmRFdmVudHNcIjtcbmltcG9ydCB7IGV2ZW50cyB9IGZyb20gXCIuLi9kYXRhL2V2ZW50c1wiO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcGFkZGluZzogMTBweDtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAyZnIgMWZyO1xuICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2OyAqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDU0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbmA7XG5jb25zdCBTdHlsZWRDYWxlbmRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuYDtcblxuY29uc3QgQ2FsZW5kYXJIZWFkZXIgPSBzdHlsZWQuZGl2YFxuICB3aWR0aDogNzAlO1xuICBoZWlnaHQ6IDU1cHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMzcsIDM3LCAzNywgMC45KTtcbiAgYm9yZGVyLXRvcC1sZWZ0LXJhZGl1czogOHB4O1xuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogOHB4O1xuYDtcblxuY29uc3QgTmFtZUhlYWRlciA9IHN0eWxlZC5oMmBcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xuICBjb2xvcjogd2hpdGU7XG4gIGxldHRlci1zcGFjaW5nOiAzcHg7XG5gO1xuXG5jb25zdCBDYWxlbmRhckl0ZW1zID0gc3R5bGVkLmRpdmBcbiAgd2lkdGg6IDcwJTtcbiAgaGVpZ2h0OiA4MCU7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogMTBweDtcbiAgYm9yZGVyLWJvdHRvbS1yaWdodC1yYWRpdXM6IDEwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBc2lkZSA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbjogMTBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcbmA7XG5cbmNvbnN0IENhbGVuZGFyID0gKHsgdGl0bGUsIGRheSwgbW9udGgsIGNvbnRlbnQgfSkgPT4gKFxuICA8U3R5bGVkV3JhcHBlcj5cbiAgICA8U3R5bGVkQ2FsZW5kZXI+XG4gICAgICA8Q2FsZW5kYXJIZWFkZXI+XG4gICAgICAgIDxOYW1lSGVhZGVyPnt0aXRsZX08L05hbWVIZWFkZXI+XG4gICAgICA8L0NhbGVuZGFySGVhZGVyPlxuXG4gICAgICA8Q2FsZW5kYXJJdGVtcz5cbiAgICAgICAge2V2ZW50cy5tYXAoKGV2ZW50KSA9PiAoXG4gICAgICAgICAgPENhcmRFdmVudHNcbiAgICAgICAgICAgIHRpdGVsPXtldmVudC50aXRsZX1cbiAgICAgICAgICAgIGRheT17ZXZlbnQuZGF5fVxuICAgICAgICAgICAgbW9udGg9e2V2ZW50Lm1vbnRofVxuICAgICAgICAgICAgY29udGVudD17ZXZlbnQuY29udGVudH1cbiAgICAgICAgICAvPlxuICAgICAgICApKX1cbiAgICAgIDwvQ2FsZW5kYXJJdGVtcz5cbiAgICA8L1N0eWxlZENhbGVuZGVyPlxuICAgIDxTdHlsZWRBc2lkZSAvPlxuICA8L1N0eWxlZFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBDYWxlbmRhcjtcbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

})