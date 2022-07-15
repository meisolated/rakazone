import Layout from "../components/Layout/index.js"
import "../styles/globals.css"
import { AnimatePresence, domAnimation, LazyMotion, motion } from "framer-motion"
import { Toast } from "../components/Notification"
import App from "next/app"

function MyApp({ Component, pageProps, router, }) {
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





  return (
    <>
      <Layout>
        <Toast fade={true} />
        <motion.div key={router.route} initial="initial" animate="animate" exit="exit" transition={fade.transition} variants={fade.variants}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  )
}

export default MyApp
