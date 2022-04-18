import Image from "next/image"
import css from "./AboutChannel.module.css"
import about_channel_image_one from "../../assets/img/about_channel_image_one.png"
import about_channel_image_two from "../../assets/img/about_channel_image_two.png"
import about_channel_background from "../../assets/img/about_channel_background.png"
export default function AboutChannel(params) {
    return (
        <>
            <div className="container-default">
                <div className={css.images_wrapper}>
                    <div className={css.images}>
                        <div className={css.image_one}>
                            <Image src={about_channel_image_one} alt="" width={390} height={400} /></div>
                        <h1 className={css.nametext}>RakaZone</h1>
                        <div className={css.image_two}>
                            <Image src={about_channel_image_two} alt="" width={240} height={250} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}
