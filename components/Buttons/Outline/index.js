import css from "./Outline.module.css"


export function OutlineSmall(promps) {
    return <button className={`${css.OutlineSmall} ${css.button}`}>{promps.text}</button>
}

export function OutlineMedium(promps) {
    return <button className={`${css.OutlineMedium} ${css.button}`}>{promps.text}</button>
}

export function OutlineBig(promps) {
    return <button className={`${css.OutlineBig} ${css.button}`}>{promps.text}</button>
}

