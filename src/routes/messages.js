import { Router } from 'express';

const router = Router();

router.get('/users', (req, res) => {
    res.json(users);
});

router.get('/users/:userId', (req, res) => {
    res.json(users[req.params.userId]);
});

router.post('/users', (req, res) => {
    users.push({ id: users.length, ...req.body });
    res.json(users);
});


export default router;