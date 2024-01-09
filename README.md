# E-Commerce Back End

## Description

This project focuses on building the back end for an e-commerce site using Express.js, Sequelize, and MySQL. The goal is to create a functional API that interacts with a MySQL database, allowing for the management of categories, products, and tags.

## User Story

## Acceptance Criteria

The project satisfies the following acceptance criteria:

- Configures a functional Express.js API that uses Sequelize to connect to a MySQL database.
- Allows the connection to the database using environment variables for database name, MySQL username, and password.
- Creates and seeds a development database with test data using schema and seed commands.
- Starts the server and syncs Sequelize models to the MySQL database.
- Provides API GET routes in Insomnia for categories, products, and tags that display data in formatted JSON.
- Allows successful testing of API POST, PUT, and DELETE routes in Insomnia for creating, updating, and deleting data in the database.

## Mock-Ups

Mock-ups demonstrate the functionality of the application, showcasing its various routes being tested in Insomnia.

- GET routes for categories, products, and tags being tested.
- GET routes for a single category, a single product, and a single tag being tested.
- POST, PUT, and DELETE routes for categories, products, and tags being tested.

## Walkthrough Video

[https://vimeo.com/901312018/c739eccc05?share=copy]

The walkthrough video demonstrates the functionality of the e-commerce back end, including:

- Creating the schema from the MySQL shell.
- Seeding the database from the command line.
- Starting the application’s server.
- Testing of all technical acceptance criteria using Insomnia.

## Installation

To install and run the project locally, follow these steps:

1. Clone the repository.
2. Install dependencies using `npm install`.
3. Set up environment variables for MySQL username, password, and database name using the `.env` file.
4. Run the schema.sql file in the db folder to create the database.
5. Seed the database using `npm run seed`.
6. Start the server using `node server.js`.

## Technologies Used

- Express.js
- Sequelize
- MySQL2
- dotenv

## Credits

This project was completed as part of the edX Boot Camp curriculum. Special thanks to Dru Sanchez, Alexis San Javier, Jacob Carver, and Andrew Layendecker who provided much guidance and assistance during the development process.
