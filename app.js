const express = require('express')
const cors = require('cors');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname, 'src')));
app.use(cors());

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname , 'index.html'));
})

app.get('/users', function (req, res) {
    res.sendFile(path.join(__dirname , 'users.json'));
})

app.listen(process.env.PORT || '3000' , ()=>{
    console.log('The server is running');
});
