module.exports = {
    classifyCustomer: ({spent, joined, returns}) => {
            if (!spent || !joined || !returns) {
                throw new Error('Invalid params');
            }
            let customerClassiciationResult = 'basic';

            if (spent > 500) {
                if (returns <= 1) {
                    customerClassiciationResult = 'premium';
                } else {
                    customerClassiciationResult = 'preferred';
                }

            } else if (returns > 2 && (calculateDiffBetweenDates(now(), joined) < 60)) {
                customerClassiciationResult = 'fire';
            }

            return customerClassiciationResult;

        },

        calculateDiffBetweenDates: (date1, date2) => {
            var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

            return Math.round(Math.abs((date1.getTime() - date2.getTime()) / (oneDay)));
        }
};