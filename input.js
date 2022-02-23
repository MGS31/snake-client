
const { MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_RIGHT_KEY, MOVE_LEFT_KEY } = require('./constants');

let connection;

const msg = "Say: ";
const hello = "Hey!"
const victory = "I am the greatest!"
const rematch = "I want a rematch!"
const leave = "I gotta sign off!"

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  stdin.on('data', key => {
    handleUserInput(key);
  });
  return stdin;
};


const handleUserInput = function(key) {
  if (key === '\u0003') {
    console.log("You have logged off!")
    process.exit();
  };
  if (key === 'w')
  connection.write(MOVE_UP_KEY);
  if (key === 's')
  connection.write(MOVE_DOWN_KEY);
  if (key === 'a')
  connection.write(MOVE_LEFT_KEY);
  if (key === 'd')
  connection.write(MOVE_RIGHT_KEY);
  if (key === 'z')
  connection.write(msg + hello);
  if (key === 'x')
  connection.write(msg + victory);
  if (key === 'c')
  connection.write(msg + rematch);
  if (key === 'v')
  connection.write(msg + leave);
};

module.exports = {
  setupInput
}