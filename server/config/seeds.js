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
      "description": "The Nike Air Force 1 ‘07 Premium ‘Halloween’ gets in the seasonal spirit with a premium black leather upper partially covered in a tonal print made up of balefully staring eyes.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/717/431/original/831733_00.png.png",
      "category": brandsID[1]._id,
      "price": 133,
      "quantity": 25
    },
    {
      "name": "Blazer Mid '77",
      "description": "The Nike Blazer Mid ‘77 Premium ‘Dark Chocolate’ gets a material makeover while maintaining the shoe’s vintage basketball DNA.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/139/440/original/DM7581_200.png.png",
      "category": brandsID[1]._id,
      "price": 110,
      "quantity": 25
    },
    {
      "name": "Nike Air Force 1",
      "description": "The Nike Air Force 1 ‘07 Premium ‘Halloween’ gets in the seasonal spirit with a premium black leather upper partially covered in a tonal print made up of balefully staring eyes.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/717/431/original/831733_00.png.png",
      "category": brandsID[1]._id,
      "price": 133,
      "quantity": 25
    },
    {
      "name": "Nike LD",
      "description": "The sacai x Undercover x Nike LDWaffle ‘Night Maroon Team Royal’ reunites the three partner brands on a sneaker collaboration updated with sharply contrasting hues.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/778/734/original/815543_00.png.png",
      "category": brandsID[1]._id,
      "price": 170,
      "quantity": 25
    },
    {
      "name": "Nike Air Force 1 '07",
      "description": "Commemorating the league’s 75th anniversary, the NBA x Nike Air Force 1 ‘07 LV8 ‘Spurs’ showcases vibrant accents that nod to San Antonio’s signature colors during the early ‘90s.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/717/194/original/834787_00.png.png",
      "category": brandsID[1]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Nike Air Force 1",
      "description": "Launching as part of a special collection honoring the 75th anniversary of the NBA, the Nike Air Force 1 ‘07 LV8 ‘Lakers’ showcases the signature colors of the franchises’ early years in Minneapolis and Los Angeles.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/755/460/original/819765_00.png.png",
      "category": brandsID[1]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Court Vision Low",
      "description": "The Nike Court Vision Low ‘White Turquoise Blue’ channels the familiar aesthetic of ‘80s basketball shoes.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/139/437/original/DM1187_100.png.png",
      "category": brandsID[1]._id,
      "price": 65,
      "quantity": 25
    },
    {
      "name": "Blazer Court Mid",
      "description": "Mid lifestyle shoes.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/495/284/original/DC8901_001.png.png",
      "category": brandsID[1]._id,
      "price": 115,
      "quantity": 25
    },
    {
      "name": "KD 14",
      "description": "The Nike KD 14 ‘Pop Art’ highlights primary-colored accents on Kevin Durant’s fourteenth signature shoe.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/718/266/original/815474_00.png.png",
      "category": brandsID[1]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Dunk High Fragment",
      "description": "The Fragment Design x Nike Dunk High ‘Tokyo’ delivers a continuation of the partner brands’ original 2010 City Pack collaboration.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/285/802/original/814962_00.png.png",
      "category": brandsID[1]._id,
      "price": 170,
      "quantity": 25
    },
    {
      "name": "Nike Dunk Low",
      "description": "Launching as the third installment in the LA retailer’s ‘Dunk vs AF-1’ series, this triple-black edition of the Nike Dunk Low features an eclectic mix of materials throughout the upper.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/557/463/original/804800_00.png.png",
      "category": brandsID[1]._id,
      "price": 120,
      "quantity": 25
    },
    {
      "name": "Nike Air Presto",
      "description": "The Nike Air Presto ‘What The’ mashes together elements drawn from OG colorways of the running shoe that Nike launched in 2000 as a ‘T-shirt for your feet.’",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/210/401/original/808890_00.png.png",
      "category": brandsID[1]._id,
      "price": 130,
      "quantity": 25
    },
    {
      "name": "Nike 7 EP",
      "description": "The Nike Kyrie 7 EP ‘1 World 1 People’ pairs a message of inclusivity with an especially vibrant color scheme.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/059/105/998/original/CQ9327_700.png.png",
      "category": brandsID[1]._id,
      "price": 130,
      "quantity": 25
    },
    {
      "name": "Air Max",
      "description": "The Nike Air Max Pre-Day LX ‘Chlorophyll’ delivers a two-tone colorway of a lifestyle runner influenced by Nike’s running heritage.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/059/708/278/original/804801_00.png.png",
      "category": brandsID[1]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Adidas Superstar",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/015/761/525/original/CM8074.png.png",
      "category": brandsID[0]._id,
      "price": 113,
      "quantity": 25
    },
    {
      "name": "Superstar OT Tech",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/702/524/original/GZ7634.png.png",
      "category": brandsID[0]._id,
      "price": 143,
      "quantity": 25
    },
    {
      "name": "Forum Mids",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/850/047/original/GY5790.png.png",
      "category": brandsID[0]._id,
      "price": 160,
      "quantity": 25
    },
    {
      "name": "Stan Smiths",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/388/779/original/H00326.png.png",
      "category": brandsID[0]._id,
      "price": 150,
      "quantity": 25
    },
    {
      "name": "Ned Flanders",
      "description": "The Simpsons x adidas McCarten ‘Ned Flanders’ pays tribute to Homer’s preternaturally cheerful next-door neighbor.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/059/177/661/original/GY8439.png.png",
      "category": brandsID[0]._id,
      "price": 120,
      "quantity": 25
    },
    {
      "name": "White Green",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/056/406/original/FY5480.png.png",
      "category": brandsID[0]._id,
      "price": 105,
      "quantity": 25
    },
    {
      "name": "Daily 3.0",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/321/324/original/GV7352.png.png",
      "category": brandsID[0]._id,
      "price": 120,
      "quantity": 25
    },
    {
      "name": "Questar Flow",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/027/229/808/original/F36243.png.png",
      "category": brandsID[0]._id,
      "price": 55,
      "quantity": 25
    },
    {
      "name": "City Cup",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/020/935/769/original/DB3068.png.png",
      "category": brandsID[0]._id,
      "price": 80,
      "quantity": 25
    },
    {
      "name": "Powerlift.3",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/026/400/354/original/AQ3328.png.png",
      "category": brandsID[0]._id,
      "price": 113,
      "quantity": 25
    },
    {
      "name": "ZX 10000 C",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/056/155/586/original/765853_00.png.png",
      "category": brandsID[0]._id,
      "price": 124,
      "quantity": 25
    },
    {
      "name": "Adi Ease",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/030/547/650/original/G56346.png.png",
      "category": brandsID[0]._id,
      "price": 60,
      "quantity": 25
    },
    {
      "name": "UltraBoost 3",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/005/455/013/original/BB6059_S.png.png",
      "category": brandsID[0]._id,
      "price": 135,
      "quantity": 25
    },
    {
      "name": "PureBoost",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/013/169/837/original/CM8304.png.png",
      "category": brandsID[0]._id,
      "price": 75,
      "quantity": 25
    },
    {
      "name": "Forum 84",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/044/200/361/original/G55364.png.png",
      "category": brandsID[0]._id,
      "price": 100,
      "quantity": 25
    },
    {
      "name": "Supernova",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/012/751/606/original/BB3477.png.png",
      "category": brandsID[0]._id,
      "price": 130,
      "quantity": 25
    },
    {
      "name": "NMD",
      "description": "The adidas NMD_R1 ‘Black Carbon’ delivers a minimalist take on the lifestyle runner originally released in 2015.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/036/348/582/original/FV8152.png.png",
      "category": brandsID[0]._id,
      "price": 104,
      "quantity": 25
    },
    {
      "name": "Runfalcon",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/052/293/189/original/G28910.png.png",
      "category": brandsID[0]._id,
      "price": 30,
      "quantity": 25
    },
    {
      "name": "PureBoost ZG",
      "description": "From basketball court, to the dancefloor. These lifestyle shoes are great for any occasion.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/004/003/668/original/AQ2927.png.png",
      "category": brandsID[0]._id,
      "price": 130,
      "quantity": 25
    },
    {
      "name": "Jordan 1 Retro",
      "description": "The Air Jordan 1 Retro High OG Patent ‘Bred’ treats the iconic colorway to a glossy makeover.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/558/430/original/784379_00.png.png",
      "category": brandsID[2]._id,
      "price": 170,
      "quantity": 25
    },
    {
      "name": "Jordan 4 Retro",
      "description": "The Air Jordan 4 Retro ‘Red Thunder’ features familiar color blocking that recalls the coveted ‘Thunder’ colorway, originally released in 2006 and subsequently reissued in 2012.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/943/941/original/791362_00.png.png",
      "category": brandsID[2]._id,
      "price": 190,
      "quantity": 25
    },
    {
      "name": "Jordan 1 Retro",
      "description": "The Air Jordan 1 High OG ‘Hand Crafted’ treats the iconic silhouette to an eclectic color palette.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/352/665/original/DH3097_001.png.png",
      "category": brandsID[2]._id,
      "price": 170,
      "quantity": 25
    },
    {
      "name": "Jordan 11 Retro",
      "description": "The 2021 edition of the Air Jordan 11 Retro ‘Cool Grey’ brings back a colorway first released in 2001 and retroed again in 2010.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/481/867/original/704157_00.png.png",
      "category": brandsID[2]._id,
      "price": 225,
      "quantity": 25
    },
    {
      "name": "Jordan 3 Retro",
      "description": "Take flight with these coveted kicks. The GOAT shoes made for the GOAT themselves, you.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/352/683/original/DO1830_200.png.png",
      "category": brandsID[2]._id,
      "price": 200,
      "quantity": 25
    },
    {
      "name": "Jordan 12 Retro",
      "description": "The Air Jordan 12 Retro ‘Royalty’ adds gilded accents to a two-tone design reminiscent of the OG ‘Taxi’ colorway from 1996.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/390/971/original/784385_00.png.png",
      "category": brandsID[2]._id,
      "price": 190,
      "quantity": 25
    },
    {
      "name": "Jordan 2 Retro",
      "description": "The Off-White x Air Jordan 2 Retro Low SP ‘White Varsity Red’ delivers Virgil Abloh’s take on the retro silhouette originally released in 1986.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/398/092/original/DJ4375_106.png",
      "category": brandsID[2]._id,
      "price": 250,
      "quantity": 25
    },
    {
      "name": "Jordan 3 Retro Pine Green",
      "description": "The Air Jordan 3 Retro ‘Pine Green’ combines OG-style color blocking with updated materials.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/061/755/485/original/819009_00.png.png",
      "category": brandsID[2]._id,
      "price": 190,
      "quantity": 25
    },
    {
      "name": "Jordan 36",
      "description": "The Air Jordan 36 ‘Psychic Energy’ showcases a classic color palette that honors the heritage of the Jordan franchise, while recognizing the vision of the athletes who further its legacy.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/717/378/original/832960_00.png.png",
      "category": brandsID[2]._id,
      "price": 185,
      "quantity": 25
    },
    {
      "name": "Jordan 14 Retro",
      "description": "The Air Jordan 14 Retro ‘Winterized’ delivers a fortified edition of the iconic silhouette that MJ wore when he collected his sixth and final NBA championship.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/062/098/157/original/822902_00.png.png",
      "category": brandsID[2]._id,
      "price": 210,
      "quantity": 25
    },
    {
      "name": "Jordan Delta 2",
      "description": "The Jordan Delta 2 ‘Grey Fog Sail’ features neutral tones throughout a layered upper built with an eclectic range of materials.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/902/034/original/CV8121_005.png.png",
      "category": brandsID[2]._id,
      "price": 130,
      "quantity": 25
    },
    {
      "name": "Jordan 5 Retro",
      "description": "The Air Jordan 5 Retro ‘Shattered Backboard’ showcases a familiar palette on a reconstituted build.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/060/352/683/original/DO1830_200.png.png",
      "category": brandsID[2]._id,
      "price": 190,
      "quantity": 25
    },
    {
      "name": "Jordan 1 Retro",
      "description": "The Air Jordan 1 Retro High OG ‘Prototype’ showcases sharply contrasting color stories between the collar and the rest of the upper.",
      "image": "https://image.goat.com/750/attachments/product_template_pictures/images/058/946/368/original/786347_00.png.png",
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
