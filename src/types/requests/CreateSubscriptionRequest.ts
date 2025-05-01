import { EnumIntervalUnit } from "../../enums/EnumIntervalUnit.js";
import { EnumOrderSource } from "../../enums/EnumOrderSource.js";
import { MerchantRedirectUrls } from "../MerchantRedirectUrls.js";
import { RenderedCart } from "../RenderedCart.js";

/**
 * Create subscription request
 */
export interface CreateSubscriptionRequest {

    /**
     * Three-letter code of the order currency code (ISO 4217)
     * @maxLength 2048
     * @enum {string} "RUB"
     */
    currencyCode: string;

    /**
     * Order ID on the merchant side (it should be unique).
     * Further interaction on the payment request will be carried out using this ID.
     * The ID will also be used at reconciliation
     * @maxLength 2048
     */
    orderId: string;

    /**
     * Cart
     */
    cart?: RenderedCart;

    /**
     * Amount to be debited in the future
     * @example "123.45"
     */
    futureWriteOffAmount?: string;

    /**
     * The number of subscription periods, such as "debit every 6 months"
     * Required if isBinding=true is not specified
     */
    intervalCount?: number;

    /**
     * Subscription frequency time unit
     * Required if isBinding=true is not specified
     * @enum {string} "SECOND" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null
     */
    intervalUnit?: EnumIntervalUnit;

    /**
     * Allows linking the user's card with no items added to the cart
     * If the first time a payment is debited only requires the card binding, pass `isBinding=true` in your request.
     * No cart items and subscription frequency need to be passed in this scenario.
     * @default false
     */
    isBinding?: boolean;

    /**
     * Arbitrary order data for internal use
     * @maxLength 2048
     */
    metadata?: string;

    /**
     * Indicates where order creation was initialized
     * Used for subsequent analysis
     * @default null
     * @enum {string} "WEBSITE" | "APP" | "CRM" | "CASH_REGISTER" | "CMS_PLUGIN"
     */
    orderSource?: EnumOrderSource;

    /**
     * Purpose of payment
     * @maxLength 1000
     */
    purpose?: string;

    /**
     * Links for redirecting the user from the payment form. Required for online stores
     */
    redirectUrls?: MerchantRedirectUrls;

    /**
     * Subscription name
     * @maxLength 30
     */
    title?: string;

    /**
     * The number of periods in a trial period, such as "7 days"
     */
    trialCount?: number;

    /**
     * Trial period end date. Mutually exclusive with the trial_unit + trial_count fields
     */
    trialEndAt?: string;

    /**
     * Time unit of the trial period frequency
     * @enum {string} "SECOND" | "DAY" | "WEEK" | "MONTH" | "YEAR" | null
     */
    trialUnit?: EnumIntervalUnit;

    /**
     * Order time-to-live (seconds)
     * 180 <= ttl <= 604800
     * @default 1800
     */
    ttl?: number;
}
