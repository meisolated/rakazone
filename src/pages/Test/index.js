import { useEffect, useRef } from 'react'
import Hls from 'hls.js'

export default function App({ }) {
    // let src = "https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8"
    let src = `https://keviv.xyz/api/downloads/output/4YBuYz-ZHgg/HLS/playlist.m3u8`

    const videoRef = useRef(null)

    useEffect(() => {
        const video = videoRef.current
        if (!video) return

        video.controls = true
        const defaultOptions = {}
        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            // This will run in safari, where HLS is supported natively
            video.removeAttribute("controls")
            video.src = src
        } else if (Hls.isSupported()) {
            // This will run in all other modern browsers
            const hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(video)
        } else {
            console.error(
                'This is an old browser that does not support MSE https://developer.mozilla.org/en-US/docs/Web/API/Media_Source_Extensions_API'
            )
        }
    }, [src, videoRef])

    return (
        <div className="container-default">
            <video width={"100%"} autoPlay controls={true} ref={videoRef} />
        </div>
    )
}
