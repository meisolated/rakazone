"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/v1/userdata";
exports.ids = ["pages/api/v1/userdata"];
exports.modules = {

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("next/config");

/***/ }),

/***/ "(api)/./src/pages/api/v1/userdata.js":
/*!**************************************!*\
  !*** ./src/pages/api/v1/userdata.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ userdata)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\nfunction userdata(req, res) {\n    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {\n    //     return res.status(401).send({ \"statusCode\": 401, \"error\": \"Unauthorized\", \"message\": \"Authorization Header is not present\" })\n    // } else {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${publicRuntimeConfig.apiUrl}userdata`, {\n        headers: req.headers.cookie && {\n            cookie: req.headers.cookie\n        }\n    }).then((response)=>{\n        res.status(200).send(response.data);\n    }).catch((error)=>{\n        res.status(500).send(error);\n    });\n// }\n};\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3YxL3VzZXJkYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQ25DLE1BQU0sRUFBRUUsbUJBQW1CLEdBQUUsR0FBR0Qsa0RBQVMsRUFBRTtBQUU1QixTQUFTRSxRQUFRLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3ZDLGlGQUFpRjtJQUNqRixvSUFBb0k7SUFDcEksV0FBVztJQUNYTCxnREFDUSxDQUFDLENBQUMsRUFBRUUsbUJBQW1CLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUFFQyxPQUFPLEVBQUVKLEdBQUcsQ0FBQ0ksT0FBTyxDQUFDQyxNQUFNLElBQUk7WUFBRUEsTUFBTSxFQUFFTCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsTUFBTTtTQUFFO0tBQUUsQ0FBQyxDQUMvR0MsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztRQUNoQk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUM7S0FDdEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO1FBQ2RYLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQztLQUM5QixDQUFDO0FBRU4sSUFBSTtDQUNQO0FBRU0sTUFBTUMsTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUU7UUFDREMsZ0JBQWdCLEVBQUUsSUFBSTtLQUN6QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmFrYVpvbmUvLi9zcmMvcGFnZXMvYXBpL3YxL3VzZXJkYXRhLmpzP2U4YjYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHVzZXJkYXRhKHJlcSwgcmVzKSB7XG4gICAgLy8gaWYgKCFyZXEuaGVhZGVycy5ob3N0IHx8ICFyZXEuaGVhZGVycy5yZWZlcmVyIHx8ICFyZXEuaGVhZGVycy5hdXRob3JpemF0aW9uKSB7XG4gICAgLy8gICAgIHJldHVybiByZXMuc3RhdHVzKDQwMSkuc2VuZCh7IFwic3RhdHVzQ29kZVwiOiA0MDEsIFwiZXJyb3JcIjogXCJVbmF1dGhvcml6ZWRcIiwgXCJtZXNzYWdlXCI6IFwiQXV0aG9yaXphdGlvbiBIZWFkZXIgaXMgbm90IHByZXNlbnRcIiB9KVxuICAgIC8vIH0gZWxzZSB7XG4gICAgYXhpb3NcbiAgICAgICAgLmdldChgJHtwdWJsaWNSdW50aW1lQ29uZmlnLmFwaVVybH11c2VyZGF0YWAsIHsgaGVhZGVyczogcmVxLmhlYWRlcnMuY29va2llICYmIHsgY29va2llOiByZXEuaGVhZGVycy5jb29raWUgfSB9KVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoMjAwKS5zZW5kKHJlc3BvbnNlLmRhdGEpXG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgICAgIHJlcy5zdGF0dXMoNTAwKS5zZW5kKGVycm9yKVxuICAgICAgICB9KVxuXG4gICAgLy8gfVxufVxuXG5leHBvcnQgY29uc3QgY29uZmlnID0ge1xuICAgIGFwaToge1xuICAgICAgICBleHRlcm5hbFJlc29sdmVyOiB0cnVlLFxuICAgIH0sXG59XG4iXSwibmFtZXMiOlsiYXhpb3MiLCJnZXRDb25maWciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwidXNlcmRhdGEiLCJyZXEiLCJyZXMiLCJnZXQiLCJhcGlVcmwiLCJoZWFkZXJzIiwiY29va2llIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwic2VuZCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/v1/userdata.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/v1/userdata.js"));
module.exports = __webpack_exports__;

})();