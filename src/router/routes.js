const express = require('express');
const router = express.Router();
const bookController=require("../controllers/bookController")
const reviewController=require("../controllers/reviewController")
const userController=require("../controllers/userController")
const middleware = require("../middleware/auth")

//createUser
router.post("/createUser",userController.createUser)
router.post("/loginUser",userController.loginUser)
//createBook 
router.post("/createBook",middleware.authorise,bookController.createBook)
router.get("/getBook",bookController.getBook)
router.get("/book/:bookId",middleware.authorise,bookController.getBooksById)

router.put("/book/:bookId",middleware.authorise,bookController.updateBookById)
router.delete("/book/:bookId",middleware.authorise,bookController.deleteById)



// adding Review 
router.post("/books/:bookId/review",reviewController.addReview)
router.put("/books/:bookId/review/:reviewId",reviewController.updateReview)
router.delete("/books/:bookId/review/:reviewId",reviewController.deleteReview)
module.exports = router;
