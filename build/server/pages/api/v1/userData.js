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
exports.id = "pages/api/v1/userData";
exports.ids = ["pages/api/v1/userData"];
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

/***/ "(api)/./src/pages/api/v1/userData.js":
/*!**************************************!*\
  !*** ./src/pages/api/v1/userData.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"config\": () => (/* binding */ config),\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"axios\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/config */ \"next/config\");\n/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst { publicRuntimeConfig  } = next_config__WEBPACK_IMPORTED_MODULE_1___default()();\nfunction handler(req, res) {\n    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {\n    //     return res.status(401).send({ \"statusCode\": 401, \"error\": \"Unauthorized\", \"message\": \"Authorization Header is not present\" })\n    // } else {\n    axios__WEBPACK_IMPORTED_MODULE_0___default().get(`${publicRuntimeConfig.apiUrl}userdata`, {\n        headers: {\n            cookie: req.headers.cookie\n        }\n    }).then((response)=>{\n        res.status(200).send(response.data);\n    }).catch((error)=>{\n        res.status(500).send(error);\n    });\n// }\n};\nconst config = {\n    api: {\n        externalResolver: true\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9zcmMvcGFnZXMvYXBpL3YxL3VzZXJEYXRhLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUF5QjtBQUNVO0FBQ25DLE1BQU0sRUFBRUUsbUJBQW1CLEdBQUUsR0FBR0Qsa0RBQVMsRUFBRTtBQUU1QixTQUFTRSxPQUFPLENBQUNDLEdBQUcsRUFBRUMsR0FBRyxFQUFFO0lBQ3RDLGlGQUFpRjtJQUNqRixvSUFBb0k7SUFDcEksV0FBVztJQUNYTCxnREFDUSxDQUFDLENBQUMsRUFBRUUsbUJBQW1CLENBQUNLLE1BQU0sQ0FBQyxRQUFRLENBQUMsRUFBRTtRQUFFQyxPQUFPLEVBQUU7WUFBRUMsTUFBTSxFQUFFTCxHQUFHLENBQUNJLE9BQU8sQ0FBQ0MsTUFBTTtTQUFFO0tBQUUsQ0FBQyxDQUN6RkMsSUFBSSxDQUFDLENBQUNDLFFBQVEsR0FBSztRQUNoQk4sR0FBRyxDQUFDTyxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQ0YsUUFBUSxDQUFDRyxJQUFJLENBQUM7S0FDdEMsQ0FBQyxDQUNEQyxLQUFLLENBQUMsQ0FBQ0MsS0FBSyxHQUFLO1FBQ2RYLEdBQUcsQ0FBQ08sTUFBTSxDQUFDLEdBQUcsQ0FBQyxDQUFDQyxJQUFJLENBQUNHLEtBQUssQ0FBQztLQUM5QixDQUFDO0FBRU4sSUFBSTtDQUNQO0FBRU0sTUFBTUMsTUFBTSxHQUFHO0lBQ2xCQyxHQUFHLEVBQUU7UUFDREMsZ0JBQWdCLEVBQUUsSUFBSTtLQUN6QjtDQUNKIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vUmFrYVpvbmUvLi9zcmMvcGFnZXMvYXBpL3YxL3VzZXJEYXRhLmpzPzEzMWIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGF4aW9zIGZyb20gXCJheGlvc1wiXG5pbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGhhbmRsZXIocmVxLCByZXMpIHtcbiAgICAvLyBpZiAoIXJlcS5oZWFkZXJzLmhvc3QgfHwgIXJlcS5oZWFkZXJzLnJlZmVyZXIgfHwgIXJlcS5oZWFkZXJzLmF1dGhvcml6YXRpb24pIHtcbiAgICAvLyAgICAgcmV0dXJuIHJlcy5zdGF0dXMoNDAxKS5zZW5kKHsgXCJzdGF0dXNDb2RlXCI6IDQwMSwgXCJlcnJvclwiOiBcIlVuYXV0aG9yaXplZFwiLCBcIm1lc3NhZ2VcIjogXCJBdXRob3JpemF0aW9uIEhlYWRlciBpcyBub3QgcHJlc2VudFwiIH0pXG4gICAgLy8gfSBlbHNlIHtcbiAgICBheGlvc1xuICAgICAgICAuZ2V0KGAke3B1YmxpY1J1bnRpbWVDb25maWcuYXBpVXJsfXVzZXJkYXRhYCwgeyBoZWFkZXJzOiB7IGNvb2tpZTogcmVxLmhlYWRlcnMuY29va2llIH0gfSlcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDIwMCkuc2VuZChyZXNwb25zZS5kYXRhKVxuICAgICAgICB9KVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgICAgICByZXMuc3RhdHVzKDUwMCkuc2VuZChlcnJvcilcbiAgICAgICAgfSlcblxuICAgIC8vIH1cbn1cblxuZXhwb3J0IGNvbnN0IGNvbmZpZyA9IHtcbiAgICBhcGk6IHtcbiAgICAgICAgZXh0ZXJuYWxSZXNvbHZlcjogdHJ1ZSxcbiAgICB9LFxufVxuIl0sIm5hbWVzIjpbImF4aW9zIiwiZ2V0Q29uZmlnIiwicHVibGljUnVudGltZUNvbmZpZyIsImhhbmRsZXIiLCJyZXEiLCJyZXMiLCJnZXQiLCJhcGlVcmwiLCJoZWFkZXJzIiwiY29va2llIiwidGhlbiIsInJlc3BvbnNlIiwic3RhdHVzIiwic2VuZCIsImRhdGEiLCJjYXRjaCIsImVycm9yIiwiY29uZmlnIiwiYXBpIiwiZXh0ZXJuYWxSZXNvbHZlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./src/pages/api/v1/userData.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./src/pages/api/v1/userData.js"));
module.exports = __webpack_exports__;

})();