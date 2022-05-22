import css from "./Outline.module.css"
import Link from "next/link"

export function OutlineSmall(props) {
    let link = props.where || "/"
    if (props.background)
        return (
            <Link href={link} passHref>
                <button
                    style={{ backgroundImage: "url(" + `${props.background}` + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "center" }}
                    className={`${css.OutlineSmall} ${css.button}`}
                >
                    {props.text}
                </button>
            </Link>
        )
    return (
        <Link href={link} passHref>
            <button className={`${css.OutlineSmall} ${css.button}`}>{props.text}</button>
        </Link>
    )
}

export function OutlineMedium(props) {
    let link = props.where || "/"
    return (
        <Link href={link} passHref>
            <button className={`${css.OutlineMedium} ${css.button}`}>{props.text}</button>
        </Link>
    )
}

export function OutlineBig(props) {
    let link = props.where || "/"
    return (
        <Link href={link} passHref>
            <button className={`${css.OutlineBig} ${css.button}`}>{props.text}</button>
        </Link>
    )
}
