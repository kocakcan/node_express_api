import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
// 2000 for frontend, 5000 for backend
const PORT = 5000;

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => res.send("Hello from Homepage!"));

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}`))
