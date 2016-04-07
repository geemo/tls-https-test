'use strict';

const https = require('https');
const fs = require('fs');
const options = {
	'key': fs.readFileSync('../keys/server/server-key.pem'),
	'cert': fs.readFileSync('../keys/server/server-cert.pem')
};

let server = https.createServer(options, (req, res) => {
	res.writeHead(200, 'Ok', {'Content-Type': 'text/plain'});
	res.end('hello world\r\n');
});

server.listen(443, () => {
	console.log('server bound');
});