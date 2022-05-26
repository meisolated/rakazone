import Header from '../Header'
import css from './Layout.module.css'
import LoadingBar from "../LoadingBar"
import Footer from '../Footer'
function Layout(props) {
    return (<>
        <LoadingBar />
        <div className={css.layout}>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </div>
    </>
    )
}

export default Layout