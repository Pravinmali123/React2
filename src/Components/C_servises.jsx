import { Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css"; // Required
import { FaRegClone ,FaRegSnowflake ,  FaPlug , FaDesktop,FaTrophy ,FaLifeRing} from "react-icons/fa";
// import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

// import "bootstrap-icons/font/bootstrap-icons.css"; // For icons
// import Layout from "./C_layout";
function Servises() {
    return (
        // <Layout>
         <Container>
            <div className="section" id="services" style={{ marginTop: "120px"}}>
          <h2>OUR SERVICES</h2>
          <div className="subtitle">- services we provide -</div>
        </div>
       <Row>
        <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger">
             <FaRegClone className="itage" />
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
               Responsive Design
              </a>
            </h4>
            <p className="description text-muted mt-2">
         Responsive design ensures your website looks great and functions seamlessly on any device. It adapts to screens of all sizes, delivering accessibility, usability, and an engaging user experience.
            </p>
          </div>
        </Col>

        <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger">
             <FaRegSnowflake className="itage" />
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
              Creative Design
              </a>
            </h4>
            <p className="description text-muted mt-2">
             Creative design transforms ideas into visually striking experiences. It blends innovation, aesthetics, and strategy to capture attention, express identity, and deliver messages that inspire and connect effectively.
            </p>
          </div>
        </Col>

             <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger">
              <FaPlug className="itage" />
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
              SEO Optimized
              </a>
            </h4>
            <p className="description text-muted mt-2">
            SEO optimized design boosts your website’s visibility, driving more traffic and engagement. It enhances search rankings, ensures faster performance, and helps your business reach the right audience effectively.
            </p>
          </div>
        </Col>

             <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger">
              < FaDesktop className="itage"/>
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
              Retina Ready
              </a>
            </h4>
            <p className="description text-muted mt-2">
          Retina ready design delivers crisp, high-resolution visuals on modern devices. It enhances clarity, sharpness, and detail, ensuring your website looks stunning and professional on every screen.
            </p>
          </div>
        </Col>

             <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger">
             <FaTrophy  className="itage" />
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
              Brower Compatibility
              </a>
            </h4>
            <p className="description text-muted mt-2">
           Browser compatibility ensures your website works seamlessly across all major browsers. It guarantees consistent performance, design, and functionality, providing every visitor with a smooth, reliable, and professional experience.
            </p>
          </div>
        </Col>

             <Col lg={4} md={6} className="text-left mb-4">
          <div className="icon-box">
            <div className="icon mb-3 fs-2 ms-2 text-danger group-hover">
              <FaLifeRing  className="itage" />
            </div>
            <h4 className="title">
              <a href="/" className="text-decoration-none text-dark">
             Customer Support
              </a>
            </h4>
            <p className="description text-muted mt-2">
            Customer support provides timely, helpful assistance to ensure satisfaction and trust. Our dedicated team resolves issues, answers questions, and guides users, creating a positive, reliable experience.
            </p>
          </div>
        </Col>
      </Row>
</Container>
// </Layout>
        
                );
}
export default Servises;