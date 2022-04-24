import css from './Primary.module.css'
import Link from 'next/link'
function Primary(props) {
    let link = props.where || '/'
    return (<Link href={link} passHref><button className={css.button_primary} >  {props.text}</button></Link>)

}

function PrimarySmall(props) {
    let link = props.where || '/'
    return (<Link href={link} passHref><button className={css.button_primary_small} >{props.text}</button></Link>)

}

export { Primary, PrimarySmall }