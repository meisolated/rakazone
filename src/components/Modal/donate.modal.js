import react, { useState, useEffect, useRef } from "react"
import css from "./Modal.module.css"
import { Primary } from "../Buttons"

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
            <div className={css.modal} ref={modal} >
                <div className={`${css.modal_container} ${show && css.show_modal}`}>
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