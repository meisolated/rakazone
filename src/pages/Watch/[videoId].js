import axios from "axios"
import DonateModal from "components/Modal/donate.modal.js"
import moment from "moment"
import Head from "next/head.js"
import { useEffect, useState } from "react"
import { convertToInternationalCurrencySystem } from "util/functions.js"
import { publicRuntimeConfig } from "../../../next.config.js"
import { VideoPlayerDesktop, VideoPlayerMobile } from "../../components/VideoPlayer/index.js"
import css from "./Watch.module.css"

// TODO: animated live border https://codepen.io/michellebarker/pen/gOMBPQj?editors=1100

//IPHONE : Mozilla/5.0 (iPhone; CPU iPhone OS 15_5 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Mobile/15E148 Safari/604.1
// SAFARI APPLE M1 : Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/15.5 Safari/605.1.15
export default function Watch(props) {
   let videoData = props.videoData.data
   let videoId = videoData.videoId
   let publishedAt = moment.unix(videoData.publishedAt)
   videoData.title = videoData.title.length > 50 ? videoData.title.substring(0, 50) + "..." : videoData.title
   videoData.ago = moment(publishedAt).fromNow()
   videoData.views = convertToInternationalCurrencySystem(videoData.viewCount)
   videoData.likes = convertToInternationalCurrencySystem(videoData.likeCount)
   videoData.comments = convertToInternationalCurrencySystem(videoData.commentCount)
   videoData.description = `<strong>🖥️ PC Specs</strong> <br/>
    • i9 9900K , 32 GB DDR4 RAM , ASUS ROG Strix  Z390-F, GPU RTX 3080 <br/>
    • Camera - Logitech C-922 <br/>
    • Mic- Samson c03u<br/>
    • Headset - boAt Immortal IM1300 Gaming<br/>
    • Keyboard - Logitech G613 Wireless Mechanical Keyboard<br/>
    • Mouse -  Logitech G304 Wireless Gaming Mouse<br/>
    • Monitor - LG Ultragear 27Inch<br/>
    <br/>
    <strong>💰 Benefits Of Being A Sponsor 💰</strong><br/>
    <br/>
    • Get's a custom badge & Emoji's <br/>
    • Can play with me on non-sub games<br/>
    • Can join discord voice channel on non-sub games<br/>
    • Participate in Sponsor's only Giveaway's.<br/>
    <br/>
    <strong>About RakaZone Gaming 👦🏻</strong><br/>
    <br/>
    • Rishab Karanwal<br/>
    • 28<br/>
    • New Delhi, India<br/>`

   const AdVideoSrc = `https://keviv.xyz/api/SampleAd/playlist.m3u8`

   const [showDonateModal, setShowDonateModal] = useState(false)
   const [isMobile, setIsMobile] = useState(props.isMobile)
   const [loading, setLoading] = useState(true)

   let component = {
      desktop: <VideoPlayerDesktop videoId={videoId} isIOS={props.isIOS} adSrc={AdVideoSrc} />,
      mobile: <VideoPlayerMobile videoId={videoId} isIOS={props.isIOS} adSrc={AdVideoSrc} />,
   }

   return (
      <>
         <Head>
            <title>{videoData.title} | RakaZone</title>
            <meta name="description" content={videoData.title + " | RakaZone"} />
            <meta name="keywords" content="video, funny, raka, rakazone, rakazonegaming, valorant, gta rp, role play" />
            <meta name="robots" content="all" />
            <meta name="google" content="notranslate" />
            <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
            <meta property="og:title" content={videoData.title + " | RakaZone"} />
            <meta property="og:description" content={videoData.title} />
            <meta property="og:image" content={videoData.thumbnails} />
         </Head>
         <div className="container-default">
            <div className={css.player_wrapper}>{isMobile !== null && isMobile ? component.mobile : component.desktop}</div>
            {isMobile ? <MobileVideoDetails videoData={videoData} setShowDonateModal={setShowDonateModal} /> : <DesktopVideoDetails videoData={videoData} setShowDonateModal={setShowDonateModal} />}
            {<DonateModal show={showDonateModal} onClose={() => setShowDonateModal(false)} />}
         </div>
      </>
   )
}

