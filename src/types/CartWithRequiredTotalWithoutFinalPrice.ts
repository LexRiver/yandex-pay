import { CartItemWithoutFinalPriceCamelCase } from "./CartItemWithoutFinalPriceCamelCase.js";
import { CartTotal } from "./CartTotal.js";
import { Coupon } from "./Coupon.js";
import { Discount } from "./Discount.js";
import { Measurements } from "./Measurements.js";

export interface CartWithRequiredTotalWithoutFinalPrice{
    items: CartItemWithoutFinalPriceCamelCase[]
    total: CartTotal
    /**
     * Type: string
     * The internal ID of the Yandex Pay cart.
     * 
     * The store's backend must use this parameter as the ID of the customer cart and 
     * the idempotency key for the /order/create request. If the store's backend receives 
     * a repeat /order/create request, return the existing order ID. The store's backend 
     * can create no more than one order (orderId) per cart (cartId).
     * 
     * Max length: 2048
     */
    cardId: string
    coupons: Coupon[]
    discounts: Discount[]
    /**
     * Type: string
     * Cart ID passed by the merchant
     * Max length: 2048
     */
    externalId: string
    measurements: Measurements
}