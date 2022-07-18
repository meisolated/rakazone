"use strict";
(() => {
var exports = {};
exports.id = 209;
exports.ids = [209];
exports.modules = {

/***/ 9702:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__),
/* harmony export */   "getServerSideProps": () => (/* binding */ getServerSideProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2167);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_4__);





const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_4___default()();
function Redirect(props) {
    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_3__.useRouter)();
    let redirect = props.redirectto || "/";
    let text = props.redirectto ? props.redirectto.split("//")[1].split(".")[1].toUpperCase() : "Home";
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        // setTimeout(() => {
        // (redirect !== "nowhere") ? window.open(redirect) : window.location.href = "/404"
        router.push({
            pathname: redirect,
            query: {
                returnUrl: redirect
            }
        });
    // }, 2000)
    });
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
        className: "container-default",
        style: {
            fontSize: "50px",
            padding: "100px",
            textAlign: "center"
        },
        children: text
    });
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Redirect);
async function getServerSideProps(context) {
    let { data  } = await axios__WEBPACK_IMPORTED_MODULE_2___default().get(`${publicRuntimeConfig.apiUrl}redirects`);
    if (data.message === "success") {
        let redirects = data.data.redirects;
        if (redirects[context.query.redirect]) {
            return {
                props: {
                    redirectto: redirects[context.query.redirect]
                }
            };
        } else {
            return {
                props: {
                    redirectto: null
                }
            };
        }
    } else return {
        props: {
            redirectto: null
        }
    };
}


/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9702));
module.exports = __webpack_exports__;

})();