import { getFood, getRandomDish, noIngredientAdded, addElementsToWidget } from "./food-finder-widget.js";

import { orderPizza } from "./order-pizza.js";

let orderFoodForm = document.getElementById("order-pizza-form");

if (orderFoodForm != undefined) {
    orderPizza();
}

let foodForm = document.getElementById("get-food-form")

if (foodForm != undefined) {
    foodForm.addEventListener("submit", function (e) {
        e.preventDefault(); // Prevent the default form submission behavior

        let dish = "";
        const ingredientInput = document.getElementById("ingredient");
        const cuisineInput = document.getElementById("cuisineType");
        const mealTypeInput = document.getElementById("mealType");

        console.log(ingredientInput.value)
        // Call the getFood function here
        if (ingredientInput.value !== '') {

            
            getFood(ingredientInput, cuisineInput, mealTypeInput).then(jsonObject => {
                dish = getRandomDish(jsonObject);

                addElementsToWidget(dish);
            });
            // console.log(dish)
        }
        else {
            noIngredientAdded();
        }

    });

}


let navElements = document.getElementById("main-nav").children;

for (let c of navElements) {
    let anchorElement = c.getElementsByTagName("a")[0];

    anchorElement.addEventListener("mouseenter", function () {
        showNavIcon(c);
    });

    anchorElement.addEventListener("mouseleave", function () {
        hideNavIcon(c);
    });
}

function showNavIcon(liElement) {
    let navIcon = liElement.getElementsByTagName("img")[0];
    
    if (navIcon) {

        navIcon.style.transition = 'all 1s ease';
        navIcon.style.transform = 'translateY(45px) rotate(180deg)';
    }
}

function hideNavIcon(liElement) {
    let navIcon = liElement.getElementsByTagName("img")[0];

    if (navIcon) {

        navIcon.style.transform = 'translateY(0)';
    }
}
