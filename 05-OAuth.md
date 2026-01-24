# Connect Google Apps WITHOUT Passwords (OAuth):

- OAuth is a secure login and permission system.
- It allows n8n to access other apps without sharing your password.
- Used to connect apps like Google, Gmail, Drive, Slack, GitHub, etc.
- Access is given using tokens, not passwords.

# Important OAuth Concepts:
- More secure than passwords.
- Uses tokens for access.
- Password is never stored in n8n.
- Access can be revoked anytime.
- Trusted and widely used method.
- Needed for most modern APIs.

# How to connect Google Apps using OAuth in n8n:

- step 1. Open google cloud console: https://console.cloud.google.com/
- step 2. search for *APIs & Services* and click on *Enable APIs and Services*.
- step 3. Search for the API you want to use (e.g., Gmail API, Google Drive API) and enable it.
- step 4. After this clcik on *OAuth consent screen* from left sidebar.
- step 5. click on *Get Started* button and give the required details and add **Add URI** copy from n8n.
- step 6. After this you will see url-id and secret code. Copy these two.
- step 7. Now open n8n and create a new workflow.
- step 8. Add a node for the Google service you want to use (e.g., Gmail, Google Drive).
- step 9. In the node, go to the *Credentials* section and click on *Create New*.
- step 10. Select *OAuth2* as the authentication method.
- step 11. Fill in the required fields:
    - **Client ID**: Paste the Client ID from Google Cloud Console.
    - **Client Secret**: Paste the Client Secret from Google Cloud Console.
    - **Auth URL**: Use the default URL provided by n8n for Google OAuth2.
    - **Token URL**: Use the default URL provided by n8n for Google OAuth2.

- step 12. Click on *Connect* to initiate the OAuth flow.
- step 13. A new window will open asking you to log in to your Google account and grant permissions to n8n.
- step 14. After granting permissions, you will be redirected back to n8n, and the credentials will be saved.
- step 15. Now you can use the node to interact with the Google service without needing to enter your password.

- At last check in audience in goolge cloud console , it should be public user.


# Create workflow that will create one sheet in Google Sheets when user executes the workflow:
```bash
- step 1. Create a new workflow in n8n.
- step 2. Add a trigger node of manual to start the workflow.
- step 3. Add a Google Sheets node to the workflow.
- step 4. In the Google Sheets node, select the credentials you created using OAuth.
- step 5. Set the operation to "Create Sheet".
- step 6. Provide the necessary details like Spreadsheet ID and Sheet Name.
- step 7. Connect the trigger node to the Google Sheets node.
- step 8. Save the workflow and execute it manually.
- step 9. Check your Google Sheets to see the newly created sheet.
- step 10. You have successfully created a workflow that creates a new sheet in Google Sheets using OAuth authentication!
```