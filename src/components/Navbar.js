import {Link } from "react-router-dom"

let Navbar = ()=>{



    return (
        <nav>
            <Link className="links" to="/"><h3>Logo</h3></Link>
            <ul className="nav-links">
                <Link className ="links" to="/about"><li>About</li></Link>
               <Link className="links" to="/shop"> <li>Shop</li></Link>
               <Link className="links" to="/contact"> <li>Contact</li></Link>
               <Link className="links" to="/register"> <li>Register</li></Link>
               
            </ul>
        </nav>
    )
}

export default Navbar