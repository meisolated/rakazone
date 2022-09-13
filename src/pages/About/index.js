import axios from "axios"
import getConfig from "next/config.js"
import Head from "next/head"
import Image from "next/image"
import { useState } from "react"
import Insta from "../../assets/img/jpg/insta.jpg"
import insta2 from "../../assets/img/png/insta02.png"
import insta4 from "../../assets/img/png/insta06.png"
import insta1 from "../../assets/img/png/insta07.png"
import { default as Insta15, default as insta3 } from "../../assets/img/png/insta15.png"
import facebook_icon from "../../assets/svg/src/facebook.svg"
import instaIcon from "../../assets/svg/src/insta.svg"
import instagram_icon from "../../assets/svg/src/instagram.svg"
import twitter_icon from "../../assets/svg/src/twitter.svg"
import youtube_icon from "../../assets/svg/src/youtube.svg"
import { Primary } from "../../components/Buttons"
import css from "./about.module.css"
const { serverRuntimeConfig } = getConfig()

function InstaImage({ img }) {
  let [insta, setInsta] = useState(false)
  return (
    <div className={css.instagram_showcase_grid_item_image}>
      <Image src={img} width={500} height={500} alt="sdas" className={css.instagram_showcase_grid_item_image_img} />
      <div className={`${css.instagram_image_filter} ${insta && css.instagram_image_filter_hover_state}`} onMouseOver={() => setInsta(true)} onMouseLeave={() => setInsta(false)}></div>
      <div className={`${css.video_button_wrapper} ${css.instagram_image} ${insta ? css.show : css.hide}`} onMouseOver={() => setInsta(true)} onMouseLeave={() => setInsta(false)}>
        <div className={css.video_button}>
          <Image src={instaIcon} className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`} alt="" />
        </div>
      </div>
    </div>
  )
}

function About(props) {
  const streamerData = props.content.streamerData
  let [insta, setInsta] = useState(false)
  let toggleInsta = () => setInsta(!insta)

  return (
    <>
      <Head>
        <title>About | RakaZone</title>
        <meta name="description" content="About RakaZone" />
        <meta name="keywords" content="rakazone about, About, raka, rakazone, rakazonegaming, cool, rakazone cool" />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta property="og:title" content={"About | RakaZone"} />
        <meta property="og:description" content="RakaZone About Page" />
        <meta property="og:image" content="https://raka.zone/internal_api/assets/img/RakaZoneLogo.png" />
      </Head>
      <div className="container-default">
        <div className={css.about}>
          <div className={css.about_main}>
            <div className={css.about_streamer_channel_image}>
              <Image src="https://raka.zone/internal_api/assets/img/instadp.jpeg" alt="" className={css.channel_image} width={130} height={130} />
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
            <div>
              <Primary link="/yt" text="Subscribe to My Channel" />
            </div>
            <div className="pd-bottom-high" />
            <div className={`${css.about_streamer_achievement} iso-layout-grid `}>
              <div className={css.card}>
                <div className={css.social_icon_image_wrapper}>
                  <Image src={youtube_icon} alt="" className={css.social} width={130} height={130} />
                </div>
                <div className={css.card_content}>
                  <div className={css.about_streamer_achievement_count}>{streamerData.yt_subscribers_count}</div>
                  <div className={css.about_streamer_achievement_text}>YouTube subscribers</div>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.social_icon_image_wrapper}>
                  <Image src={facebook_icon} alt="" className={css.social} width={130} height={130} />
                </div>
                <div className={css.card_content}>
                  <div className={css.about_streamer_achievement_count}>{streamerData.fb_followers_count}</div>
                  <div className={css.about_streamer_achievement_text}>Facebook followers</div>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.social_icon_image_wrapper}>
                  <Image src={twitter_icon} alt="" className={css.social} width={130} height={130} />
                </div>
                <div className={css.card_content}>
                  <div className={css.about_streamer_achievement_count}>{streamerData.twitter_followers_count}</div>
                  <div className={css.about_streamer_achievement_text}>Twitter followers</div>
                </div>
              </div>
              <div className={css.card}>
                <div className={css.social_icon_image_wrapper}>
                  <Image src={instagram_icon} alt="" className={css.social} width={130} height={130} />
                </div>
                <div className={css.card_content}>
                  <div className={css.about_streamer_achievement_count}>{streamerData.insta_followers_count}</div>
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
                <span className={css.story_about_titles}>One of the life lessons I can give you is that you can never predict the future by just thinking about it. </span> <br />I would have never
                predicted that I could ever reach the place I am now. It would have been impossible for me to meet such amazing people if I had kept doing a 9-to-5 job. Going on paths not taken will
                be challenging, but one should never lose hope. Your passion might start getting boring, and it may not excite you as it used to. But it requires dedication to achieve your goals.
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
                <span className={css.story_about_titles}>You don't have to be extreme. Just consistent.</span> <br />
                There's no such thing as overnight success. It took me 6yrs to get where I'm right now, with a lot of patience, hard work, and passion. In life, it's crucial to keep moving, doing, and
                brewing what you love. These are not RakaZone's words, and I have tried my best to portray RakaZone.
              </p>
            </div>
          </div>
          {/* <a className={css.big_text}>RakaZone</a> */}
        </div>
        <div className="divider" />
      </div>
      <div className={css.instagram_showcase_grid}>
        <InstaImage img={insta1} />
        <InstaImage img={insta2} />
        <InstaImage img={insta3} />
        <InstaImage img={insta4} />
      </div>
    </>
  )
}

export default About

export async function getServerSideProps({ req, res }) {
  let streamerRes = await axios
    .get(`${serverRuntimeConfig.localApiUrl}streamerdata`, {
      headers: req.headers.cookie && {
        cookie: req.headers.cookie,
      },
    })
    .then((res) => res.data)

  if (streamerRes.message === "success") {
    const streamerData = streamerRes.data.streamerData
    return { props: { content: { streamerData } } }
  } else return { props: {} }
}
