//client code
const {a} = require('./index');

//lodash-like
module.exports = {
    get a(){
        console.log('a')
        return require('./a');
    },
    get b(){
        console.log('b')
        return require('./b');
    }
};

//output: 'a' (not 'b')