require("dotenv").config();
const express = require("express");
const massive = require("massive");
const {getAll,getOne,update,create,Delete} = require("./products_controller");

const app = express();

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive(CONNECTION_STRING)
.then(dbInstance => {
    app.set("db", dbInstance);
})
.catch(err => {
    console.log(err)
})



app.use(express.json());


app.get("/api/products", getAll);

app.get("/api/products/:id", getOne)

app.put("/api/products/:id", update)

app.post("/api/products", create)

app.delete("/api/products/:id", Delete)

app.listen(SERVER_PORT, () =>{
    console.log(`I am listening on ${SERVER_PORT}`)
});