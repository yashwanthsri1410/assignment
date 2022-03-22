import React from "react";

function Arithmetic(){
    return(
        <div>
        <form action="/addition">
            <button>Addition</button>
        </form>
        <form action="/substracton">
            <button>substractionS</button>
        </form>
        <form action="/division">
           <button>Division</button>
        </form>
        <form action="/multiplication">
            <button>Multiplication</button>
            </form>   
        </div>
    )
}
export default Arithmetic;