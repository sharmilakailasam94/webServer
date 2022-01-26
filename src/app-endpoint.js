const path=require('path')
const forecast=require('./utility/forecast')
const geocode=require('./utility/geocode')
const express=require('express')
const hbs=require('hbs')
const app=express()  
const publicDirectoryPath=path.join(__dirname,'../public') 
const viewsPath=path.join(__dirname, '../template/views')
const partialsPath=path.join(__dirname,'../template/partials')
app.set('view engine','hbs') 
app.set('views',viewsPath ) 
hbs.registerPartials(partialsPath)

app.use(express.static(publicDirectoryPath))

app.get('',(req,res)=>   
  
{
res.render('index',{
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
{   const address=req.query.address
    if(!address){
    return res.send({
        error:'You must provide an address'
       })
      }

       geocode(address,(error,{latt,long,location}={})=>{
         if(error){
        return res.send({error})
         }
       forecast(latt,long,(error,forecastdata)=>{
        if(error)
        { 
        return res.send({error})
        }
        res.send({
               forecast:forecastdata,
               location,
               address:req.query.address

            })
        
          })
       })

 })
    app.get('/products',(req,res)=>
    {  if(!req.query.search){
         return res.send({
            error:'you must provide search term'
        })
    }
    console.log(req.query.search)
        res.send({
            product:[]
        })
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
