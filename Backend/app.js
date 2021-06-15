import express from 'express';
import mongoose from 'mongoose';
import configDB from 'src/config/database';
import api from './src/routes/api';

mongoose.connect(configDB.url,{ useNewUrlParser: true, useUnifiedTopology: true}).then(()=>{
    console.log('DB connected!');
}).catch(err=>{
    console.log('Error Connecting DB'+err.stack);
})

const port = process.env.PORT || 8000;
const app = express();

app.use('/api',api);
app.listen(port,()=>{
    console.log(`server listening on PORT ${port}`);
})