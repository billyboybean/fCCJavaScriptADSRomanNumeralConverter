const inputVal = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn");
const output = document.getElementById("output");

convertBtn.addEventListener("click",()=>{
  const inputInt = parseInt(inputVal.value);

  if(!inputInt){
    output.innerText="Please enter a valid number";
  } else if (inputInt<1){
    output.innerText="Please enter a number greater than or equal to 1";
  } else if (inputInt>=4000){
    output.innerText="Please enter a number less than or equal to 3999";
  } else {
    output.innerText=`All good number is: ${inputInt}`;
  }
});

