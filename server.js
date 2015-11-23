/*
var http = require('http')
var port = process.env.PORT || 1337;

var server = http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/html"});
    response.write("<!DOCTYPE 'html'>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>Hello World Page</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("<h1>");
    response.write("Hello World!");
    response.write("</h1>");
    response.write("</body>");
    response.write("</html>");
    response.end();
    // Use connect method to connect to the Server
    MongoClient.connect(url, function (err, db) {
        response.write('Connection Made \n');
        if (err) {
            response.write('Unable to connect to the mongoDB server. Error:' + err + "\n");
            //Error so close connection
            db.close();
        } else {
            //HURRAY!! We are connected. :)
            response.write('Connection established to' + url +"\n");

            // do some work here with the database.

            //Done Close connection
            db.close();
        }
        response.end('Finished, Connection closed \n');
    });

});
server.listen(port);
console.log("Server is listening");
*/
require('./connect');