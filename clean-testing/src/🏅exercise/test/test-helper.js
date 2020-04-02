const countriesList = require('countries-list')

module.exports = {
    factorClipInstructions: (overrides) => {
        return Object.assign(overrides, {
            creator: {
                name: "Yoni Goldberg",
                email: "yoni@testjavascript.com"
            },
            destination: countriesList.countries.US,
            startDate: '30/12/2019',
            endDate: '02/02/2020',
            photos: [],
            tips: [],
            slogan: ''
        });
    }
}