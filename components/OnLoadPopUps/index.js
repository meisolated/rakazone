import { fetcher } from "../../util/functions.js"
import Loading from "../Loading"
import { useState, useEffect } from "react"
import css from "./OnLoadPopUps.module.css"
import { Primary } from "../Buttons"
import useSWR from "swr"


export default function OnLoadPopUps({ onClose }) {


    const [show, setShow] = useState(true)
    const [visible, setVisible] = useState(false)
    const [_data, setData] = useState({})
    const { data, error } = useSWR("api/v1/popups", fetcher)

    useEffect(() => {
        if (data) {
            setData(data.data.popups.filter(pop => pop.status == "true" && pop.type == "onload")[0])
        }
    }, [data])


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
    console.log(_data)
    const title = data ? _data.title : "Loading..."
    const message = data ? _data.message : "Loading..."
    const button = data ? _data.close_btn_text : "Loading..."

    if (error) return <></>
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
