import { CartWithRequiredTotalWithoutFinalPrice } from "../CartWithRequiredTotalWithoutFinalPrice.js";
import { ShippingPrice } from "../ShippingPrice.js";

export interface RefundOrderRequest {
    /**
     * Total amount of the order. It's equal to cart.total.amount + shipping.amount
     */
    orderAmount: string;

    /**
     * Amount to be refunded.
     */
    refundAmount: string;
    
    /**
     * Final cart
     */
    cart?: CartWithRequiredTotalWithoutFinalPrice;

    /**
     * External operation ID in the merchant's system
     * Max length: 2048
     */
    externalOperationId?: string;

    /**
     * Shipping information
     */
    shipping?: ShippingPrice;
    
}