import css from "./shop.module.css"
import Image from "next/image"
import merch1 from "../../assets/img/png/merch1.png"
import merch2 from "../../assets/img/png/merch2.png"
import merch3 from "../../assets/img/png/merch3.png"
import { HeaderNotification } from "../../components/Notification"
function Shop() {
    let sample_product_list = [
        {
            id: 1,
            name: "Product 1",
            price: "$100",
            image: merch1,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 2,
            name: "Product 2",
            price: "$200",
            image: merch2,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 3,
            name: "Product 3",
            price: "$300",
            image: merch3,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 4,
            name: "Product 4",
            price: "$400",
            image: merch3,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 5,
            name: "Product 5",
            price: "$500",
            image: merch1,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
        {
            id: 6,
            name: "Product 6",
            price: "$600",
            image: merch2,
            description: "This is a sample product description",
            quantity: 1,
            in_cart: false,
            total: 0,
        },
    ]

    // let products_list = [
    //     {
    //         id: 1,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         id: 2,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         id: 3,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         id: 4,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         id: 5,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    //     {
    //         id: 6,
    //         name: "T-Shirt",
    //         price: "10.00",
    //         img: merch1,
    //         description:
    //             "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    //     },
    // ]

    return (
        <>
            <HeaderNotification notificationText={"Checkout is currently disabled as we are not accepting any payments from any user and we do not manufacture any of these products nor we have these products in stock."} />
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
                    {sample_product_list.map((product) => {
                        return (
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
                        )
                    })}
                    <div className="pd-bottom-high" />
                </div>
            </div>
        </>
    )
}

export default Shop
