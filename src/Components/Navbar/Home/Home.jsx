import imghero from "../imgproject/Nike Air Force 1 - Julio Redondo.png"
import Collection from "./collection"
import New from "./new"
export default function Home(){
    return(
        <>
        <div className="hero-section">
            <div className="container-hero">
                <div className="title-hero">
                    <h1>NIKE AIR FORCE SERIES</h1>
                    <h3>$350</h3>
                    <p>Nike Air Force combines a bold, iconic design with exceptional comfort and quality. Featuring a stylish look, 
                    premium materials, and a comfortable fit, it's perfect for everyday wear and casual outfits.</p>
                </div>
                <div className="img-hero">
                    <img src={imghero} alt="" />
                </div>
                <div className="size-hero">
                    <ul>
                        <li>33</li>
                        <li>34</li>
                        <li>35</li>
                        <li>36</li>
                        <li>37</li>
                    </ul>
                </div>
            </div>
        </div>
        <Collection/>
        <New/>
        </>
    )
}