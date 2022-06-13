import css from "./Test.module.css"
import windowScroll from "../../Hooks/windowScroll.hook.js"
import testImage from "../../assets/img/png/insta07.png"
import Image from "next/image.js"

export default function App() {
    // let scroll = windowScroll()

    return (
        <div className="container-default">
            <div className={css.video_wrapper}>
                <div className={css.controls_wrapper}>
                    <div className={css.controls}>
                        <div className={css.timeline_wrapper}>
                            <div className={css.preview_image_wrapper}>
                                <Image src={testImage} width={100} height={100} alt="" />
                            </div>
                            <div className={css.line}></div>
                        </div>
                        <div className={css.bottom_controls}>
                            <div className={css.controls_left}>
                                <div className={css.miniplayer_container}>
                                    <div className={`${css.settings_btn} material-icons-round`}>pause</div>
                                </div>
                                <div className={`${css.volume_wrap} ${true ? css.volume_show : []}`}>
                                    <div className={`${css.volume_btn} material-icons-round`}>{"volume_up"} </div>
                                    <div className={css.volume_panel}>
                                        <div ref={volumeController} className={css.volume_slider}>
                                            <div className={css.volume_slider_track}>
                                                <div className={css.volume_slider_progress} style={{ width: 50 + "%" }}>
                                                    <div className={css.volume_slider_handle}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={css.controls_right}>
                                <div className={css.miniplayer_container}>
                                    <div className={`${css.settings_btn} material-icons-round`}>settings</div>
                                </div>
                                <div className={css.miniplayer_container}>
                                    <div className={`${css.miniplayer_btn} material-icons-round`}>branding_watermark</div>
                                </div>
                                <div className={css.theater_container}>
                                    <div className={`${css.theater_btn} material-icons-round`}>{true ? "crop_7_5" : "crop_7_5"}</div>
                                </div>
                                <div className={css.fullscreen_container}>
                                    <div className={`${css.fullscreen_btn} material-icons-round`}>{true ? "fullscreen" : "fullscreen_exit"}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <video autoPlay controls={true} className={css.video} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </div>
        </div>
    )
}
