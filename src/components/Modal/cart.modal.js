import { Close } from "assets/svg/index.js"
import { Primary } from "components/Buttons/index.js"
import { useEffect, useRef, useState } from "react"
import css from "./cart.module.css"
import commonCSS from "./Modal.module.css"

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
        return () => { }
    }, [props.show])

    if (props.show === false) return null

    return (
        <>
            <div className={commonCSS.modal} ref={modal}>
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
