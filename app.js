const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, './public')));
app.get("/", (req, res)=>{
    res.sendFile(path.join(__dirname, './views/index.html'));
})

const puerto = process.env.PORT || 3000;

app.listen(3000, () => console.log(`Escuchando en el puerto ${puerto}`));