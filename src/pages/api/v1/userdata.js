import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function userdata(req, res) {
    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {
    //     return res.status(401).send({ "statusCode": 401, "error": "Unauthorized", "message": "Authorization Header is not present" })
    // } else {
    axios
        .get(`${publicRuntimeConfig.apiUrl}userdata`, {
            headers: req.headers.cookie && { cookie: req.headers.cookie },
        })
        .then((response) => {
            res.status(200).send(response.data)
        })
        .catch((error) => {
            res.status(500).send(error)
        })

    // }
}

export const config = {
    api: {
        externalResolver: true,
    },
}
