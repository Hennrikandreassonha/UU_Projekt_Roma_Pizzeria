import { getFood, getRandomDish, noIngredientAdded } from "./food-finder-widget.js";

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


                console.log(dish);

                console.log(dish.recipe.images.REGULAR.url);

                let dishimg = document.createElement("img");
                dishimg.src = dish.recipe.images.REGULAR.url;

                const response = document.getElementById("food-widget-response");

                response.appendChild(dishimg);
            });
            // console.log(dish)
        }
        else{
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
        navIcon.classList.add("hide-element")
        navIcon.classList.add("show-element")

        navIcon.style.transition = 'all 1s ease';
        navIcon.style.transform = 'translateY(45px) rotate(180deg)';
    }
}

function hideNavIcon(liElement) {
    let navIcon = liElement.getElementsByTagName("img")[0];

    if (navIcon) {
        navIcon.classList.remove("show-element")
        navIcon.classList.add("hide-element")

        navIcon.style.transform = 'translateY(0)';
    }
}
