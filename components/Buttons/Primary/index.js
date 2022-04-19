import css from './Primary.module.css'

function Primary(promps) {

    return (<button className={css.button_primary} >{promps.text}</button>)

}

export default Primary