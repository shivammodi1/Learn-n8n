# Master n8n Code Node (Function Node)
- It allow us to *write custom JavaScript code(or any small code)* inside n8n workflow.
- It hepls you *read, change, and create data the way you want*.
- It gives *custom control over workflow data*.


## Why it is called as "Brain Node of n8n"?
- It can *apply logic* to data.
- It can *decide which data need to be keep and which data need to be removed*.
- It can *calculate, format, and restructure results*.
- When *normal nodes are enough to do the work, you can use this node to do the work*.
- It can *clean messy API responses*.
- It can *combine or split data*.
- It can *perform complex calculations*.
- It can *handle errors and exceptions*.
- It can *create custom functions* to reuse in multiple places.
- It will prepare data before sending to other nodes.

## What is Parsing Data?
- PArsing means *reading and extracting useful information* from raw data.
- Take full API JSON -> Extract name, email, amount ony.
- Convert *complex data* into *simple format* for other nodes.

## What is Transforming Data?
- Transforming means *changing the structure or format* of data.
- Examples : 
    - Change date format from "2024-06-01" to "June 1, 2024".
    - Convert currency from USD to EUR.
    - Merge first name and last name into full name.
- It helps to *make data compatible* with other nodes or systems.

## Common Use Cases of Code Node:
- *Rename Fields*: Change "first_name" to "firstName".
- *Add new Fields*: Create "fullName" by combining "firstName" and "lastName".
- *Remove Unnecessary Fields*: Keep only "name" and "email", remove others.
- *Format Data*: Change date format, convert currency, etc.
- *Build Custom JSON Objects*: Create new JSON structure for API requests.
- "*Loop through Items*: Process each item in an array and modify it.
- *Conditional Logic*: If amount > 100, add "highValue": true.

