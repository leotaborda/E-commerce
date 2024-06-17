const button1 = document.querySelector(".link1")
const modal1 = document.querySelector("#link1")
const buttonClose1 = document.querySelector(".ok")

button1.onclick = function(){
    modal1.showModal()
}

buttonClose1.onclick = function(){
    modal1.close("#link1")
}

const button2 = document.querySelector(".link2")
const modal2 = document.querySelector("#link2")
const buttonClose2 = document.querySelector(".ok2")

button2.onclick = function(){
    modal2.showModal()
}

buttonClose2.onclick = function(){
    modal2.close("#link2")
}

const button3 = document.querySelector(".link3")
const modal3 = document.querySelector("#link3")
const buttonClose3 = document.querySelector(".ok3")

button3.onclick = function(){
    modal3.showModal()
}

buttonClose3.onclick = function(){
    modal3.close("#link3")
}

