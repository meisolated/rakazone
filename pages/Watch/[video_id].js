import { VideoPlayerDesktop, VideoPlayerMobile } from "../../components/VideoPlayer/index.js"
import css from "./Watch.module.css"
export default function Watch() {

    return (
        <div className="container-default">
            <div className={css.player_wrapper}>
                <VideoPlayerDesktop />
            </div>
        </div>
    )
}
