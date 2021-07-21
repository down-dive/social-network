# social-network-API

![GitHub license badge](https://img.shields.io/badge/license-MIT-blue.svg)

## Description

The purpose of this project is to build an API for a social network web application where users can share their thoughts, react to friends’ thoughts, and create a friend list.

This API is especially useful for a social media startup that uses a NoSQL database. Using a MongoDB database, and the Mongoose ODM enables website to handle large amounts of unstructured data.


## Table of Contents

* [Description](#description)
* [Table of Contents](#table-of-contents)
* [Technologies](#technologies)
* [Tasks List](#tasks-list)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Demo Video](#demo-video)
* [Questions](#questions)

## Technologies

* MongoDB
* Mongoose
* Express.js
* Dotenv
* JavaScript

## Tasks List

- [x] Upon starting the server, Mongoose models are synced to the MongoDB database.
- [x] API GET routes in Insomnia Core for users and thoughts display data in a formatted JSON.
- [x] Add functionality to create, update, and delete users and thoughts in database.
- [x] Add functionality to create and delete reactions to thoughts and add and remove friends to a user’s friend list.

## Usage

First install the following tools on your machine:

* Express.js (can be installed by running npm intall)
* MongoDB (checkout the following link: [MongoDB Download Center](https://www.mongodb.com/try/download/community))
* Mongoose (can be installed by running npm install)

 After installing MongoDB, run the following commands inside your terminal:

```bash
git clone <from-repository-on-github>
npm install
```
To run the sever, use the following command in your terminal:

```
npm start
OR
node server.js
```

## License

[MIT](https://choosealicense.com/licenses/mit/)

## Contributing

Pull requests are welcome. For major changes, please first open an issue to discuss what you would like to change.

## Tests

You can use "Insomnia Core" or "Postman" to test different API routes for "User", "Thought" and "Reaction" models. The following routes have been implemented in the API:
1. Get all data
2. Get a single data using the ID
2. Post a new data
3. Put (update) a single data using the ID
4. Delete a single data using the ID

## Demo Video

Please click on the following link to see the Demo video for this project:
[Link to Demo](https://drive.google.com/file/d/10V-TYzDmC9Ea9DWdMwMDK9xoufz7a73J/view?usp=sharing)

## Questions

If you have any questions please use the following two links to contact me:

* [GitHub](https://github.com/down-dive)

* [Email Address](mailto:yterlyuk@gmail.com)
