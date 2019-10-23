const Calculator = require('./../src/Calculator')


describe('Testing calculator class', () => {

    test('given unitPrice 2.21 and quantity of 3 should return "6.63 €"', () => {
        let calculator = new Calculator();

        let result = calculator
            .withUnitPrice(2.21)
            .withQuantity(3)
            .calculate()

        expect(result).toEqual("6.63 €")
    })

})