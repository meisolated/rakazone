import css from './Button.module.css'

function Button(promps) {

    return (<a className={css.button_primary} >{promps.text}</a>)

}

export default Button