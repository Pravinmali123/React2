import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap-icons/font/bootstrap-icons.css';

function Contact() {
  return (
    <section id="contact" className="contact-block">
      <Container fluid>
        <div className="title-holder">
          <h2>CONTACT US</h2>
          <div className="subtitle">- get connected with us -</div>
        </div>

        <div className="contact-info">
          <form action="/submit" method="post">
            <Row>
              <Col>
                <input type="text" placeholder="Enter Your Full Name" required />
              </Col>
              <Col>
                <input type="email" placeholder="Enter Your Email Address" required />
              </Col>
              <Col>
                <input type="number" placeholder="Enter Your Contact Number" required />
              </Col>
              <Col xs={12}>
                <textarea
                  rows="4"
                  placeholder="Enter Your Contact Message"
                  required
                  style={{ width: "100%" }}
                ></textarea>
              </Col>
            </Row>

            <div className="btn-holder">
              <button type="submit" className="btn1">
                SEND MESSAGE
              </button>
            </div>
          </form>
        </div>
      </Container>

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.9537353153167!3d-37.81627974202195!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf577d6fb4d6d8b0!2sFederation%20Square!5e0!3m2!1sen!2sin!4v1600000000000!5m2!1sen!2sin"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        title="Google Map"
        marginBottom="15px"
      ></iframe>

        <Container fluid className="icon1">
      <div className="cicon">
        <i className="bi bi-envelope-fill"></i>
        <span>hello@domain.com</span>
      </div>
      <div className="cicon">
        <i className="bi bi-telephone-fill"></i>
        <span>+1 000-000-0000</span>
      </div>
      <div className="cicon">
        <i className="bi bi-geo-alt-fill"></i>
        <span>London, United Kingdom</span>
      </div>
    </Container>

      <footer className="footer">
        <Container fluid>
          <Row>
            <Col md={12}>
             <div class="copyright">© 2022 Corporate. All Right Reserved.</div>
            </Col>
            <Col md={12} className="social-icon">
              <ul className="social-icons1">
                <li><a href="#"><i className="bi bi-facebook"></i></a></li>
                <li><a href="#"><i className="bi bi-twitter"></i></a></li>
                <li><a href="#"><i className="bi bi-instagram"></i></a></li>
              </ul>
            </Col>
            </Row>
            </Container>
        </footer>
    </section>
  );
}

export default Contact;
