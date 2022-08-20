var express = require('express');
var app = express();

app.get('https://jsonplaceholder.typicode.com/posts/get', async function (req, res) {
     await console.log(res.data)
})

var server = app.listen(8081, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)

})