import { EnumAllowedPaymentMethods } from "../enums/EnumAllowedPaymentMethods.js";
import { EnumCourierOptionCategory } from "../enums/EnumCourierOptionCategory.js";
import { EnumCourierOptionProvider } from "../enums/EnumCourierOptionProvider.js";
import { EnumCourierOptionType } from "../enums/EnumCourierOptionType.js";
import { FlexibleCustomerChoice } from "./FlexibleCustomerChoice.js";
import { FlexibleTimeIntervals } from "./FlexibleTimeIntervals.js";
import { ItemReceipt } from "./ItemReceipt.js";

export interface CourierOption {
    /**
     * Delivery cost
     * @example "123.45"
     */
    amount: string;

    /**
     * Delivery category
     * Enum: EXPRESS, TODAY, STANDARD
     */
    category: EnumCourierOptionCategory;

    /**
     * ID of the selected delivery method in the merchant system
     * Max length: 2048
     */
    courierOptionId: string;

    /**
     * Delivery method name. Shown to the user in the option list
     * Max length: 2048
     */
    title: string;

    /**
     * Individual payment methods for the delivery method. Use this parameter if you want to restrict the payment methods specified in availablePaymentMethods. If the parameter is omitted, all the payment methods listed in availablePaymentMethods are used.
     * Enum: CARD, SPLIT, CASH_ON_DELIVERY, CARD_ON_DELIVERY
     */
    allowedPaymentMethods?: EnumAllowedPaymentMethods[];

    /**
     * Date and interval selected by the user. Only for type: FLEXIBLE
     */
    customerChoice?: FlexibleCustomerChoice;

    /**
     * Closest delivery date for type: PLAIN. Start of the interval of the delivery date selection for type: FLEXIBLE
     */
    fromDate?: string;

    /**
     * Start of the delivery time interval. Only for type: PLAIN
     */
    fromTime?: string;

    /**
     * Delivery service type.
     * Enum: BOXBERRY, CDEK, RUSSIAN_POST, EMS, COURIER, DHL, EXPRESS_DELIVERY, FIVEPOST, OZON_ROCKET, DPD, SBER_LOGISTICS, PEK, PICKPOINT, KCE, PONY_EXPRESS, YANDEX_DELIVERY, null
     */
    provider?: EnumCourierOptionProvider;

    /**
     * Receipt information
     */
    receipt?: ItemReceipt;

    /**
     * Codes the intervals of the delivery time available for selection. Only for type: FLEXIBLE
     */
    timeIntervals?: FlexibleTimeIntervals;

    /**
     * Latest delivery date for type: PLAIN. End of the interval of the delivery date selection for type: FLEXIBLE
     */
    toDate?: string;

    /**
     * End of the delivery time interval. Only for type: PLAIN
     */
    toTime?: string;

    /**
     * Option type. For FLEXIBLE delivery options, the user can select the desirable date and interval:
     * The delivery date is selected by the user in the interval [fromDate, toDate]
     * To give the user an option to select an interval within a day, fill out timeIntervals. No such choice is provided for PLAIN options.
     * Default: PLAIN
     * Enum: PLAIN, FLEXIBLE
     */
    type?: EnumCourierOptionType;
}
