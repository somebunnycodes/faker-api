const {faker} = require("@faker-js/faker");
const express = require("express");
const app = express();
const port = 8000;

const createUser = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        phoneNumber: faker.phone.phoneNumber(),
        email: faker.internet.email(),
        password: faker.internet.password()
    };
    return newFake;
};

const createCompany = () => {
    const newFake = {
        _id: faker.datatype.uuid(),
        name: faker.company.companyName(),
        address: {        
            street: faker.address.streetAddress(),
            city: faker.address.city(),
            state: faker.address.state(),
            zipCode: faker.address.zipCode(),
            country: faker.address.country()
        }
    };
    return newFake;
};

app.get("/api/users/new", (req, res) => {
    const newUser = createUser();
    res.json(newUser);
});

app.get("/api/companies/new", (req, res) => {
    const newCompany = createCompany();
    res.json(newCompany);
});

app.get("/api/user/company", (req, res) => {
    const data = {
        user: createUser(),
        company: createCompany()
    };
    res.json(data);
});

app.listen( port, () => console.log(`Listening on port: ${port}`) );

/*
Create an api route "/api/user/company" that returns both a new user and a new company
Run your server.js file using nodemon
Using Postman, test your new GET routes
*/
