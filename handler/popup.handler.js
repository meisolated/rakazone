import { useState } from "react"
import { fetcher } from "../util/functions.js"
import Loading from "../components/Loading"
export default function () {
    let [loading, setLoading] = useState(true)
    const { data, error } = useSWR('api/v1/popups', fetcher)
    if (error) {
        console.log(error)
    }
    if (data) {
        setLoading(false)
    }
    return (
        <>
            {loading ? <Loading /> : <></>}

        </>
    )

}