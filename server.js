const express = require("express")
const app = express()
const cities = require("./cities.json")

const port = 3300

app.use(express.urlencoded({extended:false}))
app.use(express.json())

app.get('/api/allcities',(req,res)=>{
    res.json({msg:cities})
})

String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

app.post('/api/:city',(req,res)=>{
    var {city} = req.params
    city = city.capitalize()
    const foundcity = cities.find(data=>data.City.Town.match(city))
    res.json({cityname:foundcity})
})

app.listen(port,()=>{
    console.log(`server is running on port no ${port}`);
})