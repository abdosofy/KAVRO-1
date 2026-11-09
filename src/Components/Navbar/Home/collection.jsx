import blueimg from "../imgproject/blue (1).png"
import greenimg from "../imgproject/green (1).png"
import Purpleimg from "../imgproject/move.png.png"
import Pink from "../imgproject/bambe (1).png"
import logoimg from "../imgproject/Logo NIKE (1).png"

export default function Collection(){
    return(
        <div className="collection-section">
            <div className="tit-hero-collecion">
                <h1>AIR JORDAN</h1>
            </div>
            <div className="conainer-section">
                <div className="box-section">
                    <div className="mini-box1-img">
                        <img src={blueimg} alt="" />
                    </div>
                    <div className="title-box">
                        <h3>AIR JORDAN | <span className="blue">BLUE</span></h3>
                    </div>
                </div>
                <div className="box-section">
                        <div className="mini-box2-img">
                            <img src={greenimg} alt="" />
                        </div>
                        <div className="title-box">
                            <h3>AIR JORDAN | <span className="green">GREEN</span></h3>
                        </div>
                </div>
                <div className="box-section">
                    <div className="mini-box3-img">
                        <img src={Purpleimg} alt="" />
                    </div>
                    <div className="title-box">
                        <h3>AIR JORDAN | <span className="purple">PURPLE</span></h3>
                    </div>
                </div>
                <div className="box-section">
                    <div className="mini-box4-img">
                        <img src={Pink} alt="" />
                    </div>
                    <div className="title-box">
                        <h3>AIR JORDAN | <span className="pink">PINK</span></h3>
                    </div>
                </div>
            </div>
        </div>
    )
}