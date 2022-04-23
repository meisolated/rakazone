import css from './Primary.module.css'
import Link from 'next/link'
function Primary(promps) {
    let link = promps.where || '/'
    return (<Link href={link} passHref><button className={css.button_primary} >  {promps.text}</button></Link>)

}

function PrimarySmall(promps) {

    return (<button className={css.button_primary_small} >{promps.text}</button>)

}

export { Primary, PrimarySmall }