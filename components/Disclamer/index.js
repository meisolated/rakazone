import css from "./Disclamer.module.css"
import { Primary } from "../Buttons"
import Link from "next/link"

export default function fullScreen(props) {
    let title = "Disclaimer"
    let message = <div><h4>This website is not being managed, moderated, or owned by Rishab Karanwal AKA Rakazone as of this moment.</h4>
        <br />Any content or data, provided or shown on this website is publicly available and owned by Rakazone. <br />
        <br />Rakazone shall/will any time take full control over this website and its content with full assistance on how to manage and control this website. <br />
        <br /> We do not store any kind of information of users visiting this website unless provided. Any data provided by user is completely secure inside our private server situated in Delhi and we do not share this data with any 3rd party whatsoever. <br />
        <br /> <h4> We do not show any kind of ads or any 3rd party content to make money by running this website or to cover cost of running this website as of now.</h4> <br />
        <br />What we store if a user login’s with Google :-<h4> Email Address, Name, Profile Pic, IP address and User Id.
            We do not store users IP address if they don’t login </h4><br />
        Any decision or workings of this website may change if RakaZone wishes any changes on this website<br />
        If RakaZone wishes full removal of this website and its existence, we will remove no questions asked. <br />
        <h5>Any data[such as videos, images or gifs] uploaded by any user is moderated by our team, and we also give dynamic credits to user who uploaded that content.<br />




            We do not impersonate as RakaZone to accept or receive any kind of money as donation or anything from any user visiting this website.<br />
            We have already provided RakaZone with all credentials to access, edit or remove any data available on this website via mail to his Business Email </h5><br />
    </div>
    let button = "Understood"

    return (
        <>
            <div className={css.notification}>
                <div className={css.notification_container}>
                    <div className={css.notification_content}>
                        <div className={css.notification_title}>{title}</div>
                        <div className={css.message_wrapper}><div className={css.notification_message}>{message}</div></div>
                        <div className={css.notification_buttons} > <Primary text={button} /></div>
                    </div>
                </div>
            </div>
        </>
    )
}