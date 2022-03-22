import React from "react";

function allinone (){
    let a =2;
    let num=54
    let c;
   if (a>0){
       console.log("the given number is postive")
       c="the given number is postive "
   }
   else if (a<0){
       console.log("the given number is negative")
       c="the given number is negative "
   }
   else
   {
       console.log("the number is zero")
   }

   let isprime = true;
   if (num>1){
       for (let i =2; i<num; i++){
           if(num% i ==0){
               isprime = false;
               break;
           }
       }
       if(isprime){
           console.log(num,"is a prime number");
       }else{
           console.log(num, "is s not prime number");
       }
   }
   let sum=7
    let fact=1;
    for (let i=1; i<=sum;i++){
        fact=fact*i
    }
    console.log(fact)

   return(
       <div>
           Answer:{c}
           <br/> 
           Answer:{fact }
       </div>
   )


}
export default allinone;