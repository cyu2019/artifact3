var request = require('request');
const express = require('express')
const path = require('path')
const app = express()
const port = 5000

app.get('/', (req, res) => {
	
	res.sendFile(path.join(__dirname,'index.html'))
});
app.get('/about', (req, res) => {
	
	res.sendFile(path.join(__dirname,'about.html'))
});

app.get('/howto', (req, res) => {
	
	res.sendFile(path.join(__dirname,'howto.html'))
});

app.get('/image',(req,res) => {
	request.post('https://api.runwayml.com/v1/inference/runway/AttnGAN/default/generate',
		{
			json: {inputData:{"caption":req.query.text}}
		}, (e,r,b) => {
			res.end(b.result);
		}
	)
});




app.listen(port, () => console.log(`Example app listening on port ${port}!`))
