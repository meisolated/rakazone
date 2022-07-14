import Link from "next/link.js"
import css from "./Outline.module.css"

export function OutlineSmall(props) {
    let link = props.link ? props.link : "#"
    if (props.background)
        return (
            <Link href={link}>
                <button
                    style={{ backgroundImage: "url(" + `${props.background}` + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                    className={`${css.OutlineSmall} ${css.button}`}
                >
                    {props.text}
                </button>
            </Link>
        )
    return (
        <Link href={link}>
            <button className={`${css.OutlineSmall} ${css.button}`}>{props.text}</button>
        </Link>
    )
}

export function OutlineMedium(props) {
    return (
        <Link href={props.link}>
            <button className={`${css.OutlineMedium} ${css.button}`}>{props.text}</button>
        </Link>
    )
}

export function OutlineBig(props) {
    return <button className={`${css.OutlineBig} ${css.button}`}>{props.text}</button>
}
