const sinon = require('sinon')

const SMSSender = {
    sendSMS: (number , msg) =>{
        console.log("Send")
    }
}

test('should do something', () => {
    const SMSSender = sinon.stub(SMSSender , "sendSMS");

    //pre-programmed behavior (Stub)
    SMSSender.returns({succeed: true})//simple
    SMSSender.throws({code:'no-credit'})//exception
    SMSSender.withArgs("0507621940")
        .onFirstCall().returns({success:true});//fancy

    
    
    //assert behaviour
    
    assert(SMSSender.called);//just called
    assert(SMSSender.withArgs("0507621940").calledOnce);//with specific args
});
