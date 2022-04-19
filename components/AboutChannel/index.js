import Image from "next/image"
import css from "./AboutChannel.module.css"
import about_channel_image_one from "../../assets/img/about_channel_image_one.png"
import about_channel_image_two from "../../assets/img/about_channel_image_two.png"
// import about_channel_background from "../../assets/img/144.svg"
import art_146 from "../../assets/img/146.svg"
import Grey from "../Button/Grey/index.js"

export default function AboutChannel(params) {
    return (
        <>
            <div className="container-default">
                <div className={css.about_channel_grid}>
                    <div className={css.about_channel_left}>
                        <div className={css.images_wrapper}>
                            {/* <div className={css.images_bg_wrapper}>
                            <Image src={about_channel_background} className={css.images_bg} alt="" width={500} height={500} /></div> */}
                            <div className={css.images}>
                                <div className={css.shapes}>
                                    <Image src={art_146} alt="" width={120} height={104} /> </div>
                                <div className={css.image_one}>
                                    <Image src={about_channel_image_one} alt="" width={390} height={400} /></div>
                                <h1 className={css.nametext}>RakaZone</h1>
                                <div className={css.image_two}>
                                    <Image src={about_channel_image_two} alt="" width={240} height={250} /></div>
                            </div>
                        </div>
                    </div>
                    <div className={css.about_channel_right}>
                        <h1>Hey there!</h1>
                        <p>My name is <span className="bold">Rishab Karanwal,</span> I&lsquo;m  Content Creator, </p>
                        <Grey text="More about me"></Grey>
                    </div>
                </div>
            </div>
        </>
    )
}
