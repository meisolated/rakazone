import css from './LoadingBar.module.css'
import Image from "next/image"
import LogoWithOutText from "../../assets/img/logowithouttext.png"
import { useState, useEffect } from "react"
function LoadingBar() {
    let [active, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 3000)
    }, [])

    return <div className={`${css.test_loading} ${active ? css.test_active : []}`} >
        <div className={css.test_loading_image}>
            {/* <Image src={LogoWithOutText} width={900} height={1000} alt="" /> */}
        </div>
        <div className={css.test_loading_progress}></div>
    </div>
}

export default LoadingBar
