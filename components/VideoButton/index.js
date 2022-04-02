import Image from "next/image"
import css from './VideoButton.module.css'
function VideoButton(promps) {
    return (
        <div className={css.video_button_wrapper}>
            <div className={css.video_button}>
                <Image
                    src="https://raka.zone/assets/img/playicon.svg"
                    className="image video-button-icon"
                    width={promps.w}
                    height={promps.h}
                    alt=""
                />
            </div>
        </div >
    )
}

export default VideoButton
