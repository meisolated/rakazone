import { useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()
function Redirect(props) {
    const router = useRouter()
    let redirect = props.redirectto
    let text = props.redirectto.split("//")[1].split(".")[1].toUpperCase()
    useEffect(() => {
        setTimeout(() => {
            // (redirect !== "nowhere") ? window.open(redirect) : window.location.href = "/404"
            router.push(
                {
                    pathname: redirect,
                    query: { returnUrl: redirect }
                })
        }, 3000)
    })

    return (
        <div className="container-default" style={{ fontSize: "50px", padding: "100px", textAlign: "center" }}>
            {text}
        </div>
    )
}

export default Redirect

export async function getServerSideProps(context) {
    console.log(`${publicRuntimeConfig.apiUrl}redirects`)
    let { data } = await axios.get(`${publicRuntimeConfig.apiUrl}redirects`)
    if (data.message === "success") {
        let redirects = data.data.redirects
        if (redirects[context.query.redirect]) {
            return {
                props: { redirectto: redirects[context.query.redirect] },
            }
        } else {
            return { props: { redirectto: "nowhere" } }
        }
    } else return { props: { redirectto: "nowhere" } }
}
