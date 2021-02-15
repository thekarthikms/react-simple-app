import Box from "./Box"

let Contact = ()=>{
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
                <div className="regs" id="lefter">
                <input type="text" id="over" placeholder="Enter your email"/>
                <textarea rows="30" id="over" placeholder="Describe your issue"></textarea>
                <input type="submit" value="Send Mail"/>
                </div>
            </div>
        </div>
    )
}

export default Contact