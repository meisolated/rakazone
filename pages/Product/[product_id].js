import merch1 from "../../assets/img/png/merch1.png"
import merch2 from "../../assets/img/png/merch2.png"
import merch3 from "../../assets/img/png/merch3.png"
import merch4 from "../../assets/img/png/merch3.png"
import { Add, Minus, Routing } from "../../assets/svg"
import { useRouter } from "next/router"
import { HeaderNotification } from "../../components/Notification"
import css from "./Product.module.css"
import Image from "next/image"
import { GreyBig, GreySmall } from "../../components/Buttons"
import { useState, useEffect } from "react"
import { toastService } from "../../handler/toast.handler.js"
import constants from "../../constants"
import SvgSecurityCard from "../../assets/svg/SecurityCard.js"
import { FastShipping, SecurePayment, ServiceGuarantee } from "../../assets/svg"
import fastshipping_img from "../../assets/img/png/fast_shipping.png"
import securepayment_img from "../../assets/img/png/secure_payment.png"
import serviceguarantee_img from "../../assets/img/png/service_guarantee.png"
const sample_product = {
    id: 1,
    name: "Product 1",
    actual_price: "$100",
    price: "$10",
    images: [merch1, merch2, merch3, merch4],
    description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    color: ["red", "blue", "green", "yellow"],
    size: ["S", "M", "L", "XL"],
    size_not_in_stock: ["S", "M"],
    quantity: 1,
    in_cart: false,
    total: 0,
}
const similar_products = [
    {
        id: 1,
        name: "Product 1",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    },
    {
        id: 2,
        name: "Product 2",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    },
    {
        id: 2,
        name: "Product 3",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    },
    {
        id: 3,
        name: "Product 4",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    },
    {
        id: 4,
        name: "Product",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    },
]


