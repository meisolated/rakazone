import css from './Primary.module.css'
import Link from 'next/link'
function Primary(props) {

    return (<button className={css.button_primary} >  {props.text}</button>)

}

function PrimarySmall(props) {

    return (<button className={css.button_primary_small} >{props.text}</button>)

}

export { Primary, PrimarySmall }