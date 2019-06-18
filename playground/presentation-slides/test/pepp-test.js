const sinon = require('sinon')

const SMSSender = {
    sendSMS: (number, msg) => {
        console.log("Send");
        return {success:true}
    }
}

const chargeMoneyService = {
    charge: (whom, howMuch) => {
        console.log("charge")
    }
}

test('When money charge is successful, send SMS to the user', () => {
    const SMSSenderSpy = sinon.spy(SMSSender, "sendSMS");
    const chargeMoneyProviderSpy = sinon.spy(chargeMoneyService, "charge");

    chargeMoneyService.charge("me@goldbergyoni.com" , 500);

    expect(SMSSenderSpy.called).toBe(true);
    expect(SMSSenderSpy.returned({success:true})).toBe(true);
    expect(SMSSenderSpy.calledOnceWith("0507621910", "Money sent")).toBe(true);
    expect(SMSSenderSpy.calledImmediatelyBefore(chargeMoneyProviderSpy)).toBe(true);
});

