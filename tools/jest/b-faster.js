module.exports = {
    doSomething: async () => {
        return new Promise((resolve, reject) => {
            //console.log('🐅 Faster 🐅');

            const b = 7;

            setTimeout(() => {

                //throw new Error('foo')
                resolve(['banana', 'apple', 'mango']);
            }, 10);
        });

    }
};