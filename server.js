const express = require('express');
const loadData = require("./LoadData")
const cors= require('cors')
const app = express();
const port = 3000;

app.use(cors());


const budget = {
    myBudget: [

    {
        title: 'Eat out',
        budget: 45
    },
    {
        title: 'Rent',
        budget: 375
    },
    {
        title: 'Grocery',
        budget: 110
    },

    ]
};




app.get('/budget',(req,res) => {
    res.json(loadData);
});

app.listen(port, () => {
    console.log(`Example app listening at:+ http://localhost:${port}`);
});