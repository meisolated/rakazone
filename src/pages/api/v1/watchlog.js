import axios from 'axios'
import getConfig from 'next/config'
const { publicRuntimeConfig } = getConfig()

export default function watchlog(req, res) {
    res.status(200).send({ statusCode: 200, message: 'User Data' })
}

export const config = {
    api: {
        externalResolver: true,
    },
}
