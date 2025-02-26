
# ZMCR Online Thrift Store

## Project Overview
ZMCR Online Thrift Store is a web-based platform built using the MERN (MongoDB, Express.js, React, Node.js) stack. It allows users to buy and sell second-hand fashion items. The platform has three types of users:
- **Admin**: Manages the platform and user activities.
- **Sellers**: List and sell second-hand fashion items.
- **Customers**: Browse and purchase products.
- **Donors**: Donate clothing items to the platform.

## Features
- User authentication and role-based access control
- Product listing, updating, and deletion
- Shopping cart and checkout system
- Donation feature for users to give away clothes
- Admin panel for managing users and products

## Installation & Setup
### Prerequisites
Ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/)
- npm or yarn

### Backend Setup
````sh
# Navigate to the server folder
cd server

# Install dependencies
npm install

# Create a .env file and add required environment variables

# Start the backend server
npm start
````

### Frontend Setup
````sh
# Navigate to the client folder
cd client

# Install dependencies
npm install

# Start the frontend application
npm start
````

## API Endpoints

### Admin Routes
````sh
POST /api/admin/register  # Register a new admin
POST /api/admin/login     # Admin login
GET /api/admin/:id        # Fetch admin details
````

### User Routes
````sh
POST /api/users/register  # Register a new user
POST /api/users/login     # User login
GET /api/users/:id        # Fetch user profile
````

### Product Routes
````sh
POST /api/products        # Add a new product
GET /api/products         # Fetch all products
PUT /api/products/:id     # Update product details
DELETE /api/products/:id  # Delete a product
````

## Contribution
````sh
1. Fork the repository
2. Create a feature branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Add new feature'`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request
````

## License
````sh
This project is licensed under the MIT License.
````
````

