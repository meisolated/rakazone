import css from "./Test.module.css"
import { VideoBtnSmall } from "../../components/Buttons/"
import Image from "next/image"
export default function Text(params) {
    return (
        <>
            <div className="container-default">
                <div className={css.video_item}>
                    <div className={css.image_wrapper}>
                        <Image className={css.video_item_image} src="https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg" width={540} height={300} alt="" />
                        <div className={css.video_filter}></div>
                        <VideoBtnSmall />
                    </div>
                    <div className={css.video_content}>
                        <div>
                            <h3 className={css.title}>iOS 15 is now released: Top 5 new features!</h3>
                            <div className={css.video_about}>
                                <div className={css.video_duration}>
                                    <div>12</div>
                                    <div>&nbsp;min</div>
                                </div>
                                <div className={css.video_about_divider}></div>
                                <div>15/9/21</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
