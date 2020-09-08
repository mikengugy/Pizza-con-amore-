// business logic
function Order(customSize, crust) {
    this.customSize = customSize;
    this.crust = crust;
    this.toppings = [];
}

function Topping(pepperoni, cheese, bacon, mushrooms, onions, sausage, spinach, blackOlives) {
    this.pepperoni = pepperoni;
    this.cheese = cheese;
    this.bacon = bacon;
    this.mushrooms = mushrooms;
    this.onions = onions;
    this.sausage = sausage;
    this.spinach = spinach;
    this.blackOlives = blackOlives;
}

