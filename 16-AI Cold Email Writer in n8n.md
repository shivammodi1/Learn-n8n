# AI Cold Email Writer in n8n
- With help of n8n, we can automate the process of writing and sending cold email using AI.
- We will use Gemini AI to generate personalized cold emails based on the input data received from a frontend form.
- The workflow will consist of the following steps:
  1. Webhook: To receive data from the frontend form.
  2. Message a Model (Gemini): To generate a personalized cold email using AI.
  3. Code (JavaScript): To process the generated email and prepare it for sending.
  4. Send a Message (Gmail): To send the generated email automatically via Gmail.
  5. Respond to Webhook: To return the generated email back to the frontend.