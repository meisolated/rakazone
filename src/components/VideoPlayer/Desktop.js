import { useRef, useState, useEffect } from "react"
import desktop_style from "./VideoPlayerDesktop.module.css"
import mobile_style from "./VideoPlayerMobile.module.css"
import { toastService } from "../../handler/toast.handler.js"
import Image from "next/image.js"
import testImage from "../../assets/img/png/insta07.png"
import { formatDuration } from "../../util/functions.js"
import Loading from "../Loading"
import Hls from "hls.js"

export function VideoPlayerDesktop(props) {
    const src = `https://keviv.xyz/api/downloads/output/${props.videoId}/HLS/playlist.m3u8`
    const adSrc = `https://keviv.xyz/api/downloads/SampleAd/playlist.m3u8`
    const playbackSpeedsList = [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2]

    // Controller for the video
    const videoPlayer = useRef(null)
    const videoController = useRef(null)
    const volumeController = useRef(null)
    const timelineController = useRef(null)

    // States
    const [isPlaying, setIsPlaying] = useState(false)
    const [showVolume, setShowVolume] = useState(false)
    const [fullscreen, setFullscreen] = useState(false)
    const [playingAd, setPlayingAd] = useState(false)
    const [theaterMode, setTheaterMode] = useState(false)
    const [showEndScreen, setShowEndScreen] = useState(false)
    const [showSettings, setShowSettings] = useState(false)
    const [loading, setLoading] = useState(false)
    const [duration, setDuration] = useState({ currentDuration: 0, totalDuration: 0, percentage: 0 })
    const [volume, setVolume] = useState({ volumeLevel: 50, volume_icon: "volume_up", lastVolume: 0 })
    const [settingsShowQuality, setSettingsShowQuality] = useState(false)
    const [settingsShowSpeed, setSettingsShowSpeed] = useState(false)
    const [quality, setQuality] = useState("auto")
    const [levels, setLevels] = useState([])

    // Functions
    const handleTheaterMode = () => {
        setTheaterMode(!theaterMode)
    }
    const handleSettings = () => {
        if (showSettings) {
            setSettingsShowQuality(false)
            setSettingsShowSpeed(false)
            setShowSettings(false)
        } else {
            setShowSettings(true)
        }
    }
    const handleQualitySelect = (q) => {
        handleSettings()
        setQuality(q)
    }

    const handleSpeedSelect = (s) => {
        handleSettings()
        videoController.current.playbackRate = s
    }

    const calculateVolume = (click, elm) => {
        const volume_width = elm.offsetWidth
        const click_x = click.clientX - elm.getBoundingClientRect().left
        const volume = ((click_x / volume_width) * 100).toFixed(0)
        return volume
    }

    const handleFullScreen = () => {
        if (document.fullscreenElement != null) {
            setFullscreen(false)
            return document.exitFullscreen()
        } else {
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
            setVolume({ volumeLevel: volume.lastVolume * 100, volume_icon: "volume_down" })
        } else {
            videoController.current.muted = true
            setVolume({ volumeLevel: 0, volume_icon: "volume_off", lastVolume: videoController.current.volume })
        }
    }

    const handlePlayPause = () => {
        if (showSettings) return handleSettings()
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
        // Event Listeners
        videoController.current.addEventListener("play", () => {
            setIsPlaying(true)
        })

        videoController.current.addEventListener("durationchange", () => {
            if (playingAd) return
            setDuration({ currentDuration: formatDuration(videoController.current.currentTime), totalDuration: formatDuration(videoController.current.duration), percentage: 0 })
        })
        videoController.current.addEventListener("timeupdate", () => {
            if (playingAd) return
            setLoading(false)
            setDuration({
                currentDuration: formatDuration(videoController.current.currentTime),
                totalDuration: formatDuration(videoController.current.duration),
                percentage: (videoController.current.currentTime / videoController.current.duration) * 100,
            })
        })
        videoController.current.addEventListener("loadeddata", () => {
            setLoading(false)
            // videoController.current.volume = 50 / 100
            if (!videoController.current?.currentTime) return
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
            if (playingAd) return
            document.addEventListener("mousemove", handleTimelineSlider)
            document.addEventListener("mouseup", (e) => {
                return handleTimeline()
            })
        })
        timelineController.current.addEventListener("click", (e) => {
            if (playingAd) return
            handleTimelineSlider(e)
        })

        // videoController.current.addEventListener("ended", () => {
        //     setIsPlaying(false)
        //     toastService.success("Video ended")
        // })

        videoController.current.addEventListener("waiting", () => {
            setLoading(true)
        })

        videoController.current.addEventListener("dblclick", (e) => {
            if (showSettings) setShowSettings(false)
            if (e.target.classList.contains(desktop_style.video)) {
                handleFullScreen()
            }
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
    }, [videoController.current])

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
        video.removeAttribute("controls")
        video.autoPlay = true

        if (!video) return
        if (video.canPlayType("application/vnd.apple.mpegurl") && props.isIOS) {
            video.removeAttribute("controls")
            video.setAttribute("webkit-playsinline", "")
            video.setAttribute("playsinline", "")
            video.setAttribute("x-webkit-airplay", "allow")
            video.setAttribute("x5-video-player-type", "h5")
            video.setAttribute("x5-video-player-fullscreen", "false")
            video.setAttribute("x5-video-orientation", "portraint")

            if (adSrc) {
                setPlayingAd(true)
                video.src = adSrc
            } else {
                video.src = src
            }
        } else if (Hls.isSupported()) {
            // This will run in all other modern browsers
            if (adSrc) {
                setPlayingAd(true)
                hls.loadSource(adSrc)
            } else {
                hls.loadSource(src)
            }
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

        video.addEventListener("ended", () => {
            if (video.src === adSrc || hls?.levels[0]?.url[0]?.includes("Ad")) {
                setPlayingAd(false)
                if (video.canPlayType("application/vnd.apple.mpegurl") && props.isIOS) {
                    video.src = src
                } else {
                    hls.loadSource(src)
                }
            }

        })

        return () => {
            hls.destroy()
        }
    }, [quality])

    return (
        <div className={`${!theaterMode ? desktop_style.video_wrapper : desktop_style.theater_mode}`} ref={videoPlayer}>
            {playingAd && (
                <div className={desktop_style.playing_ad_wrapper}>
                    Ad
                </div>
            )}
            <div className={`${desktop_style.settings_popup} ${(settingsShowQuality || settingsShowSpeed) && desktop_style.settings_popup_show}`} style={showSettings ? { display: "block" } : []}>
                {!settingsShowQuality && !settingsShowSpeed && (
                    <div className={`${desktop_style.settings_item}`} onClick={() => setSettingsShowQuality(true)}>
                        <div className={`${desktop_style.quality_selector} material-icons-round`}>tune</div>
                        Quality <div className={desktop_style.current_quality}> {quality === "auto" ? "Auto" : quality == 0 ? "360p" : quality == 1 ? "480p" : quality == 2 ? "720p" : "1080p"}</div>
                    </div>
                )}
                {!settingsShowSpeed &&
                    settingsShowQuality &&
                    levels.map((level, index) => {
                        return (
                            <div className={`${desktop_style.settings_item}`} key={index} onClick={() => handleQualitySelect(index)}>
                                {level.height}p
                            </div>
                        )
                    })}

                {!settingsShowQuality && !settingsShowSpeed && (
                    <div className={`${desktop_style.settings_item}`} onClick={() => setSettingsShowSpeed(true)}>
                        <div className={`${desktop_style.quality_selector} material-icons-round`}>slow_motion_video</div>
                        Playback Speed
                    </div>
                )}
                {settingsShowSpeed &&
                    !settingsShowQuality &&
                    playbackSpeedsList.map((speed, index) => {
                        return (
                            <div className={`${desktop_style.settings_item}`} key={index} onClick={() => handleSpeedSelect(speed)}>
                                {speed}x
                            </div>
                        )
                    })}
            </div>
            <div className={desktop_style.center_on_screen}>{loading && <Loading w={"70px"} h={"70px"} />}</div>
            <div className={`${desktop_style.controls_wrapper} ${playingAd && desktop_style.hide_controls} ${isPlaying ? [] : desktop_style.show_controls}`}>
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
                                <div className={`${desktop_style.settings_btn} material-icons-round`} style={showSettings ? { transform: "rotateZ(30deg)" } : []} onClick={() => handleSettings()}>
                                    settings
                                </div>
                            </div>
                            <div className={`${desktop_style.mini_player_container} ${desktop_style.btn}`}>
                                <div className={`${desktop_style.mini_player_btn} material-icons-round`} onClick={() => handlePictureInPicture()}>
                                    branding_watermark
                                </div>
                            </div>
                            <div
                                className={`${desktop_style.theater_container} ${desktop_style.btn}`}
                                onClick={() => {
                                    handleTheaterMode()
                                }}
                            >
                                <div className={`${desktop_style.theater_btn} material-icons-round`}>{theaterMode ? "crop_7_5" : "crop_7_5"}</div>
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
            <video autoPlay controls={false} ref={videoController} className={desktop_style.video} onClick={() => handlePlayPause()} />
            {/* <video onClick={() => handlePlayPause()} ref={videoController} className={desktop_style.video} src={`https://raka.zone/dev/api/downloads/output/${props.videoId}/HLS/index.m3u8`} /> */}
        </div>
    )
}
