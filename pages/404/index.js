import Image from "next/image"
import css from "./404.module.css"
import img404 from "../../assets/img/404.svg"
import { Primary } from "../../components/Buttons"
import Layout from "../../components/Layout/index.js"
function Page404() {
    return (
        <Layout>
            <section className={`${css.utility_page_wrap} ${css.not_found}`}>
                <div className={`${css.utility_page_content_404}`}>
                    <div className={css.not_found_wrapper}>
                        <h1 className={`${css.title} ${css.not_found}`}>Page not found</h1>
                        <p className={`${css.paragraph} ${css.not_found}`}>
                            Looking for RakaZone? Click on the button below to go back to homepage.
                        </p>
                        <div className={`${css.not_found_button_wrapper}`}>
                            <Primary where="/" text="Back to homepage" />
                        </div>
                    </div>
                    <div className={css.image}>
                        <Image src={img404} alt="404 Not Found - Creator X Webflow Template" width={600} height={600} /></div>
                </div>
            </section>
        </Layout>
    )
}

export default Page404
