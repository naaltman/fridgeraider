var query = '';
var ingredients = [];

var allergies = '';
var restrict = '';
var cuisine = '';
var mealType = '';
var hasAllergies = false;
var onDiet = false;
var negate = ['none', 'no', 'not', 'no allergies', 'no diet', ''];
function loadRecipes(){
  // getCuisine()
  getAllergies()
  getDiet()
  getMealType()

  //query starts with cuisine type
  query += "cuisine=" + cuisine
  // diet is an optional parameter
  if(onDiet){
    query += "&diet=" + restrict
  }
  // create url formatting with ingredients
  query += "&fillIngredients=false&includeIngredients=" +
    encodeURIComponent(ingredients)
  //allergies as optional parameter
  if(hasAllergies){
    query += "&instructionsRequired=true&intolerances=" + allergies
  }
  console.log(query)
  //parameters that'll stay constant (offset and number of recipes returned)
  query += "&limitLicense=false&number=5&offset=5&type=" + mealType
  window.location.href = "loadrecipe.html?" + query

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
