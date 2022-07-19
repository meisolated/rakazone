exports.id = 422;
exports.ids = [422];
exports.modules = {

/***/ 9640:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Grey_button__xDRwr",
	"GreySmall": "Grey_GreySmall__mbCfg",
	"GreyMedium": "Grey_GreyMedium__KM84_",
	"GreyBig": "Grey_GreyBig__654H_"
};


/***/ }),

/***/ 8965:
/***/ ((module) => {

// Exports
module.exports = {
	"button": "Outline_button__g13Qn",
	"OutlineSmall": "Outline_OutlineSmall__mEvbJ",
	"OutlineMedium": "Outline_OutlineMedium__ZiGXc",
	"OutlineBig": "Outline_OutlineBig__0ypQf"
};


/***/ }),

/***/ 4234:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/media/playicon.9262ca5e.svg","height":39,"width":34});

/***/ }),

/***/ 9422:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "n6": () => (/* reexport */ GreyBig),
  "Oc": () => (/* reexport */ GreyMedium),
  "w1": () => (/* reexport */ OutlineMedium),
  "_t": () => (/* reexport */ OutlineSmall),
  "sq": () => (/* reexport */ Primary/* Primary */.s)
});

// UNUSED EXPORTS: GreySmall, OutlineBig, PrimarySmall, VideoBtnBig, VideoBtnMedium, VideoBtnSmall

// EXTERNAL MODULE: ./src/components/Buttons/Primary/index.js
var Primary = __webpack_require__(3246);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./src/assets/svg/src/playicon.svg
var src_playicon = __webpack_require__(4234);
;// CONCATENATED MODULE: ./src/components/Buttons/VideoButton/index.js




function VideoBtnBig(props) {
    return /*#__PURE__*/ _jsx("div", {
        className: css.video_button_wrapper_big,
        children: /*#__PURE__*/ _jsx("div", {
            className: css.video_button_big,
            children: /*#__PURE__*/ _jsx("div", {
                className: css.button_wrapper_big,
                children: /*#__PURE__*/ _jsx(Image, {
                    src: playicon,
                    className: css.video_button_icon_big,
                    layout: "responsive",
                    height: 30,
                    width: 30,
                    alt: ""
                })
            })
        })
    });
}
function VideoBtnMedium(props) {
    return /*#__PURE__*/ _jsx("div", {
        className: css.video_button_wrapper_medium,
        children: /*#__PURE__*/ _jsx("div", {
            className: css.video_button_medium,
            children: /*#__PURE__*/ _jsx("div", {
                className: css.button_wrapper_medium,
                children: /*#__PURE__*/ _jsx(Image, {
                    src: playicon,
                    className: css.video_button_icon_medium,
                    layout: "responsive",
                    height: 30,
                    width: 30,
                    alt: ""
                })
            })
        })
    });
}
function VideoBtnSmall(props) {
    return /*#__PURE__*/ _jsx("div", {
        className: css.video_button_wrapper_small,
        children: /*#__PURE__*/ _jsx("div", {
            className: css.video_button_small,
            children: /*#__PURE__*/ _jsx("div", {
                className: css.button_wrapper_small,
                children: /*#__PURE__*/ _jsx(Image, {
                    src: playicon,
                    className: css.video_button_icon_small,
                    layout: "responsive",
                    height: 30,
                    width: 30,
                    alt: ""
                })
            })
        })
    });
}

// EXTERNAL MODULE: ./src/components/Buttons/Grey/Grey.module.css
var Grey_module = __webpack_require__(9640);
var Grey_module_default = /*#__PURE__*/__webpack_require__.n(Grey_module);
;// CONCATENATED MODULE: ./src/components/Buttons/Grey/index.js


function GreySmall(props) {
    return /*#__PURE__*/ _jsx("button", {
        className: `${css.GreySmall} ${css.button}`,
        children: props.text
    });
}
function GreyMedium(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `${(Grey_module_default()).GreyMedium} ${(Grey_module_default()).button}`,
        children: props.text
    });
}
function GreyBig(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("button", {
        className: `${(Grey_module_default()).GreyBig} ${(Grey_module_default()).button}`,
        children: props.text
    });
}

// EXTERNAL MODULE: external "next/link.js"
var link_js_ = __webpack_require__(5384);
var link_js_default = /*#__PURE__*/__webpack_require__.n(link_js_);
// EXTERNAL MODULE: ./src/components/Buttons/Outline/Outline.module.css
var Outline_module = __webpack_require__(8965);
var Outline_module_default = /*#__PURE__*/__webpack_require__.n(Outline_module);
;// CONCATENATED MODULE: ./src/components/Buttons/Outline/index.js



function OutlineSmall(props) {
    let link = props.link ? props.link : "#";
    if (props.background) return /*#__PURE__*/ jsx_runtime_.jsx((link_js_default()), {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            style: {
                backgroundImage: "url(" + `${props.background}` + ")",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
                backgroundPosition: "center"
            },
            className: `${(Outline_module_default()).OutlineSmall} ${(Outline_module_default()).button}`,
            children: props.text
        })
    });
    return /*#__PURE__*/ jsx_runtime_.jsx((link_js_default()), {
        href: link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: `${(Outline_module_default()).OutlineSmall} ${(Outline_module_default()).button}`,
            children: props.text
        })
    });
}
function OutlineMedium(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx((link_js_default()), {
        href: props.link,
        children: /*#__PURE__*/ jsx_runtime_.jsx("button", {
            className: `${(Outline_module_default()).OutlineMedium} ${(Outline_module_default()).button}`,
            children: props.text
        })
    });
}
function OutlineBig(props) {
    return /*#__PURE__*/ _jsx("button", {
        className: `${css.OutlineBig} ${css.button}`,
        children: props.text
    });
}

;// CONCATENATED MODULE: ./src/components/Buttons/index.js
// export { default as PrimaryButton } from "./Primary"
// export { default as VideoButton } from "./VideoButton"










/***/ })

};
;