"use strict";
exports.id = 791;
exports.ids = [791];
exports.modules = {

/***/ 5791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B0": () => (/* binding */ convertToInternationalCurrencySystem),
/* harmony export */   "LU": () => (/* binding */ formatDuration),
/* harmony export */   "_i": () => (/* binding */ fetcher)
/* harmony export */ });
/* unused harmony exports get_random, makeid */
const convertToInternationalCurrencySystem = (labelValue)=>{
    // Nine Zeroes for Billions
    if (typeof labelValue !== "number") return labelValue;
    let value = Math.abs(Number(labelValue)) >= 1.0e9 ? (Math.abs(Number(labelValue)) / 1.0e9).toFixed(2) + "B" : Math.abs(Number(labelValue)) >= 1.0e6 ? (Math.abs(Number(labelValue)) / 1.0e6).toFixed(2) + "M" : Math.abs(Number(labelValue)) >= 1.0e3 ? (Math.abs(Number(labelValue)) / 1.0e3).toFixed(2) + "K" : Math.abs(Number(labelValue));
    return value;
};
const get_random = (list)=>{
    return list[Math.floor(Math.random() * list.length)];
};
const fetcher = (...args)=>fetch(...args).then((res)=>res.json()
    )
;
function makeid(length) {
    var result = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    var charactersLength = characters.length;
    for(var i = 0; i < length; i++){
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
const leadingZeroFormatter = new Intl.NumberFormat(undefined, {
    minimumIntegerDigits: 2
});
function formatDuration(time) {
    const seconds = Math.floor(time % 60);
    const minutes = Math.floor(time / 60) % 60;
    const hours = Math.floor(time / 3600);
    if (hours === 0) {
        return `${minutes}:${leadingZeroFormatter.format(seconds)}`;
    } else {
        return `${hours}:${leadingZeroFormatter.format(minutes)}:${leadingZeroFormatter.format(seconds)}`;
    }
}


/***/ })

};
;