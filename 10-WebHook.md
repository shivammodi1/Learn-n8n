# Webhooks
- A Webhook is a special URL.
- It waits for an event to happend.
- When something happens, data is sent instantly to that URL.
- No waiting, no checking needed.
- Webhooks are used for real-time data transfer between apps.

## Real-World Example of Webhooks
1. When a doorbell rings, you don’t keep checking the door again and again. You react only when the bell rings — just like a webhook reacts when an event happens.

2. In online shopping, when you place an order, the store’s system sends a webhook to the delivery service to notify them about the new order immediately.
- This way, the delivery service gets the order details right away without having to check for new orders repeatedly.
  ```
    Thank you for shopping with us!
    ```

## What is inside the Webhook Node?
- A Webhook Node has a unique URL.
- It listens for incoming data.
- Data sent in simple formats like JSON or XML.
- Example: Name, Email, OrderID, PaymentType.
- n8n reads and uses this data in workflows.