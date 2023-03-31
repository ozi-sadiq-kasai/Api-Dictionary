const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

function display(){
   let word = document.querySelector('.input').value 

      word = document.querySelector('.display').innerText = word   

   fetch(`${url} ${word}`)
      .then(res => res.json())
      .then(data =>{
         document.querySelector('.sound').innerText= data[0].phonetics[0].text|| data[0].phonetics[1].text || "Not Available"
         document.querySelector('#contentOne').innerText = data[0].meanings[0].definitions[0].definition
         document.querySelector('#contentTwo').innerText = data[0].meanings[0].definitions[1].definition
         document.querySelector('#contentThree').innerText = data[0].meanings[0].definitions[0].example ||data[0].meanings[0].definitions[1].example || "Not Available"
         console.log(data)
      })
   }        
document.querySelector('button').addEventListener('click',display)


