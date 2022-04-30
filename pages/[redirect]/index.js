import { useRouter } from "next/router"
import { useEffect } from "react"
import axios from "axios"

function Redirect(props) {
    let redirect = props.redirectto
    useEffect(() => {
        if (redirect !== "nowhere") window.location.href = redirect
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
                props: { redirectto },
            }
        } else {
            return { props: { redirectto: "nowhere" } }
        }
    } else return { props: { redirectto: "nowhere" } }
}
