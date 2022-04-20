import css from "./index.module.css"
import HomeHero from "../components/HomeHero"
import FeaturedVideo from "../components/FeaturedVideos/index.js"
import LastestVideos from "../components/LatestVideos/index.js"
import AboutChannel from "../components/AboutChannel/index.js"
import SubscribeToMyChannel from "../components/SubscribeToMyChannel/index.js"
import BuyMerch from "../components/BuyMerch/index.js"

function Home(props) {
    return (

        <div className={css.main}>
            <div className="container-default">
                <HomeHero />
                <FeaturedVideo />
                <div className="divider"></div>
                <LastestVideos></LastestVideos>
                <div className="divider"></div>
                <AboutChannel></AboutChannel>
                <div className="divider"></div>
                <div className={css.support_channel_grid}>
                    <SubscribeToMyChannel />
                    <BuyMerch />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    return { props: {} }

}

export default Home
