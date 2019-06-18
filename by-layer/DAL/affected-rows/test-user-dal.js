const UserDal = require('./user-dal')

describe('User DAL', () => {
    describe('Update user email', () => {
        test('When a single customer exists, expect 1 row to be updated', () => {
            //Arrange
            const userToSave = {name:'Tyler Durden'};
            const DALUnderTest = new UserDal();
            const userToUpdate = DALUnderTest.saveUser(userToSave);
            
            //Act
            const reocrdsAffected = new UserDal().updateUser(userToUpdate);

            //Assert
            expect(reocrdsAffected).toBe(1);
        });
    });
});