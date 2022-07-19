import css from "./wallpapers.module.css"
import Image from "next/image"
export default function () {
    const baseUrl = "https://raka.zone/assets/img/"
    // const downloadables = ["wallpaper_dark_desktop.png", "wallpaper_light_desktop.png"] // "wallpaper_dark_mobile.png", "wallpaper_light_mobile.png", 
    const downloadables = ["wallpaper_dark_desktop.png", "wallpaper_light_desktop.png", "wallpaper_dark_mobile.png", "wallpaper_light_mobile.png"] //  
    return <div className="container-default">
        <div className={css.wallpaper_grid}>
            {downloadables.map(downloadable => {
                let mobile = downloadable.includes("mobile")
                return <div className={mobile ? css.wallpaper_wrapper_mobile : css.wallpaper_wrapper_desktop}> <Image src={baseUrl + downloadable} className={css.wallpaper} alt="a" width={10000} height={10000} quality={100} />
                    <div className={css.wallpaper_download}>
                        Download
                    </div>
                </div>
            })}
        </div>
    </div>
}