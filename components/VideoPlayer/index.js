import { useRef, useState, useEffect } from "react"
import css from "./VideoPlayer.module.css"
import { toastService } from "../../handler/toast.handler.js"
import Image from "next/image.js"
import testImage from "../../assets/img/png/insta07.png"
export default function VideoPlayer() {
    const videoId = "lyb-COpIrYY"
    const baseUrl = "https://raka.zone/assets/output/"
    let num = 1
    const previewThumbnail = baseUrl + videoId + "/image_preview_" + num + ".jpg"
    const videoPlayer = useRef(null)
    const videoController = useRef(null)
    const volumeController = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const [showEndScreen, setShowEndScreen] = useState(false)
    const [volume, setVolume] = useState({ volumeLevel: 0, volume_icon: "volume_down" })

    const volume_fonts = ["volume_up", "volume_down", "volume_mute"]

    const handleSlider = (e) => {
        setShowVolume(true)
        e.preventDefault()
        const slider = document.getElementsByClassName(css.volume_slider)
        let percent = calculateVolume(e, slider[0])
        if (percent < 0) {
            percent = 0
        } else if (percent > 100) {
            percent = 100
        }
        let volume_icon = percent > 70 ? "volume_up" : percent > 40 ? "volume_down" : percent == 0 ? "volume_off" : "volume_down"
        videoController.current.volume = percent / 100
        setVolume({ volumeLevel: percent, volume_icon: volume_icon })
    }

    const calculateVolume = (click, elm) => {
        const volume_width = elm.offsetWidth
        const click_x = click.clientX - elm.getBoundingClientRect().left
        const volume = ((click_x / volume_width) * 100).toFixed(0)
        return volume
    }

    const videoPlayPause = () => {
        if (videoController.current.paused) {
            setIsPlaying(true)
            videoController.current.play()
        } else {
            setIsPlaying(false)
            videoController.current.pause()
        }
    }
    useEffect(() => {
        function volumeStopHandler() {
            setShowVolume(false)
            document.removeEventListener("mousemove", handleSlider)
            document.removeEventListener("mouseup", volumeStopHandler)
        }

        volumeController.current.addEventListener("mousedown", (e) => {
            document.addEventListener("mousemove", handleSlider)
            document.addEventListener("mouseup", (e) => {
                return volumeStopHandler()
            })
        })
        videoController.current.addEventListener("ended", () => {

            toastService.success("Video ended")
            setIsPlaying(false)
        })

        document.onkeydown = (e) => {
            if (e.key === " ") {
                e.preventDefault()
                videoPlayPause()
            }
            if (e.key === "f") {
                if (document.fullscreenElement != null) {
                    document.exitFullscreen()
                } else {
                    videoPlayer.current.requestFullscreen()
                }
            }
            if (e.key === "p") {
                if (document.pictureInPictureElement != null) {
                    document.exitPictureInPicture()
                } else {
                    videoController.current.requestPictureInPicture()
                }
            }
        }
    }, [])

    return (
        <div >
            <div className={css.video_wrapper} ref={videoPlayer}>
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
                                <div className={css.pause_play_btn}>
                                    <div className={`${css.settings_btn} material-icons-round`} onClick={() => videoPlayPause()}>{isPlaying ? "pause" : "play_arrow"}</div>
                                </div>
                                <div className={`${css.volume_wrap} ${showVolume ? css.volume_show : []}`} onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
                                    <div className={`${css.volume_btn} material-icons-round`}>{"volume_up"} </div>
                                    <div className={css.volume_panel}>
                                        <div ref={volumeController} className={css.volume_slider}>
                                            <div className={css.volume_slider_track}>
                                                <div className={css.volume_slider_progress} style={{ width: volume.volumeLevel + "%" }}>
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
                <video ref={videoController} className={css.video} src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" />
            </div>
        </div>
    )
}
