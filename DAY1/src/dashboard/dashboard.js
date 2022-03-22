import React from "react"
import './dashboard.css'


function login(){
    return(
    <div style={{backgroundColor:'white',width:'100%'}}>
        <div className ="header" >Dashboard</div>
        <br/>
        <form action="/arthmetic">
            <button className="button">Arithmetic operators</button>
        </form>
        <br/>
        <form action="/logical">
            <button className="button">Logical operators</button>
        </form>
        <br/>
        <form action="/greater">
            <button className="button">Greater operators</button>
        </form>
        <br/>
        <form action="/oddeven">
            <button className="button">odd even</button>
        </form>
        <br/>
        <form action="/swapping">
            <button className="button">swapping</button>
        </form>
        <br/>
        <form action="/fahrenheit">
            <button className="button">fahrenheit</button>
        </form>
        <br/>
        <form action="/allinone">
            <button className="button">allinone</button>    
        </form>
        <br/>
        <form action="/array">
            <button className="button">array</button>
        </form>  
    
    </div>

    )
}
 
export default login;