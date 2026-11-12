import { useState, useEffect } from "react";
export default function Shop() {
    const [cart, setCart] = useState([]);
    function DeletCart(id){
        setCart(cart.filter((_,i)=>i!==id))
        localStorage.setItem("cart",JSON.stringify(cart.filter((_,i)=>i!==id)))
    }
    useEffect(() => {
        let data = JSON.parse(localStorage.getItem("cart")) || [];
        setCart(data);
    }, []);
    return (
        <>
        <div className="section-shop">
            {
                cart.map((product,id) => (
                    <div key={product.id}>
                        <img src={product.Image} alt="" />
                        <h2>{product.Name}</h2>
                        <h3>{product.Price}</h3>
                        <button>REMOVE</button>
                    </div>
                ))
            }
        </div>
        </>
    );

}