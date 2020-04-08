const sinon = require('sinon')

const moduleToTest = {
    a: function () {
        this.b();
        this.c();
    },
    b: function () {},
    c: function () {}
}

//The code shadow 🕵🏼‍
test('a should call b & c', () => {
    const spyOnB = sinon.spy(moduleToTest, "b");
    const spyOnC = sinon.spy(moduleToTest, "c");
    moduleToTest.a();
    expect(spyOnB.calledOnce).toBe(true);
    expect(spyOnC.calledOnce).toBe(true);
});

