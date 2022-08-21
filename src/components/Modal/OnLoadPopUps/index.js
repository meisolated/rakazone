import axios from "axios"
import getConfig from "next/config"
import { useEffect, useRef, useState } from "react"
import useSWR from "swr"
import { fetcher } from "../../../util/functions.js"
import { Primary } from "../../Buttons"
import Loading from "../../Loading"
import css from "./OnLoadPopUps.module.css"
const { publicRuntimeConfig } = getConfig()

export default function OnLoadPopUps({ onClose }, props) {
    const [show, setShow] = useState(true)
    const [visible, setVisible] = useState(true)
    const [_data, setData] = useState({})
    const modal = useRef(null)
    const { data, error } = useSWR(publicRuntimeConfig.baseUrl + "api/v1/popups", fetcher)

    useEffect(() => {
        if (data) setData(data.data.popups.filter((pop) => pop.status == true)[0])
    }, [data])

    // useEffect(() => {
    //     let pop_status = localStorage.getItem("pop_status")
    //     if (!pop_status) {
    //         setVisible(true)
    //         localStorage.setItem("pop_status", 1)
    //     }
    // }, [])

    useEffect(() => {
        if (modal.current) {
            modal.current.addEventListener("click", (e) => {
                if (e.target === modal.current) {
                    closeHandler()
                }
            })
        }
        // setShow(props.show)
        return () => { }
    }, [props.show])

    const closeHandler = () => {
        setShow(false)
        setTimeout(() => {
            onClose()
        }, 500)
    }
    const title = data ? _data.title : "Loading..."
    const message = data ? _data.message : "Loading..."
    const button = data ? _data.close_btn_text : "Loading..."

    if (error) return <></>
    if (!visible) return <></>
    return (
        <>
            {/* <div className={`${css.notification} `} > */}
            <div className={`${css.outside_notification} ${show ? css.open_animation : css.close_animation}`} ref={modal}>
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
                                <div className={css.notification_button_wrapper}>
                                    <div className={css.notification_buttons} onClick={() => closeHandler()}>
                                        <Primary text={button} />
                                    </div>
                                </div>
                            </div>
                        </>
                    )}
                </div>
            </div>
            {/* </div> */}
        </>
    )
}
