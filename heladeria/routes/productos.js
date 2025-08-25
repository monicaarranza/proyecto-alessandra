const express = require("express");
const router = express.Router();
const productoController = require("../controllers/producto");

router.get("/inventory", productoController.getProductos);
router.post("/", productoController.createProducto);

module.exports = router;
