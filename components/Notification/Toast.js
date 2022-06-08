import Image from "next/image"
import added_to_cart from "../../assets/svg/src/bag-tick.svg"
import css from "./Toast.module.css"
import { useState, useEffect, useRef } from "react"
import { useRouter } from "next/router"
import PropTypes from "prop-types"
import { toastService } from "../../handler/toast.handler.js"
export { Toast }

Toast.propTypes = {
    id: PropTypes.string,
    fade: PropTypes.bool,
}

Toast.defaultProps = {
    id: "default-toast",
    fade: true,
}

function Toast({ id, fade }) {
    const mounted = useRef(false)
    const router = useRouter()
    const [toasts, setToasts] = useState([])

    useEffect(() => {
        mounted.current = true

        // subscribe to new toast notifications
        const subscription = toastService.onToast(id).subscribe((toast) => {

            // clear toasts when an empty toast is received
            if (!toast.message) {
                setToasts((toasts) => {
                    // filter out toasts without 'keepAfterRouteChange' flag
                    const filteredToasts = toasts.filter((x) => x.keepAfterRouteChange)

                    // remove 'keepAfterRouteChange' flag on the rest
                    return omit(filteredToasts, "keepAfterRouteChange")
                })
            } else {
                // add toast to array with unique id
                toast.itemId = Math.random()
                setToasts((toasts) => [...toasts, toast])

                // auto close toast if required
                if (toast.autoClose) {
                    setTimeout(() => removeToast(toast), 3000)
                }
            }
        })

        // clear toasts on location change
        const clearToasts = () => toastService.clear(id)
        router.events.on("routeChangeStart", clearToasts)

        // clean up function that runs when the component unmounts
        return () => {
            mounted.current = false

            // unsubscribe to avoid memory leaks
            subscription.unsubscribe()
            router.events.off("routeChangeStart", clearToasts)
        }

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function omit(arr, key) {
        return arr.map((obj) => {
            const { [key]: omitted, ...rest } = obj
            return rest
        })
    }

    function removeToast(toast) {
        if (!mounted.current) return

        if (fade) {
            // fade out toast
            setToasts((toasts) => toasts.map((x) => (x.itemId === toast.itemId ? { ...x, fade: true } : x)))

            // remove toast after faded out
            setTimeout(() => {
                setToasts((toasts) => toasts.filter((x) => x.itemId !== toast.itemId))
            }, 250)
        } else {
            // remove toast
            setToasts((toasts) => toasts.filter((x) => x.itemId !== toast.itemId))
        }
    }

    if (!toasts.length) return null

    return (
        <>
            {toasts.map((toast, index) => (
                <>
                    <div className={`${css.popup_wrapper}`} key={index}>
                        <div className={css.popup_main}>
                            <div className={css.popup_text} dangerouslySetInnerHTML={{ __html: toast.message }} />
                            <Image style={{ padding: "5px" }} alt="" src={added_to_cart} width={30} height={30} />
                        </div>
                    </div>
                </>
            ))}
        </>
    )
}
