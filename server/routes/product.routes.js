const ProductController = require('../controllers/product.controller');

module.exports = function(app){
    app.post("/api/products/new", ProductController.create);
    app.get("/api/products", ProductController.getAll);
    // app.get("/api/products/random", ProductController.random);
    app.get("/api/products/:id", ProductController.getOne);
    app.delete("/api/products/delete/:id", ProductController.delete);
    app.put("/api/products/update/:id", ProductController.update);
}