import React from 'react'

const PromoBanner = () => {
  return (
    <section className='section__container banner__container'>
        <div className='banner__card'>
            <span>
            <i className="ri-truck-fill"></i>
            </span>
            <h4>Free Delivery</h4>
            <p>Offers convenience and the ability to shop from anywhere, anytime! </p>

        </div>
        <div className='banner__card'>
            <span>
            <i className="ri-exchange-dollar-fill"></i>
            </span>
            <h4>100% Money Back Guaranty</h4>
            <p>Give us some feedback to improve our service</p>

        </div>
        <div className='banner__card'>
            <span>
            <i className="ri-user-voice-fill"></i>
            </span>
            <h4>Strong Support</h4>
            <p>Offer Users to donate or sell items to us.</p>

        </div>
    </section>
  )
}

export default PromoBanner