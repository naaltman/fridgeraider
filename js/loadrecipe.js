const APIKEY = "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
const PROJECTNAME = "FridgeRaider"
var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true"
var dburl = "http://localhost:3000"
var recipes;

function loadAjax() {
  queryURL = window.location.search
  url += queryURL.substring(queryURL.indexOf("?") + 1)
  fetch(url, {
      headers: {
        "X-Mashape-Key": APIKEY,
        "Accept": "application/json"
      }
    })
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

function loadNewRecipe() {
  var rand = parseInt(Math.random() * 9, 10)
  console.log(recipes[rand])
  document.getElementById("recipe_title").innerHTML = recipes[rand].title
  document.getElementById("recipe_picture").src = recipes[rand].image
  //PUT A PUT REQUEST FOR NPM FETCH PUT THE RECIPE INFO ON IT
  putInDb(rand);
}

function putInDb(num) {
  var recNameURL = dburl + "/" + recipes[num].title
  var recPicURL = dburl + "/" + encodeURIComponent(recipes[num].image)
  // var recArr = [recipes[num].title, recipes[num].image]
  var recName = recipes[num].title
  var recImg = recipes[num].image

  fetch(recNameURL, {
      method: 'PUT',
      body: recName,
      headers: {
        "X-Mashape-Key": APIKEY,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Accept": "application/json"
      }
    })
    .then(rsp => rsp.json())
    .then(rsp => {
      console.log("We are putting the ", recName, " in the DB");
    })

  fetch(recPicURL, {
      method: 'PUT',
      body: recImg,
      headers: {
        "X-Mashape-Key": APIKEY,
        "Access-Control-Allow-Origin": "http://localhost:3000",
        "Accept": "application/json"
      }
    })
    .then(rsp => rsp.json())
    .then(rsp => {
      console.log("We are putting the ", recImg, " in the DB")
    })
}

document
  .addEventListener("DOMContentLoaded", loadAjax)
