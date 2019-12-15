describe.skip('', () => {
    test("When updating site name, get successful confirmation", async () => {
        //test is adding a fresh new records and acting on the records only
        const siteUnderTest = await SiteService.addSite({
            name: "siteForUpdateTest"
        });

        const updateNameResult = await SiteService.changeName(siteUnderTest, "newName");

        expect(updateNameResult).to.be(true);
    });
});