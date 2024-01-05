let express = require("express")
let app = express()

app.get("/", (req, res) =>{ // ho creato una middleware
    res.send("Benvenuto")   //usiamo get perche la pgina si trova nel' url
})

app.get("/secondaPagina", (req, res) =>{ // ho creato una middleware
    res.send("Sei nella seconda pagina")
})

app.get("/terzaPagina", (req, res) =>{ // ho creato una middleware
    res.sendFile(__dirname + "/html/index.html") //invia un file per vedere il file html
})

var server = app.listen(3000, ()=> {
    console.log("Prova")
})