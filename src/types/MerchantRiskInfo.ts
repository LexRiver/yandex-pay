import { EnumMerchantRiskInfoShippingType } from "../enums/EnumMerchantRiskInfoShippingType.js";

/**
 * @property {string} deviceId - Customer device ID (device_id/gaid/idfa/ifv). Max length: 2048
 * @property {string} shippingAddress - Delivery address. Max length: 2048
 * @property {string} shippingPhone - Recipient phone number (e.g., +71234567890). Max length: 2048
 * @property {"COURIER" | "PICKUP" | null} shippingType - Order delivery method. Enum: COURIER, PICKUP, null
 */
export interface MerchantRiskInfo {
    deviceId: string;
    shippingAddress: string;
    shippingPhone: string;
    shippingType: EnumMerchantRiskInfoShippingType;
}
