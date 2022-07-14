import css from "./Grey.module.css"

export function GreySmall(props) {
    return <button className={`${css.GreySmall} ${css.button}`}>{props.text}</button>
}

export function GreyMedium(props) {
    return <button className={`${css.GreyMedium} ${css.button}`}>{props.text}</button>
}

export function GreyBig(props) {
    return <button className={`${css.GreyBig} ${css.button}`}>{props.text}</button>
}

