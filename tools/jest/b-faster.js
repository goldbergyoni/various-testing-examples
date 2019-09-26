module.exports = {
    doSomething: async () => {
        return new Promise((resolve, reject) => {
            //console.log('🐅 Faster 🐅');

            setTimeout(() => {
                resolve('result');
            }, 1);
        });

    }
};