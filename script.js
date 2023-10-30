result = document.getElementById("displayInput")
calculate = (number) =>{
    result.value += number
}



// answer =()=>{
//     if(result.value[result.value.length - 1] == '%'){
//         result.value = result.value.slice(0,-1)
//         percentage()
//     }
//     else{
//         try{
//             result.value = eval(result.value)
//         }
//         catch(err){
//             alert("Input invalid!")

//     }
    
//     }
// }



backspace = () =>{
    result.value = result.value.slice(0, -1)
}

percentage = () =>{
    result.value = result.value/100
}

document.addEventListener('keydown', function(e) {
    if(e.key ==`7`){
        calculate(7)}
    else if(e.key =='8'){
        calculate(8)}
    if(e.key =='9'){
        calculate(9)}
    if(e.key ==`4`){
        calculate(4)}
    if(e.key ==`5`){
        calculate(5)}
    if(e.key ==`6`){
        calculate(6)}
    if(e.key ==`1`){
        calculate(1)}
    if(e.key ==`2`){
        calculate(2)}
    if(e.key ==`3`){
        calculate(3)}
    if(e.key ==`+`){
        calculate('+')}
    if(e.key ==`-`){
        calculate('-')}
    if(e.key ==`/`){
        calculate('/')}
    if(e.key ==`*`){
        calculate('*')}
    if(e.key ==`%`){
        calculate('%')}
    if(e.key ==`0`){
        calculate(0)}
    if(e.key ==`.`){
        calculate('.')}
    if(e.key ==`Enter`){
        answer()}
  });

// Rounding function .toFixed(7)
// bug - When you input  88% it will give error since eval function can not undesrtand %
// add hover animation


answer =()=>{
    try{
        if(result.value[result.value.length - 1] == '%'){
            result.value = result.value.slice(0,-1)
            result.value = eval(result.value)
            percentage()
            
        }
        else{
            result.value = eval(result.value)
        }
        }
    catch(err){
        alert("Input invalid!")
    }
    
    }
