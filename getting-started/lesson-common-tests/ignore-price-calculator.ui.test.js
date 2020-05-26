const {render} = require('@testing-library/react')
test('When premium user, Then price should be 90%', () => {
    //Arrange
    const {getByLabelText, fireEvent} = render( < PriceCalculator / > );

    //Act
    const catalogPriceTextBox = getByLabelText('Catalog-price');
    fireEvent.change(catalogPriceTextBox, {target: {value: '100'}})
    const isPremiumTextBox = getByLabelText('Is-premium');
    fireEvent.change(isPremiumTextBox, {target: {value: 'Yes'}})
    fireEvent.change(getByLabelText('Submit'));

    //Assert
    expect(getByText('Final price')).toEqual('90');
});


