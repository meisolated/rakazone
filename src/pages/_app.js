import { motion } from "framer-motion"
import Head from "next/head"
import Script from "next/script"
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
  const adsStatus = false
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


    if (adsStatus) {
      const head = document.getElementsByTagName("head")[0]
      const scriptElement = document.createElement(`script`)
      scriptElement.type = `text/javascript`
      scriptElement.async
      scriptElement.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-9270075046641360`
      scriptElement.crossOrigin = "anonymous"
      head.appendChild(scriptElement)
    }

    //
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
            <Script strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=G-EJJSXHHFKZ`} />
            <Script id='google-analytics'
              strategy="lazyOnload" >
              {`window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-EJJSXHHFKZ');`}
            </Script>
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
