import OnLoadPopUps from 'components/Modal/OnLoadPopUps'
import getConfig from 'next/config.js'
import React from 'react'
import Footer from '../Footer'
import Header from '../Header'
import LoadingBar from '../LoadingBar'
import css from './Layout.module.css'

function Layout(props) {
    return (
        <>
            <LoadingBar />
            <OnLoadPopUps onClose={() => {}} />
            <div className={css.layout}>
                <Header />
                <main>{props.children}</main>
                <Footer />
            </div>
        </>
    )
}

export default Layout
