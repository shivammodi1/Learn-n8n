# 🚀 EliteCode AI Cold Email Automation Workflow (n8n)

## 📌 Overview

This workflow receives data from a frontend HTML form → generates a
personalized cold email using AI → sends the email automatically via
Gmail → returns the generated email back to the frontend.

------------------------------------------------------------------------

# 🔁 Complete Flow Structure

Webhook\
→ Message a Model (Gemini)\
→ Code (JavaScript)\
→ Send a Message (Gmail)\
→ Respond to Webhook

------------------------------------------------------------------------

# 🧩 Step-by-Step Node Explanation

## 1️⃣ Webhook Node

### Purpose:

Receives data from the frontend form.

### Receives:

-   clientName\
-   clientEmail\
-   service

### Why Used:

Connects frontend with n8n automation.

### Important Setting:

-   Method: POST\
-   Response Mode: Using "Respond to Webhook" node

------------------------------------------------------------------------

## 2️⃣ Message a Model (Gemini AI)

### Purpose:

Generates a personalized cold email using AI.

### Example Prompt:

Write a professional cold email for:

Name: {{$json.clientName}} Service: {{$json.service}}

Include: - Personalized opening\
- Problem statement\
- Solution\
- Strong conclusion with call to action

### Why Used:

Automates dynamic and personalized outreach.

------------------------------------------------------------------------

## 3️⃣ Code (JavaScript) Node

### Purpose:

Cleans and formats the AI response.

### Example Code:

``` javascript
return [
  {
    email: $json.candidates[0].content.parts[0].text
  }
];
```

### Why Used:

AI response is complex JSON. This extracts clean email text for Gmail
and frontend.

------------------------------------------------------------------------

## 4️⃣ Send a Message (Gmail Node)

### Purpose:

Automatically sends generated email to the target client.

### Required Fields:

-   To → {{\$json.clientEmail}}\
-   Subject → Dynamic subject\
-   Body → {{\$json.email}}

### Why Used:

Removes manual email sending. Enables automation.

------------------------------------------------------------------------

## 5️⃣ Respond to Webhook Node

### Purpose:

Returns generated email back to frontend UI.

### Example Return:

{{\$json.email}}

### Why Used:

Displays the generated email in frontend result section.

------------------------------------------------------------------------

# 🧠 Workflow Logic Summary

1.  User fills the form\
2.  Webhook receives data\
3.  Gemini generates personalized email\
4.  JavaScript node extracts clean text\
5.  Gmail sends email automatically\
6.  Respond node returns email to frontend

------------------------------------------------------------------------

# 🎯 Business Use Cases

-   Client acquisition automation\
-   Freelancing outreach\
-   Startup pitching\
-   AI-powered sales system\
-   Mini SaaS foundation

------------------------------------------------------------------------

# 🏆 Technical Skills Demonstrated

-   Webhook integration\
-   AI prompt engineering\
-   JSON parsing\
-   Automation architecture\
-   Gmail API integration\
-   Frontend + Backend connectivity

------------------------------------------------------------------------

# 🔥 Final Conclusion

This workflow acts as an:

**AI Powered Cold Outreach Engine**

It: - Generates personalized emails\
- Sends them automatically\
- Returns response to frontend\
- Saves time and scales outreach
