import React from "react";

function fahrenheit(){
    let a = 80;
    let c = (a-32) * (5/9)
    console.log(c)
    return(
        <div>
            Celcius: {c}
        </div>
    )

}
export default fahrenheit;