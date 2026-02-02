# What is an API?
---
- It stands for *Application Programming Interface*.
- Api is a bridge that allows two different applications to communicate with each other.
- It lets one app ask for data and another app provide that data.
- You dot't see APIs, but they work behind the scenes.
- Example:
```bash
 When you use a weather app, it uses an API to get weather data from a server.
```

# Why are APIs important in n8n?
- They let n8n connect with many different services and apps.
- With APIs, n8n can automate tasks by talking to other apps.
- This makes it easy to create workflows that involve multiple apps.
- Google sheets, Twitter, and many other services have APIs that n8n can use.
- Example:
```bash
 n8n can use the Twitter API to post tweets automatically.
```

# When Do we Use APIs in n8n?
- We use APIs when we want to connect n8n to other apps.
- Or Get data from another service.
- Or Send data to another service.
- Trigger workflows based on events in other apps.
- Example:
```bash
 When a new email arrives, n8n can use the email service's API to get the email details and start a workflow.
```

# API Vs Webhooks
- APIs are like a waiter you call when you want something.
- Webhooks are like a messenger that brings you something when it happens.
- With APIs, you ask for data when you need it.
- With Webhooks, you get data automatically when an event occurs.
- Example:
```bash
Using an API is like calling a restaurant to order food when you're hungry.
A Webhook is like the restaurant delivering food to you when it's ready.
```