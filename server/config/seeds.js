const db = require('./connection');
const { User, Product, Category } = require('../models');

const brands = require("./brands.json");



db.once('open', async () => {
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();

  let brandsID = await Category.insertMany(brands);
  let productSeed = await Product.insertMany([
    {
      "name": "Nike",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[26]._id,
      "price": 100,
      "quantity": 25
    }, {
      "name": "Adidas",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[1]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Air Jordans",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[2]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Alexander McQueen",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[3]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Surpreme",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[36]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Yeezy",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[43]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Puma",
      "description": "Awesome looking shoes",
      "image": "cookie-tin.jpg",
      "category": brandsID[30]._id,
      "price": 100,
      "quantity": 25
    }
  ]);
  console.log(brandsID[0]._id)

  await User.create({
    "firstName": "Will",
    "lastName": "Lam",
    "email": "apple@gmail.com",
    "password": "1234asdf"
  });

  await User.create({
    firstName: "Test1",
    lastName: "Test2",
    email: "test@gmail.com",
    password: "1234asdf",
    orders: [{
      products: [productSeed[0]._id, productSeed[5]._id, productSeed[3]._id]
    }]
  });





  console.log('db seeded');
  process.exit();
});
