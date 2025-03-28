const express = require('express');
const router = express.Router();
const itemController = require('../controllers/ItemController');

// Endpoints adicionales
router.get('/search', (req, res) => itemController.searchItems(req, res));
router.put('/bulk-update', (req, res) => itemController.bulkUpdate(req, res));
router.delete('/delete-all', (req, res) => itemController.deleteAll(req, res));

// Endpoints CRUD básicos
router.get('/', (req, res) => itemController.getItems(req, res));
router.get('/:id', (req, res) => itemController.getItemById(req, res));
router.post('/', (req, res) => itemController.createItem(req, res));
router.put('/:id', (req, res) => itemController.updateItem(req, res));
router.delete('/:id', (req, res) => itemController.deleteItem(req, res));



module.exports = router;
