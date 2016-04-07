'use strict';

const tls = require('tls');
const fs = require('fs');

const options = {
	pfx: fs.readFileSync('../keys/client/client.pfx')
};

let socket = tls.connect(80, options, () => {
	console.log('client connected',
		socket.authorized ? 'athorized' : 'unauthorized');
	process.stdin.pipe(socket);
	setTimeout(() => {
		socket.removeListener('data', () => {
			console.log('asdf');
		});
		process.stdin.unpipe(socket);
		process.exit();
	}, 5000);
});

socket.setEncoding('utf8');
socket.on('data', data => {
	console.log(data);
});

socket.on('end', () => {
	server.close();
});