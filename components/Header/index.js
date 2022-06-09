import css from "./Header.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import { OutlineSmall } from "../Buttons"
import { useRouter } from "next/router"
import Link from "next/link"
import shoppingCart from "../../assets/svg/src/bag-2.svg"
import { Explore, ExploreClicked, Bag1, Bag1Clicked, Home, HomeClicked, Profile, ProfileClicked } from "../../assets/svg/navicons"
import useWindowSize from "../../Hooks/windowResize.hook.js"
import windowScroll from "../../Hooks/windowScroll.hook.js"

const tabs = [
    {
        name: "Home",
        icon: Home,
        iconClicked: HomeClicked,
        path: "/",
        active: false,
    },

    {
        name: "Explore",
        icon: Explore,
        iconClicked: ExploreClicked,
        path: "/Explore",
        active: false,
    },
    {
        name: "Shop",
        icon: Bag1,
        iconClicked: Bag1Clicked,
        path: "/Shop",
        active: false,
    },
    {
        name: "Profile",
        icon: Profile,
        iconClicked: ProfileClicked,
        path: "/Profile",
        active: false,
    },
]

export default function Header({ isLoggedIn, userData }) {
    const router = useRouter()
    const pathname = router.pathname
    isLoggedIn = false
    const windowSize = useWindowSize()
    const scrollY = windowScroll()
    let [clicked, setClicked] = useState({
        Home: {
            name: "Home",
            icon: Home,
            iconClicked: HomeClicked,
            path: "/",
            active: false,
        },
        Explore: {
            name: "Explore",
            icon: Explore,
            iconClicked: ExploreClicked,
            path: "/Explore",
            active: false,
        },
        Shop: {
            name: "Shop",
            icon: Bag1,
            iconClicked: Bag1Clicked,
            path: "/Shop",
            active: false,
        },
        Profile: {
            name: "Profile",
            icon: Profile,
            iconClicked: ProfileClicked,
            path: "/profile",
            active: false,
        },
    })

    const OnNavClicked = (tab) => {
        let newClicked = { ...clicked }
        for (let key in newClicked) {
            newClicked[key].active = false
        }
        newClicked[tab].active = true
        setClicked(newClicked)
    }

    useEffect(() => {
        switch (pathname) {
            case "/":
                OnNavClicked("Home")
                break
            case "/About":
                OnNavClicked("About")
                break
            case "/Shop":
                OnNavClicked("Shop")
                break
            case "/Profile":
                OnNavClicked("Profile")
                break
            default:
                break
        }
    }, [])

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
                                    <li className={css.nav_item_wrapper}>
                                        <Image src={shoppingCart} />
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
                        </div>
                    </div>
                </div>
            </div>
            <div className={`${css.bottom_navbar_container} ${(windowSize.width > 788) ? css.bottom_navbar_hide : (scrollY.increasing ? css.bottom_navbar_hide : css.bottom_navbar_show)}`}>
                <div className={css.bottom_navbar}>
                    {tabs.map((tab, index) => {
                        let active = clicked[tab.name].active
                        return (
                            <Link href={tab.path} passHref key={index}>
                                <div className={`${css.home_button} ${css.bottom_navbar_button} ${active ? css.bottom_navbar_clicked : []}`} key={index} onClick={() => OnNavClicked(tab.name)}>
                                    {active ? <tab.iconClicked /> : <tab.icon />}
                                    <a>{tab.name}</a>
                                    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                        <div className={`${active ? css.bottom_navbar_clicked_underline : []}`} />
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </div>
        </>
    )
}
