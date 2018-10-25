module.exports = {
  getProducts(req, res) {
    const db = req.app.get("db");
    db.products
      .find()
      .then(prods => {
        return res.status(200).json(prods);
      })
      .catch(console.warn);
  }
};
