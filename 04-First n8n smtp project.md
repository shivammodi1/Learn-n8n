# First n8n SMTP Project

- step 1: Create a new workflow in n8n.
- step 2: Add schedule trigger node to run the workflow at specific intervals.
- step 3: Set time and frequency in the schedule trigger node.
- step 4: Add send email node than add details 
    - **SMTP account**: sender mail than app password than in Host (for gmail use smtp.gmail.com) than port (for gmail use 465).
    - **Operation**: send
    - **To**: recipient email address
    - **From**: sender email address
    - **Subject**: Email subject
    - **Text**: Email body content

- step 5: Connect schedule trigger node to send email node.
- step 6: Save and activate the workflow.

## So now, at the scheduled time, n8n will automatically send an email using the SMTP node!
