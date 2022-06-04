import Loading from "../../components/Loading/index.js"
import Popups from "../../components/PopUps"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect, createContext, useContext } from "react"
import css from "./Test.module.css"
import Head from "next/head"


export default function Test(props) {
    useEffect(() => {
        let first_pop = localStorage.getItem("pop_status")
        if (first_pop) {
            setFirst(false)
        }
    }, [])
    const [show, setShow] = useState(false)
    const [first, setFirst] = useState(true)
    const onClose = () => {
        setShow(!show)
    }
    return (
        <>
            <Head>
                <title>Test - RakaZone</title>
            </Head>
            <div className="container-default">
                <a onClick={() => (first ? setShow(true) : [])}>{first ? "Show Popup" : "Not first"}</a>
                {show ? <Popups onClose={onClose} /> : <></>}
            </div>
        </>
    )
}
