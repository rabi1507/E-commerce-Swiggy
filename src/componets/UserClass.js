import React from "react";
import User from "./User";

class UserClass extends React.Component{
    constructor(props){
        super(props);
    

    this.state = {
        userInfo : {
            name: "Dummy",
            location: "Default"
        }
    }
}

    async componentDidMount(){
        const userData = await fetch('https://api.github.com/users/rabi1507');
        const userJson = await userData.json();
        console.log(userJson);
        this.setState({userInfo: userJson});
    }
    
    
    render(){
        
        const { name, avatar_url, login } = this.state.userInfo;
        return <div>
            <h1> {name} </h1>
            <img src= {avatar_url} ></img>
            <h3> {login} </h3>
        </div>
    }
   
}

export default UserClass;