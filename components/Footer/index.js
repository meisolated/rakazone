import css from "./Footer.module.css"
import Image from "next/image"
import { PrimaryButton } from "../Buttons"
import insta1 from "../../assets/img/insta07.png"
import insta2 from "../../assets/img/insta02.png"
import insta3 from "../../assets/img/insta15.png"
import link_icon from "../../assets/icons/open_link_icon.svg"
function Footer() {
    return (
        <>
            <footer className={css.footer}>
                <div className="container-default">
                    <div className={css.footer_content_top}>
                        <div className={css.footer_logo}>
                            <Image src="https://raka.zone/assets/img/logo.png" alt="a" width={164} height={60} />
                        </div>
                        <div className={css.footer_subscribe_wrapper}>
                            <p className={css.footer_subscribe_paragraph}>Want to stay tuned about all videos released every week? Subscribe to my YouTube</p>
                            <PrimaryButton text="Subscribe" />
                        </div>
                    </div>

                    <div className={css.footer_middle_content}>
                        <div className={css.footer_middle_content_left}>
                            <h2>Get Every Latest News </h2>
                            <div className={css.email_input}>
                                <input className={css.input} placeholder="Enter your mail address" />
                                <span className={`${css.left_icon} material-symbols-outlined`}>drafts</span>
                                <span className={`${css.right_icon} material-symbols-outlined`}>send</span>
                            </div>
                        </div>
                        <div className={css.footer_middle_content_right}>
                            <h2>Follow me on Instagram</h2>
                            <div className={`${css.footer_instagram_gallery_grid}`}>
                                <div className={css.insta_img}>
                                    <Image src={insta1} alt="a" width={120} height={120} ima />
                                    <div className={css.img_filter} >
                                        <Image src={link_icon} alt="a" width={20} height={120} />
                                    </div>
                                </div>
                                <div className={css.insta_img}>
                                    <Image src={insta2} alt="a" width={120} height={120} />
                                    <div className={css.img_filter}>
                                        <Image src={link_icon} alt="a" width={20} height={120} />
                                    </div>
                                </div>
                                <div className={css.insta_img}>
                                    <Image src={insta3} alt="a" width={120} height={120} />
                                    <div className={css.img_filter}>
                                        <Image src={link_icon} alt="a" width={20} height={120} />
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className={css.footer_content_bottom}>
                        <div className={css.footer_copyright}>
                            Copyright © 2022 &nbsp;
                            <a href="https://www.instagram.com/rakazonegaming/" className={css.footer_link}>
                                RakaZone
                            </a>
                            .&nbsp;All rights reserved.
                        </div>
                        <div className={`${css.footer_social_buttons}`}>
                            <a href="https://www.youtube.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_youtube}  ${css.footer_social_button}`}></a>
                            <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_facebook}  ${css.footer_social_button}`}></a>
                            <a href="https://twitter.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_twitter}  ${css.footer_social_button}`}></a>
                            <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_instagram}  ${css.footer_social_button}`}></a>
                            <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_linkedin}  ${css.footer_social_button}`}></a>
                            <a href="https://www.twitch.tv/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_twitch}  ${css.footer_social_button}`}></a>
                            <a href="https://www.tiktok.com/" target="_blank" rel="noreferrer" className={`${css.footer_social_button_icon_tiktok}  ${css.footer_social_button}`}></a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer
