import css from "./PopUps.module.css"
import { Primary } from "../Buttons"
import { useState, useEffect } from "react"
import getConfig from "next/config"
const { publicRuntimeConfig } = getConfig()
import useSWR from "swr"
import { fetcher } from "../../util/functions.js"
import Loading from "../../components/Loading"


export default function PopUps({ onClose }) {


    const [show, setShow] = useState(true)
    const [visible, setVisible] = useState(false)
    const { data, error } = useSWR("api/v1/popups", fetcher)


    useEffect(() => {
        let pop_status = localStorage.getItem("pop_status")
        if (!pop_status) {
            setVisible(true)
            localStorage.setItem("pop_status", 1)
        }
    }, [])

    const closeHandler = () => {
        setShow(false)
        setTimeout(() => {
            onClose()
        }, 500)
    }

    const title = data ? data.data.popups.title : "Loading..."
    const message = data ? data.data.popups.message : "Loading..."
    const button = data ? data.data.popups.close_btn_text : "Loading..."

    if (error) return <></>
    if (data ? !data.data.popups.status : "active") return <></>
    if (!visible) return <></>
    return (
        <>
            <div className={`${css.notification} ${show ? css.open_animation : css.close_animation}`}>
                <div className={css.outside_notification} onClick={() => closeHandler()}></div>
                <div className={`${css.notification_container} ${!data ? css.center_loading : []}`}>
                    {!data ? (
                        <Loading w="25px" h="25px" />
                    ) : (
                        <>
                            <div className={css.notification_content}>
                                <div className={css.notification_title}>{title}</div>
                                <div className={css.message_wrapper}>
                                    <div className={css.notification_message} dangerouslySetInnerHTML={{ __html: message }}></div>
                                </div>
                                <div className={css.notification_buttons} onClick={() => closeHandler()}>
                                    <Primary text={button} />
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </>
    )
}
