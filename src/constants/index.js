const constants = {
    // ecommerce
    order_placed: "Order Placed Successfully",
    order_cancelled: "Order Cancelled Successfully",
    order_failed: "Unable to place order at this time",
    order_cancel_in_progress: "Order Cancellation in progress",
    order_cancel_failed: "Unable to cancel order at this time",
    order_cancel_success: "Order Cancelled Successfully",
    size_not_in_stock: "Size not in stock",
    added_to_cart: "Added to cart",
    checking_pincode: "Checking Pincode",
    currently_disabled: "This feature is currently disabled",

    // dynamic constants
    welcomeback_with_name(name) {
        return `Welcome back ${name}`
    },
    order_cancel_failed_with_reason(reason) {
        return `Unable to cancel order at this time. due to ${reason}`
    },
    order_failed_with_reason(reason) {
        return `Unable to place order at this time. due to ${reason}`
    },

    // general
    error_occured: "Error Occured",
    error_occured_with_reason(reason) {
        return `Error Occured. ${reason}`
    },


}
export default constants