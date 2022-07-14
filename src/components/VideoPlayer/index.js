import { useRef, useState, useEffect } from "react"
import desktop_style from "./VideoPlayerDesktop.module.css"
import mobile_style from "./VideoPlayerMobile.module.css"
import { toastService } from "../../handler/toast.handler.js"
import Image from "next/image.js"
import testImage from "../../assets/img/png/insta07.png"
import { formatDuration } from "../../util/functions.js"
export function VideoPlayerDesktop() {
    const videoId = "lyb-COpIrYY"
    const baseUrl = "https://raka.zone/assets/output/"
    let num = 1
    const previewThumbnail = baseUrl + videoId + "/image_preview_" + num + ".jpg"
    const videoPlayer = useRef(null)
    const videoController = useRef(null)
    const volumeController = useRef(null)
    const timelineController = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)
    // Show and hide TODO: make it better merge them all into one
    const [showVolume, setShowVolume] = useState(false)
    const [fullscreen, setFullscreen] = useState(false)
    const [showEndScreen, setShowEndScreen] = useState(false)
    const [showSettings, setShowSettings] = useState(false)

    const [duration, setDuration] = useState({ currentDuration: 0, totalDuration: 0, percentage: 0 })
    const [volume, setVolume] = useState({ volumeLevel: 50, volume_icon: "volume_up" })

    const volume_fonts = ["volume_up", "volume_down", "volume_mute"]

    const calculateVolume = (click, elm) => {
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

    const handlePictureInPicture = () => {
        if (document.pictureInPictureElement != null) {
            document.exitPictureInPicture()
        } else {
            videoController.current.requestPictureInPicture()
        }
    }

    const handleMute = () => {
        if (videoController.current.muted) {
            videoController.current.muted = false
            setVolume({ volumeLevel: videoController.current.volume * 100, volume_icon: "volume_down" })
        } else {
            videoController.current.muted = true
            setVolume({ volumeLevel: 0, volume_icon: "volume_off" })
        }
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
    const handleVolume = () => {
        document.removeEventListener("mousemove", handleVolumeSlider)
        document.removeEventListener("mouseup", handleVolume)
    }

    const handleTimeline = () => {
        document.removeEventListener("mousemove", handleTimelineSlider)
        document.removeEventListener("mouseup", handleTimeline)
    }
    const handleVolumeSlider = (e) => {
        setShowVolume(true)
        e.preventDefault()
        const slider = document.getElementsByClassName(desktop_style.volume_slider)[0]
        let percent = calculateVolume(e, slider)
        if (percent < 0) {
            percent = 0
        } else if (percent > 100) {
            percent = 100
        }
        let volume_icon = percent > 70 ? "volume_up" : percent > 40 ? "volume_down" : percent == 0 ? "volume_off" : "volume_down"
        videoController.current.volume = percent / 100
        setVolume({ volumeLevel: percent, volume_icon: volume_icon })
    }

    const handleTimelineSlider = (e) => {
        e.preventDefault()
        const slider = document.getElementsByClassName(desktop_style.timeline_slider)[0]
        let percent = calculateVolume(e, slider)
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
            videoController.current.volume = 50 / 100
            setDuration({
                currentDuration: formatDuration(videoController.current.currentTime),
                totalDuration: formatDuration(videoController.current.duration),
                percentage: (videoController.current.currentTime / videoController.current.duration) * 100,
            })
        })

        // Volume Controller
        volumeController.current.addEventListener("mousedown", (e) => {
            document.addEventListener("mousemove", handleVolumeSlider)
            document.addEventListener("mouseup", (e) => {
                return handleVolume()
            })
        })
        volumeController.current.addEventListener("click", (e) => {
            handleVolumeSlider(e)
        })
        // timeline Controller
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

        // handle key strokes
        document.onkeydown = (e) => {
            if (e.key === " ") {
                e.preventDefault()
                handlePlayPause()
            } else if (e.key === "f") {
                handleFullScreen()
            } else if (e.key === "p") {
                handlePictureInPicture()
            } else if (e.key == 0) {
                videoController.current.currentTime = (0 / 100) * videoController.current.duration
            } else if (e.key == "m") {
                handleMute()
            }
        }
    }, [])

    return (
        <div>
            <div className={desktop_style.video_wrapper} ref={videoPlayer}>
                <div className={desktop_style.settings_popup} style={showSettings ? { display: "block" } : []}>
                    <div className={`${desktop_style.settings_item}`}>
                        <div className={`${desktop_style.quality_selector} material-icons-round`}>tune</div>
                        Quality
                    </div>
                    <div className={`${desktop_style.settings_item}`}>
                        <div className={`${desktop_style.quality_selector} material-icons-round`}>slow_motion_video</div>
                        Playback Speed
                    </div>
                </div>
                <div className={`${desktop_style.controls_wrapper} ${isPlaying ? [] : desktop_style.show_controls}`}>
                    <div className={desktop_style.controls}>
                        <div className={`${desktop_style.timeline_wrap}`}>
                            <div className={desktop_style.timeline_panel}>
                                <div ref={timelineController} className={desktop_style.timeline_slider}>
                                    <div className={desktop_style.timeline_slider_track}>
                                        <div className={desktop_style.timeline_slider_progress} style={{ width: duration.percentage + "%" }}>
                                            <div className={desktop_style.timeline_slider_handle}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={desktop_style.bottom_controls}>
                            <div className={`${desktop_style.controls_left}`}>
                                <div className={`${desktop_style.pause_play_btn} ${desktop_style.btn}`}>
                                    <div className={`${desktop_style.play_pause} material-icons-round`} onClick={() => handlePlayPause()}>
                                        {isPlaying ? "pause" : "play_arrow"}
                                    </div>
                                </div>
                                <div className={`${desktop_style.volume_wrap} ${showVolume ? desktop_style.volume_show : []}`} onMouseEnter={() => setShowVolume(true)} onMouseLeave={() => setShowVolume(false)}>
                                    <div className={`${desktop_style.volume_btn} material-icons-round ${desktop_style.btn}`} onClick={() => handleMute()}>
                                        {volume.volume_icon}
                                    </div>
                                    <div className={desktop_style.volume_panel}>
                                        <div ref={volumeController} className={desktop_style.volume_slider}>
                                            <div className={desktop_style.volume_slider_track}>
                                                <div className={desktop_style.volume_slider_progress} style={{ width: volume.volumeLevel + "%" }}>
                                                    <div className={desktop_style.volume_slider_handle}></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className={desktop_style.duration_wrapper}>
                                    <div className={desktop_style.duration}>
                                        <div className={desktop_style.duration_current}>{duration.currentDuration}</div>
                                        <div className={desktop_style.duration_separator}>/</div>
                                        <div className={desktop_style.duration_total}>{duration.totalDuration}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={desktop_style.controls_right}>
                                <div className={`${desktop_style.mini_player_container} ${desktop_style.btn}`}>
                                    <div className={`${desktop_style.settings_btn} material-icons-round`} style={showSettings ? { transform: "rotateZ(30deg)" } : []} onClick={() => setShowSettings(!showSettings)}>
                                        settings
                                    </div>
                                </div>
                                <div className={`${desktop_style.mini_player_container} ${desktop_style.btn}`}>
                                    <div className={`${desktop_style.mini_player_btn} material-icons-round`} onClick={() => handlePictureInPicture()}>
                                        branding_watermark
                                    </div>
                                </div>
                                <div className={`${desktop_style.theater_container} ${desktop_style.btn}`}>
                                    <div className={`${desktop_style.theater_btn} material-icons-round`}>{true ? "crop_7_5" : "crop_7_5"}</div>
                                </div>
                                <div className={`${desktop_style.fullscreen_container} ${desktop_style.btn}`}>
                                    <div className={`${desktop_style.fullscreen_btn} material-icons-round`} onClick={() => handleFullScreen()}>
                                        {fullscreen ? "fullscreen_exit" : "fullscreen"}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <video onClick={() => handlePlayPause()} ref={videoController} className={desktop_style.video} src="https://raka.zone/assets/output/lyb-COpIrYY/output.mp4" />
            </div>
        </div>
    )
}

