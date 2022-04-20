import css from "./BuyMerch.module.css"
import bag from "../../assets/img/bag.svg"
import Image from "next/image"
import cross from '../../assets/img/cross.svg'
import { useState } from "react"
import { GreyMedium } from "../Buttons"
export default function BuyMerch() {
    const [show, setShow] = useState(true)

    function removeAlert() {
        if (show) {
            setShow(false)
        }
        else {
            setShow(true)
        }
    }
    return (
        <>
            <div className={css.buy_merch}>
                <div className={css.oneblock}>
                    <Image src={bag} width={50} height={50} alt="bag" className={css.oneblock} />
                    <h1 className={`${css.oneblock} pd-left`}>Store</h1>
                </div>
                <h2 className={css.title}>Support my content by purchasing my merch.</h2>
                <p className={css.sub_title}>Live stream every day at 9:30pm. I play GTA V RolePlay, Valorant, Counter Strike and many other fun games.</p>
                {show ? <div className={css.temp_alert}>
                    <div className={css.temp_type_alert}> <p>note</p></div>
                    <p className={css.temp_alert_text}>We are currently trying to get in touch with RakaZone to make merch available for you.</p>
                    <Image src={cross} width={40} height={30} alt="cross" className={css.cross_btn} onClick={removeAlert} />
                </div> : <></>}
                <div className="pd-bottom" />
                <GreyMedium text="Browse Merch" />
            </div>
        </>
    )
}
