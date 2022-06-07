import Image from "next/image"
import css from "./VideoButton.module.css"
import playicon from "../../../assets/svg/src/playicon.svg"
import Link from "next/link"
export function VideoBtnBig(props) {
    let link = props.where || "/"
    return (
        <Link href={link} passHref>
            <div className={css.video_button_wrapper_big}>
                <div className={css.video_button_big}>
                    <div className={css.button_wrapper_big}>
                        <Image src={playicon} className={css.video_button_icon_big} layout="responsive" height={30} width={30} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export function VideoBtnMedium(props) {
    let link = props.where || "/"
    return (
        <Link href={link} passHref>
            <div className={css.video_button_wrapper_medium}>
                <div className={css.video_button_medium}>
                    <div className={css.button_wrapper_medium}>
                        <Image src={playicon} className={css.video_button_icon_medium} layout="responsive" height={30} width={30} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}

export function VideoBtnSmall(props) {
    let link = props.where || "/"
    return (
        <Link href={link} passHref>
            <div className={css.video_button_wrapper_small}>
                <div className={css.video_button_small}>
                    <div className={css.button_wrapper_small}>
                        <Image src={playicon} className={css.video_button_icon_small} layout="responsive" height={30} width={30} alt="" />
                    </div>
                </div>
            </div>
        </Link>
    )
}
