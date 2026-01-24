# What is Data Flow in n8n?
- Data flow refers to how data moves through the nodes in an n8n workflow.
- Each node can receive, process, and send data to the next node.
- In n8n, data flows from one node to another, allowing for complex automation processes.

# DCI (Dynamic Content Injection)
- DCI means using real data insted of formed or static data.
- Content changes dynamically based on the input data.
- Data is pulled from previous nodes and inserted dynamically into subsequent nodes.


# Dynamic Email Task Manager
- When a user details added in the Google Sheet, an email is sent to the user with their task details.

## Steps to Implement:
1. **Google Sheets Node**:
    - Trigger the workflow when a new row is added.
    - Add creadentials and select the spreadsheet and worksheet.
    - create client ID and client secret from Google Cloud Platform.
2. **Gmail Node**:
    - Connect to Gmail using OAuth2 credentials.
    - Use dynamic content injection to pull user details from the Google Sheets node.
    - Compose the email body with task details using data from the Google Sheets node.
3. **Set up the Workflow**:
    - Connect the Google Sheets node to the Gmail node.
    - Test the workflow by adding a new row in the Google Sheet.
    - Verify that the email is sent with the correct task details.
## Example Email Body:
```
Hello {{ $node["Google Sheets"].json["Name"] }},
Your task for today is: {{ $node["Google Sheets"].json["Task"] }}.
Please complete it by the end of the day.
Best regards,
Task Manager Team
```
## Testing the Workflow:
- Add a new row in the Google Sheet with user details and task information.
- Check the Gmail account to ensure the email was sent correctly with the dynamic content.
- Adjust the workflow as needed based on testing results.

    