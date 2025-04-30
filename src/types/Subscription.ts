import { EnumSubscriptionStatus } from '../enums/SubscriptionStatus.js';

/**
 * Subscription data returned by the API
 */
export interface Subscription {
    /**
     * Subscription ID
     */
    customerSubscriptionId: string;
    
    /**
     * Subscription plan ID
     */
    subscriptionPlanId: string;
    
    /**
     * Subscription status
     */
    status: EnumSubscriptionStatus;
    
    /**
     * Subscription cancellation time
     */
    cancelledAt?: string;
    
    /**
     * Linked card's status
     */
    isCardActive?: boolean;
    
    /**
     * Date of next debit
     */
    nextWriteOff?: string;
}

/**
 * Create subscription request
 */
export interface CreateSubscriptionRequest {
    /**
     * Return URLs after payment
     */
    returnUrls: {
        /**
         * URL to redirect on successful payment
         */
        onSuccess: string;
        
        /**
         * URL to redirect on payment error
         */
        onError: string;
    };
    
    /**
     * Subscription plan ID
     */
    subscriptionPlanId: string;
}

/**
 * Create subscription response data
 */
export interface CreateSubscriptionResponse {
    /**
     * Subscription ID
     */
    customerSubscriptionId: string;
    
    /**
     * URL to redirect the user for payment
     */
    confirmationUrl: string;
}

/**
 * Recurring payment request
 */
export interface RecurringPaymentRequest {
    /**
     * Customer subscription ID
     */
    customerSubscriptionId: string;
    
    /**
     * Payment amount in domestic currency
     */
    amount: string;
    
    /**
     * External operation ID
     */
    externalOperationId?: string;
    
    /**
     * Purpose of payment
     */
    purpose?: string;
}

/**
 * Subscription data response
 */
export interface SubscriptionResponseData {
    /**
     * Subscription data
     */
    customerSubscriptionId: string;
    status: EnumSubscriptionStatus;
    subscriptionPlanId: string;
    cancelledAt?: string;
    isCardActive?: boolean;
    nextWriteOff?: string;
} 