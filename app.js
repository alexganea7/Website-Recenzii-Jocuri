var express = require('express');
var fs = require('fs');
const crypto  = require('crypto'); 
const formidable=require('formidable');
const session = require('express-session');



var app = express();

app.use(express.static('html'));
app.use('/public', express.static('public'));

app.use(express.static('resurse'));
app.set('view engine', 'ejs');

app.use(session({
  secret: 'abcdefg', 
  resave: true, 
  saveUninitialized: false 
}));



app.get('/login', function(req,res){

  res.render('login',{'mesaj': 'Login'});
 });
 
 app.post('/login_post', function(req, res) {
     var user;
     var form = new formidable.IncomingForm();
     form.parse(req, function(err, fields, files) {
 
      var useri= JSON.parse(fs.readFileSync("useri.json"));
      
      var cipher = crypto.createCipheriv('aes128','passwordpassword', 'vectorvector1234');
      var parolacriptata = cipher.update(fields.parola, 'utf8',"hex");
      parolacriptata += cipher.final("hex");
      
       for(var x of useri){                    
         if (fields.username == x.username && parolacriptata==x.parola)
       user=fields.username;
       }
    
       if(user){
         req.session.username=user;
                    res.redirect('/logat');}
       else {
     req.session.username=false;
 
          res.redirect('/incorect');}
       });
     });
 
 app.get('/logat', function(req, res) {
       res.render('logout',{'nume': req.session.username});
     });
 
 app.get('/incorect', function(req, res) {
       res.render('login',{'mesaj': 'Username/parola gresita'});
     });
 
 app.get('/logout', function(req, res) {
 req.session.destroy();  
 res.render('login',{'mesaj': 'Login'});
 

 });
 



app.use(express.urlencoded({ extended: true }));
app.get('/joc',function(req,res){
  var titluJoc=req.query.joc;
  var reviewuri = fs.readFileSync("reviewuri.json");
  var date = JSON.parse(reviewuri);
  res.render('joc', {reviewuri:date, titluJoc: titluJoc});
});



app.post('/joc', function (req, res){
  const regex = /^[^\d]{3,}$/;
  if(regex.test(req.body.nume)){
  if(req.session.username){
    console.log("conectat");
    console.log(req.body);
    var ob;
    var nume = req.body.nume;
    var review = req.body.review;
    var titlu = req.body.titluId;
    if(fs.existsSync('reviewuri.json')){
      var date = fs.readFileSync("reviewuri.json");
      ob=JSON.parse(date);
    }
    else
      ob=[];
    var ob_form = {'titlu':titlu, 'nume':nume,'recenzie':review};
    ob.push(ob_form);
    fs.writeFileSync("reviewuri.json",JSON.stringify(ob));
    console.log(nume + review);
    res.end(nume + review);
  }
else{
  console.log("nu esti conectat");
  let alert = require('alert');
  alert("Nu esti conectat");
}
}
else{
  console.log("Date invalide");
  let alert = require('alert');
  alert("Numele nu poate fi mai scurt de 2 litere sau sa contina numere");
}
  });

 

app.use(function(req,res){
  res.redirect("/404.html");
});

app.listen(5000, function(){console.log("Server pornit la host 5000")});


