function voter(){
let old=document.getElementById("age").value
let result=document.getElementById("output")
if(old>18){
    result.innerHTML="voter is valid "
}
else{
    result.innerHTML="voter is invalid "
}
}  