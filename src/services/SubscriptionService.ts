import { CreateSubscriptionRequest, CreateSubscriptionResponse, RecurringPaymentRequest, Subscription, SubscriptionResponseData } from '../types/index.js';
import { RecurSubscriptionResponse } from '../types/responses/RecurSubscriptionResponse.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with subscriptions
 */
export class SubscriptionService extends BaseService {
    /**
     * Request for subscription creation.
     * 
     * The request is used to create a subscription and and obtain a link to start it.
     * 
     * @param data Subscription data
     * @returns Created subscription data
     */
    async createSubscription(data: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
        return this.post<CreateSubscriptionResponse>('/v1/subscriptions', data);
    }
    
    /**
     * Request to debit a regular subscription fee.
     * 
     * The request is used to perform a direct debit from the account or card linked to the subscription. 
     * To debit funds, pass the order ID, cart, debit amount, and ID of the initial order that was used at subscription creation.
     * 
     * @param data Recurring payment data
     * @returns Operation details
     */
    async makeRecurringPayment(data: RecurringPaymentRequest): Promise<RecurSubscriptionResponse> {
        return this.post<RecurSubscriptionResponse>('/v1/subscriptions/recur', data);
    }
    
    /**
     * Request to obtain subscription details.
     * 
     * Returns the subscription ID and status and the linked payment method.
     * 
     * @param subscriptionId Subscription ID
     * @param checkCardActive Whether to check if the card is active
     * @returns Subscription details
     */
    async getSubscription(subscriptionId: string, checkCardActive?: boolean): Promise<Subscription> {
        const data = checkCardActive ? { check_card_active: true } : {};
        
        return this.post<SubscriptionResponseData>(`/v1/subscriptions/${subscriptionId}`, data);
    }
} 