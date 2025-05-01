import { EnumOrderResponseOperationStatus } from "../../enums/EnumOrderResponseOperationStatus.js";
import { EnumOrderResponseOperationType } from "../../enums/EnumOrderResponseOperationType.js";

export interface OrderResponseOperation {
    /**
     * Transaction amount in a fiat currency
     * @example "123.45"
     */
    amount: string;

    /**
     * Operation ID
     * Max length: 2048
     */
    operationId: string;

    /**
     * Operation type
     * Enum: AUTHORIZE, BIND_CARD, REFUND, CAPTURE, VOID, RECURRING, PREPAYMENT, SUBMIT
     */
    operationType: EnumOrderResponseOperationType;

    /**
     * Order ID
     * Max length: 2048
     */
    orderId: string;

    /**
     * Code of transaction confirmation received from the processing center.
     */
    approvalCode?: string;

    /**
     * Date and time when the operation was created (ISO 8601)
     */
    created?: string;

    /**
     * Operation ID on the merchant side
     * Max length: 2048
     */
    externalOperationId?: string;

    /**
     * Additional parameters
     */
    params?: Record<string, unknown>;

    /**
     * Error cause
     * Max length: 2048
     */
    reason?: string;

    /**
     * Operation status
     * Default: PENDING
     * Enum: PENDING, SUCCESS, FAIL
     */
    status?: EnumOrderResponseOperationStatus;

    /**
     * Date and time when the operation was updated (ISO 8601)
     */
    updated?: string;

    /**
     * Transaction amount in Plus points
     * Example: 123.45
     */
    pointsAmount?:string
}

    
