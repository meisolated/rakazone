import Header from '../Header'
import css from './Layout.module.css'

function Layout(props) {
    return (
        <div className={css.layout}>
            <Header />
            <main >{props.children}</main>
        </div>
    )
}

export default Layout