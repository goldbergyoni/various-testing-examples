module.exports = {
    getUser: (id) => {
        //In real system this will call the users API
        console.log('Real user service was called');
        return {
            id,
            name: 'John'
        }
    }
};