import Layout from "../components/Layout/index.js"
import "../styles/globals.css"
import { motion } from "framer-motion"
import { Toast } from "../components/Notification"
function MyApp({ Component, pageProps, router }) {
  const slideRight = {
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
        <Toast fade={true} />
        <motion.div key={router.route} initial="initial" animate="animate" transition={slideRight.transition} variants={slideRight.variants}>
          <Component {...pageProps} />
        </motion.div>
      </Layout>
    </>
  )
}

export default MyApp
