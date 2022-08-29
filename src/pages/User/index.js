import getConfig from "next/config.js"
import Head from "next/head.js"
import Image from "next/image.js"
import router from "next/router.js"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Primary } from "../../components/Buttons/Primary/index.js"
import { Input } from "../../components/Input/index.js"
import { HeaderNotification } from "../../components/Notification"
import { toastService } from "../../handler/toast.handler.js"
import css from "./profile.module.css"
const { publicRuntimeConfig } = getConfig()

export default function Profile() {
    const user = useSelector(state => state.user)
    const [userData, setUserData] = useState({
        profile_pic: "https://raka.zone/internal_api/assets/img/instadp.jpeg",
        name: "RakaZone",
        email: "raka@raka.zone",
        created_at: "2020-01-01",
    })
    function underWork() {
        toastService.error("Currently working on this section of this website")
    }

    useEffect(() => {
        if (!user.loading && !user.error) {
            setUserData({
                ...userData,
                profile_pic: user.user.profilePic,
                name: user.user.name,
                email: user.user.email,
            })
        }
        else if (user.error) {
            // console.log(user.error)
            const loginUrl = publicRuntimeConfig.apiUrl + "auth/google"
            router.push({
                pathname: loginUrl,
                query: { returnUrl: loginUrl },
            })
        }
    }, [user])
    return (
        <>
            <Head>
                <title>User Profile | RakaZone</title>
                <meta name="description" content="Profile" />
                <meta name="keywords" content="profile, raka, rakazone, rakazonegaming" />
                <meta name="robots" content="noindex,nofollow" />
                <meta name="googlebot" content="noindex,nofollow" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
            </Head>
            <HeaderNotification
                notificationText={"Currently working on this section of this website."}
            />
            <div className={"container-default"}>
                <div className={css.profile_wrapper_grid}>
                    <div className={`${css.left} ${css.common_of_left_right_middle}`}>
                        <div className={css.profile_pic_wrapper}>
                            <Image src={userData.profile_pic} alt="profile_pic" className={css.profile_pic} width={200} height={200} />
                        </div>
                        <div className={css.profile_info_wrapper}>
                            <div className={css.profile_info_name}>{userData.name}</div>
                            <div className={css.profile_info_email}>{userData.email}</div>
                            <div className={css.profile_info_created_at}>Joined {userData.created_at}</div>
                        </div>
                        <div>
                            <div className={`${css.achievements_wrapper}`}>Spent 48hrs</div>
                        </div>
                    </div>
                    <div className={`${css.middle} ${css.common_of_left_right_middle}`}>
                        <Input label="Name" />
                        <Input label="Email" />
                        <Input label="DOB" />
                        <div className={css.gender_select}>
                            <div className={css.gender_select_btn}>
                                <a>Male</a>
                            </div>
                            <div className={css.gender_select_btn}>
                                <a>Female</a>
                            </div>
                        </div>
                        <Primary text={"SAVE"} />
                    </div>
                    <div className={`${css.right} ${css.common_of_left_right_middle}`}>
                        <div className={css.grey_button} onClick={() => underWork()}>
                            <a>Watch History</a>
                        </div>
                        <div className={css.grey_button} onClick={() => underWork()}>
                            <a>Orders</a>
                        </div>
                        <div className={css.grey_button} onClick={() => underWork()}>
                            <a>Uploads</a>
                        </div>
                        <div className={css.grey_button} onClick={() => underWork()}>
                            <a>Achievement</a>
                        </div>
                    </div>
                </div>
                <div className="divider" />
            </div>
        </>
    )
}
