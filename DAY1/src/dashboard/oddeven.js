import React from "react";

function oddeven(){
     let a =2;
     let c;
    if (a%2==0){
        console.log("Even")
        c="Even"
    }
    else{
        console.log("Odd")
        c="Odd"
    }

    return(
        <div>
            Answer:{c}
        </div>
    )


}
export default oddeven;