module.exports = {
  doSomething: async () => new Promise((resolve, reject) => {    
    
    const user = {};
    user.name = 'Yoni';
    user.phone = "423221";

      setTimeout(() => {
        resolve(['apple', 'mango']);
      }, 200);
    }),
};
