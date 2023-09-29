const http = require("http");
const utils = require("./modules/utils.js");
const url = require("url");

http.createServer(function (req, res) {
	const name = url.parse(req.url, true).query.name || undefined;

    if (name !== undefined) {
		let currentDate = utils.getDate();
		const resMessage = `<p style="color: blue;">Hello ${name}, What a beautiful day. Server current date and time is ${currentDate}</p>`;
		res.writeHead(200, {
			"Content-Type": "text/html",
		});
		res.end(resMessage);
	} else {
		res.writeHead(200, { "Content-Type": "text/plain" });
		res.end("COMP 4537 Lab 3 Anna & Edmond. Add name query to the url to see the greeting,");
	}
}).listen(process.env.PORT || 5000);
