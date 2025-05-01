import { EnumPaymentStatus } from "../enums/EnumPaymentStatus.js";
import { Cart } from "./Cart.js";
import { PaymentMethod } from "./PaymentMethod.js";
import { ShippingMethod } from "./ShippingMethod.js";

export interface Order {
    /**
     * Cart
     */
    cart: Cart;

    /**
     * Three-letter code of the order currency code (ISO 4217)
     * Max length: 2048
     * Enum: RUB
     */
    currencyCode: string;

    /**
     * Date and time when the order was created (ISO 8601)
     */
    created?: string;

    /**
     * Flag indicating if the "deferred payment" flow is used for the order
     * Default: false
     */
    isPrepayment?: boolean;

    /**
     * Merchant ID
     * Max length: 2048
     */
    merchantId?: string;

    /**
     * Arbitrary data transmitted at button initialization
     * Max length: 2048
     */
    metadata?: string;

    /**
     * Total cost of the order to be paid, including refunds, delivery costs, discounts, and promo codes
     * @example "123.45"
     */
    orderAmount?: string;

    /**
     * ID assigned to the existing order on the merchant side and transmitted at button initialization
     * Max length: 2048
     */
    orderId: string;

    /**
     * Selected payment method
     */
    paymentMethod?: PaymentMethod;

    /**
     * Payment status
     * Enum: PENDING, AUTHORIZED, CAPTURED, VOIDED, REFUNDED, CONFIRMED, PARTIALLY_REFUNDED, FAILED, null
     */
    paymentStatus?: EnumPaymentStatus;

    /**
     * Link to paying for the order
     * Max length: 2048
     */
    paymentUrl?: string;

    /**
     * Reason (applicable to the VOIDED/FAILED statuses)
     * Max length: 2048
     */
    reason?: string;

    /**
     * Selected delivery method
     */
    shippingMethod?: ShippingMethod;

    /**
     * Date and time when the order was updated (ISO 8601)
     */
    updated?: string;
}