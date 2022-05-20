import Header from '../Header'
import css from './Layout.module.css'
import LoadingBar from "../LoadingBar"
import Footer from '../Footer'
function Layout(props) {
    return (<>
        <LoadingBar />
        <div className={css.layout}>
            <Header isLoggedIn={props.isLoggedIn} userData={props.userData} />
            <main>{props.children}</main>
            <Footer />
        </div>
    </>
    )
}

export default Layout