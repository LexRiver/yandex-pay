import { CartWithRequiredTotalWithoutFinalPrice } from "../CartWithRequiredTotalWithoutFinalPrice.js";

export interface SubmitOrderRequest {
    /**
     * Operation ID in the merchant's system
     */
    externalOperationId:string
    /**
     * Final cart
     */
    cart?: CartWithRequiredTotalWithoutFinalPrice;
    /**
     * Total amount of the order. It's equal to cart.total.amount. The field is required if cart is passed
     * Example: 123.45
     */
    orderAmount?:string
}

