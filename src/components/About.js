import User from "./User";
import UserClass from "./UserClass";
import { Component } from "react";

class About extends Component{
 
  
    render(){
        console.log("Parent Render")
        return (
            <div>
                <h1>It is a react sample project</h1>
                <h2>By NIKHIL</h2>
                <User name="Nikhil(function)"/>
                <UserClass />
            </div>
            
        )  
        
    }

}



export default About;