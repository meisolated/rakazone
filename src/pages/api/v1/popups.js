import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()

export default function handler(req, res) {
    // if (!req.headers.host || !req.headers.referer || !req.headers.authorization) {
    //     return res.status(401).send({ "statusCode": 401, "error": "Unauthorized", "message": "Authorization Header is not present" })
    // } else {
    fetch(`${publicRuntimeConfig.apiUrl}popups`)
        .then((res) => res.json())
        .then((data) => {
            res.status(200).send(data)
        })
    // }
}

export const config = {
    api: {
        externalResolver: true,
    },
}
