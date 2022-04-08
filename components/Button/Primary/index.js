import css from './Primary.module.css'

function Primary(promps) {

    return (<a className={css.button_primary} >{promps.text}</a>)

}

export default Primary