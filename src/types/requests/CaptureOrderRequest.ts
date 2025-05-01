import { CartWithRequiredTotalWithoutFinalPrice } from "../CartWithRequiredTotalWithoutFinalPrice.js";
import { ShippingPrice } from "../ShippingPrice.js";

export interface CaptureOrderRequest {
    /**
     * Final cart
     */
    cart: CartWithRequiredTotalWithoutFinalPrice;
    
    /**
     * External operation ID
     */
    externalOperationId?: string;
    
    /**
     * Amount to be debited. If not specified, the total amount of the passed cart items will be debited
     * Example: 123.45
     */
    orderAmount?: string;
    shipping?:ShippingPrice
    
}
