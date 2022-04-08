import css from './HomeHero.module.css'
import Image from 'next/image'
import { PrimaryButton } from '../Button'

function HomeHero() {
    return (<div className={css.home_hero}>
        <div className={css.left}>
            <div className={css.home_hero_channel_image}>
                <Image src="https://raka.zone/assets/img/instadp.jpeg" alt='' width={91} height={91} />
            </div>
            <div className='home_hero_channel_about'>
                <div className={css.channel_about_content_top}>
                    <h1 className={css.title}>Rakazone</h1>
                    <div className={css.subscriber_count}>485K Subscriber</div>
                </div>
                <p className={css.about}> <span className={css.bold}>Rishab Karanwal</span>  most of you know me as Raka, I am a vairty streamer. If you say so. </p>
            </div>
        </div>
        <div className={css.right}>
            <PrimaryButton text={"Subscribe"} />
        </div>
    </div>)
}

export default HomeHero