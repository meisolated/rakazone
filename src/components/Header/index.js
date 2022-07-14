import css from "./Header.module.css"
import Image from "next/image"
import { useState, useEffect } from "react"
import { OutlineSmall } from "../Buttons"
import { useRouter } from "next/router"
import Link from "next/link"
import shoppingCart from "../../assets/svg/src/bag-2.svg"
import getConfig from "next/config"
import { Explore, ExploreClicked, Bag1, Bag1Clicked, Home, HomeClicked, Profile, ProfileClicked, AboutMe, AboutMeClicked, Wallpaper, WallpaperClicked } from "../../assets/svg/navicons"
import useWindowSize from "../../Hooks/windowResize.hook.js"
import windowScroll from "../../Hooks/windowScroll.hook.js"
import axios from "axios"
const { publicRuntimeConfig } = getConfig()
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

const exploreTabs = [
    {
        name: "About",
        path: "/About",
        active: false,
        icon: AboutMe,
        iconClicked: AboutMeClicked,
    },
    {
        name: "Wallpaper",
        path: "/Wallpaper",
        active: false,
        icon: Wallpaper,
        iconClicked: WallpaperClicked,
    },
    {
        name: "Uploads",
        path: "/Uploads",
        active: false,
        icon: Home,
        iconClicked: HomeClicked,
    },
    {
        name: "Trending",
        path: "/Trending",
        active: false,
        icon: Home,
        iconClicked: HomeClicked,
    },
]

export default function Header() {
    const router = useRouter()
    const pathname = router.pathname
    const windowSize = useWindowSize()
    const scrollY = windowScroll()
    let [userData, setUserData] = useState({ name: null, email: null, profile_pic: null })

    const [clicked, setClicked] = useState({
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
    const [exploreClicked, setExploreClicked] = useState({
        About: {
            name: "About",
            path: "/About",
            active: false,
            icon: AboutMe,
            iconClicked: AboutMeClicked,
        },
        Wallpaper: {
            name: "Wallpaper",
            path: "/Wallpaper",
            active: true,
            icon: Wallpaper,
            iconClicked: WallpaperClicked,
        },
        Uploads: {
            name: "Uploads",
            path: "/Uploads",
            active: false,
            icon: Home,
            iconClicked: HomeClicked,
        },
        Trending: {
            name: "Trending",
            path: "/Trending",
            active: false,
            icon: Home,
            iconClicked: HomeClicked,
        }
    })
    let [subNavbar, setSubNavbar] = useState(false)

    const OnNavClicked = (tab) => {
        console.log(tab)
        if (!clicked[tab]) return
        let newClicked = { ...clicked }
        for (let key in newClicked) {
            newClicked[key].active = false
        }
        newClicked[tab].active = true
        if (tab === "Explore") {
            setSubNavbar(!subNavbar)
        } else {
            setSubNavbar(false)
            router.push(newClicked[tab].path)
        }
        setClicked(newClicked)
    }
    const OnExploreClicked = (tab) => {

        if (!exploreClicked[tab]) return
        let newExploreClicked = { ...exploreClicked }
        for (let key in newExploreClicked) {
            newExploreClicked[key].active = false
        }
        newExploreClicked[tab].active = true
        router.push(newExploreClicked[tab].path)
        setExploreClicked(newExploreClicked)
    }

    useEffect(() => {

        axios.get("/api/v1/userData").then((response) => {
            let user = response.data.data.user
            setUserData({ email: user.email, name: user.name, profile_pic: user.profile_pic })
        }).catch((error) => {
            console.log(error)
        })

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
            case "/Wallpaper":
                OnExploreClicked("Wallpaper")
                break
            case "/Uploads":
                OnExploreClicked("Uploads")
                break
            case "/Trending":
                OnExploreClicked("Trending")
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
                                        <Image src={shoppingCart} alt="" />
                                    </li>

                                    {userData.name ? (
                                        <li className={css.nav_item_wrapper}>
                                            <OutlineSmall link={publicRuntimeConfig.apiUrl + "auth/google"} background={userData.profile_pic} text={userData.name} />
                                        </li>
                                    ) : (
                                        <li className={css.nav_item_wrapper}>
                                            <OutlineSmall link={publicRuntimeConfig.apiUrl + "auth/google"} text="Login" />
                                        </li>
                                    )}
                                </ul>
                            </nav>
                            {windowSize.width < 788 ? <div className={css.nav_item_wrapper}>
                                <Image src={shoppingCart} alt="" />
                            </div> : []}
                        </div>
                    </div>
                </div>
            </div>

            <div className={css.bottom_navbar_wrapper}>
                <div className={`${css.bottom_navbar_container} ${windowSize.width > 788 ? css.bottom_navbar_hide : scrollY.increasing ? css.bottom_navbar_hide : css.bottom_navbar_show}`}>
                    <div className={css.bottom_navbar}>
                        {tabs.map((tab, index) => {
                            let active = clicked[tab.name].active
                            return (
                                <div className={`${css.bottom_navbar_button} ${css.bottom_navbar_common_container} ${active ? css.bottom_navbar_clicked : []}`} key={"t-" + index} onClick={() => OnNavClicked(tab.name)}>
                                    {active ? <tab.iconClicked /> : <tab.icon />}
                                    <a>{tab.name}</a>
                                    <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                        <div className={`${active ? css.bottom_navbar_clicked_underline : []}`} />
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{ zIndex: 99 }} className={`${css.bottom_navbar_container} ${windowSize.width > 788 ? css.sub_bottom_navbar_hide : subNavbar ? (scrollY.increasing ? css.sub_bottom_navbar_hide : css.sub_bottom_navbar_show) : css.sub_bottom_navbar_hide}`}>
                    <div className={css.bottom_navbar}>
                        {exploreTabs.map((tab, index) => {
                            let active = exploreClicked[tab.name].active
                            return (
                                <div href={tab.path} key={"t-" + index} onClick={() => OnExploreClicked(tab.name)} className={css.bottom_navbar_expore_button}>
                                    <div
                                        className={`${css.bottom_navbar_button} ${css.sub_bottom_navbar_common_container} ${active ? css.bottom_navbar_clicked : []}`}
                                        key={"t-" + index}
                                        onClick={() => OnNavClicked(tab.name)}
                                    >
                                        {active ? <tab.iconClicked /> : <tab.icon />}
                                        <a>{tab.name}</a>
                                        <div style={{ width: "100%", justifyContent: "center", display: "flex" }}>
                                            <div className={`${active ? css.bottom_navbar_clicked_underline : []}`} />
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}
