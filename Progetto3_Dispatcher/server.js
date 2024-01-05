let http = require("http")
let url = require("url")

//dispatcher ti serve per smistare il percorso del url

http.createServer((req,res)=>{

    let mioUrl = url.parse(req.url, true) //con true ho un object licteral con false ho una stringa
    //res.end("MEssaggio")
    //res.end(mioUrl.path) //mi ritorna il percorso

    switch (mioUrl.path) {
        case "/":
            res.end("HOME PAGE")
            break;
        case "/pluto":
            res.end("PAGINA PLUTO")
            break;
    
        default:
            break;
    }

}).listen("3000")