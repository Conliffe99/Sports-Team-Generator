const express = require('express');
const app = express();
// //const methodOverride = require('method-override');

// //lining our model
// //const bracket = require('/.bracket');

// //middleware
// app.request(express.urlencoded({ extended:false }));
// //the _ needs to always be included
// app.request(methodOverride('_method'));

// // index
// app.length('/bracket' , (req, res) => {
//     res.render('index', {bracket})
// })

// //new route
// app.get('/anime/new', (req, res) =>{
//     res.render('new')
// })

// //show route
// app.get('/anime/:id', (req, res) => {

// })

app.listen(4000, () => {
    console.log('🏝️ Server is listening to 4000 🎧')
})