import { createHmac } from "crypto"
import jwt from "jsonwebtoken"
export default async function handle(req, res) {
    try {
        jwt.sign({ data: "test" }, "secret", { expiresIn: "1h" }, (err, token) => {
            if (err) {
                return res.status(500).send(err)
            } else {
                return jwt.verify(token, "secret", (err, decoded) => {
                    res.status(200).send(JSON.stringify(decoded) + "\n" + token)
                })
            }
        })
    } catch (error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

export const config = {
    api: {
        externalResolver: true,
    },
}
