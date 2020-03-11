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

router.put('/users/:userId', (req, res) => {
    users[req.params.userId] = req.body;
    res.json(users);
});

router.delete('/users/:userId', (req, res) => {
    users.splice(req.params.userId, 1);
    res.json(users);
});

export default router;