const express = require('express')
const app = express()
const db = require("../funciones")
const DB = new db("../Data/productos.json");


app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.set("views","./views")
app.set('view engine', 'pug')


app.get("/productos", async (req, res) => {

    const data =await DB.getAll()
    console.log(data)
    res.render("productos",{productos:data})

})

app.listen(8080,()=>{
    console.log("pug funciona")
})