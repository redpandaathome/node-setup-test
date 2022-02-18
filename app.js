const express = require('express');
const app = express();
const port = 3000;

app.listen(port, ()=>{
   console.log(`Server is on port no.${port}...👂`);
}).on('error', (err)=>{
   console.log(`Server listening error...${err}`)
})