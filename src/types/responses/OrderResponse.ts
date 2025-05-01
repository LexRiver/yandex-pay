import { Delivery } from "../Delivery.js";

import { Order } from "../Order.js";
import { OrderResponseOperation } from "./OrderResponseOperation.js";

export interface OrderResponse {
    delivery: Delivery;
    order: Order;
    operations: OrderResponseOperation[]
} 