import { useRef, useState, useEffect } from "react"
import css from "./VideoPlayer.module.css"
import { PlayCircle, PauseCircle } from "../../assets/svg/"
import { toastService } from "../../handler/toast.handler.js"

export default function VideoPlayer() {
    const videoPlayer = useRef(null)
    const videoController = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    const volume = ["volume_up", "volume_down", "volume_mute"]


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
        <div>
            <div ref={videoPlayer} className={`${css.player_wrapper}`} >
                <div className={`${css.video_controls_container} ${isPlaying ? [] : css.show_controls}`}>
                    <div className={`${css.video_controls}`}>
                        <div className={css.left_controls}>

                            <div className={`${css.play_pause_btn} material-icons-round`} onClick={videoPlayPause}>{isPlaying ? "play_arrow" : "pause"}</div>

                            <input className={css.volume} type={"range"} min={0} max={100}></input>
                        </div>

                        <div className={css.right_controls}>
                            <div className={css.miniplayer_container}>
                                <div className={`${css.miniplayer_btn} material-icons-round`}>branding_watermark</div>
                            </div>
                            <div className={css.fullscreen_container}>
                                <div className={`${css.fullscreen_btn} material-icons-round`}>{true ? "fullscreen" : "fullscreen_exit"}</div>
                            </div>
                            <div className={css.theater_container}>
                                <div className={`${css.theater_btn} material-icons-round`}>{true ? "crop_7_5" : "crop_7_5"}</div>
                            </div>
                        </div>
                    </div>
                </div>
                <video ref={videoController} controls={false} className={css.video} onClick={videoPlayPause}>
                    <source src="https://raka.zone/assets/output.mp4" type="video/mp4" />
                </video>
            </div>
        </div>
    )
}
