webpackHotUpdate_N_E("pages/index",{

/***/ "./components/CardNews.js":
/*!********************************!*\
  !*** ./components/CardNews.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/taggedTemplateLiteral */ \"./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ \"./node_modules/styled-components/dist/styled-components.browser.esm.js\");\n\n\n\nvar _jsxFileName = \"/Users/apple/Documents/react kurs/madness/components/CardNews.js\",\n    _this = undefined;\n\nfunction _templateObject9() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  display: flex;\\n  align-items: center;\\n  justify-content: space-around;\\n  flex-direction: column;\\n\\n  padding: 10px;\\n  border-left: 1px solid rgba(247, 239, 229, 0.6);\\n  border-right: 1px solid rgba(247, 239, 229, 0.6);\\n\\n  &:last-child {\\n    border-right: none;\\n  }\\n  &:first-child {\\n    border-left: none;\\n  }\\n\"]);\n\n  _templateObject9 = function _templateObject9() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject8() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: stats;\\n  display: grid;\\n  grid-template-columns: 1fr 1fr 1fr;\\n  grid-template-rows: 1fr;\\n  border-bottom-left-radius: 8px;\\n  border-bottom-right-radius: 8px;\\n  background-color: #3fabaf;\\n  color: #f7efe5;\\n\"]);\n\n  _templateObject8 = function _templateObject8() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject7() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: grey;\\n  font-size: 15px;\\n  font-weight: 300;\\n\"]);\n\n  _templateObject7 = function _templateObject7() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject6() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  margin-top: 0px;\\n  font-size: 22px;\\n  color: #222;\\n  text-transform: capitalize;\\n\"]);\n\n  _templateObject6 = function _templateObject6() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject5() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  color: rgb(0, 207, 180);\\n  font-size: 15px;\\n\"]);\n\n  _templateObject5 = function _templateObject5() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject4() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: text;\\n  margin: 25px;\\n\"]);\n\n  _templateObject4 = function _templateObject4() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject3() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-top-left-radius: 8px;\\n  border-top-right-radius: 8px;\\n  width: 340px;\\n  height: 210px;\\n\"]);\n\n  _templateObject3 = function _templateObject3() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject2() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  grid-area: image;\\n  border-top-left-radius: 8px;\\n  border-top-right-radius: 8px;\\n  background-size: cover;\\n  overflow: hidden;\\n\"]);\n\n  _templateObject2 = function _templateObject2() {\n    return data;\n  };\n\n  return data;\n}\n\nfunction _templateObject() {\n  var data = Object(_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__[\"default\"])([\"\\n  border-radius: 18px;\\n  background: white;\\n  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);\\n  font-family: roboto;\\n  text-align: center;\\n  transition: 0.5s ease;\\n  cursor: pointer;\\n  /* margin: 30px; */\\n  max-width: 290px;\\n  margin: 0 auto;\\n  margin-top: \", \";\\n  &:hover {\\n    transform: scale(1.1);\\n    box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.6);\\n  }\\n\"]);\n\n  _templateObject = function _templateObject() {\n    return data;\n  };\n\n  return data;\n}\n\n\n\nvar StyledWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject(), function (props) {\n  return props.isActive ? \"100px\" : \"30px\";\n});\n_c = StyledWrapper;\nvar ImageWrapper = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject2());\n_c2 = ImageWrapper;\nvar ImgStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].img(_templateObject3());\n_c3 = ImgStyled;\nvar TextStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject4());\n_c4 = TextStyled;\nvar DateInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject5());\n_c5 = DateInfo;\nvar TitleStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].h2(_templateObject6());\n_c6 = TitleStyled;\nvar ContentStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].p(_templateObject7());\n_c7 = ContentStyled;\nvar StatsStyled = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject8());\n_c8 = StatsStyled;\nvar StatInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__[\"default\"].div(_templateObject9());\n_c9 = StatInfo;\n\nvar CardNews = function CardNews(_ref) {\n  var title = _ref.title,\n      content = _ref.content,\n      created = _ref.created,\n      imageNews = _ref.imageNews,\n      isActive = _ref.isActive;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StyledWrapper, {\n    isActive: isActive,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ImageWrapper, {\n      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ImgStyled, {\n        src: imageNews,\n        alt: \"foto\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 89,\n        columnNumber: 7\n      }, _this)\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 88,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(TextStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(DateInfo, {\n        children: created\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 92,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(TitleStyled, {\n        children: title\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 93,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(ContentStyled, {\n        children: content\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 91,\n      columnNumber: 5\n    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatsStyled, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatInfo, {\n        children: \"19.12.2020\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 97,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatInfo, {\n        children: \"01\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 98,\n        columnNumber: 7\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(StatInfo, {\n        children: \"Turnieje\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 7\n      }, _this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 96,\n      columnNumber: 5\n    }, _this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 87,\n    columnNumber: 3\n  }, _this);\n};\n\n_c10 = CardNews;\n/* harmony default export */ __webpack_exports__[\"default\"] = (CardNews);\n\nvar _c, _c2, _c3, _c4, _c5, _c6, _c7, _c8, _c9, _c10;\n\n$RefreshReg$(_c, \"StyledWrapper\");\n$RefreshReg$(_c2, \"ImageWrapper\");\n$RefreshReg$(_c3, \"ImgStyled\");\n$RefreshReg$(_c4, \"TextStyled\");\n$RefreshReg$(_c5, \"DateInfo\");\n$RefreshReg$(_c6, \"TitleStyled\");\n$RefreshReg$(_c7, \"ContentStyled\");\n$RefreshReg$(_c8, \"StatsStyled\");\n$RefreshReg$(_c9, \"StatInfo\");\n$RefreshReg$(_c10, \"CardNews\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9DYXJkTmV3cy5qcz83MjRmIl0sIm5hbWVzIjpbIlN0eWxlZFdyYXBwZXIiLCJzdHlsZWQiLCJkaXYiLCJwcm9wcyIsImlzQWN0aXZlIiwiSW1hZ2VXcmFwcGVyIiwiSW1nU3R5bGVkIiwiaW1nIiwiVGV4dFN0eWxlZCIsIkRhdGVJbmZvIiwiVGl0bGVTdHlsZWQiLCJoMiIsIkNvbnRlbnRTdHlsZWQiLCJwIiwiU3RhdHNTdHlsZWQiLCJTdGF0SW5mbyIsIkNhcmROZXdzIiwidGl0bGUiLCJjb250ZW50IiwiY3JlYXRlZCIsImltYWdlTmV3cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFFQSxJQUFNQSxhQUFhLEdBQUdDLHlEQUFNLENBQUNDLEdBQVYsb0JBV0gsVUFBQ0MsS0FBRDtBQUFBLFNBQVlBLEtBQUssQ0FBQ0MsUUFBTixHQUFpQixPQUFqQixHQUEyQixNQUF2QztBQUFBLENBWEcsQ0FBbkI7S0FBTUosYTtBQWlCTixJQUFNSyxZQUFZLEdBQUdKLHlEQUFNLENBQUNDLEdBQVYsb0JBQWxCO01BQU1HLFk7QUFRTixJQUFNQyxTQUFTLEdBQUdMLHlEQUFNLENBQUNNLEdBQVYsb0JBQWY7TUFBTUQsUztBQU1OLElBQU1FLFVBQVUsR0FBR1AseURBQU0sQ0FBQ0MsR0FBVixvQkFBaEI7TUFBTU0sVTtBQUlOLElBQU1DLFFBQVEsR0FBR1IseURBQU0sQ0FBQ0MsR0FBVixvQkFBZDtNQUFNTyxRO0FBS04sSUFBTUMsV0FBVyxHQUFHVCx5REFBTSxDQUFDVSxFQUFWLG9CQUFqQjtNQUFNRCxXO0FBT04sSUFBTUUsYUFBYSxHQUFHWCx5REFBTSxDQUFDWSxDQUFWLG9CQUFuQjtNQUFNRCxhO0FBTU4sSUFBTUUsV0FBVyxHQUFHYix5REFBTSxDQUFDQyxHQUFWLG9CQUFqQjtNQUFNWSxXO0FBV04sSUFBTUMsUUFBUSxHQUFHZCx5REFBTSxDQUFDQyxHQUFWLG9CQUFkO01BQU1hLFE7O0FBa0JOLElBQU1DLFFBQVEsR0FBRyxTQUFYQSxRQUFXO0FBQUEsTUFBR0MsS0FBSCxRQUFHQSxLQUFIO0FBQUEsTUFBVUMsT0FBVixRQUFVQSxPQUFWO0FBQUEsTUFBbUJDLE9BQW5CLFFBQW1CQSxPQUFuQjtBQUFBLE1BQTRCQyxTQUE1QixRQUE0QkEsU0FBNUI7QUFBQSxNQUF1Q2hCLFFBQXZDLFFBQXVDQSxRQUF2QztBQUFBLHNCQUNmLHFFQUFDLGFBQUQ7QUFBZSxZQUFRLEVBQUVBLFFBQXpCO0FBQUEsNEJBQ0UscUVBQUMsWUFBRDtBQUFBLDZCQUNFLHFFQUFDLFNBQUQ7QUFBVyxXQUFHLEVBQUVnQixTQUFoQjtBQUEyQixXQUFHLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERixlQUlFLHFFQUFDLFVBQUQ7QUFBQSw4QkFDRSxxRUFBQyxRQUFEO0FBQUEsa0JBQVdEO0FBQVg7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGLGVBRUUscUVBQUMsV0FBRDtBQUFBLGtCQUFjRjtBQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFGRixlQUdFLHFFQUFDLGFBQUQ7QUFBQSxrQkFBZ0JDO0FBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFKRixlQVNFLHFFQUFDLFdBQUQ7QUFBQSw4QkFDRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREYsZUFFRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBRkYsZUFHRSxxRUFBQyxRQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFdBRGU7QUFBQSxDQUFqQjs7T0FBTUYsUTtBQWtCU0EsdUVBQWYiLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcmROZXdzLmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCwgeyBjc3MgfSBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcblxuY29uc3QgU3R5bGVkV3JhcHBlciA9IHN0eWxlZC5kaXZgXG4gIGJvcmRlci1yYWRpdXM6IDE4cHg7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3gtc2hhZG93OiA1cHggNXB4IDE1cHggcmdiYSgwLCAwLCAwLCAwLjkpO1xuICBmb250LWZhbWlseTogcm9ib3RvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIHRyYW5zaXRpb246IDAuNXMgZWFzZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICAvKiBtYXJnaW46IDMwcHg7ICovXG4gIG1heC13aWR0aDogMjkwcHg7XG4gIG1hcmdpbjogMCBhdXRvO1xuICBtYXJnaW4tdG9wOiAkeyhwcm9wcykgPT4gKHByb3BzLmlzQWN0aXZlID8gXCIxMDBweFwiIDogXCIzMHB4XCIpfTtcbiAgJjpob3ZlciB7XG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjEpO1xuICAgIGJveC1zaGFkb3c6IDVweCA1cHggMTVweCByZ2JhKDAsIDAsIDAsIDAuNik7XG4gIH1cbmA7XG5jb25zdCBJbWFnZVdyYXBwZXIgPSBzdHlsZWQuZGl2YFxuICBncmlkLWFyZWE6IGltYWdlO1xuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5gO1xuXG5jb25zdCBJbWdTdHlsZWQgPSBzdHlsZWQuaW1nYFxuICBib3JkZXItdG9wLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci10b3AtcmlnaHQtcmFkaXVzOiA4cHg7XG4gIHdpZHRoOiAzNDBweDtcbiAgaGVpZ2h0OiAyMTBweDtcbmA7XG5jb25zdCBUZXh0U3R5bGVkID0gc3R5bGVkLmRpdmBcbiAgZ3JpZC1hcmVhOiB0ZXh0O1xuICBtYXJnaW46IDI1cHg7XG5gO1xuY29uc3QgRGF0ZUluZm8gPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiKDAsIDIwNywgMTgwKTtcbiAgZm9udC1zaXplOiAxNXB4O1xuYDtcblxuY29uc3QgVGl0bGVTdHlsZWQgPSBzdHlsZWQuaDJgXG4gIG1hcmdpbi10b3A6IDBweDtcbiAgZm9udC1zaXplOiAyMnB4O1xuICBjb2xvcjogIzIyMjtcbiAgdGV4dC10cmFuc2Zvcm06IGNhcGl0YWxpemU7XG5gO1xuXG5jb25zdCBDb250ZW50U3R5bGVkID0gc3R5bGVkLnBgXG4gIGNvbG9yOiBncmV5O1xuICBmb250LXNpemU6IDE1cHg7XG4gIGZvbnQtd2VpZ2h0OiAzMDA7XG5gO1xuXG5jb25zdCBTdGF0c1N0eWxlZCA9IHN0eWxlZC5kaXZgXG4gIGdyaWQtYXJlYTogc3RhdHM7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmciAxZnI7XG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyO1xuICBib3JkZXItYm90dG9tLWxlZnQtcmFkaXVzOiA4cHg7XG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMzZmFiYWY7XG4gIGNvbG9yOiAjZjdlZmU1O1xuYDtcblxuY29uc3QgU3RhdEluZm8gPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWFyb3VuZDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcblxuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIHJnYmEoMjQ3LCAyMzksIDIyOSwgMC42KTtcbiAgYm9yZGVyLXJpZ2h0OiAxcHggc29saWQgcmdiYSgyNDcsIDIzOSwgMjI5LCAwLjYpO1xuXG4gICY6bGFzdC1jaGlsZCB7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICB9XG4gICY6Zmlyc3QtY2hpbGQge1xuICAgIGJvcmRlci1sZWZ0OiBub25lO1xuICB9XG5gO1xuXG5jb25zdCBDYXJkTmV3cyA9ICh7IHRpdGxlLCBjb250ZW50LCBjcmVhdGVkLCBpbWFnZU5ld3MsIGlzQWN0aXZlIH0pID0+IChcbiAgPFN0eWxlZFdyYXBwZXIgaXNBY3RpdmU9e2lzQWN0aXZlfT5cbiAgICA8SW1hZ2VXcmFwcGVyPlxuICAgICAgPEltZ1N0eWxlZCBzcmM9e2ltYWdlTmV3c30gYWx0PVwiZm90b1wiIC8+XG4gICAgPC9JbWFnZVdyYXBwZXI+XG4gICAgPFRleHRTdHlsZWQ+XG4gICAgICA8RGF0ZUluZm8+e2NyZWF0ZWR9PC9EYXRlSW5mbz5cbiAgICAgIDxUaXRsZVN0eWxlZD57dGl0bGV9PC9UaXRsZVN0eWxlZD5cbiAgICAgIDxDb250ZW50U3R5bGVkPntjb250ZW50fTwvQ29udGVudFN0eWxlZD5cbiAgICA8L1RleHRTdHlsZWQ+XG4gICAgPFN0YXRzU3R5bGVkPlxuICAgICAgPFN0YXRJbmZvPjE5LjEyLjIwMjA8L1N0YXRJbmZvPlxuICAgICAgPFN0YXRJbmZvPjAxPC9TdGF0SW5mbz5cbiAgICAgIDxTdGF0SW5mbz5UdXJuaWVqZTwvU3RhdEluZm8+XG4gICAgPC9TdGF0c1N0eWxlZD5cbiAgPC9TdHlsZWRXcmFwcGVyPlxuKTtcblxuZXhwb3J0IGRlZmF1bHQgQ2FyZE5ld3M7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/CardNews.js\n");

/***/ })

})