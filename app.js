const express = require('express');
const path = require('path');
const port = 3000;

const app = express();

//viwe engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('views engine', 'ejs');

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routers
const indexRouter = require('./routes/index');
app.use('/', indexRouter);

app.use((req,res)=>{
    return res.status(404).render("notFound", {title: "Página não encontrada"});
  });


app.listen(port, () => {
    console.log(`Estamos rodando na porta ${port}: http://localhost:3000/ `)
})

module.exports = app;