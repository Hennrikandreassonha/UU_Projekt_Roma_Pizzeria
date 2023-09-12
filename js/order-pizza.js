
export function orderPizza() {
    let orderFoodForm = document.getElementById("order-pizza-form");

    orderFoodForm.addEventListener("submit", function (e) {
        e.preventDefault();

        const pizzaSelect = document.getElementById("pizzaSelect");
        const cuisineInput = document.getElementById("drinkSelect");
        const mealTypeInput = document.getElementById("sideSelect");


        if (pizzaSelect.value.length > 0
            || cuisineInput.value.length > 0
            || mealTypeInput.value.length > 0) {

            const currentOrder = document.getElementById("current-order");
            let currentOrderHeader = document.createElement("h3");

            currentOrderHeader.textContent = "Din beställning:";

            currentOrder.appendChild(currentOrderHeader);
        }
    });

}
