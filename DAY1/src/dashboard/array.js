import React from "react";
function Array(){
    let arr= ['chandu','is','good','boy' ]
    let a= arr;
    arr.pop()
    arr.shift();
    console.log(arr)
    arr.push(10)
    arr.unshift('hello');
    console.log(arr)

    let n=10;
    let s=0;
    for(let i=1;i<=n;i++)
    {
    s+=i;
    console.log(s)
    }


    return(
        <div>{arr}</div>
    )

}


export default Array;