export default function Product(props) {
    const [product, setProduct] = useState(props.product || sample_product)
    const [activeThumb, setActiveThumb] = useState(product.images[0])
    const [quantity, setQuantity] = useState(1)
    const [size, setSize] = useState("")
    const [activeTab, setActiveTab] = useState("PRODUCT")
    const { query } = useRouter()
    const { product_id } = query

    return (
        <>
            <HeaderNotification
                notificationText={"Checkout is currently disabled as we are not accepting any payments from any user and we do not manufacture any of these products nor we have these products in stock."}
            />
            <div className="container-default">
                <div className={css.product_wrapper}>
                    <div className={css.product_images}>
                        <div className={css.main_image_wrapper}>
                            <Image src={activeThumb} alt={product.name} />
                        </div>
                        <div className={css.thumbnail_images_grid}>
                            {product.images.map((image, index) => {
                                return (
                                    <div key={"image-" + index} className={`${css.thumbnail_image_wrapper} ${activeThumb == image ? css.activeThumb : []}`} onClick={() => setActiveThumb(image)}>
                                        <Image src={image} alt={product.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={css.product_details}>
                        <div className={css.product_name}>{product.name}</div>
                        <div className={css.product_price}>
                            <div className={css.actual_price}>{product.actual_price}</div>
                            <div className={css.price}>{product.price}</div>
                        </div>

                        <div className={css.product_description}>{product.description}</div>
                        <div className={css.product_quantity}>
                            <div className="divider-small" />
                            <div className={css.select_size}>Select Size</div>
                            <div className={css.size_selector}>
                                <div className={css.size_selector_item}>
                                    {product.size.map((_size, index) => {
                                        if (product.size_not_in_stock.includes(_size)) {
                                            return (
                                                <div
                                                    className={`${_size == size ? css.size_selector_item_text_selected : css.size_selector_item_text} ${css.size_selector_item_text}`}
                                                    key={"size-" + index}
                                                    onClick={() => setSize(_size)}
                                                >
                                                    {_size}
                                                </div>
                                            )
                                        } else {
                                            return (
                                                <div className={`${css.size_selector_item_text} ${css.size_selector_product_not_instock}`} key={"size-" + index} onClick={() => toastService.error(constants.size_not_in_stock)}>
                                                    {_size}
                                                </div>
                                            )
                                        }
                                    })}
                                </div>
                            </div>
                            <div className={css.quantity_label}>Quantity</div>
                            <div className={css.quantity_input_wrapper}>
                                <div className={css.quantity_input_button} onClick={() => setQuantity(quantity - 1)}>
                                    <Minus />
                                </div>
                                <div className={css.quantity_input}>{quantity}</div>
                                <div className={css.quantity_input_button} onClick={() => setQuantity(quantity + 1)}>
                                    <Add />
                                </div>
                            </div>
                        </div>
                        <div className={css.delivery_to_pincode}>
                            <div className={css.delivery_to_pincode_lables}>
                                <div className={css.delivery_to_pincode_icon}>
                                    <Routing />
                                </div>
                                <div className={css.delivery_to_pincode_label}>Delivery to Pincode</div>
                            </div>
                            <div className={css.delivery_to_pincode_input}>
                                <input type="text" placeholder="Enter Pincode" className={css.input} />
                                <a className={css.delivery_to_pincode_btn} onClick={() => toastService.success(constants.checking_pincode)}>
                                    Check
                                </a>
                            </div>
                        </div>
                        <div className={css.product_add_to_cart} onClick={() => toastService.success(constants.added_to_cart)}>
                            <GreyBig text="Add to cart" />
                        </div>
                    </div>
                </div>
                <div className="divider-small" />
                <div className={css.about_product_tabs}>
                    <div className={`${css.product_tab} ${activeTab == "PRODUCT" ? css.active_tab : []}`} onClick={() => setActiveTab("PRODUCT")}>
                        PRODUCT
                    </div>
                    <div className={`${css.product_tab} ${activeTab == "SHIPPING" ? css.active_tab : []}`} onClick={() => setActiveTab("SHIPPING")}>
                        SHIPPING
                    </div>
                    <div className={`${css.product_tab} ${activeTab == "MORE" ? css.active_tab : []}`} onClick={() => setActiveTab("MORE")}>
                        MORE
                    </div>
                </div>

                {/* TO BE DONE */}
                <div className={`${css.about_product_tab_content} container-medium`}>
                    {activeTab == "PRODUCT" && (
                        <>
                            <div className={css.product_tab_content}>
                                <div className={css.product_tab_content_title}>Product Details</div>
                                <div className={css.product_tab_content_description} dangerouslySetInnerHTML={{ __html: product.description }} />
                            </div>
                        </>
                    )}
                </div>
                <div className="divider-small" />
                <div className={css.service_wrapper}>
                    <div className={css.service_title}>
                        <h1 className={css.service_title_text}>All the orders include:</h1>
                        <div className={css.service_sub_title}>
                            Our all orders include the best service,from ordering your favorite product <br /> to getting it delivered to your place.
                        </div>
                    </div>
                    <div className={css.service_list}>
                        <div className={css.service_list_item}>
                            <div className={css.service_list_item_icon_wrapper}>
                                <div className={css.service_list_item_icon}>
                                    <Image src={fastshipping_img} alt="Fast Shipping" />
                                </div>
                            </div>
                            <div className={css.service_list_item_content}>
                                <div className={css.service_list_item_title}>Delivery to Pincode</div>
                                <div className={css.service_list_item_description}>We deliver to your Pincode.</div>
                            </div>
                        </div>
                        <div className={css.service_list_item}>
                            <div className={css.service_list_item_icon_wrapper}>
                                <div className={css.service_list_item_icon}>
                                    <Image src={securepayment_img} alt="Secure Payment" />
                                </div>
                            </div>
                            <div className={css.service_list_item_content}>
                                <div className={css.service_list_item_title}>Delivery to Pincode</div>
                                <div className={css.service_list_item_description}>We deliver to your Pincode.</div>
                            </div>
                        </div>
                        <div className={css.service_list_item}>
                            <div className={css.service_list_item_icon_wrapper}>
                                <div className={css.service_list_item_icon}>
                                    <Image src={serviceguarantee_img} alt="Service Guarantee" />
                                </div>
                            </div>
                            <div className={css.service_list_item_content}>
                                <div className={css.service_list_item_title}>Delivery to Pincode</div>
                                <div className={css.service_list_item_description}>We deliver to your Pincode.</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="divider-small" />
                <div className={css.similar_products_wrapper}>
                    <div className={css.similar_products_title}>
                        <h1 className={css.similar_products_title_text}>Similar Products</h1>
                    </div>
                    <div className={css.similar_products_list}>
                        {similar_products.map((product, index) => {
                            return (<div className={css.similar_products_item} key={index}>
                                <div className={css.similar_products_item_image}>
                                    <Image src={product.images[0]} alt={product.name} />
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
                <div className="divider-small" />
            </div>
        </>
    )
}
