let connection;

const msg = "Say: ";
const hello = "Hey there! lets play!"
const victory = "I am the greatest!"
const rematch = "Grr! I want a rematch!"
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
    process.exit();
  };
  if (key === 'w')
  connection.write('Move: up');
  if (key === 's')
  connection.write('Move: down');
  if (key === 'a')
  connection.write('Move: left');
  if (key === 'd')
  connection.write('Move: right');
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