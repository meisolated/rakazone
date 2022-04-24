import Image from "next/image"
import css from "./VideoButton.module.css"
import playicon from "../../../assets/img/playicon.svg"
import Link from 'next/link'
function VideoButton(props) {
    let link = props.where || '/'
    return (
        <Link href={link} passHref>
            <div className={css.video_button_wrapper}>
                <div className={css.video_button}>
                    <div className={css.button_wrapper}>
                        <Image src={playicon} className={css.video_button_icon} layout="responsive" height={0} width={0} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}


export function VideoBtnSmall(props) {
    let link = props.where || '/'
    return <Link href={link} passHref>
        <div className={css.video_button_wrapper_small}>
            <div className={css.video_button_small}>
                <div className={css.button_wrapper_small}>
                    <Image src={playicon} className={css.video_button_icon_small} layout="responsive" height={30} width={30} alt="" />
                </div>
            </div>
        </div>
    </Link>
}

export default VideoButton
