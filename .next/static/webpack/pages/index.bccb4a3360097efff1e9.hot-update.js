webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Gallery.js":
/*!*******************************!*\
  !*** ./components/Gallery.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardGallery */ \"./components/CardGallery.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/Gallery.js\",\n    _this = undefined;\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  width: 250px;\\n  height: 250px;\\n\\n  background-color: #222;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  grid-column-gap: 85px;\\n  margin-left: 260px;\\n\\n  width: 100vw;\\n  height: 700px;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\nvar images = [{\n  id: 1,\n  ImageUrl: \"https://cdn.pixabay.com/photo/2019/08/05/08/54/football-4385515_1280.jpg\"\n}, {\n  id: 2,\n  ImageUrl: \"https://cdn.pixabay.com/photo/2017/12/07/18/25/tolgay-arslan-3004304_1280.jpg\"\n}, {\n  id: 3,\n  ImageUrl: \"https://cdn.pixabay.com/photo/2017/09/03/09/48/brazil-2709731_1280.jpg\"\n}];\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nvar InnerWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = InnerWrapper;\n\nvar Gallery = function Gallery() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(InnerWrapper, {\n      children: images.map(function (item) {\n        return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardGallery__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 45,\n          columnNumber: 9\n        }, _this);\n      })\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 43,\n      columnNumber: 5\n    }, _this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 42,\n    columnNumber: 3\n  }, _this);\n};\n\n_c3 = Gallery;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Gallery);\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"InnerWrapper\");\n$RefreshReg$(_c3, \"Gallery\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9HYWxsZXJ5LmpzP2Y0MjMiXSwibmFtZXMiOlsiaW1hZ2VzIiwiaWQiLCJJbWFnZVVybCIsIlN0eWxlZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJJbm5lcldyYXBwZXIiLCJHYWxsZXJ5IiwibWFwIiwiaXRlbSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBRyxDQUNiO0FBQ0VDLElBQUUsRUFBRSxDQUROO0FBRUVDLFVBQVEsRUFDTjtBQUhKLENBRGEsRUFNYjtBQUNFRCxJQUFFLEVBQUUsQ0FETjtBQUVFQyxVQUFRLEVBQ047QUFISixDQU5hLEVBV2I7QUFDRUQsSUFBRSxFQUFFLENBRE47QUFFRUMsVUFBUSxFQUNOO0FBSEosQ0FYYSxDQUFmO0FBa0JBLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQVVOLElBQU1HLFlBQVksR0FBR0YseURBQU0sQ0FBQ0MsR0FBVixvQkFBbEI7TUFBTUMsWTs7QUFRTixJQUFNQyxPQUFPLEdBQUcsU0FBVkEsT0FBVTtBQUFBLHNCQUNkLHFFQUFDLGFBQUQ7QUFBQSwyQkFDRSxxRUFBQyxZQUFEO0FBQUEsZ0JBQ0dQLE1BQU0sQ0FBQ1EsR0FBUCxDQUFXLFVBQUNDLElBQUQ7QUFBQSw0QkFDVixxRUFBQyxvREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURVO0FBQUEsT0FBWDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGM7QUFBQSxDQUFoQjs7TUFBTUYsTztBQVVTQSxzRUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvR2FsbGVyeS5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBJbWFnZSBmcm9tIFwibmV4dC9pbWFnZVwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJkR2FsbGVyeSBmcm9tIFwiLi9DYXJkR2FsbGVyeVwiO1xuXG5jb25zdCBpbWFnZXMgPSBbXG4gIHtcbiAgICBpZDogMSxcbiAgICBJbWFnZVVybDpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxOS8wOC8wNS8wOC81NC9mb290YmFsbC00Mzg1NTE1XzEyODAuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBpZDogMixcbiAgICBJbWFnZVVybDpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAxNy8xMi8wNy8xOC8yNS90b2xnYXktYXJzbGFuLTMwMDQzMDRfMTI4MC5qcGdcIixcbiAgfSxcbiAge1xuICAgIGlkOiAzLFxuICAgIEltYWdlVXJsOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE3LzA5LzAzLzA5LzQ4L2JyYXppbC0yNzA5NzMxXzEyODAuanBnXCIsXG4gIH0sXG5dO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgMWZyKTtcbiAgZ3JpZC1jb2x1bW4tZ2FwOiA4NXB4O1xuICBtYXJnaW4tbGVmdDogMjYwcHg7XG5cbiAgd2lkdGg6IDEwMHZ3O1xuICBoZWlnaHQ6IDcwMHB4O1xuYDtcblxuY29uc3QgSW5uZXJXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB3aWR0aDogMjUwcHg7XG4gIGhlaWdodDogMjUwcHg7XG5cbiAgYmFja2dyb3VuZC1jb2xvcjogIzIyMjtcbmA7XG5cbmNvbnN0IEdhbGxlcnkgPSAoKSA9PiAoXG4gIDxTdHlsZWRXcmFwcGVyPlxuICAgIDxJbm5lcldyYXBwZXI+XG4gICAgICB7aW1hZ2VzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8Q2FyZEdhbGxlcnkgLz5cbiAgICAgICkpfVxuICAgIDwvSW5uZXJXcmFwcGVyPlxuICA8L1N0eWxlZFdyYXBwZXI+XG4pO1xuXG5leHBvcnQgZGVmYXVsdCBHYWxsZXJ5O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Gallery.js\n");

/***/ })

})