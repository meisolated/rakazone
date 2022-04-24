import css from "./index.module.css"
import HomeHero from "../components/HomeHero"
import FeaturedVideo from "../components/FeaturedVideos/index.js"
import LastestVideos from "../components/LatestVideos/index.js"
import AboutChannel from "../components/AboutChannel/index.js"
import SubscribeToMyChannel from "../components/SubscribeToMyChannel/index.js"
import BuyMerch from "../components/BuyMerch/index.js"
import axios from "axios"
function Home(props) {
    return (
        <div className={css.main}>
            <div className="container-default">
                <HomeHero data={props.serverdata.userdata} />
                <FeaturedVideo data={{ "livedata": props.serverdata.livedata, "somevideos": props.serverdata.somevideos }} />
                <div className="divider" />
                <LastestVideos data={props.serverdata.somevideos} />
                <div className="divider" />
                <AboutChannel />
                <div className="divider" />
                <div className={css.support_channel_grid}>
                    <SubscribeToMyChannel />
                    <BuyMerch />
                </div>
            </div>
        </div>
    )
}

export async function getServerSideProps(context) {
    let { data } = await axios
        .get("http://10.69.69.201:3000/api/v1/all")

    if (data.message === "success") {
        return { props: { serverdata: data.data } }

    }
    else return { props: {} }
}

export default Home
