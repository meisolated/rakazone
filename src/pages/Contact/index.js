import SvgCall from "assets/svg/Call.js"
import SvgEmailContact from "assets/svg/EmailContact.js"
import { Primary } from "components/Buttons/index.js"
import react from "react"
import css from "./contact.module.css"

export default function (props) {
    return (
        <div className={"container-default"}>
            <div className={css.main_wrapper}>
                <div className={css.left_wrapper}>
                    <div className={css.left_content}>
                        <h1 className={css.header_text}>Get in touch</h1>
                        <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit Interdum viverra donec viverra at mauris arcu pulvinar tellus quam enim nulla risus in convallis feugiat diam duis tristi.</p>
                        <div>
                            <div className={css.contact_item}>
                                <SvgEmailContact />
                                <a>isolatedbot@gmail.com</a>
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
    )
}
