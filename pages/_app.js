import Layout from "../components/Layout/index.js"
import "../styles/globals.css"
import { motion } from "framer-motion"
// import "../styles/uicons-solid-rounded.css"
import { useEffect, useState } from "react"
function MyApp({ Component, pageProps, router }) {
  useEffect(() => {
    let data = {
      isLoggedIn: false,
      userData: {
        name: "",
        profile_pic: "",
      },
    }
    localStorage.setItem("user", JSON.stringify(data))
    return console.log(JSON.parse(localStorage.getItem("user")))
  }, [])

  const slideRight = {
    name: "Slide Right",
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
      duration: 0.7,
    },
  }

  return (
    <>
      <Layout>
        <motion.div key={router.route} initial="initial" animate="animate" transition={slideRight.transition} variants={slideRight.variants}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  )
}

export default MyApp
