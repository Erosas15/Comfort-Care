import React from 'react';
import { useState } from 'react';
import Header from '../../Components/Header/Header';
import Footer from '../../Components/Footer/Footer';
import Photo1 from '../../Photos/Photo-1.jpg';
import './HomePage.css'

function HomePage() {
  const [activeSection, setActiveSection] = useState(null);

  const handleSectionClick = (index) => {
    setActiveSection(activeSection === index ? null : index);
  };


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


        <section className='featured-content-section'>
          <div className='featured-text'>
            <h2>What is an Independent Living Home?</h2>

            <ul>

              <li onClick={() => handleSectionClick(0)}>Housing Designed for Seniors:</li>
              {activeSection === 0 && (
                <ul>
                  <li>
                    These are often age-restricted (usually for individuals aged 55 or older) housing facilities like
                    apartments, townhouses, or even single-family homes. These residences are designed with the needs of
                    older adults in mind, often featuring user-friendly, accessible designs like single-level living,
                    no-step entries, and wider doorways.
                  </li>
                </ul>
              )}

              <li onClick={() => handleSectionClick(1)}>Maintenance-Free Living:</li>
              {activeSection === 1 && (
                  <ul>
                    <li>
                    Independent living facilities typically handle all maintenance tasks, including lawn care,
                    housekeeping, and repairs. This allows residents to live without the burden of maintaining a home,
                    which can be physically demanding and time-consuming.
                    </li>
                  </ul>
              )}

              <li onClick={() => handleSectionClick(2)}>Community and Social Activities:</li>
              {activeSection === 2 && (
                <ul>
                  <li>
                  These communities often offer a variety of social, recreational, and educational 
                  activities. This can include group outings, fitness classes, hobby clubs, and events. 
                  The goal is to foster a sense of community and provide opportunities for residents to
                  engage with each other

                  </li>
                </ul>
                
              )}

              <li onClick={() => handleSectionClick(3)}>Safety and Security:</li>
              {activeSection === 3 && (
                <ul>
                  <li>
                  Independent living communities are generally equipped with safety features such as 
                  emergency call systems, security personnel, and secure entrances to ensure the safety 
                  and well-being of residents.
                  </li>
                </ul>
              )}

              <li onClick={() => handleSectionClick(4)}>No Healthcare Services Provided:</li>
              {activeSection === 4 && (
                <ul>
                  <li>
                  Unlike assisted living or nursing homes, independent living communities do not typically
                  provide medical care or assistance with daily living activities. However, some may offer
                  access to healthcare services if needed.
                  </li>
                </ul>
              )}

              <li onClick={()=> handleSectionClick(5)}>Independence and Self-Sufficiency:</li>
              {activeSection === 5 && (
                <ul>
                  <li>
                  Residents in independent living are usually active and capable of managing their day-to-day 
                  lives without assistance. They have the freedom to come and go as they please and maintain 
                  their independence.
                  </li>
                </ul>
              )}

              <li onClick={()=> handleSectionClick(6)}>Amenities and Services:</li>
              {activeSection === 6 && (
                <ul>
                  <li>
                  Many independent living communities offer amenities like dining services, transportation,
                  laundry services, and more. These amenities are designed to make life more convenient and
                  enjoyable for residents.
                  </li>
                </ul>

              )}

              <li onClick={() => handleSectionClick(7)}>Community Atmosphere:</li>
              {activeSection === 7 && (
                <ul>
                  <li>
                  These environments often emphasize community and social interaction, providing a 
                  supportive social network for seniors.
                  </li>
                </ul>
              )}
        
            </ul>
          </div>
        </section>
      </div>
      <Footer/>
    </div>
  );
}

export default HomePage;