import css from './index.module.css'

export default function SideBar(props) {
    return (
        <div className={`${css.sidebar} ${css.open_sidebar}`}>
            <h1>RakaZone</h1>
        </div>
    )
}
