import css from "./Notification.module.css"
export default function Header({ notificationText, notificationType }) {

    return <>
        <div className={css.notification_main}>
            <div className={`${css.notification_text} ${css.marquee}`} dangerouslySetInnerHTML={{ __html: notificationText }} />
        </div>
    </>
}