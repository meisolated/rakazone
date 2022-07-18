"use strict";
(() => {
var exports = {};
exports.id = 742;
exports.ids = [742];
exports.modules = {

/***/ 4558:
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ 2380:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handler)
});

;// CONCATENATED MODULE: external "axios"
const external_axios_namespaceObject = require("axios");
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_namespaceObject);
// EXTERNAL MODULE: external "next/config"
var config_ = __webpack_require__(4558);
var config_default = /*#__PURE__*/__webpack_require__.n(config_);
;// CONCATENATED MODULE: ./src/pages/api/v1/userData.js


const { publicRuntimeConfig  } = config_default()();
function handler(req, res) {
    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {
    //     return res.status(401).send({ "statusCode": 401, "error": "Unauthorized", "message": "Authorization Header is not present" })
    // } else {
    external_axios_default().get(`${publicRuntimeConfig.apiUrl}userdata`, {
        headers: {
            cookie: req.headers.cookie
        }
    }).then((response)=>{
        res.status(200).send(response.data);
    }).catch((error)=>{
        res.status(500).send(error);
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
var __webpack_exports__ = (__webpack_exec__(2380));
module.exports = __webpack_exports__;

})();