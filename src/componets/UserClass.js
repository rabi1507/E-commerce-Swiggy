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
        
        const { html_url } = this.state.userInfo;
        return <div className=" mt-4 max-w-sm mx-auto bg-white border border-gray-200 rounded-lg shadow-md">
            {/* <h1 className="font-extralight p-2 m-2"> {name} </h1> */}
            <h3 className="font-semibold mx-2 mb-4"> Github Link :  {html_url} </h3> 
        </div>
    }
   
}

export default UserClass;