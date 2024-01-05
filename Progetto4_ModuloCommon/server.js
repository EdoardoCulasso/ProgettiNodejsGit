let http = require("http")

let modulo = require("./mioModulo")

http.createServer((req, res)=>{

    res.end(modulo.somma(5,7).toString()) //la end vuole una stringa quindi devo fare .string

}).listen("3000")