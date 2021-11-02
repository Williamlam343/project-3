const db = require('./connection');
const { User, Product, Category } = require('../models');

db.once('open', async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    {
      name:
        "ASICS"
    },
    {
      name:
        "ADIDAS"
    },
    {
      name:
        "AIR JORDAN"
    },
    {
      name:
        "ALEXANDER MCQUEEN"
    },
    {
      name:
        "ANTI SOCIAL SOCIAL CLUB"
    },
    {
      name:
        "BAIT"
    },
    {
      name:
        "BALENCIAGA"
    },
    {
      name:
        "BAPE"
    },
    {
      name:
        "BURBERRY"
    },
    {
      name:
        "CHANEL"
    },
    {
      name:
        "COMMON PROJECTS"
    },
    {
      name:
        "CONVERSE"
    },
    {
      name:
        "CROCS"
    },
    {
      name:
        "DIADORA"
    },
    {
      name:
        "DIOR"
    },
    {
      name:
        "EWING"
    },
    {
      name:
        "FOOTWEAR"
    },
    {
      name:
        "GOLDEN GOOSE"
    },
    {
      name:
        "GUCCI"
    },
    {
      name:
        "JORDAN"
    },
    {
      name:
        "KIDCUDI"
    },
    {
      name:
        "KANYE WEST"
    },
    {
      name:
        "LACOSTE"
    },
    {
      name:
        "LI-NING"
    },
    {
      name:
        "LOUIS VUITTON"
    },
    {
      name:
        "NEW BALANCE"
    },
    {
      name:
        "NIKE"
    },
    {
      name:
        "OFF-WHITE"
    },
    {
      name:
        "PALACE"
    },
    {
      name:
        "PRADA"

    },
    {
      name:
        "PUMA"
    },
    {
      name:
        "REEBOK"
    },
    {
      name:
        "STADIUM"
    },
    {
      name:
        "SAINT LAURENT"
    },
    {
      name:
        "SAUCONY"
    },
    {
      name:
        "STADIUM GOODS"
    },
    {
      name:
        "SUPREME"
    },
    {
      name:
        "THE WEEKND"
    },
    {
      name:
        "TIMBERLAND"
    },
    {
      name:
        "TRAVIS SCOTT"
    },
    {
      name:
        "UNDER ARMOUR"
    },
    {
      name:
        "VANS"
    },
    {
      name:
        "VERSACE"
    },
    {
      name:
        "YEEZY"
    },
    {
      name:
        "ZIMMERMANN"
    },

  ]);

  console.log('categories seeded');



  process.exit();
});
