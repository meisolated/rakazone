import Image from "next/image"
import css from "./VideoButton.module.css"
import { useState, useEffect, createRef } from "react"

function VideoButton(promps) {
    const size = useWindowSize()
    const w = size.width
    const width = w > 1000 ? 120 : w > 900 ? 90 : w > 500 ? 80 : 80
    const imgwidth = (width / 100) * 35

    return (
        <div className={css.video_button_wrapper} style={{ width: width, height: width }}>
            <div className={css.video_button}>
                <Image src="https://raka.zone/assets/img/playicon.svg" className="image video-button-icon" width={imgwidth} height={imgwidth} alt="" />
            </div>
        </div>
    )
}

function useWindowSize() {
    const [windowSize, setWindowSize] = useState({
        width: undefined,
        height: undefined,
    })

    useEffect(() => {
        // only execute all the code below in client side
        if (typeof window !== "undefined") {
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
    }, []) // Empty array ensures that effect is only run on mount
    return windowSize
}

export default VideoButton
