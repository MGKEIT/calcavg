let a = document.querySelector("#a")
let b = document.querySelector("#b")
let c = document.querySelector("#c")
let output = document.querySelector(".output")
let calc2 = document.querySelector(".calc")
// plus misus buttons
//minus
let MinFive =  document.querySelector(".MinFive")
let MinFour =  document.querySelector(".MinFour")
let MinThree =  document.querySelector(".MinThree")
//plus
let PlusFive =  document.querySelector(".PlusFive")
let PlusFour =  document.querySelector(".PlusFour")
let PlusThree =  document.querySelector(".PlusThree")
    
    
a.value = 0
b.value = 0
c.value = 0
output.value = 0
let calc = (a, b, c) => {
    return Math.round ((((a*5) + (b*4) + (c*3))/(a+b+c))*100)/100;
};
    
let render = () =>{
output.textContent = ""
if (isNaN(calc(Number(a.value), Number(b.value), Number(c.value)==true))){
    output.textContent = 0
} 
else {
output.textContent = calc(Number(a.value), Number(b.value), Number(c.value))}
}
calc2.addEventListener("click",()=>{
render()
})
    
MinFive.addEventListener("click", ()=>{
if(Number(a.value) != 0){
    a.value = Number(a.value) - 1
}
})
MinFour.addEventListener("click", ()=>{
if(Number(b.value) != 0){
    b.value = Number(b.value) - 1
}
})
MinThree.addEventListener("click", ()=>{
if(Number(c.value) != 0){
    c.value = Number(c.value) - 1
}
})
    
// plus section
PlusFive.addEventListener("click", ()=>{
    a.value = Number(a.value) + 1
})
PlusFour.addEventListener("click", ()=>{
    
    b.value = Number(b.value) + 1
    
})
PlusThree.addEventListener("click", ()=>{
    
    c.value = Number(c.value) + 1
    
})
    
