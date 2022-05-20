
import { useEffect } from "react"
import axios from "axios"

function Redirect(props) {
    let redirect = props.redirectto
    useEffect(() => {
        (redirect !== "nowhere") ? window.open(redirect, "_blank") : window.location.href = "/404"
    }, [redirect])

    return <>{props.redirectto}</>
}

export default Redirect

export async function getServerSideProps(context) {
    let { data } = await axios.get(`${process.env.SERVER_URL}redirects`)
    if (data.message === "success") {
        let redirects = data.data.redirects
        if (redirects) {
            return {
                props: { "redirectto": redirects[context.query.redirect] },
            }
        } else {
            return { props: { redirectto: "nowhere" } }
        }
    } else return { props: { redirectto: "nowhere" } }
}
