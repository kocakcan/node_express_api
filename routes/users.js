import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  }
]

// all routes in here starts with /users
router.get('/', (req, res) => {
  console.log(users);
  res.send("Hello");
})

export default router;
