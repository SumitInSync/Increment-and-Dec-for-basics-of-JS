const counterValue = document.querySelector('#counter');
const increment = ()=>{
    // get the value from ui 
    // parseInt :used to convert string to integer
    let value = parseInt(counterValue.innerText);
    // update value
    value+=1;
    // set the value onto UI
    counterValue.innerText = value;
};
const decrement = () =>{
    // get the value from ui
    let value = parseInt(counterValue.innerText);
    // update value
    value-=1;
    // set the value onto UI
    counterValue.innerText = value;
};