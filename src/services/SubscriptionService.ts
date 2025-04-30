import { OperationResponseData } from '../types/Operation.js';
import {
    CreateSubscriptionRequest,
    CreateSubscriptionResponse,
    RecurringPaymentRequest,
    Subscription,
    SubscriptionResponseData
} from '../types/Subscription.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with subscriptions
 */
export class SubscriptionService extends BaseService {
    /**
     * Creates a new subscription
     * 
     * @param data Subscription data
     * @returns Created subscription data
     */
    async createSubscription(data: CreateSubscriptionRequest): Promise<CreateSubscriptionResponse> {
        return this.post<CreateSubscriptionResponse>('/v1/subscriptions', data);
    }
    
    /**
     * Makes a recurring payment for a subscription
     * 
     * @param data Recurring payment data
     * @returns Operation details
     */
    async makeRecurringPayment(data: RecurringPaymentRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>('/v1/subscriptions/recur', data);
    }
    
    /**
     * Gets subscription details
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