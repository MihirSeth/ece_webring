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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\nvar _s = $RefreshSig$(), _s1 = $RefreshSig$();\n\nfunction useWindowSize() {\n    _s();\n    // Initialize state with undefined width/height so server and client renders match\n    // Learn more here: https://joshwcomeau.com/react/the-perils-of-rehydration/\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)({\n        width: undefined,\n        height: undefined\n    });\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        // only execute all the code below in client side\n        // Handler to call on window resize\n        function handleResize() {\n            // Set window width/height to state\n            setWindowSize({\n                width: window.innerWidth,\n                height: window.innerHeight\n            });\n        }\n        // Add event listener\n        window.addEventListener(\"resize\", handleResize);\n        // Call handler right away so state gets updated with initial window size\n        handleResize();\n        // Remove event listener on cleanup\n        return ()=>window.removeEventListener(\"resize\", handleResize);\n    }, []); // Empty array ensures that effect is only run on mount\n    return windowSize;\n}\n_s(useWindowSize, \"c4qf3T3ntwaWr7rmXJcJwcTfMJk=\");\nconst AsciiArtConverter = (param)=>{\n    let { imagePath } = param;\n    _s1();\n    const [windowSize, setWindowSize] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{}, []);\n    const size = useWindowSize();\n    let MAXIMUM_WIDTH = size.width - 722;\n    let MAXIMUM_HEIGHT = size.height - 462;\n    console.log(MAXIMUM_WIDTH, MAXIMUM_HEIGHT);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    const [asciiArt, setAsciiArt] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const toGrayScale = (r, g, b)=>0.21 * r + 0.72 * g + 0.07 * b;\n    const getFontRatio = ()=>{\n        const pre = document.createElement(\"pre\");\n        pre.style.display = \"inline\";\n        pre.textContent = \" \";\n        document.body.appendChild(pre);\n        const { width, height } = pre.getBoundingClientRect();\n        document.body.removeChild(pre);\n        return height / width;\n    };\n    const convertToGrayScales = (context, width, height)=>{\n        const imageData = context.getImageData(0, 0, width, height);\n        const grayScales = [];\n        for(let i = 0; i < imageData.data.length; i += 4){\n            const r = imageData.data[i];\n            const g = imageData.data[i + 1];\n            const b = imageData.data[i + 2];\n            const grayScale = toGrayScale(r, g, b);\n            imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grayScale;\n            grayScales.push(grayScale);\n        }\n        context.putImageData(imageData, 0, 0);\n        return grayScales;\n    };\n    const clampDimensions = (width, height)=>{\n        const ratio = getFontRatio();\n        const rectifiedWidth = Math.floor(ratio * width);\n        if (height > MAXIMUM_HEIGHT) {\n            const reducedWidth = Math.floor(rectifiedWidth * MAXIMUM_HEIGHT / height);\n            return [\n                reducedWidth,\n                MAXIMUM_HEIGHT\n            ];\n        }\n        if (width > MAXIMUM_WIDTH) {\n            const reducedHeight = Math.floor(height * MAXIMUM_WIDTH / rectifiedWidth);\n            return [\n                MAXIMUM_WIDTH,\n                reducedHeight\n            ];\n        }\n        return [\n            rectifiedWidth,\n            height\n        ];\n    };\n    const getCharacterForGrayScale = (grayScale)=>{\n        const grayRamp = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n        const rampLength = grayRamp.length;\n        return grayRamp[Math.ceil((rampLength - 1) * grayScale / 255)];\n    };\n    const drawAscii = (grayScales, width)=>{\n        const asciiImage = grayScales.reduce((asciiImage, grayScale, index)=>{\n            let nextChars = getCharacterForGrayScale(grayScale);\n            if ((index + 1) % width === 0) {\n                nextChars += \"\\n\";\n            }\n            return asciiImage + nextChars;\n        }, \"\");\n        setAsciiArt(asciiImage);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!imagePath) return;\n        const loadImage = (src)=>{\n            return new Promise((resolve, reject)=>{\n                const image = new Image();\n                image.onload = ()=>resolve(image);\n                image.onerror = (e)=>reject(e);\n                image.src = src;\n            });\n        };\n        const processImage = async ()=>{\n            const canvas = canvasRef.current;\n            const context = canvas.getContext(\"2d\");\n            try {\n                const image = await loadImage(imagePath);\n                const [width, height] = clampDimensions(image.width, image.height);\n                canvas.width = width;\n                canvas.height = height;\n                context.drawImage(image, 0, 0, width, height);\n                const grayScales = convertToGrayScales(context, width, height);\n                drawAscii(grayScales, width);\n            } catch (e) {\n                console.error(\"Failed to load image:\", e);\n            }\n        };\n        processImage();\n    }, [\n        imagePath\n    ]); // Effect runs whenever imagePath changes\n    const letters = \"$@B%8&WM#*oahkbdpqwmZO0QLCJUYXzcvunxrjft/|()1{}[]?-_+~<>i!lI;:,\\\"^`'. \";\n    let isAnimating = false;\n    const changeText = (event)=>{\n        if (isAnimating) return;\n        isAnimating = true;\n        let iterations = 0;\n        const originalText = event.target.dataset.value;\n        const interval = setInterval(()=>{\n            const newText = [];\n            for(let i = 0; i < originalText.length; i++){\n                if (i < iterations) {\n                    newText.push(originalText[i]);\n                } else {\n                    newText.push(originalText[i] === \"\\n\" ? originalText[i] : letters[Math.floor(Math.random() * letters.length)]);\n                }\n            }\n            event.target.innerText = newText.join(\"\");\n            iterations += 250;\n            //iterations += Math.floor(Math.random() * 1000); // Increase this to change more characters at a time\n            if (iterations >= originalText.length) {\n                clearInterval(interval);\n                isAnimating = false;\n            }\n        }, 15); // Decrease this to make it go faster\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"text-[3px]\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                ref: canvasRef,\n                style: {\n                    display: \"none\"\n                }\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 183,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"pre\", {\n                onMouseOver: changeText,\n                className: \"text-right\",\n                style: {\n                    textShadow: \"#eab308 1px 0 1px\"\n                },\n                \"data-value\": asciiArt,\n                children: asciiArt\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n                lineNumber: 184,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\roozb\\\\Dropbox\\\\PC\\\\Documents\\\\ece_webring\\\\src\\\\components\\\\layouts\\\\ASCIIText.jsx\",\n        lineNumber: 182,\n        columnNumber: 5\n    }, undefined);\n};\n_s1(AsciiArtConverter, \"vT61+p2TSSrZ3UJdcG2p3T6Nbig=\", false, function() {\n    return [\n        useWindowSize\n    ];\n});\n_c = AsciiArtConverter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AsciiArtConverter);\nvar _c;\n$RefreshReg$(_c, \"AsciiArtConverter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0Y7WUFFQXVDLE1BQU1HLE1BQU0sQ0FBQ08sU0FBUyxHQUFHRixRQUFRRyxJQUFJLENBQUM7WUFDdENWLGNBQWM7WUFDZCxzR0FBc0c7WUFDdEcsSUFBSUEsY0FBY0MsYUFBYXpDLE1BQU0sRUFBRTtnQkFDckNtRCxjQUFjTjtnQkFDZFIsY0FBYztZQUNoQjtRQUNGLEdBQUcsS0FBSyxxQ0FBcUM7SUFDL0M7SUFFQSxxQkFDRSw4REFBQ2U7UUFBSUMsV0FBVTs7MEJBQ2IsOERBQUN0QjtnQkFBT3VCLEtBQUsvRTtnQkFBV1csT0FBTztvQkFBRUMsU0FBUztnQkFBTzs7Ozs7OzBCQUNqRCw4REFBQ0o7Z0JBQ0N3RSxhQUFhakI7Z0JBQ2JlLFdBQVU7Z0JBQ1ZuRSxPQUFPO29CQUFFc0UsWUFBWTtnQkFBb0I7Z0JBQ3pDQyxjQUFZakY7MEJBRVhBOzs7Ozs7Ozs7Ozs7QUFJVDtJQWhLTVI7O1FBS1NaOzs7S0FMVFk7QUFrS04sK0RBQWVBLGlCQUFpQkEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9sYXlvdXRzL0FTQ0lJVGV4dC5qc3g/YjQ1YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCwgdXNlUmVmIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZnVuY3Rpb24gdXNlV2luZG93U2l6ZSgpIHtcclxuICAvLyBJbml0aWFsaXplIHN0YXRlIHdpdGggdW5kZWZpbmVkIHdpZHRoL2hlaWdodCBzbyBzZXJ2ZXIgYW5kIGNsaWVudCByZW5kZXJzIG1hdGNoXHJcbiAgLy8gTGVhcm4gbW9yZSBoZXJlOiBodHRwczovL2pvc2h3Y29tZWF1LmNvbS9yZWFjdC90aGUtcGVyaWxzLW9mLXJlaHlkcmF0aW9uL1xyXG4gIGNvbnN0IFt3aW5kb3dTaXplLCBzZXRXaW5kb3dTaXplXSA9IHVzZVN0YXRlKHtcclxuICAgIHdpZHRoOiB1bmRlZmluZWQsXHJcbiAgICBoZWlnaHQ6IHVuZGVmaW5lZCxcclxuICB9KTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIC8vIG9ubHkgZXhlY3V0ZSBhbGwgdGhlIGNvZGUgYmVsb3cgaW4gY2xpZW50IHNpZGVcclxuICAgIC8vIEhhbmRsZXIgdG8gY2FsbCBvbiB3aW5kb3cgcmVzaXplXHJcbiAgICBmdW5jdGlvbiBoYW5kbGVSZXNpemUoKSB7XHJcbiAgICAgIC8vIFNldCB3aW5kb3cgd2lkdGgvaGVpZ2h0IHRvIHN0YXRlXHJcbiAgICAgIHNldFdpbmRvd1NpemUoe1xyXG4gICAgICAgIHdpZHRoOiB3aW5kb3cuaW5uZXJXaWR0aCxcclxuICAgICAgICBoZWlnaHQ6IHdpbmRvdy5pbm5lckhlaWdodCxcclxuICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC8vIEFkZCBldmVudCBsaXN0ZW5lclxyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgaGFuZGxlUmVzaXplKTtcclxuICAgICBcclxuICAgIC8vIENhbGwgaGFuZGxlciByaWdodCBhd2F5IHNvIHN0YXRlIGdldHMgdXBkYXRlZCB3aXRoIGluaXRpYWwgd2luZG93IHNpemVcclxuICAgIGhhbmRsZVJlc2l6ZSgpO1xyXG4gICAgXHJcbiAgICAvLyBSZW1vdmUgZXZlbnQgbGlzdGVuZXIgb24gY2xlYW51cFxyXG4gICAgcmV0dXJuICgpID0+IHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwicmVzaXplXCIsIGhhbmRsZVJlc2l6ZSk7XHJcbiAgfSwgW10pOyAvLyBFbXB0eSBhcnJheSBlbnN1cmVzIHRoYXQgZWZmZWN0IGlzIG9ubHkgcnVuIG9uIG1vdW50XHJcbiAgcmV0dXJuIHdpbmRvd1NpemU7XHJcbn1cclxuXHJcbmNvbnN0IEFzY2lpQXJ0Q29udmVydGVyID0gKHsgaW1hZ2VQYXRoIH0pID0+IHtcclxuICBjb25zdCBbd2luZG93U2l6ZSwgc2V0V2luZG93U2l6ZV0gPSBcclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgXHJcbiAgfSxbXSlcclxuICBjb25zdCBzaXplID0gdXNlV2luZG93U2l6ZSgpXHJcbiAgbGV0IE1BWElNVU1fV0lEVEggPSBzaXplLndpZHRoIC0gNzIyO1xyXG4gIGxldCBNQVhJTVVNX0hFSUdIVCA9IHNpemUuaGVpZ2h0IC0gNDYyO1xyXG4gIGNvbnNvbGUubG9nKE1BWElNVU1fV0lEVEgsIE1BWElNVU1fSEVJR0hUKVxyXG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcclxuICBjb25zdCBbYXNjaWlBcnQsIHNldEFzY2lpQXJ0XSA9IHVzZVN0YXRlKCcnKTtcclxuXHJcbiAgY29uc3QgdG9HcmF5U2NhbGUgPSAociwgZywgYikgPT4gMC4yMSAqIHIgKyAwLjcyICogZyArIDAuMDcgKiBiO1xyXG5cclxuICBjb25zdCBnZXRGb250UmF0aW8gPSAoKSA9PiB7XHJcbiAgICBjb25zdCBwcmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdwcmUnKTtcclxuICAgIHByZS5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICBwcmUudGV4dENvbnRlbnQgPSAnICc7XHJcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByZSk7XHJcbiAgICBjb25zdCB7IHdpZHRoLCBoZWlnaHQgfSA9IHByZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcclxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQocHJlKTtcclxuICAgIHJldHVybiBoZWlnaHQgLyB3aWR0aDtcclxuICB9O1xyXG5cclxuICBjb25zdCBjb252ZXJ0VG9HcmF5U2NhbGVzID0gKGNvbnRleHQsIHdpZHRoLCBoZWlnaHQpID0+IHtcclxuICAgIGNvbnN0IGltYWdlRGF0YSA9IGNvbnRleHQuZ2V0SW1hZ2VEYXRhKDAsIDAsIHdpZHRoLCBoZWlnaHQpO1xyXG4gICAgY29uc3QgZ3JheVNjYWxlcyA9IFtdO1xyXG5cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW1hZ2VEYXRhLmRhdGEubGVuZ3RoOyBpICs9IDQpIHtcclxuICAgICAgY29uc3QgciA9IGltYWdlRGF0YS5kYXRhW2ldO1xyXG4gICAgICBjb25zdCBnID0gaW1hZ2VEYXRhLmRhdGFbaSArIDFdO1xyXG4gICAgICBjb25zdCBiID0gaW1hZ2VEYXRhLmRhdGFbaSArIDJdO1xyXG4gICAgICBjb25zdCBncmF5U2NhbGUgPSB0b0dyYXlTY2FsZShyLCBnLCBiKTtcclxuICAgICAgaW1hZ2VEYXRhLmRhdGFbaV0gPVxyXG4gICAgICAgIGltYWdlRGF0YS5kYXRhW2kgKyAxXSA9XHJcbiAgICAgICAgaW1hZ2VEYXRhLmRhdGFbaSArIDJdID1cclxuICAgICAgICAgIGdyYXlTY2FsZTtcclxuICAgICAgZ3JheVNjYWxlcy5wdXNoKGdyYXlTY2FsZSk7XHJcbiAgICB9XHJcblxyXG4gICAgY29udGV4dC5wdXRJbWFnZURhdGEoaW1hZ2VEYXRhLCAwLCAwKTtcclxuICAgIHJldHVybiBncmF5U2NhbGVzO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGNsYW1wRGltZW5zaW9ucyA9ICh3aWR0aCwgaGVpZ2h0KSA9PiB7XHJcbiAgICBjb25zdCByYXRpbyA9IGdldEZvbnRSYXRpbygpO1xyXG4gICAgY29uc3QgcmVjdGlmaWVkV2lkdGggPSBNYXRoLmZsb29yKHJhdGlvICogd2lkdGgpO1xyXG5cclxuICAgIGlmIChoZWlnaHQgPiBNQVhJTVVNX0hFSUdIVCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkV2lkdGggPSBNYXRoLmZsb29yKFxyXG4gICAgICAgIChyZWN0aWZpZWRXaWR0aCAqIE1BWElNVU1fSEVJR0hUKSAvIGhlaWdodFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gW3JlZHVjZWRXaWR0aCwgTUFYSU1VTV9IRUlHSFRdO1xyXG4gICAgfVxyXG4gICAgaWYgKHdpZHRoID4gTUFYSU1VTV9XSURUSCkge1xyXG4gICAgICBjb25zdCByZWR1Y2VkSGVpZ2h0ID0gTWF0aC5mbG9vcihcclxuICAgICAgICAoaGVpZ2h0ICogTUFYSU1VTV9XSURUSCkgLyByZWN0aWZpZWRXaWR0aFxyXG4gICAgICApO1xyXG4gICAgICByZXR1cm4gW01BWElNVU1fV0lEVEgsIHJlZHVjZWRIZWlnaHRdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIFtyZWN0aWZpZWRXaWR0aCwgaGVpZ2h0XTtcclxuICB9O1xyXG5cclxuICBjb25zdCBnZXRDaGFyYWN0ZXJGb3JHcmF5U2NhbGUgPSAoZ3JheVNjYWxlKSA9PiB7XHJcbiAgICBjb25zdCBncmF5UmFtcCA9XHJcbiAgICAgICckQEIlOCZXTSMqb2Foa2JkcHF3bVpPMFFMQ0pVWVh6Y3Z1bnhyamZ0L3woKTF7fVtdPy1fK348PmkhbEk7OixcIl5gXFwnLiAnO1xyXG4gICAgY29uc3QgcmFtcExlbmd0aCA9IGdyYXlSYW1wLmxlbmd0aDtcclxuICAgIHJldHVybiBncmF5UmFtcFtNYXRoLmNlaWwoKChyYW1wTGVuZ3RoIC0gMSkgKiBncmF5U2NhbGUpIC8gMjU1KV07XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZHJhd0FzY2lpID0gKGdyYXlTY2FsZXMsIHdpZHRoKSA9PiB7XHJcbiAgICBjb25zdCBhc2NpaUltYWdlID0gZ3JheVNjYWxlcy5yZWR1Y2UoKGFzY2lpSW1hZ2UsIGdyYXlTY2FsZSwgaW5kZXgpID0+IHtcclxuICAgICAgbGV0IG5leHRDaGFycyA9IGdldENoYXJhY3RlckZvckdyYXlTY2FsZShncmF5U2NhbGUpO1xyXG4gICAgICBpZiAoKGluZGV4ICsgMSkgJSB3aWR0aCA9PT0gMCkge1xyXG4gICAgICAgIG5leHRDaGFycyArPSAnXFxuJztcclxuICAgICAgfVxyXG4gICAgICByZXR1cm4gYXNjaWlJbWFnZSArIG5leHRDaGFycztcclxuICAgIH0sICcnKTtcclxuXHJcbiAgICBzZXRBc2NpaUFydChhc2NpaUltYWdlKTtcclxuICB9O1xyXG5cclxuICB1c2VFZmZlY3QoKCkgPT4ge1xyXG4gICAgaWYgKCFpbWFnZVBhdGgpIHJldHVybjtcclxuXHJcbiAgICBjb25zdCBsb2FkSW1hZ2UgPSAoc3JjKSA9PiB7XHJcbiAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcclxuICAgICAgICBpbWFnZS5vbmxvYWQgPSAoKSA9PiByZXNvbHZlKGltYWdlKTtcclxuICAgICAgICBpbWFnZS5vbmVycm9yID0gKGUpID0+IHJlamVjdChlKTtcclxuICAgICAgICBpbWFnZS5zcmMgPSBzcmM7XHJcbiAgICAgIH0pO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBwcm9jZXNzSW1hZ2UgPSBhc3luYyAoKSA9PiB7XHJcbiAgICAgIGNvbnN0IGNhbnZhcyA9IGNhbnZhc1JlZi5jdXJyZW50O1xyXG4gICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGltYWdlID0gYXdhaXQgbG9hZEltYWdlKGltYWdlUGF0aCk7XHJcbiAgICAgICAgY29uc3QgW3dpZHRoLCBoZWlnaHRdID0gY2xhbXBEaW1lbnNpb25zKGltYWdlLndpZHRoLCBpbWFnZS5oZWlnaHQpO1xyXG5cclxuICAgICAgICBjYW52YXMud2lkdGggPSB3aWR0aDtcclxuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xyXG4gICAgICAgIGNvbnRleHQuZHJhd0ltYWdlKGltYWdlLCAwLCAwLCB3aWR0aCwgaGVpZ2h0KTtcclxuICAgICAgICBjb25zdCBncmF5U2NhbGVzID0gY29udmVydFRvR3JheVNjYWxlcyhjb250ZXh0LCB3aWR0aCwgaGVpZ2h0KTtcclxuXHJcbiAgICAgICAgZHJhd0FzY2lpKGdyYXlTY2FsZXMsIHdpZHRoKTtcclxuICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0ZhaWxlZCB0byBsb2FkIGltYWdlOicsIGUpO1xyXG4gICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIHByb2Nlc3NJbWFnZSgpO1xyXG4gIH0sIFtpbWFnZVBhdGhdKTsgLy8gRWZmZWN0IHJ1bnMgd2hlbmV2ZXIgaW1hZ2VQYXRoIGNoYW5nZXNcclxuXHJcbiAgY29uc3QgbGV0dGVycyA9ICckQEIlOCZXTSMqb2Foa2JkcHF3bVpPMFFMQ0pVWVh6Y3Z1bnhyamZ0L3woKTF7fVtdPy1fK348PmkhbEk7OixcIl5gXFwnLiAnO1xyXG4gIGxldCBpc0FuaW1hdGluZyA9IGZhbHNlO1xyXG4gIGNvbnN0IGNoYW5nZVRleHQgPSAoZXZlbnQpID0+IHtcclxuICAgIGlmIChpc0FuaW1hdGluZykgcmV0dXJuO1xyXG4gICAgaXNBbmltYXRpbmcgPSB0cnVlO1xyXG4gICAgbGV0IGl0ZXJhdGlvbnMgPSAwO1xyXG4gICAgY29uc3Qgb3JpZ2luYWxUZXh0ID0gZXZlbnQudGFyZ2V0LmRhdGFzZXQudmFsdWU7XHJcbiAgICBjb25zdCBpbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcclxuICAgICAgY29uc3QgbmV3VGV4dCA9IFtdO1xyXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9yaWdpbmFsVGV4dC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChpIDwgaXRlcmF0aW9ucykge1xyXG4gICAgICAgICAgbmV3VGV4dC5wdXNoKG9yaWdpbmFsVGV4dFtpXSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgIG5ld1RleHQucHVzaChcclxuICAgICAgICAgICAgb3JpZ2luYWxUZXh0W2ldID09PSAnXFxuJ1xyXG4gICAgICAgICAgICAgID8gb3JpZ2luYWxUZXh0W2ldXHJcbiAgICAgICAgICAgICAgOiBsZXR0ZXJzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxldHRlcnMubGVuZ3RoKV1cclxuICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcblxyXG4gICAgICBldmVudC50YXJnZXQuaW5uZXJUZXh0ID0gbmV3VGV4dC5qb2luKCcnKTtcclxuICAgICAgaXRlcmF0aW9ucyArPSAyNTA7XHJcbiAgICAgIC8vaXRlcmF0aW9ucyArPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDAwKTsgLy8gSW5jcmVhc2UgdGhpcyB0byBjaGFuZ2UgbW9yZSBjaGFyYWN0ZXJzIGF0IGEgdGltZVxyXG4gICAgICBpZiAoaXRlcmF0aW9ucyA+PSBvcmlnaW5hbFRleHQubGVuZ3RoKSB7XHJcbiAgICAgICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbCk7XHJcbiAgICAgICAgaXNBbmltYXRpbmcgPSBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfSwgMTUpOyAvLyBEZWNyZWFzZSB0aGlzIHRvIG1ha2UgaXQgZ28gZmFzdGVyXHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwidGV4dC1bM3B4XVwiPlxyXG4gICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBzdHlsZT17eyBkaXNwbGF5OiAnbm9uZScgfX0+PC9jYW52YXM+XHJcbiAgICAgIDxwcmVcclxuICAgICAgICBvbk1vdXNlT3Zlcj17Y2hhbmdlVGV4dH1cclxuICAgICAgICBjbGFzc05hbWU9XCJ0ZXh0LXJpZ2h0XCJcclxuICAgICAgICBzdHlsZT17eyB0ZXh0U2hhZG93OiAnI2VhYjMwOCAxcHggMCAxcHgnIH19XHJcbiAgICAgICAgZGF0YS12YWx1ZT17YXNjaWlBcnR9XHJcbiAgICAgID5cclxuICAgICAgICB7YXNjaWlBcnR9XHJcbiAgICAgIDwvcHJlPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEFzY2lpQXJ0Q29udmVydGVyO1xyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsInVzZVJlZiIsInVzZVdpbmRvd1NpemUiLCJ3aW5kb3dTaXplIiwic2V0V2luZG93U2l6ZSIsIndpZHRoIiwidW5kZWZpbmVkIiwiaGVpZ2h0IiwiaGFuZGxlUmVzaXplIiwid2luZG93IiwiaW5uZXJXaWR0aCIsImlubmVySGVpZ2h0IiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJBc2NpaUFydENvbnZlcnRlciIsImltYWdlUGF0aCIsInNpemUiLCJNQVhJTVVNX1dJRFRIIiwiTUFYSU1VTV9IRUlHSFQiLCJjb25zb2xlIiwibG9nIiwiY2FudmFzUmVmIiwiYXNjaWlBcnQiLCJzZXRBc2NpaUFydCIsInRvR3JheVNjYWxlIiwiciIsImciLCJiIiwiZ2V0Rm9udFJhdGlvIiwicHJlIiwiZG9jdW1lbnQiLCJjcmVhdGVFbGVtZW50Iiwic3R5bGUiLCJkaXNwbGF5IiwidGV4dENvbnRlbnQiLCJib2R5IiwiYXBwZW5kQ2hpbGQiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJyZW1vdmVDaGlsZCIsImNvbnZlcnRUb0dyYXlTY2FsZXMiLCJjb250ZXh0IiwiaW1hZ2VEYXRhIiwiZ2V0SW1hZ2VEYXRhIiwiZ3JheVNjYWxlcyIsImkiLCJkYXRhIiwibGVuZ3RoIiwiZ3JheVNjYWxlIiwicHVzaCIsInB1dEltYWdlRGF0YSIsImNsYW1wRGltZW5zaW9ucyIsInJhdGlvIiwicmVjdGlmaWVkV2lkdGgiLCJNYXRoIiwiZmxvb3IiLCJyZWR1Y2VkV2lkdGgiLCJyZWR1Y2VkSGVpZ2h0IiwiZ2V0Q2hhcmFjdGVyRm9yR3JheVNjYWxlIiwiZ3JheVJhbXAiLCJyYW1wTGVuZ3RoIiwiY2VpbCIsImRyYXdBc2NpaSIsImFzY2lpSW1hZ2UiLCJyZWR1Y2UiLCJpbmRleCIsIm5leHRDaGFycyIsImxvYWRJbWFnZSIsInNyYyIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiaW1hZ2UiLCJJbWFnZSIsIm9ubG9hZCIsIm9uZXJyb3IiLCJlIiwicHJvY2Vzc0ltYWdlIiwiY2FudmFzIiwiY3VycmVudCIsImdldENvbnRleHQiLCJkcmF3SW1hZ2UiLCJlcnJvciIsImxldHRlcnMiLCJpc0FuaW1hdGluZyIsImNoYW5nZVRleHQiLCJldmVudCIsIml0ZXJhdGlvbnMiLCJvcmlnaW5hbFRleHQiLCJ0YXJnZXQiLCJkYXRhc2V0IiwidmFsdWUiLCJpbnRlcnZhbCIsInNldEludGVydmFsIiwibmV3VGV4dCIsInJhbmRvbSIsImlubmVyVGV4dCIsImpvaW4iLCJjbGVhckludGVydmFsIiwiZGl2IiwiY2xhc3NOYW1lIiwicmVmIiwib25Nb3VzZU92ZXIiLCJ0ZXh0U2hhZG93IiwiZGF0YS12YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/layouts/ASCIIText.jsx\n"));

/***/ })

});