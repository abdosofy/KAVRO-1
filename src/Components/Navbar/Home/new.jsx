import logonike from "../imgproject/Logo NIKE (1).png"
import nikered from "../imgproject/Nike Air Force 1 on Behance (1) (1).png"
export default function New(){
    return(
        <div className="new-hero">
            <div className="new-title">
                <h1>KAVRO | <span> NIKE AIR</span> </h1>
                    <div className="container-text">
                        <div className="box-text">
                            <div className="box-logo">
                                <h4>EXPERIENCE</h4>
                                <img src={logonike} alt="" />
                            </div>
                                <p className="small">Experience the perfect combination of style, comfort, and performance. Crafted with premium breathable materials, 
                                    lightweight construction, and a cushioned sole that delivers exceptional comfort with every step. 
                                </p>
                        </div>
                        <div className="box-text">
                            <div className="box-logo">
                                <h4>FEATURES</h4>
                                <img src={logonike} alt="" />
                            </div>
                            <ul>
                                <li><p>Premium Breathable Mesh</p></li>
                                <li><p>Lightweight Construction</p></li>
                                <li><p>Soft Cushioning Technology</p></li>
                                <li><p>Durable TRubber Outsole</p></li>
                                <li><p>Modern Sporty Design</p></li>
                                <li><p>All-Day Comfort</p></li>
                            </ul>
                        </div>
                    </div>
            </div>
            <div className="new-img">
                <img src={nikered} alt="" />
            </div>
        </div>
        )
}