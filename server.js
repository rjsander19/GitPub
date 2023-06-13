const express = require("express")
const app = express()
const drinks = require("./models/drinks.js")
const food = require("./models/food.js")
//I is for index
app.get("/drinks/", (req, res) => {
    res.render("drinks_index.ejs", { allDrinks: drinks })
})

//S is for show 
app.get("/drinks/:id", (req, res) => {
  res.render("drinks_show.ejs", {drink:drinks[req.params.id]})
})




app.get("/food/", (req, res) => {
    res.render("food_index.ejs", { allFood: food })
})

//S is for show 
app.get("/food/:id", (req, res) => {
  res.render("food_show.ejs", {food:food[req.params.id]})
})


app.listen(3000, () => {
    console.log("listening")
  })