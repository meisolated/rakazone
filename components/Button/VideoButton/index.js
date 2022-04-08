import Image from "next/image"
import css from "./VideoButton.module.css"
import { useState, useEffect, createRef } from "react"

function VideoButton(promps) {
    return (
        <div className={css.video_button_wrapper}>
            <div className={css.video_button}>
                <div className={css.button_wrapper}>
                    <Image src="https://raka.zone/assets/img/playicon.svg" className={css.video_button_icon} layout="responsive" height={0} width={0} alt="" />
                </div>
            </div>
        </div>
    )
}

export default VideoButton
