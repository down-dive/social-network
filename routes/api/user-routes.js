const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
// /api/pizzas
router
  .route('/')
  .get(getAllUsers)
  .post(createUser);
// Set up GET one, PUT, and DELETE at /api/users/:id
// /api/pizzas/:id
router
  .route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser)

module.exports = router;