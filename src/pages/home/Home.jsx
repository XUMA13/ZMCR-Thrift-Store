import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import HeroSection from './HeroSection'
import TrendinProducts from '../shop/TrendinProducts'
import ProductCards from '../shop/ProductCards'
import DealsSection from './DealsSection'
import PromoBanner from './PromoBanner'
import Blogs from '../blogs/Blogs'

const Home = () => {
  return (
    <>
    <Banner/>
    <Categories/>
    <HeroSection/>
    <TrendinProducts/>
    <DealsSection/>
    <PromoBanner/>
    <Blogs/>
    </>
  )
}

export default Home