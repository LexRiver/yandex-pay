/**
 * Create subscription response data
 */
export interface CreateSubscriptionResponse {
    /**
     * Subscription ID
     */
    subscriptionId: string;
    
    /**
     * Link to paying for the order
     */
    paymentUrl: string;
}

