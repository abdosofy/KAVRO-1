import { Link } from "react-router-dom";
import { products } from "../../data/products";

export default function Products(){
return(
    <div className="product-section">
        <h1>EXPLORE OUR LATEST COLLECTION</h1>
        <ul className="product-list">
            {
                products.map((product)=>(
                    <li  key={product.id}>
                        <img src={product.Image} alt="" />
                        <h2>{product.Name}</h2>
                        <h3>{product.Price}</h3>
                        <Link to={`/products/${product.id}`}>Product Details</Link>
                    </li>
                ))
            }
        </ul>
    </div>
)
}