import css from "./Header.module.css"
export default function Header({ notificationText, notificationType }) {
  return (
    <>
      <div className={css.notification_main}>
        <div
          className={`${css.notification_text}`}
          dangerouslySetInnerHTML={{
            __html: notificationText,
          }}
        />
      </div>
      <div className="pd-bottom-high" />
    </>
  )
}
