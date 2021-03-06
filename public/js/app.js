
/*   fetch('http://puzzle.mead.io/puzzle').then((response)=>{
 response.json().then((data)=>
{
console.log(data)
})
}) 
 */

const weatherForm=document.querySelector('form')
const search=document.querySelector('input')
const messageOne=document.querySelector('#msg1')
const messageTwo=document.querySelector('#msg2')

//messageOne.textContent='From JavaScript'

weatherForm.addEventListener('submit',(e)=>{
  
  e.preventDefault()

  const location=search.value
  messageTwo.textContent=''
  messageOne.textContent='Loading...'
  //fetch('http://localhost:3000/weather?address='+location).then((response)=> // in local host alone 
  fetch('/weather?address='+location).then((response)=> // when adding your app to heroku
  {
      response.json().then((data)=>{
          if(data.error)
          {
            //console.log(data.error)
            messageOne.textContent=data.error
          }
          else{
              //console.log(data.location)
              //sconsole.log(data.forecast)
              messageOne.textContent=data.location
              messageTwo.textContent=data.forecast
          }
      
      })
  })
   
})