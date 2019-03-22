var expr=require('express');
var app = expr();
//app.use(expr.static(__dirname +'/public'));
app.use(expr.static(__dirname +'/Pvt'));

app.get('/', (req,res)=>{
	//res.send('<h1>This is our first express code!</h1>');
	var obj={
		'name':'jyoti',
		'section':'D1619',
		'RollNo':'B32',
		'Registration':'11608310'
	}
	res.send(obj);
});
app.get('/Course',(req,res)=>{
	var obj={
		'CAP906':'Python',
		'CAP707':'InformationSystem',
		'CAP918':'nodejs',
		'CAP919':'ionic'
//res.send("introduction");
	}
	res.send(obj);
});
app.get('/Grades',(req,res)=>{
	var obj={
		'CAP906':'O',
		'CAP707':'A',
		'CAP918':'A',
		'CAP919':'A+'
//res.send("Here I am in page-2")
}
	res.send(obj);
});
app.get('/marks',(req,res)=>{
	var obj={
		'CAP906':'90',
		'CAP907':'75',
		'CAP918':'70',
		'CAP919':'85'
		}
	res.send(obj);
	});
	
	app.get('/Att',(req,res)=>{
	var obj={
		'CAP906':'85%',
		'CAP907':'80%',
		'CAP918':'82%',
		'CAP919':'90%'
		}
	res.send(obj);
	});
app.listen(3000);