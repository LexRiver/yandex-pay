import { EnumSubscriptionStatus } from '../enums/EnumSubscriptionStatus.js';

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

