const { mcqQuestion, getAllMcqQuestion, getQustionByTecher } = require('../controller/mcqQuestion');
const verifyToken = require('../helper/verifyToken')
const mcqRouter = require('express').Router();


mcqRouter.post('/addQuestion',verifyToken, mcqQuestion)
mcqRouter.get('/getAllMcq', verifyToken ,getAllMcqQuestion)
mcqRouter.get('/teacherQuestion/:id',verifyToken, getQustionByTecher)
module.exports = mcqRouter;