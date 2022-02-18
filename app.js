const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res, next) => {
   console.log(`Caliing '/'...`);
   res.status(200).send('Hello World, 2022 🐯🐯🐯!')
})

app.listen(port, ()=>{
   console.log(`Server is on port no.${port}...👂`);
}).on('error', (err)=>{
   console.log(`Server listening error...${err}`)
})