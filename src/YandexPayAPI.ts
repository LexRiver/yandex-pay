import { OperationService } from './services/OperationService.js';
import { OrderService } from './services/OrderService.js';
import { SubscriptionService } from './services/SubscriptionService.js';
import { ApiConfig } from './types/ApiConfig.js';

/**
 * YandexPayAPI client for making requests to the Yandex Pay API
 */
export class YandexPayAPI {
    private readonly apiKey: string;
    private readonly baseUrl: string;
    private readonly isSandbox: boolean;
    
    public readonly orders: OrderService;
    public readonly operations: OperationService;
    public readonly subscriptions: SubscriptionService;

    /**
     * Creates a new YandexPayAPI instance
     * 
     * @param config Configuration for the API client
     */
    constructor(config: ApiConfig) {
        this.apiKey = config.apiKey;
        this.isSandbox = config.sandbox || false;
        this.baseUrl = this.isSandbox 
            ? 'https://sandbox.pay.yandex.ru/api/merchant'
            : 'https://pay.yandex.ru/api/merchant';
        
        // Initialize services
        this.orders = new OrderService(this.baseUrl, this.apiKey);
        this.operations = new OperationService(this.baseUrl, this.apiKey);
        this.subscriptions = new SubscriptionService(this.baseUrl, this.apiKey);
    }
} 