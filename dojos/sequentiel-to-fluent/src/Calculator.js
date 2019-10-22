class Calculator {
    constructor() {

    }
    withUnitPrice(unitPrice) {
        this.unitPrice = unitPrice;
        return this
    }

    withQuantity(quantity) {
        this.quantity = quantity;
        return this
    }

    calculate() {
        return `${ this.unitPrice * this.quantity } €`
    }
}

module.exports = Calculator