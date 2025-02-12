# Customer ID Management - React App

## Overview
This is a React-based web application that interacts with a REST API to manage customer IDs. It allows users to:
- Add new customer IDs.
- Check if a customer ID already exists in the system.

The app uses AWS services like **API Gateway**, **Lambda**, **DynamoDB**, and **Step Functions** to handle the backend functionality, while **S3** and **CloudFront** are used to host and serve the static website.

---

## Features
- **Add Customer ID**: Allows users to add a new customer ID.
- **Check Customer ID**: Allows users to check if a customer ID already exists.
- **Responsive Design**: The app is designed to be mobile-friendly and user-friendly.
- **Serverless Backend**: The backend is powered by AWS services like API Gateway, Lambda, and DynamoDB.
- **CORS enabled** for API calls between the frontend and backend.

---

## Technologies Used
- **Frontend**:
    - React.js
    - HTML, CSS (with custom styling)
    - Axios for API requests
- **Backend**:
    - AWS API Gateway
    - AWS Lambda (Python)
    - AWS DynamoDB
- **Hosting**:
    - AWS S3 for static site hosting
    - AWS CloudFront for secure delivery over HTTPS
- **Version Control**: Git, GitHub

---

## Requirements
- Node.js (>=16.0.0)
- npm (>=7.0.0)

---

## Setup Instructions

### 1. Clone the repository
```bash
git clone https://github.com/ilanaBrodsky/react-app-aws-customers.git
cd react-app-aws-customers
