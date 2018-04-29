const APIKEY = "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
const PROJECTNAME = "FridgeRaider"
var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true"
var recipe_info = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/"
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
      console.log(recipes)
      document.getElementById("recipe_title").innerHTML = recipes[0].title
      document.getElementById("recipe_picture").src = recipes[0].image

      var instrct1url = recipe_info + recipes[0].id + "/analyzedInstructions"
      fetch(instrct1url,
        {headers:
          {"X-Mashape-Key": APIKEY,
          "Accept": "application/json"}}
      )
      .then(rsp => rsp.json())
      .then(rsp => {
        console.log(rsp)
        var ind;
        for(ind =0; ind < rsp[0].steps.length; ind++){
          var list_elm = document.createElement("LI");
          var text = document.createTextNode(rsp[0].steps[ind].step);
          list_elm.appendChild(text);
          document.getElementById("instructions").appendChild(list_elm);
        }
      })

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
