import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import moment from "moment"
import axios from "axios"

//other components
import { convertToInternationalCurrencySystem } from "../util/functions.js"
import css from "./index.module.css"

// components
import { OutlineMedium } from "../components/Buttons"
import { Primary } from "../components/Buttons"
import AboutChannel from "../components/AboutChannel"
import { VideoBtnBig } from "../components/Buttons"
import VideoItem from "../components/VideoItem"
import Layout from '../components/Layout'

// assets 
import bag from "../assets/img/bag.svg"
import cross from "../assets/img/cross.svg"
import merch1 from "../assets/img/merch1.png"
import merch2 from "../assets/img/merch2.png"
import merch3 from "../assets/img/merch3.png"
import youtube_logo from "../assets/img/youtube_logo.svg"


function Home(props) {
    let userData = props.userData
    let isLoggedIn = props.isLoggedIn

    let streamerData = props.streamerData
    let featuredPrimary = props.sortedVideos.featuredPrimary
    let featuredSecondary = props.sortedVideos.featuredSecondary
    let featuredTertiary = props.sortedVideos.featuredTertiary
    let latest = props.sortedVideos.latest

    featuredPrimary.title = featuredPrimary.title.length > 60 ? featuredPrimary.title.substring(0, 60) + "..." : featuredPrimary.title
    featuredSecondary.title = featuredSecondary.title.length > 60 ? featuredSecondary.title.substring(0, 60) + "..." : featuredSecondary.title
    featuredTertiary.title = featuredTertiary.title.length > 60 ? featuredTertiary.title.substring(0, 60) + "..." : featuredTertiary.title

    let whatToShow = featuredPrimary
    let ago = moment(whatToShow.publishedAt * 1000).fromNow()

    let youtube_thumnail = whatToShow.thumbnail
    whatToShow.type = whatToShow.type ? whatToShow.type : "Live"
    whatToShow.viewCount = whatToShow.viewCount ? whatToShow.viewCount : whatToShow.viewers_count


    const [show, setShow] = useState(true)

    function removeAlert() {
        if (show) {
            setShow(false)
        } else {
            setShow(true)
        }
    }


    return (
        <Layout isLoggedIn={isLoggedIn} userData={userData}>
            <div className={css.main}>
                <div className="container-default">
                    {/* –––––––––––––––––––––––––– HOME HERO –––––––––––––––––––––––––– */}
                    <div className={css.home_hero}>
                        <div className={css.home_hero_left}>
                            <div className={css.home_hero_channel_image}>
                                <Image src="https://raka.zone/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={91} height={91} />
                            </div>
                            <div className={css.home_hero_channel_about}>
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
                                <VideoItem data={featuredSecondary} />
                            </div>
                            <div className={css.video_featured_secondary_wrapper}>
                                <VideoItem data={featuredTertiary} />
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
                        <VideoItem data={latest.One} />
                        <VideoItem data={latest.Two} />
                        <VideoItem data={latest.Three} />
                        <VideoItem data={latest.Four} />
                        <VideoItem data={latest.Five} />
                        <VideoItem data={latest.Six} />
                    </div>
                    {/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
                    <div className="divider" />
                    <AboutChannel />
                    <div className="divider" />
                    {/* SUBSCRIBER TO MY CHANNEL */}
                    <div className={css.support_channel_grid}>
                        <div className={css.subscribe_to_my_channel}>
                            <Image src={youtube_logo} width={150} height={50} alt="youtube logo" />
                            <h2 className={css.subscribetext}> Subscribe for amazing content, every day</h2>
                            <p className={css.subscribetext_sub}>Live stream every day at 9:30pm. I play GTA V RolePlay, Valorant, Counter Strike and many other fun games.</p>
                            <div className={css.subscribe_button}>
                                <Primary text="Subscribe" />
                            </div>
                            <VideoItem type="empty"></VideoItem>
                        </div>
                        {/* BUY MERCH */}
                        <div className={css.merch_main}>
                            <div className={css.buy_merch}>
                                <div className={css.merch_oneblock}>
                                    <Image src={bag} width={45} height={45} alt="bag" className={css.merch_oneblock} />
                                    <h1 className={`${css.merch_oneblock} pd-left`}>Store</h1>
                                </div>
                                <h2 className={css.merch_title}>Support my content by purchasing my merch.</h2>
                                <p className={css.merch_sub_title}>Live stream every day at 9:30pm. I play GTA V RolePlay, Valorant, Counter Strike and many other fun games.</p>
                                {show ? (
                                    <div className={css.merch_temp_alert}>
                                        <div className={css.merch_temp_type_alert}>
                                            <p>note</p>
                                        </div>
                                        <p className={css.merch_temp_alert_text}>We are currently trying to get in touch with RakaZone to make merch available for you.</p>
                                        <Image src={cross} width={40} height={30} alt="cross" className={css.merch_cross_btn} onClick={removeAlert} />
                                    </div>
                                ) : <></>}
                                <div className="pd-bottom-high" />
                                <OutlineMedium text="Browse Merch" />
                                <div className="pd-bottom-high" />
                            </div>
                            <div className={css.merch_gallery}>
                                <div className={`${css.merch_gallery_top_grid} iso-layout-grid`}>
                                    <Image src={merch1} width={300} height={300} alt="merch1" className={css.merch_gallery_item} />
                                    <Image src={merch2} width={300} height={300} alt="merch2" className={css.merch_gallery_item} />
                                    <Image src={merch3} width={300} height={300} alt="merch3" className={css.merch_gallery_item} />
                                </div>

                                <div className={`${css.merch_gallery_bottom_grid} iso-layout-grid`}>
                                    <Image src={merch3} width={300} height={300} alt="merch3" className={css.merch_gallery_item} />
                                    <Image src={merch1} width={300} height={300} alt="merch1" className={css.merch_gallery_item} />
                                    <Image src={merch2} width={300} height={300} alt="merch2" className={css.merch_gallery_item} />
                                    <Image src={merch3} width={300} height={300} alt="merch3" className={css.merch_gallery_item} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps({ req, res }) {
    axios.defaults.headers.common['Cookie'] = req.headers.cookie ? req.headers.cookie : ''
    let userData = await axios.get(`${process.env.SERVER_URL}userData`, { withCredentials: true }).then(res => res.data)
    let sortedVideos = await axios.get(`${process.env.SERVER_URL}content`, { withCredentials: true }).then(res => res.data)
    let streamerData = await axios.get(`${process.env.SERVER_URL}streamerData`, { withCredentials: true }).then(res => res.data)
    let isLoggedIn = userData.code == 401 ? false : true
    if (sortedVideos.message === "success" && streamerData.message === "success") {
        sortedVideos = sortedVideos.data.sortedVideos
        streamerData = streamerData.data.streamerData
        userData = isLoggedIn ? userData.data.user : {}
        return { props: { isLoggedIn, userData, sortedVideos, streamerData } }
    } else return { props: {} }
}

export default Home
