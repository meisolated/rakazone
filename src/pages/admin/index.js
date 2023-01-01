import axios from "axios"
import getConfig from "next/config.js"
import { useEffect, useRef, useState } from "react"
import SideBar from "../../components/Admin/SideBar/index.js"
import css from "./index.module.css"
const { serverRuntimeConfig } = getConfig()

export default function Admin(props) {
  return <SideBar />
}

export async function getServerSideProps(context) {
  let contentRes = await axios
    .get(`${serverRuntimeConfig.localApiUrl}content`, {
      withCredentials: true,
    })
    .then((res) => res.data)
  if (contentRes.message === "success") {
    const videos = contentRes.data
    return {
      props: {
        content: { videos },
      },
    }
  } else return { props: {} }
}