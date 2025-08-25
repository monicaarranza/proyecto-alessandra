const mongoose = require("mongoose");

const productoSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  precio: { type: Number, required: true },
  qty: { type: Number, default: 0 }
});

module.exports = mongoose.model("Producto", productoSchema);
