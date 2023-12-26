import React from 'react';
import './AboutPage.css';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';


import Photo2 from '../../Photos/Photo-2.jpg';


const About = () => {
  return (

    <div className='about-page'>
      <Header/>
      
      <div className='about-page-content'>
        <section className='mission-statement'>
              
          <div className='mission-text'>
            <h2> Our Mission</h2>
            <p> Our mission at Comfort Care 24/7 is to provide a nurturing and 
              empowering environment for seniors, where independence is celebrated,
              and comfort is prioritized. We are dedicated to creating affordable, 
              secure living spaces that respect individuality and enhance well-being,
                offering a rich array of resources and activities around the clock. At 
                Comfort Care 24/7, every senior has the opportunity to live life on their 
                own terms, surrounded by care, support, and a community that truly values 
                them, ensuring that comfort and assistance are available at any hour, every day.
            </p>
          </div>
        </section>


        <section className='founders-section'>

          <div className='founder'>
            <div className='founder-image'>
              <img src={Photo2} alt='Founder 1'/>
            </div>
            <div className='founder-text'>
              <h2>John Villalobos</h2>
              <p>
                Your statement 
              </p>
            </div>
          </div>

          <div className='founder'>
            <div className='founder-image'>
              <img src={Photo2} alt='Founder 2'/>
            </div>
            <div className='founder-text'>
              <h2>2nd Villalobos brother</h2>
              <p>
                Your Statement 
              </p>
            </div>
          </div>
        </section>


      </div>


      <Footer/>

    </div>

  );
};

export default About;
