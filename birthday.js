const dateOfBirth = document.querySelector("#date-of-birth")
const luckyNumber = document.querySelector("#luckyNumber")
const checkButton = document.querySelector("#checkBtn")
const outputBox = document.querySelector("#outputarea")

function letsCompare (sum,luckyNumber){
    if(sum%luckyNumber===0){
        outputBox.innerHTML="Your Birthday is lucky";
    }else{
        outputBox.innerHTML = " Your Birthday is not lucky";
    }
}

function checkBirthday (){
  if(luckyNumber.value > 0){
    const dob = dateOfBirth.value;
    const sum = sumOfDate(dob);
    if(dob&&luckyNumber)
    letsCompare(sum,luckyNumber.value)
  }else{
    outputBox.innerText="Please enter a valid input"
  }
}
function sumOfDate(dob){ 
    dob= dob.replaceAll("-","");
    let sum =0;
    for(let index=0;index<dob.length;index++){
        sum = sum + Number(dob.charAt(index));
        
    }
    return sum;
}
checkButton.addEventListener("click", checkBirthday)