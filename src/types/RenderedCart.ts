import { CartTotal } from "./CartTotal.js";
import { RenderedCartItem } from "./RenderedCartItem.js";

export interface RenderedCart {
    /**
     * Cart items that the customer pays for.
     */
    items: RenderedCartItem[];
    /**
     * Final order cost.
     */
    total: CartTotal;
    /**
     * Cart ID passed by the merchant
     */
    externalId: string;
}
