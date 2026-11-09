import { Link, useParams } from "react-router-dom"; 
import { products } from "../../data/products";

export default function ProductDetails(){
    function AddToCart() {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    cart.push(product);

    localStorage.setItem("cart", JSON.stringify(cart));
}

    const { productId } = useParams();
    const product = products.find(
    (item) => String(item.id) === productId
    );
    return(
        <div className="section-detailes">
            <div className="container-dettailes">
                <img src={product.Image} alt="" />
                <div className="title-detailes">
                    <h2>{product.Name}</h2>
                    <h3>{product.Price}</h3>
                    <div className="color-detailes">
                        <div className="black"></div>
                        <div className="green"></div>
                        <div className="blue"></div>
                    </div>
                    <p>{product.desc}</p>
                    <div className="size-deailes">
                        <ul>
                            <li>33</li>
                            <li>34</li>
                            <li>35</li>
                            <li>36</li>
                            <li>37</li>
                            <li>38</li>
                            <li>39</li>
                            <li>40</li>
                            <li>41</li>
                            <li>42</li>
                            <li>43</li>
                            <li>44</li>
                        </ul>
                    </div>
                    <div className="btn">
                    <button onClick={AddToCart}>ADD TO CART</button>
                    <Link to="/products">ALL PRODUCTS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}