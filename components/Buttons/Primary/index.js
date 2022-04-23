import css from './Primary.module.css'

function Primary(promps) {

    return (<button className={css.button_primary} >{promps.text}</button>)

}

function PrimarySmall(promps) {

    return (<button className={css.button_primary_small} >{promps.text}</button>)

}

export { Primary, PrimarySmall }