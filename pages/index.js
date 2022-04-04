import css from "./index.module.css"
import HomeHero from "../components/HomeHero"
import FeaturedVideo from "../components/FeaturedVideos/index.js"
function Home() {
    return (
        <div className={css.main}>
            <div className="container-default">
                <HomeHero />
                <FeaturedVideo />
            </div>
        </div>
    )
}

export default Home
