import css from "./Test.module.css"
export default function Text(params) {
    return (
        <>
            <div className="container-default">
                <div className={css.blog_newsletter_form_block}>
                    <input type="email" className={`${css.input} ${css.blog_newsletter_form}`} name="email" data-name="Email" placeholder="Enter email address" id="email" required="" />
                    <input type="submit" value="Subscribe" className={`${css.button_primary} ${css.blog_newsletter_form_button} ${css.iso_button}`} />

                </div>

                <div className={`${css.success_message} ${css.iso_form_done}`} aria-label="Email Form success">
                    <div>Thanks for joining our newsletter.</div>
                </div>
                <div className={`${css.error_message} ${css.iso_form_fail}`} aria-label="Email Form failure">
                    <div>Oops! Something went wrong.</div>
                </div>
            </div>
        </>
    )
}
