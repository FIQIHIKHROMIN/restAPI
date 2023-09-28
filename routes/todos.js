const express = require("express");
const router = express.Router();
const Todo = require('../controllers/Todo');

//Get all todos.
router.get('/', async (req, res) => {
});

//create a todo.
router.post('/todo', async (req, res) => {
});

//Update a todo.
router.put('/todos/:todoId', async (req, res) => {
});

//delete a todo.
router.delete('/todos/:todoId', async (req, res) => {
});


//update a too
function updateTodo(todoId) {
    
    //contact server
    return $.ajax({
        method: 'put',
        
        url:`/todos/${todoId}`,
        
        contentType:'application/json',
        
        cache:false,
        
        error: error => {
            
            console.error(error);
            
        }
        
    });
    
};

//Delete a todo.
router.delete('/todos/:todoId', async (req, res) => {
    
    let {todoId} = req.params;
    
    await new Todo().deleteTodo(todoId);
    
    let todos = await new Todo().getTodos();

    return res.render('home', {
        todos
    });
    
});

module.exports = router;