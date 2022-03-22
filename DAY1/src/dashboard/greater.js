import React from 'react';

function Greater(){
    let a=10;
    let b=20;
    let c=40; 
    let d;
    let e;
    d = a>b?a:b;
    e = c>d?c:d;
    console.log(d)
    console.log(e)
    return(
        <div>
            Greatest Of Two Answer:{d}
            <br/>
            Greatest Of Three Answer:{e}
        </div>
    )
}

export default Greater;