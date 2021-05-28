const router = require('express').Router();
const {
    getAllUser,
    getUserById,
    createUser,
    updateUser,
    deleteUser
  } = require('../../controllers/user-controller');

// Set up GET all and POST at /api/users
router
  .route('/')
  .get()
  .post();

// Set up GET one, PUT, and DELETE at /api/users/:id
router
  .route('/:id')
  .get()
  .put()
  .delete();

module.exports = router;