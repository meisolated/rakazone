import { motion } from "framer-motion"
import Head from "next/head.js"
import Router from "next/router"
import { useEffect } from "react"
import { Provider } from "react-redux"
import Layout from "../components/Layout"
import { Toast } from "../components/Notification"
import { store } from "../store/store.js"
import "../styles/globals.css"


const handleRouteChange = (url, { shallow }) => {
  console.log(
    `App is changing to ${url} ${shallow ? 'with' : 'without'
    } shallow routing`
  )
}

Router.events.on('routeChangeStart', handleRouteChange)

Router.events.on("routeChangeComplete", () => {
  console.log("routeChangeComplete")
})
Router.events.on("routeChangeError", (e) => {
  console.log("routeChangeError" + e)
})

function MyApp({ Component, pageProps, router }) {
  const isAdminRoute = router.pathname.includes("/Admin")
  const fade = {
    variants: {
      initial: {
        opacity: 0,
        left: "-100%",
        // scale: 0.6,
      },
      animate: {
        opacity: 1,
        left: 0,
        // scale: 1,
      },
      exit: {
        opacity: 0,
        left: "100%",
        // scale: 0.6,
      },
    },
    transition: {
      duration: 0.5,
    },
  }

  useEffect(() => {
    if (document) {
      let comment = document.createComment(`

      =========================================================
      * * RakaZone v1.1.0 made by Vivek Mudgal AKA meIsolated * *
      =========================================================
      
      * Home Page: https://www.raka.zone
      * Copyright © 2022 meIsolated (https://www.instagram.com/meisolated) All rights reserved.
      * All rights reserved. This work is protected by copyright law and international treaties.
      
      * Coded by meIsolated
      
      =========================================================
      
      `)
      document.insertBefore(comment, document.documentElement)
    }
  })

  if (isAdminRoute)
    return (
      <>
        <Component {...pageProps} />
      </>
    )
  return (
    <>
      <Provider store={store}>
        <Layout>

          <Toast fade={true} />
          <motion.div key={router.route} initial="initial" animate="animate" exit="exit" transition={fade.transition} variants={fade.variants}>
            <Component {...pageProps} />
          </motion.div>
        </Layout>
      </Provider>
    </>
  )
}

export default MyApp
