// Implements reusable list, detail, create, update, and delete controller actions.
const mongoose = require('mongoose');
const Item = require('../models/Item');
const { buildQuery } = require('../utils/buildQuery');

const findItem = async (id) => {
  if (!mongoose.isValidObjectId(id)) return null;
  return Item.findById(id);
};

const listItems = async (req, res, next) => {
  try {
    const items = await Item.find(buildQuery(req.query)).sort({ createdAt: -1 });
    res.json(items);
  } catch (error) { next(error); }
};

const getItem = async (req, res, next) => {
  try {
    const item = await findItem(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json(item);
  } catch (error) { return next(error); }
};

const createItem = async (req, res, next) => {
  try {
    const item = await Item.create(req.body);
    res.status(201).json(item);
  } catch (error) { next(error); }
};

const updateItem = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'Invalid item id' });
    const item = await Item.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true });
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json(item);
  } catch (error) { return next(error); }
};

const deleteItem = async (req, res, next) => {
  try {
    if (!mongoose.isValidObjectId(req.params.id)) return res.status(400).json({ message: 'Invalid item id' });
    const item = await Item.findByIdAndDelete(req.params.id);
    if (!item) return res.status(404).json({ message: 'Item not found' });
    return res.json({ message: 'Item deleted' });
  } catch (error) { return next(error); }
};

module.exports = { listItems, getItem, createItem, updateItem, deleteItem };
