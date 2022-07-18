"use strict";
exports.id = 817;
exports.ids = [817];
exports.modules = {

/***/ 817:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "a": () => (/* binding */ toastService)
/* harmony export */ });
/* unused harmony export ToastType */
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1964);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(rxjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5863);
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__);


const toastService = {
    onToast,
    success,
    error,
    info,
    warn,
    toast,
    clear
};
const ToastType = {
    Success: "Success",
    Error: "Error",
    Info: "Info",
    Warning: "Warning"
};
const toastSubject = new rxjs__WEBPACK_IMPORTED_MODULE_0__.Subject();
const defaultId = "default-toast";
// enable subscribing to toasts observable
function onToast(id = defaultId) {
    return toastSubject.asObservable().pipe((0,rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)((x)=>x && x.id === id
    ));
}
// convenience methods
function success(message, options) {
    toast({
        ...options,
        type: ToastType.Success,
        message
    });
}
function error(message, options) {
    toast({
        ...options,
        type: ToastType.Error,
        message
    });
}
function info(message, options) {
    toast({
        ...options,
        type: ToastType.Info,
        message
    });
}
function warn(message, options) {
    toast({
        ...options,
        type: ToastType.Warning,
        message
    });
}
// core toast method
function toast(toast1) {
    toast1.id = toast1.id || defaultId;
    toast1.autoClose = toast1.autoClose === undefined ? true : toast1.autoClose;
    toastSubject.next(toast1);
}
// clear toasts
function clear(id = defaultId) {
    toastSubject.next({
        id
    });
}


/***/ })

};
;