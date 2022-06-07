const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');



let port = process.env.PORT || 3000;
const app = express();
app.set('view engine', 'ejs');
app.set('views', 'views');

const educationRoutes = require('./routes/education');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));


app.use(educationRoutes);

app.use((req,res)=>{
  res.render('main/error',{
    title: 'Error page'
  })
})

mongoose
  .connect('mongodb+srv://00012183:software_engineer@cluster0.snj11.mongodb.net/education')
  .then(result => {
    app.listen(port);
    console.log("connected successfully");
  })
  .catch(err => {
    console.log(err);
});

