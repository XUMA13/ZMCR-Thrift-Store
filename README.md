# ZMCR Online Thrift Store

## Overview
ZMCR Online Thrift Store is a web application designed to connect sellers, donors, and customers in a shared platform for sustainable shopping. Leveraging the MERN (MongoDB, Express.js, React.js, Node.js) stack, this project creates an intuitive and functional marketplace for second-hand goods. The platform emphasizes environmental responsibility by promoting the reuse of items through selling and donations.

---

## Key Features

### 1. **User Roles**
- **Admin/Page Owner**: Manages the platform, oversees transactions, and maintains user records.
- **Clothes Donor**: Donates items to the platform for resale.
- **Customer**: Browses and purchases items available on the platform.

### 2. **Core Functionalities**
- **Seller Admin**: Manage users, donations, and transactions through a dedicated dashboard.
- **Donor Integration**: Allow donors to submit items with descriptions, pictures, and conditions.
- **Customer Experience**: Enable customers to browse the catalog, search for items, and make purchases.
- **Secure Authentication**: Ensure role-based authentication and secure access to resources.

---

## Technology Stack

- **Frontend**: React.js (User Interface and client-side logic)
- **Backend**: Node.js with Express.js (API server and middleware)
- **Database**: MongoDB (Data storage and management)
- **Authentication**: JSON Web Tokens (JWT) and bcrypt.js (Password encryption)
- **Styling**: Bootstrap (Responsive design and UI components)

---

## Installation and Setup

### Prerequisites
- Node.js (v14 or later)
- npm or yarn
- MongoDB
- Git

### Steps to Install

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/ZMCR-Online-Thrift-Store.git
   cd ZMCR-Online-Thrift-Store
   ```

2. **Setup Backend**:
   ```bash
   cd server
   npm install
   ```

3. **Setup Frontend**:
   ```bash
   cd ../client
   npm install
   ```

4. **Configure Environment Variables**:
   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=your-mongodb-connection-string
     JWT_SECRET=your-secret-key
     ```

5. **Run the Application**:
   - Start the backend:
     ```bash
     cd server
     npm run dev
     ```
   - Start the frontend:
     ```bash
     cd ../client
     npm start
     ```

---

## API Endpoints

### Admin
- **Create Admin**:
  - `POST /api/admin/create`
  - Body: `{ name, email, password }`
- **Get All Admins**:
  - `GET /api/admin/all`

### Donor
- **Add Donation**:
  - `POST /api/donor/add`
  - Body: `{ itemName, description, condition, imageURL }`
- **Get Donations**:
  - `GET /api/donor/all`

### Customer
- **Browse Items**:
  - `GET /api/items`
- **Purchase Item**:
  - `POST /api/items/purchase`
  - Body: `{ itemId, customerId }`

---

## Testing
- **Postman**: Use Postman to test all API endpoints.
- **Unit Tests**: Jest and Mocha can be integrated for backend testing.

---

## Contributing

Contributions are welcome! Please follow these steps:
1. Fork the repository.
2. Create a new branch (`feature/new-feature`).
3. Commit your changes.
4. Push to the branch.
5. Open a Pull Request.

---

## License
This project is licensed under the MIT License. See the LICENSE file for details.

---

## Contact
For questions, feedback, or support, please contact:
- **Email**: support@zmcr-thriftstore.com
- **GitHub Issues**: [ZMCR Online Thrift Store Issues](https://github.com/your-username/ZMCR-Online-Thrift-Store/issues)

