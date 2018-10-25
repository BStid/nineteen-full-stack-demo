const productsCtrl = require("./controllers/productsCtrl");
const cartCtrl = require("./controllers/cartCtrl");

module.exports = app => {
  /** PRODUCTS */
  app.get("/api/products", productsCtrl.getProducts);

  /** CART */
  app.post("/api/cart", cartCtrl.addToCart);
  app.get("/api/cart", cartCtrl.getCart);
  /** USER */
};
