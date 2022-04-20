import css from "./Header.module.css"
import Image from "next/image"
import { useState } from "react"
import art_146 from "../../assets/img/146.svg"

export default function Header() {
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
                                        <a>Home</a>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <a>About</a>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <a>Blog</a>
                                    </li>
                                    <li className={css.nav_item_wrapper}>
                                        <a>Products</a>
                                    </li>
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
                        <a className={css.nav_item}> Home</a>
                        <a className={css.nav_item}> About</a>
                        <a className={css.nav_item}> Store</a>
                        <a className={css.nav_item}> Vlog</a>
                        <a className={css.nav_item}> Contact</a>
                        {/* <a href="#settings"><span className={css.nav_item}> Settings</a>
                <a href="#credits"><span className={css.nav_item}> Credits</a> */}
                    </div>
                    <div className={css.nav_bottom}><a>Copyright © 2022  RakaZone. All rights reserved.</a></div>
                </div>
            </div>
        </>
    )
}

