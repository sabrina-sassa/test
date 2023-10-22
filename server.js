const express = require ("express")

const app=express()
const port= 4000

app.set('view engine', 'pug');
app.set('views','./views');

app.get('/home', function(req, res){
    res.render('home');
});

app.get('/contact', function(req, res){
    res.render('contact');
});

app.get('/services', function(req, res){
    res.render('services');
});









const myLogger = function (req, res, next) {
    console.log("A new request received at " + Date.now());
    next();
}
app.use(myLogger);

app.listen(port,()=>{
    console.log(`server launched on port ${port} ...`)
})