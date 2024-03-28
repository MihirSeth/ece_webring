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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction useWindowSize() {\n    _s();\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: window.innerWidth,\n        height: window.innerHeight\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        function handleResize() {\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        window.addEventListener(\"resize\", handleResize);\n        handleResize(); // Initialize size immediately\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []);\n    return windowSize;\n}\n_s(useWindowSize, \"BicH+wOp3ArG+krXTdh1X7jq7PU=\");\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s1();\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    });\n    const { width, height } = useWindowSize(); // Use custom hook for window size\n    const MAXIMUM_WIDTH = width - 722; // Adjusted for responsiveness\n    const MAXIMUM_HEIGHT = height - 462; // Adjusted for responsiveness\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath,\n        MAXIMUM_WIDTH,\n        MAXIMUM_HEIGHT\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n    let isAnimating = false;\n    const changeText = (event)=>{\n        if (isAnimating) return;\n        isAnimating = true;\n        let iterations = 0;\n        const originalText = event.target.dataset.value;\n        const interval = setInterval(()=>{\n            const newText = [];\n            for(let i = 0; i < originalText.length; i++){\n                if (i < iterations) {\n                    newText.push(originalText[i]);\n                } else {\n                    newText.push(originalText[i] === \"\\n\" ? originalText[i] : letters[Math.floor(Math.random() * letters.length)]);\n                }\n            }\n            event.target.innerText = newText.join(\"\");\n            iterations += 250;\n            //iterations += Math.floor(Math.random() * 1000); // Increase this to change more characters at a time\n            if (iterations >= originalText.length) {\n                clearInterval(interval);\n                isAnimating = false;\n            }\n        }, 15); // Decrease this to make it go faster\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 174,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                style: {\n                    textShadow: \"#eab308 1px 0 1px\"\n                },\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 175,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n        lineNumber: 173,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AsciiArtConverter, \"mzmhmMTANxNuiKk822SH1bzD1fA=\", false, function() {\n    return [\n        useWindowSize\n    ];\n});\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RyxJQUFJLENBQUM7WUFDdENWLGNBQWM7WUFDZCxzR0FBc0c7WUFDdEcsSUFBSUEsY0FBY0MsYUFBYTFDLE1BQU0sRUFBRTtnQkFDckNvRCxjQUFjTjtnQkFDZFIsY0FBYztZQUNoQjtRQUNGLEdBQUcsS0FBSyxxQ0FBcUM7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN2QjtnQkFBT3dCLEtBQUtoRjtnQkFBV1csT0FBTztvQkFBRUMsU0FBUztnQkFBTzs7Ozs7OzBCQUNqRCw4REFBQ0o7Z0JBQ0N5RSxhQUFhakI7Z0JBQ2JlLFdBQVU7Z0JBQ1ZwRSxPQUFPO29CQUFFdUUsWUFBWTtnQkFBb0I7Z0JBQ3pDQyxjQUFZbEY7MEJBRVhBOzs7Ozs7Ozs7Ozs7QUFJVDtJQWpLTU47O1FBTXNCWDs7O0tBTnRCVztBQW1LTiwrREFBZUEsaUJBQWlCQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL2xheW91dHMvQVNDSUlUZXh0LmpzeD9iNDVjIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0LCB1c2VSZWYgfSBmcm9tICdyZWFjdCc7XHJcblxyXG5mdW5jdGlvbiB1c2VXaW5kb3dTaXplKCkge1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgIGhlaWdodDogd2luZG93LmlubmVySGVpZ2h0LFxyXG4gIH0pO1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgZnVuY3Rpb24gaGFuZGxlUmVzaXplKCkge1xyXG4gICAgICBzZXRXaW5kb3dTaXplKHtcclxuICAgICAgICB3aWR0aDogd2luZG93LmlubmVyV2lkdGgsXHJcbiAgICAgICAgaGVpZ2h0OiB3aW5kb3cuaW5uZXJIZWlnaHQsXHJcbiAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgIGhhbmRsZVJlc2l6ZSgpOyAvLyBJbml0aWFsaXplIHNpemUgaW1tZWRpYXRlbHlcclxuICAgIHJldHVybiAoKSA9PiB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInJlc2l6ZVwiLCBoYW5kbGVSZXNpemUpO1xyXG4gIH0sIFtdKTtcclxuXHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuXHJcbmNvbnN0IEFzY2lpQXJ0Q29udmVydGVyID0gKHsgaW1hZ2VQYXRoIH0pID0+IHtcclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB3aWR0aDogdW5kZWZpbmVkLFxyXG4gICAgaGVpZ2h0OiB1bmRlZmluZWQsXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IHsgd2lkdGgsIGhlaWdodCB9ID0gdXNlV2luZG93U2l6ZSgpOyAvLyBVc2UgY3VzdG9tIGhvb2sgZm9yIHdpbmRvdyBzaXplXHJcbiAgY29uc3QgTUFYSU1VTV9XSURUSCA9IHdpZHRoIC0gNzIyOyAvLyBBZGp1c3RlZCBmb3IgcmVzcG9uc2l2ZW5lc3NcclxuICBjb25zdCBNQVhJTVVNX0hFSUdIVCA9IGhlaWdodCAtIDQ2MjsgLy8gQWRqdXN0ZWQgZm9yIHJlc3BvbnNpdmVuZXNzXHJcbiAgY29uc3QgY2FudmFzUmVmID0gdXNlUmVmKG51bGwpO1xyXG4gIGNvbnN0IFthc2NpaUFydCwgc2V0QXNjaWlBcnRdID0gdXNlU3RhdGUoJycpO1xyXG5cclxuXHJcbiAgY29uc3QgdG9HcmF5U2NhbGUgPSAociwgZywgYikgPT4gMC4yMSAqIHIgKyAwLjcyICogZyArIDAuMDcgKiBiO1xyXG5cclxuICBjb25zdCBnZXRGb250UmF0aW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIHByZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICBwcmUudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZSk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHByZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocHJlKTtcclxuICAgIHJldHVybiBoZWlnaHQgLyB3aWR0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb252ZXJ0VG9HcmF5U2NhbGVzID0gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgZ3JheVNjYWxlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgY29uc3QgciA9IGltYWdlRGF0YS5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBnID0gaW1hZ2VEYXRhLmRhdGFbaSArIDFdO1xyXG4gICAgICBjb25zdCBiID0gaW1hZ2VEYXRhLmRhdGFbaSArIDJdO1xyXG4gICAgICBjb25zdCBncmF5U2NhbGUgPSB0b0dyYXlTY2FsZShyLCBnLCBiKTtcclxuICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPVxyXG4gICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSA9XHJcbiAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdID1cclxuICAgICAgICBncmF5U2NhbGU7XHJcbiAgICAgIGdyYXlTY2FsZXMucHVzaChncmF5U2NhbGUpO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnRleHQucHV0SW1hZ2VEYXRhKGltYWdlRGF0YSwgMCwgMCk7XHJcbiAgICByZXR1cm4gZ3JheVNjYWxlcztcclxuICB9O1xyXG5cclxuICBjb25zdCBjbGFtcERpbWVuc2lvbnMgPSAod2lkdGgsIGhlaWdodCkgPT4ge1xyXG4gICAgY29uc3QgcmF0aW8gPSBnZXRGb250UmF0aW8oKTtcclxuICAgIGNvbnN0IHJlY3RpZmllZFdpZHRoID0gTWF0aC5mbG9vcihyYXRpbyAqIHdpZHRoKTtcclxuXHJcbiAgICBpZiAoaGVpZ2h0ID4gTUFYSU1VTV9IRUlHSFQpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZFdpZHRoID0gTWF0aC5mbG9vcihcclxuICAgICAgICAocmVjdGlmaWVkV2lkdGggKiBNQVhJTVVNX0hFSUdIVCkgLyBoZWlnaHRcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFtyZWR1Y2VkV2lkdGgsIE1BWElNVU1fSEVJR0hUXTtcclxuICAgIH1cclxuICAgIGlmICh3aWR0aCA+IE1BWElNVU1fV0lEVEgpIHtcclxuICAgICAgY29uc3QgcmVkdWNlZEhlaWdodCA9IE1hdGguZmxvb3IoXHJcbiAgICAgICAgKGhlaWdodCAqIE1BWElNVU1fV0lEVEgpIC8gcmVjdGlmaWVkV2lkdGhcclxuICAgICAgKTtcclxuICAgICAgcmV0dXJuIFtNQVhJTVVNX1dJRFRILCByZWR1Y2VkSGVpZ2h0XTtcclxuICAgIH1cclxuICAgIHJldHVybiBbcmVjdGlmaWVkV2lkdGgsIGhlaWdodF07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlID0gKGdyYXlTY2FsZSkgPT4ge1xyXG4gICAgY29uc3QgZ3JheVJhbXAgPVxyXG4gICAgICAnJEBCJTgmV00jKm9haGtiZHBxd21aTzBRTENKVVlYemN2dW54cmpmdC98KCkxe31bXT8tXyt+PD5pIWxJOzosXCJeYFxcJy4gJztcclxuICAgIGNvbnN0IHJhbXBMZW5ndGggPSBncmF5UmFtcC5sZW5ndGg7XHJcbiAgICByZXR1cm4gZ3JheVJhbXBbTWF0aC5jZWlsKCgocmFtcExlbmd0aCAtIDEpICogZ3JheVNjYWxlKSAvIDI1NSldO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGRyYXdBc2NpaSA9IChncmF5U2NhbGVzLCB3aWR0aCkgPT4ge1xyXG4gICAgY29uc3QgYXNjaWlJbWFnZSA9IGdyYXlTY2FsZXMucmVkdWNlKChhc2NpaUltYWdlLCBncmF5U2NhbGUsIGluZGV4KSA9PiB7XHJcbiAgICAgIGxldCBuZXh0Q2hhcnMgPSBnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUoZ3JheVNjYWxlKTtcclxuICAgICAgaWYgKChpbmRleCArIDEpICUgd2lkdGggPT09IDApIHtcclxuICAgICAgICBuZXh0Q2hhcnMgKz0gJ1xcbic7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIGFzY2lpSW1hZ2UgKyBuZXh0Q2hhcnM7XHJcbiAgICB9LCAnJyk7XHJcblxyXG4gICAgc2V0QXNjaWlBcnQoYXNjaWlJbWFnZSk7XHJcbiAgfTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmICghaW1hZ2VQYXRoKSByZXR1cm47XHJcblxyXG4gICAgY29uc3QgbG9hZEltYWdlID0gKHNyYykgPT4ge1xyXG4gICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gbmV3IEltYWdlKCk7XHJcbiAgICAgICAgaW1hZ2Uub25sb2FkID0gKCkgPT4gcmVzb2x2ZShpbWFnZSk7XHJcbiAgICAgICAgaW1hZ2Uub25lcnJvciA9IChlKSA9PiByZWplY3QoZSk7XHJcbiAgICAgICAgaW1hZ2Uuc3JjID0gc3JjO1xyXG4gICAgICB9KTtcclxuICAgIH07XHJcblxyXG4gICAgY29uc3QgcHJvY2Vzc0ltYWdlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBpbWFnZSA9IGF3YWl0IGxvYWRJbWFnZShpbWFnZVBhdGgpO1xyXG4gICAgICAgIGNvbnN0IFt3aWR0aCwgaGVpZ2h0XSA9IGNsYW1wRGltZW5zaW9ucyhpbWFnZS53aWR0aCwgaW1hZ2UuaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgY2FudmFzLndpZHRoID0gd2lkdGg7XHJcbiAgICAgICAgY2FudmFzLmhlaWdodCA9IGhlaWdodDtcclxuICAgICAgICBjb250ZXh0LmRyYXdJbWFnZShpbWFnZSwgMCwgMCwgd2lkdGgsIGhlaWdodCk7XHJcbiAgICAgICAgY29uc3QgZ3JheVNjYWxlcyA9IGNvbnZlcnRUb0dyYXlTY2FsZXMoY29udGV4dCwgd2lkdGgsIGhlaWdodCk7XHJcblxyXG4gICAgICAgIGRyYXdBc2NpaShncmF5U2NhbGVzLCB3aWR0aCk7XHJcbiAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdGYWlsZWQgdG8gbG9hZCBpbWFnZTonLCBlKTtcclxuICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcm9jZXNzSW1hZ2UoKTtcclxuICB9LCBbaW1hZ2VQYXRoLCBNQVhJTVVNX1dJRFRILCBNQVhJTVVNX0hFSUdIVF0pOyAvLyBFZmZlY3QgcnVucyB3aGVuZXZlciBpbWFnZVBhdGggY2hhbmdlc1xyXG5cclxuICBjb25zdCBsZXR0ZXJzID0gJyRAQiU4JldNIypvYWhrYmRwcXdtWk8wUUxDSlVZWHpjdnVueHJqZnQvfCgpMXt9W10/LV8rfjw+aSFsSTs6LFwiXmBcXCcuICc7XHJcbiAgbGV0IGlzQW5pbWF0aW5nID0gZmFsc2U7XHJcbiAgY29uc3QgY2hhbmdlVGV4dCA9IChldmVudCkgPT4ge1xyXG4gICAgaWYgKGlzQW5pbWF0aW5nKSByZXR1cm47XHJcbiAgICBpc0FuaW1hdGluZyA9IHRydWU7XHJcbiAgICBsZXQgaXRlcmF0aW9ucyA9IDA7XHJcbiAgICBjb25zdCBvcmlnaW5hbFRleHQgPSBldmVudC50YXJnZXQuZGF0YXNldC52YWx1ZTtcclxuICAgIGNvbnN0IGludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICBjb25zdCBuZXdUZXh0ID0gW107XHJcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3JpZ2luYWxUZXh0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGkgPCBpdGVyYXRpb25zKSB7XHJcbiAgICAgICAgICBuZXdUZXh0LnB1c2gob3JpZ2luYWxUZXh0W2ldKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgbmV3VGV4dC5wdXNoKFxyXG4gICAgICAgICAgICBvcmlnaW5hbFRleHRbaV0gPT09ICdcXG4nXHJcbiAgICAgICAgICAgICAgPyBvcmlnaW5hbFRleHRbaV1cclxuICAgICAgICAgICAgICA6IGxldHRlcnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGV0dGVycy5sZW5ndGgpXVxyXG4gICAgICAgICAgKTtcclxuICAgICAgICB9XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIGV2ZW50LnRhcmdldC5pbm5lclRleHQgPSBuZXdUZXh0LmpvaW4oJycpO1xyXG4gICAgICBpdGVyYXRpb25zICs9IDI1MDtcclxuICAgICAgLy9pdGVyYXRpb25zICs9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDEwMDApOyAvLyBJbmNyZWFzZSB0aGlzIHRvIGNoYW5nZSBtb3JlIGNoYXJhY3RlcnMgYXQgYSB0aW1lXHJcbiAgICAgIGlmIChpdGVyYXRpb25zID49IG9yaWdpbmFsVGV4dC5sZW5ndGgpIHtcclxuICAgICAgICBjbGVhckludGVydmFsKGludGVydmFsKTtcclxuICAgICAgICBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gICAgICB9XHJcbiAgICB9LCAxNSk7IC8vIERlY3JlYXNlIHRoaXMgdG8gbWFrZSBpdCBnbyBmYXN0ZXJcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ0ZXh0LVszcHhdXCI+XHJcbiAgICAgIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IHN0eWxlPXt7IGRpc3BsYXk6ICdub25lJyB9fT48L2NhbnZhcz5cclxuICAgICAgPHByZVxyXG4gICAgICAgIG9uTW91c2VPdmVyPXtjaGFuZ2VUZXh0fVxyXG4gICAgICAgIGNsYXNzTmFtZT1cInRleHQtcmlnaHRcIlxyXG4gICAgICAgIHN0eWxlPXt7IHRleHRTaGFkb3c6ICcjZWFiMzA4IDFweCAwIDFweCcgfX1cclxuICAgICAgICBkYXRhLXZhbHVlPXthc2NpaUFydH1cclxuICAgICAgPlxyXG4gICAgICAgIHthc2NpaUFydH1cclxuICAgICAgPC9wcmU+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgQXNjaWlBcnRDb252ZXJ0ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVN0YXRlIiwidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlV2luZG93U2l6ZSIsIndpbmRvd1NpemUiLCJzZXRXaW5kb3dTaXplIiwid2lkdGgiLCJ3aW5kb3ciLCJpbm5lcldpZHRoIiwiaGVpZ2h0IiwiaW5uZXJIZWlnaHQiLCJoYW5kbGVSZXNpemUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsIkFzY2lpQXJ0Q29udmVydGVyIiwiaW1hZ2VQYXRoIiwidW5kZWZpbmVkIiwiTUFYSU1VTV9XSURUSCIsIk1BWElNVU1fSEVJR0hUIiwiY2FudmFzUmVmIiwiYXNjaWlBcnQiLCJzZXRBc2NpaUFydCIsInRvR3JheVNjYWxlIiwiciIsImciLCJiIiwiZ2V0Rm9udFJhdGlvIiwicHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRUb0dyYXlTY2FsZXMiLCJjb250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZ3JheVNjYWxlcyIsImkiLCJkYXRhIiwibGVuZ3RoIiwiZ3JheVNjYWxlIiwicHVzaCIsInB1dEltYWdlRGF0YSIsImNsYW1wRGltZW5zaW9ucyIsInJhdGlvIiwicmVjdGlmaWVkV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJyZWR1Y2VkV2lkdGgiLCJyZWR1Y2VkSGVpZ2h0IiwiZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlIiwiZ3JheVJhbXAiLCJyYW1wTGVuZ3RoIiwiY2VpbCIsImRyYXdBc2NpaSIsImFzY2lpSW1hZ2UiLCJyZWR1Y2UiLCJpbmRleCIsIm5leHRDaGFycyIsImxvYWRJbWFnZSIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwicHJvY2Vzc0ltYWdlIiwiY2FudmFzIiwiY3VycmVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJjb25zb2xlIiwiZXJyb3IiLCJsZXR0ZXJzIiwiaXNBbmltYXRpbmciLCJjaGFuZ2VUZXh0IiwiZXZlbnQiLCJpdGVyYXRpb25zIiwib3JpZ2luYWxUZXh0IiwidGFyZ2V0IiwiZGF0YXNldCIsInZhbHVlIiwiaW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIm5ld1RleHQiLCJyYW5kb20iLCJpbm5lclRleHQiLCJqb2luIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsImNsYXNzTmFtZSIsInJlZiIsIm9uTW91c2VPdmVyIiwidGV4dFNoYWRvdyIsImRhdGEtdmFsdWUiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/components/layouts/ASCIIText.jsx\n"));

/***/ })

});