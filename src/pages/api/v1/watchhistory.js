import axios from "axios"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export default function watchhistory(req, res) {
    axios
        .get(`${publicRuntimeConfig.apiUrl}watchhistory`, { headers: { cookie: req.headers.cookie } })
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((error) => {
            res.status(500).send(error)
        })
}

export const config = {
    api: {
        externalResolver: true,
    },
}