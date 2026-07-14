import "../styles/About.css";

function About() {
  return (
    <div className="about-page">

      <div className="about-container">

        <h1>About GK Mart</h1>

        <p className="about-intro">
          Welcome to GK Mart, your trusted online shopping destination for
          Mobiles, Laptops, Smart Watches and Accessories. We are committed
          to providing quality products at affordable prices with fast
          delivery and secure payments.
        </p>

        <div className="about-grid">

          <div className="about-card">
            <h2>🎯 Our Mission</h2>
            <p>
              To make online shopping simple, affordable and enjoyable
              for every customer.
            </p>
          </div>

          <div className="about-card">
            <h2>🚚 Fast Delivery</h2>
            <p>
              We deliver products quickly across India with safe packaging
              and live order tracking.
            </p>
          </div>

          <div className="about-card">
            <h2>🛡️ Secure Payment</h2>
            <p>
              Multiple payment methods with complete security for every
              transaction.
            </p>
          </div>

          <div className="about-card">
            <h2>⭐ Quality Products</h2>
            <p>
              We carefully choose branded and genuine products to ensure
              customer satisfaction.
            </p>
          </div>

        </div>

      </div>

    </div>
  );
}

export default About;