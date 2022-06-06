import { useState, useEffect } from "react"
import css from "./Modal.module.css"
import { Primary } from "../Buttons"

export default function Modal({ onClose, whatToShow, ...props }) {
    const [show, setShow] = useState(true)

    const closeHandler = () => {
        setShow(false)
        setTimeout(() => {
            onClose()
        }, 500)
    }


    const title = "Sponser Me"
    const message = `💲 UPI • rakazonegaming@oksbi <br/> 💲 Sponsor • <a href="https://raka.zone/join" target="_blank"> raka.zone/join </a> <br/> 💲 Donation Via PayPal • <a href="https://raka.zone/paypal" target="_blank">raka.zone/paypal </a> <br/>  <br/> <div style="text-align:center"> Every Tip Is Appreciated 🙏 </div>`
    const button = "Later"

    return (
        <>
            <div className={`${css.modal} ${show ? css.open_animation : css.close_animation}`}>
                <div className={css.outside_modal} onClick={() => closeHandler()}></div>
                <div className={`${css.modal_container}`}>
                    <div className={css.modal_content}>
                        <div className={css.modal_title}>{title}</div>
                        <div className={css.message_wrapper}>
                            <div className={css.modal_message} dangerouslySetInnerHTML={{ __html: message }}></div>
                        </div>
                        <div className={css.modal_buttons} onClick={() => closeHandler()}>
                            <Primary text={button} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
