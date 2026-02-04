# Weather Alert Automation Workflow

This workflow fetches weather data from an external API and sends an email notification based on a condition.

---

## Step 1: Trigger – Execute Workflow
- **Trigger Type:** Manual
- **Name:** When clicking “Execute workflow”
- **Purpose:**  
  Starts the workflow manually when the user clicks the execute button.

---

## Step 2: HTTP Request – Fetch Weather Data
- **Action:** HTTP Request
- **Method:** GET
- **URL:**  
  `https://api.weatherapi.com/v1/current.json`
- **Purpose:**  
  Sends a request to the Weather API to retrieve current weather data.
- **Output:**  
  Weather information such as temperature, condition, etc.

- Add Query Parameters:
  - `key`: Your API key for authentication.
  - `q`: Location for which to fetch the weather data (e.g., city name or coordinates).
  - `aqi`: Air quality index (optional, e.g., 'no' to exclude).

---

## Step 3: Conditional Check – IF Node
- **Action:** If
- **Purpose:**  
  Evaluates a condition based on the weather API response.
- **Logic:**  
  - If the condition is **true**, the workflow continues to send an email.
  - If the condition is **false**, the workflow stops or follows an alternate path.

---

## Step 4: Send Message – Gmail
- **Action:** Send a message
- **Service:** Gmail
- **Purpose:**  
  Sends an email notification when the IF condition evaluates to `true`.
- **Triggered When:**  
  Weather condition matches the defined rule in the IF node.

---

## Workflow Summary
1. Manual trigger starts the workflow.
2. Weather data is fetched using an HTTP GET request.
3. The response is checked using an IF condition.
4. If the condition is satisfied, an email is sent via Gmail.

---
