import css from "./LoadingBar.module.css"
import Image from "next/image"
// import LogoWithOutText from "../../assets/img/logowithouttext.png"
import desktop from "../../assets/img/wallpaper_dark_desktop.png"
import mobile from "../../assets/img/wallpaper_dark_mobile.png"

import { useState, useEffect } from "react"
function LoadingBar() {

    let [active, setActive] = useState(false)
    let quotes = "DO WHAT YOU LOVE, DON'T LOVE WHAT YOU DO"
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 1000)
        if (typeof window !== 'undefined') {
            // Handler to call on window resize
            function handleResize() {
                // Set window width/height to state
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }

            // Add event listener
            window.addEventListener("resize", handleResize)

            // Call handler right away so state gets updated with initial window size
            handleResize()

            // Remove event listener on cleanup
            return () => window.removeEventListener("resize", handleResize)
        }
    }, [])

    return (
        <>
            <div className={css.loading} />
            {/* <a>{windowSize.width}</a> */}
            <div className={`${css.test_loading} ${active ? css.test_active : []}`}>
                <Image src={windowSize.width > 1024 ? desktop : mobile} className={css.bg_img} alt="" />
                <div className={css.test_loading_image}>{/* <Image  placeholder="blur" src={LogoWithOutText} width={900} height={1000} alt="" /> */}</div>
                <div className={css.test_loading_progress} />
                {/* <h1 className={css.quote}>{quotes}</h1> */}
            </div>
        </>
    )
}

export default LoadingBar
