# 🚀 Node.js & Express.js Starter with TypeScript

This repository provides an **initial setup for building Node.js applications with Express.js and TypeScript**, offering a clean folder structure, reusable utilities, and MongoDB integration via Mongoose. It's designed to help developers quickly bootstrap projects while maintaining best practices.


---

## ✨ Features

- **TypeScript-first Approach**: Ensures type safety and better developer experience.
- **Express.js Setup**: A lightweight, fast framework for building APIs.
- **MongoDB Integration**: Seamless connection to MongoDB using Mongoose.
- **Modular Architecture**: Clean folder structure to keep code maintainable.
- **User Model & Types**: Predefined `User` model and TypeScript types in `dto/types`.
- **Login Controller**: A sample controller for login functionality.
- **Reusable Utils**: Includes `responseHandler` for consistent API responses.

---

## 📂 Folder Structure

```plaintext
src
├── controllers
│   └── auth
│       └── login.controller.ts   # Handles user login logic
├── dto
│   └── types
│       └── user.type.ts          # TypeScript definitions for User
├── models
│   └── userModel.ts              # User schema for MongoDB
├── routes
│   └── index.ts                  # Demo API routes
├── services                      # Placeholder for service files
├── utils
│   ├── dbConnect.ts              # MongoDB connection setup
│   ├── envConstants.ts           # Environment variable helper
│   ├── responseHandler.ts        # Utility for API responses
├── app.ts                        # Express app setup
