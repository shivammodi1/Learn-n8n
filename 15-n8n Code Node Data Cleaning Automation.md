# n8n Data Parsing and Transformation Script

## Overview

This script is used inside a **Code Node** in n8n to clean, parse, and transform incoming data before sending it to the next step of a workflow (like a database, email, or CRM).

The script performs two main stages:

1. **Parsing** – Cleaning and extracting raw data.
2. **Transformation** – Formatting the data into a usable structure.

---

# Complete Script

```javascript
// Parsing :
const data = $json;

// Clean full name
const cleanFull = data.Full_Name.trim().replace(/\s+/g, " ");

// Split name
const part = cleanFull.split(" ");
const first = part[0] || "";
const last = part[1] || "";

// Clean email
let email = data.Email.trim();
let cleanEmail = email.toLowerCase();

// Clean amount
let rawAmount = data.Amount;
let AmountStr = String(rawAmount)
  .trim()
  .replace(/[^0-9.]/g, "");
const amount = parseFloat(AmountStr) || 0;

// Clean date
const rawDate = data.Date;

// Clean message
const message = data.Message.trim().replace(/\s+/g, " ");

// Transformation
function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}

const firstName = cap(first);
const lastName = cap(last);

const d = new Date(rawDate);
const niceDate = d.toDateString();

const subject = `Quote Request from ${firstName} - ${amount}`;

return {
  firstName,
  lastName,
  email: cleanEmail,
  amount,
  date: niceDate,
  message,
  subject,
};
```

---

# 1. Parsing Stage

Parsing means **cleaning and extracting useful information from raw input data**.

---

# Access Incoming Data

```javascript
const data = $json;
```

`$json` contains the data coming from the previous node in the workflow.

Example input:

```json
{
  "Full_Name": "   shivam   modi ",
  "Email": " SHIVAM@MAIL.COM ",
  "Amount": " ₹1,500 ",
  "Date": "2026-02-20",
  "Message": "  Need   pricing details "
}
```

---

# Cleaning the Full Name

```javascript
const cleanFull = data.Full_Name.trim().replace(/\s+/g, " ");
```

### trim()

Removes spaces at the start and end.

Example:

```
"   shivam   modi   "
```

Becomes

```
"shivam   modi"
```

### replace(/\s+/g, " ")

Removes extra spaces between words.

Result:

```
"shivam modi"
```

---

# Splitting First and Last Name

```javascript
const part = cleanFull.split(" ");
```

Example:

```
"shivam modi"
```

Becomes

```
["shivam", "modi"]
```

Extract values safely:

```javascript
const first = part[0] || "";
const last = part[1] || "";
```

If last name does not exist, the script will not crash.

---

# Cleaning the Email

```javascript
let email = data.Email.trim();
let cleanEmail = email.toLowerCase();
```

Example:

```
SHIVAM@MAIL.COM
```

Becomes

```
shivam@mail.com
```

This helps prevent duplicate records.

---

# Cleaning the Amount

```javascript
let rawAmount = data.Amount;
let AmountStr = String(rawAmount)
  .trim()
  .replace(/[^0-9.]/g, "");
```

This removes everything except numbers and decimals.

Example:

```
₹1,500
```

Becomes

```
1500
```

Convert to number:

```javascript
const amount = parseFloat(AmountStr) || 0;
```

---

# Cleaning the Message

```javascript
const message = data.Message.trim().replace(/\s+/g, " ");
```

Example:

```
"Need     pricing   details"
```

Becomes

```
"Need pricing details"
```

---

# 2. Transformation Stage

Transformation means **changing the cleaned data into a structured and formatted output**.

---

# Capitalizing Names

```javascript
function cap(s) {
  return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
}
```

Example:

```
shivam → Shivam
MODI → Modi
```

Apply function:

```javascript
const firstName = cap(first);
const lastName = cap(last);
```

---

# Formatting the Date

```javascript
const d = new Date(rawDate);
const niceDate = d.toDateString();
```

Example output:

```
Thu Feb 20 2026
```

---

# Creating an Email Subject

```javascript
const subject = `Quote Request from ${firstName} - ${amount}`;
```

Example:

```
Quote Request from Shivam - 1500
```

Useful for:

- Email notifications
- CRM automation
- Sales pipelines

---

# Final Output

```javascript
return {
  firstName,
  lastName,
  email: cleanEmail,
  amount,
  date: niceDate,
  message,
  subject,
};
```

Example output:

```json
{
  "firstName": "Shivam",
  "lastName": "Modi",
  "email": "shivam@mail.com",
  "amount": 1500,
  "date": "Thu Feb 20 2026",
  "message": "Need pricing details",
  "subject": "Quote Request from Shivam - 1500"
}
```

---

# Why This Is Important

This process helps:

- Clean messy user input
- Prevent database errors
- Normalize email addresses
- Convert currency into numbers
- Prepare data for automation workflows

---

# Summary

This script performs:

- Data cleaning
- Regex processing
- Name extraction
- Email normalization
- Numeric conversion
- Date formatting
- Structured output generation

It is a common real-world pattern used in **automation, backend APIs, and data pipelines**.
