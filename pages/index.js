import css from "./index.module.css"
import HomeHero from "../components/HomeHero"
import FeaturedVideo from "../components/FeaturedVideos/index.js"
import LastestVideos from "../components/LatestVideos/index.js"
import Layout from '../components/Layout'
// import axios from "axios"
function Home(props) {
    return (
        <Layout>
            <div className={css.main}>
                <div className="container-default">
                    <HomeHero />
                    <FeaturedVideo />
                    <div className="divider"></div>
                    <LastestVideos></LastestVideos>
                    <div className="divider"></div>
                </div>
            </div>
        </Layout>
    )
}

export async function getServerSideProps(context) {

    // let data = await axios("http://10.69.69.201:3000/api/v1/").then(({ data }) => data)
    return { props: {} }

}

export default Home
