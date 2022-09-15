import axios from "axios"
import getConfig from "next/config"
import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

//other components
import { convertToInternationalCurrencySystem, since } from "../util/functions.js"
import css from "./index.module.css"

// components
import { GreyMedium, OutlineMedium, Primary } from "../components/Buttons"
import { EmptyVideoItem, VideoItemRegular } from "../components/VideoItem"

// assets
import about_channel_image_one from "../assets/img/png/about_channel_image_one.png"
import about_channel_image_two from "../assets/img/png/about_channel_image_two.png"
import merch1 from "../assets/img/png/merch1.png"
import merch2 from "../assets/img/png/merch2.png"
import merch3 from "../assets/img/png/merch3.png"
import art_146 from "../assets/svg/src/146.svg"
import bag from "../assets/svg/src/bag-3.svg"
import playicon from "../assets/svg/src/playicon.svg"
import youtube_logo from "../assets/svg/src/youtube_logo.svg"

const { publicRuntimeConfig, serverRuntimeConfig } = getConfig()

// use other youtube thumbnail urls to check a valid url or not
// https://itnext.io/using-http-2-with-next-js-express-917791ca249b
function Home(props) {
  let streamerData = props.content.streamerData
  let featuredPrimary = props.content.videos.featuredPrimary
  let featuredSecondary = props.content.videos.featuredSecondary
  let featuredTertiary = props.content.videos.featuredTertiary
  let latest = props.content.videos.latest

  featuredPrimary.title = featuredPrimary.title.length > 60 ? featuredPrimary.title.substring(0, 60) + "..." : featuredPrimary.title
  featuredSecondary.title = featuredSecondary.title.length > 60 ? featuredSecondary.title.substring(0, 60) + "..." : featuredSecondary.title
  featuredTertiary.title = featuredTertiary.title.length > 60 ? featuredTertiary.title.substring(0, 60) + "..." : featuredTertiary.title

  const whatToShow = featuredPrimary
  const ago = since(whatToShow.publishedAt * 1000)
  const youtube_thumbnail = whatToShow.thumbnail
  whatToShow.type = whatToShow.type ? whatToShow.type : "Live"
  whatToShow.viewCount = whatToShow.viewCount ? whatToShow.viewCount : whatToShow.viewers_count
  const views = whatToShow.status == "live" ? "watching now" : "views"
  const viewCont = whatToShow.platform === "loco" ? whatToShow.viewCount : convertToInternationalCurrencySystem(parseInt(whatToShow.viewCount))
  const isLive = whatToShow.status == "live" ? true : false
  const link =
    whatToShow.platform == "local"
      ? "/Watch/" + whatToShow.videoId
      : whatToShow.platform == "loco"
        ? "https://loco.gg/streamers/RakaZone_Gaming"
        : "https://www.youtube.com/watch?v=" + whatToShow.videoId
  const [active, setActive] = useState(false)
  // RakaZone Gaming is a popular Indian streamer who plays top video games live. Being the best is never easy specially in the competitive world of video games, there's always a high score to chase, a new weapon to unlock and an endless number games to master.
  return (
    <>
      <Head>
        <title>RakaZone Gaming | Rishab Karanwal</title>
        <meta name="keywords" content="raka, rakazone, rakazone gaming, raka.zome, content creator, free, video, sharing, rishab karanwal, rishab" />
        <meta name="robots" content="all" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
        <meta property="og:title" content="RakaZone Gaming | Rishab Karanwal" />
        <meta
          name="description"
          content="Streamer Of The Year 2018 RakaZoneGaming A.K.A RAKA."
        />
        <meta
          property="og:description"
          content="Streamer Of The Year 2018 RakaZoneGaming A.K.A RAKA."
        />
        <meta property="og:image" content="https://raka.zone/internal_api/assets/img/RakaZoneLogo.png" />
      </Head>

      <div className="container-default">
        {/* –––––––––––––––––––––––––– HOME HERO –––––––––––––––––––––––––– */}
        <div className={css.home_hero}>
          <div className={css.home_hero_left}>
            <div className={css.home_hero_channel_image}>
              <Image src={`${publicRuntimeConfig.assetsUrl}assets/img/instadp.jpeg`} alt="" className={css.channel_image} width={91} height={91} />
            </div>
            <div className={css.home_hero_channel_about}>
              <div className={css.channel_about_content_top}>
                <h1 className={css.title}>RakaZone</h1>
                <div className={css.subscriber_count}>{`${streamerData.yt_subscribers_count} SUBSCRIBERS`}</div>
              </div>
              <p className={css.about}>
                <span className={css.bold}>Rishab Karanwal</span> most of you know me as Raka, I am a variety streamer. If you say so.
              </p>
            </div>
          </div>
          <p className={css.mobile_about}>
            <span className={css.bold}>Rishab Karanwal</span> most of you know me as Raka, I am a variety streamer. If you say so.
          </p>
          <div className={css.home_hero_right}>
            <Primary link={"/yt"} text={"Subscribe"} />
          </div>
        </div>
        {/* ––––––––––––––––––––––––––––––––––––––––Featured Video–––––––––––––––––––––––––––––––––––––––––––– */}
        <div className={css.video_featured_grid}>
          <div className={css.video_featured_wrapper}>
            <div className={css.image_wrapper}>
              <Image className={`${css.video_item_image} ${active ? css.image_active : css.image_inactive}`} src={youtube_thumbnail} width={1104} height={620} alt="" />
              <div className={css.video_featured_filter} />
              <Link prefetch={false} href={link} passHref>
                <div className={`${css.video_featured_button_wrapper} ${active ? css.icon_active : css.icon_inactive}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                  <div className={css.video_featured_button}>
                    <div className={css.video_featured_button_icon_wrapper}>
                      <Image src={playicon} className={css.video_featured_button_icon_big} layout="responsive" height={30} width={30} alt="" />
                    </div>
                  </div>
                </div>
              </Link>
              <div className={`${isLive ? css.video_featured_live_text : css.video_featured_text}`}>
                {/* {isLive && <span className="material-icons-round">stream</span>} */}
                {whatToShow.type}
              </div>
            </div>

            <div className={css.video_featured_content}>
              <div className={`pd-right ${css.video_featured_channel_image}`}>
                <Image className={css.video_featured_channel_image} src={`${publicRuntimeConfig.assetsUrl}assets/img/instadp.jpeg`} width={94} height={94} loading="eager" alt="Video Featured Channel Image" />
              </div>
              <div>
                <h2 className={css.video_featured_title}>{whatToShow.title}</h2>
                <div className={css.video_featured_about}>
                  <div className={css.video_featured_duration}>
                    <div>{viewCont}</div>
                    <div>&nbsp;{views}</div>
                  </div>
                  <div className={css.video_about_divider}></div>
                  <div className={css.video_featured_duration}>{ago}</div>
                </div>
              </div>
            </div>
          </div>
          <ins class="adsbygoogle"
            style="display:block"
            data-ad-client="ca-pub-9270075046641360"
            data-ad-slot="5057715242"
            data-ad-format="auto"
            data-full-width-responsive="true"></ins>
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
            <h2 className={css.latest_videos_title}>Recommended videos</h2>
          </div>
          <div className={css.latest_videos_right}>
            <Link prefetch={false} href="/yt" className={css.latest_videos_arrow_link}>
              <div className={css.latest_videos_arrow_link_text}>Browse more videos</div>
            </Link>
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
              I'm <span className="bold">Rishab Karanwal</span>. Most of you know me as RakaZone, and I am a variety streamer. You will see me playing multiple games on my channel, from some intense
              shooter games to role-playing. I usually play GTA V Role Play and Valorant & I also play new games that come out from time to time. I am a content creator for Velocity Gaming "VLT". I
              have been streaming on YouTube for the last 6yrs. I used to work at Accenture as a senior analyst. Now I am a full-time streamer & in all these years, one thing I understood about life
              is <span className="bold">"The best way to predict your future is to create it."</span>
            </p>
            <GreyMedium link="/About" text="More about me" />
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
                <Primary link={"/yt"} text="Subscribe" />
              </div>
              <EmptyVideoItem type="empty" link={"/yt"} />
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
                <OutlineMedium link={"/Shop"} text="Browse Merch" />
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
              <div className={css.buy_merch_notice}>All these products are just for demonstration and does not represent an actual product as of now.</div>
            </div>
          </div>
        </section>
      </div>
      <ins class="adsbygoogle"
        style="display:block"
        data-ad-client="ca-pub-9270075046641360"
        data-ad-slot="5057715242"
        data-ad-format="auto"
        data-full-width-responsive="true"></ins>
    </>
  )
}

export async function getServerSideProps({ req, res }) {
  const forwarded = req.headers["x-real-ip"]
  const ip = forwarded ? forwarded.split(/, /)[0] : req.connection.remoteAddress
  await axios.post(`${serverRuntimeConfig.localApiUrl}logger`, {
    ip,
    req_type: "/home",
  })
  let contentRes = await axios
    .get(`${serverRuntimeConfig.localApiUrl}content`, {
      headers: req.headers.cookie && { cookie: req.headers.cookie },
    })
    .then((res) => res.data)
  let streamerRes = await axios
    .get(`${serverRuntimeConfig.localApiUrl}streamerdata`, {
      headers: req.headers.cookie && { cookie: req.headers.cookie },
    })
    .then((res) => res.data)

  if (contentRes.message === "success" && streamerRes.message === "success") {
    const videos = contentRes.data
    const streamerData = streamerRes.data.streamerData
    return {
      props: {
        content: { videos, streamerData },
      },
    }
  } else return { props: {} }
}

export default Home
