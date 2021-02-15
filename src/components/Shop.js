import Box from "./Box"
import Item from "./Item"
let Shop = () =>{
    return(
        <div className="about-page">
           <Box color="black"/>
           <Box color="red"/>
           <Box color="gold"/>
           <Box color="midnightblue"/>
           <Box color="gold"/>
           <Box color="red"/>
           <Box color="black"/>
           <div className="items">
               <Item color="red" title="Red item" desc="Price $100"/>
               <Item color="orange" title="Orange item" desc="Price $100"/>
               <Item color="gold" title="Gold item" desc="Price $100"/>
               <Item color="Yellow" title="Yellow item" desc="Price $100"/>
               <Item color="cyan" title="Cyan item" desc="Price $100"/>   
               <Item color="blue" title="Blue item" desc="Price $100"/>
               <Item color="darkblue" title="Dark Blue item" desc="Price $100"/>
               <Item color="indigo" title="Indigo item" desc="Price $100"/>
           </div>
        </div>
    )
}

export default Shop