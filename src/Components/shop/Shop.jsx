import { useState, useEffect } from "react";

export default function Shop() {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(data);
    }, []);

    return (
        <div className="section-shop">
            {
                cart.map((product) => (
                    <div key={product.id}>
                        <img src={product.Image} alt="" />
                        <h2>{product.Name}</h2>
                        <h3>{product.Price}</h3>
                        <button>REMOVE</button>
                    </div>
                ))
            }
        </div>
    );
}