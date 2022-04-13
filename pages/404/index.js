import css from "./404.module.css"

function Page404() {
    return (
        <>
            <div className={css.board}>
                <p className={css.error}>error</p>
                <p className={css.code}>404</p>
            </div>
        </>
    )
}

export default Page404
