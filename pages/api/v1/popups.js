import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()
export default function handler(req, res) {
    fetch(`${publicRuntimeConfig.apiUrl}popups`).then(res => res.json()).then(data => {
        res.status(200).send(data)
    })
}