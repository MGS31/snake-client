const net = require('net');

const connect = function() {
  const conn = net.createConnection({
    host: 'localhost',
    port: 50541
  });
    conn.on('data', (data) => {
    conn.end();
  });
    conn.on('end', () => {
    console.log('you ded cuz you idled');
  });


  conn.setEncoding('utf8');

  return conn;
};

console.log("Connecting ...");
connect();