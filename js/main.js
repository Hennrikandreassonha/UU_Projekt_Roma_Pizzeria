import { getFood } from "./pizza-api.js";

document.getElementById("get-food-form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent the default form submission behavior

    const ingredientInput = document.getElementById("ingredient");
    console.log(e)
    // Call the getFood function here
    if (ingredientInput != '') {
        getFood(ingredientInput).then(jsonObject => {
            console.log(jsonObject);
        });
    }

    // If getFood() returns a Promise, you can handle it like this:
    // getFood().then(response => {
    //     // Handle the response here
    // }).catch(error => {
    //     // Handle any errors here
    // })
});


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
