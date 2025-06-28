import express from 'express';

const router = express.Router();

const users = [
  {
    firstName: "John",
    lastName: "Doe",
    age: 25
  },
  {
    firstName: "Can",
    lastName: "Kocak",
    age: 27
  }
]

// all routes in here starts with /users
router.get('/', (req, res) => {
  res.send(users);
})

router.post('/', (req, res) => {
  const user = req.body;

  users.push(user);

  res.send(`User with the name ${user.firstName} added to the database!`);
});

export default router;
