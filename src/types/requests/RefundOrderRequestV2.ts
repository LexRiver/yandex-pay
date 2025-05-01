import { CartWithRequiredTotalWithoutFinalPrice } from "../CartWithRequiredTotalWithoutFinalPrice.js";
import { ShippingPrice } from "../ShippingPrice.js";
import { TargetCart } from "../TargetCart.js";
import { TargetShipping } from "../TargetShipping.js";

export interface RefundOrderRequestV2 {
    /**
     * Total amount of the order. It's equal to cart.total.amount + shipping.amount
     */
    orderAmount: string;

    /**
     * Amount to be refunded.
     * Example: 123.45
     */
    refundAmount: string;
    
    /**
     * ID of the point of sale
     * Max length: 2048
     */
    branchId?: string;

    /**
     * External operation ID in the merchant's system
     * The ID must be unique.
     * 
     * Pass this parameter to be able to track the refund operation status via the operations/{external_operation_id} method.
     * 
     * If the operation is not completed (is either in progress or stopped), calling the method again with the same 
     * arguments and the same externalOperationId ID will be idempotent: the response will return the same operation. 
     * Or else, an error is returned.
     * 
     * If the refund process is launched successfully, calling the refund method with the same externalOperationId 
     * again will return an error with the "reasonCode": "DUPLICATE_EXTERNAL_OPERATION_ID"
     * 
     * Max length: 2048
     */
    externalOperationId?: string;

    /**
     * Manager ID
     * Max length: 2048
     */
    managerId?: string;

    /**
     * Refund reason
     * Max length: 2048
     */
    motive?: string;

    /**
     * Describes the final cart status after the refund. 
     * If the field is not specified, it's considered that the cart is refunded in full.
     */
    targetCart?: TargetCart;

    /**
     * Applicable to Yandex Pay Checkout only. In other cases, leave the field blank.
     * 
     * Describes the final delivery status after the refund.
     * If the field is not specified or is null, it's considered that the delivery cost is refunded in full.
     */
    targetShipping?: TargetShipping;

    /**
     * Final cart
     */
    cart?: CartWithRequiredTotalWithoutFinalPrice;

    /**
     * Shipping information
     */
    shipping?: ShippingPrice;
}