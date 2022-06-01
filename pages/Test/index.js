import Loading from "../../components/Loading/index.js"
import Popups from "../../components/PopUps"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect, createContext, useContext } from "react"
import css from "./Test.module.css"
import Head from "next/head"

const Context = createContext()

export default function Test(props) {
    const [show, setShow] = useState(false)
    const [first, setFirst] = useState(true)
    const onClose = () => {
        setShow(!show)
    }

    useEffect(() => {
        let first_pop = localStorage.getItem("pop_status")
        console.log(first_pop == 1)
        if (first_pop) {
            setFirst(false)
        }
    }, [])


    return (
        <>
            <Head>
                <title>Test - RakaZone</title>
            </Head>
            <div className="container-default">
                <a onClick={() => setShow(true)}>{first ? "Show Popup" : "Not first"}</a>
                {show ? <Popups onClose={onClose} /> : <></>}
            </div>
        </>
    )
}
