//Get all versions somehow
const allVersions = [{name: 'config a', a:1, a:2}, {name: 'config b', a:1, c:2}];

test.each(...allVersions)('When creating a config version %o.name, it contain all keys)',
    (versionToCheck) => {
        //Arrange
        const configInterface = {a:1 , d:4 , r:5}; 
        //You can destruct here and filter out for the relevant keys only

        //Act

        //Assert  
        expect(versionToCheck).toContainAllKeys(Object.keys(configInterface));
    },
);

