import OnLoadPopUps from "../../components/Modal/OnLoadPopUps"
import Head from "next/head"
import { useState } from "react"

export default function Test(props) {
    const [show, setShow] = useState(false)
    const [first, setFirst] = useState(true)
    const onClose = () => setShow(!show)
    return (
        <>
            <Head>
                <title>Test 1 - RakaZone</title>
            </Head>
            <div className="container-default">
                <a onClick={() => (first ? setShow(true) : [])}>{first ? "Show Popup" : "Not first"}</a>
                {show ? <OnLoadPopUps onClose={onClose} /> : <></>}
            </div>
        </>
    )
}
