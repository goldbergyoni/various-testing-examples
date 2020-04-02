const countriesList = require('countries-list')

module.exports = {
    factorClipInstructions: () => {
        return {
            destination: countriesList.countries.US,
            startDate: '30/12/2019',
            endDate: '02/02/2020',
            photos: [],
            tips: [],
            slogan: ''
        }
    }
}