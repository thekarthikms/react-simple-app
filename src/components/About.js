import Box from "./Box"
import Describer from "./Describer"


let About = () =>{
    return(
        <div className="about-page">
            <Box color="#FF0000"/>
            <Box color="#FF7F00"/>
            <Box color="#FFFF00"/>
            <Box color="#00FF00"/>
            <Box color="#0000FF"/>
            <Box color="#4B0082"/>
            <Box color="#9400D3"/>
            <Describer />
        </div>
    )
}

export default About