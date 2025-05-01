import { EnumDeliveryStatus } from "../enums/EnumDeliveryStatus.js";

export type Delivery = {
    /**
     * Delivery cost for the customer
     * Example: 123.45
     */
    price: string;
    
    /**
     * Delivery cost for the merchant
     * Example: 123.45
     */
    actualPrice?: string;
    
    /**
     * Date and time when the delivery was created (ISO 8601)
     */
    created?: string;
    
    /**
     * Delivery status
     * Default: NEW
     */
    status?: EnumDeliveryStatus;
    
    /**
     * Date and time when the delivery was updated (ISO 8601)
     */
    updated?: string;
}


