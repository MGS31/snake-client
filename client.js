const net = require('net');
const { IP, PORT } = require('./constants')

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });
    conn.on('connect', () => {
        console.log('You successfully connected to the game server!');
        conn.write('Name: MGS');
       /*  setInterval(() => {
          conn.write('Move: up');
        }, 50); */
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

module.exports = {
  connect
};
