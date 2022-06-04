import css from "./Test1.module.css"

export default function Test1(props) {
    return (
        <>
            <div className="container-default">
                <div className={css.main}>
                    <div className={`${css.video_button_wrapper} ${css.instagram_image}`}>
                        <div className={css.video_button}>
                            <img
                                src="https://assets.website-files.com/613b673e4173314657551861/613f9e73ba900637fba1e1b6_icon-%20instagram-gallery-video-x-template.svg"
                                alt="Instagram - Creator X Webflow Template"
                                className={`${css.image} ${css.video_button_icon} ${css.instagram_image}`}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
