# rest-api-journal
This project creates a backend API using Firebase Cloud Functions and Express.js to manage entries.
It allows users to perform CRUD (Create, Read, Update, Delete) operations on entries stored in a Firestore database.
The project consists of two main files:
index.ts: Defines and exports Firebase Cloud Functions that handle HTTP requests.
entryController.ts: Contains functions responsible for handling the core logic of adding, retrieving, updating, and deleting entries.
The project uses TypeScript for strong typing and error checking.
Configuration data, such as database settings, is stored in the config.ts file.
Firebase authentication and Firestore are used for secure data storage and access.
Error handling is implemented throughout the code to ensure proper responses in case of errors.
The project can be deployed to Firebase to create a functional HTTP API for entry management, suitable for use in web or mobile applications.
