const userIn = document.querySelector("#input");
const checkButton = document.querySelector("#btn");
const getLucky = document.querySelector("#lucky")
const msg=document.querySelector("#message")

checkButton.addEventListener("click", dateFun)




function dateFun(dob) {
    let inputDate = userIn.value
    let luckyNumber = getLucky.value
    // joining the date
    inputDate = inputDate.replace(/-/g, '')

    let sum=0
    // strore in variable sum so that every time i like 1,2,0.. for date 12052020 keeps on adding to each other (1+2+0+5+2+0+2+0)
    for (let i = 0; i < inputDate.length; i++) {
        sum=sum+Number(inputDate[i])
    }
    //    keep the function call
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
//    calculating if date which we added and user entered number have remainder 0 if yes we say its lucky
   else if(sum%luckyNumber==0){
        msg.innerText=`Congratulations!! ${userIn.value} is lucky🥳`
        msg.style.color="#064E3B"
    }else{
        msg.innerText=`Oops! your birthday is not lucky😞`
        msg.style.color="red"
    }
} 
