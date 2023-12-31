const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
    res.send("hello world!");
});

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
    console.log(`app started on port ${PORT}`)
});

//import the routes
const todoRoutes = require('./routes/todos');

//configure the app
app.use(todoRoutes);

app.use(express.urlencoded({
    extended:true
}));

app.set("view engine", "ejs");

app.set("views", "restAPI/views/pages");

app.use('/static', express.static(`${__dirname}/public`));