

export default function Contact() {
  return (
    <section className="contact-page">

      <div className="contact-header">
        <span>GET IN TOUCH</span>
        <h1>LET'S TALK<span>.</span></h1>
        <p>
          Have a question about our products or need help?
          We're here to help you.
        </p>
      </div>

      <div className="contact-container">

        <div className="contact-info">
          <h2>CONTACT INFORMATION</h2>
          <p>Feel free to reach out to us anytime.</p>

          <div className="info-item">
            <i className="fa-solid fa-envelope"></i>
            <div>
              <h4>EMAIL</h4>
              <span>support@nike.com</span>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-phone"></i>
            <div>
              <h4>PHONE</h4>
              <span>+20 100 000 0000</span>
            </div>
          </div>

          <div className="info-item">
            <i className="fa-solid fa-location-dot"></i>
            <div>
              <h4>LOCATION</h4>
              <span>Cairo, Egypt</span>
            </div>
          </div>

          <div className="contact-socials">
            <i className="fa-brands fa-instagram"></i>
            <i className="fa-brands fa-facebook-f"></i>
            <i className="fa-brands fa-x-twitter"></i>
          </div>
        </div>

        <form className="contact-form">
          <h2>SEND US A MESSAGE</h2>

          <div className="form-group">
            <label>YOUR NAME</label>
            <input type="text" placeholder="Enter your name" required />
          </div>

          <div className="form-group">
            <label>YOUR EMAIL</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          <div className="form-group">
            <label>SUBJECT</label>
            <input type="text" placeholder="What is this about?" />
          </div>

          <div className="form-group">
            <label>MESSAGE</label>
            <textarea placeholder="Write your message..." rows="5" required></textarea>
          </div>

          <button type="submit">
            SEND MESSAGE <i className="fa-solid fa-arrow-right"></i>
          </button>
        </form>

      </div>
    </section>
  );
}