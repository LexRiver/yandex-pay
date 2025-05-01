import { EnumCouponStatus } from "../enums/EnumCouponStatus.js";

export interface Coupon {
    /**
     * Coupon code
     * Max length: 2048
     */
    value: string;

    /**
     * Description. For example, "3% discount"
     * Max length: 2048
     */
    description?: string;

    /**
     * Coupon status
     * Enum: VALID, INVALID, EXPIRED, null
     */
    status?: EnumCouponStatus;
}
