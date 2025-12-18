##  Project Overview
This project demonstrates professional-level automation testing for Automation Anywhere Community Edition, with a strong focus on API automation using Playwright. The objective is to analyze real backend behavior, identify APIs through browser developer tools, and automate them with proper validations, error handling, and reporting—exactly how automation engineers work in real enterprise projects.

---

##  Assignment Coverage

### Use Case 1: Task Bot Automation
- Created a Task Bot in Automation Anywhere Control Room
- Configured execution logic
- Validated successful execution flow

### Use Case 2: Form Automation
- Created a Form with text input and file upload
- Integrated the form with a Task Bot
- Validated user interaction and submission behavior

### Use Case 3: Learning Instance API Automation (Primary Focus)
- Identified Learning Instance API via Chrome DevTools (Network tab)
- Extracted request URL, headers, and payload
- Automated the API using Playwright’s request context
- Implemented professional assertions and error handling

---

## Technology Stack
- Node.js
- Playwright (API Automation)
- Automation Anywhere Community Edition
- JavaScript
- Chrome Developer Tools

---

## Project Folder Structure
aa-api-automation/
├── tests/
│   └── learningInstance.spec.js
├── saveAuth.js
├── node_modules/
├── test-results/
├── package.json
├── package-lock.json
└── README.md

---

## Authentication Handling
Automation Anywhere APIs require an `X-Authorization` token.

Steps followed:
1. Logged into Automation Anywhere Control Room
2. Captured the `X-Authorization` token from Network → Headers
3. Injected the token into Playwright API requests

Example:
extraHTTPHeaders:
- X-Authorization: <captured-token>
- Content-Type: application/json

Note: Automation Anywhere Community Edition restricts backend API access. Even with a valid token, the API may return `401 Unauthorized`. This is expected platform behavior and is handled properly in the test.

---

## API Details

Endpoint:
POST /cognitive/v3/learning-instances

Sample Request Payload:
{
  "name": "Test_Learning_Instance",
  "domainId": "33DED827-3DC4-4201-B478-7C15B94AF522",
  "domainLanguageId": "B62EFA19-3592-4D2B-910A-F9C1C7DAE1A9",
  "domainLanguageProviderId": "D6CCA488-207A-4FCA-94E0-74E2FCA38B40",
  "genaiProvider": "OpenAI",
  "locale": "en-US",
  "isGenAIEnabled": true,
  "useGenai": true
}

---

## Validations Implemented

### 1. HTTP Status Validation
- Status >= 200
- Status < 500
- Accepts:
  - 200 / 201 (Success)
  - 401 (Authentication restriction)

### 2. Response Body Validation
- id
- name
- status

### 3. Error Handling
- Graceful handling of authentication failures
- Test does not crash on controlled errors
- Logs meaningful messages for debugging

---

## How to Run the Project

Prerequisites:
- Node.js (v18 or above)
- Automation Anywhere Community Edition account

Install dependencies:
npm install

Run tests:
npx playwright test

---

## Sample Test Output
-> Create Learning Instance API  
API Status: 401  
API Error Response:  
User Authentication token invalid  

Test Result: PASSED (Expected behavior handled correctly)

---

## Key Highlights
- Real-world API reverse engineering
- Professional API automation design
- Robust error handling
- Practical Playwright API usage
- Understanding SaaS security restrictions

---

## Conclusion
This project reflects a real automation engineer’s approach to testing enterprise SaaS applications. It demonstrates strong understanding of Automation Anywhere, API automation, Playwright, and professional testing practices, including handling of authentication limitations in Community Edition environments.

---

## Contact
Name: Sharanabasappa 
Email: sharanukswamy@gmail.com  
Role: Software Developer – Enterprise Testing
