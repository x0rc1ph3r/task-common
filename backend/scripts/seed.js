// Replaces the collection with starter records for local development.
require('dotenv').config();
const mongoose = require('mongoose');
const connectDatabase = require('../config/db');
const Item = require('../models/Item');
const items = require('../data/items.json');

const seed = async () => {
  try {
    await connectDatabase();
    await Item.deleteMany({});
    await Item.insertMany(items);
    console.log(`Seeded ${items.length} items`);
  } catch (error) {
    console.error(`Seed failed: ${error.message}`);
    process.exitCode = 1;
  } finally {
    await mongoose.disconnect();
  }
};

seed();
