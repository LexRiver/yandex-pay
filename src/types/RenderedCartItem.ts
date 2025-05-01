import { ItemQuantity } from "./ItemQuantity.js";
import { ItemReceipt } from "./ItemReceipt.js";

export interface RenderedCartItem {
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
     * Product name
     * Max length: 2048
     */
    title: string;

    /**
     * Total price per item with item discount
     * Example: 123.45
     */
    total: string;

    /**
     * Product description
     * Max length: 2048
     */
    description?: string;

    /**
     * Price per product unit with discount per item
     * Example: 123.45
     */
    discountedUnitPrice?: string;

    /**
     * Number of Plus points
     * Read-only field. Input values will be ignored.
     * Example: 123.45
     */
    pointsAmount?: string;

    /**
     * Data for receipt generation
     */
    receipt?: ItemReceipt;

    /**
     * Total price per item without discount
     * Example: 123.45
     */
    subtotal?: string;

    /**
     * Total price per product unit without discount
     * Example: 123.45
     */
    unitPrice?: string;
}
