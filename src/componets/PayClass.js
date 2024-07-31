// This file is only for grabs the concept of Class based components
import React from "react";
class PayClass extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            count: 0,
            count2: 1
        }

        console.log("constructor called");
    }

    render(){
        const {name, location} = this.props;
        console.log("rendered is called");
        return(
            <div>
                <h1> Count: {this.state.count} count2: {this.state.count2}</h1>
                <button className="bg-slate-600 rounded-lg border-l-sky-950 mx-4 px-4" onClick={()=> this.setState({
                    count: this.state.count+1,
                    count2: this.state.count2+1

                })}>Increment</button>

                <button className="bg-slate-600 rounded-lg border-l-sky-950 mx-4 px-4" onClick={()=> this.setState({
                    count2: this.state.count2 -1,
                })}>decricrement</button>
                <h3>{name}</h3>
                <h3>{location}</h3>
            </div>
        )
    }
}


export default PayClass;