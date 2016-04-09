'use strict';

const https = require('https');
const fs = require('fs');

const options = {
    hostname: 'localhost',
    port: 443,
    path: '/',
    method: 'GET',
    pfx: fs.readFileSync('../keys/client/client.pfx'),
    rejectUnauthorized: true
};

options.agent = new https.Agent({
    keepAlive: true,
    maxSockets: 5
});

let req;
for (let i = 0; i < 100; ++i) {
    req = https.request(options);
    req.end();    
}

console.log(options.agent);
console.log(options.agent.maxSockets);