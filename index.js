const express = require('express');
const app = express();

app.use("/static", express.static("public"));
app.use(express.urlencoded({ extended: true }));

// View Engine Configuration
app.set("view engine", "ejs");

//GET Method
app.get('/', (req, res) => {
    res.render("todo.ejs");
});


//POST Method
app.post('/',(req, res) => {
    console.log(req.body);
});

app.listen(8080, () => {
    console.log("Server is Up and Running on 8080");
});