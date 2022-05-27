import css from "./LoadingBar.module.css"
// import Image from "next/image"
// import LogoWithOutText from "../../assets/img/logowithouttext.png"
import { useState, useEffect } from "react"
function LoadingBar() {
    let [active, setActive] = useState(false)
    let quotes = "DO WHAT YOU LOVE, DON'T LOVE WHAT YOU DO"
    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 1000)
    }, [])

    return (
        <>
            <div className={css.loading} />
            <div className={`${css.test_loading} ${active ? css.test_active : []}`}>
                <div className={css.test_loading_image}>{/* <Image  placeholder="blur" src={LogoWithOutText} width={900} height={1000} alt="" /> */}</div>
                <div className={css.test_loading_progress} />
                {/* <h1 className={css.quote}>{quotes}</h1> */}
            </div>
        </>
    )
}

export default LoadingBar
