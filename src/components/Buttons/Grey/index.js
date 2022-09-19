import Link from "next/link.js"
import css from "./Grey.module.css"

export function GreySmall(props) {
  return <button className={`${css.GreySmall} ${css.button}`}>{props.text}</button>
}

export function GreyMedium(props) {
  const link = props.link ? props.link : "/"
  return (
    <Link prefetch={true} href={link} passHref>
      < button className={`${css.GreyMedium} ${css.button}`
      }> {props.text}</button >
    </Link >
  )
}

export function GreyBig(props) {
  return <button className={`${css.GreyBig} ${css.button}`}>{props.text}</button>
}
