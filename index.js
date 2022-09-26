const express = require('express');
const {TwitterApi} = require('twitter-api-v2');
const cors = require('cors')

const app = express();
require('dotenv').config()

app.use(cors()) // Use this after the variable declaration
const client = new TwitterApi({
    appKey: process.env.APP_KEY,
    appSecret: process.env.APP_SECRET,
    accessToken: process.env.ACCESS_TOKEN,
    accessSecret: process.env.ACCESS_SECRET,
});
const roClient = client.readOnly;

app.get('/get/:id', async(req,res)=>{
    const id = req.params.id;
    roClient.v2.search(id).then((val) => {
        res.send(val.data)
    }).catch((err) => {
        res.send(err)
    })
})


app.listen(4001, () => {
    console.log('listening on *:4001');
}); 