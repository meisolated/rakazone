import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()



export default function handler(req, res) {

    if (req.headers.authorization) {
        fetch(`${publicRuntimeConfig.apiUrl}popups`).then(res => res.json()).then(data => {
            res.status(200).send(data)
        })
    } else {
        res.status(401).send("Unauthorized")
    }

}