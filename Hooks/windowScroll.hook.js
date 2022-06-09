/* eslint-disable react-hooks/rules-of-hooks */
import { useState, useEffect } from "react"

export default function windowScroll() {
    const [scrollY, setScrollY] = useState({ Y: 0, increasing: false })
    const [lastScrollY, setLastScrollY] = useState(0)


    const controlNavbar = () => {
        if (typeof window !== 'undefined') {
            if (window.scrollY > lastScrollY) { // if scroll down hide the navbar
                scrollY.increasing = true
                setLastScrollY(window.scrollY)
                setScrollY({ Y: window.scrollY, increasing: true })

            } else { // if scroll up show the navbar
                setLastScrollY(window.scrollY)
                setScrollY({ Y: window.scrollY, increasing: false })
            }
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            window.addEventListener('scroll', controlNavbar)

            // cleanup function
            return () => {
                window.removeEventListener('scroll', controlNavbar)
            }
        }
    }, [lastScrollY])

    return scrollY
}

