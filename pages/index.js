import { convertToInternationalCurrencySystem } from "../util/functions.js"
import SubscribeToMyChannel from "../components/SubscribeToMyChannel"
import BuyMerch from "../components/BuyMerch/index.js"
import AboutChannel from "../components/AboutChannel"
import { VideoBtnBig } from "../components/Buttons"
import VideoItem from "../components/VideoItem"
import { Primary } from "../components/Buttons"
import css from "./index.module.css"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"
import axios from "axios"
import _ from "lodash"

function Home(props) {
    let streamerData = props.streamerData
    let liveData = props.liveData
    let mostLiked = props.sortedVideos.mostLikedVideo[_.random(0, props.sortedVideos.mostLikedVideo.length - 1)]
    let mostViewed = props.sortedVideos.mostViewedVideo[_.random(0, props.sortedVideos.mostViewedVideo.length - 1)]
    let mostRecent = props.sortedVideos.mostRecentVideo[_.random(0, props.sortedVideos.mostRecentVideo.length - 1)]
    let mostRecentFunny = props.sortedVideos.mostRecentFunny[_.random(0, props.sortedVideos.mostRecentFunny.length - 1)]
    let mostCommented = props.sortedVideos.mostCommentedVideo[_.random(0, props.sortedVideos.mostCommentedVideo.length - 1)]

    mostLiked.title = mostLiked.title.length > 60 ? mostLiked.title.substring(0, 60) + "..." : mostLiked.title
    mostViewed.title = mostViewed.title.length > 60 ? mostViewed.title.substring(0, 60) + "..." : mostViewed.title
    mostCommented.title = mostCommented.title.length > 60 ? mostCommented.title.substring(0, 60) + "..." : mostCommented.title

    let whatToShow = liveData.status === "offline" ? mostRecent : liveData
    let ago = moment(whatToShow.publishedAt * 1000).fromNow()

    let youtube_thumnail = `https://i.ytimg.com/vi/${whatToShow.videoId}/maxresdefault.jpg`
    youtube_thumnail = liveData.status === "offline" ? youtube_thumnail : liveData.thumbnail

    return (
        <div className={css.main}>
            <div className="container-default">
                <Link href="http://localhost:3001/api/v1/auth/google">
                    <a>Login</a>
                </Link>

                {/* –––––––––––––––––––––––––– HOME HERO –––––––––––––––––––––––––– */}
                <div className={css.home_hero}>
                    <div className={css.home_hero_left}>
                        <div className={css.home_hero_channel_image}>
                            <Image src="https://raka.zone/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={91} height={91} />
                        </div>
                        <div className="home_hero_channel_about">
                            <div className={css.channel_about_content_top}>
                                <h1 className={css.title}>RakaZone</h1>
                                <div className={css.subscriber_count}>{`${streamerData.yt_subscribers_count} SUBSCRIBERS`}</div>
                            </div>
                            <p className={css.about}>
                                <span className={css.bold}>Rishab Karanwal</span> most of you know me as Raka, I am a vairty streamer. If you say so.{" "}
                            </p>
                        </div>
                    </div>
                    <p className={css.mobile_about}>
                        <span className={css.bold}>Rishab Karanwal</span> most of you know me as Raka, I am a vairty streamer. If you say so.{" "}
                    </p>
                    <div className={css.home_hero_right}>
                        <Primary text={"Subscribe"} />
                    </div>
                </div>
                {/* ––––––––––––––––––––––––––––––––––––––––Featured Video–––––––––––––––––––––––––––––––––––––––––––– */}
                <div className={css.video_featured_grid}>
                    <div className={css.video_featured_wrapper}>
                        <div className={css.image_wrapper}>
                            <Image className={css.video_item_image} src={youtube_thumnail} width={1104} height={620} alt="" />
                            <div className={css.video_featured_filter}></div>
                            <VideoBtnBig w={30} h={30} ww={85} hh={85} />
                            <div className={css.video_featured_text}>{whatToShow.type}</div>
                        </div>

                        <div className={css.video_featured_content}>
                            <div className={`pd-right ${css.video_featured_channel_image}`}>
                                <Image className={css.video_featured_channel_image} src="https://raka.zone/assets/img/instadp.jpeg" width={94} height={94} loading="eager" alt="Video Featured Channel Image" />
                            </div>
                            <div>
                                <h2 className={css.video_featured_title}>{whatToShow.title}</h2>
                                <div className={css.video_featured_about}>
                                    <div className={css.video_featured_duration}>
                                        <div>{convertToInternationalCurrencySystem(whatToShow.viewCount)}</div>
                                        <div>&nbsp;views</div>
                                    </div>
                                    <div className={css.video_about_divider}></div>
                                    <div>{ago}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${css.video_featured_secondary_grid} pd-bottom `}>
                        <div className={css.video_featured_secondary_wrapper}>
                            <VideoItem data={mostViewed} />
                        </div>
                        <div className={css.video_featured_secondary_wrapper}>
                            <VideoItem data={mostCommented} />
                        </div>
                    </div>
                </div>
                {/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
                <div className="divider" />
                {/* ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– LATEST VIDEOS –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
                <div className={css.home_latest_videos}>
                    <div className={css.latest_videos_left}>
                        <h2 className={css.latest_videos_title}>Latest videos</h2>
                    </div>
                    <div className={css.latest_videos_right}>
                        <a href="https://www.youtube.com/" className={css.latest_videos_arrow_link}>
                            <div className={css.latest_videos_arrow_link_text}>Browse more videos</div>
                        </a>
                    </div>
                </div>
                <div className={css.latest_video_grid}>
                    <VideoItem data={mostLiked} />
                    <VideoItem data={mostViewed} />
                    <VideoItem data={mostCommented} />
                    <VideoItem data={mostLiked} />
                    <VideoItem data={mostViewed} />
                    <VideoItem data={mostCommented} />
                </div>
                {/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
                <div className="divider" />
                <AboutChannel />
                <div className="divider" />
                <div className={css.support_channel_grid}>
                    <SubscribeToMyChannel />
                    <BuyMerch />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps({ req, res }) {
    let sortedVideos = await axios.get(process.env.SERVER_URL + "sortedVideos").then(res => res.data)
    let streamerData = await axios.get(process.env.SERVER_URL + "streamerData").then(res => res.data)
    let liveData = await axios.get(process.env.SERVER_URL + "liveData").then(res => res.data)

    if (sortedVideos.message === "success" && streamerData.message === "success" && liveData.message === "success") {
        sortedVideos = sortedVideos.data.sortedVideos
        streamerData = streamerData.data.streamerData
        liveData = liveData.data.liveData
        return { props: { sortedVideos, streamerData, liveData } }
    } else return { props: {} }
}

export default Home
