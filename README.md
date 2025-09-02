
# Project Title

A brief description of what this project does and who it's for

# Industry-Level Backend Setup (YouTube Clone Starter)

This repository provides a scalable, production-style backend foundation for a full-stack application. It includes clean authentication logic, modular controllers, and integration with MongoDB Atlas and Cloudinary. Designed with clarity and extensibility in mind, this setup is ideal for developers building robust Node.js applications.

## 🛠 Tech Stack

- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- Cloudinary (for media storage)
- JWT (JSON Web Tokens for authentication)
- Prettier (code formatting)

## 🚀 Getting Started

### Installation

```bash
npm install

### 🔐 Environment Variables

To run this project, create a `.env` file in the root directory and add the following variables:

```env
PORT=8000

MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.ovj0aid.mongodb.net
CORS_ORIGIN=*

ACCESS_TOKEN_SECRET=your_access_token_secret
ACCESS_TOKEN_EXPIRY=1d

REFRESH_TOKEN_SECRET=your_refresh_token_secret
REFRESH_TOKEN_EXPIRY=10d

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret