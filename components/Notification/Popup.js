import Image from "next/image"
import added_to_cart from "../../assets/bag-tick.svg"
import css from "./Popup.module.css"
import { useState } from "react"
export default function Popup({ popupText, popupType }) {
    const [showPopup, setShowPopup] = useState(true)
    setTimeout(() => {
        setShowPopup(false)
    }, 2000)
    return (
        <>
            <div className={`${css.popup_wrapper} ${showPopup ? css.show_popup : css.hide_popup}`}>
                <div className={css.popup_main}>
                    <div className={css.popup_text} dangerouslySetInnerHTML={{ __html: popupText }} />
                    <Image style={{ padding: "5px" }} alt="" src={added_to_cart} width={30} height={30} />
                </div>
            </div>
        </>
    )
}
