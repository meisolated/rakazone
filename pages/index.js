import css from "./index.module.css"
import HomeHero from "../components/HomeHero"
import FeaturedVideo from "../components/FeaturedVideos/index.js"
import LastestVideos from "../components/LatestVideos/index.js"
function Home() {
    return (
        <div className={css.main}>
            <div className="container-default">
                <HomeHero />
                <FeaturedVideo />
                <div className="divider"></div>

                <LastestVideos></LastestVideos>
                <div className="divider"></div>
            </div>
        </div>
    )
}

export default Home
