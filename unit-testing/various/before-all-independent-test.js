let globalStringComparer;

before(() => {
    //Initialize
    const encoding = new EncodingProvider('utf-8');
    const comparingAlgorithm = new MatchAlgorithm();
    globalStringComparer = new StringComparer(encoding, comparingAlgorithm);
    //Options
    globalStringComparer.options.caseSensitive = false;
});

it('When strings have different casing, then should not match', () => {
    globalStringComparer.options.caseSensitive = true;
    const receivedResult = globalStringComparer.compare("Tropical island", "tropical island");
    expect(receivedResult).toBe(false);
});

it('When string have different casing, then should match', () => {
    const receivedResult = globalStringComparer.compare("Tropical island", "tropical island");
    expect(receivedResult).toBe(true); // Failure ❌
});

it('When string equal, return true', () => {
    const stringComparer = testHelpers.factorStringComparer({
        encoding: 'utf-8',
        caseSensitive: false
    });

    const receivedResult = stringComparer.compare("Tropical island", "tropical island");
    expect(receivedResult).toBe(true); // Success ✅
});


class MatchAlgorithm {

}

class testHelpers {
    static factorStringComparer(options) {

    }
}

class EncodingProvider {

}

class StringComparer {
    compare() {

    }

}