import { EnumSubscriptionStatus } from "../enums/EnumSubscriptionStatus.js";

/**
 * Subscription data response
 */
export interface SubscriptionResponseData {
    status: EnumSubscriptionStatus;
    /**
     * Subscription plan ID
     * Type: string<uuid>
     */
    subscriptionPlanId: string;
    /**
     * Subscription cancellation time
     * Type: string<date-time>
     */
    cancelledAt?: string;

    /**
     * Subscription ID
     * Type: string<uuid>
     * Max length: 2048
     */
    customerSubscriptionId: string;
    
    /**
     * Linked card's status
     * Type: boolean
     */
    isCardActive?: boolean;
    
    /**
     * Date of next debit
     * Type: string<date-time>
     */
    nextWriteOff?: string;
} 