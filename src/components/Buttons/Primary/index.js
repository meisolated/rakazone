import Link from "next/link"
import css from "./Primary.module.css"
function Primary(props) {
    let link = props.link ? props.link : "#"
    return (
        <Link href={link} passHref>
            <button className={css.button_primary} > {props.text}</button>
        </Link>
    )
}

function PrimarySmall(props) {
    let link = props.link ? props.link : "#"
    return (
        <Link href={link}>
            <button className={css.button_primary_small}>{props.text}</button>
        </Link>
    )
}

export { Primary, PrimarySmall }
