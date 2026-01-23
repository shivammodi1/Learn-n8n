# What is a Node in n8n?
- A node is a single step in an automation workflow.
- Eacn node performs one specific task, such as sending an email, making an API call, or manipulating data.
- Nodes are connected to build workflow logic.

# What is Trigger?
- A trigger starts the automation.
- It decides when the workflow should run.
- Every workflow at least have one trigger node.

# Types of Triggers

1. **Manual Trigger**
   - Starts the workflow manually by the user.
   - Useful for testing or one-time tasks.

2. **Webhook Trigger**
   - Starts when data is sent from another app.
    - Commonly used for real-time data processing.

3. **Schedule Trigger**
    - Runs at a fixed time or interval.
    - Ideal for regular tasks like daily reports.

4. **App Event Trigger**
    - Runs when something happens in an app (e.g., new email received).
    - Useful for automating responses to specific events.

