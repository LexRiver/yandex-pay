import 'dotenv/config';
import { YandexPayAPI } from '../src/YandexPayAPI.js';
import { EnumAllowedPaymentMethods } from '../src/enums/EnumAllowedPaymentMethods.js';
// console.log('env=',process.env)

// Sample code demonstrating how to create an order with Yandex Pay API
const createOrder = async () => {
    try {
        // Initialize the API client
        const yandexPay = new YandexPayAPI({
            apiKey: process.env.YANDEX_PAY_API_KEY ?? '<no-api-key>', // Replace with your actual API key
            sandbox: true // Use sandbox environment for testing
        });
        
        // Create an order
        const order = await yandexPay.orders.createOrder({
            cart: {
                externalId: 'test-cart-id',
                items: [
                    {
                        productId: 'product-1',
                        title: 'Test Product',
                        quantity: {
                            count: '1'
                        },
                        total: '100.00'
                    }
                ],
                total: {
                    amount: '100.00'
                }
            },
            orderId: `order-001`, // Generate a unique order ID
            currencyCode: 'RUB',
            redirectUrls: {
                onSuccess: 'https://your-site.com/success',
                onError: 'https://your-site.com/error'
            },
            availablePaymentMethods: [EnumAllowedPaymentMethods.Card]
        });
        
        console.log('Order created successfully');
        console.log(`Payment URL: ${order.paymentUrl}`);
        
        // In a real application, you would redirect the user to the payment URL
        // window.location.href = order.paymentUrl;
    } catch (error) {
        console.error('Error creating order:', error);
    }
};

// Call the function
createOrder(); 