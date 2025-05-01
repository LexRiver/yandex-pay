import { CancelOrderRequest } from '../types/requests/CancelOrderRequest.js';
import { CaptureOrderRequest } from '../types/requests/CaptureOrderRequest.js';
import { CreateOrderRequest } from '../types/requests/CreateOrderRequest.js';
import { RefundOrderRequest } from '../types/requests/RefundOrderRequest.js';
import { RefundOrderRequestV2 } from '../types/requests/RefundOrderRequestV2.js';
import { SubmitOrderRequest } from '../types/requests/SubmitOrderRequest.js';
import { CreateOrderResponse } from '../types/responses/CreateOrderResponse.js';
import { OperationResponseData } from '../types/responses/OperationResponseData.js';
import { OrderResponse } from '../types/responses/OrderResponse.js';
import { BaseService } from './BaseService.js';

/**
 * Service for working with orders
 */
export class OrderService extends BaseService {
    /**
     * Request to create a link for order payment.
     * 
     * The request is used to create and obtain a link to pay for the order.
     * 
     * @param data Order data
     * @returns Created order data
     */
    async createOrder(data: CreateOrderRequest): Promise<CreateOrderResponse> {
        return this.post<CreateOrderResponse>('/v1/orders', data);
    }

    /**
     * Request to retrieve the order details.
     * 
     * The request returns the order details and the refund transactions.
     * 
     * @param orderId Order ID
     * @returns Order details
     */
    async getOrder(orderId: string): Promise<OrderResponse> {
        const response = await this.get<OrderResponse>(`/v1/orders/${orderId}`);
        return response;
    }

    /**
     * Request to cancel the payment.
     * 
     * Available only for payments in AUTHORIZED status. On success, the payment status will change to VOIDED.
     * 
     * @param orderId Order ID
     * @param data Cancellation data
     * @returns Operation details
     */
    async cancelOrder(orderId: string, data: CancelOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/cancel`, data);
    }

    /**
     * Request for refund.
     * 
     * Initiating a refund for the order.
     * 
     * Available only for payments in CAPTURED or PARTIALLY_REFUNDED status. On success, the payment status will change to REFUNDED or PARTIALLY_REFUNDED depending on the amount and the ORDER_STATUS_UPDATED event will be sent. The OPERATION_STATUS_UPDATED event is sent both if the refund succeeds and fails.
     * 
     * In the request, pass the final cart of the provided products and services. The final cart is created from the current cart by excluding some items or by revising the costs of the existing items that were refunded. The cart's total must be equal to the total payment amount minus the refund amount.
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
     * Request for refund.
     * 
     * Available only for payments in CAPTURED or PARTIALLY_REFUNDED status. On success, the payment status changes as follows:
     * 
     * to REFUNDED if the full amount was refunded
     * or PARTIALLY_REFUNDED if the cart has some items left after the refund.
     * 
     * The method is asynchronous. You can find out the refund result by using the event mechanism or calling the operation status method. The OPERATION_STATUS_UPDATED event is sent both if the refund succeeds and fails.
     * 
     * If a full refund is required, just pass refundAmount set to the order amount.
     * 
     * For a partial refund, you should additionally pass the final cart of the provided products and services in the request. The final cart is created from the current cart by excluding some items or by revising the quantity/costs of the items that were refunded.
     * 
     * 
     * Please note that you should specify the cart status after the refund rather than the list of products or services to be refunded.
     * 
     * The targetCart field describes the final cart status after the refund. If the field is not specified, it's considered that the cart is refunded in full.
     * 
     * The targetShipping field is only applicable to Yandex Pay Checkout. In other cases, leave the field blank. The field describes the final delivery status after the refund. If the field is not specified or is null, it's considered that the delivery cost is refunded in full.
     * 
     * @param orderId Order ID
     * @param data Refund data
     * @returns Operation details
     */
    async refundOrderV2(orderId: string, data: RefundOrderRequestV2): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v2/orders/${orderId}/refund`, data);
    }

    /**
     * Request to debit funds for the order.
     * 
     * Debiting of locked funds. Available only for payments in AUTHORIZED status. If the request result is successful, the payment status changes to CAPTURED.
     * 
     * If the authorized amount is smaller than the original amount, the remaining part of the payment will be refunded. In that case, you need to pass the final cart of the provided products and services. The final cart is created from the current cart by excluding some items that were refunded.
     * 
     * @param orderId Order ID
     * @param data Capture data
     * @returns Operation details
     */
    async captureOrder(orderId: string, data: CaptureOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/capture`, data);
    }

    /**
     * Request for payment cancellation.
     * 
     * Available for payments in any status. Disables further payment for the order and, if the payment has been made, 
     * refunds the full amount to the customer. If the request is successful, the payment status changes to FAILED.
     * 
     * @param orderId Order ID
     * @returns Operation details
     */
    async rollbackOrder(orderId: string): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/rollback`, {});
    }

    /**
     * Request for Split payment confirmation in the event of payment on delivery.
     * 
     * Available for payments in the CONFIRMED status. If the request is successful, the status changes to CAPTURED.
     * 
     * If the cart items at the order confirmation stage differ from those at the order placement stage, 
     * pass new values for the cart and orderAmount fields.
     * 
     * @param orderId Order ID
     * @returns Operation details
     */
    async submitOrder(orderId: string, data: SubmitOrderRequest): Promise<OperationResponseData> {
        return this.post<OperationResponseData>(`/v1/orders/${orderId}/submit`, data);
    }
} 