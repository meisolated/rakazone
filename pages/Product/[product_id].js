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
export default function Product(props) {
    const sample_product = {
        id: 1,
        name: "Product 1",
        actual_price: "$100",
        price: "$10",
        images: [merch1, merch2, merch3, merch4],
        description: "This is a sample product description",
        color: ["red", "blue", "green", "yellow"],
        size: ["S", "M", "L", "XL"],
        size_not_in_stock: ["S", "M"],
        quantity: 1,
        in_cart: false,
        total: 0,
    }
    const [quantity, setQuantity] = useState(1)
    const [activeThumb, setActiveThumb] = useState(sample_product.images[0])
    const [size, setSize] = useState("")
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
                            <Image src={activeThumb} alt={sample_product.name} />
                        </div>
                        <div className={css.thumbnail_images_grid}>
                            {sample_product.images.map((image, index) => {
                                return (
                                    <div key={"image-" + index} className={`${css.thumbnail_image_wrapper} ${activeThumb == image ? css.activeThumb : []}`} onClick={() => setActiveThumb(image)}>
                                        <Image src={image} alt={sample_product.name} />
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                    <div className={css.product_details}>
                        <div className={css.product_name}>{sample_product.name}</div>
                        <div className={css.product_price}>
                            <div className={css.actual_price}>{sample_product.actual_price}</div>
                            <div className={css.price}>{sample_product.price}</div>
                        </div>

                        <div className={css.product_description}>{sample_product.description}</div>
                        <div className={css.product_quantity}>
                            <div className="divider-small" />
                            <div className={css.select_size}>Select Size</div>
                            <div className={css.size_selector}>
                                <div className={css.size_selector_item}>
                                    {sample_product.size.map((_size, index) => {
                                        if (sample_product.size_not_in_stock.includes(_size)) {
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
            </div>
        </>
    )
}
