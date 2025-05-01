import { EnumAllowedPaymentMethods } from "../enums/EnumAllowedPaymentMethods.js";
import { EnumYandexDeliveryOptionCategory } from "../enums/EnumYandexDeliveryOptionCategory.js";
import { ItemReceipt } from "./ItemReceipt.js";

export interface YandexDeliveryOption {
    /**
     * Delivery cost
     * @example "123.45"
     */
    amount: string; // string<double>

    /**
     * Delivery category
     * Enum: EXPRESS, TODAY, STANDARD
     */
    category: EnumYandexDeliveryOptionCategory;

    /**
     * Delivery method name. Shown to the user in the option list
     * Max length: 2048
     */
    title: string;

    /**
     * ID of the Yandex Delivery offer
     * Max length: 2048
     */
    yandexDeliveryOptionId: string;

    /**
     * Individual payment methods for the delivery method. Use this parameter if you want to restrict the payment methods specified in availablePaymentMethods. If the parameter is omitted, all the payment methods listed in availablePaymentMethods are used.
     * Enum: CARD, SPLIT, CASH_ON_DELIVERY, CARD_ON_DELIVERY
     */
    allowedPaymentMethods?: Array<EnumAllowedPaymentMethods>;

    /**
     * Start of delivery interval (ISO 8601 date-time string)
     */
    fromDatetime?: string; // string<date-time>

    /**
     * Receipt information
     */
    receipt?: ItemReceipt;

    /**
     * End of delivery interval (ISO 8601 date-time string)
     */
    toDatetime?: string; // string<date-time>
}

    
