import { EnumAllowedPaymentMethods } from "../../enums/EnumAllowedPaymentMethods.js";
import { EnumOrderSource } from "../../enums/EnumOrderSource.js";
import { MerchantRedirectUrls } from "../MerchantRedirectUrls.js";
import { MerchantRiskInfo } from "../MerchantRiskInfo.js";
import { OrderExtensions } from "../OrderExtensions.js";
import { RenderedCart } from "../RenderedCart.js";
import { UniqrMetadata } from "../UniqrMetadata.js";


export type PreferredPaymentMethod = 'FULLPAYMENT' | 'SPLIT' | 'CARD';
export type PublicConstructor = '2' | '4' | '6' | null;

export interface CreateOrderRequest {
    /**
     * Cart contents
     * Type: RenderedCart
     */
    cart: RenderedCart;

    /**
     * Three-letter code of the order currency (ISO 4217)
     * Enum: RUB
     * Max length: 2048
     */
    currencyCode: 'RUB';

    /**
     * Order ID on the merchant side (must be unique)
     * Max length: 2048
     */
    orderId: string;

    /**
     * Payment methods available in the Yandex Pay payment form.
     * Enum: CARD, SPLIT
     * Min items: 1
     * Default: null
     */
    availablePaymentMethods?: EnumAllowedPaymentMethods[];

    /**
     * Customer phone number.
     * Max length: 2048
     * Recommended format: +71234567890 or 71234567890
     */
    billingPhone?: string;

    /**
     * Additional parameters for placing an offline order
     */
    extensions?: OrderExtensions;

    /**
     * Whether to transfer an order based on the "deferred payment" flow.
     */
    isPrepayment?: boolean;

    /**
     * Arbitrary order data for internal use
     * Max length: 2048
     */
    metadata?: string;

    /**
     * Indicates where order creation was initialized
     * Enum: WEBSITE, APP, CRM, CASH_REGISTER, CMS_PLUGIN
     * Default: null
     */
    orderSource?: EnumOrderSource;

    /**
     * Preferred payment method.
     * Enum: FULLPAYMENT, SPLIT
     * Card by default.
     */
    preferredPaymentMethod?: PreferredPaymentMethod;

    /**
     * Constructor of the preselected Split payment plan.
     * Enum: 2, 4, 6, null
     * Available only upon approval
     */
    publicConstructor?: PublicConstructor;

    /**
     * Purpose of payment
     * Max length: 1000
     */
    purpose?: string;

    /**
     * Links for redirecting the user from the payment form. Required for online stores
     */
    redirectUrls: MerchantRedirectUrls;

    /**
     * Additional info specifying which may make Split approval more likely. Fully available for online stores only.
     */
    risk?: MerchantRiskInfo;

    /**
     * Time to live for the order in seconds
     * Time-to-live (seconds): 180 <= ttl <= 604800
     * Default: 1800
     */
    ttl?: number;

    /**
     * Additional uniqr data
     */
    uniqrMetadata?: UniqrMetadata;
}
