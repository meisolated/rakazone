import Head from "next/head.js"
import Image from "next/image"
import img404 from "../../assets/svg/src/401.svg"
import { Primary } from "../../components/Buttons"
import css from "./401.module.css"
function Page401() {
  return (
    <>
      <Head>
        <title>401 | RakaZone</title>
        <meta name="robots" content="noindex,nofollow" />
        <meta name="googlebot" content="noindex,nofollow" />
        <meta name="google" content="notranslate" />
        <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
      </Head>
      <section className={`${css.utility_page_wrap} ${css.unauthorized}`}>
        <div className={`${css.utility_page_content_401}`}>
          <div className={css.unauthorized_wrapper}>
            <h1 className={`${css.title} ${css.unauthorized}`}>404 Unauthorized</h1>
            <p className={`${css.paragraph} ${css.unauthorized}`}>This is not your ZONE, Only RakaZone allowed over here. Nhai ho raha kya</p>
            <div className={`${css.unauthorized_button_wrapper}`}>
              <Primary where="/" text="Back to homepage" />
            </div>
          </div>
          <div className={css.image}>
            <Image src={img404} alt="401 Unauthorized - RakaZone" width={600} height={600} />
          </div>
        </div>
      </section>
    </>
  )
}

export default Page401
