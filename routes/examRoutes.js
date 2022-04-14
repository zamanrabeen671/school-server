const { examination, participentExam } = require('../controller/examController');
const verifyToken = require('../helper/verifyToken');

const examRouter = require('express').Router();

examRouter.post('/attend',verifyToken, examination)
examRouter.get('/participend/:id', verifyToken, participentExam)

examRouter.get('/', (req, res) => {
    res.send('hello')
})

module.exports = examRouter;