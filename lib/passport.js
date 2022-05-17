import passport from "passport"
import { Strategy as GoogleStrategy } from "passport-google-oauth2"
import "dotenv/config"

passport.use(
    "google",
    new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_AUTH_CALLBACK_URL,
    }, async (accessToken, refreshToken, profile, done) => {
        try {
            const User = { email: profile.emails, name: profile.displayName, accessToken }
            console.log(User)
            done(null, User)

        } catch (err) {
            console.log(err)
            done(err, false, { message: "Something went wrong" })
        }
    }))

