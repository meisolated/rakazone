import Image from "next/image"
import css from "./404.module.css"
import img404 from "../../assets/img/404.svg"
import { Primary } from "../../components/Buttons"
function Page404() {
    return (
        <section className={`${css.utility_page_wrap} ${css.not_found}`}>
            <div className={`${css.utility_page_content_404}`}>
                <div className={css.not_found_wrapper}>
                    <h1 className={`${css.title} ${css.not_found}`}>Page not found</h1>
                    <p className={`${css.paragraph} ${css.not_found}`}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit interdum viverra donec viverra at <span className="text-no-wrap">mauris arcu.</span>
                    </p>
                    <div className={`${css.not_found_button_wrapper}`}>
                        <Primary where="/" text="Back to homepage" />
                    </div>
                </div>
                <div className={css.image}>
                    <Image src={img404} alt="404 Not Found - Creator X Webflow Template" width={600} height={600} /></div>
            </div>
        </section>
    )
}

export default Page404
