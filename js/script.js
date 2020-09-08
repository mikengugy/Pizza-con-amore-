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

Order.prototype.pizzaCost = function(){
    if (this.customSize === "small" && this.crust === "crispy"){
        pizzaPrice = 700;
    } 
    else if(this.customSize === "medium" && this.crust === "crispy"){
        pizzaPrice = 900;
    }
    else if(this.customSize === "large" && this.crust === "crispy"){
        pizzaPrice = 1100;
    }
    else if(this.customSize === "family" && this.crust === "crispy"){
        pizzaPrice = 1600;
    }
    else if(this.customSize === "small" && this.crust === "stuffed"){
        pizzaPrice = 650;
    }
    else if(this.customSize === "medium" && this.crust === "stuffed"){
        pizzaPrice = 850;
    }
    else if(this.customSize === "large" && this.crust === "stuffed"){
        pizzaPrice = 1050;
    }
    else if(this.customSize === "family" && this.crust === "stuffed"){
        pizzaPrice = 1550;
    }
    else if(this.customSize === "small" && this.crust === "thick"){
        pizzaPrice = 650;
    }
    else if(this.customSize === "medium" && this.crust === "thick"){
        pizzaPrice = 850;
    }
    else if(this.customSize === "large" && this.crust === "thick"){
        pizzaPrice = 1050;
    }
    else if(this.customSize === "family" && this.crust === "thick"){
        pizzaPrice = 1550;
    }
    else if(this.customSize === "small" && this.crust === "flatbread"){
        pizzaPrice = 700;
    }
    else if(this.customSize === "medium" && this.crust === "flatbread"){
        pizzaPrice = 950;
    }
    else if(this.customSize === "large" && this.crust === "flatbread"){
        pizzaPrice = 1100;
    }
    else if(this.customSize === "family" && this.crust === "flatbread"){
        pizzaPrice = 1600;
    }
    else {
        return("Please select your order");
    }
    return pizzaPrice;
}


// User interface logic
