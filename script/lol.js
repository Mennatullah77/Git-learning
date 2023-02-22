let heading = document.querySelector("h1")
let button1 = document.querySelector('#button1')
let button2 = document.querySelector('#button2')
let button3 = document.querySelector('#done')
let input = document.querySelector('#in')
let s = document.querySelector('#name')
const btn = document.querySelector('.off');


function add_name(){

        let x = prompt("Please Write your name")
        localStorage.setItem("name" ,  x)
        heading.textContent = `Good morning , ${x}`
    }

    if(!localStorage.getItem("name")){
        add_name()
    }
    else{
       const my_name = localStorage.getItem("name")
       heading.textContent =`Good Afternoon , ${my_name}`
    }


    function change_background(){
        function random(number){
            return Math.floor(Math.random() * (number + 1));
        }
        let ranCol = `rgb(${random(255)} , ${random(255)} , ${random(255)})`
        document.body.style.backgroundColor = ranCol;
    }





button1.addEventListener("click", change_background)

   function remove(){
    button1.removeEventListener("click", change_background);}

button2.addEventListener("click", remove)






// Add your code here
let flag = true
    function change(){
    if (flag == true){
    btn.textContent = "hey"
    flag = false
}
    else{
    btn.textContent = "hello"
    flag = true
}

}

function save(){
    let i = input.innerHTML
    if(i === null){
        s.textContent = "please write a name"
    }
    else {
        s.textContent = `hello, ${i}`
    }

}

btn.addEventListener("click" , change)


button3.addEventListener("click" , save)




