let Box = (props) =>{

    let color = props.color
    let styles = {
        backgroundColor:color
    }
    return(
        <div className = "box" style={styles}>
            <h1>{props.number}</h1>
    </div>
    )
}

export default Box