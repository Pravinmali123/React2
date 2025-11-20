import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
// import Layout from './C_layout';
import 'bootstrap/dist/css/bootstrap.min.css';

const heroData = [
  {
    id: 1,  
    image: require('./img-hero1.jpg'),
    title: 'The perfect design for your website',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.',
    link: 'https://www.google.com'
  },
  {
    id: 2,
    image: require('./img-hero2.jpg'),
    title: 'Start Your Future Financial Plan',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.',
    link: 'https://www.facebook.com'
  },
  {
    id: 3,
    image: require('./img-hero3.jpg'),
    title: 'Enjoy the Difference',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor.',
    link: 'https://www.twitter.com'
  }
];

function Home() {
  return (
    // <Layout>
      <section id="home" className="hero-block">
        <Carousel fade interval={3000} pause="hover">
          {heroData.map((hero) => (
            <Carousel.Item key={hero.id}>
              <img
                className="d-block w-100 hero-img"
                src={hero.image}
                alt={"slide " + hero.id}
              />
              <Carousel.Caption className="hero-caption">
                <h2 className="hero-title">{hero.title}</h2>
                <p className="hero-desc">{hero.description}</p>
                <a
                  className="bhero "
                  href={hero.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More <i className="fas fa-chevron-right"></i>
                </a>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

      </section>
    // {/* </Layout> */}
  );
}

export default Home;
