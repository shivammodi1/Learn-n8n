# Loop Over Items
----
1. Loop Over items means *processing the data one by one* instead of all at once.
2. This is useful when dealing with large datasets or when each item requires individual attention.
3. n8n takes a list of items and processes them one at a time in a loop.
4. *Batching* means **breaking a big list into small safe groups to avoid the issues that come with processing too many items at once**.
----

# Loop Over Important Points
----
1. *Prevent* the workflow *crashing* due to too many items.
2. Use *batching* to process items in smaller groups.
3. Monitor for *timeouts*, *memory limits*, and *API rate limits*.
4. It will makes our automations *scalable* and *reliable*.
4. Always implement *error handling* for individual items.
5. Without looping over items, automations may fail or become inefficient.
----


---- 
# My automation works fine with 20 items, but fails with 10000 items. Why?
- So when we loop over in small numbers of items, everything works find.
- but dikkat tab aati hain jab humare paas bahut zyada items hote hain, jaise ki 10000.
- toh iske peeche kuch wajah ho sakti hain:
  1. **Timeouts**: Bahut zyada items ko process karne mein zyada samay lagta hain, aur automation tool ka timeout limit cross ho sakta hain.
    2. **Memory Limits**: Zyada items ko handle karne se memory usage badh sakta hain, jo ki automation tool ke memory limits ko exceed kar sakta hain.
    3. **API Rate Limits**: Agar aap kisi external service ko call kar rahe hain, toh wo service ke rate limits cross ho sakte hain jab aap bahut zyada requests bhejte hain.
    4. **Error Handling**: Kabhi kabhi ek item mein error hone se pura loop fail ho sakta hain, isliye error handling ka dhyan rakhna zaroori hain.
- Isliye, jab humare paas bahut zyada items hote hain, toh humein unhe chhote batches mein process karna chahiye, jisse ki hum in problems se bach sakein.
----

----
# What is Summerize Node?
- Summersize node collects data from all nodes and combines them into a single output.
- Covert many items into final item.
- Used after loops to get counts, total, or final status.
----

----
# What is Wait Node?
- Wait node pauses the worflow for a specified time.
- Useful to avoid hitting API rate limits.
- Worflow resumes after the wait time.
- Time can be set in seconds, minutes, or hours.
----
----
## Worflow

# n8n Workflow – Google Sheets → Loop → Email + Summary

## Workflow Flow

Google Sheets Trigger  
→ Loop Over Items  
→ (loop) Send Email → Wait → Loop Over Items  
→ (done) Summarize → Send Summary Email

---

## 1. Google Sheets Trigger

**Node:** Google Sheets Trigger  
**Event:** Row Added  

**Config:**
- Credentials: Google Sheets OAuth
- Spreadsheet ID: Your Spreadsheet
- Sheet Name: Sheet1
- Trigger Event: Row Added
- Range: Optional (A:D)

---

## 2. Loop Over Items

**Node:** Loop Over Items  

**Purpose:** Iterate over each new row

**Outputs:**
- `loop` → Per item execution
- `done` → After all items processed

---

## 3. Send Email (Loop)

**Node:** Send a message  
**Type:** Gmail  

**Config:**
- To: `{{$json["email"]}}`
- Subject: New Sheet Entry
- Body:
    ```
    Hello {{$json["name"]}},
    
    A new entry has been added to the Google Sheet:
    
    Name: {{$json["name"]}}
    Email: {{$json["email"]}}
    Message: {{$json["message"]}}
    
    Best regards,
    Your Team
    ```

---

## 4. Wait

**Node:** Wait  

**Config:**
- Mode: Time Interval
- Duration: 2 seconds

**Connection:**  
Wait → Loop Over Items

---

## 5. Summarize

**Node:** Summarize  

**Purpose:** Combine all processed rows

**Config:**
- Mode: Combine Items
- Fields: name, email, id

---

## 6. Send Summary Email

**Node:** Send a message1  
**Type:** Gmail  

**Config:**
- To: admin@example.com
- Subject: Google Sheets Summary
- Body:
`   Summary of new entries:
    
    {{$json["summary"]}}
    
    Total Entries: {{$json["total"]}}
    
    Best regards,
    Your Team
    ``` 

---

