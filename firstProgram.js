var http = require('http'),
    fs = require('fs');


fs.readFile('./Calculator.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);  
        response.end();  
    }).listen(3000);
});
// Console will print the message
console.log('Server running at http://localhost:3000/');