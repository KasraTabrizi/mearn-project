import express from 'express';
import cors from 'cors';

import routes from './routes';
import models, { connectDb } from './models';

const app = express();
const port = 3000;

// Application-Level Middleware
app.use((req, res, next) => {
    req.context = {
        models,
        me: models.users[1],
    };
    next();
});

app.use(cors()); //request en response have the correct headers
app.use(express.json()); //parse request from string to an object
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/users', routes.users);
app.use('/messages', routes.messages);

// Start Server
connectDb().then(async () => {
    app.listen(port, () => console.log(`Example app listening on port ${port}!`));
});
