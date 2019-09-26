module.exports = {
    doSomething: async () => {
        return new Promise((resolve, reject) => {
            //console.log('🐅 Faster 🐅');

            setTimeout(() => {

                //throw new Error('foo')
                resolve('result');
            }, 101);
        });

    }
};