import React from "react";

function Logical(){
    let a = 10;
    let b = 20;
    let c = 100;
    let d;
    let e;
    let f;
    if(a<b && c>b){
        console.log("Answer:True")
        d="true";
    }else{
        console.log("Answer:False")
        d="false";
    }
    if(a>b || c<b){
        console.log("Answer:True")
        e="true";
    }else{
        console.log("Answer:False")
        e="false";
    }
    f=a>b?a:b;
    console.log(f)
   return(
        <div>
            a=10,b=20,c=100;
            <br/>
            Que:And Operation Where a less than b And c greater than b?
            <br/>
            Answer: {d}
            <br></br>
            Que:And Operation Where a greater than b Or c less than b?
            <br/>
            Answer: {e}
            <br></br>
            Que:Ternary Operation a greater than b?
            <br/>
            Answer: {f}
        </div>
   )
}
export default Logical; 