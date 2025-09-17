const express = require('express');
const router = express.Router();

const reviewController = require('../controllers/reviewController');


router.get('/', reviewController.readAllReview);
router.post('/', reviewController.createReview);
router.get('/:id', reviewController.readReviewById);
router.put('/:id',reviewController.updateReviewById);
router.delete('/:id', reviewController.deleteReviewById);
//Test
module.exports = router;