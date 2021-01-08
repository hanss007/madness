webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Calendar.js":
/*!********************************!*\
  !*** ./components/Calendar.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardEvents__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardEvents */ \"./components/CardEvents.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/Calendar.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  background-color: grey;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  padding: 10px;\\n\\n  background-color: #e6e6e6;\\n  width: 100vw;\\n  height: 540px;\\n  color: black;\\n  margin: 0;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar events = [{\n  title: \"Grudzień\",\n  day: \"05\",\n  content: \"Mistrzostwa Polski Górników i Przyjaciół\"\n}, {\n  title: \"Grudzień\",\n  day: \"05\",\n  content: \"Mistrzostwa Polski Górników i Przyjaciół\"\n}];\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nvar StyledAside = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n\nvar Calendar = function Calendar(_ref) {\n  var title = _ref.title,\n      day = _ref.day,\n      content = _ref.content;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: events.map(function (event) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardEvents__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n        titel: event.title,\n        day: event.day,\n        content: event.content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 35,\n        columnNumber: 7\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 33,\n    columnNumber: 3\n  }, _this);\n};\n\n_c2 = Calendar;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Calendar);\n\nvar _c, _c2;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"Calendar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYWxlbmRhci5qcz8yNDdmIl0sIm5hbWVzIjpbImV2ZW50cyIsInRpdGxlIiwiZGF5IiwiY29udGVudCIsIlN0eWxlZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJTdHlsZWRBc2lkZSIsIkNhbGVuZGFyIiwibWFwIiwiZXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFQSxJQUFNQSxNQUFNLEdBQUcsQ0FDYjtBQUNFQyxPQUFLLEVBQUUsVUFEVDtBQUVFQyxLQUFHLEVBQUUsSUFGUDtBQUdFQyxTQUFPLEVBQUU7QUFIWCxDQURhLEVBTWI7QUFDRUYsT0FBSyxFQUFFLFVBRFQ7QUFFRUMsS0FBRyxFQUFFLElBRlA7QUFHRUMsU0FBTyxFQUFFO0FBSFgsQ0FOYSxDQUFmO0FBYUEsSUFBTUMsYUFBYSxHQUFHQyx5REFBTSxDQUFDQyxHQUFWLG1CQUFuQjtLQUFNRixhO0FBVU4sSUFBTUcsV0FBVyxHQUFHRix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjs7QUFJQSxJQUFNRSxRQUFRLEdBQUcsU0FBWEEsUUFBVztBQUFBLE1BQUdQLEtBQUgsUUFBR0EsS0FBSDtBQUFBLE1BQVVDLEdBQVYsUUFBVUEsR0FBVjtBQUFBLE1BQWVDLE9BQWYsUUFBZUEsT0FBZjtBQUFBLHNCQUNmLHFFQUFDLGFBQUQ7QUFBQSxjQUNHSCxNQUFNLENBQUNTLEdBQVAsQ0FBVyxVQUFDQyxLQUFEO0FBQUEsMEJBQ1YscUVBQUMsbURBQUQ7QUFBWSxhQUFLLEVBQUVBLEtBQUssQ0FBQ1QsS0FBekI7QUFBZ0MsV0FBRyxFQUFFUyxLQUFLLENBQUNSLEdBQTNDO0FBQWdELGVBQU8sRUFBRVEsS0FBSyxDQUFDUDtBQUEvRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFU7QUFBQSxLQUFYO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURlO0FBQUEsQ0FBakI7O01BQU1LLFE7QUFRU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhbGVuZGFyLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJkRXZlbnRzIGZyb20gXCIuL0NhcmRFdmVudHNcIjtcblxuY29uc3QgZXZlbnRzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiR3J1ZHppZcWEXCIsXG4gICAgZGF5OiBcIjA1XCIsXG4gICAgY29udGVudDogXCJNaXN0cnpvc3R3YSBQb2xza2kgR8Ozcm5pa8OzdyBpIFByenlqYWNpw7PFglwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiR3J1ZHppZcWEXCIsXG4gICAgZGF5OiBcIjA1XCIsXG4gICAgY29udGVudDogXCJNaXN0cnpvc3R3YSBQb2xza2kgR8Ozcm5pa8OzdyBpIFByenlqYWNpw7PFglwiLFxuICB9LFxuXTtcblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIHBhZGRpbmc6IDEwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNjtcbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDU0MHB4O1xuICBjb2xvcjogYmxhY2s7XG4gIG1hcmdpbjogMDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFzaWRlID0gc3R5bGVkLmRpdmBcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbmA7XG5cbmNvbnN0IENhbGVuZGFyID0gKHsgdGl0bGUsIGRheSwgY29udGVudCB9KSA9PiAoXG4gIDxTdHlsZWRXcmFwcGVyPlxuICAgIHtldmVudHMubWFwKChldmVudCkgPT4gKFxuICAgICAgPENhcmRFdmVudHMgdGl0ZWw9e2V2ZW50LnRpdGxlfSBkYXk9e2V2ZW50LmRheX0gY29udGVudD17ZXZlbnQuY29udGVudH0gLz5cbiAgICApKX1cbiAgPC9TdHlsZWRXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FsZW5kYXI7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Calendar.js\n");

/***/ })

})