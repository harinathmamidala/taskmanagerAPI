const express=require('express')
const router=express.Router()
// router.get('/',(req,res)=>{
//   res.send('all items')
// })
const {getAllTasks,createTask,getTask,UpdateTask,deleteTask}=require('../controllers/tasks')
router.route('/').get(getAllTasks).post(createTask)
router.route('/:id').delete(deleteTask).patch(UpdateTask).get(getTask)
module.exports= router