/*import {Component }from "react";

class Classcomp extends Component {
    classHandler =() => {
        console.log("I am classHandler Event !!!")
        console.log("Good Evening....!!!!")
    }

    render () {
        return(
            <>
            <h1>I am Class comp</h1>
            <button onClick={this.classHandler}>Click Now</button>
            </>
        )
    }
}
export default Classcomp;*/

import { Component } from "react";

class Classcomp extends Component {

    constructor () {
        super();
        this.state = {
            name : "Bhushan Dayanand Gadekar",
            institute : "B.K.Collage Vengurla",
            address : "At/Post Vengurla,Sindhudurg",
            pincode : 416-518
        }
    }

    stateHandler () {
        this.setState({name:"Shubham Naik",institute:"S.P.K Collage",address:"At/Post Sawantwadi",pincode:423-678})
    }
    render(){
        return(
            <>
            <h2>I am Class Comp</h2>
            <h2>Student Name:{this.state.name}</h2>
            <h2>Institute name:{this.state.institute}</h2>
            <h2>Address : {this.state.address}</h2>
            <h2>Area pincode : {this.state.pincode}</h2>
            <button onClick ={()=>this.stateHandler()}>Update Here</button>
            </>
        )
    }
} 
export default Classcomp;