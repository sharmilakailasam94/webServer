
const path=require('path') // It's a core module no need to install it in terminal below
const express=require('express')
//console.log(__dirname) 
//the process to get a current files directory and file name
//console.log(path.join(__filename,'../public')) // for understanding to include file path
// and joining with path we need
const app=express()   //express is a function 

app.use(express.static(path.join(__dirname,'../public'))) //no arguments
  // when using app.use(express.static())
  // it doesn't execute the below app.get() with no passing argument eg:app.get('',(req,res)=>
  // as it executes it only first match
  // however it executes get function with arguments about and help
/*   app.get('',(req,res)=>   
  
{
res.send('Hello Express!')
}) 
app.get('/help',(req,res)=>{
    res.send('Help Page!')  
})
app.get('/about',(req,res)=>
{
    res.send('<h1>About</h1>') 
    // if want to send back HTML, just provide html tag inside the string             
    //Ex: res.send('<h1>About</H1>') html tag is kept inside the single qoute  which is a string
                            
})
 */app.get('/weather',(req,res)=>
{ let forecast='It is 37 degrees out'
    res.send([ {    // Here we passed the array of object
        location:'new york',   
        forecast:forecast},
        {
        location:'Tamil Nadu ',
        forecast:'86 degrees out'
        }])
    // we can also send back the JSON, as JSON works with objects and arrays
    // we send object or array right in res.send() , this not string put directly.
    // single quotes '' takes only a string.
    // It gets automatically stringified
    // we get json file as well as stringyfied
})

//app.com
//app.com/Help
//app.com/About

app.listen(3000,()=>
{
    console.log('server is up on port 3000.')
})       
// we have start server listen() function is used to start the server
// and listen to specific port
// 3000 is a common development port not an default port for http it is port num:80 