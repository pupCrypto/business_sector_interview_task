const express = require('express');
const middlewares = require('./src/middlewares');
const routers = require('./src/routers');

const app = express();
const PORT = 3000;
 
app.use(...middlewares);
app.use('/api', ...routers);

app.listen(PORT, '0.0.0.0', function (err) {
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
