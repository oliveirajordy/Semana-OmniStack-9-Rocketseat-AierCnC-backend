const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const path = require('path');

const app = express();
mongoose.connect('mongodb+srv://omnistack:omnistack@omnistack9-56nia.gcp.mongodb.net/semana09?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
app.use(express.json());
app.use('/files',express.static(path.resolve(__dirname,'..','files')))
app.use(routes);

app.listen(3333);