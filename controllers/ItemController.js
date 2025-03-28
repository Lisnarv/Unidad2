const Item = require('../models/Item');

class ItemController {
  // Obtener todos los items
  async getItems(req, res) {
    try {
      const items = await Item.find();
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Obtener un item por ID
  async getItemById(req, res) {
    try {
      const item = await Item.findById(req.params.id);
      if (!item) return res.status(404).json({ message: 'Item no encontrado' });
      res.json(item);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Crear un nuevo item
  async createItem(req, res) {
    try {
      const newItem = new Item(req.body);
      const savedItem = await newItem.save();
      res.status(201).json(savedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Actualizar un item existente
  async updateItem(req, res) {
    try {
      const updatedItem = await Item.findByIdAndUpdate(
        req.params.id,
        req.body,
        { new: true }
      );
      if (!updatedItem) return res.status(404).json({ message: 'Item no encontrado' });
      res.json(updatedItem);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // Eliminar un item
  async deleteItem(req, res) {
    try {
      const deletedItem = await Item.findByIdAndDelete(req.params.id);
      if (!deletedItem) return res.status(404).json({ message: 'Item no encontrado' });
      res.json({ message: 'Item eliminado correctamente' });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // 
  // Endpoints adicionales:
  // 1. Buscar items por nombre
  async searchItems(req, res) {
    try {
      const { name } = req.query;
      const items = await Item.find({ name: new RegExp(name, 'i') });
      res.json(items);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // 2. Actualizar múltiples items
  async bulkUpdate(req, res) {
    try {
      const { filter, update } = req.body;
      const result = await Item.updateMany(filter, update);
      res.json(result);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }

  // 3. Eliminar todos los items
  async deleteAll(req, res) {
    try {
      const result = await Item.deleteMany({});
      res.json({ message: 'Todos los items han sido eliminados', result });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  }
}

module.exports = new ItemController();
