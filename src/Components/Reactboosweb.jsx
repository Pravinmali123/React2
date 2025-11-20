import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Dropdown from 'react-bootstrap/Dropdown';
import Image from 'react-bootstrap/Image';
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { BsBoxArrowUp , BsTwitter  } from "react-icons/bs";
import { FaInstagram, FaFacebook, FaImage} from "react-icons/fa6";
import { LuCircleParking } from "react-icons/lu";
import { FaRunning } from "react-icons/fa";
import { AiOutlineMenuFold } from "react-icons/ai";
function Web() {
  return (
    <>
      <Navbar fixed="top" expand="lg" bg="info" variant="dark" className='navbar1'>
        <Container>
          <Dropdown>
            <Dropdown.Toggle as="span" id="dropdown-custom-components">
       <AiOutlineMenuFold size={"27"}/>
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Header>Dropdown header</Dropdown.Header>
              <Dropdown.Item href="#action/1">Action</Dropdown.Item>
              <Dropdown.Item href="#action/2">Another action</Dropdown.Item>
              <Dropdown.Item href="#action/3">Something else here</Dropdown.Item>
              <Dropdown.Divider />
              <Dropdown.Item href="#action/4">Separated link</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Brand href="#home" className='fs-5 p-2 ms-5 position-absolute'>Now Ui Kit</Navbar.Brand>
          <Nav>
          
          <Nav.Item>
            <Button
              variant="info"
              href=""
              target="_blank"
              className="btn-neutral bg-white btn-round"
            >

              <span><BsBoxArrowUp />Upgrade to PRO</span>
            </Button>
          </Nav.Item>

          {/* Back to Kit */}
          <Nav.Item>
            <Nav.Link href="#/index" className='Color'>Back to Kit</Nav.Link>
          </Nav.Item>

          {/* Issues */}
          <Nav.Item>
            <Nav.Link
              href=""
              target="_blank"
            className='Color'
            >
              Have an issue?
            </Nav.Link>
          </Nav.Item>

          {/* Twitter */}
          <Nav.Item>
            <Nav.Link
              href=""
              target="_blank"
              id="twitter-tooltip"
            >
 <BsTwitter size={"30"}/>
              <span className="d-lg-none d-xl-none">Twitter</span>
            </Nav.Link>
          </Nav.Item>

          {/* Facebook */}
          <Nav.Item>
            <Nav.Link
              href=""
              target="_blank"
              id="facebook-tooltip"
            >
  <FaFacebook size={"30"}/>
              <span className="d-lg-none d-xl-none">Facebook</span>
            </Nav.Link>
          </Nav.Item>

          {/* Instagram */}
          <Nav.Item>
            <Nav.Link
              href=""
              target="_blank"
              id="instagram-tooltip"
            >
 <FaInstagram style={{fontSize: "30px"}}/>
              <span className="d-lg-none d-xl-none">Instagram</span>
            </Nav.Link>
          </Nav.Item>
        </Nav>
          </Container>
      </Navbar>

      {/* Background Image */}
      <Image
        src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg5.d60a95eb.jpg" className='image3'
        rounded
      />

          <Container className="text-center position-absolute top-50 start-50 translate-middle mb-5">
      {/* Photo */}
      <Row className="mb-5 justify-content-center">
        <Col xs="auto">
          <Image
            src="https://demos.creative-tim.com/now-ui-kit-react/static/media/ryan.ca24473b.jpg"
            roundedCircle
            className="image1"
            width={150}
            height={150}
          />
        </Col>
      </Row>

      {/* Title & Category */}
      <Row>
        <Col>
          <h3 className="title">Ryan Scheinder</h3>
          <p className="category mb-4">Photographer</p>
        </Col>
      </Row>

      {/* Social Info */}
      <Row className="justify-content-center gap-4">
        <Col xs="auto" className="social-description">
          <h2>26</h2>
          <p>Comments</p>
        </Col>
        <Col xs="auto" className="social-description">
          <h2>26</h2>
          <p>Comments</p>
        </Col>
        <Col xs="auto" className="social-description">
          <h2>48</h2>
          <p>Bookmarks</p>
        </Col>
      </Row>
    </Container>

          <section>
            <Container className="container text-center mt-5">
            <Row>
            <Col>
                          <h3 className="title1 mb-4">About Me</h3>
                          <p className="description">An artist of considerable range, Ryan — the name taken by Melbourne-raised, Brooklyn-based Nick Murphy — writes, performs and records all of his own music, giving it a warm, intimate feel with a solid groove structure. An artist of considerable range.</p>
            </Col>
            </Row>
            </Container>
          </section>



              <section>
      <Container className="text-center mt-5 mb-5 ">
        <h3 className="title1 mb-4">My Portfolio</h3>

        {/* Nav Pills */}
        <Nav
          variant="pills"
          
          className="justify-content-center "
  
        >
          <Nav.Item className='bg-info rounded '>
            <Nav.Link>
              <FaImage size={25} color='white' />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <LuCircleParking size={25} />
            </Nav.Link>
          </Nav.Item>

          <Nav.Item>
            <Nav.Link>
              <FaRunning size={25} />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Container>
    </section>


    <Container className='m-5'>
      <Row className='g-5'>
        <Col xs={6} md={6}>
          <Image src="https://demos.creative-tim.com/now-ui-kit-react/static/media/bg1.71a28027.jpg" rounded className='image'/>
        </Col>
        <Col xs={6} md={6}>
          <Image src="	https://demos.creative-tim.com/now-ui-kit-react/static/media/bg3.850b8088.jpg" rounded className='image'/>
        </Col>
        <Col xs={6} md={6}>
          <Image src="	https://demos.creative-tim.com/now-ui-kit-react/static/media/bg8.2c89438b.jpg" rounded className='image'/>
        </Col>
         <Col xs={6} md={6}>
          <Image src="		https://demos.creative-tim.com/now-ui-kit-react/static/media/bg7.6249276d.jpg" rounded className='image'/>
        </Col>
      </Row>
    </Container>

    <Navbar bg="dark" variant="dark" className="justify-content-center">
  <span className="text-white">© 2025 My Website</span>
</Navbar>

          
    </>
  );
}

export default Web;
