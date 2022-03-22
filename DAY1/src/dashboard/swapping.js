import React from "react";

function Swapping(){
    let a= 10;
    let b= 20;
    let c;
    c = a;
    a = b;
    b = c;
    console.log(a)
    console.log(b)
    return(
        <div>
            a=10,b=20
            <br/>
            a:{a}
            <br/>
            b:{b}
        </div>
    )
}

export default Swapping;