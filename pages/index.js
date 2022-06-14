import { useState, useEffect } from "react"
import getConfig from "next/config"
import Image from "next/image"
import Head from "next/head"
import Link from "next/link"
import moment from "moment"
import axios from "axios"

//other components
import { convertToInternationalCurrencySystem } from "../util/functions.js"
import css from "./index.module.css"

// components
import { EmptyVideoItem, VideoItemRegular } from "../components/VideoItem"
import { OutlineMedium } from "../components/Buttons"
import { GreyMedium } from "../components/Buttons"
import { Primary } from "../components/Buttons"

// assets
import about_channel_image_one from "../assets/img/png/about_channel_image_one.png"
import about_channel_image_two from "../assets/img/png/about_channel_image_two.png"
import youtube_logo from "../assets/svg/src/youtube_logo.svg"
import playicon from "../assets/svg/src/playicon.svg"
import merch1 from "../assets/img/png/merch1.png"
import merch2 from "../assets/img/png/merch2.png"
import merch3 from "../assets/img/png/merch3.png"
import art_146 from "../assets/svg/src/146.svg"
import bag from "../assets/svg/src/bag-3.svg"

const { publicRuntimeConfig } = getConfig()

// use other youtube thumbnail urls to check a valid url or not

function Home(props) {
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
    let views = whatToShow.status == "live" ? "watching now" : "views"

    const [active, setActive] = useState(false)
    return (
        <>
            <Head>
                <title>RakaZone</title>
            </Head>

            <div className="container-default">
                {/* –––––––––––––––––––––––––– HOME HERO –––––––––––––––––––––––––– */}
                <div className={css.home_hero}>
                    <div className={css.home_hero_left}>
                        <div className={css.home_hero_channel_image}>
                            <Image src={`${props.SERVER_URL}assets/img/instadp.jpeg`} alt="" className={css.channel_image} width={91} height={91} />
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
                            <Image className={`${css.video_item_image} ${active ? css.image_active : css.image_inactive}`} src={youtube_thumnail} width={1104} height={620} alt="" />
                            <div className={css.video_featured_filter} />
                            <Link href={"/"} passHref>
                                <div className={`${css.video_featured_button_wrapper} ${active ? css.icon_active : css.icon_inactive}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                                    <div className={css.video_featured_button}>
                                        <div className={css.video_featured_button_icon_wrapper}>
                                            <Image src={playicon} className={css.video_featured_button_icon_big} layout="responsive" height={30} width={30} alt="" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                            <div className={css.video_featured_text}>{whatToShow.type}</div>
                        </div>

                        <div className={css.video_featured_content}>
                            <div className={`pd-right ${css.video_featured_channel_image}`}>
                                <Image className={css.video_featured_channel_image} src={`${props.SERVER_URL}assets/img/instadp.jpeg`} width={94} height={94} loading="eager" alt="Video Featured Channel Image" />
                            </div>
                            <div>
                                <h2 className={css.video_featured_title}>{whatToShow.title}</h2>
                                <div className={css.video_featured_about}>
                                    <div className={css.video_featured_duration}>
                                        <div>{convertToInternationalCurrencySystem(whatToShow.viewCount)}</div>
                                        <div>&nbsp;{views}</div>
                                    </div>
                                    <div className={css.video_about_divider}></div>
                                    <div>{ago}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={`${css.video_featured_secondary_grid} pd-bottom`}>
                        <div className={css.video_featured_secondary_wrapper}>
                            <VideoItemRegular data={featuredSecondary} />
                        </div>
                        <div className={css.video_featured_secondary_wrapper}>
                            <VideoItemRegular data={featuredTertiary} />
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
                    <VideoItemRegular data={latest.One} />
                    <VideoItemRegular data={latest.Two} />
                    <VideoItemRegular data={latest.Three} />
                    <VideoItemRegular data={latest.Four} />
                    <VideoItemRegular data={latest.Five} />
                    <VideoItemRegular data={latest.Six} />
                </div>
                {/* –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––– */}
                <div className="divider" />
                <div className={css.about_channel_grid}>
                    <div className={css.about_channel_left}>
                        <h1>Hey there!</h1>
                        <p>
                            My name is <span className="bold">Rishab Karanwal,</span> I&lsquo;m Content Creator, is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&lsquo;s
                            standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                            into electronic typesetting, remaining essentially unchanged.{" "}
                        </p>
                        <GreyMedium text="More about me" />
                    </div>
                    <div className={css.about_channel_right}>
                        <div className={css.about_images_wrapper}>
                            <div className={css.about_images}>
                                <div className={css.about_shapes}>
                                    <Image src={art_146} alt="" width={120} height={104} />
                                </div>
                                <div className={css.about_image_one}>
                                    <Image src={about_channel_image_one} alt="" width={450} height={460} />
                                </div>
                                <h1 className={css.about_nametext}>RakaZone</h1>
                                <div className={css.about_image_two}>
                                    <Image src={about_channel_image_two} alt="" width={290} height={300} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider" />
                {/* SUBSCRIBER TO MY CHANNEL */}
                <section className="pd-bottom-high">
                    <div className={css.support_channel_grid}>
                        <div className={css.subscribe_to_my_channel}>
                            <Image src={youtube_logo} width={150} height={50} alt="youtube logo" />
                            <h2 className={css.subscribetext}> Subscribe for amazing content, every day</h2>
                            <p className={css.subscribetext_sub}>Live stream every day at 9:30pm. I play GTA V RolePlay, Valorant, Counter Strike and many other fun games.</p>
                            <div className={css.subscribe_button}>
                                <Primary text="Subscribe" />
                            </div>
                            <EmptyVideoItem type="empty" />
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

                                <div className="pd-bottom" />
                                <OutlineMedium text="Browse Merch" />
                                <div className="pd-bottom" />
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
                            <div className={css.buy_merch_notice}>All these products are just for demonstration and does not represent	an actual product as of now.</div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export async function getServerSideProps({ req, res }) {
    const forwarded = req.headers["x-forwarded-for"]
    const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
    console.log(ip)
    let sortedVideos = await axios.get(`${publicRuntimeConfig.apiUrl}content`, { withCredentials: true }).then((res) => res.data)
    let streamerData = await axios.get(`${publicRuntimeConfig.apiUrl}streamerData`, { withCredentials: true }).then((res) => res.data)

    if (sortedVideos.message === "success" && streamerData.message === "success") {
        sortedVideos = sortedVideos.data.sortedVideos
        streamerData = streamerData.data.streamerData
        return { props: { sortedVideos, streamerData, SERVER_URL: publicRuntimeConfig.serverUrl } }
    } else return { props: {} }
}

export default Home
