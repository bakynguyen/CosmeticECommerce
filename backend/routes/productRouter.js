const express = require("express");
const router = express.Router();
const productController = require("../controllers/ProductController");

router.delete("/:id/destroy", productController.destroy);
router.patch("/:id/restore", productController.restore);
router.put("/:id/update", productController.update);
router.post("/add", productController.add);
router.get("/store", productController.store);
router.get("/:id", productController.get);

module.exports = router;
