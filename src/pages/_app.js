import * as ackeeTracker from "ackee-tracker"
import { motion } from "framer-motion"
import Head from "next/head.js"
// import Router from "next/router"
import { useEffect, useState } from "react"
import { Provider } from "react-redux"
import Layout from "../components/Layout"
import { Toast } from "../components/Notification"
import { store } from "../store/store.js"
import "../styles/globals.css"

// export function reportWebVitals(metric) {
//   console.log(metric)
// }

// const handleRouteChange = (url, { shallow }) => {
//   // console.log(
//   //   `App is changing to ${url} ${shallow ? 'with' : 'without'
//   //   } shallow routing`
//   // )
// }

// Router.events.on("routeChangeStart", handleRouteChange)

// Router.events.on("routeChangeComplete", () => {
//   // console.log("routeChangeComplete")
// })
// Router.events.on("routeChangeError", (e) => {
//   // console.log("routeChangeError" + e)
// })

function MyApp({ Component, pageProps, router }) {
  // const isAdminRoute = router.pathname.includes("/Admin")
  const [commented, setCommented] = useState(false)
  const fade = {
    variants: {
      initial: {
        opacity: 0,
        left: "-100%",
      },
      animate: {
        opacity: 1,
        left: 0,
      },
      exit: {
        opacity: 0,
        left: "100%",
      },
    },
    transition: {
      duration: 0.5,
    },
  }

  useEffect(() => {
    const analyticsServerUrl = "https://keviv.xyz/"
    const analyticsKey = "60e0cc8d-c2a6-42c5-9efa-a1609a5ce6f7"
    ackeeTracker.create(analyticsServerUrl).record(analyticsKey)
    const attributes = ackeeTracker.attributes(true)
    const instance = ackeeTracker.create(analyticsServerUrl, {
      detailed: true,
      ignoreLocalhost: false,
    })
    instance.record(analyticsKey, {
      ...attributes,
      siteLocation: window.location.href,
      siteReferrer: document.referrer,
    })

    if (!commented) {
      if (document) {
        setCommented(true)
        let comment = document.createComment(`
  
        =========================================================
  
        * * RakaZone v1.1.0 made by Vivek Mudgal AKA meIsolated * *
  
        =========================================================
        
        * Home Page: https://www.raka.zone
        * Copyright © 2022 meIsolated (https://www.instagram.com/meisolated) All rights reserved.
        * All rights reserved.
        * Coded by meIsolated
      
        ⠂⡀⠐⠠⡀⣀⣀⡀⠂⠂⡀⢀⠁⡀⠠⠠⡀⠂⠁⠐⠄⠂⡀⡀⣀⣀⡀
        ⠠⠠⣠⣾⣿⣿⣿⣿⣷⣄⠐⡀⢀⣀⣀⣤⣤⣀⣀⠁⠈⢀⣴⣿⣿⣿⣿⣿⣦⡀
        ⠂⢠⣿⣿⠟⠉⠉⠙⢿⣿⠶⠛⠉⠁⠂⡀⢀⢀⠉⠙⠳⢾⣿⡟⠉⠉⠉⢻⣿⣷
        ⠁⢸⣿⣿⠁⠁⢀⣠⠞⠁⠂⠈⠈⠄⡀⡀⠠⠈⠂⠄⢀⠐⠙⢦⡀⢀⠂⢸⣿⣿
        ⡀⠈⢿⣿⣷⣤⠞⠁⡀⠁⢀⠄⠐⠁⠁⡀⠈⢀⠄⠁⠁⢀⠁⠄⢙⢦⣴⣿⣿⡟
        ⠄⠐⠈⢛⡿⠃⠈⢩⣶⣾⣿⣿⣷⣦⡀⡀⠈⢀⣴⣾⣿⣿⣷⣶⡁⠂⠻⣿⠋
        ⠠⠈⢀⡾⠁⠁⣰⣿⣿⣿⣿⣿⣿⣿⣷⢀⢀⣿⣿⣿⣿⣿⣿⣿⣿⡄⢀⠙⣆
        ⡀⡀⡼⠁⢀⢰⣿⣧⠁⠁⠠⠁⣽⣿⡟⠐⠈⢻⣿⣏⠉⠉⠉⠉⣹⣿⠠⢃⠸⡆
        ⢀⣴⣧⣤⣄⣸⣿⣿⣿⣶⣶⡾⠋⠁⠂⢀⡀⢀⠉⠙⢷⣶⣶⣾⣿⣿⢃⣼⣴⣿⣦
        ⣤⣿⣿⣿⣿⣿⣿⣿⣿⣿⣟⣀⠈⣾⣿⣿⣿⣿⡆⠁⠈⢻⣿⣿⣿⣿⣿⣿⣿⣿⠇
        ⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣷⣶⣾⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⠐⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏
        ⠁⠠⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠃
        ⠂⢀⠸⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿
        ⠐⠂⠁⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿
        ⢀⠁⠁⠂⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⡿⠁
        ⠂⢀⠈⠁⠂⠈⢿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠏
        ⢀⠈⠂⠐⠐⠐⡀⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁
        ⠄⠂⠁⠂⠂⠐⠄⠈⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁
        ⠈⠈⠐⡀⠐⠂⢀⠄⠹⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁
        ⡀⠂⠠⠐⠠⠂⠈⠄⠐⠹⣿⣿⣿⣿⣿⣿⣿⣿⠟⠁
        ⢀⠈⠠⠁⠐⠐⠐⠄⠈⠁⠘⢿⣿⣿⣿⣿⡿⠁
        ⠁⠈⡀⠁⠂⠁⠐⢀⢀⠐⠂⠁⠙⢿⣿⡟
        ⠂⠂⠐⢀⠂⠂⠐⠂⠂⠈⠈⠄⠂⢀⠙
    
        =========================================================
        
        `)
        document.insertBefore(comment, document.documentElement)
      }
    }
  })

  // if (isAdminRoute)
  //   return (
  //     <>
  //       <Component {...pageProps} />
  //     </>
  //   )
  return (
    <>
      <Provider store={store}>
        <Layout>
          <Head>
            <link rel="shortcut icon" href="https://raka.zone/internal_api/assets/logo.ico" />
          </Head>
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
