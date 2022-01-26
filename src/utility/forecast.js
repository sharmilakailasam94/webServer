const request=require('request')
const forecast=(latt,long,callback)=>
{

    const url='http://api.weatherstack.com/current?access_key=ef315ffada29fae916ee613563147efb&query='+latt+','+long+'&units=f'
request({url,json:true},(error,{body}={})=>
{
    if(error)
    {
        callback('sorry, check your connection no access to web service',undefined)
    }
    else if(body.error)
    {  if(body.error.type)
        {
         callback('Monthly Usage limit Exceeds',undefined)
        }
        else{
            callback('unable to find location,try different combinations',undefined)
        }
    }
    else{
        /* const data={
            weather_descriptions:body.current.weather_descriptions[0],
            temp:body.current.temperature,
            feelslike:body.current.feelslike
        }
        callback(undefined,data) */
         callback(undefined,body.current.weather_descriptions[0]+'. It is currently '+body.current.temperature+' degrees out. It feels like '+body.current.feelslike+ ' degrees out')
         }

})

}

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

/* forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })
 */  
module.exports=forecast