export async function getFood(ingredient, cuisine = " ", mealType = " ") {

    //This will return a list of json objects containing dishes.
    console.log(ingredient.value);
    console.log(cuisine.value);
    console.log(mealType.value);


    let apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient.value}&app_id=af4aabde&app_key=27bea0fb7661816eb4e55a8e994f5e46%09`

    if (cuisine != " ") {

    }
    if (mealType != " ") {

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