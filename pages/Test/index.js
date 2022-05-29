import Loading from "../../components/Loading/index.js"
import Disclamer from "../../components/Disclamer"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect } from "react"
import css from "./Test.module.css"
import Head from "next/head"

export default function Test(props) {
    const [show, setShow] = useState(false)
    return (
        <>
            <Head>
                <title>Test - RakaZone</title>
            </Head>
            <div className="container-default">
                <a onClick={() => setShow(true)}>nothing</a>
                {show ? <Disclamer setOpen={setShow} /> : <></>}
            </div>
        </>
    )
}
