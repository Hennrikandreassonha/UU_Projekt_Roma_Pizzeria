export async function getFood(ingredient, cuisine = undefined, mealType = undefined) {

    //This will return a list of json objects containing dishes.
    console.log(ingredient.value);
    console.log(cuisine.value);
    console.log(mealType.value);


    let apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient.value}&app_id=af4aabde&app_key=27bea0fb7661816eb4e55a8e994f5e46%09`

    if (cuisine.value.length > 0) {
        apiEndpoint += `&cuisineType=${cuisine.value}`;

        console.log("cuisine")
    }
    if (mealType.value.length > 0) {
        apiEndpoint += `&mealType=${mealType.value}`;
    }

    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
}

export function getRandomDish(jsonObjectList) {
    //Getting a random dish using the getRandom function
    let dishIndex = getRandomIndex(jsonObjectList.hits.length);

    return jsonObjectList.hits[dishIndex];
}


function getRandomIndex(listLength) {
    //Getting a random index that we use to get a dish.
    return Math.floor(Math.random() * listLength);
}
export function noIngredientAdded() {

    const response = document.getElementById("get-food-form");

    //Check if there already is an error element before creating it.
    if (response.querySelector("#errmsg-element") == undefined) {

        let errmsg = document.createElement("p");
        errmsg.id = "errmsg-element";
        errmsg.textContent = "Fyll i en ingrediens!";
        errmsg.classList.add("italian-red-text");

        response.appendChild(errmsg);
    }
}

//Elements below is handling the response and building the widget response

const response = document.getElementById("food-widget-response");

export function addElementsToWidget(dish) {
    clearRespone();

    let dishImg = dish.recipe.images.REGULAR.url;
    let dishLabel = dish.recipe.label;
    let cuisineType = dish.recipe.cuisineType[0];
    let typeOfDish = dish.recipe.mealType[0];
    let dishLink = dish.recipe.url;

    let responseHeaderElement = document.createElement("h3");
    responseHeaderElement.textContent = `Idag skall du äta:`;

    //Dishname
    let responseDishNameElement = document.createElement("h3");
    responseDishNameElement.textContent = dishLabel;
    responseDishNameElement.classList.add("response-heading");

    let cuisineTypeElement = document.createElement("p");
    cuisineTypeElement.textContent = `Dagens måltid är en ${cuisineType} ${typeOfDish}`;

    let cuisineLinkParagraf = document.createElement("p");
    cuisineLinkParagraf.textContent = `Läs mer om receptet här:`;

    let cuisineLink = document.createElement("a");
    cuisineLink.href = dishLink;
    cuisineLink.textContent = dishLink;

    let dishImgElement = document.createElement("img");
    dishImgElement.src = dishImg;
    dishImgElement.classList.add("response-picture");

    response.appendChild(responseHeaderElement);
    response.appendChild(responseDishNameElement);
    response.appendChild(cuisineTypeElement);
    response.appendChild(cuisineLinkParagraf);
    response.appendChild(cuisineLink);
    response.appendChild(dishImgElement);

    getNewDishElement();
}

function getNewDishElement() {

    let response = document.getElementById("get-food-form");
    console.log(response.querySelector("#new-msg"));

    let errMsgToRemove = document.getElementById("errmsg-element");

    if (errMsgToRemove != null) {
        errMsgToRemove.remove();
    }
    if (response.querySelector("#new-msg") === null) {

        let newDishElement = document.createElement("p");
        newDishElement.id = "new-msg";
        newDishElement.textContent = "Inte sugen på detta? Tryck igen!";

        newDishElement.classList.add("bold-text");
        response.appendChild(newDishElement);
    }

}
function clearRespone() {
    //Need to clear response section if user clicks submit again.
    while (response.firstChild) {
        response.removeChild(response.firstChild);
    }
}