export function VideoPlayerMobile() {
    return (
        <div className={mobile_style.video_wrapper}>
            <div className={mobile_style.controls_wrapper}>
                <div className={mobile_style.controls}>
                    <div className={mobile_style.top_controls}>
                        <div className={`${mobile_style.settings} material-icons-round`} >
                            settings
                        </div>
                    </div>
                    <div className={mobile_style.middle_controls}>
                        <div className={`${mobile_style.play_pause_btn} material-icons-round`}>
                            pause
                        </div>
                    </div>
                    <div className={mobile_style.bottom_controls}>
                        <div className={mobile_style.duration_wrapper}>
                            <div className={mobile_style.duration}>
                                <div className={mobile_style.duration_current}>{"50:10"}</div>
                                <div className={mobile_style.duration_separator}>/</div>
                                <div className={mobile_style.duration_total}>{"50:10"}</div>
                            </div>
                        </div>
                        <div className={`${mobile_style.timeline_wrap}`}>
                            <div className={mobile_style.timeline_panel}>
                                <div className={mobile_style.timeline_slider}>
                                    <div className={mobile_style.timeline_slider_track}>
                                        <div className={mobile_style.timeline_slider_progress} style={{ width: 10 + "%" }}>
                                            <div className={mobile_style.timeline_slider_handle}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <video className={mobile_style.video} src="https://raka.zone/assets/output/lyb-COpIrYY/output.mp4" />
        </div>
    )
}
