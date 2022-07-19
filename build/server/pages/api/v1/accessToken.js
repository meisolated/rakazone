"use strict";
(() => {
var exports = {};
exports.id = 760;
exports.ids = [760];
exports.modules = {

/***/ 4763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "config": () => (/* binding */ config),
  "default": () => (/* binding */ handle)
});

;// CONCATENATED MODULE: external "crypto"
const external_crypto_namespaceObject = require("crypto");
;// CONCATENATED MODULE: external "jsonwebtoken"
const external_jsonwebtoken_namespaceObject = require("jsonwebtoken");
var external_jsonwebtoken_default = /*#__PURE__*/__webpack_require__.n(external_jsonwebtoken_namespaceObject);
;// CONCATENATED MODULE: ./src/pages/api/v1/accessToken.js


async function handle(req, res) {
    try {
        external_jsonwebtoken_default().sign({
            data: "test"
        }, "secret", {
            expiresIn: "1h"
        }, (err, token)=>{
            if (err) {
                return res.status(500).send(err);
            } else {
                return external_jsonwebtoken_default().verify(token, "secret", (err, decoded)=>{
                    res.status(200).send(JSON.stringify(decoded) + "\n" + token);
                });
            }
        });
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
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
var __webpack_exports__ = (__webpack_exec__(4763));
module.exports = __webpack_exports__;

})();