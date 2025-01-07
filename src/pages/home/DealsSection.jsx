import React from 'react'
import dealsImg from "../../assets/deals.jpg"
import { Link } from 'react-router-dom'

const DealsSection = () => {
  return (
    <section className='section__container deals__container'>
      <div className='deals__image'>
        <img src={dealsImg} alt=''/>
      </div>

      <div className='deals__content'>
        <h5>Donate Now, Make a Difference</h5>
        <h4>Donation</h4>
        <p>Every piece of clothing tells a story—let it continue with someone who truly needs it.</p>

        <div className='deals__countdown flex-wrap'>
          {/* <div className='deals__countdown__card'>
            <h4>Basic</h4>
            <Link to="/rules">
              <p>Rules</p>
            </Link>
          </div> */}
          {/* <div className='deals__countdown__card'>
            <h4>Address</h4>
            <Link to="/location">
              
            </Link>
          </div> */}
          <div className='deals__countdown__card'>
            
            <a href="https://forms.gle/LoEwxZ9NVdT4JdjU6" target="_blank" rel="noopener noreferrer">
              <button className='bg-primary-dark'>Donate Now</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}


export default DealsSection
