import React from 'react';
import Header from '../Header/Header';
import Photo1 from '../../Photos/Photo-1.jpg';
import Photo2 from '../../Photos/Photo-2.jpg';
import Photo3 from '../../Photos/Photo-3.jpg';
import './HomePage.css'

function HomePage() {
  return (
    <div className='home-page'>
      <Header/>
    
      <div className='home-page-content'>

        <section className='hero-section'>
          <div className='hero-text'>
            <h1> Comfort Care LLC 24/7</h1>
            <p>Comfortable, Affordable Senior Living Spaces</p>
            <p>Your New Home Awaits!</p>
          </div>

          <div className='hero-image'>
            <img src={Photo1} alt='Senior Living Spaces' />
          </div>
        </section>

        <section className='mission-statement'>
          
          <div className='mission-image'>
            <img src={Photo2} alt='mission'/>
          </div>

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


        <section className='featured-content-section'>
          <div className='featured-text'>
            <h2>What is an Independent Living Home?</h2>
            <p>
              These are often age-restricted (usually for individuals aged 55 or
              older) housing facilities like apartments, townhouses, or even
              single-family homes.
            </p>

            <h2>What's Provided?</h2>
            <ul>
              <li>Utilities</li>
              <li>Furnished home with appliances</li>
              <li>Beds</li>
              <li>Assistance for:</li>
              <ul>
                <li>Transportation to public services</li>
                <li>Obtaining a caregiver</li>
              </ul>
            </ul>
          </div>

          <div className='featured-image'>
            <img src={Photo3} alt='featured'/>
          </div>

        </section>


      </div>
    </div>
  );
}

export default HomePage;
