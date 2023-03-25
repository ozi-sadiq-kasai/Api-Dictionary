const url = 'https://api.dictionaryapi.dev/api/v2/entries/en/'

let wordDisplay = document.querySelector('.wordDisplay')
let button = document.querySelector('button')
let meaning = document.querySelector('.meaning')
let example = document.querySelector('.example')
let result = document.querySelector('.result')
let sound = document.querySelector('.sound')
// input event 
document.querySelector('.inputText').addEventListener('input',(e)=>{
    wordDisplay.textContent =e.target.value
})

// button event


let search = ()=>{
    let textinput = document.querySelector('.inputText').value
    console.log(textinput)
    fetch(`${url}${textinput}`)
    .then(res => res.json())
    .then(data =>{
        console.log(data)
        result.innerHTML =
         `<span><span>phonetics:</span>${data[0].phonetics[1].text}</span>

        <p class="meaning">${data[0].meanings[0].definitions[0].definition ||'Not specified'}</p>
        <h3>${textinput.toUpperCase()} in sentence :</h3>
        <p class="example">${data[0].meanings[0].definitions[0].example || 'Not specified'}</p>`;
    })
}

button.addEventListener('click',search)
