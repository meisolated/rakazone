import { useState, useEffect } from "react"
import { useRouter } from "next/router"
import css from './LoadingBar.module.css'
function LoadingBar() {
    //     const router = useRouter()

    //     const [loading, setLoading] = useState(false)

    //     useEffect(() => {
    //         const handleStart = (url) => (url !== router.asPath) && setLoading(true)
    //         const handleComplete = (url) => (url === router.asPath) && setLoading(false)

    //         router.events.on('routeChangeStart', handleStart)
    //         router.events.on('routeChangeComplete', handleComplete)
    //         router.events.on('routeChangeError', handleComplete)

    //         return () => {
    //             console.log(loading)
    //             router.events.off('routeChangeStart', handleStart)
    //             router.events.off('routeChangeComplete', handleComplete)
    //             router.events.off('routeChangeError', handleComplete)
    //         }
    //     })

    //     return loading && (<div>Loading....{/*I have an animation here*/}</div>)
    return <div className={css.loading} />
}

export default LoadingBar
