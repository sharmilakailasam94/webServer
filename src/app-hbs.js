const path=require('path') // It's a core module no need to install it in terminal below
const express=require('express')
const hbs=require('hbs')
const app=express()   //express is a function
const publicDirectoryPath=path.join(__dirname,'../public') // this uses core module so needs to give path from entire root
const viewsPath=path.join(__dirname, '../template/views')
const partialsPath=path.join(__dirname,'../template/partials')
app.set('view engine','hbs') 
app.set('views',viewsPath ) //setup handlebars engine  and views location
hbs.registerPartials(partialsPath)

//setup path to static webpage
app.use(express.static(publicDirectoryPath))

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
    res.render('help',{title:'HELP',para:'this is a help page!',name:'sharmila'})
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
    app.get('/help/*',(req,res)=>{
        res.render('404',
        {title:'404 Page',
        err:'Help article not found!', 
        name:'sharmila'})
    })

 app.get('*',(req,res)=>{
res.render('404',
{title:'404 Page' ,
err:'404 Page not found!',
name:'sharmila'})
})
 
app.listen(3000,()=>
{
    console.log('server is up on port 3000.')
})       
