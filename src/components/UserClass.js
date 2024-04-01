import React from "react";

class UserClass extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            userInfo : {

            },
           
        };
   
     }
     async  componentDidMount() {
        const data = await fetch("https://api.github.com/users/1111Nikhil");
        const json = await data.json();
        
        this.setState({
           userInfo:json,
        })
     }
    render(){

     const {avatar_url,name,login,company,location,email,bio,followers,following} = this.state.userInfo;
        return(
            <div className="user-card">
              <img src={avatar_url}/>
                <h1>{name}</h1>
                <h2>{login}</h2>
                <h3>{company}</h3>
                <h3>{location}</h3>
                <h3>{email}</h3>
                <p>{bio}</p>
                <span>{followers}</span>
                <span>{following}</span>
            </div>
        )
    }
};

export default UserClass;