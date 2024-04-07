import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";
import UserContext from "../utils/UserContext"

class About extends Component{ 
    render(){
        return (
            <div>
                <h1>It is a react sample project</h1>
                <h2>By NIKHIL</h2>
                <UserContext.Consumer>
                    {({loginUser})=> (<h3>User:{loginUser}</h3>)}
                </UserContext.Consumer>
                
                <User name="Nikhil(function)"/>
                <UserClass />
            </div>          
        )          
    }
}



export default About;