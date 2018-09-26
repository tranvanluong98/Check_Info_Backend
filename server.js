const express = require('express');
const server = express();
const port = process.env.PORT || 6969;
const bodyParser =  require('body-parser');
const session = require('express-session')
const moongose = require('mongoose');
const cors = require('cors');

// Thêm các model vào.
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
// Phần này dùng để có thể từ client gọi đến backend trên browser để sau deploy được lên herokuapp
server.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*');
    res.header('Access-Control-Allow-Credentials', 'true')
    res.header("Access-Control-Allow-Headers", "X-PINGOTHER, Content-Type");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE, HEAD, OPTIONS");
    next();
});

// Cho phép gọi đến server ở port localhost 6969
server.use(cors({ origin: [ 'https://localhost:6969' ], credentials: true }));
server.use(session({
    secret:"nothing in here",
    resave:false,
    // nếu muốn chức năng giỏ hàng thì để saveUninitialized:true
    saveUninitialized:false,
    // save cookie in 1 week
    cookie:{secure:false, maxAge:1000*60*60*24*7}

}))

// Các đường dẫn API 

server.get('/', (req,res)=>{
    res.send("Mua sách đi em êi !!")
})

// Kết nối tới db local của moongose

moongose.connect("mongodb://localhost/shoppingbook" , { useNewUrlParser: true } ,(err)=>{
    if(err) console.log(err);
    else console.log("Connect Server Successfully")
});

server.listen(port,(err)=>{
    if(err) console.err(err)
    else console.log("Server is running!!")
})





