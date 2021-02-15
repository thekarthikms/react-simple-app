import Box from "./Box"

let Register = () =>{
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
                <div className="regs">
                    <input type="text" placeholder="Enter your email"/>
                     <input type="submit" value="Subscribe to Newsletter"/>
            </div>
        </div>
        </div>
    )
}

export default Register