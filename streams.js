var fs = require("fs");

// Old way to use streams in Node JS
var readableStream = fs.createReadStream("./file1.txt");
var data = "";

readableStream.on("data", function(chunk) {
    data+=chunk;
});

readableStream.on("end", function() {
    console.log(data);
});

// New way to use streams in Node JS
fs.createReadStream("./file2.txt").pipe(process.stdout);