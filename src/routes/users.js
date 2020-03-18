import { Router } from 'express';

const router = Router(); //a router function that returned a router object

router.get('/', async (req, res) => {
    // res.json(users);
    const users = await req.context.models.User.find();
    return res.send(users);
});

router.get('/:userId', async (req, res) => {
    //res.json(users[req.params.userId]);
    const user = await req.context.models.User.findById(req.params.userId);
    return res.send(user);
});

router.post('/', (req, res) => {
    users.push({ id: users.length, ...req.body });
    res.json(users);
});

router.put('/', (req, res) => {
    res.send('Received PUT request on endpoint /users');
});

router.delete('/', (req, res) => {
    res.send(req.context.models.users);
});

export default router;