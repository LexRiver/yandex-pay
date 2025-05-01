import { EnumCartItemType } from "../enums/EnumCartItemType.js";
import { ItemQuantity } from "./ItemQuantity.js";
import { ItemReceipt } from "./ItemReceipt.js";
import { Measurements } from "./Measurements.js";

export interface CartItem {
    /**
     * Product ID in the merchant system
     * Make sure that each productId in the request parameters is unique.
     * Max length: 2048
     */
    productId: string;
    
    /**
     * Product quantity in the order
     */
    quantity: ItemQuantity;
    
    /**
     * Product description
     * Max length: 2048
     */
    description?: string;
    
    /**
     * Price per product unit with discount per item
     * @example "123.45"
     */
    discountedUnitPrice?: string;
    
    /**
     * Price per product unit with all discounts per item and on the cart
     * @example "123.45"
     */
    finalPrice?: string;
    
    /**
     * Product dimensions and weight. Required for the PHYSICAL product
     */
    measurements?: Measurements;
    
    /**
     * Number of Plus points
     * Read-only field. Input values will be ignored.
     * @example "123.45"
     */
    pointsAmount?: string;
    
    /**
     * Data for receipt generation
     */
    receipt?: ItemReceipt;
    
    /**
     * Total price per item without discount
     * @example "123.45"
     */
    subtotal?: string;
    
    /**
     * Product name
     * Max length: 2048
     */
    title: string;
    
    /**
     * Total price per item with item discount
     * @example "123.45"
     */
    total: string;
    
    /**
     * Product type. Important for integrating with delivery services
     * Default: UNSPECIFIED
     * Enum: PHYSICAL, DIGITAL, UNSPECIFIED
     */
    type?: EnumCartItemType;
    
    /**
     * Total price per product unit without discount
     * @example "123.45"
     */
    unitPrice?: string;
}