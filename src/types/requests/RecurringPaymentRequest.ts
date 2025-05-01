import { RenderedCart } from '../RenderedCart.js';

/**
 * Recurring payment request
 */
export interface RecurringPaymentRequest {
    /**
     * Amount to be debited
     * Example: 123.45
     */
    amount: string;

    /**
     * Cart
     */
    cart: RenderedCart;

    /**
     * Three-letter code of the order currency code (ISO 4217)
     * Enum: RUB
     */
    currencyCode: string;

    /**
     * The order ID on the merchant side (it should be unique).
     * Max length: 2048
     */
    orderId: string;

    /**
     * ID of the initial order
     * Max length: 2048
     */
    parentOrderId: string;

    /**
     * Arbitrary order data for internal use
     * Max length: 2048
     */
    metadata?: string;

    /**
     * Purpose of payment
     * Max length: 1000
     */
    purpose?: string;
}

