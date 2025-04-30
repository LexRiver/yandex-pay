import { OperationResponseData } from '../types/Operation.js';
import {
    CancelOrderRequest,
    CaptureOrderRequest,
    CreateOrderRequest,
    CreateOrderResponse,
    GetOrderResponse,
    OrderResponseData,
    RefundOrderRequest
} from '../types/Order.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with orders
 */
export class OrderService extends BaseService {
    /**
     * Creates a new order
     * 
     * @param data Order data
     * @returns Created order data
     */
    async createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
        return this.post<CreateOrderResponse>('/v1/orders', data);
    }
    
    /**
     * Gets order details
     * 
     * @param orderId Order ID
     * @returns Order details
     */
    async getOrder(orderId: string): Promise<GetOrderResponse> {
        const response = await this.get<OrderResponseData>(`/v1/orders/${orderId}`);
        return response.order;
    }
    
    /**
     * Cancels an order
     * 
     * @param orderId Order ID
     * @param data Cancellation data
     * @returns Operation details
     */
    async cancelOrder(orderId: string, data: CancelOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/cancel`, data);
    }
    
    /**
     * Refunds an order
     * 
     * @param orderId Order ID
     * @param data Refund data
     * @returns Operation details
     */
    async refundOrder(orderId: string, data: RefundOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/refund`, data);
    }
    
    /**
     * Refunds an order (v2)
     * 
     * @param orderId Order ID
     * @param data Refund data
     * @returns Operation details
     */
    async refundOrderV2(orderId: string, data: RefundOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v2/orders/${orderId}/refund`, data);
    }
    
    /**
     * Captures (confirms) an order payment
     * 
     * @param orderId Order ID
     * @param data Capture data
     * @returns Operation details
     */
    async captureOrder(orderId: string, data: CaptureOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/capture`, data);
    }
    
    /**
     * Rolls back (voids) an order payment
     * 
     * @param orderId Order ID
     * @returns Operation details
     */
    async rollbackOrder(orderId: string): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/rollback`, {});
    }
    
    /**
     * Submits an order for processing
     * 
     * @param orderId Order ID
     * @returns Operation details
     */
    async submitOrder(orderId: string): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/submit`, {});
    }
} 