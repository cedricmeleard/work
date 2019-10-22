class Calculator {
    constructor() {

    }

    calculate(unitPrice, quantity) {
        return `${unitPrice*quantity} €`
    }
}

module.exports = Calculator