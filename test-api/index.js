const express = require('express');
const app = express();

app.get('/api',(req,res) =>{
	res.json({endpoint:'/api'})
});

app.get('/api/book',(req,res) =>{
	res.json({endpoint:'/HELLO4'})
});

if (!process.env.NOW_REGION) {
  app.listen(3001, ()=> console.log('listening on 3001'));
}

module.exports  = app
