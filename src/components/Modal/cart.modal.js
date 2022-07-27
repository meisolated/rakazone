import commonCSS from "./Modal.module.css"
import css from "./cart.module.css"
import { useState, useEffect, useRef } from "react"
import { Primary } from "components/Buttons/index.js"
import { Close } from "assets/svg/index.js"

export default function DonateModal({ onClose, whatToShow, ...props }) {
    const [show, setShow] = useState(props.show)
    const modal = useRef(null)
    const closeHandler = () => {
        setShow(false)
        setTimeout(() => {
            onClose()
        }, 500)
    }
    useEffect(() => {
        if (modal.current) {
            modal.current.addEventListener("click", (e) => {
                if (e.target === modal.current) {
                    closeHandler()
                }
            })
        }
        setShow(props.show)
        return () => {
        }
    }, [props.show])


    const title = "Sponser Me"
    const message = `💲 UPI • rakazonegaming@oksbi <br/> 💲 Sponsor • <a href="https://raka.zone/join" target="_blank"> raka.zone/join </a> <br/> 💲 Donation Via PayPal • <a href="https://raka.zone/paypal" target="_blank">raka.zone/paypal </a> <br/>  <br/> <div style="text-align:center"> Every Tip Is Appreciated 🙏 </div>`
    const button = "Later"

    if (props.show === false) return null

    return (
        <>
            <div className={commonCSS.modal} ref={modal} >
                <div className={`${css.modal_container} ${show && css.show_modal}`}>
                    <div className={css.modal_content}>
                        <div className={css.header}>
                            <div className={css.title}>Your Cart</div>
                            <div className={css.close} onClick={closeHandler}>
                                <Close />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}