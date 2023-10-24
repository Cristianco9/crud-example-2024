const express = require('express');
const mysql = require('mysql');
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();

let connection = mysql.createConnection({
    host: "localhost",
    database: "cardsDB",
    user: "root",
    password: "1234567890",
    port: "3306"
})

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "ejs");

app.use(express.static('public'));

app.get("/", (req,res) => {
    res.render("inputData");
});

app.get('/app.js', (req, res) => {
    res.type('text/javascript');
});  

app.post("/save", (req,res) => {
    const data = req.body;
    res.send('Datos guardados exitosamente en un objeto');

    let number = data.number;
    let name = data.name;
    let date = data.date;
    let code = data.code;
    let id = data.id;

    let search = "SELECT * FROM card_data WHERE number = "+number+"";

    connection.query(search, (error, row) => {
        if(error){
            throw error;
        } else {
            if(row.length>0){
                console.log("Esta tarjeta ya se encuentra registrada");
            } else {
                let insertData = "INSERT INTO  card_data (number, name, date, code, id) VALUES ('"+number+"','"+name+"','"+date+"','"+code+"','"+id+"')";
                connection.query(insertData, (error) => {
                    if(error){
                        throw error;
                    } else {
                        console.log("Datos guardados exitosamente en la base de datos")
                    }
                });         
            }
        }
    });
});

const port = process.env.PORT || 3000; 
app.listen(port, () => {
    console.log('servidor desplegado en el puerto 3000');
});