webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: MySwiper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MySwiper\", function() { return MySwiper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardNews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardNews */ \"./components/CardNews.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/News.js\",\n    _this = undefined,\n    _s = $RefreshSig$();\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  top: -160px;\\n  width: 1200px;\\n  height: 570px;\\n  margin: 0 auto;\\n  background-color: transparent;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar news = [{\n  title: \"Mistrzostwa Polski Górników i Przyjaciół\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg\",\n  created: \"1 day\"\n}, {\n  title: \"Lorem ipsum 2\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg\",\n  created: \"3 day\"\n}, {\n  title: \"Lorem ipsum 3\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 4\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 5\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 6\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}];\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nswiper__WEBPACK_IMPORTED_MODULE_5__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_5__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"Scrollbar\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"A11y\"]]);\nvar MySwiper = function MySwiper(_ref) {\n  _s();\n\n  var title = _ref.title,\n      content = _ref.content,\n      created = _ref.created,\n      imageNews = _ref.imageNews;\n  var swiperRef = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useRef\"])(null);\n  console.log(\"swiper\", swiperRef.current);\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"Swiper\"], {\n    spaceBetween: 10,\n    slidesPerView: 3,\n    navigation: true,\n    ref: swiperRef,\n    children: news.map(function (item, i) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"SwiperSlide\"], {\n        children: function children(_ref2) {\n          var isNext = _ref2.isNext;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardNews__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n            isActive: isNext,\n            title: item.title,\n            content: item.content,\n            imageNews: item.imageNews,\n            created: item.created\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 79,\n            columnNumber: 15\n          }, _this);\n        }\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 74,\n    columnNumber: 5\n  }, _this);\n};\n\n_s(MySwiper, \"7rRnQCzUMwK497nz2pZRyPKpHOg=\");\n\n_c2 = MySwiper;\nfunction News() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MySwiper, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 97,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 96,\n    columnNumber: 5\n  }, this);\n}\n_c3 = News;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"MySwiper\");\n$RefreshReg$(_c3, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzLmpzP2JjYjUiXSwibmFtZXMiOlsibmV3cyIsInRpdGxlIiwiY29udGVudCIsImltYWdlTmV3cyIsImNyZWF0ZWQiLCJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIk15U3dpcGVyIiwic3dpcGVyUmVmIiwidXNlUmVmIiwiY29uc29sZSIsImxvZyIsImN1cnJlbnQiLCJtYXAiLCJpdGVtIiwiaSIsImlzTmV4dCIsIk5ld3MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBLElBQU1BLElBQUksR0FBRyxDQUNYO0FBQ0VDLE9BQUssRUFBRSwwQ0FEVDtBQUVFQyxTQUFPLEVBQ0wsMElBSEo7QUFJRUMsV0FBUyxFQUNQLHNFQUxKO0FBTUVDLFNBQU8sRUFBRTtBQU5YLENBRFcsRUFTWDtBQUNFSCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxTQUFPLEVBQ0wsMElBSEo7QUFJRUMsV0FBUyxFQUNQLDBFQUxKO0FBTUVDLFNBQU8sRUFBRTtBQU5YLENBVFcsRUFpQlg7QUFDRUgsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsU0FBTyxFQUNMLDBJQUhKO0FBSUVDLFdBQVMsRUFDUCwrRUFMSjtBQU1FQyxTQUFPLEVBQUU7QUFOWCxDQWpCVyxFQXlCWDtBQUNFSCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxTQUFPLEVBQ0wsMElBSEo7QUFJRUMsV0FBUyxFQUNQLCtFQUxKO0FBTUVDLFNBQU8sRUFBRTtBQU5YLENBekJXLEVBaUNYO0FBQ0VILE9BQUssRUFBRSxlQURUO0FBRUVDLFNBQU8sRUFDTCwwSUFISjtBQUlFQyxXQUFTLEVBQ1AsK0VBTEo7QUFNRUMsU0FBTyxFQUFFO0FBTlgsQ0FqQ1csRUF5Q1g7QUFDRUgsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsU0FBTyxFQUNMLDBJQUhKO0FBSUVDLFdBQVMsRUFDUCwrRUFMSjtBQU1FQyxTQUFPLEVBQUU7QUFOWCxDQXpDVyxDQUFiO0FBbURBLElBQU1DLGFBQWEsR0FBR0MseURBQU0sQ0FBQ0MsR0FBVixtQkFBbkI7S0FBTUYsYTtBQVNORyw4Q0FBVSxDQUFDQyxHQUFYLENBQWUsQ0FBQ0MsaURBQUQsRUFBYUMsaURBQWIsRUFBeUJDLGdEQUF6QixFQUFvQ0MsMkNBQXBDLENBQWY7QUFFTyxJQUFNQyxRQUFRLEdBQUcsU0FBWEEsUUFBVyxPQUE0QztBQUFBOztBQUFBLE1BQXpDYixLQUF5QyxRQUF6Q0EsS0FBeUM7QUFBQSxNQUFsQ0MsT0FBa0MsUUFBbENBLE9BQWtDO0FBQUEsTUFBekJFLE9BQXlCLFFBQXpCQSxPQUF5QjtBQUFBLE1BQWhCRCxTQUFnQixRQUFoQkEsU0FBZ0I7QUFDbEUsTUFBTVksU0FBUyxHQUFHQyxvREFBTSxDQUFDLElBQUQsQ0FBeEI7QUFDQUMsU0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQkgsU0FBUyxDQUFDSSxPQUFoQztBQUNBLHNCQUNFLHFFQUFDLG1EQUFEO0FBQVEsZ0JBQVksRUFBRSxFQUF0QjtBQUEwQixpQkFBYSxFQUFFLENBQXpDO0FBQTRDLGNBQVUsTUFBdEQ7QUFBdUQsT0FBRyxFQUFFSixTQUE1RDtBQUFBLGNBQ0dmLElBQUksQ0FBQ29CLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSwwQkFDUixxRUFBQyx3REFBRDtBQUFBLGtCQUNHLHlCQUFnQjtBQUFBLGNBQWJDLE1BQWEsU0FBYkEsTUFBYTtBQUNmLDhCQUNFLHFFQUFDLGlEQUFEO0FBQ0Usb0JBQVEsRUFBRUEsTUFEWjtBQUVFLGlCQUFLLEVBQUVGLElBQUksQ0FBQ3BCLEtBRmQ7QUFHRSxtQkFBTyxFQUFFb0IsSUFBSSxDQUFDbkIsT0FIaEI7QUFJRSxxQkFBUyxFQUFFbUIsSUFBSSxDQUFDbEIsU0FKbEI7QUFLRSxtQkFBTyxFQUFFa0IsSUFBSSxDQUFDakI7QUFMaEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERjtBQVNEO0FBWEg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURRO0FBQUEsS0FBVDtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsV0FERjtBQW1CRCxDQXRCTTs7R0FBTVUsUTs7TUFBQUEsUTtBQXdCRSxTQUFTVSxJQUFULEdBQWdCO0FBQzdCLHNCQUNFLHFFQUFDLGFBQUQ7QUFBQSwyQkFDRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFLRDtNQU51QkEsSSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmV3cy5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQsIHVzZVJlZiB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCBDYXJkTmV3cyBmcm9tIFwiLi9DYXJkTmV3c1wiO1xuaW1wb3J0IFN3aXBlckNvcmUsIHsgTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5IH0gZnJvbSBcInN3aXBlclwiO1xuXG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuXG5jb25zdCBuZXdzID0gW1xuICB7XG4gICAgdGl0bGU6IFwiTWlzdHJ6b3N0d2EgUG9sc2tpIEfDs3JuaWvDs3cgaSBQcnp5amFjacOzxYJcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzEyLzI1LzE1LzQwL2JhbGwtMTkzMDE4OV8xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiMSBkYXlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIDJcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDE2LzExLzI5LzAyLzA1L2F1ZGllbmNlLTE4NjY3MzhfMTI4MC5qcGdcIixcbiAgICBjcmVhdGVkOiBcIjMgZGF5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSAzXCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZWN0dXMsIHRlbXBvcmEgcXVpYnVzZGFtIG5hdHVzIG1vZGkgdGVtcG9yZSBlc3NlIGFkaXBpc2NpLCBkb2xvcmUgb2RpdCBhbmltaVwiLFxuICAgIGltYWdlTmV3czpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wMS8xMi8xNC8wMi9pbmRvb3Itc29jY2VyLTQ3NjAwMjdfMTI4MC5qcGdcIixcbiAgICBjcmVhdGVkOiBcIjUgZGF5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSA0XCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZWN0dXMsIHRlbXBvcmEgcXVpYnVzZGFtIG5hdHVzIG1vZGkgdGVtcG9yZSBlc3NlIGFkaXBpc2NpLCBkb2xvcmUgb2RpdCBhbmltaVwiLFxuICAgIGltYWdlTmV3czpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wMS8xMi8xNC8wMi9pbmRvb3Itc29jY2VyLTQ3NjAwMjdfMTI4MC5qcGdcIixcbiAgICBjcmVhdGVkOiBcIjUgZGF5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSA1XCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZWN0dXMsIHRlbXBvcmEgcXVpYnVzZGFtIG5hdHVzIG1vZGkgdGVtcG9yZSBlc3NlIGFkaXBpc2NpLCBkb2xvcmUgb2RpdCBhbmltaVwiLFxuICAgIGltYWdlTmV3czpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wMS8xMi8xNC8wMi9pbmRvb3Itc29jY2VyLTQ3NjAwMjdfMTI4MC5qcGdcIixcbiAgICBjcmVhdGVkOiBcIjUgZGF5XCIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogXCJMb3JlbSBpcHN1bSA2XCIsXG4gICAgY29udGVudDpcbiAgICAgIFwiTG9yZW0gaXBzdW0gZG9sb3Igc2l0IGFtZXQgY29uc2VjdGV0dXIgYWRpcGlzaWNpbmcgZWxpdC4gRGVsZWN0dXMsIHRlbXBvcmEgcXVpYnVzZGFtIG5hdHVzIG1vZGkgdGVtcG9yZSBlc3NlIGFkaXBpc2NpLCBkb2xvcmUgb2RpdCBhbmltaVwiLFxuICAgIGltYWdlTmV3czpcbiAgICAgIFwiaHR0cHM6Ly9jZG4ucGl4YWJheS5jb20vcGhvdG8vMjAyMC8wMS8xMi8xNC8wMi9pbmRvb3Itc29jY2VyLTQ3NjAwMjdfMTI4MC5qcGdcIixcbiAgICBjcmVhdGVkOiBcIjUgZGF5XCIsXG4gIH0sXG5dO1xuXG5jb25zdCBTdHlsZWRXcmFwcGVyID0gc3R5bGVkLmRpdmBcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB0b3A6IC0xNjBweDtcbiAgd2lkdGg6IDEyMDBweDtcbiAgaGVpZ2h0OiA1NzBweDtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuYDtcblxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb24sIFBhZ2luYXRpb24sIFNjcm9sbGJhciwgQTExeV0pO1xuXG5leHBvcnQgY29uc3QgTXlTd2lwZXIgPSAoeyB0aXRsZSwgY29udGVudCwgY3JlYXRlZCwgaW1hZ2VOZXdzIH0pID0+IHtcbiAgY29uc3Qgc3dpcGVyUmVmID0gdXNlUmVmKG51bGwpO1xuICBjb25zb2xlLmxvZyhcInN3aXBlclwiLCBzd2lwZXJSZWYuY3VycmVudCk7XG4gIHJldHVybiAoXG4gICAgPFN3aXBlciBzcGFjZUJldHdlZW49ezEwfSBzbGlkZXNQZXJWaWV3PXszfSBuYXZpZ2F0aW9uIHJlZj17c3dpcGVyUmVmfT5cbiAgICAgIHtuZXdzLm1hcCgoaXRlbSwgaSkgPT4gKFxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgeyh7IGlzTmV4dCB9KSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8Q2FyZE5ld3NcbiAgICAgICAgICAgICAgICBpc0FjdGl2ZT17aXNOZXh0fVxuICAgICAgICAgICAgICAgIHRpdGxlPXtpdGVtLnRpdGxlfVxuICAgICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgICBpbWFnZU5ld3M9e2l0ZW0uaW1hZ2VOZXdzfVxuICAgICAgICAgICAgICAgIGNyZWF0ZWQ9e2l0ZW0uY3JlYXRlZH1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfX1cbiAgICAgICAgPC9Td2lwZXJTbGlkZT5cbiAgICAgICkpfVxuICAgIDwvU3dpcGVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmV3cygpIHtcbiAgcmV0dXJuIChcbiAgICA8U3R5bGVkV3JhcHBlcj5cbiAgICAgIDxNeVN3aXBlciAvPlxuICAgIDwvU3R5bGVkV3JhcHBlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/News.js\n");

/***/ })

})