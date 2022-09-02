import Image from "next/image"
import Link from "next/link.js"
import insta2 from "../../assets/img/png/insta02.png"
import insta1 from "../../assets/img/png/insta07.png"
import insta3 from "../../assets/img/png/insta15.png"
import link_icon from "../../assets/svg/src/open_link_icon.svg"
import { Primary } from "../Buttons"
import css from "./Footer.module.css"
function Footer() {
  return (
    <>
      <footer className={css.footer}>
        <div className="container-default">
          <div className={css.footer_content_top}>
            <div className={css.footer_logo}>
              <Image src="https://raka.zone/internal_api/assets/img/logo.png" alt="a" width={164} height={60} />
            </div>
            <div className={css.footer_subscribe_wrapper}>
              <p className={css.footer_subscribe_paragraph}>Want to stay tuned about all videos released every week? Subscribe to my YouTube</p>
              <div>
                <Primary text="Subscribe" />
              </div>
            </div>
          </div>

          <div className={css.footer_middle_content}>
            <div className={css.footer_middle_content_left}>
              <h2>Get Every Latest News </h2>
              <div className={css.blog_newsletter_form_block}>
                <input type="email" className={`${css.input} ${css.blog_newsletter_form}`} name="email" placeholder="Enter email address" />
                <input type="submit" value="Subscribe" className={`${css.button_primary} ${css.blog_newsletter_form_button} ${css.iso_button}`} />
              </div>

              <div className={`${css.success_message} ${css.iso_form_done}`} aria-label="Email Form success">
                <div>Thanks for joining our newsletter.</div>
              </div>
              <div className={`${css.error_message} ${css.iso_form_fail}`} aria-label="Email Form failure">
                <div>Oops! Something went wrong.</div>
              </div>
            </div>
            <div className={css.footer_middle_content_right}>
              <h2>Follow me on Instagram</h2>
              <div className={css.footer_instagram_gallery_grid_wrapper}>
                <div className={`${css.footer_instagram_gallery_grid}`}>
                  <div className={css.insta_img}>
                    <Image src={insta1} alt="a" width={120} height={120} />
                    <div className={css.img_filter}>
                      <Image className={css.link_icon} src={link_icon} alt="a" width={19} height={120} />
                    </div>
                  </div>
                  <div className={css.insta_img}>
                    <Image src={insta2} alt="a" width={120} height={120} />
                    <div className={css.img_filter}>
                      <Image className={css.link_icon} src={link_icon} alt="a" width={19} height={120} />
                    </div>
                  </div>
                  <div className={css.insta_img}>
                    <Image src={insta3} alt="a" width={120} height={120} />
                    <div className={css.img_filter}>
                      <Image className={css.link_icon} src={link_icon} alt="a" width={19} height={120} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={css.footer_content_bottom}>
            <div className={`${css.footer_social_buttons}`}>
              {/* target="_blank" rel="noreferrer" */}
              <Link prefetch={false} href="/yt">
                <p className={`${css.footer_social_button_icon_youtube}  ${css.footer_social_button}`}></p>
              </Link>
              <Link prefetch={false} href="/fb">
                <p className={`${css.footer_social_button_icon_facebook}  ${css.footer_social_button}`}></p>
              </Link>
              <Link prefetch={false} href="/twitter">
                <p className={`${css.footer_social_button_icon_twitter}  ${css.footer_social_button}`}></p>
              </Link>
              <Link prefetch={false} href="/insta">
                <p className={`${css.footer_social_button_icon_instagram}  ${css.footer_social_button}`}></p>
              </Link>
              <Link prefetch={false} href="/twitch">
                <p className={`${css.footer_social_button_icon_twitch}  ${css.footer_social_button}`}></p>
              </Link>
            </div>
            <div className={css.footer_copyright}>
              Copyright © 2022 &nbsp;
              <a href="https://www.instagram.com/rakazonegaming/" className={css.footer_link}>
                RakaZone
              </a>
              .&nbsp;All rights reserved.
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
