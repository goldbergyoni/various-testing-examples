describe.skip('', () => {
    test("When querying for admins, then get only admins but no users", () => {
        addAdministrators("admin1", "admin2");

        const allAdmins = getUsers({
            adminOnly: true
        });

        expect(allAdmins).to.include.ordered.members(["admin1", "admin2"])
            .but.not.include.ordered.members(["user1"]);
    });

    test("When querying for admins, then get only admins but no users", () => {
        addAdministrators("admin1", "admin2");

        const allAdmins = getUsers({
            adminOnly: true
        });

        let admin1Found = false;
        let admin2Found = false;

        allAdmins.forEach(someUser => {
            if (someUser === "admin1") {
                admin1Found = true;
            }
            if (someUser === "admin2") {
                admin2Found = true;
            }
        });

        expect(admin1Found).toBe(true);
        expect(admin2Found).toBe(true);
    });

    test("When asking for an admin, ensure only ordered admins in results", () => {
        //assuming we've added here two admins
        const allAdmins = getUsers({
            adminOnly: true
        });

        expect(allAdmins).to.include.ordered.members(["admin1", "admin2"])
            .but.not.include.ordered.members(["user1"]);
    });

    test("When asking for an admin, ensure only admins in results", () => {
        //act
        const allAdmins = getUsers({
            adminOnly: true
        });

        //assert
        const admin1Found, admin2Found = false;
        allAdmins.forEach(aSingleUser => {
            if (aSingleUser === "user1") {
                assert.notEqual(aSingleUser, "user1", "A user was found and not admin");
            }
            if (aSingleUser === "admin1") {
                admin1Found = true;
            }
            if (aSingleUser === "admin2") {
                admin2Found = true;
            }
        });

        if (!admin1Found || !admin2Found) {
            throw new Error("Not all admins were returned");
        }
    });
});

function addAdministrators() {

}

function getUsers() {

}