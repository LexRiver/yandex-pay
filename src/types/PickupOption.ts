import { EnumAllowedPaymentMethods } from "../enums/EnumAllowedPaymentMethods.js";
import { EnumPickupPointType } from "../enums/EnumPickupPointType.js";
import { ItemReceipt } from "./ItemReceipt.js";
import { Location } from "./Location.js";
import { PickupSchedule } from "./PickupSchedule.js";

export interface PickupOption {
    /**
     * Address in string format
     * Max length: 2048
     */
    address: string;

    /**
     * Location coordinates
     */
    location: Location;

    /**
     * Unique pickup point ID in the merchant's system
     * Max length: 2048
     */
    pickupPointId: string;

    /**
     * Pickup point's name
     * Max length: 2048
     */
    title: string;

    /**
     * Individual payment methods for the selected pickup method.
     * Methods that can be used to pay for the order with the selected pickup method.
     * Use this parameter if you want to restrict the payment methods specified in availablePaymentMethods.
     * If the parameter is omitted, all the payment methods listed in availablePaymentMethods are used.
     * Enum: CARD, SPLIT, CASH_ON_DELIVERY, CARD_ON_DELIVERY
     */
    allowedPaymentMethods?: EnumAllowedPaymentMethods[];

    /**
     * Cost of delivery to the location
     * Example: 123.45
     */
    amount?: string;

    /**
     * Additional description
     * Max length: 2048
     */
    description?: string;

    /**
     * Closest possible delivery date (YYYY-MM-DD)
     */
    fromDate?: string;

    /**
     * Contact phone numbers
     * Max length: 2048
     */
    phones?: string[];

    /**
     * Pickup point's type.
     * Enum: YANDEX_MARKET, BOXBERRY, CDEK, IN_STORE, RUSSIAN_POST, PICKPOINT, DPD
     */
    provider?: EnumPickupPointType;

    /**
     * Receipt information
     */
    receipt?: ItemReceipt;

    /**
     * Pickup point's schedule
     */
    schedule?: PickupSchedule[];

    /**
     * Optional. Storage period at the pickup point, in days.
     */
    storagePeriod?: number;

    /**
     * Latest delivery date (YYYY-MM-DD)
     */
    toDate?: string;
}

    
