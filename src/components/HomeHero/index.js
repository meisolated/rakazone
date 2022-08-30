import Image from 'next/image'
import { Primary } from '../Buttons'
import css from './HomeHero.module.css'

function HomeHero(props) {
    let userData = props.data[0]

    return (
        <div className={css.home_hero}>
            <div className={css.left}>
                <div className={css.home_hero_channel_image}>
                    <Image
                        src="https://raka.zone/internal_api/assets/img/instadp.jpeg"
                        alt=""
                        className={css.channel_image}
                        width={91}
                        height={91}
                    />
                </div>
                <div className="home_hero_channel_about">
                    <div className={css.channel_about_content_top}>
                        <h1 className={css.title}>Rakazone</h1>
                        <div
                            className={css.subscriber_count}
                        >{`${userData.yt_subscribers_count} SUBSCRIBERS`}</div>
                    </div>
                    <p className={css.about}>
                        {' '}
                        <span className={css.bold}>Rishab Karanwal</span> most
                        of you know me as Raka, I am a vairty streamer. If you
                        say so.{' '}
                    </p>
                </div>
            </div>
            <div className={css.right}>
                <Primary text={'Subscribe'} />
            </div>
        </div>
    )
}

export default HomeHero
