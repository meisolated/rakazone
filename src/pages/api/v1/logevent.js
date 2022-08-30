import axios from "axios"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export default function logevent(req, res) {
    const data = req.body
    res.status(404).send({})
    // !REMOVED
    // axios
    //     .post(`${publicRuntimeConfig.apiUrl}watchlog`, data, { headers: req.headers.cookie && { cookie: req.headers.cookie } })
    //     .then((response) => {

    //         res.status(200).send(response.data)
    //     })
    //     .catch((error) => {
    //         console.log(error)
    //         res.status(500).send(error)
    //     })
}

export const config = {
    api: {
        externalResolver: true,
    },
}