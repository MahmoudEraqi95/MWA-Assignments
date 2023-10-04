const http = require("http")
const fs = require("fs")
const index = fs.readFileSync(__dirname + "\\public\\index.html")
const page1 = fs.readFileSync(__dirname + "\\public\\page1.html")
const page2 = fs.readFileSync(__dirname + "\\public\\page2.html")
let route = index
const router = function (req, res) {
   
    if(req.method==="POST"){
       res.end(JSON.stringify({'name':"mahmoud"}))
    }
    console.log(req.url);
    switch (req.url) {
        case "/": {
            console.log("selected /");
            route = index
            break;
        }
        case "/page1": {
            console.log("selected page1");
            route = page1
            break;
        }
        case "/page2": {
            console.log("selected page2");
            route = page2
            break;
        }

    }
    
    res.end(route)


}


const app = http.createServer(router)
app.listen(7272, function () {
    console.log("listeneing on 7272");
})
