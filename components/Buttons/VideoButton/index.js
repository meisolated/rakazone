import Image from "next/image"
import css from "./VideoButton.module.css"
import playicon from "../../../assets/img/playicon.svg"
function VideoButton(promps) {
    return (
        <div className={css.video_button_wrapper}>
            <div className={css.video_button}>
                <div className={css.button_wrapper}>
                    <Image src={playicon} className={css.video_button_icon} layout="responsive" height={0} width={0} alt="" />
                </div>
            </div>
        </div>
    )
}

export default VideoButton
