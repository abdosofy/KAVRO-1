function Footer() {
return (
    <footer className="footer">
    <div className="footer-top">
        <div className="footer-brand">
        <h1>KAVRO<span>.</span></h1>
        <p>STEP INTO YOUR STYLE.</p>
        <div className="footer-social">
            <a href="#">INSTAGRAM</a>
            <a href="#">FACEBOOK</a>
            <a href="#">TIKTOK</a>
        </div>
        </div>

        <div className="footer-links">
        <div>
            <h3>EXPLORE</h3>
            <a href="/">Home</a>
            <a href="/products">Shop All</a>
            <a href="#">New Arrivals</a>
            <a href="#">Collections</a>
        </div>

        <div>
            <h3>SUPPORT</h3>
            <a href="#">Contact Us</a>
            <a href="#">Shipping</a>
            <a href="#">Returns</a>
            <a href="#">FAQs</a>
        </div>
        </div>

        <div className="footer-newsletter">
        <h3>STAY IN THE LOOP</h3>
        <p>Get updates on new drops and exclusive releases.</p>
        <form onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder="Your email address" />
            <button type="submit">JOIN ↗</button>
        </form>
        </div>
    </div>

    <div className="footer-bottom">
        <span>© 2026 KAVRO. ALL RIGHTS RESERVED.</span>
        <span>BUILT FOR EVERY STEP.</span>
        <a href="#">BACK TO TOP ↑</a>
    </div>
    </footer>
);
}

export default Footer;