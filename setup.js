module.exports = async () => {
    // ...
    // Set reference to mongod in order to close the server during teardown.
    console.log('mongod','test')
    global.__MONGOD__ = 'test';
  };