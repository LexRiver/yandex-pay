import { CartItem } from "./CartItem.js";
import { CartTotal } from "./CartTotal.js";
import { Coupon } from "./Coupon.js";
import { Discount } from "./Discount.js";
import { Measurements } from "./Measurements.js";

export interface Cart {
    /**
     * Cart item
     */
    items: CartItem[];

    /**
     * The internal ID of the Yandex Pay cart.
     * The store's backend must use this parameter as the ID of the customer cart and the idempotency key for the /order/create request. If the store's backend receives a repeat /order/create request, return the existing order ID. The store's backend can create no more than one order (orderId) per cart (cartId).
     * Max length: 2048
     */
    cartId?: string;

    /**
     * Coupons applied to the cart
     */
    coupons?: Coupon[];

    /**
     * Discounts applied to the cart
     */
    discounts?: Discount[];

    /**
     * Cart ID passed by the merchant
     * Max length: 2048
     */
    externalId?: string;

    /**
     * Measurements for the cart
     */
    measurements?: Measurements;

    /**
     * Total cart cost that the customer is to pay
     */
    total: CartTotal;
}
