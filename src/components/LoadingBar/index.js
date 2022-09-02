import useWindowSize from "Hooks/windowResize.hook.js"
import Image from "next/image"
import { useEffect, useState } from "react"
import desktop from "../../assets/img/png/wallpaper_dark_desktop.png"
import mobile from "../../assets/img/png/wallpaper_dark_mobile.png"
import css from "./LoadingBar.module.css"

// https://codepen.io/kdbkapsere/pen/qQXdvq

function LoadingBar() {
  const windowSize = useWindowSize()
  let [active, setActive] = useState(false)
  useEffect(() => {
    setTimeout(() => {
      setActive(true)
    }, 1000)
  })

  return (
    <>
      <div className={css.loading} />
      <div className={`${css.test_loading} ${active ? css.test_active : []}`}>
        <Image src={windowSize.width > 1024 ? desktop : mobile} className={css.bg_img} alt="" priority quality={100} />
        <div className={css.test_loading_image}></div>
        <div className={css.test_loading_progress} />
      </div>
    </>
  )
}

export default LoadingBar
