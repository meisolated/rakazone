import css from "./Grey.module.css"


export function GreySmall(promps) {
    return <button className={`${css.GreySmall} ${css.button}`}>{promps.text}</button>
}

export function GreyMedium(promps) {
    return <button className={`${css.GreyMedium} ${css.button}`}>{promps.text}</button>
}

export function GreyBig(promps) {
    return <button className={`${css.GreyBig} ${css.button}`}>{promps.text}</button>
}

