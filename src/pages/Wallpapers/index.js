import Head from 'next/head.js'
import Image from 'next/image'
import Link from 'next/link.js'
import css from './wallpapers.module.css'

export default function Wallpapers() {
    const baseUrl = 'https://raka.zone/internal_api/assets/img/'
    // const downloadables = ["wallpaper_dark_desktop.png", "wallpaper_light_desktop.png"] // "wallpaper_dark_mobile.png", "wallpaper_light_mobile.png",
    const downloadables = [
        'wallpaper_dark_desktop.png',
        'wallpaper_light_desktop.png',
        'wallpaper_dark_mobile.png',
        'wallpaper_light_mobile.png',
    ] //
    return (
        <>
            <Head>
                <title>Wallpapers | RakaZone</title>
                <meta
                    name="description"
                    content="Topo wallpapers with RakaZone Logo on it"
                />
                <meta
                    name="keywords"
                    content="wallpapers, wallpaper, raka, rakazone, rakazonegaming"
                />
                <meta name="robots" content="all" />
                <meta name="google" content="notranslate" />
                <meta
                    name="google"
                    content="nositelinkssearchbox"
                    key="sitelinks"
                />
                <meta property="og:title" content={'Wallpapers | Raka'} />
                <meta
                    property="og:description"
                    content="Topo Wallpaper with RakaZone Logo on it"
                />
                <meta
                    property="og:image"
                    content="https://raka.zone/internal_api/assets/img/wallpaper_dark_desktop.png"
                />
            </Head>
            <div className="container-default">
                <div className={css.wallpaper_grid}>
                    {downloadables.map((downloadable, index) => {
                        let mobile = downloadable.includes('mobile')
                        return (
                            <div
                                key={index}
                                className={
                                    mobile
                                        ? css.wallpaper_wrapper_mobile
                                        : css.wallpaper_wrapper_desktop
                                }
                            >
                                {' '}
                                <Image
                                    src={baseUrl + downloadable}
                                    className={css.wallpaper}
                                    alt="a"
                                    width={10000}
                                    height={10000}
                                    quality={100}
                                />
                                <Link prefetch={false} href={baseUrl + downloadable} download>
                                    <div className={css.wallpaper_download}>
                                        Download
                                    </div>
                                </Link>
                            </div>
                        )
                    })}
                </div>
                <div className="center">
                    <a>Wallpapers credit:</a>{' '}
                    <a
                        className={css.link}
                        href="https://www.instagram.com/klm_gfx/"
                    >
                        klm_gfx{' '}
                    </a>
                </div>
            </div>
        </>
    )
}
