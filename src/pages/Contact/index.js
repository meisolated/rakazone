import SvgCall from "assets/svg/Call.js"
import SvgEmailContact from "assets/svg/EmailContact.js"
import { Primary } from "components/Buttons/index.js"
import Head from "next/head.js"
import css from "./contact.module.css"

export default function Contact(props) {
  return (
    <>
      <Head>
        <title>Contact Us | RakaZone</title>
        <meta name="description" content="Contact us for any query or feedback" />
        <meta name="keywords" content="contact, raka, rakazone, rakazonegaming" />
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
      <div className={"container-default"}>
        <div className={css.main_wrapper}>
          <div className={css.left_wrapper}>
            <div className={css.left_content}>
              <h1 className={css.header_text}>Get in touch</h1>
              <p> As RakaZone is not currently managing this website, you can email us if you find any bugs or have any issues related to this website.</p>
              <div>
                <div className={css.contact_item}>
                  <SvgEmailContact />
                  <a>raka.zonee@gmail.com</a>
                </div>
                <div className={css.contact_item}>
                  <SvgCall />
                  <a>+91 8448417051</a>
                </div>
              </div>
            </div>
          </div>
          <div className={css.right_wrapper}>
            <form className={css.form_wrapper}>
              <input type="text" className={css.input_text} placeholder="Name" />
              <input type="text" className={css.input_text} placeholder="Email" />
              <input type="text" className={css.input_text} placeholder="Phone Number" />
              <input type="text" className={css.input_text} placeholder="Subject" />
              <textarea type="text" className={css.text_area} placeholder="Please enter your message..." />
              <Primary text="Submit" />
            </form>
          </div>
        </div>
        <div className={"divider"} />
      </div>
    </>
  )
}
