let pressbtn=document.querySelector('.keypad')
let display=document.querySelector('.result')
operator=['+','-','*','/','%']
filter=e=>{
    current=display.innerText;
    if(current=='0' && e!='.'){
        clearOne();
    }
    return true;
}
let showDisplay=(e)=>{

    if(operator.includes(e)){
        if(operator.includes(display.innerText[display.innerText.length-1])){
            clearOne();
        }
    }
    if(display.innerText.length<9){
        if(filter(e)){
            display.innerText+=e;
        }
        
        }

}
function calc(){
    output=eval(display.innerText);
    display.innerText=output;
}
let clearall=_=>{
    display.innerText=' ';
}
function clearOne(){
    out= display.innerText.substring(0,display.innerText.length-1) ;
    display.innerText=out;
}