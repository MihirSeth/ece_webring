"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/components/layouts/Image.jsx":
/*!******************************************!*\
  !*** ./src/components/layouts/Image.jsx ***!
  \******************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/context/MemberContext */ \"./src/context/MemberContext.jsx\");\n/* harmony import */ var _ASCIIText__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./ASCIIText */ \"./src/components/layouts/ASCIIText.jsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst Image = ()=>{\n    _s();\n    const { memberItem } = (0,_context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.useMember)();\n    let firstName = memberItem.name.split(\" \")[0].toLowerCase();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex flex-col items-center gap-4 px-4 pt-4 font-mono text-white border-2 border-dotted rounded-lg outline outline-2 outline-offset-8 outline-stone-500 outline-dashed border-stone-600\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"px-4 pb-8 space-y-6\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ASCIIText__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                    imagePath: \"/people/\".concat(firstName, \".png\")\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, undefined),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            className: \"font-bold\",\n                            children: [\n                                memberItem.name,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 15,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: memberItem.cohort\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 16,\n                            columnNumber: 11\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                memberItem.year,\n                                \" \"\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 17,\n                            columnNumber: 11\n                        }, undefined),\n                        memberItem.legacy ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                            children: [\n                                \"Legacy status:\\xa0\",\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                    className: \"text-yellow-700\",\n                                    children: memberItem.status\n                                }, void 0, false, {\n                                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                                    lineNumber: 20,\n                                    columnNumber: 15\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 13\n                        }, undefined) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {}, void 0, false),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"a\", {\n                            href: memberItem.siteURL,\n                            target: \"_blank\",\n                            className: \"font-mono text-white hover:text-stone-300 truncate\",\n                            children: memberItem.siteURL\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, undefined)\n                    ]\n                }, void 0, true, {\n                    fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n                    lineNumber: 14,\n                    columnNumber: 9\n                }, undefined)\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n            lineNumber: 12,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\Image.jsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, undefined);\n};\n_s(Image, \"if9jYxFAbzV9nVP+ddDHt/YPbXA=\", false, function() {\n    return [\n        _context_MemberContext__WEBPACK_IMPORTED_MODULE_2__.useMember\n    ];\n});\n_c = Image;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Image);\nvar _c;\n$RefreshReg$(_c, \"Image\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0ltYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBeUI7QUFDa0I7QUFDUztBQUNSO0FBRTVDLE1BQU1LLFFBQVE7O0lBQ1osTUFBTSxFQUFFQyxVQUFVLEVBQUUsR0FBR0gsaUVBQVNBO0lBQ2hDLElBQUlJLFlBQVlELFdBQVdFLElBQUksQ0FBQ0MsS0FBSyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUNDLFdBQVc7SUFFekQscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2IsNEVBQUNEO1lBQUlDLFdBQVU7OzhCQUNiLDhEQUFDUixrREFBaUJBO29CQUFDUyxXQUFXLFdBQXFCLE9BQVZOLFdBQVU7Ozs7Ozs4QkFDbkQsOERBQUNJO29CQUFJQyxXQUFVOztzQ0FDYiw4REFBQ0U7NEJBQUVGLFdBQVU7O2dDQUFhTixXQUFXRSxJQUFJO2dDQUFDOzs7Ozs7O3NDQUMxQyw4REFBQ007c0NBQUdSLFdBQVdTLE1BQU07Ozs7OztzQ0FDckIsOERBQUNEOztnQ0FBR1IsV0FBV1UsSUFBSTtnQ0FBQzs7Ozs7Ozt3QkFDbkJWLFdBQVdXLE1BQU0saUJBQ2hCLDhEQUFDSDs7Z0NBQUU7OENBQ0QsOERBQUNJO29DQUFLTixXQUFVOzhDQUFtQk4sV0FBV2EsTUFBTTs7Ozs7Ozs7Ozs7c0RBRXBEO3NDQUVKLDhEQUFDQzs0QkFBRUMsTUFBTWYsV0FBV2dCLE9BQU87NEJBQUVDLFFBQU87NEJBQVNYLFdBQVU7c0NBQXNETixXQUFXZ0IsT0FBTzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNekk7R0F4Qk1qQjs7UUFDbUJGLDZEQUFTQTs7O0tBRDVCRTtBQXlCTiwrREFBZUEsS0FBS0EsRUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0ltYWdlLmpzeD81ZGNkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcclxuaW1wb3J0IHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gJ3JlYWN0J1xyXG5pbXBvcnQgeyB1c2VNZW1iZXIgfSBmcm9tICdAL2NvbnRleHQvTWVtYmVyQ29udGV4dCc7XHJcbmltcG9ydCBBc2NpaUFydENvbnZlcnRlciBmcm9tICcuL0FTQ0lJVGV4dCc7XHJcblxyXG5jb25zdCBJbWFnZSA9ICgpID0+IHtcclxuICBjb25zdCB7IG1lbWJlckl0ZW0gfSA9IHVzZU1lbWJlcigpO1xyXG4gIGxldCBmaXJzdE5hbWUgPSBtZW1iZXJJdGVtLm5hbWUuc3BsaXQoJyAnKVswXS50b0xvd2VyQ2FzZSgpXHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyIGdhcC00IHB4LTQgcHQtNCBmb250LW1vbm8gdGV4dC13aGl0ZSBib3JkZXItMiBib3JkZXItZG90dGVkIHJvdW5kZWQtbGcgb3V0bGluZSBvdXRsaW5lLTIgb3V0bGluZS1vZmZzZXQtOCBvdXRsaW5lLXN0b25lLTUwMCBvdXRsaW5lLWRhc2hlZCBib3JkZXItc3RvbmUtNjAwXCI+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPSdweC00IHBiLTggc3BhY2UteS02Jz5cclxuICAgICAgICA8QXNjaWlBcnRDb252ZXJ0ZXIgaW1hZ2VQYXRoPXtgL3Blb3BsZS8ke2ZpcnN0TmFtZX0ucG5nYH0gLz5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0nJz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZvbnQtYm9sZFwiPnttZW1iZXJJdGVtLm5hbWV9IDwvcD5cclxuICAgICAgICAgIDxwPnttZW1iZXJJdGVtLmNvaG9ydH08L3A+XHJcbiAgICAgICAgICA8cD57bWVtYmVySXRlbS55ZWFyfSA8L3A+XHJcbiAgICAgICAgICB7bWVtYmVySXRlbS5sZWdhY3kgP1xyXG4gICAgICAgICAgICA8cD5MZWdhY3kgc3RhdHVzOiZuYnNwO1xyXG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRleHQteWVsbG93LTcwMFwiPnttZW1iZXJJdGVtLnN0YXR1c308L3NwYW4+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgOiA8PjwvPlxyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgPGEgaHJlZj17bWVtYmVySXRlbS5zaXRlVVJMfSB0YXJnZXQ9XCJfYmxhbmtcIiBjbGFzc05hbWU9XCJmb250LW1vbm8gdGV4dC13aGl0ZSBob3Zlcjp0ZXh0LXN0b25lLTMwMCB0cnVuY2F0ZVwiPnttZW1iZXJJdGVtLnNpdGVVUkx9PC9hPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiA8aW1nIHNyYz17YC9wZW9wbGUvJHtmaXJzdE5hbWV9LmpwZ2B9IGFsdD17Jyd9PjwvaW1nPiAqL31cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgSW1hZ2VcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJ1c2VNZW1iZXIiLCJBc2NpaUFydENvbnZlcnRlciIsIkltYWdlIiwibWVtYmVySXRlbSIsImZpcnN0TmFtZSIsIm5hbWUiLCJzcGxpdCIsInRvTG93ZXJDYXNlIiwiZGl2IiwiY2xhc3NOYW1lIiwiaW1hZ2VQYXRoIiwicCIsImNvaG9ydCIsInllYXIiLCJsZWdhY3kiLCJzcGFuIiwic3RhdHVzIiwiYSIsImhyZWYiLCJzaXRlVVJMIiwidGFyZ2V0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layouts/Image.jsx\n"));

/***/ })

});