const MobileVideoDetails = ({ videoData, setShowDonateModal }) => {
   return (
      <>
         <div className={css.mobile_video_details}>
            <div className={css.mobile_video_details_wrapper}>
               <div className={css.mobile_video_details_wrapper_left}>
                  <div className={css.mobile_video_details_wrapper_left_title}>
                     <h1>{videoData.title}</h1>
                  </div>
                  <div className={css.mobile_video_stats}>
                     <div className={css.mobile_videoStats_item}>{videoData.views} Views</div>
                     <div className={css.content_about_divider} />
                     <div className={css.mobile_videoStats_item}>{videoData.ago}</div>
                  </div>
                  <div className={css.mobile_video_other_details}>
                     <div className={css.mobile_video_other_details_item}>
                        <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>thumb_up</div>
                        <div className={css.mobile_video_other_details_text}>{videoData.likes}</div>
                     </div>
                     <div className={css.mobile_video_other_details_item}>
                        <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>question_answer</div>
                        <div className={css.mobile_video_other_details_text}>{videoData.comments}</div>
                     </div>
                     <div className={css.mobile_video_other_details_item}>
                        <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>share</div>
                        <div className={css.mobile_video_other_details_text}>Share</div>
                     </div>
                     <div className={css.mobile_video_other_details_item} onClick={() => setShowDonateModal(true)}>
                        <div className={`material-icons-round ${css.mobile_video_other_details_icons}`}>attach_money</div>
                        <div className={css.mobile_video_other_details_text}>Thanks</div>
                     </div>
                  </div>
                  <div className={"divider"} />
                  <div className={css.mobile_video_description}>
                     <a>
                        💲 UPI • rakazonegaming@oksbi <br />
                        💲 Sponsor • https://raka.zone/sponsor
                        <br />
                        💲 Donation Via PayPal • https://raka.zone/paypal
                        <br />
                        🙏 Every Tip Is Appreciated
                     </a>
                     <p dangerouslySetInnerHTML={{ __html: videoData.description }}></p>
                  </div>
               </div>
            </div>
         </div>
      </>
   )
}

const DesktopVideoDetails = ({ videoData, setShowDonateModal }) => {
   return (
      <div className={css.desktop_video_details}>
         <div className={css.desktop_video_details_wrapper_main}>
            <div className={css.desktop_video_details_wrapper}>
               <div className={css.desktop_details_left}>
                  <div className={css.desktop_video_details_wrapper_title}>
                     <a className={css.desktop_video_title}>{videoData.title}</a>
                  </div>
                  <div className={css.desktop_video_stats}>
                     <div className={css.desktop_videoStats_item}>{videoData.views} Views</div>
                     <div className={css.content_about_divider} />
                     <div className={css.desktop_videoStats_item}>{videoData.ago}</div>
                  </div>
               </div>
               <div className={css.desktop_video_other_details}>
                  <div className={css.desktop_video_other_details_item}>
                     <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>thumb_up</div>
                     <div className={css.desktop_video_other_details_text}>{videoData.likes}</div>
                  </div>
                  <div className={css.desktop_video_other_details_item}>
                     <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>question_answer</div>
                     <div className={css.desktop_video_other_details_text}>{videoData.comments}</div>
                  </div>
                  <div className={css.desktop_video_other_details_item}>
                     <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>share</div>
                     <div className={css.desktop_video_other_details_text}>Share</div>
                  </div>
                  <div className={css.desktop_video_other_details_item} onClick={() => setShowDonateModal(true)}>
                     <div className={`material-icons-round ${css.desktop_video_other_details_icons}`}>attach_money</div>
                     <div className={css.desktop_video_other_details_text}>Thanks</div>
                  </div>
               </div>
            </div>
            <div className={"divider-small"} />
            <div className={css.desktop_video_description}>
               <a>
                  💲 UPI • rakazonegaming@oksbi <br />
                  💲 Sponsor • https://raka.zone/sponsor
                  <br />
                  💲 Donation Via PayPal • https://raka.zone/paypal
                  <br />
                  🙏 Every Tip Is Appreciated
               </a>
               <p dangerouslySetInnerHTML={{ __html: videoData.description }}></p>
            </div>
         </div>
      </div>
   )
}

export async function getServerSideProps(context) {
   const UA = context.req.headers["user-agent"]
   const isMobile = Boolean(UA.match(/Android|BlackBerry|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i))
   const isIOS = Boolean(UA.match(/iPhone/i))
   const { videoId } = context.query
   let videoData = await axios.get(`${publicRuntimeConfig.apiUrl}videodata?videoId=${videoId}`, { withCredentials: true }).then((res) => res.data)
   if (videoData.status == 404)
      return {
         redirect: {
            destination: "https://youtube.com/watch?v=" + videoId,
            permanent: false,
         },
      }
   return {
      props: {
         videoData,
         isMobile: isMobile ? true : false,
         isIOS,
      },
   }
}
