import css from "./Outline.module.css"

export function OutlineSmall(props) {
    if (props.background)
        return (
            <button
                style={{ backgroundImage: "url(" + `${props.background}` + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                className={`${css.OutlineSmall} ${css.button}`}
            >
                {props.text}
            </button>
        )
    return <button className={`${css.OutlineSmall} ${css.button}`}>{props.text}</button>
}

export function OutlineMedium(props) {
    return <button className={`${css.OutlineMedium} ${css.button}`}>{props.text}</button>
}

export function OutlineBig(props) {
    return <button className={`${css.OutlineBig} ${css.button}`}>{props.text}</button>
}
