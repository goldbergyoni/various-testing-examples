describe.skip('', () => {
    before(() => {
        //adding sites and admins data to our DB. Where is the data? outside. At some external json or migration framework
        await DB.AddSeedDataFromJson('seed.json');
    });
    it("When updating site name, get successful confirmation", async () => {
        //I know that site name "portal" exists - I saw it in the seed files
        const siteToUpdate = await SiteService.getSiteByName("Portal");
        const updateNameResult = await SiteService.changeName(siteToUpdate, "newName");
        expect(updateNameResult).to.be(true);
    });
    it("When querying by site name, get the right site", async () => {
        //I know that site name "portal" exists - I saw it in the seed files
        const siteToCheck = await SiteService.getSiteByName("Portal");
        expect(siteToCheck.name).to.be.equal("Portal"); //Failure! The previous test change the name :[
    });
});

