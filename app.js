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

app.get('/astrologyByBirthday',function(req,res){
  res.sendFile(__dirname+'/views/astrologyByBirthday.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/zodiacByYear',function(req,res){
  res.sendFile(__dirname+'/views/zodiacByYear.html');
  //__dirname : It will resolve to your project folder.
});

app.get('/characteristics',function(req,res){
  res.sendFile(__dirname+'/views/characteristics.html');
  //__dirname : It will resolve to your project folder.
});

app.post('/astrologyByBirthday',function(req,res){
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
	res.render('astrologyByBirthday', {info: info});
});

app.post('/zodiacByYear',function(req,res){
	var info = {};
	var name = req.body.name;
	var year = Number(req.body.year);
	var sign = getZodiacSign(year);
	var url = "https://www.travelchinaguide.com/images/photogallery/2012/zodiac-" + sign + ".png";

	console.log(sign);

	info.name = name;
	info.year = year;
	info.sign = sign;
	info.url = url;

	
	res.render('zodiacByYear', {info: info});
});


function getAstrologySign(month, day){
	return horoscope.getSign({month: month, day: day});
}

function getZodiacSign(year){
	return horoscope.getZodiac(year);
}


app.listen(3000, function(){
	console.log("Running at Port 3000");
});

