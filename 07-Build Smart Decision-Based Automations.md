# Logic Lord
- A Logic Lord controls how automations makes decisions.
- Knows when, why, and where data should go `if`, `else if`, and `else` statements.
- Uses logic nodes to handle real-world scenarios.
- Builds workflows that act like a smart assistan not a robot.
- Understands business rules and user needs not just connections.

## Logic Nodes
- **If Node**: 
    - Used for simple true/false decisions.
    - Example: If a customer's order total is over $100, apply a discount.

- **Switch Node**:
    - Used for multiple conditions.
    - Also known as *traffic controller* node.
    - Example: If a support ticket is "High", assign to senior team; if "Medium", assign to regular team; if "Low", assign to self-service.


# Best Practices With If Node

### **Step 1: Google Sheets Trigger**
1. Add **Google Sheets Trigger** node
2. Configure:
   - **Trigger Event**: `Row Added`
   - **Spreadsheet**: Select your Google Sheet
   - **Worksheet**: Select the correct sheet
   - **From Row**: `2` (Row 1 contains headers)
3. Authenticate using **OAuth 2.0**
4. Save the node

📌 This trigger fires automatically whenever a new row is added.

---

### **Step 2: IF Node (Priority Filter)**
1. Add an **IF** node
2. Set the condition:
   - **Value 1**:
     ```
     {{ $json.Priority }}
     ```
   - **Operation**: `Equals`
   - **Value 2**:
     ```
     High
     ```
3. Connect:
   - **True** → Gmail node
   - **False** → Leave unconnected (no email)

📌 This ensures emails are sent **only for High-priority tasks**.

---

### **Step 3: Gmail – Send a Message**
1. Add **Gmail** node
2. Configure:
   - **Resource**: Message
   - **Operation**: Send
   - **To**:
     ```
     {{ $json.Email }}
     ```
   - **Subject**:
     ```
     Task Allocation – Urgent
     ```
   - **Email Type**: `Text`
   - **Message**:
     ```
     Hi {{ $json.Name }},

     Your assigned task is: {{ $json.Task }}.

     Please complete it as soon as possible.

     Regards,
     Task Manager
     ```

3. Authenticate Gmail using **OAuth 2.0**
4. Save the node


# Switch Node Best Practices
### **Step 1: Google Sheets Trigger**
1. Add **Google Sheets Trigger** node
2. Configure:
   - **Trigger Event**: `Row Added`
   - **Spreadsheet**: Select your Google Sheet
   - **Worksheet**: Select the correct sheet
   - **From Row**: `2` (Row 1 contains headers)
3. Authenticate using **OAuth 2.0**
4. Save the node
📌 This trigger fires automatically whenever a new row is added .
---
### **Step 2: Switch Node (Department Router)**
1. Add a **Switch** node
2. Set the condition:
   - **Value**:
     ```
     {{ $json.Department }}
     ```
   - **Operation**: `Equals`
   - **Cases**:
     - Case 1: `Sales` → Connect to Sales Team Gmail node
     - Case 2: `Support` → Connect to Support Team Gmail node
     - Case 3: `HR` → Connect to HR Team Gmail node
📌 This routes tasks to the correct department based on the "Department" field.
---
### **Step 3: Gmail – Send to Sales Team**
1. Add **Gmail** node for Sales Team
2. Configure:
   - **Resource**: Message
   - **Operation**: Send
   - **To**:
     ```
     {{ $json.SalesEmail }}
     ```
    - **Subject**:
      ```
        New Task Assigned – Sales
        ```
    - **Email Type**: `Text`
    - **Message**:
      ```
      Hi Sales Team,

      A new task has been assigned: {{ $json.Task }}.

      Please address it promptly.

      Regards,
      Task Manager
      ```
3. Authenticate Gmail using **OAuth 2.0**
4. Save the node
---
### **Step 4: Gmail – Send to Support Team**
1. Add **Gmail** node for Support Team
2. Configure:
    - **Resource**: Message
    - **Operation**: Send
    - **To**:
      ```
      {{ $json.SupportEmail }}
      ```
    - **Subject**:
      ```
      New Task Assigned – Support
      ```
    - **Email Type**: `Text`
    - **Message**:
      ```
      Hi Support Team,
    
      A new task has been assigned: {{ $json.Task }}.
    
      Please address it promptly.
    
      Regards,
      Task Manager
      ```
3. Authenticate Gmail using **OAuth 2.0**
4. Save the node
---
### **Step 5: Gmail – Send to HR Team**
1. Add **Gmail** node for HR Team
2. Configure:
    - **Resource**: Message
    - **Operation**: Send
    - **To**:
      ```
      {{ $json.HREmail }}
      ```
    - **Subject**:
      ```
      New Task Assigned – HR
      ```
    - **Email Type**: `Text`
    - **Message**:
      ```
      Hi HR Team,
    
      A new task has been assigned: {{ $json.Task }}.
    
      Please address it promptly.
    
      Regards,
      Task Manager
      ```
3. Authenticate Gmail using **OAuth 2.0**
4. Save the node
