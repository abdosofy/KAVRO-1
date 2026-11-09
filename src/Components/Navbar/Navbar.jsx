import {Link} from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
export default function Navbar(){
    onscroll = function(){
        let nav = document.getElementById("nav")
        if(scrollY>=40){
            nav.style.backgroundColor = "rgba(82, 3, 3, 0.27)";
        }else{
            nav.style.backgroundColor = "rgb(82, 3, 3)"
        }
    }
    return(
        <div  className="container-header">
            <div id="nav" className="nav-header">
                <div className="logo-header">
                    <h3>KAVRO</h3>
                </div>
                <ul>
                    <li><Link to="/">HOME</Link></li>
                    <li><Link to="/products">PRODUCTS</Link></li>
                    <li><Link to="/contact">CONTACT</Link></li>
                </ul>
                <div className="logo-nav">
                    <Link to="/Cart"><FontAwesomeIcon className="icon" icon={faCartShopping} /></Link>
                </div>
            </div>
        </div>
    )
}