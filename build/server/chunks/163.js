exports.id = 163;
exports.ids = [163];
exports.modules = {

/***/ 8498:
/***/ ((module) => {

// Exports
module.exports = {
	"profile_main_loader": "loading_profile_main_loader__07_qZ",
	"loader": "loading_loader__ZuvLg",
	"circular_loader": "loading_circular_loader__61Vvx",
	"rotate": "loading_rotate__ij5oE",
	"loader_path": "loading_loader_path___n6of",
	"dash": "loading_dash__HzS6p",
	"color": "loading_color__ETQqn"
};


/***/ }),

/***/ 2163:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Loading)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(8498);
/* harmony import */ var _loading_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_loading_module_css__WEBPACK_IMPORTED_MODULE_1__);


function Loading({ w , h , c  }) {
    let color = c ? c : "#ffff";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            style: {
                width: w,
                height: h
            },
            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: (_loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().profile_main_loader),
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: (_loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader),
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("svg", {
                        className: (_loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().circular_loader),
                        viewBox: "25 25 50 50",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("circle", {
                            className: (_loading_module_css__WEBPACK_IMPORTED_MODULE_1___default().loader_path),
                            cx: "50",
                            cy: "50",
                            r: "20",
                            fill: "none",
                            stroke: color,
                            strokeWidth: "4"
                        })
                    })
                })
            })
        })
    });
};


/***/ })

};
;