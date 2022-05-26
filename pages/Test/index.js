import css from "./Test.module.css"
import { useState, useEffect } from "react"
import Image from "next/image"
import LogoWithOutText from "../../assets/img/logowithouttext.png"
import Layout from "../../components/Layout/index.js"
import Link from "next/link"
import playicon from "../../assets/img/playicon.svg"
import { convertToInternationalCurrencySystem } from "../../util/functions.js"
import moment from "moment"
import insta1 from "../../assets/img/insta07.png"
import insta2 from "../../assets/img/insta02.png"
import insta3 from "../../assets/img/insta15.png"
export default function Text(params) {

    let [active, setActive] = useState("")



    let videoData = {
        "title": "Test Title",
        "description": "Test Description",
        "publishedAt": Date.now(),
        "viewCount": "123",
        "thumbnail": "https://i.ytimg.com/vi/rwgb3sTQ-nc/maxresdefault.jpg"

    }
    let publishedAt = videoData["publishedAt"]

    let ago = moment(publishedAt * 1000).fromNow()
    let views = convertToInternationalCurrencySystem(videoData.viewCount)
    let link = "/"



    return (
        <>
            <Layout>
                <div className="container-default">
                    <div className={`${css.image_container_2}`} onMouseLeave={() => setActive(false)} onMouseOver={() => setActive(true)}>
                        <Image src={insta1} className={`${active ? css.image_active : css.image_inactive}`} alt="logo" width={600} height={600} />
                    </div>
                </div>
            </Layout>

        </>
    )
}
