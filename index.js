const express = require('express');

const courseRoutes = require('./routes/courseRoutes');

const app = express();

app.listen( process.env.PORT || 3000);
console.log('server started')

app.set('view engine','ejs');

app.use(express.static('public'));
app.use(express.json());

app.use(courseRoutes);
app.use((req,res) => { res.render('404')})