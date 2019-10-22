class Calculator {
    constructor() {

    }
    withUnitPrice(unitPrice) {
        let unitPriceHelper = new WithUnitPriceHelper(unitPrice);

        return unitPriceHelper;
    }
}

class WithUnitPriceHelper {
    constructor(unitPrice) {
        this.unitPrice = unitPrice;
    }

    withQuantity(quantity) {
        let quantityHelper = new WithQuantityHelper(this.unitPrice, quantity);

        return quantityHelper;
    }
}
class WithQuantityHelper {
    constructor(unitPrice, quantity) {
        this.unitPrice = unitPrice;
        this.quantity = quantity;
    }
    calculate() {
        return `${ this.unitPrice * this.quantity } €`
    }

}


module.exports = Calculator