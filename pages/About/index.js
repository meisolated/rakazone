import css from "./about.module.css"
import Layout from "../../components/Layout/index.js"
import Image from "next/image"
import { Primary } from "../../components/Buttons/index.js"
import facebook_icon from "../../assets/icons/facebook.svg"
import twitter_icon from "../../assets/icons/twitter.svg"
import instagram_icon from "../../assets/icons/instagram.svg"
import youtube_icon from "../../assets/icons/youtube.svg"
function About() {
    return (
        <Layout>
            <div className="container-default">

                <div className={css.about}>
                    <div className={css.about_main}>
                        <div className={css.about_streamer_channel_image}>
                            <Image src="https://raka.zone/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={130} height={130} />
                        </div>
                        <div className={css.padding}></div>
                        <h1 className={css.about_title}>I&#8216;m <span className="bold">Rishab Karanwal </span> AKA <span className="bold">RakaZone.</span><br /> Gamer and Content Creator for VLT  </h1>
                        <p className={css.about_description}>Hi, My Name is Rishab Karanwal. I&#8216;m 29 & I live in India.<br /> I&#8216;m  a Influencer, YouTuber, Vlogger* and a Video Creator.</p>
                        <div className="pd-bottom-high "></div>
                        <Primary text="Subscribe to My Channel" />
                        <div className="pd-bottom-high" />
                        <div className={`${css.about_streamer_achievement} iso-layout-grid `}>
                            <div className={css.card}>

                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={youtube_icon} alt="" className={css.social} width={130} height={130} /></div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>YouTube subscribers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={facebook_icon} alt="" className={css.social} width={130} height={130} /></div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Facebook followers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={twitter_icon} alt="" className={css.social} width={130} height={130} /></div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Twitter followers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={instagram_icon} alt="" className={css.social} width={130} height={130} /></div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Instagram followers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default About
