import css from "./Header.module.css"
import Image from "next/image"

function Header() {
    return (
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

                        <div className={css.menu_button}>

                            <div className={css.header_menu_button_icon_wrapper}>
                                <div className={css.icon_wrapper}>
                                    <div
                                        className={css.header_menu_button_icon_top}

                                    ></div>
                                    <div className={css.header_menu_button_icon_middle} ></div>
                                    <div
                                        className={css.header_menu_button_icon_bottom}

                                    ></div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
