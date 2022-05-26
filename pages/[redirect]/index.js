import { useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/router"

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
    let { data } = await axios.get(`${process.env.API_URL}redirects`)
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
