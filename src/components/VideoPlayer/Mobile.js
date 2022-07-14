import { useRef, useState, useEffect } from "react"
import mobile_style from "./VideoPlayerMobile.module.css"
import { toastService } from "../../handler/toast.handler.js"
import Image from "next/image.js"
import testImage from "../../assets/img/png/insta07.png"
import { formatDuration } from "../../util/functions.js"
    
export function VideoPlayerMobile() {

    const videoId = "lyb-COpIrYY"
    const baseUrl = "https://raka.zone/assets/output/"
    let num = 1
    const previewThumbnail = baseUrl + videoId + "/image_preview_" + num + ".jpg"
    const videoPlayer = useRef(null)
    const videoController = useRef(null)
    const timelineController = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    const [fullscreen, setFullscreen] = useState(false)
    const [showEndScreen, setShowEndScreen] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [showControls, setShowControls] = useState(false)
    const [duration, setDuration] = useState({ currentDuration: 0, totalDuration: 0, percentage: 0 })



    const calculateSlider = (click, elm) => {
        const volume_width = elm.offsetWidth
        const click_x = click.clientX - elm.getBoundingClientRect().left
        const volume = ((click_x / volume_width) * 100).toFixed(0)
        return volume
    }

    // some functions
    const handleFullScreen = () => {
        if (document.fullscreenElement != null) {
            setFullscreen(false)
            return document.exitFullscreen()
        }
        if (videoPlayer.current.requestFullscreen) {
            videoPlayer.current.requestFullscreen()
        } else if (videoPlayer.current.webkitRequestFullscreen) {
            videoPlayer.current.webkitRequestFullscreen()
        } else if (videoPlayer.current.mozRequestFullScreen) {
            videoPlayer.current.mozRequestFullScreen()
        } else if (videoPlayer.current.msRequestFullscreen) {
            videoPlayer.current.msRequestFullscreen()
        }
        setFullscreen(true)
    }


    const handlePlayPause = () => {
        if (showSettings) {
            return setShowSettings(false)
        }
        if (videoController.current.paused) {
            setIsPlaying(true)
            videoController.current.play()
        } else {
            setIsPlaying(false)
            videoController.current.pause()
        }
    }


    const handleTimeline = () => {
        document.removeEventListener("mousemove", handleTimelineSlider)
        document.removeEventListener("mouseup", handleTimeline)
    }


    const handleTimelineSlider = (e) => {
        e.preventDefault()
        const slider = document.getElementsByClassName(mobile_style.timeline_slider)[0]
        let percent = calculateSlider(e, slider)
        if (percent < 0) {
            percent = 0
        } else if (percent > 100) {
            percent = 100
        }
        videoController.current.currentTime = (percent / 100) * videoController.current.duration
        setDuration({ currentDuration: formatDuration(videoController.current.currentTime), totalDuration: formatDuration(videoController.current.duration), percentage: percent })
    }

    useEffect(() => {
        // Event Listners
        videoController.current.addEventListener("timeupdate", () => {
            setDuration({
                currentDuration: formatDuration(videoController.current.currentTime),
                totalDuration: formatDuration(videoController.current.duration),
                percentage: (videoController.current.currentTime / videoController.current.duration) * 100,
            })
        })
        videoController.current.addEventListener("loadeddata", () => {
            // videoController.current.volume = 50 / 100
            setDuration({
                currentDuration: formatDuration(videoController.current.currentTime),
                totalDuration: formatDuration(videoController.current.duration),
                percentage: (videoController.current.currentTime / videoController.current.duration) * 100,
            })
        })

        timelineController.current.addEventListener("mousedown", (e) => {
            document.addEventListener("mousemove", handleTimelineSlider)
            document.addEventListener("mouseup", (e) => {
                return handleTimeline()
            })
        })
        timelineController.current.addEventListener("click", (e) => {
            handleTimelineSlider(e)
        })

        videoController.current.addEventListener("ended", () => {
            toastService.success("Video ended")
            setIsPlaying(false)
        })


    }, [])
    return (
        <div className={mobile_style.video_wrapper} ref={videoPlayer} >
            <div className={`${mobile_style.controls} ${showControls ? [] : mobile_style.show_controls}`} onClick={() => setShowControls(!showControls)}>
                <div className={mobile_style.top_controls}>
                    <div className={`${mobile_style.settings} material-icons-round`} >
                        settings
                    </div>
                </div>
                <div className={mobile_style.middle_controls}>
                    <div className={`${mobile_style.skip_previous_btn} material-icons-round`}>
                        skip_previous
                    </div>
                    <div className={`${mobile_style.play_pause_btn} material-icons-round`} onClick={() => handlePlayPause()}>
                        {isPlaying ? "pause" : "play_arrow"}
                    </div>
                    <div className={`${mobile_style.skip_next_btn} material-icons-round`}>
                        skip_next
                    </div>
                </div>
                <div className={mobile_style.bottom_controls}>
                    <div className={mobile_style.duration_wrapper}>
                        <div className={mobile_style.duration}>
                            <div className={mobile_style.duration_current}>{duration.currentDuration}</div>
                            <div className={mobile_style.duration_separator}>/</div>
                            <div className={mobile_style.duration_total}>{duration.totalDuration}</div>
                        </div>
                        <div className={`${mobile_style.fullscreen_btn} material-icons-round`} onClick={() => handleFullScreen()}>
                            {fullscreen ? "fullscreen_exit" : "fullscreen"}
                        </div>
                    </div>
                    <div ref={timelineController} className={`${mobile_style.timeline_wrap}`}>
                        <div className={mobile_style.timeline_panel}>
                            <div className={mobile_style.timeline_slider}>
                                <div className={mobile_style.timeline_slider_track}>
                                    <div className={mobile_style.timeline_slider_progress} style={{ width: duration.percentage + "%" }}>
                                        <div className={mobile_style.timeline_slider_handle}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <video onClick={() => handlePlayPause()} ref={videoController} className={mobile_style.video} src="https://raka.zone/assets/output/lyb-COpIrYY/output.mp4" />
        </div>
    )
}
