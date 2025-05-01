import { BillingReport } from "./BillingReport.js";
import { QRData } from "./QRData.js";
import { SmsOffer } from "./SmsOffer.js";

export interface OrderExtensions {
    billingReport: BillingReport;
    qrData: QRData;
    smsOffer: SmsOffer;
}
