function loadAjax(){
  var autoCompTextURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/parseIngredients?includeNutrition=false";
  var myIngredient = document.getElementById("ingredient").value;
  console.log("making fetch to", autoCompTextURL)

  fetch(autoCompTextURL, {
    body: "ingredientList="+myIngredient+"&servings=2",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded",
      "X-Mashape-Key": "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
    },
    method: "POST"
  })
}

document.addEventListener("DOMContentLoaded", loadAjax)
