webpackHotUpdate_N_E("pages/index",{

/***/ "./components/News.js":
/*!****************************!*\
  !*** ./components/News.js ***!
  \****************************/
/*! exports provided: MySwiper, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MySwiper\", function() { return MySwiper; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return News; });\n/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n/* harmony import */ var _CardNews__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./CardNews */ \"./components/CardNews.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/swiper-react.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/News.js\",\n    _this = undefined;\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  position: relative;\\n  top: -160px;\\n  width: 1200px;\\n  height: 570px;\\n  margin: 0 auto;\\n  background-color: transparent;\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\n\n\n\nvar news = [{\n  title: \"Mistrzostwa Polski Górników i Przyjaciół\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2016/12/25/15/40/ball-1930189_1280.jpg\",\n  created: \"1 day\"\n}, {\n  title: \"Lorem ipsum 2\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2016/11/29/02/05/audience-1866738_1280.jpg\",\n  created: \"3 day\"\n}, {\n  title: \"Lorem ipsum 3\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 4\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 5\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}, {\n  title: \"Lorem ipsum 6\",\n  content: \"Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, tempora quibusdam natus modi tempore esse adipisci, dolore odit animi\",\n  imageNews: \"https://cdn.pixabay.com/photo/2020/01/12/14/02/indoor-soccer-4760027_1280.jpg\",\n  created: \"5 day\"\n}];\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject());\n_c = StyledWrapper;\nswiper__WEBPACK_IMPORTED_MODULE_5__[\"default\"].use([swiper__WEBPACK_IMPORTED_MODULE_5__[\"Navigation\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"Pagination\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"Scrollbar\"], swiper__WEBPACK_IMPORTED_MODULE_5__[\"A11y\"]]);\nvar MySwiper = function MySwiper(_ref) {\n  var title = _ref.title,\n      content = _ref.content,\n      created = _ref.created,\n      imageNews = _ref.imageNews;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"Swiper\"], {\n    spaceBetween: 10,\n    slidesPerView: 3,\n    navigation: true,\n    children: news.map(function (item) {\n      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(swiper_react__WEBPACK_IMPORTED_MODULE_6__[\"SwiperSlide\"], {\n        children: [function (_ref2) {\n          var isActive = _ref2.isActive;\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"div\", {\n            children: [\"Current slide is \", isActive ? \"active\" : \"not active\"]\n          }, void 0, true, {\n            fileName: _jsxFileName,\n            lineNumber: 76,\n            columnNumber: 13\n          }, _this);\n        }, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(_CardNews__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n          title: item.title,\n          content: item.content,\n          imageNews: item.imageNews,\n          created: item.created\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, _this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 74,\n        columnNumber: 9\n      }, _this);\n    })\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 72,\n    columnNumber: 5\n  }, _this);\n};\n_c2 = MySwiper;\nfunction News() {\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(MySwiper, {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 95,\n      columnNumber: 7\n    }, this)\n  }, void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 94,\n    columnNumber: 5\n  }, this);\n}\n_c3 = News;\n\nvar _c, _c2, _c3;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"MySwiper\");\n$RefreshReg$(_c3, \"News\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OZXdzLmpzP2JjYjUiXSwibmFtZXMiOlsibmV3cyIsInRpdGxlIiwiY29udGVudCIsImltYWdlTmV3cyIsImNyZWF0ZWQiLCJTdHlsZWRXcmFwcGVyIiwic3R5bGVkIiwiZGl2IiwiU3dpcGVyQ29yZSIsInVzZSIsIk5hdmlnYXRpb24iLCJQYWdpbmF0aW9uIiwiU2Nyb2xsYmFyIiwiQTExeSIsIk15U3dpcGVyIiwibWFwIiwiaXRlbSIsImlzQWN0aXZlIiwiTmV3cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQSxJQUFNQSxJQUFJLEdBQUcsQ0FDWDtBQUNFQyxPQUFLLEVBQUUsMENBRFQ7QUFFRUMsU0FBTyxFQUNMLDBJQUhKO0FBSUVDLFdBQVMsRUFDUCxzRUFMSjtBQU1FQyxTQUFPLEVBQUU7QUFOWCxDQURXLEVBU1g7QUFDRUgsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsU0FBTyxFQUNMLDBJQUhKO0FBSUVDLFdBQVMsRUFDUCwwRUFMSjtBQU1FQyxTQUFPLEVBQUU7QUFOWCxDQVRXLEVBaUJYO0FBQ0VILE9BQUssRUFBRSxlQURUO0FBRUVDLFNBQU8sRUFDTCwwSUFISjtBQUlFQyxXQUFTLEVBQ1AsK0VBTEo7QUFNRUMsU0FBTyxFQUFFO0FBTlgsQ0FqQlcsRUF5Qlg7QUFDRUgsT0FBSyxFQUFFLGVBRFQ7QUFFRUMsU0FBTyxFQUNMLDBJQUhKO0FBSUVDLFdBQVMsRUFDUCwrRUFMSjtBQU1FQyxTQUFPLEVBQUU7QUFOWCxDQXpCVyxFQWlDWDtBQUNFSCxPQUFLLEVBQUUsZUFEVDtBQUVFQyxTQUFPLEVBQ0wsMElBSEo7QUFJRUMsV0FBUyxFQUNQLCtFQUxKO0FBTUVDLFNBQU8sRUFBRTtBQU5YLENBakNXLEVBeUNYO0FBQ0VILE9BQUssRUFBRSxlQURUO0FBRUVDLFNBQU8sRUFDTCwwSUFISjtBQUlFQyxXQUFTLEVBQ1AsK0VBTEo7QUFNRUMsU0FBTyxFQUFFO0FBTlgsQ0F6Q1csQ0FBYjtBQW1EQSxJQUFNQyxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsbUJBQW5CO0tBQU1GLGE7QUFTTkcsOENBQVUsQ0FBQ0MsR0FBWCxDQUFlLENBQUNDLGlEQUFELEVBQWFDLGlEQUFiLEVBQXlCQyxnREFBekIsRUFBb0NDLDJDQUFwQyxDQUFmO0FBRU8sSUFBTUMsUUFBUSxHQUFHLFNBQVhBLFFBQVcsT0FBNEM7QUFBQSxNQUF6Q2IsS0FBeUMsUUFBekNBLEtBQXlDO0FBQUEsTUFBbENDLE9BQWtDLFFBQWxDQSxPQUFrQztBQUFBLE1BQXpCRSxPQUF5QixRQUF6QkEsT0FBeUI7QUFBQSxNQUFoQkQsU0FBZ0IsUUFBaEJBLFNBQWdCO0FBQ2xFLHNCQUNFLHFFQUFDLG1EQUFEO0FBQVEsZ0JBQVksRUFBRSxFQUF0QjtBQUEwQixpQkFBYSxFQUFFLENBQXpDO0FBQTRDLGNBQVUsTUFBdEQ7QUFBQSxjQUNHSCxJQUFJLENBQUNlLEdBQUwsQ0FBUyxVQUFDQyxJQUFEO0FBQUEsMEJBQ1IscUVBQUMsd0RBQUQ7QUFBQSxtQkFDRztBQUFBLGNBQUdDLFFBQUgsU0FBR0EsUUFBSDtBQUFBLDhCQUNDO0FBQUEsNENBQXVCQSxRQUFRLEdBQUcsUUFBSCxHQUFjLFlBQTdDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERDtBQUFBLFNBREgsZUFLSSxxRUFBQyxpREFBRDtBQUNFLGVBQUssRUFBRUQsSUFBSSxDQUFDZixLQURkO0FBRUUsaUJBQU8sRUFBRWUsSUFBSSxDQUFDZCxPQUZoQjtBQUdFLG1CQUFTLEVBQUVjLElBQUksQ0FBQ2IsU0FIbEI7QUFJRSxpQkFBTyxFQUFFYSxJQUFJLENBQUNaO0FBSmhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRFE7QUFBQSxLQUFUO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxXQURGO0FBbUJELENBcEJNO01BQU1VLFE7QUFzQkUsU0FBU0ksSUFBVCxHQUFnQjtBQUM3QixzQkFDRSxxRUFBQyxhQUFEO0FBQUEsMkJBQ0UscUVBQUMsUUFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBS0Q7TUFOdUJBLEkiLCJmaWxlIjoiLi9jb21wb25lbnRzL05ld3MuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IENhcmROZXdzIGZyb20gXCIuL0NhcmROZXdzXCI7XG5pbXBvcnQgU3dpcGVyQ29yZSwgeyBOYXZpZ2F0aW9uLCBQYWdpbmF0aW9uLCBTY3JvbGxiYXIsIEExMXkgfSBmcm9tIFwic3dpcGVyXCI7XG5cbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5cbmNvbnN0IG5ld3MgPSBbXG4gIHtcbiAgICB0aXRsZTogXCJNaXN0cnpvc3R3YSBQb2xza2kgR8Ozcm5pa8OzdyBpIFByenlqYWNpw7PFglwiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERlbGVjdHVzLCB0ZW1wb3JhIHF1aWJ1c2RhbSBuYXR1cyBtb2RpIHRlbXBvcmUgZXNzZSBhZGlwaXNjaSwgZG9sb3JlIG9kaXQgYW5pbWlcIixcbiAgICBpbWFnZU5ld3M6XG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMTIvMjUvMTUvNDAvYmFsbC0xOTMwMTg5XzEyODAuanBnXCIsXG4gICAgY3JlYXRlZDogXCIxIGRheVwiLFxuICB9LFxuICB7XG4gICAgdGl0bGU6IFwiTG9yZW0gaXBzdW0gMlwiLFxuICAgIGNvbnRlbnQ6XG4gICAgICBcIkxvcmVtIGlwc3VtIGRvbG9yIHNpdCBhbWV0IGNvbnNlY3RldHVyIGFkaXBpc2ljaW5nIGVsaXQuIERlbGVjdHVzLCB0ZW1wb3JhIHF1aWJ1c2RhbSBuYXR1cyBtb2RpIHRlbXBvcmUgZXNzZSBhZGlwaXNjaSwgZG9sb3JlIG9kaXQgYW5pbWlcIixcbiAgICBpbWFnZU5ld3M6XG4gICAgICBcImh0dHBzOi8vY2RuLnBpeGFiYXkuY29tL3Bob3RvLzIwMTYvMTEvMjkvMDIvMDUvYXVkaWVuY2UtMTg2NjczOF8xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiMyBkYXlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIDNcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAxLzEyLzE0LzAyL2luZG9vci1zb2NjZXItNDc2MDAyN18xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiNSBkYXlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIDRcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAxLzEyLzE0LzAyL2luZG9vci1zb2NjZXItNDc2MDAyN18xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiNSBkYXlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIDVcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAxLzEyLzE0LzAyL2luZG9vci1zb2NjZXItNDc2MDAyN18xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiNSBkYXlcIixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiBcIkxvcmVtIGlwc3VtIDZcIixcbiAgICBjb250ZW50OlxuICAgICAgXCJMb3JlbSBpcHN1bSBkb2xvciBzaXQgYW1ldCBjb25zZWN0ZXR1ciBhZGlwaXNpY2luZyBlbGl0LiBEZWxlY3R1cywgdGVtcG9yYSBxdWlidXNkYW0gbmF0dXMgbW9kaSB0ZW1wb3JlIGVzc2UgYWRpcGlzY2ksIGRvbG9yZSBvZGl0IGFuaW1pXCIsXG4gICAgaW1hZ2VOZXdzOlxuICAgICAgXCJodHRwczovL2Nkbi5waXhhYmF5LmNvbS9waG90by8yMDIwLzAxLzEyLzE0LzAyL2luZG9vci1zb2NjZXItNDc2MDAyN18xMjgwLmpwZ1wiLFxuICAgIGNyZWF0ZWQ6IFwiNSBkYXlcIixcbiAgfSxcbl07XG5cbmNvbnN0IFN0eWxlZFdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHRvcDogLTE2MHB4O1xuICB3aWR0aDogMTIwMHB4O1xuICBoZWlnaHQ6IDU3MHB4O1xuICBtYXJnaW46IDAgYXV0bztcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG5gO1xuXG5Td2lwZXJDb3JlLnVzZShbTmF2aWdhdGlvbiwgUGFnaW5hdGlvbiwgU2Nyb2xsYmFyLCBBMTF5XSk7XG5cbmV4cG9ydCBjb25zdCBNeVN3aXBlciA9ICh7IHRpdGxlLCBjb250ZW50LCBjcmVhdGVkLCBpbWFnZU5ld3MgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxTd2lwZXIgc3BhY2VCZXR3ZWVuPXsxMH0gc2xpZGVzUGVyVmlldz17M30gbmF2aWdhdGlvbj5cbiAgICAgIHtuZXdzLm1hcCgoaXRlbSkgPT4gKFxuICAgICAgICA8U3dpcGVyU2xpZGU+XG4gICAgICAgICAgeyh7IGlzQWN0aXZlIH0pID0+IChcbiAgICAgICAgICAgIDxkaXY+Q3VycmVudCBzbGlkZSBpcyB7aXNBY3RpdmUgPyBcImFjdGl2ZVwiIDogXCJub3QgYWN0aXZlXCJ9PC9kaXY+XG4gICAgICAgICAgKX1cbiAgICAgICAgICB7XG4gICAgICAgICAgICA8Q2FyZE5ld3NcbiAgICAgICAgICAgICAgdGl0bGU9e2l0ZW0udGl0bGV9XG4gICAgICAgICAgICAgIGNvbnRlbnQ9e2l0ZW0uY29udGVudH1cbiAgICAgICAgICAgICAgaW1hZ2VOZXdzPXtpdGVtLmltYWdlTmV3c31cbiAgICAgICAgICAgICAgY3JlYXRlZD17aXRlbS5jcmVhdGVkfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICB9XG4gICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICApKX1cbiAgICA8L1N3aXBlcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5ld3MoKSB7XG4gIHJldHVybiAoXG4gICAgPFN0eWxlZFdyYXBwZXI+XG4gICAgICA8TXlTd2lwZXIgLz5cbiAgICA8L1N0eWxlZFdyYXBwZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/News.js\n");

/***/ })

})