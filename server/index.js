const express = require('express');
const bodyParser = require('body-parser');

const mc = require('./controllers/messages_controller');

const app = express();
const PORT = 3000;

app.use(express.static(__dirname + '/public/build'));
app.use(bodyParser.json());

app.post('/api/messages', mc.create);
app.get('/api/messages', mc.read);
app.put('/api/messages/:id', mc.update);
app.delete('/api/messages/:id', mc.delete);

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
})