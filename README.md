# Yandex Pay API

A TypeScript/JavaScript client for the Yandex Pay API that helps you easily integrate Yandex Pay into your Node.js applications.

## Documentation

This package is based on the [official Yandex Pay API documentation](https://pay.yandex.ru/docs/en/custom/backend/yandex-pay-api/).

## Installation

```bash
pnpm add @lexriver/yandex-pay
```

## Usage

### Initialize the client

```typescript
import { YandexPayAPI } from '@lexriver/yandex-pay';

const yandexPay = new YandexPayAPI({
    apiKey: 'your-api-key',
    sandbox: true // set to false for production
});
```

### Create an order

```typescript
const order = await yandexPay.orders.createOrder({
    cart: {
        items: [
            {
                productId: 'product-1',
                title: 'Product Name',
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
    orderId: 'order-123',
    currencyCode: 'RUB',
    redirectUrls: {
        onSuccess: 'https://your-site.com/success',
        onError: 'https://your-site.com/error'
    },
    availablePaymentMethods: ['CARD']
});

// Redirect user to the payment URL
console.log(order.paymentUrl);
```

### Get order details

```typescript
const orderDetails = await yandexPay.orders.getOrder('order-123');
```

### Cancel an order

```typescript
const cancelResult = await yandexPay.orders.cancelOrder('order-123', {
    reason: 'Customer canceled'
});
```

### Refund an order

```typescript
const refundResult = await yandexPay.orders.refundOrder('order-123', {
    amount: '100.00'
});
```

### Capture (confirm) an order payment

```typescript
const captureResult = await yandexPay.orders.captureOrder('order-123', {
    cart: {
        // Final cart after possible modifications
        items: [
            {
                productId: 'product-1',
                title: 'Product Name',
                quantity: {
                    count: '1'
                },
                total: '100.00'
            }
        ],
        total: {
            amount: '100.00'
        }
    }
});
```

### Get operations for an order

```typescript
const operations = await yandexPay.operations.getOperations('order-123');
```

### Create a subscription

```typescript
const subscription = await yandexPay.subscriptions.createSubscription({
    subscriptionPlanId: 'plan-123',
    returnUrls: {
        onSuccess: 'https://your-site.com/success',
        onError: 'https://your-site.com/error'
    }
});

// Redirect user to confirmation URL
console.log(subscription.confirmationUrl);
```

### Make a recurring payment

```typescript
const recurringPayment = await yandexPay.subscriptions.makeRecurringPayment({
    customerSubscriptionId: 'subscription-123',
    amount: '100.00',
    purpose: 'Monthly payment'
});
```

### Get subscription details

```typescript
const subscriptionDetails = await yandexPay.subscriptions.getSubscription(
    'subscription-123', 
    true // Check if the card is active
);
```

## API Reference

The package provides a type-safe interface to the Yandex Pay API organized into the following services:

### OrderService

- `createOrder(data)` - Create a new order
- `getOrder(orderId)` - Get order details
- `cancelOrder(orderId, data)` - Cancel an order
- `refundOrder(orderId, data)` - Refund an order
- `refundOrderV2(orderId, data)` - Refund an order (V2 API)
- `captureOrder(orderId, data)` - Capture (confirm) an order payment
- `rollbackOrder(orderId)` - Rollback (void) an order payment
- `submitOrder(orderId, data)` - Submit an order for processing

### OperationService

- `getOperation(externalOperationId)` - Get details about a specific operation

### SubscriptionService

- `createSubscription(data)` - Create a new subscription
- `makeRecurringPayment(data)` - Make a recurring payment for a subscription
- `getSubscription(subscriptionId, checkCardActive)` - Get subscription details

## License

ISC 