const express = require("express");
const app = express();

app.use(express.json());

const tasks = [];

const PORT = 5000;

// app.post("/api/tasks", function(req, res) {
//     const { id, title, completed } = req.body;

//     const newTask = { id, title, completed };
//     tasks.push(newTask);

//     res.status(201).json(newTask);
// });

// POST http method
app.post('/api/tasks', (req, res) => {
    const newTask = req.body;
    console.log('Received task data:', newTask);
    res.status(201).json({
        message: 'Task added successfully',
        task: newTask
    })

})


app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})