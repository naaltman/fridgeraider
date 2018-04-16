function loadAjax(){
  var textURL = "https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/queries/analyze";
  var myIngredient = document.getElementById("ingredient").value;

  const APIKEY = "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
  const PROJECTNAME = "FridgeRaider"
  const RapidAPI = new require('rapidapi-connect');
  const rapid = new RapidAPI(PROJECTNAME, APIKEY);


  // These code snippets use an open-source library. http://unirest.io/nodejs
fetch(textURL, {
.header("Accept", "application/json")
.header()
})
  console.log(result.status, result.headers, result.body);
});




//
//   console.log("making fetch to", autoCompTextURL)
//   console.log("Got incredient as", myIngredient)
//   fetch(autoCompTextURL, {
//     body: "ingredientList="+myIngredient+"&servings=2",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/x-www-form-urlencoded",
//       "X-Mashape-Key": "kUvc4U4wx8mshla6aUVHG3KdK5oIp1ZyIDsjsn2PGSErYa4kl1"
//     },
//     method: "POST"
//   })
//   .then(resp=>{
//   resp.json()
//     .then(json => {
//       console.log(json)
//       document.getElementByID('new_ingredient')
//         .src=json.message
//         console.log(document.getElementById('new_ingredient'))
//     })
//     .catch()
//   })
// .catch(error => console.log("ERROR" + error))
// }
// document.addEventListener("DOMContentLoaded", loadAjax)
