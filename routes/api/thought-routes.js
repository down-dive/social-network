const router = require('express').Router();
const { addThought, removeThought } = require('../../controllers/thought-controller');

// /api/thoughts/<pizzaId>
router.route('/:userId').post(addThought);

// /api/thoughts/<pizzaId>/<thoughtId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;
