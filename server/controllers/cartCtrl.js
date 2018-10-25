module.exports = {
  addToCart(req, res) {
    const db = req.app.get("db");
    db.findUser(req.sessionID).then(([existingUser]) => {
      if (!existingUser) {
        db.insertUser(req.sessionID).then(([newUser]) => {
          db.cart
            .insert({
              user_id: newUser.id,
              prod_id: req.body.product.id,
              quantity: req.body.quantity
            })
            .then(() => {
              db.cart
                .find({ user_id: newUser.id })
                .then(cart => res.status(200).json(cart));
            });
        });
        /** TODO: walkaway */
      } else {
        db.cart.find({ user_id: existingUser.id }).then(cartItems => {
          db.cart
            .insert({
              user_id: existingUser.id,
              prod_id: req.body.product.id,
              quantity: req.body.quantity
            })
            .then(() => {
              db.cart
                .find({ user_id: existingUser.id })
                .then(cart => res.status(200).json(cart));
            });
        });
      }
    });
  },
  getCart(req, res) {
    const db = req.app.get("db");
    db.getCart(req.sessionID).then(cart => res.status(200).json(cart));
  }
};
