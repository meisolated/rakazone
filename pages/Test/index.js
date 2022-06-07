import Loading from "../../components/Loading/index.js"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect, createContext, useContext } from "react"
import css from "./Test.module.css"
import Head from "next/head"
import Modal from "../../components/Modal/index.js"
import homeIcon from "../../assets/svg/home.svg"
import homeIcon_clicked from "../../assets/svg/clicked_home.svg"
import Image from "next/image"

export default function Test(props) {
    let [clicked, setClicked] = useState(false)
    let [img, setImg] = useState(homeIcon)

    useEffect(() => {
        setImg(clicked ? homeIcon_clicked : homeIcon)
    }, [clicked])
    // useEffect(() => {
    //     let first_pop = localStorage.getItem("pop_status")
    //     if (first_pop) {
    //         setFirst(false)
    //     }
    // }, [])
    // const [show, setShow] = useState(false)
    // const [first, setFirst] = useState(true)
    // const onClose = () => {
    //     setShow(!show)
    // }
    return (
        <>
            <Head>
                <title>Test - RakaZone</title>
            </Head>
            {/* <div className="container-default">
                <a onClick={() => (first ? setShow(true) : [])}>{first ? "Show Popup" : "Not first"}</a>
                {show ? <Modal onClose={onClose} /> : <></>}
            </div> */}
            <div className={css.bottom_navbar_container}>
                <div className={css.bottom_navbar}>
                    <div className={`${css.home_button} ${css.nav_buttom} ${clicked ? css.clicked : []}`} onClick={() => setClicked(true)}>
                        <Image src={img} alt="" />
                        <a>Home</a>
                    </div>
                    <div className={`${css.shop_button} ${css.nav_buttom}`}>
                        <Image src={homeIcon} alt="" />
                        <a>Home</a>
                    </div>
                    <div className={`${css.community_button} ${css.nav_buttom}`}>
                        <Image src={homeIcon} alt="" />
                        <a>Home</a>
                    </div>
                    <div className={`${css.profile_button} ${css.nav_buttom}`}>
                        <Image src={homeIcon} alt="" />
                        <a>Home</a>
                    </div>
                </div>
            </div>
        </>
    )
}
