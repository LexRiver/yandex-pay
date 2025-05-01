import { EnumCardNetwork } from "../enums/EnumCardNetwork.js";
import { EnumPaymentMethodType } from "../enums/EnumPaymentMethodType.js";

export interface PaymentMethod {
    /**
     * Payment method type
     * Enum: CARD, SPLIT, SBP, SPLIT_SBP, CASH_ON_DELIVERY, CARD_ON_DELIVERY
     */
    methodType: EnumPaymentMethodType;

    /**
     * Last 4 digits of the card
     * Max length: 2048
     */
    cardLast4?: string;

    /**
     * Payment system
     * Enum: AMEX, DISCOVER, JCB, MASTERCARD, MAESTRO, VISAELECTRON, VISA, MIR, UNIONPAY, UZCARD, HUMOCARD, UNKNOWN, UNDEFINED, null
     */
    cardNetwork?: EnumCardNetwork;

}


    
