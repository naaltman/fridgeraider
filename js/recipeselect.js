const APIKEY = "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
const PROJECTNAME = "FridgeRaider"
var url = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/searchComplex?addRecipeInformation=true"
var ingredients = [];
var allergies;
var restrict;
var cuisine;
var mealType;
var hasAllergies = true;
var onDiet = true;
var negate = ['none', 'no', 'not', 'no allergies', 'no diet'];
function loadAjax(){
  getCuisine()
  getAllergies()
  getDiet()
  getMealType()

  url += "&cuisine=" + cuisine
  if(onDiet){
    url += "&diet=" + restrict
  }

  // create url formatting with ingredients
  url += "&fillIngredients=false&includeIngredients="
  var i;
  url += ingredients[0]
  for(i =1; i< ingredients.length; i++){
    url += "%2C+" + ingredients[i]
  }

  if(hasAllergies){
    url += "&intolerances=" + allergies
  }
  url += "&limitLicense=false&number=5&offset=500&type=" + mealType

  console.log("url " + url)
  fetch(url,
    {headers:
      {"X-Mashape-Key": APIKEY,
      "Accept": "application/json"}}
    )
    .then(rsp => rsp.json())
    .then(rsp => console.log(rsp))
}

function saveItems(){
  var i;
  var input = document.getElementById("itemList").value.split(", ")
  for(i = 0; i < input.length; i++){
    ingredients.push(input[i])
  }
  console.log("ingredients: "+ ingredients)
}

function getCuisine(){
  cuisine = document.getElementById("cuisine").value
  console.log("cuisine " + cuisine)

}

function getDiet(){
  restrict = document.getElementById("diet").value
  if(negate.includes(restrict)){
    onDiet = false
  }
  console.log("diet " + restrict)
}

function getAllergies(){
  allergies = document.getElementById("allergies").value
  if(negate.includes(allergies)){
    hasAllergies = false
  }
  console.log("allergies " + allergies)
}

function getMealType(){
  type = document.getElementById("meal_type").value
  if(type == "brek"){
    mealType = "breakfast"
  } else if(type == "main"){
    mealType = "main+course"
  } else if(type == "dessert"){
    mealType = "dessert"
  }
  console.log("meal type " + mealType)
}
