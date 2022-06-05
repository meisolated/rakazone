import Image from "next/image"
import css from "./about.module.css"
import { Primary } from "../../components/Buttons"
import facebook_icon from "../../assets/icons/facebook.svg"
import twitter_icon from "../../assets/icons/twitter.svg"
import instagram_icon from "../../assets/icons/instagram.svg"
import youtube_icon from "../../assets/icons/youtube.svg"
import Insta15 from "../../assets/img/insta15.png"
import instaIcon from "../../assets/insta.svg"
import Insta from "../../assets/img/insta.jpg"
import insta1 from "../../assets/img/insta07.png"
import insta2 from "../../assets/img/insta02.png"
import insta3 from "../../assets/img/insta15.png"
import insta4 from "../../assets/img/insta06.png"
import Head from "next/head"
function About() {
    return (
        <>
            <Head>
                <title>About - RakaZone</title>
            </Head>
            <div className="container-default">
                <div className={css.about}>
                    <div className={css.about_main}>
                        <div className={css.about_streamer_channel_image}>
                            <Image src="https://raka.zone/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={130} height={130} />
                        </div>
                        <div className={css.padding}></div>
                        <h1 className={css.about_title}>
                            I&#8216;m <span className="bold">Rishab Karanwal </span> AKA <span className="bold">RakaZone.</span>
                            <br /> Gamer and Content Creator for <span className="bold">VLT</span>
                        </h1>
                        <p className={css.about_description}>
                            Hi, My Name is Rishab Karanwal. I&#8216;m 29 & I live in India.
                            <br /> I&#8216;m a Influencer, YouTuber, Vlogger* and a Video Creator.
                        </p>
                        <div className="pd-bottom-high "></div>
                        <Primary text="Subscribe to My Channel" />
                        <div className="pd-bottom-high" />
                        <div className={`${css.about_streamer_achievement} iso-layout-grid `}>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={youtube_icon} alt="" className={css.social} width={130} height={130} />
                                </div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>YouTube subscribers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={facebook_icon} alt="" className={css.social} width={130} height={130} />
                                </div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Facebook followers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={twitter_icon} alt="" className={css.social} width={130} height={130} />
                                </div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Twitter followers</div>
                                </div>
                            </div>
                            <div className={css.card}>
                                <div className={css.social_icon_image_wrapper}>
                                    <Image src={instagram_icon} alt="" className={css.social} width={130} height={130} />
                                </div>
                                <div className={css.card_content}>
                                    <div className={css.about_streamer_achievement_count}>470 K</div>
                                    <div className={css.about_streamer_achievement_text}>Instagram followers</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.story_about_me}>
                    <div className={css.story_about_me_left}>
                        <div className={css.story_about_me_content}>
                            <p>
                                <span className={css.story_about_titles}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br /> Lorem Ipsum has been the industrys standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                        <div className={css.story_about_me_image_left}>
                            <Image src={Insta15} width={600} height={600} alt="sdas" className={css.story_about_img_left} />
                        </div>
                    </div>
                    <div className={css.story_about_me_right}>
                        <div className={css.story_about_me_image_right}>
                            <Image src={Insta} width={500} height={600} alt="sdas" className={css.story_about_img_right} />
                        </div>
                        <div className={css.story_about_me_content}>
                            <p>
                                <span className={css.story_about_titles}>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</span> <br /> Lorem Ipsum has been the industrys standard dummy text ever
                                since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic
                                typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                                software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </div>
            <div className={css.instagram_showcase_grid}>
                <div className={css.instagram_showcase_grid_item_image}>
                    <Image src={insta1} width={500} height={500} alt="sdas" className={css.instagram_showcase_grid_item_image_img} />
                    <div className={css.instagram_image_filter}>
                        <div className={`${css.video_button_wrapper} ${css.instagram_image}`}>
                            <div className={css.video_button}>
                                <Image
                                    src={instaIcon}
                                    className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.instagram_showcase_grid_item_image}>
                    <Image src={insta2} width={500} height={500} alt="sdas" className={css.instagram_showcase_grid_item_image_img} />
                    <div className={css.instagram_image_filter}>
                        <div className={`${css.video_button_wrapper} ${css.instagram_image}`}>
                            <div className={css.video_button}>
                                <Image
                                    src={instaIcon}
                                    className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.instagram_showcase_grid_item_image}>
                    <Image src={insta3} width={500} height={500} alt="sdas" className={css.instagram_showcase_grid_item_image_img} />
                    <div className={css.instagram_image_filter}>
                        <div className={`${css.video_button_wrapper} ${css.instagram_image}`}>
                            <div className={css.video_button}>
                                <Image
                                    src={instaIcon}
                                    className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={css.instagram_showcase_grid_item_image}>
                    <Image src={insta4} width={500} height={500} alt="sdas" className={css.instagram_showcase_grid_item_image_img} />
                    <div className={css.instagram_image_filter}>
                        <div className={`${css.video_button_wrapper} ${css.instagram_image}`}>
                            <div className={css.video_button}>
                                <Image
                                    src={instaIcon}
                                    className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`}
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default About
