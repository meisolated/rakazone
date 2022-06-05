import Image from "next/image"
import added_to_cart from "../../assets/svg/bag-tick.svg"
import css from "./Toast.module.css"
import { useState } from "react"
export default function Popup({ popupText, popupType }) {
    let [show, setShow] = useState(true)
    if (!popupText) return <></>
    setTimeout(() => {
        setShow(false)
    }, 6000)
    return (
        <>{show ?
            <div className={`${css.popup_wrapper}`} >
                <div className={css.popup_main}>
                    <div className={css.popup_text} dangerouslySetInnerHTML={{ __html: popupText }} />
                    <Image style={{ padding: "5px" }} alt="" src={added_to_cart} width={30} height={30} />
                </div>
            </div> : <></>}
        </>
    )
}
