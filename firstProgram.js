var http = require('http'),
    fs = require('fs');

const port = process.env.PORT || 3000;
fs.readFile('./Calculator.html', function (err, html) {
    if (err) {
        throw err; 
    }       
http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(port);
});
// Console will print the message
console.log(`Server running at port `+port);
