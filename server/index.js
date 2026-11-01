const express = require("express")
 
const app = express();
app.get('/', (req, res)=>{
    res.send('heyy i am ashish')
})

app.listen(3000, () =>{
    console.log('server is runing on port 3000');
})
