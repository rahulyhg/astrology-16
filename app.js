var express = require("express");
var app     = express();
var path    = require("path");
var bodyParser = require('body-parser');
var horoscope = require('horoscope');




app.set("view engine", "ejs")
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); 


app.get('/',function(req,res){
  res.sendFile(__dirname+'/views/index.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/astrologySigns',function(req,res){
  res.sendFile(__dirname+'/views/astrologySigns.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/characteristics',function(req,res){
  res.sendFile(__dirname+'/views/characteristics.html');
  //__dirname : It will resolve to your project folder.
});

app.post('/astrology',function(req,res){
	var info = {};
	var month = Number(req.body.month);
	var day = Number(req.body.day);
	var name = req.body.name;
	var sign = getAstrologySign(month,day);
	console.log(sign);

	info.month = month;
	info.day = day;
	info.name = name;
	info.sign = sign;
	console.log(info);
	res.render('astrology', {info: info});
});


function getAstrologySign(month, day){
	return horoscope.getSign({month: month, day: day});
}


app.listen(3000, function(){
	console.log("Running at Port 3000");
});

