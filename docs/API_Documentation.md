# Lovecraftian E-Commerce API Documentation

This document describes the API endpoints available in the Lovecraftian E-Commerce backend. The API allows for user authentication, city management, orders, and reviews. Below are the available routes for the application.

## Authentication Endpoints

### POST `/api/auth/register`

Registers a new user.

#### Request Body

```json
{
  "username": "string",
  "email": "string",
  "password": "string"
}
```

Response
Status 201: User successfully created
json
Copy code
{
"message": "User created successfully"
}
Status 400: Invalid input
json
Copy code
{
"message": "Invalid data"
}
POST /api/auth/login
Logs in a user and returns a JWT token.

Request Body
json
Copy code
{
"email": "string",
"password": "string"
}
Response
Status 200: Login successful
json
Copy code
{
"token": "jwt_token_string"
}
Status 401: Invalid credentials
json
Copy code
{
"message": "Invalid email or password"
}
City Endpoints
GET /api/cities
Fetches a list of cities.

Query Parameters (optional)
search: Filter cities by name
category: Filter by category (e.g., "Historic", "Modern")
Response
Status 200: List of cities
json
Copy code
[
{
"id": 1,
"name": "R'lyeh",
"category": "Ancient",
"description": "A sunken city full of secrets.",
"price": 1000000
},
...
]
GET /api/cities/:id
Fetches detailed information for a specific city.

Path Parameters
id: The ID of the city
Response
Status 200: City details
json
Copy code
{
"id": 1,
"name": "R'lyeh",
"category": "Ancient",
"description": "A sunken city full of secrets.",
"price": 1000000,
"reviews": [
{
"user": "H.P. Lovecraft",
"rating": 5,
"comment": "A city full of cosmic horror."
}
]
}
Order Endpoints
POST /api/orders
Creates a new order.

Request Body
json
Copy code
{
"userId": 1,
"cityId": 1,
"quantity": 1
}
Response
Status 201: Order successfully created
json
Copy code
{
"message": "Order created successfully"
}
GET /api/orders/:id
Fetches order details by ID.

Path Parameters
id: The ID of the order
Response
Status 200: Order details
json
Copy code
{
"id": 1,
"userId": 1,
"cityId": 1,
"quantity": 1,
"status": "pending"
}
Review Endpoints
POST /api/reviews
Submit a review for a city.

Request Body
json
Copy code
{
"cityId": 1,
"userId": 1,
"rating": 5,
"comment": "An amazing city full of mysteries."
}
Response
Status 201: Review submitted successfully
json
Copy code
{
"message": "Review submitted successfully"
}
Admin Endpoints
GET /api/admin/cities
Fetch all cities for admin management.

Response
Status 200: List of cities
json
Copy code
[
{
"id": 1,
"name": "R'lyeh",
"price": 1000000,
"category": "Ancient"
},
...
]
DELETE /api/admin/cities/:id
Deletes a city from the database.

Path Parameters
id: The ID of the city to delete
Response
Status 200: City deleted successfully
json
Copy code
{
"message": "City deleted successfully"
}

### This API allows users to interact with the Lovecraftian E-Commerce platform by creating accounts, browsing cities, submitting reviews, and placing orders. Admin users have access to city and user management functionality.
