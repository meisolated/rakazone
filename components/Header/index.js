import css from "./Header.module.css"
import Image from "next/image"
import { useState } from "react"
import { OutlineSmall } from "../Buttons"
import Link from "next/link"

export default function Header({ isLoggedIn, userData }) {
    isLoggedIn = false
    let [isOpen, setIsOpen] = useState(false)
    function menuBtnClick() {
        if (isOpen) {
            setIsOpen(false)
        } else {
            setIsOpen(true)
        }
    }

    return (
        <>
            <div className={css.container}>
                <div className="container-default">
                    <div className={css.header_wrapper}>
                        <div className={css.left}>
                            <Image src="https://raka.zone/assets/img/logo.png" className={css.logoimg} alt="a" width={164} height={60} />
                        </div>
                        <div className={css.right}>
                            <nav className={css.nav_menu}>
                                <ul className={css.header_navigation}>
                                    <li className={css.nav_item_wrapper}>
                                        <Link href={"/"} passHref>
                                            <a>Home</a>
                                        </Link>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <Link href={"/About"} passHref>
                                            <a>About</a>
                                        </Link>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <Link href={"/Shop"} passHref>
                                            <a>Shop</a>
                                        </Link>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <Link href={"/Vlog"} passHref>
                                            <a>Vlog</a>
                                        </Link>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <Link href={"/Contact"} passHref>
                                            <a>Contact</a>
                                        </Link>
                                    </li>
                                    {isLoggedIn ? (
                                        <li className={css.nav_item_wrapper}>
                                            <OutlineSmall where="http://localhost:3001/api/v1/auth/google" background={userData.profile_pic} text={userData.name} />
                                        </li>
                                    ) : (
                                        <li className={css.nav_item_wrapper}>
                                            <OutlineSmall where="http://localhost:3001/api/v1/auth/google" text="Login" />
                                        </li>
                                    )}
                                </ul>
                            </nav>

                            <div className={`${css.menu_button}`} onClick={menuBtnClick}>
                                <div className={css.header_menu_button_icon_wrapper}>
                                    <div className={css.icon_wrapper}>
                                        <div className={css.header_menu_button_icon_top}></div>
                                        <div className={css.header_menu_button_icon_middle}></div>
                                        <div className={css.header_menu_button_icon_bottom}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.slidebar} ${isOpen ? css.open : css.close}`}>
                <div className={css.slidebar_content}>
                    <div className={css.nav_left}>
                        <Link href={"/"} passHref>
                            <a className={css.nav_item} onClick={() => setIsOpen(false)}> Home</a></Link>
                        <Link href={"/About"} passHref>
                            <a className={css.nav_item} onClick={() => setIsOpen(false)}> About</a></Link>
                        <Link href={"/Shop"} passHref>
                            <a className={css.nav_item} onClick={() => setIsOpen(false)}> Shop</a></Link>
                        <Link href={"/Vlog"} passHref>
                            <a className={css.nav_item} onClick={() => setIsOpen(false)}> Vlog</a></Link>
                        <Link href={"/Contact"} passHref>
                            <a className={css.nav_item} onClick={() => setIsOpen(false)}> Contact</a></Link>
                        {/* <a href="#settings"><span className={css.nav_item}> Settings</a>
                <a href="#credits"><span className={css.nav_item}> Credits</a> */}
                    </div>
                    <div className={css.nav_bottom}>
                        <a>Copyright © 2022 RakaZone. All rights reserved.</a>
                    </div>
                </div>
            </div>
        </>
    )
}
