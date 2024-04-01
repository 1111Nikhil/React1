import { useEffect, useState } from "react"

const User = () =>{
    const [userInfo,setUserInfo] = useState([]);
    useEffect(()=>{fetchUser()},[]);
    console.log("enter fetch")
    const fetchUser = async() =>{
        const data = await fetch("https://api.github.com/users/chetannada");
        const json = await data.json();
      
        setUserInfo(json);
        
        
    }
    console.log("get");
    const {avatar_url,name,login,company,location,email,bio,followers,following} = userInfo;
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

export default User;