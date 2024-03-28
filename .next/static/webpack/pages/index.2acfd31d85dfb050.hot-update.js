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

/***/ "./src/components/layouts/ASCIIText.jsx":
/*!**********************************************!*\
  !*** ./src/components/layouts/ASCIIText.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction useWindowSize() {\n    _s();\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleResize() {\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        handleResize(); // Initialize size immediately\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return windowSize;\n}\n_s(useWindowSize, \"c4qf3T3ntwaWr7rmXJcJwcTfMJk=\");\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s1();\n    const { width, height } = useWindowSize(); // Use custom hook for window size\n    const MAXIMUM_WIDTH = width * 0.2; // Adjusted for responsiveness\n    const MAXIMUM_HEIGHT = height * 0.1; // Adjusted for responsiveness\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log(MAXIMUM_WIDTH, MAXIMUM_HEIGHT);\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath,\n        MAXIMUM_WIDTH,\n        MAXIMUM_HEIGHT\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n    let isAnimating = false;\n    const changeText = (event)=>{\n        if (isAnimating) return;\n        isAnimating = true;\n        let iterations = 0;\n        const originalText = event.target.dataset.value;\n        const interval = setInterval(()=>{\n            const newText = [];\n            for(let i = 0; i < originalText.length; i++){\n                if (i < iterations) {\n                    newText.push(originalText[i]);\n                } else {\n                    newText.push(originalText[i] === \"\\n\" ? originalText[i] : letters[Math.floor(Math.random() * letters.length)]);\n                }\n            }\n            event.target.innerText = newText.join(\"\");\n            iterations += 250;\n            //iterations += Math.floor(Math.random() * 1000); // Increase this to change more characters at a time\n            if (iterations >= originalText.length) {\n                clearInterval(interval);\n                isAnimating = false;\n            }\n        }, 15); // Decrease this to make it go faster\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 170,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                style: {\n                    textShadow: \"#eab308 1px 0 1px\"\n                },\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 171,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n        lineNumber: 169,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AsciiArtConverter, \"tULWw3ep7djuKJtQomXFLa97Q/o=\", false, function() {\n    return [\n        useWindowSize\n    ];\n});\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO2dCQUNyQ21ELGNBQWNOO2dCQUNkUixjQUFjO1lBQ2hCO1FBQ0YsR0FBRyxLQUFLLHFDQUFxQztJQUMvQztJQUVBLHFCQUNFLDhEQUFDZTtRQUFJQyxXQUFVOzswQkFDYiw4REFBQ3RCO2dCQUFPdUIsS0FBS2pGO2dCQUFXYSxPQUFPO29CQUFFQyxTQUFTO2dCQUFPOzs7Ozs7MEJBQ2pELDhEQUFDSjtnQkFDQ3dFLGFBQWFqQjtnQkFDYmUsV0FBVTtnQkFDVm5FLE9BQU87b0JBQUVzRSxZQUFZO2dCQUFvQjtnQkFDekNDLGNBQVluRjswQkFFWEE7Ozs7Ozs7Ozs7OztBQUlUO0lBN0pNTDs7UUFFc0JaOzs7S0FGdEJZO0FBK0pOLCtEQUFlQSxpQkFBaUJBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvbGF5b3V0cy9BU0NJSVRleHQuanN4P2I0NWMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIHVzZVJlZiB9IGZyb20gJ3JlYWN0JztcclxuXHJcbmZ1bmN0aW9uIHVzZVdpbmRvd1NpemUoKSB7XHJcbiAgY29uc3QgW3dpbmRvd1NpemUsIHNldFdpbmRvd1NpemVdID0gdXNlU3RhdGUoe1xyXG4gICAgd2lkdGg6IHVuZGVmaW5lZCxcclxuICAgIGhlaWdodDogdW5kZWZpbmVkLFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBJbml0aWFsaXplIHNpemUgaW1tZWRpYXRlbHlcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuXHJcbmNvbnN0IEFzY2lpQXJ0Q29udmVydGVyID0gKHsgaW1hZ2VQYXRoIH0pID0+IHtcclxuXHJcbiAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSB1c2VXaW5kb3dTaXplKCk7IC8vIFVzZSBjdXN0b20gaG9vayBmb3Igd2luZG93IHNpemVcclxuICBjb25zdCBNQVhJTVVNX1dJRFRIID0gd2lkdGggKiAwLjI7IC8vIEFkanVzdGVkIGZvciByZXNwb25zaXZlbmVzc1xyXG4gIGNvbnN0IE1BWElNVU1fSEVJR0hUID0gaGVpZ2h0ICogMC4xOyAvLyBBZGp1c3RlZCBmb3IgcmVzcG9uc2l2ZW5lc3NcclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XHJcbiAgY29uc3QgW2FzY2lpQXJ0LCBzZXRBc2NpaUFydF0gPSB1c2VTdGF0ZSgnJyk7XHJcbiAgY29uc29sZS5sb2coTUFYSU1VTV9XSURUSCwgTUFYSU1VTV9IRUlHSFQpXHJcblxyXG4gIGNvbnN0IHRvR3JheVNjYWxlID0gKHIsIGcsIGIpID0+IDAuMjEgKiByICsgMC43MiAqIGcgKyAwLjA3ICogYjtcclxuXHJcbiAgY29uc3QgZ2V0Rm9udFJhdGlvID0gKCkgPT4ge1xyXG4gICAgY29uc3QgcHJlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncHJlJyk7XHJcbiAgICBwcmUuc3R5bGUuZGlzcGxheSA9ICdpbmxpbmUnO1xyXG4gICAgcHJlLnRleHRDb250ZW50ID0gJyAnO1xyXG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcmUpO1xyXG4gICAgY29uc3QgeyB3aWR0aCwgaGVpZ2h0IH0gPSBwcmUuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHByZSk7XHJcbiAgICByZXR1cm4gaGVpZ2h0IC8gd2lkdGg7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY29udmVydFRvR3JheVNjYWxlcyA9IChjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCBpbWFnZURhdGEgPSBjb250ZXh0LmdldEltYWdlRGF0YSgwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgIGNvbnN0IGdyYXlTY2FsZXMgPSBbXTtcclxuXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGltYWdlRGF0YS5kYXRhLmxlbmd0aDsgaSArPSA0KSB7XHJcbiAgICAgIGNvbnN0IHIgPSBpbWFnZURhdGEuZGF0YVtpXTtcclxuICAgICAgY29uc3QgZyA9IGltYWdlRGF0YS5kYXRhW2kgKyAxXTtcclxuICAgICAgY29uc3QgYiA9IGltYWdlRGF0YS5kYXRhW2kgKyAyXTtcclxuICAgICAgY29uc3QgZ3JheVNjYWxlID0gdG9HcmF5U2NhbGUociwgZywgYik7XHJcbiAgICAgIGltYWdlRGF0YS5kYXRhW2ldID1cclxuICAgICAgICBpbWFnZURhdGEuZGF0YVtpICsgMV0gPVxyXG4gICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAyXSA9XHJcbiAgICAgICAgZ3JheVNjYWxlO1xyXG4gICAgICBncmF5U2NhbGVzLnB1c2goZ3JheVNjYWxlKTtcclxuICAgIH1cclxuXHJcbiAgICBjb250ZXh0LnB1dEltYWdlRGF0YShpbWFnZURhdGEsIDAsIDApO1xyXG4gICAgcmV0dXJuIGdyYXlTY2FsZXM7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgY2xhbXBEaW1lbnNpb25zID0gKHdpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IHJhdGlvID0gZ2V0Rm9udFJhdGlvKCk7XHJcbiAgICBjb25zdCByZWN0aWZpZWRXaWR0aCA9IE1hdGguZmxvb3IocmF0aW8gKiB3aWR0aCk7XHJcblxyXG4gICAgaWYgKGhlaWdodCA+IE1BWElNVU1fSEVJR0hUKSB7XHJcbiAgICAgIGNvbnN0IHJlZHVjZWRXaWR0aCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKHJlY3RpZmllZFdpZHRoICogTUFYSU1VTV9IRUlHSFQpIC8gaGVpZ2h0XHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBbcmVkdWNlZFdpZHRoLCBNQVhJTVVNX0hFSUdIVF07XHJcbiAgICB9XHJcbiAgICBpZiAod2lkdGggPiBNQVhJTVVNX1dJRFRIKSB7XHJcbiAgICAgIGNvbnN0IHJlZHVjZWRIZWlnaHQgPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChoZWlnaHQgKiBNQVhJTVVNX1dJRFRIKSAvIHJlY3RpZmllZFdpZHRoXHJcbiAgICAgICk7XHJcbiAgICAgIHJldHVybiBbTUFYSU1VTV9XSURUSCwgcmVkdWNlZEhlaWdodF07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gW3JlY3RpZmllZFdpZHRoLCBoZWlnaHRdO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGdldENoYXJhY3RlckZvckdyYXlTY2FsZSA9IChncmF5U2NhbGUpID0+IHtcclxuICAgIGNvbnN0IGdyYXlSYW1wID1cclxuICAgICAgJyRAQiU4JldNIypvYWhrYmRwcXdtWk8wUUxDSlVZWHpjdnVueHJqZnQvfCgpMXt9W10/LV8rfjw+aSFsSTs6LFwiXmBcXCcuICc7XHJcbiAgICBjb25zdCByYW1wTGVuZ3RoID0gZ3JheVJhbXAubGVuZ3RoO1xyXG4gICAgcmV0dXJuIGdyYXlSYW1wW01hdGguY2VpbCgoKHJhbXBMZW5ndGggLSAxKSAqIGdyYXlTY2FsZSkgLyAyNTUpXTtcclxuICB9O1xyXG5cclxuICBjb25zdCBkcmF3QXNjaWkgPSAoZ3JheVNjYWxlcywgd2lkdGgpID0+IHtcclxuICAgIGNvbnN0IGFzY2lpSW1hZ2UgPSBncmF5U2NhbGVzLnJlZHVjZSgoYXNjaWlJbWFnZSwgZ3JheVNjYWxlLCBpbmRleCkgPT4ge1xyXG4gICAgICBsZXQgbmV4dENoYXJzID0gZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlKGdyYXlTY2FsZSk7XHJcbiAgICAgIGlmICgoaW5kZXggKyAxKSAlIHdpZHRoID09PSAwKSB7XHJcbiAgICAgICAgbmV4dENoYXJzICs9ICdcXG4nO1xyXG4gICAgICB9XHJcbiAgICAgIHJldHVybiBhc2NpaUltYWdlICsgbmV4dENoYXJzO1xyXG4gICAgfSwgJycpO1xyXG5cclxuICAgIHNldEFzY2lpQXJ0KGFzY2lpSW1hZ2UpO1xyXG4gIH07XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoIWltYWdlUGF0aCkgcmV0dXJuO1xyXG5cclxuICAgIGNvbnN0IGxvYWRJbWFnZSA9IChzcmMpID0+IHtcclxuICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgIGltYWdlLm9ubG9hZCA9ICgpID0+IHJlc29sdmUoaW1hZ2UpO1xyXG4gICAgICAgIGltYWdlLm9uZXJyb3IgPSAoZSkgPT4gcmVqZWN0KGUpO1xyXG4gICAgICAgIGltYWdlLnNyYyA9IHNyYztcclxuICAgICAgfSk7XHJcbiAgICB9O1xyXG5cclxuICAgIGNvbnN0IHByb2Nlc3NJbWFnZSA9IGFzeW5jICgpID0+IHtcclxuICAgICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XHJcbiAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBhd2FpdCBsb2FkSW1hZ2UoaW1hZ2VQYXRoKTtcclxuICAgICAgICBjb25zdCBbd2lkdGgsIGhlaWdodF0gPSBjbGFtcERpbWVuc2lvbnMoaW1hZ2Uud2lkdGgsIGltYWdlLmhlaWdodCk7XHJcblxyXG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xyXG4gICAgICAgIGNhbnZhcy5oZWlnaHQgPSBoZWlnaHQ7XHJcbiAgICAgICAgY29udGV4dC5kcmF3SW1hZ2UoaW1hZ2UsIDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgICAgIGNvbnN0IGdyYXlTY2FsZXMgPSBjb252ZXJ0VG9HcmF5U2NhbGVzKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpO1xyXG5cclxuICAgICAgICBkcmF3QXNjaWkoZ3JheVNjYWxlcywgd2lkdGgpO1xyXG4gICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignRmFpbGVkIHRvIGxvYWQgaW1hZ2U6JywgZSk7XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgcHJvY2Vzc0ltYWdlKCk7XHJcbiAgfSwgW2ltYWdlUGF0aCwgTUFYSU1VTV9XSURUSCwgTUFYSU1VTV9IRUlHSFRdKTsgLy8gRWZmZWN0IHJ1bnMgd2hlbmV2ZXIgaW1hZ2VQYXRoIGNoYW5nZXNcclxuXHJcbiAgY29uc3QgbGV0dGVycyA9ICckQEIlOCZXTSMqb2Foa2JkcHF3bVpPMFFMQ0pVWVh6Y3Z1bnhyamZ0L3woKTF7fVtdPy1fK348PmkhbEk7OixcIl5gXFwnLiAnO1xyXG4gIGxldCBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gIGNvbnN0IGNoYW5nZVRleHQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChpc0FuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgaXNBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWU7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3VGV4dCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWdpbmFsVGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpIDwgaXRlcmF0aW9ucykge1xyXG4gICAgICAgICAgbmV3VGV4dC5wdXNoKG9yaWdpbmFsVGV4dFtpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1RleHQucHVzaChcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0W2ldID09PSAnXFxuJ1xyXG4gICAgICAgICAgICAgID8gb3JpZ2luYWxUZXh0W2ldXHJcbiAgICAgICAgICAgICAgOiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gbmV3VGV4dC5qb2luKCcnKTtcclxuICAgICAgaXRlcmF0aW9ucyArPSAyNTA7XHJcbiAgICAgIC8vaXRlcmF0aW9ucyArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTsgLy8gSW5jcmVhc2UgdGhpcyB0byBjaGFuZ2UgbW9yZSBjaGFyYWN0ZXJzIGF0IGEgdGltZVxyXG4gICAgICBpZiAoaXRlcmF0aW9ucyA+PSBvcmlnaW5hbFRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMTUpOyAvLyBEZWNyZWFzZSB0aGlzIHRvIG1ha2UgaXQgZ28gZmFzdGVyXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bM3B4XVwiPlxyXG4gICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9jYW52YXM+XHJcbiAgICAgIDxwcmVcclxuICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH1cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcclxuICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnI2VhYjMwOCAxcHggMCAxcHgnIH19XHJcbiAgICAgICAgZGF0YS12YWx1ZT17YXNjaWlBcnR9XHJcbiAgICAgID5cclxuICAgICAgICB7YXNjaWlBcnR9XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzY2lpQXJ0Q29udmVydGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVdpbmRvd1NpemUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBc2NpaUFydENvbnZlcnRlciIsImltYWdlUGF0aCIsIk1BWElNVU1fV0lEVEgiLCJNQVhJTVVNX0hFSUdIVCIsImNhbnZhc1JlZiIsImFzY2lpQXJ0Iiwic2V0QXNjaWlBcnQiLCJjb25zb2xlIiwibG9nIiwidG9HcmF5U2NhbGUiLCJyIiwiZyIsImIiLCJnZXRGb250UmF0aW8iLCJwcmUiLCJkb2N1bWVudCIsImNyZWF0ZUVsZW1lbnQiLCJzdHlsZSIsImRpc3BsYXkiLCJ0ZXh0Q29udGVudCIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInJlbW92ZUNoaWxkIiwiY29udmVydFRvR3JheVNjYWxlcyIsImNvbnRleHQiLCJpbWFnZURhdGEiLCJnZXRJbWFnZURhdGEiLCJncmF5U2NhbGVzIiwiaSIsImRhdGEiLCJsZW5ndGgiLCJncmF5U2NhbGUiLCJwdXNoIiwicHV0SW1hZ2VEYXRhIiwiY2xhbXBEaW1lbnNpb25zIiwicmF0aW8iLCJyZWN0aWZpZWRXaWR0aCIsIk1hdGgiLCJmbG9vciIsInJlZHVjZWRXaWR0aCIsInJlZHVjZWRIZWlnaHQiLCJnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUiLCJncmF5UmFtcCIsInJhbXBMZW5ndGgiLCJjZWlsIiwiZHJhd0FzY2lpIiwiYXNjaWlJbWFnZSIsInJlZHVjZSIsImluZGV4IiwibmV4dENoYXJzIiwibG9hZEltYWdlIiwic3JjIiwiUHJvbWlzZSIsInJlc29sdmUiLCJyZWplY3QiLCJpbWFnZSIsIkltYWdlIiwib25sb2FkIiwib25lcnJvciIsImUiLCJwcm9jZXNzSW1hZ2UiLCJjYW52YXMiLCJjdXJyZW50IiwiZ2V0Q29udGV4dCIsImRyYXdJbWFnZSIsImVycm9yIiwibGV0dGVycyIsImlzQW5pbWF0aW5nIiwiY2hhbmdlVGV4dCIsImV2ZW50IiwiaXRlcmF0aW9ucyIsIm9yaWdpbmFsVGV4dCIsInRhcmdldCIsImRhdGFzZXQiLCJ2YWx1ZSIsImludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJuZXdUZXh0IiwicmFuZG9tIiwiaW5uZXJUZXh0Iiwiam9pbiIsImNsZWFySW50ZXJ2YWwiLCJkaXYiLCJjbGFzc05hbWUiLCJyZWYiLCJvbk1vdXNlT3ZlciIsInRleHRTaGFkb3ciLCJkYXRhLXZhbHVlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/layouts/ASCIIText.jsx\n"));

/***/ })

});