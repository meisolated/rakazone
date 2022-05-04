import { useRouter } from "next/router"
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
    let { data } = await axios.get("http://10.69.69.201:3000/api/v1/redirectdata")
    if (data.message === "success") {
        let redirects = data.data
        let redirectto = redirects.find((x) => x.from_where === context.query.redirect)
        if (redirectto) {
            return {
                props: { "redirectto": redirectto.to_where },
            }
        } else {
            return { props: { redirectto: "nowhere" } }
        }
    } else return { props: { redirectto: "nowhere" } }
}
