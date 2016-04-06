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
	process.stdin.resume();
});

socket.setEncoding('utf8');
socket.on('data', data => {
	console.log(data);
});

socket.on('end', () => {
	server.close();
});