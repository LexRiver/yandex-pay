import 'dotenv/config';
import { YandexPayAPI } from '../src/YandexPayAPI.js';

// Sample code demonstrating how to get order details with Yandex Pay API
const getOrderExample = async () => {
    try {
        // Initialize the API client
        const yandexPay = new YandexPayAPI({
            apiKey: process.env.YANDEX_PAY_API_KEY ?? '<no-api-key>', // Replace with your actual API key
            sandbox: true // Use sandbox environment for testing
        });
        
        // Replace with the actual order ID you want to retrieve
        const orderIdToGet = 'order-001'; 

        // Get the order details
        const orderDetails = await yandexPay.orders.getOrder(orderIdToGet);
        
        console.log('Order details retrieved successfully:');
        console.log(JSON.stringify(orderDetails, null, 4));
        console.log(orderDetails.order.paymentStatus)
        console.log(orderDetails.order.paymentUrl)
        console.log(orderDetails.order.orderId)
        console.log(orderDetails.order.orderAmount)
        
    } catch (error: any) {
        console.error(`Error getting order ${error?.config?.url}:`, error?.response?.data || error.message);
    }
};

// Call the function
getOrderExample();
