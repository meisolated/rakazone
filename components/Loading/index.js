import css from "./loading.module.css"
export default function Loading() {
    return <>
        <div className={css.profile_main_loader}>
            <div className={css.loader}>
                <svg className={css.circular_loader} viewBox="25 25 50 50" >
                    <circle className={css.loader_path} cx="50" cy="50" r="20" fill="none" stroke="#ffffff" strokeWidth="3" />
                </svg>
            </div>
        </div>

    </>
}