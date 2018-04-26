const APIKEY = "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
const PROJECTNAME = "FridgeRaider"
var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true"
var recipes;
function loadAjax(){
  queryURL = window.location.search
  url += queryURL.substring(queryURL.indexOf("?")+1)
  fetch(url,
    {headers:
      {"X-Mashape-Key": APIKEY,
      "Accept": "application/json"}}
    )
    .then(rsp => rsp.json())
    .then(rsp => {
      recipes = rsp.results
      console.log(rsp)
      document.getElementById("recipe_title").innerHTML = recipes[0].title
      document.getElementById("recipe_picture").src = recipes[0].image
    })
}

function loadNewRecipe(){
  var rand = parseInt(Math.random() * 9, 10)
  console.log(recipes[rand])
  document.getElementById("recipe_title").innerHTML = recipes[rand].title
  document.getElementById("recipe_picture").src = recipes[rand].image
  //PUT A PUT REQUEST FOR NPM FETCH PUT THE RECIPE INFO ON IT

}

document
  .addEventListener("DOMContentLoaded", loadAjax)
