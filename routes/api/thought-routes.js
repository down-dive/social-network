const router = require('express').Router();
const { getAllThoughts, addThought, removeThought } = require('../../controllers/thought-controller');

// /api/thoughts/<pizzaId>
// router.route('/').get(function(req,res) {res.send({message:"something"})}).post(addThought);

// router.route('/:userId').get(function(req,res){res.send({message: "url parm" + JSON.stringify(req.params)})}).post(addThought)
// // /api/thoughts/<pizzaId>/<thoughtId>
// router.route('/:userId/:thoughtId').delete(removeThought);

router.route('/').get(getAllThoughts).post(addThought);

// /api/comments/<pizzaId>
router.route('/:userId').post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route('/:userId/:thoughtId').delete(removeThought);

module.exports = router;
