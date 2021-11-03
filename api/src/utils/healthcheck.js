const http = require('http');

const options = {  
    host : 'localhost',
    port : '5000',
    path: '/api/healthy',
    timeout : 2000
};

const request = http.request(options, (res) => {  
    console.log(`STATUS: ${res.statusCode}`);
    if (res.statusCode == 200) {
        process.exit(0);
    }
    else {
        process.exit(1);
    }
});

// eslint-disable-next-line no-unused-vars
request.on('error', function(_err) {  
    console.log('ERROR');
    process.exit(1);
});

request.end();