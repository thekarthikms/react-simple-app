import {useState} from 'react'
import { connect } from 'react-redux'
import { addToCart,removeFromCart } from '../redux/actions'
let Item = (props) => {

    const [itemCount,AddItem] = useState(0)
    let handleAdd = ()=>{
        AddItem(itemCount+1)
        props.addToCart()
    }

    let handleRemove = () =>{
        if(itemCount!=0){
            AddItem(itemCount-1)
        props.removeFromCart()
        }else{
            alert("Cant remove ")
        }
    }

    let color = props.color
    let styles={
        backgroundColor:color
    }
    let title = props.title
    let desc = props.desc
    return(
        <div className='item'>
            <div className="itemImg" style={styles}></div>
            <div className="itemText">
            <h2>{title}</h2>
            <p>{desc}</p>
            <div className="addcart">
                <p>{itemCount}</p>
            <button className="addButton" onClick ={()=>{handleAdd()}}>Add</button>
            <button className="remove" onClick ={()=>{handleRemove()}}>Remove</button></div>
            </div>
        </div>
    )
}



export default connect(null,{addToCart,removeFromCart})(Item)