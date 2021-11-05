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
      "name": "Nike Air Force 1",
      "description": "An all time classic. These monochrome kicks are sure to set off any 'fit.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/028/489/original/313642_111.png.png",
      "category": brandsID[1]._id,
      "price": 112,
      "quantity": 25
    }, {
      "name": "Adidas Superstar",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/015/761/525/original/CM8074.png.png",
      "category": brandsID[0]._id,
      "price": 113,
      "quantity": 25
    },
    {
      "name": "Air Jordan 1 Mid",
      "description": "Take flight with these coveted kicks. The GOAT shoes made for the GOAT themselves, you.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/558/430/original/784379_00.png.png",
      "category": brandsID[2]._id,
      "price": 170,
      "quantity": 25
    },
    {
      "name": "Chuck Taylor",
      "description": "Rock on with these crass classics.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/013/091/original/CN144585C.png.png",
      "category": brandsID[4]._id,
      "price": 45,
      "quantity": 25
    },
    {
      "name": "Old Skool",
      "description": "Shred with these timeless shoes.",
      "image": "https://images.stockx.com/images/Vans-Style-36-Noon-Goons-Black-Snakeskin.jpg?fit=fill&bg=FFFFFF&w=375&h=375&auto=format,compress&trim=color&q=90&dpr=2&updated_at=1617994952",
      "category": brandsID[3]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Curry 2",
      "description": "Shoot your shot with these Curry 8's and it's sure to go in. The perfect shoes fit for a warrior",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/000/694/470/original/1259007_107%E2%80%8B.png",
      "category": brandsID[5]._id,
      "price": 150,
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
