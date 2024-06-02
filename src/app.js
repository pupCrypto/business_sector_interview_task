
const express = require('express');
const { routers } = require('./routers');
const app = express();
const PORT = 3000;
 
app.use('/api', ...routers);
 
app.listen(PORT, function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
