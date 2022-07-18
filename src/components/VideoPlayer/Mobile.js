import { useRef, useState, useEffect } from "react"
import mobile_style from "./VideoPlayerMobile.module.css"
import { toastService } from "../../handler/toast.handler.js"
import Image from "next/image.js"
import testImage from "../../assets/img/png/insta07.png"
import { formatDuration } from "../../util/functions.js"
import Loading from "components/Loading"
import Hls from "hls.js"

export function VideoPlayerMobile(props) {
    let src = `https://keviv.xyz/api/downloads/output/${props.videoId}/HLS/playlist.m3u8`
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
    const [showControls, setShowControls] = useState(true)
    const [loading, setLoading] = useState(true)
    const [duration, setDuration] = useState({ currentDuration: 0, totalDuration: 0, percentage: 0 })
    const [quality, setQuality] = useState("auto")
    const [levels, setLevels] = useState([])

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
        if (!showControls) return
        if (showSettings) return setShowSettings(false)

        if (videoController.current.paused) {
            setIsPlaying(true)
            videoController.current.play()
            setTimeout(() => {
                setShowControls(false)
            }, 1000)
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

    const onPressForwardOrBackward = (number) => {
        videoController.current.currentTime = videoController.current.currentTime + number
    }


    useEffect(() => {

        // Event Listeners
        videoController.current.addEventListener("timeupdate", () => {
            setLoading(false)
            setDuration({
                currentDuration: formatDuration(videoController.current.currentTime),
                totalDuration: formatDuration(videoController.current.duration),
                percentage: (videoController.current.currentTime / videoController.current.duration) * 100,
            })
        })
        videoController.current.addEventListener("loadeddata", () => {
            // videoController.current.volume = 50 / 100
            setLoading(false)
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
        videoController.current.addEventListener("waiting", () => {
            setLoading(true)
        })
        videoPlayer.current.addEventListener("click", (e) => {
            if (e.pointerType === "touch") {
                if (e.path[0].classList[0] == mobile_style.touch_resister) {
                    console.log("touch resister")
                    setShowControls(true)
                }
            }

        })

    }, [])
    useEffect(() => {
        const defaultOptions = {
            startLevel: -1,
            licenseXhrSetup: function (xhr, url) {
                xhr.withCredentials = true // do send cookies
                if (!xhr.readyState) {
                    // Call open to change the method (default is POST) or modify the url
                    xhr.open("GET", url, true)
                    // Append headers after opening
                    xhr.setRequestHeader("Content-Type", "application/octet-stream")
                }
            },
        }

        const hls = new Hls(defaultOptions)
        const video = videoController.current
        if (!video) return
        video.removeAttribute("controls")
        if (Hls.isSupported()) {
            // This will run in all other modern browsers
            hls.loadSource(src)
            hls.attachMedia(video)
            hls.once(Hls.Events.LEVEL_LOADED, (event, data) => {
                var level_duration = data.details.totalduration
                setDuration({ ...duration, totalDuration: formatDuration(level_duration), currentDuration: formatDuration(video.currentTime) })
            })
            hls.once(Hls.Events.MANIFEST_PARSED, function (event, data) {
                setLevels(data.levels)
                hls.currentLevel = quality === "auto" ? -1 : quality
            })
        } else {
            console.error("This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API")
        }

        return () => {
            hls.destroy()
        }

    }, [quality])

    return (
        <div className={mobile_style.video_wrapper} ref={videoPlayer}>
            <div style={showControls ? { zIndex: 0 } : { zIndex: 101 }} className={mobile_style.touch_resister} />
            <div className={`${mobile_style.controls} ${showControls && mobile_style.show_controls}`}  >
                <div className={mobile_style.top_controls}>
                    <div onClick={() => setShowSettings(true)} className={`${mobile_style.settings} material-icons-round`}>
                        settings
                    </div>
                </div>
                <div className={mobile_style.middle_controls}>
                    {loading ? (
                        <Loading w={"70px"} h={"70px"} />
                    ) : (
                        <>
                            <div className={`${mobile_style.skip_previous_btn} material-icons-round`} onClick={() => onPressForwardOrBackward(-10)}>
                                replay_10
                            </div>
                            <div className={`${mobile_style.play_pause_btn} material-icons-round`} onClick={() => handlePlayPause()}>
                                {isPlaying ? "pause" : "play_arrow"}
                            </div>
                            <div className={`${mobile_style.skip_next_btn} material-icons-round`} onClick={() => onPressForwardOrBackward(+10)}>
                                forward_10
                            </div>
                        </>
                    )}
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
            {showSettings && <div className={`${mobile_style.bottom_settings_popup_wrapper}`} onClick={() => setShowSettings(false)}></div>}
            <div className={`${mobile_style.bottom_settings_popup} ${showSettings && mobile_style.show_setting}`}>
                <div className={mobile_style.settings_popup_header}>
                    <a className={mobile_style.settings_popup_title}>Settings</a>
                </div>
                <div className={mobile_style.settings_popup_body}>
                    <div className={mobile_style.settings_popup_body_item}>
                        <div className={`${mobile_style.settings_popup_body_item_icon} material-icons-round`} onClick={() => handlePlayPause()}>
                            tune
                        </div>
                        <a className={mobile_style.settings_popup_body_item_text}>Quality</a>
                    </div>
                    <div className={mobile_style.settings_popup_body_item}>
                        <div className={`${mobile_style.settings_popup_body_item_icon} material-icons-round`} onClick={() => handlePlayPause()}>
                            slow_motion_video
                        </div>
                        <a className={mobile_style.settings_popup_body_item_text}>Playback Speed</a>
                    </div>
                    <a className={mobile_style.developer_text}>We are currently working on these settings.</a>
                </div>
            </div>
            <video onClick={() => handlePlayPause()} ref={videoController} className={mobile_style.video} src={`https://raka.zone/dev/api/downloads/output/${props.videoId}/HLS/index.m3u8`} />
        </div>
    )
}
