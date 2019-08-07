it('TestJavaScript.com is renderd correctly', () => {
    //Arrange       
    
    //Act
    const receivedPage = renderer
        .create( <DisplayPage page = "http://www.testjavascript.com" > Test JavaScript < /DisplayPage>)
        .toJSON();

    //Assert
    expect(receivedPage).toMatchSnapshot();
    //We now implicitly maintain a 2000 lines long document
    //every additional line break or comment - will break this test
});

it('When visiting TestJavaScript.com home page, a menu is displayed', () => {
    //Arrange       
    
    //Act
    receivedPage tree = renderer
        .create( <DisplayPage page = "http://www.testjavascript.com" > Test JavaScript < /DisplayPage>)
        .toJSON();

    //Assert
    const menu = receivedPage.content.menu;
    expect(tree).toMatchInlineSnapshot(`
        <ul>
            <li>Home</li>
            <li> About </li>
            <li> Contact </li>
        </ul>
        `);
});
