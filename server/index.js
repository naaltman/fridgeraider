// This is like the pizza file and will work with express

//Should get listen and write to DB
//Get me some express!
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
//Get me some mongoose!
const mongoose = require('mongoose');
const fs = require('fs')
const config = JSON.parse(fs.readFileSync('config.json', 'UTF-8'))
mongoose.connect(config.dburl)
var db = mongoose.connection

//Define the recipe schema
var recipeSchema = mongoose.Schema({
  recipeName: String,
  dietaryRest: String
})

//bind schema to mongodb collection 'recipes'
var recipeDb = mongoose.model('recipes', recipeSchema)

// set to remove all docs in database, if there is anything leftover
var cleanDb = false

if (cleanDb === true){
  recipeDb.remove({}, err=>{
    if(err) console.log("failed to remove all docs")
  })
}

// .use binds to all http methods
// no route, means apply to ALL routes
// so all req's will be passed through
// the bodyParser.json() function
app.use(bodyParser.json())

// show all recipes
app.get('/', (req, res) => {
  recipeDb.find().then(recipeDb => {
      res.json(recipeDb)
    })
})

//recipeName = orderName
app.put('/:recipeName', (req, res) => {
  console.log("Create order for", req.params.recipeName)


  // insert a new recipe in the database
  // don't forget to set the default recipe, nothing: ['']
  var newRecipe = recipeDb({
      recipeName:req.params.recipeName,
      dietaryRest:req.params.dietaryRest})
  recipeDb.save()
  res.json({   // echo the order back (which now has an order number)
    result: 'success',
    newRecipe: newRecipe
  })
})

// app.delete('/:orderName', (req, res) => {
//   console.log("Delete order for", req.pizzaOrder)
//
//   // this now has to delete from the database,
//   // use Order.remove()!
//   // delete orders[req.params.orderName]
//
//   Order.remove({_id:req.pizzaOrder._id}, err=>{
//     if (err) {
//       res.json({result:"error", message:err})
//     }else{
//       res.json({result:"success"})
//     }
//   })
//
//
// })
//
// // assume post is a JSON array of topping strings.
// // like ["pepperoni", "extra cheese" ,"pickles"]
// app.post('/:orderName', (req, res) => {
//
//   console.log('post', req.body)
//   // push new toppings array to toppings array
//   // ... is the ES6 spread operator like *args in python
//   // don't forget to save it back to the database!
//   req.pizzaOrder.toppings.push(...req.body)
//   req.pizzaOrder.save()
//   res.json({   // echo the order back (which now has an order number)
//     result: 'success',
//     order: req.pizzaOrder
//   })
//
// })


//Listen for the app, on port 3000
app.listen(3000, () => console.log('FridgeRaider server listening on port 3000!'))
