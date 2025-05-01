import { EnumShippingMethodType } from "../enums/EnumShippingMethodType.js";
import { CourierOption } from "./CourierOption.js";
import { PickupOption } from "./PickupOption.js";
import { YandexDeliveryOption } from "./YandexDeliveryOption.js";

export interface ShippingMethod {
    /**
     * Shipping method type
     * Enum: DIRECT, PICKUP, COURIER, YANDEX_DELIVERY
     */
    methodType: EnumShippingMethodType;

    /**
     * Courier option, if methodType == COURIER
     */
    courierOption?: CourierOption;

    /**
     * Pickup option, if methodType == PICKUP
     */
    pickupOption?: PickupOption;

    /**
     * Yandex Delivery option, if methodType == YANDEX_DELIVERY
     */
    yandexDeliveryOption?: YandexDeliveryOption;
}
