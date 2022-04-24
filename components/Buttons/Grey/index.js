import css from "./Grey.module.css"
import Link from "next/link"

export function GreySmall(props) {
    let link = props.where || "/"
    return <Link href={link} passHref> <button className={`${css.GreySmall} ${css.button}`}>{props.text}</button></Link>
}

export function GreyMedium(props) {
    let link = props.where || "/"
    return <Link href={link} passHref><button className={`${css.GreyMedium} ${css.button}`}>{props.text}</button></Link>
}

export function GreyBig(props) {
    let link = props.where || "/"
    return <Link href={link} passHref> <button className={`${css.GreyBig} ${css.button}`}>{props.text}</button></Link>
}

