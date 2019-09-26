module.exports = {
    doSomething: async () => {
        return new Promise((resolve, reject) => {
            //console.log('🐢 slower 🐢');

            setTimeout(() => {
                resolve('result');
            }, 201);
        });

    }
};