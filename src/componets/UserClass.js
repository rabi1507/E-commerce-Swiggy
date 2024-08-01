import React from "react";
import User from "./User";
import {GITHUB_URL} from '../utils/url'

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
        const userData = await fetch(GITHUB_URL);
        const userJson = await userData.json();
        this.setState({userInfo: userJson});
    }
    
    
    render(){
        
        const { name, avatar_url, login } = this.state.userInfo;
        return <div className="p-6 mt-20 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            <h1> {name} </h1>
            {/* <img src= {avatar_url} ></img> */}
            <h3> {login} </h3>
        </div>
    }
   
}

export default UserClass;