import css from "./input.module.css"
export function Input(props) {
    const label = props.label
    const type = props.type || "text"
    return (
        <input type={type} className={css.input_text} placeholder={label} />
    )
}