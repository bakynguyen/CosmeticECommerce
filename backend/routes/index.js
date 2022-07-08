const productRouter = require("./productRouter");

const route = (app) => {
  app.use("/products", productRouter);
};

module.exports = route;
