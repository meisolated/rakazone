import css from "./index.module.css"
import AboutChannel from "../components/AboutChannel/index.js"
import SubscribeToMyChannel from "../components/SubscribeToMyChannel/index.js"
import BuyMerch from "../components/BuyMerch/index.js"
import axios from "axios"
import Image from "next/image"
import { Primary } from "../components/Buttons"
import VideoItem from "../components/VideoItem"
import { VideoBtnBig } from "../components/Buttons"
import { convertToInternationalCurrencySystem } from "../util/functions.js"
import moment from "moment"

function Home(props) {
    let userdata = props.serverdata.userdata[0]

    let liveData = props.serverdata.livedata[0]
    let mostLiked = props.serverdata.somevideos.mostLiked[0]
    let mostViewed = props.serverdata.somevideos.mostViewed[0]
    let mostCommented = props.serverdata.somevideos.mostLiked[0]
    let recent = props.serverdata.somevideos.recent[0]

    mostLiked.title = mostLiked.title.length > 60 ? mostLiked.title.substring(0, 60) + "..." : mostLiked.title
    mostViewed.title = mostViewed.title.length > 60 ? mostViewed.title.substring(0, 60) + "..." : mostViewed.title
    mostCommented.title = mostCommented.title.length > 60 ? mostCommented.title.substring(0, 60) + "..." : mostCommented.title

    let whatToShow = liveData.status === "offline" ? recent : liveData
    let ago = moment(whatToShow.publishedAt * 1000).fromNow()

    let youtube_thumnail = `https://i.ytimg.com/vi/${whatToShow.videoId}/maxresdefault.jpg`
    youtube_thumnail = liveData.status === "offline" ? youtube_thumnail : liveData.thumbnail

    return (
        <div className={css.main}>
            <div className="container-default">
                {/* –––––––––––––––––––––––––– HOME HERO –––––––––––––––––––––––––– */}
                <div className={css.home_hero}>
                    <div className={css.home_hero_left}>
                        <div className={css.home_hero_channel_image}>
                            <Image src="https://raka.zone/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={91} height={91} />
                        </div>
                        <div className="home_hero_channel_about">
                            <div className={css.channel_about_content_top}>
                                <h1 className={css.title}>RakaZone</h1>
                                <div className={css.subscriber_count}>{`${userdata.yt_subscribers_count} SUBSCRIBERS`}</div>
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

export async function getServerSideProps(context) {
    let { data } = await axios.get("http://10.69.69.201:3000/api/v1/all")

    if (data.message === "success") {
        return { props: { serverdata: data.data } }
    } else return { props: {} }
}

export default Home
