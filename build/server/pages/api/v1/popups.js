"use strict";
(() => {
var exports = {};
exports.id = 866;
exports.ids = [866];
exports.modules = {

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 9155:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": () => (/* binding */ config),
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4558);
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
function handler(req, res1) {
    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {
    //     return res.status(401).send({ "statusCode": 401, "error": "Unauthorized", "message": "Authorization Header is not present" })
    // } else {
    fetch(`${publicRuntimeConfig.apiUrl}popups`).then((res)=>res.json()
    ).then((data)=>{
        res1.status(200).send(data);
    });
// }
};
const config = {
    api: {
        externalResolver: true
    }
};


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(9155));
module.exports = __webpack_exports__;

})();