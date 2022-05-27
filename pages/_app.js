import Layout from "../components/Layout/index.js"
import "../styles/globals.css"
import { useEffect, useState } from "react"
function MyApp({ Component, pageProps }) {
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

  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}

export default MyApp
