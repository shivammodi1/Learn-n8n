# n8n Workflow: Google Sheets → Switch → Gmail → Merge → Gmail

## Purpose
Automatically send emails based on the **Payment** type when a new row is added in Google Sheets, merge all conditional paths, and send a final common email.

---

## Google Sheet Structure

| Column | Field   |
|-------|---------|
| A     | Name    |
| B     | OrderID |
| C     | Email   |
| D     | Payment |

Accepted **Payment** values:
- Card
- COD
- UPI

---

## Step 1: Google Sheets Trigger
- Add **Google Sheets Trigger**

## Step 2: Switch Node (Payment Condition)
- Add a **Switch** node to route based on **Payment** type:
  - **Value 1:** Card → Output 1
  - **Value 2:** COD → Output 2
  - **Value 3:** UPI → Output 3


## Step 3: Gmail Nodes (Conditional Emails)

### Gmail – Card Payment
- Connect: **Switch → Output 1**
- **To:** `{{$json["Email"]}}`
- **Subject:** Card Payment Successful
- **Message:**
  ```
  Dear {{$json["Name"]}},
  
  Your order with Order ID {{$json["OrderID"]}} has been successfully processed using Card payment.
  
  Thank you for shopping with us!
  ```
### Gmail – COD Payment
- Connect: **Switch → Output 2**
- **To:** `{{$json["Email"]}}`
- **Subject:** COD Payment Confirmed
- **Message:**
  ```
  Dear {{$json["Name"]}},
  
  Your order with Order ID {{$json["OrderID"]}} has been confirmed for Cash on Delivery (COD).
  
  Thank you for shopping with us!
  ```

### Gmail – UPI Payment
- Connect: **Switch → Output 3**
- **To:** `{{$json["Email"]}}`
- **Subject:** UPI Payment Successful
- **Message:**
  ```
  Dear {{$json["Name"]}},
  
  Your order with Order ID {{$json["OrderID"]}} has been successfully processed using UPI payment.
  
  Thank you for shopping with us!
  ```
## Step 4: Merge Node
- Add a **Merge** node to combine all paths from the Gmail nodes.
- Connect: All three Gmail nodes to the Merge node.
- **Mode:** Wait for All Inputs
## Step 5: Final Gmail Node (Common Email)
- Connect: **Merge Node → Final Gmail Node**
- **To:** `{{$json["Email"]}}`
- **Subject:** Order Processed Successfully
- **Message:**
  ```
  Dear {{$json["Name"]}},
  
  Your order with Order ID {{$json["OrderID"]}} has been processed successfully.
  
  We appreciate your business and look forward to serving you again!
  ```
---
## Summary
This workflow demonstrates how to use the Merge Node in n8n to handle multiple conditional paths based on payment types and send a final common email after all conditions are processed.
