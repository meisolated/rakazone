exports.id = 998;
exports.ids = [998];
exports.modules = {

/***/ 9720:
/***/ ((module) => {

// Exports
module.exports = {
	"notification_main": "Header_notification_main__YTtgC",
	"notification_text": "Header_notification_text__05ZdB"
};


/***/ }),

/***/ 4299:
/***/ ((module) => {

// Exports
module.exports = {
	"popup_wrapper": "Toast_popup_wrapper__P7_C1",
	"show": "Toast_show__vhlcL",
	"slide-in": "Toast_slide-in__Dr3WY",
	"hide": "Toast_hide__Dq6FB",
	"slide-out": "Toast_slide-out__I3jWm",
	"popup_main": "Toast_popup_main__hg8TY",
	"popup_text": "Toast_popup_text__Rks2D"
};


/***/ }),

/***/ 998:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "h": () => (/* reexport */ Header),
  "F": () => (/* reexport */ Toast)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./src/components/Notification/Header.module.css
var Header_module = __webpack_require__(9720);
var Header_module_default = /*#__PURE__*/__webpack_require__.n(Header_module);
;// CONCATENATED MODULE: ./src/components/Notification/Header.js


function Header({ notificationText , notificationType  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: (Header_module_default()).notification_main,
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `${(Header_module_default()).notification_text}`,
                    dangerouslySetInnerHTML: {
                        __html: notificationText
                    }
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "pd-bottom-high"
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/assets/svg/src/bag-tick.svg
/* harmony default export */ const bag_tick = ({"src":"/_next/static/media/bag-tick.73d209a4.svg","height":24,"width":24});
// EXTERNAL MODULE: ./src/components/Notification/Toast.module.css
var Toast_module = __webpack_require__(4299);
var Toast_module_default = /*#__PURE__*/__webpack_require__.n(Toast_module);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: external "prop-types"
var external_prop_types_ = __webpack_require__(580);
var external_prop_types_default = /*#__PURE__*/__webpack_require__.n(external_prop_types_);
// EXTERNAL MODULE: ./src/handler/toast.handler.js
var toast_handler = __webpack_require__(817);
;// CONCATENATED MODULE: ./src/components/Notification/Toast.js








Toast.propTypes = {
    id: (external_prop_types_default()).string,
    fade: (external_prop_types_default()).bool
};
Toast.defaultProps = {
    id: "default-toast",
    fade: true
};
function Toast({ id , fade  }) {
    const mounted = (0,external_react_.useRef)(false);
    const router = (0,router_.useRouter)();
    const { 0: toasts1 , 1: setToasts  } = (0,external_react_.useState)([]);
    (0,external_react_.useEffect)(()=>{
        mounted.current = true;
        // subscribe to new toast notifications
        const subscription = toast_handler/* toastService.onToast */.a.onToast(id).subscribe((toast)=>{
            // clear toasts when an empty toast is received
            if (!toast.message) {
                setToasts((toasts)=>{
                    // filter out toasts without 'keepAfterRouteChange' flag
                    const filteredToasts = toasts.filter((x)=>x.keepAfterRouteChange
                    );
                    // remove 'keepAfterRouteChange' flag on the rest
                    return omit(filteredToasts, "keepAfterRouteChange");
                });
            } else {
                // add toast to array with unique id
                toast.itemId = Math.random();
                setToasts((toasts)=>[
                        ...toasts,
                        toast
                    ]
                );
                // auto close toast if required
                if (toast.autoClose) {
                    setTimeout(()=>removeToast(toast)
                    , 3000);
                }
            }
        });
        // clear toasts on location change
        const clearToasts = ()=>toast_handler/* toastService.clear */.a.clear(id)
        ;
        router.events.on("routeChangeStart", clearToasts);
        // clean up function that runs when the component unmounts
        return ()=>{
            mounted.current = false;
            // unsubscribe to avoid memory leaks
            subscription.unsubscribe();
            router.events.off("routeChangeStart", clearToasts);
        };
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    function omit(arr, key) {
        return arr.map((obj)=>{
            const { [key]: omitted , ...rest } = obj;
            return rest;
        });
    }
    function removeToast(toast) {
        if (!mounted.current) return;
        if (fade) {
            // fade out toast
            setToasts((toasts)=>toasts.map((x)=>x.itemId === toast.itemId ? {
                        ...x,
                        fade: true
                    } : x
                )
            );
            // remove toast after faded out
            setTimeout(()=>{
                setToasts((toasts)=>toasts.filter((x)=>x.itemId !== toast.itemId
                    )
                );
            }, 500);
        } else {
            // remove toast
            setToasts((toasts)=>toasts.filter((x)=>x.itemId !== toast.itemId
                )
            );
        }
    }
    if (!toasts1.length) return null;
    return /*#__PURE__*/ jsx_runtime_.jsx(jsx_runtime_.Fragment, {
        children: toasts1.map((toast, index)=>{
            return /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: `${(Toast_module_default()).popup_wrapper} ${toast.fade ? (Toast_module_default()).hide : (Toast_module_default()).show} `,
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: (Toast_module_default()).popup_main,
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: (Toast_module_default()).popup_text,
                            dangerouslySetInnerHTML: {
                                __html: toast.message
                            }
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            style: {
                                padding: "5px"
                            },
                            alt: "",
                            src: bag_tick,
                            width: 30,
                            height: 30
                        })
                    ]
                })
            }, index);
        })
    });
};

;// CONCATENATED MODULE: ./src/components/Notification/index.js




/***/ })

};
;