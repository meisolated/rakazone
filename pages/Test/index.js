import css from "./Test.module.css"
import { useState, useEffect } from "react"
import Image from "next/image"
import LogoWithOutText from "../../assets/img/logowithouttext.png"

// import styled from 'styled-components'
// import { TransitionGroup, CSSTransition } from "react-transition-group"
// const Wipe = styled.div`
// position: fixed;
// top: 0;
// left: 0;
// width: 100%;
// height: 100%;
// background: #0d0c0f;
// z-index: 101;
// transform: translateY(100%);
// `


export default function Text(params) {

    let [active, setActive] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setActive(true)
        }, 3000)
    }, [])

    return (
        <>
            <div className={`${css.loading} ${active ? css.active : []}`} >
                <div className={css.loading_title}>
                    <Image src={LogoWithOutText} width={450} height={500} alt="" />
                </div>
                <div className={css.loading_progress}></div>
            </div>
        </>
    )
}
