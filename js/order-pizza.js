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

            insertHeader(currentOrder);
            showTable(currentOrder);
            insertItems(currentOrder);
            insertOrderBtn(currentOrder);

            orderFoodForm.reset();
        }
    });
}

function insertOrderBtn(currentOrderElement) {
    if (currentOrderElement.querySelector("#order-btn") == undefined) {

        let orderBtn = document.createElement("button");
        orderBtn.textContent = "Beställ";
        orderBtn.id = "order-btn"

        currentOrderElement.appendChild(orderBtn);

        orderBtn.addEventListener("click", makeOrder);
    }
}
function makeOrder() {
    const currentOrder = document.getElementById("current-order");
    clearOrder(currentOrder);

    let orderConfirm = document.createElement("p");
    orderConfirm.textContent = "Tack för din beställning!";
    orderConfirm.classList.add("bold-text");
    orderConfirm.classList.add("confirm-msg");

    orderConfirm.style.textDecoration = "underline";

    currentOrder.appendChild(orderConfirm);
}
function clearOrder(currentOrder) {
    //Need to clear response section if user clicks submit again.
    while (currentOrder.firstChild) {
        currentOrder.removeChild(currentOrder.firstChild);
    }
}
function insertHeader(currentOrderElement) {

    if (currentOrderElement.querySelector("#order-header") == undefined) {
        var firstChild = currentOrderElement.firstChild;

        let currentOrderHeader = document.createElement("h3");
        currentOrderHeader.id = "order-header"

        currentOrderHeader.textContent = "Din beställning:";

        currentOrderElement.insertBefore(currentOrderHeader, firstChild);
    }
}
function showTable(currentOrderElement) {
    let orderTable = currentOrderElement.querySelector("#order-table");

    console.log(orderTable);
    if (orderTable.classList.contains("hide-element")) {
        orderTable.classList.remove("hide-element");
        orderTable.classList.add("show-element");
    }
}

function insertItems(currentOrderElement) {

    //Inserts items into the "current order"
    const pizzaSelect = document.getElementById("pizzaSelect");
    const cuisineInput = document.getElementById("drinkSelect");
    const sideInput = document.getElementById("sideSelect");

    let orderTable = currentOrderElement.querySelector("#order-table")

    let trElement = document.createElement("tr");

    let pizzaTd = document.createElement("td");
    let drinkTd = document.createElement("td");
    let sidesTd = document.createElement("td");

    if (pizzaSelect.value.length > 0) {
        pizzaTd.textContent = pizzaSelect.value;
    }
    else {
        pizzaTd.textContent = "-";

    }

    if (cuisineInput.value.length > 0) {
        drinkTd.textContent = cuisineInput.value;
    }
    else {
        drinkTd.textContent = "-";
    }

    if (sideInput.value.length > 0) {
        sidesTd.textContent = sideInput.value;
    }
    else {
        sidesTd.textContent = "-";
    }

    trElement.appendChild(pizzaTd);
    trElement.appendChild(drinkTd);
    trElement.appendChild(sidesTd);

    orderTable.appendChild(trElement);
}