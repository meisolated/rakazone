import { useRouter } from "next/router"
import { useEffect } from 'react'


function Redirect(props) {
    console.log(props.redirectto)
    let redirect = props.redirectto
    useEffect(() => {
        if (redirect !== "nowhere") window.location.href = redirect
    }, [redirect])

    return (<>{props.redirectto}</>)
}

export default Redirect


export async function getServerSideProps(context) {

    let redirects = {
        youtube: 'https://www.youtube.com/channel/UCRj_BU95SebaRi2FziXEoTg',
        loco: 'https://loco.gg/streamers/RakaZone_Gaming',
        twitch: 'https://www.twitch.tv/rakazone',
        discord: 'https://discord.gg/RKQFdMAd63',
        yt: 'https://www.youtube.com/channel/UCRj_BU95SebaRi2FziXEoTg',
        twitter: 'https://twitter.com/rakazonegaming',
        instagram: 'https://www.instagram.com/rakazonegaming/',
        insta: 'https://www.instagram.com/rakazonegaming/',
        facebook: 'https://www.facebook.com/RakaZoneGaming',
        fb: 'https://www.facebook.com/RakaZoneGaming'
    }

    let redirect = context.query.redirect
    let redirectto = redirects[redirect]
    console.log(redirectto)

    if (redirectto) {
        return {
            // redirect: {
            //     permanent: false,
            //     destination: redirectto,
            // },
            props: { redirectto },
        }
    }
    else {
        return { props: { redirectto: "nowhere" }, }
    }

}