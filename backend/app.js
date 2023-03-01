const express = require('express');
const mongoose = require('mongoose');

const app = express();


// Routes
const users = require('./routes/Users');
const announcement = require('./routes/Announcement');
const comments = require('./routes/Comments');

// Development
mongoose.connect('mongodb+srv://clixtersin:Rf8nh2yUfe9bmIbL@cluster0.t5mpvio.mongodb.net/?retryWrites=true&w=majority', 
                    { useNewUrlParser: true,  useUnifiedTopology: true }
    ).then(() => {
        console.log('Connected to Database!');
    })
    .catch(() => {
        console.log('Connections Failed !');
    })

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    next();
});


app.use('/api/users', users);
app.use('/api/announcement', announcement);
app.use('/api/comments', comments);


module.exports = app;

