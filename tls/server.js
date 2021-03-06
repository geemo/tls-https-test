'use strict';

const tls = require('tls');
const fs = require('fs');

const options = {
	pfx: fs.readFileSync('../keys/server/server.pfx'),
	requestCert: true   //if true the server will request a certificate from clients
						//that connect and attempt to verify that certificate. Default: fasle.
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