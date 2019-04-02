const express = require('express');
const app = express();

app.get('/',(req,res) =>{
	res.json({endpoint:'/'})
});

app.get('/book',(req,res) =>{
	res.json({endpoint:'/HELLO4'})
});
app.listen(3001, ()=> console.log('listening on 3001'));
