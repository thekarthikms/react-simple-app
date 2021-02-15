let Item = (props) => {

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
            </div>
        </div>
    )
}

export default Item