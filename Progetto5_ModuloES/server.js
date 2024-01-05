import http from "http"
import {somma, sottrazione} from "./mioModulo.js"

http.createServer((req, res)=>{

    res.end(somma(5,7).toString())

}).listen("3000")