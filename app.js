const userIn = document.querySelector("#input");
const checkButton = document.querySelector("#btn");
const getLucky = document.querySelector("#lucky")
const msg=document.querySelector("#message")

checkButton.addEventListener("click", dateFun)




function dateFun(dob) {
    let inputDate = userIn.value
    let luckyNumber = getLucky.value
    inputDate = inputDate.replace(/-/g, '')

    let sum=0
    for (let i = 0; i < inputDate.length; i++) {
        sum=sum+Number(inputDate[i])
    }
       
        msg.innerText=sum
        lucky(luckyNumber,sum)
}


function lucky(luckyNumber,sum){
   if(luckyNumber==0){
       msg.innerText=`Please enter your lucky number.`
       msg.style.color="#831843"
   }else if(sum==0){
    msg.innerText=`Please select the date.`
    msg.style.color="#831843"
   }
   else if(sum%luckyNumber==0){
        msg.innerText=`Congratulations!! ${userIn.value} is lucky🥳`
        msg.style.color="#064E3B"
    }else{
        msg.innerText=`Oops! your birthday is not lucky😞`
        msg.style.color="red"
    }
} 
