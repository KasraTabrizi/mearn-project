import cors from 'cors';

const express = require('express');
const app = express();
const port = 3000;

//middleware is a function that is executed with every request
app.use((req, res, next) => {
    req.context = {
        models,
    };
    next();
});

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


//Routes
app.use('/users', routes.users);
app.use('/messages', routes.messages);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));