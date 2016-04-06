'use strict';

const tls = require('tls');
const fs = require('fs');

const options = {
	pfx: fs.readFileSync('./keys/server/server.pfx'),
	requestCert: true
};

let server = tls.createServer(options, socket => {
	console.log('server connected',
		socket.authorized ? 'authorized' : 'unauthorized');
	socket.write('welcome!\n');
	socket.setEncoding('utf8');
	socket.pipe(socket);
});

server.listen(80, () => {
	console.log('server bound');
});