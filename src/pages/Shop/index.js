import Head from "next/head.js"
import Image from "next/image"
import Link from "next/link.js"
import merch1 from "../../assets/img/png/merch1.png"
import merch2 from "../../assets/img/png/merch2.png"
import merch3 from "../../assets/img/png/merch3.png"
import { HeaderNotification } from "../../components/Notification"
import css from "./shop.module.css"
function Shop() {
    let sample_product_list = [
        {
            id: 1,
            name: "Product 1",
            price: "₹100",
            image: merch1,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 2,
            name: "Product 2",
            price: "₹200",
            image: merch2,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 3,
            name: "Product 3",
            price: "₹300",
            image: merch3,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 4,
            name: "Product 4",
            price: "₹400",
            image: merch3,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 5,
            name: "Product 5",
            price: "₹500",
            image: merch1,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 6,
            name: "Product 6",
            price: "₹600",
            image: merch2,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
    ]

    return (
        <>
            <Head>
                <title>Merchandise | RakaZone</title>
                <meta name="description" content="RakaZone Cool Merchandise" />
                <meta name="keywords" content="merchandise, merch, raka, rakazone, rakazonegaming, cool, rakazone cool" />
                <meta name="robots" content="all" />
                <meta name="google" content="notranslate" />
                <meta name="google" content="nositelinkssearchbox" key="sitelinks" />
                <meta property="og:title" content={"Merchandise | RakaZone"} />
                <meta property="og:description" content="RakaZone Cool Merchandise" />
                <meta property="og:image" content="https://raka.zone/assets/img/RakaZoneLogo.png" />
            </Head>
            <HeaderNotification
                notificationText={"Checkout is currently disabled as we are not accepting any payments from any user and we do not manufacture any of these products nor we have these products in stock."}
            />
            <div className="pd-bottom-high" />
            <div className="pd-bottom-high" />
            <div className="container-default">
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <div className={css.shop_main}>
                        <div className={css.shop_title}>My merch shop</div>
                        <div className={css.shop_subtitle}>Lorem ipsum dolor sit amet consectetur adipiscing elit sit enim sed non nisi ut ultrices molestie null.</div>
                    </div>
                </div>
                <div className={css.shop_grid}>
                    {sample_product_list.map((product, index) => {
                        return (
                            <Link href={`/Product/sdasd`} key={index}>
                                <div key={product.id}>
                                    <div className={css.shop_item}>
                                        <div className={css.shop_item_image}>
                                            <Image src={product.image} alt="" width={300} height={300} />
                                            <div className={css.shop_item_product_price}>{product.price}</div>
                                        </div>
                                        <div className={css.shop_item_product_content}>
                                            <div className={css.shop_item_details}>
                                                <div className={css.shop_item_product_title}>{product.name}</div>
                                                <div className={css.shop_item_price}>{product.price}</div>
                                            </div>
                                            <div className={css.shop_item_product_description}>{product.description.length > 30 ? product.description.substring(0, 80) + "..." : product.description}</div>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        )
                    })}
                    <div className="pd-bottom-high" />
                </div>
            </div>
        </>
    )
}

export default Shop
