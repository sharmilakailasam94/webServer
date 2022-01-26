const path=require('path') // It's a core module no need to install it in terminal below
const express=require('express')
const hbs=require('hbs')
//console.log(__dirname) 
//the process to get a current files directory and file name
//console.log(path.join(__filename,'../public')) // for understanding to include file path
// and joining with path we need
const app=express()   //express is a function

app.set('view engine','hbs') // in terminal u have to run node src/app-path.js running outside 
// above statement should be provided to use handlebars engine to access hbs intead html
/* by default we should use views directory to store hbs files
   or else we can give any name to store hbs but you have to add as below statement to access the path
  */
app.set('views', path.join(__dirname, '../template/views')); //setup handlebars engine  and views location

//path to static webpage
app.use(express.static(path.join(__dirname,'../public')))

app.get('',(req,res)=>   
  
{
res.render('index',{ 
    //title:'weather app'
title:'Weather',
name:'Sharmila '
})
}) 

app.get('/about',(req,res)=>{
    res.render('about',{title:'About',
name:'sharmila'})
})
app.get('/help',(req,res)=>{
    res.render('help',{title:'HELP',para:'this is to help you!'})
})
app.get('/weather',(req,res)=>
{ let forecast='It is 37 degrees out'
    res.send([ {    // Here we passed the array of object
        location:'new york',   
        forecast:forecast},
        {
        location:'Tamil Nadu ',
        forecast:'86 degrees out'
        }])
    })


app.listen(3000,()=>
{
    console.log('server is up on port 3000.')
})       
// we have listen() function is used to start the server
// and listen to specific port
// 3000 is a common development port not an default port for http it is port num:80 