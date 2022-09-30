const http = require("http");

const port = 4000;


http.createServer((request, response) => {
    if (request.url == "/") {
        response.writeHead(200, { 'Content-Type': 'text/plain' });
        response.end('Welcome to Booking System')
    }
    if (request.url == "/profile" && request.method == "GET") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Welcome to your profile!')
    }
    if (request.url == "/courses" && request.method == "GET") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end(`Here's our courses available`)
    }
    if (request.url == "/addcourse" && request.method == "POST") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Add a course to our resources')
    }
    if (request.url == "/updatecourse" && request.method == "PUT") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Update a course to our resources')
    }
    if (request.url == "/archivecourses" && request.method == "DELETE") {
        response.writeHead(200, { 'Content-Type': 'text/plain' })
        response.end('Archive courses to our resources')
    }

}).listen(port)

console.log(`Server is running at localhost:${port}`)