import { setCookies } from "cookies-next"
import passport from "passport"
import "../../../lib/passport.js"

export default async function handler(req, res, next) {
    console.log("something over here")
    passport.authenticate("google", (err, user, info) => {
        if (err || !user) res.redirect("http://localhost:3000/?a=auth_failed")
        console.log(user)
        // setCookies("token", info.token, { req, res })
        res.redirect("http://localhost:3000/")
    })(req, res, next)

}


