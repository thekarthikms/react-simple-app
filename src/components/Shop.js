import Box from "./Box"
import Item from "./Item"
import { connect } from "react-redux"

let Shop = (props) =>{
    
    return(
        <div className="about-page">
           <Box color="black"/>
           <Box color="red"/>
           <Box color="gold"/>
           <Box color="midnightblue"/>
           <Box color="gold"/>
           <Box color="red"/>
           <Box color="black"/>
           <div className="cart"><p>Cart <span className="count">{props.cart.cartCount} </span> </p></div>
           <div className="items">
               <Item color="black" title="Color Black" desc="Price $100"/>
               <Item color="midnightblue" title="Color Midnight Blue" desc="Price $100"/>
               <Item color="red" title="Color Red" desc="Price $100"/>
               <Item color="gold" title="Color Gold" desc="Price $100"/>
               
           </div>
           <h1>You have subscribed to our mailing list using <span style={{
               color:"blue"
           }}>{props.res.userEmail}</span></h1>
        </div>
    )
}

let mapStateToProps = (state) =>{
    return state
}



export default connect(mapStateToProps,null)(Shop)