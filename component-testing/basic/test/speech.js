
// or, override the platform
console.log("foo")
const Say = require('say').Say
const say = new Say('darwin')

// Use default system voice and speed
say.speak('Hello!')

// Stop the text currently being spoken
say.stop()
console.log("loo")