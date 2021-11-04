const db = require('./connection');
const { User, Product, Category } = require('../models');

const brands = require("./brands.json");



db.once('open', async () => {
  await Category.deleteMany();
  await Product.deleteMany();
  await User.deleteMany();

  let brandsID = await Category.insertMany([
    { name: "Adidas" },
    { name: "Nike" },
    { name: "Jordan" },
    { name: "Vans" },
    { name: "Converse" },
    { name: "Under Armour" },
  ]);
  let productSeed = await Product.insertMany([
    {
      "name": "Nike",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[1]._id,
      "price": 100,
      "quantity": 25
    }, {
      "name": "Adidas",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[0]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Air Jordans",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[3]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Converse",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[5]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Adidas",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[0]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Yeezy",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[0]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Under Armour",
      "description": "Awesome looking shoes",
      "image": "https://image.goat.com/attachments/product_template_pictures/images/041/243/759/original/650785_00.png.png",
      "category": brandsID[5]._id,
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
