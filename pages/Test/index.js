import Loading from "../../components/Loading/index.js"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect, createContext, useContext } from "react"
import css from "./Test.module.css"
import Head from "next/head"
import Image from "next/image"

import { Bag1, Bag1Clicked, Home, HomeClicked, Profile, ProfileClicked, User, UserClicked } from "../../assets/svg/navicons"

function NavElement({ name, icon, icon_clicked, onClick }) {
    let [clicked, setClicked] = useState(false)
    let [svg, setSvg] = useState(icon)
    let click_toggle = () => setClicked(!clicked)
    useEffect(() => {
        setSvg(clicked ? icon_clicked : icon)
    }, [clicked])

    return (
        <div className={`${css.home_button} ${css.nav_buttom} ${clicked ? css.clicked : []}`} onClick={() => click_toggle()}>
            {svg}
            <a>{name}</a>
            <div style={{ width: "100%", justifyContent: "center", display: "flex" }} >
                <div className={`${clicked ? css.clicked_underline : []}`} /></div>
        </div>
    )
}

export default function Test(props) {

    return (
        <>
            <Head>
                <title>Test - RakaZone</title>
            </Head>
            <div className={css.bottom_navbar_container}>
                <div className={css.bottom_navbar}>
                    <NavElement name="Home" icon={Home} icon_clicked={HomeClicked} />
                    <NavElement name="Unity" icon={Profile} icon_clicked={ProfileClicked} />
                    <NavElement name="Shop" icon={Bag1} icon_clicked={Bag1Clicked} />
                    <NavElement name="Profile" icon={User} icon_clicked={UserClicked} />
                </div>
            </div>
        </>
    )
}
