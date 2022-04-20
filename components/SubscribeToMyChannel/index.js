import css from "./SubscribeToMyChannel.module.css"
import youtube_logo from "../../assets/img/youtube_logo.svg"
import Image from "next/image"
import VideoItem from "../VideoItem"
import { PrimaryButton } from "../Buttons/index.js"
export default function SubscribeToMyChannel() {
    return (
        <>
            <div className={css.subscribe_to_my_channel}>
                <Image src={youtube_logo} width={150} height={50} alt="youtube logo" />
                <h2 className={css.subscribetext}> Subscribe for amazing content, every day</h2>
                <p className={css.subscribetext_sub}>Live stream every day at 9:30pm. I play GTA V RolePlay, Valorant, Counter Strike and many other fun games.</p>
                <div className={css.subscribe_button}>
                    <PrimaryButton text="Subscribe" />
                </div>
                <VideoItem type="empty"></VideoItem>
            </div>
        </>
    )
}
