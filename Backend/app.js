import express from 'express';
import mongoose from 'mongoose';
import configDB from './src/config/database';
var bodyParser = require('body-parser');

mongoose.connect(configDB.url,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('DB connected!');
}).catch(err=>{
    console.log('Error Connecting DB'+err.stack);
})

const port = process.env.PORT || 8000;
const app = express();
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
var api = express.Router();
var auth =  express.Router();
require('./src/routes/auth')(auth);
app.use('/auth',auth);
require('./src/routes/api.js')(api);
app.use('/api',api);
app.listen(port,()=>{
    console.log(`server listening on PORT ${port}`);
})