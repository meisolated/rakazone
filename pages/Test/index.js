import Loading from "../../components/Loading/index.js"
import Disclamer from "../../components/Disclamer"
import Link from "next/link"
import { Primary } from "../../components/Buttons/index.js"
import { useState, useEffect } from "react"
import css from "./Test.module.css"
export default function Test(params) {
    const [loading, setLoading] = useState(false)


    return (
        <>
            <a onClick={() => setLoading(true)}> nothing</a>
            {loading ? <Disclamer /> : <></>}
            <div className="container-default"></div>
        </>
    )
}
