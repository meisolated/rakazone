import axios from "axios"
import getConfig from "next/config"
import { useRouter } from "next/router"
import { useEffect } from "react"
const { publicRuntimeConfig } = getConfig()
function Redirect(props) {
    const router = useRouter()
    let redirect = props.redirectto || "/404"
    let text = props.redirectto ? props.redirectto.split("//")[1].split(".")[1].toUpperCase() : "404"
    useEffect(() => {
        // setTimeout(() => {
        // (redirect !== "nowhere") ? window.open(redirect) : window.location.href = "/404"
        router.push({
            pathname: redirect,
            query: { returnUrl: redirect },
        })
        // }, 2000)
    })

    return (
        <div className="container-default" style={{ fontSize: "50px", padding: "100px", textAlign: "center" }}>
            {text}
        </div>
    )
}

export default Redirect

export async function getServerSideProps(context) {
    let { data } = await axios.get(`${publicRuntimeConfig.apiUrl}redirects`)
    if (data.message === "success") {
        let redirects = data.data.redirects
        if (redirects[context.query.redirect]) {
            return {
                props: { redirectto: redirects[context.query.redirect] },
            }
        } else {
            return { props: { redirectto: null } }
        }
    } else return { props: { redirectto: null } }
}
