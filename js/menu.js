export function viewPizza(clickedPizza) {
    // Clicking the pizza will expand the li and show ingredients.
    console.log(clickedPizza);

    let pizzaInfoUl = clickedPizza.querySelector(".pizza-info");

    if (pizzaInfoUl.classList.contains("display-none")) {

        pizzaInfoUl.classList.remove("display-none");
        pizzaInfoUl.classList.add("dispay-block");
    }
    else {
        pizzaInfoUl.classList.remove("dispay-block");
        pizzaInfoUl.classList.add("display-none");
    }
}
