import passport from "passport"
import "../../../lib/passport"

async function googleAuth(req, res, next) {
    passport.authenticate("google", {
        scope: ["profile", "email"],
        session: false,
    })(req, res, next)
}

export default googleAuth