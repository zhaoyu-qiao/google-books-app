const router = require("express").Router();
const booksController = require("../../controllers/booksController");

// Matches with "/api/books"
// Need to sort so the latest book appear at the top.
router.route("/")
  .post(booksController.create)
  .get(booksController.findAll)
//.post(booksController.create);

// Matches with "/api/books/:id"
router
  .route("/:id")
  .get(booksController.findById)
  .put(booksController.update)
  .delete(booksController.remove);

module.exports = router;