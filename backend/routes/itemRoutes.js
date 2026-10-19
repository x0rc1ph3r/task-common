// Maps REST endpoints to the reusable item controller actions.
const express = require('express');
const controller = require('../controllers/itemController');

const router = express.Router();
router.route('/').get(controller.listItems).post(controller.createItem);
router.route('/:id').get(controller.getItem).put(controller.updateItem).patch(controller.updateItem).delete(controller.deleteItem);

module.exports = router;
