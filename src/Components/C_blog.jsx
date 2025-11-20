import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
// import Layout from './C_layout';
function Blog() {
    return (
        // <Layout>
        <section id="blog" className="blog-block" style={{ marginTop: "70px"}}>
            <Container fluid>
                <div className="title-holder">
                    <h2>LATEST FROM BLOG</h2>
                    <div className="subtitle">- get our latest news from blog -</div>
                </div>
                <Row>
                    <Col md={4}>
                        <div className="blog-post">
                            <Image src={require('./blog1.jpg')} />
                            <p className='date'>15 Nov 2016</p>
                            <h3>Coffee Lovers</h3>
                            <p>For coffee lovers, every sip is more than a drink—it’s an experience. Rich aromas, bold flavors, and perfect brews create moments of comfort, energy, and pure enjoyment every day.</p>
                        <button className='btn'>READ MORE </button>
                </div>
                
                  </Col>

                        <Col md={4}>
                        <div className="blog-post">
                            <Image src={require('./blog2.jpg')} />
                            <p className='date'>10 Nov 2016</p>
                            <h3>Tips for UI Design</h3>
                            <p>Effective UI design combines clarity, simplicity, and aesthetics. Focus on intuitive navigation, consistent visuals, responsive layouts, and user-friendly interactions.</p>
                        <button className='btn'>READ MORE </button>
                </div>
                
                  </Col>


                        <Col md={4}>
                        <div className="blog-post">
                            <Image src={require('./blog3.jpg')} />
                            <p className='date'>7 Nov 2016</p>
                            <h3>Beautiful Day</h3>
                            <p>A beautiful day brings warmth, light, and positivity. It’s a chance to embrace joy, connect with nature, and appreciate life’s simple moments, leaving you refreshed and inspired.</p>
                        <button className='btn'>READ MORE </button>
                </div>
                
                  </Col>
                  </Row>
                  </Container>
    </section>
    // </Layout>
    );
}
export default Blog;