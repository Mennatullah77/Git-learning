const btn = document.querySelector('.element')
const input = document.querySelector('#input')
const buttons = document.querySelector('#buttons')
const equal = document.querySelector('#equal')


let calc_inp = input.textContent
function add(e){
    calc_inp += e.textContent()
}

function calculate(inp){
    let result = parseInt(inp , 2 )
    input.textContent = `${result}`
}

btn.addEventListener("click" , add)
equal.addEventListener("click" , calculate(calc_inp))