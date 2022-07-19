exports.id = 246;
exports.ids = [246];
exports.modules = {

/***/ 582:
/***/ ((module) => {

// Exports
module.exports = {
	"button_primary": "Primary_button_primary__UzEHX",
	"button_primary_small": "Primary_button_primary_small__o8EeJ"
};


/***/ }),

/***/ 3246:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "s": () => (/* binding */ Primary)
/* harmony export */ });
/* unused harmony export PrimarySmall */
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Primary_module_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(582);
/* harmony import */ var _Primary_module_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_Primary_module_css__WEBPACK_IMPORTED_MODULE_2__);



function Primary(props) {
    let link = props.link ? props.link : "#";
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
        href: link,
        passHref: true,
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("button", {
            className: (_Primary_module_css__WEBPACK_IMPORTED_MODULE_2___default().button_primary),
            children: [
                " ",
                props.text
            ]
        })
    });
}
function PrimarySmall(props) {
    let link = props.link ? props.link : "#";
    return /*#__PURE__*/ _jsx(Link, {
        href: link,
        children: /*#__PURE__*/ _jsx("button", {
            className: css.button_primary_small,
            children: props.text
        })
    });
}



/***/ })

};
;