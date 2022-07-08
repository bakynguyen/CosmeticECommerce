const Products = require("../models/Products");

class ProductController {
  // [GET] /products/store
  store(req, res, next) {
    Products.find({})
      .then((products) => {
        res.status(200).json(products);
      })
      .catch(next);
  }

  // [GET] /products/:id
  get(req, res, next) {
    Products.findById({ _id: req.params.id })
      .then((product) => {
        res.send(product);
      })
      .catch(next);
  }

  // [POST] /products/add
  add(req, res, next) {
    const formData = req.body;
    console.log("formData", formData);
    const product = new Products(formData);
    product
      .save()
      .then((result) => {
        res.send(result);
      })
      .catch(next);
  }

  // [PUT] /products/:id/update
  update(req, res, next) {
    Products.findByIdAndUpdate({ _id: req.params.id }, req.body)
      .then(() => {
        res.send(req.body);
      })
      .catch(next);
  }

  // [PATCH] /products/:id/restore
  async restore(req, res, next) {
    try {
      const product = await Products.findById({ _id: req.params.id });
      product.delete = false;
      product
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch(next);
    } catch (error) {
      console.log(error);
    }
  }

  // [DELETE] /products/:id/destroy
  async destroy(req, res, next) {
    try {
      const product = await Products.findById({ _id: req.params.id });
      product.delete = true;
      product
        .save()
        .then((result) => {
          res.send(result);
        })
        .catch(next);
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = new ProductController();
