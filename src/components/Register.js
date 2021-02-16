import Box from "./Box"
import { userDetail } from "../redux/actions"
import { connect } from "react-redux"
import React from "react"

let Register = (props) =>{
    let inputMail = React.createRef();
    let handleClick = () =>{
        let value = inputMail.current.value
        props.userDetail(value)
    }

    return(
        <div className="about-page">
            <Box color="#000"/>
            <Box color="#7d8189"/>
            <Box color="#6c7078"/>
            <Box color="#5b5f67"/>
            <Box color="#4a4e56"/>
            <Box color="#393d45"/>
            <Box color="#282c34"/>
            <div className="register">
                <h1 style={{color:"white"}}>Subscribed using {props.userEmail}</h1>
                <div className="regs">
                    <input type="text" ref={inputMail} placeholder="Enter your email"/>
                     <input type="submit" onClick={handleClick} value="Subscribe to Newsletter"/>
            </div>
        </div>
        </div>
    )
}



export default connect(null,{userDetail})(Register)