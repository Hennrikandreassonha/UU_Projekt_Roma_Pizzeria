export async function getFood(ingredient){
    console.log(ingredient.value);

    let apiEndpoint = `https://api.edamam.com/api/recipes/v2?type=public&q=${ingredient.value}&app_id=af4aabde&app_key=27bea0fb7661816eb4e55a8e994f5e46%09`

    const response = await fetch(apiEndpoint);
    const data = await response.json();
    return data;
}