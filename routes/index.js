import express from 'express';
const router = express.Router();

router.get('/', (req, res) => {
    res.json('hola');
})

export default router;