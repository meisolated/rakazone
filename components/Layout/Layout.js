import Header from '../Header'
import css from './Layout.module.css'
import LoadingBar from "../LoadingBar"
function Layout(props) {
    return (<>
        <LoadingBar />
        <div className={css.layout}>
            <Header />
            <main>{props.children}</main>
        </div>
    </>
    )
}

export default Layout