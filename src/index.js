import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import routes from './routes';
import models from './models';

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
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Routes
app.use('/users', routes.users);
app.use('/messages', routes.messages);

// Start Server
app.listen(port, () => console.log(`Example app listening on port ${port}!`));